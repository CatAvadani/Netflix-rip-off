// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import SearchMovieProvider from "./context/SearchMovieContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <SearchMovieProvider>{children}</SearchMovieProvider>
    </ChakraProvider>
  );
}
