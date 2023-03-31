import React from "react";
import { Card } from "./Card";

export const Pres = ({ data, setSingleData }) => {
  return (
    <div className="App bg-white shadow-xl w-[90%] m-auto mt-14 rounded-2xl py-6 flex flex-wrap gap-6 justify-center items-center">
      {data?.map((item, index) => (
        <Card data={item} key={index} setSingleData={setSingleData} />
      ))}
    </div>
  );
};
