import Naveber from "@/components/Naveber/Naveber";
import { getUser } from "@/lib/session";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isp Management system",
  description: "This is a softwer for Inter net service providers. They can manage there users in hear",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const User = await getUser();
  if (( User as { userType:string }).userType !== "user") {
    redirect("/")
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-svh`}
      >
        <div className="min-h-svh max-w-6xl mx-auto">
          <Naveber/>
          {children}
        </div>
      </body>
    </html>
  );
}
