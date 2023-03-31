import { useState } from "react";
import { Card } from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Single } from "./components/Single";
import { Pres } from "./components/Pres";
import { Navbar } from "./components/Navbar";

function App() {
  const [singleData, setSingleData] = useState();
  const data = [
    {
      profile: "1r.png",
      prenom: "Apolinaire",
      postnom: "Sebushari",
      nom: "sebutose",
      dateNaiss: "'24/02/2011",
      age: "12",
      taille: "1,42",
      post: "2",
    },
    {
      profile: "2r.png",
      prenom: "christian",
      postnom: "Miujiza",
      nom: "bâti",
      dateNaiss: "18/09/2011",
      age: "12",
      taille: "1,48",
      post: "1",
    },
    {
      profile: "3r.png",
      prenom: "faradja",
      postnom: "Sefu",
      nom: "ongala",
      dateNaiss: "18/02/2011",
      age: "12",
      taille: "1,35",
      post: "8",
    },
    {
      profile: "4r.png",
      prenom: "serge",
      postnom: "Kasikila",
      nom: "kyembwa",
      dateNaiss: "26/10/2011",
      age: "12",
      taille: "1,53",
      post: "1",
    },
    {
      profile: "5r.png",
      prenom: "Moise",
      postnom: "Kiofwe",
      nom: "kasongo",
      dateNaiss: "5/05/2011",
      age: "12",
      taille: "1,56",
      post: "8",
    },
    {
      profile: "6r.png",
      prenom: "Gloire",
      postnom: "Batundi",
      nom: "bwenge",
      dateNaiss: "11/10/2010",
      age: "12",
      taille: "1,58",
      post: "6",
    },
    {
      profile: "7r.png",
      prenom: "Joseph ",
      postnom: "Shakuru",
      nom: "mishiki",
      dateNaiss: "07/07/2011",
      age: "12",
      taille: "1,53",
      post: "11",
    },
    {
      profile: "8r.png",
      prenom: "Eddy ",
      postnom: "gakuru",
      nom: " muhindo",
      dateNaiss: "24/02/2010",
      age: "12",
      taille: "1,48",
      post: "1",
    },
    {
      profile: "9r.png",
      prenom: "  Dominique ",
      postnom: "Niwa",
      nom: "musombo",
      dateNaiss: "7/06/2010",
      age: "12",
      taille: "1,63",
      post: "6",
    },
    {
      profile: "10r.png",
      prenom: "Gentil",
      postnom: "Birindwa",
      nom: "shombo ",
      dateNaiss: "23/11/2010",
      age: "12",
      taille: "1,62",
      post: "4",
    },
    {
      profile: "11r.png",
      prenom: "Gerome ",
      postnom: "Shabani",
      nom: "sambo",
      dateNaiss: "'24/02/2010",
      age: "12",
      taille: "1,57",
      post: "9",
    },
    {
      profile: "12r.png",
      prenom: "Ali  ",
      postnom: "Daniel",
      nom: "bisimwa",
      dateNaiss: "15/05/2010",
      age: "12",
      taille: "1,67",
      post: "9",
    },
    {
      profile: "13r.png",
      prenom: "Jean",
      postnom: "kiyana",
      nom: "chiringwi",
      dateNaiss: "2/02/2010",
      age: "12",
      taille: "1,57",
      post: "5",
    },
    {
      profile: "14r.png",
      prenom: "Olivier ",
      postnom: "Mumbere",
      nom: "mutongo",
      dateNaiss: "29/09/2010",
      age: "12",
      taille: "1,40",
      post: "8",
    },
    {
      profile: "15r.png",
      prenom: "Saidi",
      postnom: "wetemwami",
      nom: "mishasho",
      dateNaiss: "08/02/2010",
      age: "12",
      taille: "1,64",
      post: "1",
    },
    {
      profile: "16r.png",
      prenom: "Junior",
      postnom: "Kinkela",
      nom: "wetemwami",
      dateNaiss: "8/03/2010",
      age: "12",
      taille: "1,58",
      post: "1",
    },
    {
      profile: "17r.png",
      prenom: " Ryan ",
      postnom: "Alinda",
      nom: "mandro",
      dateNaiss: "02/01/2010",
      age: "12",
      taille: "1,46",
      post: "11",
    },
    {
      profile: "18r.png",
      prenom: "Eliezer ",
      postnom: "Wakenge",
      nom: " lwango",
      dateNaiss: "28/06/2010",
      age: "12",
      taille: "1,47",
      post: "3",
    },
    {
      profile: "19r.png",
      prenom: "Stani",
      postnom: "Kyembwa",
      nom: " witanene",
      dateNaiss: "10/04/2010",
      age: "12",
      taille: "1,57",
      post: "7",
    },
    {
      profile: "20r.png",
      prenom: "Dieu si",
      postnom: "Birindwa",
      nom: "shombo",
      dateNaiss: "04/09/2010",
      age: "12",
      taille: "1,50",
      post: "2",
    },
    {
      profile: "21r.png",
      prenom: "Adolphe",
      postnom: "kitwana",
      nom: "ngulu",
      dateNaiss: "10/10/2010",
      age: "12",
      taille: "1,54",
      post: "4",
    },
    {
      profile: "22r.png",
      prenom: "Feruzi ",
      postnom: "Miradi",
      nom: "balezi",
      dateNaiss: "14/02/2010",
      age: "12",
      taille: "1,60",
      post: "4",
    },
    {
      profile: "23r.png",
      prenom: "Valentin",
      postnom: "musafiri",
      nom: "mbura",
      dateNaiss: "10/01/2010",
      age: "12",
      taille: "1,52",
      post: "2",
    },
    {
      profile: "24r.png",
      prenom: " Paul ",
      postnom: "Amzati",
      nom: "asani",
      dateNaiss: "10/12/2010",
      age: "12",
      taille: "1,58",
      post: "1",
    },

    // {
    //   profile: "25r.png",
    //   prenom: "Apolinaire",
    //   postnom: "Sebushari",
    //   nom: "sebutose",
    //   dateNaiss: "'24/02/2010",
    //   age: "12",
    //   taille: "1,42",
    //   post: "2",
    // },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={<Pres data={data} setSingleData={setSingleData} />}
        />
        <Route
          path="/single"
          element={
            singleData ? (
              <Single data={singleData} />
            ) : (
              <Pres data={data} setSingleData={setSingleData} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
