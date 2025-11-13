"use client"

import { useSearchParams } from 'next/navigation'

export function useURLParams() {
  const searchParams = useSearchParams()

  const getURLWithParams = (baseURL: string) => {
    const params = searchParams.toString()
    if (!params) return baseURL

    const separator = baseURL.includes('?') ? '&' : '?'
    return `${baseURL}${separator}${params}`
  }

  return { getURLWithParams }
}
