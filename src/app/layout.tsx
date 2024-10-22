import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/stores/theme";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatePro",
  description:
    "CreatePro stands for Create Professionally, symbolizing a platform where content creators can craft their work with professionalism and access the tools they need to thrive.",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader
          color="#a855f7"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
};

export default RootLayout;
