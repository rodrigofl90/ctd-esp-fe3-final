import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context/Context";
import DeleteFavs from "../Components/DeleteFavs";

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);
  const { state } = useContext(AppContext);

  useEffect(() => {
    // Obtener los dentistas favoritos del localStorage al montar el componente
    const favItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    setFavoriteDentists(favItems);
  }, []);

  const handleItemsChange = (updatedItems) => {
    setFavoriteDentists(updatedItems);
    localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${state.theme === 'light' ? 'light' : 'dark'}`}>
        {/* Renderiza el componente DeleteFavs para manejar la selección y eliminación */}
        <DeleteFavs items={favoriteDentists} onItemsChange={handleItemsChange} />
      </div>
    </>
  );
};

export default Favs;


