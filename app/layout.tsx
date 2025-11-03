import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medicina de Precisão | Evento Exclusivo para 50 Médicos - 20 e 21 Nov 2025',
  description: 'Transforme sua carreira médica em 2 dias de imersão exclusiva em Alphaville/SP. Aprenda a estruturar seu consultório como empresa, dominar tecnologias avançadas e escalar sem depender de plantões. Apenas 50 ingressos disponíveis.',
  keywords: ['medicina de precisão', 'evento médico', 'carreira médica', 'consultório médico', 'medicina avançada', 'cannabis medicinal', 'laser médico', 'alphaville', 'educação médica', 'CONAES Brasil'],
  authors: [{ name: 'Medicina de Precisão - CONAES Brasil' }],
  creator: 'CONAES Brasil',
  publisher: 'Medicina de Precisão',
  openGraph: {
    title: 'Medicina de Precisão | Imersão Exclusiva 20-21 Nov 2025',
    description: 'Evento exclusivo para 50 médicos em Alphaville/SP. Transforme sua carreira médica com visão de empresa, tecnologias avançadas e escalabilidade sem plantões.',
    url: 'https://medicinadeprecisao.com.br',
    siteName: 'Medicina de Precisão',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/hero-background.png',
        width: 1200,
        height: 630,
        alt: 'Medicina de Precisão - Evento 20 e 21 de Novembro 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicina de Precisão | Evento Exclusivo para Médicos',
    description: 'Transforme sua carreira médica em 2 dias de imersão. 50 ingressos exclusivos - 20 e 21 Nov 2025 em Alphaville/SP',
    images: ['/hero-background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://medicinadeprecisao.com.br'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="facebook-pixel-base-1">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1524985371444661');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="facebook-pixel-base-2">
          {`
            fbq('init', '407392880817743');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="facebook-pixel-base-3">
          {`
            fbq('init', '776548228670980');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
