"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Advice from "./components/Advice";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-darkGrayishBlue h-[100vh] flex flex-col items-center  pt-20 md:pt-0 md:justify-center px-4 ">
        <div className="text-lightCyan text-xl mb-12 text-center">
          <h1>Miendz 💖,</h1>
          <p>This is for you !</p>
        </div>

        <Advice />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
