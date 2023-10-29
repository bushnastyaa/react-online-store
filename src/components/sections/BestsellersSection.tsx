import { useMemo } from 'react';
import ProductCard from '../../components/ProductCard';
import { useGetProductsQuery } from '../../store/apiSlice';
import { Product } from '../../utils/types';
import Spinner from '../Spinner';

const BestsellersSection = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();

  const bestsellers = useMemo(() => {
    return products?.filter((item: Product) => item.featured);
  }, [products]);

  if (isLoading) return (
    <div className="max-width padding-x"><Spinner /></div>
  );

  return (
    <div className="bg-beige font-poiret">
      <div className="max-width padding-x py-28">
        <h2 className="text-6xl uppercase mb-20 text-primary max-md:text-5xl">
          Бестселлеры
        </h2>
        <div className='flex flex-wrap gap-16 justify-between max-xl:justify-center'>
          {bestsellers.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestsellersSection;
