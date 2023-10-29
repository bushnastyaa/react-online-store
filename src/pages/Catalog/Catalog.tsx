import { useSelector } from 'react-redux';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import Spinner from '../../components/Spinner';
import { useGetFilteredProductsQuery } from '../../store/apiSlice';
import MoreProductsButton from '../../components/buttons/MoreProductsButton';
import { Product } from '../../utils/types';

const Catalog = () => {
  const { limit, category } = useSelector(({ products }) => products);

  const body = {
    limit,
    category,
    search: '',
  };

  const { data: products = [], isLoading } = useGetFilteredProductsQuery(body);

  if (isLoading) return (
    <div className="max-width padding-x"><Spinner /></div>
  );

  return (
    <div className="bg-beige text-primary font-poiret">
      <div className="max-width padding-x py-10">
        <Categories />
        <div className='mt-12 mb-16 flex flex-wrap gap-16 
        justify-between max-xl:justify-center max-lg:gap-8'>
          {products?.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className='text-center'>
          <MoreProductsButton />
        </div>
      </div>
    </div>
  )
}

export default Catalog;
