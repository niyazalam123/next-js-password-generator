import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledJsxRegistry from "@/app/registry";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random password generator',
  description: 'Generate random password,password length range from 1 to 18 and we will suggest you that password is strong or not',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry><div className='container'>{children}</div></StyledJsxRegistry>
      </body>
    </html>
  )
}
