import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/navigation";
import MobileNavigation from "./_components/mobilenavigation";
import { NavigationProvider } from "./_contexts/navigationcontext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Space Tourism Website",
    description: "Website for Space Tourism",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavigationProvider>
                <header className="">
                    <Navigation />
                </header>
                <MobileNavigation />
                </NavigationProvider>
                <main className="">{children}</main>
            </body>
        </html>
    );
}
