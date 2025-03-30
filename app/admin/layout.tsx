import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NaveBar from "@/components/admin/NaveBar";
import SideBar from "@/components/admin/SideBar";
import { getUser } from "@/lib/session";
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
  title: "Amin page of the softwer",
  description: "Manage you softwer from hear",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const User = await getUser();
  if (User.userType != "admin") {
      if (User.userType == "user") {
        redirect("/user")
      }else{
        redirect("/")
      }
  }
     
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-svh`}
      >
        <div className="relative w-full h-svh">
            <NaveBar/>
            <SideBar/>
            <div className='w-full h-full overflow-y-auto pt-[55px] pl-[80px] lg:pl-[210px]'>
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}
