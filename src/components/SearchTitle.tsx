import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../utils/types';
import { useGetFilteredProductsQuery } from '../store/apiSlice';
import Spinner from './Spinner';

const SearchTitle = () => {
  const [searchValue, setSearchValue] = useState("");

  const body = {
    search: searchValue,
  };

  const { data: products = [], isLoading } = useGetFilteredProductsQuery(body);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  };
  
  return (
    <form className='flex items-center text-primary relative'>
      <input
        type="search"
        name="search"
        value={searchValue}
        onChange={handleSearch}
        className='w-[350px] max-md:w-full px-4 py-1.5 rounded-full mt-2 mb-4 outline-none'
        placeholder="Поиск товара по названию"
      />

      {searchValue && (
        <div className="absolute z-10 top-[85%] left-0 p-2.5 rounded-xl
         w-full max-h-[300px] overflow-y-auto flex flex-col gap-2 bg-white">
          {isLoading 
            ? <Spinner />
            : !products.length
            ? <p>Нет результатов</p>
            : products.map((product: Product) => (
              <Link
                key={product.id}
                onClick={() => setSearchValue("")}
                to={`/products/${product.id}`}
              >
                <div className="flex items-center gap-4 rounded-md hover:bg-slate-200">
                  <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="h-[70px] w-[70px] rounded-md"
                  />
                  <p className="text-lg">{product.title}</p>
                </div>
              </Link>
          ))}
        </div>
      )}
    </form>
  )
}

export default SearchTitle;
