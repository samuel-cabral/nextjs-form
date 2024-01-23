'use client'

import { ThemeProvider } from '@mui/material'

import { theme } from '@/styles/themes/default'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
