import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-white flex justify-center items-center gap-20 max-[680px]:gap-9  z-50 w-[100%] mt-0">
      <div>
        <img src="logo.png" width={100} />
      </div>
      <div>
        <h1 className=" text-5xl max-[680px]:text-2xl font-semibold">
          FICHES DES JOUEURS
        </h1>
      </div>
    </div>
  );
};
