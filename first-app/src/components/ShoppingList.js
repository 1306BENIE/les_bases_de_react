import React from "react";
const plantList = [
  'monstera',
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
]

const ShoppingList = () => {
  const plantItems = plantList.map((plant, index) => (
    <li key={`${plant}-${index}`}>{plant}</li>))  
  return (
    <ul>
      {plantItems}
    </ul>
  )
}

export default ShoppingList