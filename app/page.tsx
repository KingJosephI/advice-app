"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Advice from "./components/Advice";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-darkGrayishBlue h-[100vh] flex md:items-center pt-20 md:pt-0 justify-center px-4 ">
        <Advice />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
