"use client";

import { ChakraProvider } from "@chakra-ui/react";
import MyListProvider from "./context/MyListContext";
import SearchMovieProvider from "./context/SearchMovieContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <MyListProvider>
        <SearchMovieProvider>{children}</SearchMovieProvider>
      </MyListProvider>
    </ChakraProvider>
  );
}
