import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingresso Confirmado! | Medicina de Precisão',
  description: 'Seu ingresso para o evento Medicina de Precisão está confirmado! 20 e 21 de Novembro 2025 em Alphaville/SP.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

