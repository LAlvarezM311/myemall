import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard'


const TiendaVirtual = ({ productos }) => {

    const [busqueda, setBusqueda] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Nuestras Tiendas</h1>

            <div >
                <input
                    type="text"
                    placeholder="Buscar tiendas..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="buscador-input"
                />
            </div>

            <div className="productos-grid">
                {productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        
                    />

                )) : (
                    <p> No se encontraron registros </p>
                )}
            </div>

            
           
        </div>
    );
};

export default TiendaVirtual;