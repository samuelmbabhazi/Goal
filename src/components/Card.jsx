import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Card = ({ data, setSingleData }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        setSingleData(data);
        navigate("/single");
      }}
      className="relative cursor-pointer from-[#ff000096] to-slate-950 via-[blue] bg-gradient-to-t shadow-lg grid h-[20rem] mt-6 w-full max-w-[16rem] flex-col items-end justify-center overflow-hidden rounded-lg  bg-clip-border text-center text-gray-700"
    >
      <div
        className="absolute inset-0 m-0 h-full w-full overflow-hidden transition duration-300 ease-in-out hover:scale-110 rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
        style={{ backgroundImage: `url(${data?.profile})` }}
      >
        <div className=" absolute inset-0 h-full w-full bg-gradient-to-t from-[#000000dd]  "></div>
      </div>
      <div className="absolute text-white py-3 text-center  hover:opacity-100 cursor-pointer bg-[#0000006e] w-[100%]">
        <h1 className=" font-bold text-lg">
          <span>{data?.post} </span>
          <span className=" font-thin">{data?.prenom}</span> {data?.postnom}
        </h1>
        <span>{data?.position}</span>
      </div>
    </div>
  );
};
