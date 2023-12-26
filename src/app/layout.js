import Layout from "@/components/layout/Layout";
import "./globals.css";
import localFont from "next/font/local";
import NextProvider from "@/provider/NextProvider";

const alefba = localFont({
  src: "../../public/fonts/Far_Casablanca Heavy.ttf",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={alefba.className}>
        <NextProvider>
          <Layout>{children}</Layout>
        </NextProvider>
      </body>
    </html>
  );
}