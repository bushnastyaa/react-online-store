import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useGetSingleUserQuery } from '../../store/apiSlice';
import { ProductCart } from '../../utils/types';
import ChangeQuantityButton from '../../components/buttons/ChangeQuantityButton';
import RemoveButton from '../../components/buttons/RemoveButton';
import Spinner from "../../components/Spinner";

const Cart = () => {
  const { data = [], isLoading } = useGetSingleUserQuery(1);

  if (isLoading) return (
    <div className="max-width padding-x"><Spinner /></div>
  );

  return (
    <div className="bg-beige text-primary font-poiret">
      <div className="max-width pt-10 pb-12 padding-x">

        <div className="flex justify-between items-center pb-5
        mb-1 max-md:flex-col max-md:items-start max-md:gap-2">
          <p className="text-3xl">Ваша корзина</p>
          <p className="text-xl">
            Сумма: {data?.generalSumInCart ? data.generalSumInCart : 0} P
          </p>
        </div>

        {data.cart?.items.length === 0
          ? <div className="py-20 flex justify-center items-center text-3xl">
              Товаров нет
            </div>
          : data.cart?.items.map((item: ProductCart) => (
            <div 
              key={uuidv4()}
              className='mb-4 p-4 font-lato border border-[#D7C6C6] flex first-letter:
              justify-between items-center max-md:flex-col max-md:gap-5 max-md:items-start'>
              <div className='flex gap-5 max-md:flex-col'>
                <Link to={`/products/${item.id}`} >
                  <img
                    src={item.img}
                    alt="product"
                    className='h-[100px] w-[100px] object-cover'
                  />
                </Link>
                <div className="flex flex-col justify-between max-md:gap-5">
                  <div>
                    <p className="mb-1">{item.title}</p>
                    <p>{item.price} руб/шт</p>
                  </div>
                  <ChangeQuantityButton id={item.id} col={item.col} />
                </div>
              </div>
              <div><RemoveButton id={item.id} /></div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
