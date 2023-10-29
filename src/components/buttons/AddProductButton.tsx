import { BsArrowRight } from 'react-icons/bs';
import { Product, ProductCart } from '../../utils/types';
import { successAddInBasket, alreadyInBasket } from '../../utils/common';
import { 
  useAddProductsInCartMutation, 
  useGetSingleUserQuery } 
from '../../store/apiSlice';

interface AddProductButtonProps {
  product: Product;
  btnClass: string;
  arrow?: boolean;
};

const AddProductButton = ({
  product, btnClass, arrow
}: AddProductButtonProps) => {
  const { data = [] } = useGetSingleUserQuery(1);
  const [addProductInCart, { isLoading }] = useAddProductsInCartMutation();

  const handleClick = async () => {
    let productNumber = data.cart.items.find(
      (item: any) => item.id == product.id
    );

    if (productNumber === undefined) {
      successAddInBasket();
      let result = {
        id: product.id,
        title: product.title,
        img: product.images[0],
        price: product.price,
        col: 1,
      };
  
      let previosItems = data.cart.items;
      let arr = [];
      previosItems.forEach((item: ProductCart) => {
        arr.push(item);
      });
      arr.push(result);
      
      let generalSum = data.generalSumInCart + product.price;
      await addProductInCart({
        id: data.id,
        data: arr,
        sum: generalSum,
      }).unwrap();
    } else {
      alreadyInBasket();
    }
  };

  return (
    <>
      {arrow 
        ? (
          <button 
            onClick={handleClick}
            className={`${btnClass}`}
          >
            В корзину <BsArrowRight className="mt-1" />
          </button> 
        ) : (
          <button 
            onClick={handleClick}
            className={`${btnClass}`}
          >
            В корзину
          </button> 
      )}
    </>
  )
}

export default AddProductButton;
