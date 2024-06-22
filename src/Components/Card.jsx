import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, username, email, phone, website, showDetails=false }) => {
  const addFav = () => {
    // Aquí irá la lógica para agregar la Card en el localStorage
    const favItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const newItem = { id, name, username };
    favItems.push(newItem);
    localStorage.setItem("favoriteItems", JSON.stringify(favItems));
    alert(`Item ${name} added to favorites!`);
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link>
        <h4>{id}</h4>
        <h4>{name}</h4>
        <h4>{username}</h4>
      </Link>
      {showDetails && (
        <>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Website: {website}</p>
        </>
      )}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
