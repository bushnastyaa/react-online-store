import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../utils/types';
import AddProductButton from './buttons/AddProductButton';

interface ProductProps {
  product: Product
};

const ProductCard = ({ product }: ProductProps) => {

  return (
    <div className="w-[310px] min-h-[300px] hover:scale-105
     duration-200 font-lato text-primary">
      <Link to={`/products/${product.id}`}>
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="object-cover w-[310px] h-[310px]" />
        <h2 className="mt-2 text-[20px]">{product.title}</h2>
        <h2 className="uppercase mb-4 text-[12px] text-gray">{product.category}</h2>
      </Link>
      <div className="border-t border-primary">
        <div className="mt-2 flex justify-between items-center">
          <h2>
            {product.price} <span>Р</span>
          </h2>
          <AddProductButton 
            product={product} 
            btnClass="flex items-center gap-5" 
            arrow={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
