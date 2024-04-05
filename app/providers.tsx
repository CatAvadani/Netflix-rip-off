// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import SearchMovieProvider from "./context/SearchMovieContext";
import MyListProvider from "./context/MyListContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <MyListProvider>
        <SearchMovieProvider>{children}</SearchMovieProvider>
      </MyListProvider>
    </ChakraProvider>
  );
}
