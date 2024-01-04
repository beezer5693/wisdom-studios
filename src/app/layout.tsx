import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "../../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

const syne = localFont({
    src: [
        {
            path: "../../public/fonts/Syne-ExtraBold.ttf",
            weight: "800",
        },
        {
            path: "../../public/fonts/Syne-Bold.ttf",
            weight: "700",
        },
        {
            path: "../../public/fonts/Syne-SemiBold.ttf",
            weight: "600",
        },
        {
            path: "../../public/fonts/Syne-Medium.ttf",
            weight: "500",
        },
        {
            path: "../../public/fonts/Syne-Regular.ttf",
            weight: "400",
        },
    ],
    display: "swap",
    variable: "--font-syne",
})

export const metadata: Metadata = {
    title: "Wisdom Studios",
    description: "Building the next generation of digital media.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${syne.variable} scroll-smooth bg-gradient-to-r from-[#ff7caa] from-20% to-[#ffe1c2]`}
            >
                {children}
            </body>
        </html>
    )
}
