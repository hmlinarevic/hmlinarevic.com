import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hrvoje Mlinarevic - Web development, interactive apps",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={clsx(inter.className, "text-neutral-300 bg-[#1e1e1e] p-4 sm:p-0")}>
                {children}
            </body>
        </html>
    );
}
