import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ producto }) => {
  const navigate = useNavigate();
  return (
    

    <div className="producto-card">
      
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="producto-imagen"
      />
      <h2 className="producto-nombre">{producto.nombre}</h2>
      <p className="producto-precio">{producto.resumen}</p>

      <button
        onClick={() => navigate(`/producto/${producto.id}`)}
        className="boton-vermas"
      >
        Visítanos
      </button>
    </div>
   
  );
};


export default ProductCard;