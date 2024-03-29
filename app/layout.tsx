import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Link from 'next/link'
import {MdOutlineCopyright} from "react-icons/md"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <main>
        <Nav/>
      </main>
      <footer className="bg-slate-50 px-2 lg:px-40 py-10 w-full">
          <div className="mb-12">
            <span>Check our project on Devpost:</span>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-row">
              <div className="flex flex-row gap-x-2">
                <Link
                  href=""
                  className="border-b-2 border-transparent hover:border-black transition-all duration-500"
                >
                  About
                </Link>
                {/* {"  |  "}
                <Link
                  href=""
                  className="border-b-2 border-transparent hover:border-black transition-all duration-500"
                >
                  Terms of Use
                </Link> */}
                {"   |   "}
                <Link
                  href=""
                  className="border-b-2 border-transparent hover:border-black transition-all duration-500"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* <span className=" mt-10 lg:mt-0 lg:ml-auto flex flex-row items-center">
              <MdOutlineCopyright className="text-xl mr-1 lg:mx-1" />
              2023 Creative 
            </span> */}
          </div>
        </footer>
      </body>
    </html>
  )
}
