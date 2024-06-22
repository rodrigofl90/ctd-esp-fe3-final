import React, { useState } from 'react';
import Card from "../Components/Card";

const DeleteFavs = ({ items, onItemsChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (username) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(username)) {
        return prevSelected.filter(item => item !== username);
      } else {
        return [...prevSelected, username];
      }
    });
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter(item => !selectedItems.includes(item.username));
    onItemsChange(updatedItems);
    setSelectedItems([]);
  };

  return (
    <div>
      <div className="card-grid">
        {items.map((item, index) => (
          <div key={index} className="card-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.username)}
              onChange={() => handleSelectItem(item.username)}
            />
            <Card
              name={item.name}
              username={item.username}
            />
          </div>
        ))}
      </div>
      {selectedItems.length > 0 && (
        <button onClick={handleDeleteSelected}>Delete</button>
      )}
    </div>
  );
};

export default DeleteFavs;
