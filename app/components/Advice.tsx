"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import iconDice from "../mockup/icon-dice.svg";
import dividerPattern from "../mockup/pattern-divider-desktop.svg";
import axios from "axios";
import { useState } from "react";

const fetchAdvice = async () => {
  const response = await axios.get("https://api.adviceslip.com/advice");
  const data = response.data;
  return data;
};
const Advice = () => {
  const { data, isLoading, isError } = useQuery(["advice"], fetchAdvice, {
    staleTime: 5000,
    refetchInterval: 5000,
  });
  const [isCopied, setIsCopied] = useState(false);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error while fetching data...</h1>;

  const copyToClipboard = () => {
    setIsCopied(false);
    navigator.clipboard.writeText(data.slip.advice);
    setIsCopied(true);
  };

  return (
    <article className="relative bg-grayishBlue rounded-[10px] w-[400px] min-h-[250px] px-12 py-6 text-center ">
      <h1 className="uppercase text-neonGreen font-bold text-[11px]">
        Advice #{data.slip.id}
      </h1>
      <p className="text-[#FFF] min-h-[150px] font-bold text-[20px] py-6">
        {isLoading ? <span>Loading...</span> : `"${data.slip.advice}"`}
      </p>
      <div className="mb-2">
        <Image src={dividerPattern} alt="" />
      </div>

      <div
        onClick={copyToClipboard}
        className="absolute -bottom-[27px] cursor-pointer left-[calc(50%-48px)] right-[calc(50%-48px)]  h-[60px] w-[60px] grid place-content-center rounded-full mx-auto bg-neonGreen shadow-lg hover:shadow-neonGreen/80"
      >
        <Image src={iconDice} alt="" />
      </div>
    </article>
  );
};

export default Advice;
