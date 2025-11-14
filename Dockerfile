# syntax=docker/dockerfile:1

# Base image used across stages
FROM node:20-alpine AS base
RUN npm install -g pnpm
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies in a dedicated layer
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the Next.js application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install only production dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the build output and necessary static assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000
CMD ["pnpm", "run", "start"]
