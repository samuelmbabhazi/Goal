import React from "react";

export const Single = ({ data }) => {
  return (
    <div className="flex  flex-col bg-white shadow-xl w-[90%] m-auto mt-14 rounded-2xl py-6  flex-wrap gap-20 px-6">
      <div className=" rounded-full w-40 h-40 to-[red] bg-gradient-to-t from-[#0808e0] via-[#4242eaf2] bg-white flex justify-center items-center">
        <img src={data?.profile} className="rounded-full" />
      </div>
      <div className="flex flex-col gap-4 font-thin capitalize">
        <span>Nom: {data?.nom}</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>PostNom: {data?.postnom}</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>PreNom: {data?.prenom}</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>Age: {data?.age} ans</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>Taille: {data?.taille} mètres</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>Poid: 46 kg</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>Poste: {data?.post}</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>Date de Naissance: {data?.dateNaiss}</span>
        <hr className="w-[40%] max-[680px]:w-[90%]" />
        <span>Nationalité: Congolaise</span>
      </div>
    </div>
  );
};
