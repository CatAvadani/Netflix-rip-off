import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Netflix Rip Off",
  description: "A movie app that is displaying movies similar to Netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body style={{ background: "black" }}>
        <Providers>
          <Header />
          <Box minH='100vh' as='main'>
            {children}{" "}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
