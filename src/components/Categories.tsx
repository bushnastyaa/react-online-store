import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useGetCategoryQuery } from '../store/apiSlice';
import { changeCategory } from '../store/productsSlice';
import { Categories } from '../utils/types';
import Spinner from './Spinner';

const SelectCategory = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetCategoryQuery();
  const [categories, setCategories] = useState('Все товары');

  const handleChange = (name: React.SetStateAction<string>) => {
    dispatch(changeCategory(name));
    setCategories(name);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className='flex items-center justify-start'>
      <div className='flex gap-4 flex-wrap'>
        {data?.map((item: Categories) => (
          <button
            key={uuidv4()}
            onClick={() => handleChange(item.name)}
            className="cursor-pointer px-4 py-2 bg-gray
            rounded-full text-white hover:scale-105">
            {item.visibleName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
