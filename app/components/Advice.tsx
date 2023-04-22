"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import iconDice from "../mockup/icon-dice.svg";
import dividerPattern from "../mockup/pattern-divider-desktop.svg";
import axios from "axios";

const fetchAdvice = async () => {
  const response = await axios.get("https://api.adviceslip.com/advice");
  const data = response.data;
  return data;
};
const Advice = () => {
  const { data, isLoading, isError } = useQuery(["advive"], fetchAdvice, {
    staleTime: 1000,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error while fetching data...</h1>;

  return (
    <article className="relative bg-grayishBlue rounded-[10px] w-[400px] h-[250px] px-12 py-6 text-center ">
      <h1 className="uppercase text-neonGreen font-bold text-[11px]">
        Advice #{data.slip.id}
      </h1>
      {/* 
      .fancy span:before,
.fancy span:after {
  content: "";
  position: absolute;
  height: 5px;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  top: 0;
  width: 600px;
}
.fancy span:before {
  right: 100%;
  margin-right: 15px;
}
.fancy span:after {
  left: 100%;
  margin-left: 15px;
}

      */}
      <p className="text-[#FFF] h-[150px] font-bold text-[20px] py-6">{`"${data.slip.advice}"`}</p>
      <div className="divider">
        <Image src={dividerPattern} alt="" />
      </div>
      <div className="absolute -bottom-[27px] cursor-pointer left-[calc(50%-48px)] right-[calc(50%-48px)]  h-[60px] w-[60px] grid place-content-center rounded-full mx-auto bg-neonGreen shadow-lg hover:shadow-neonGreen/80">
        <Image src={iconDice} alt="" />
      </div>
    </article>
  );
};

export default Advice;
