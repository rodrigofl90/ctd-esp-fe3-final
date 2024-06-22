import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/Context";
import Card from "../Components/Card"; 
import { themes } from '../Context/Context';
import { useContext } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
   const [dentist, setDentist] = useState({});

   const { id } = useParams();
   const navigate = useNavigate();
   const { state } = useContext(AppContext);
  
   const getDentist = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
     const data = await res.json();
     setDentist(data);
    } catch (error) {
      console.error("Error fetching dentist data:", error);
    }
   };
 
   useEffect(() => {
     getDentist();
   }, [id]);

   const currentTheme = state.theme === 'light' ? themes.light : themes.dark;

  return (
    <div className={currentTheme}>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Card name={dentist.name} 
      email={dentist.email} 
      phone={dentist.phone} 
      website={dentist.website}
      showDetails={true}/>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Detail
