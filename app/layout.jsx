import { Merriweather } from "@next/font/google";

import './globals.css'
import Header from './header'
import Footer from './footer'

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${merriweather.className} bg-[#FAFAF9]`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
