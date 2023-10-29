import { MdRemove, MdAdd } from 'react-icons/md';
import { 
  useGetSingleUserQuery, 
  useIncrementProductsInCartMutation 
} from '../../store/apiSlice';
import { successAdd, successRemove } from '../../utils/common';

interface ChangeQuantityButtonProps {
  id: number;
  col: number;
};

const ChangeQuantityButton = ({ id, col }: ChangeQuantityButtonProps) => {
  const [addProductInBasket, { isLoading }] = useIncrementProductsInCartMutation();  
  const userId = 1;
  const { data = [], } = useGetSingleUserQuery(userId);

  const incrementQuantity = async () => {
    let indexItem = data.cart.items
        .findIndex((item: { id: number }) => item.id == id)

    let CartUser = [...data.cart.items
        .filter((item: { id: number }) => item.id != id)];
    let targetProducts = {...data.cart.items
        .filter((item: { id: number }) => item.id == id)[0]};
    targetProducts.col = targetProducts.col + 1

    let newCartUser = [...CartUser]
    newCartUser.splice(indexItem, 0, targetProducts)

    successAdd();
    await addProductInBasket({
      id: data.id,
      data: newCartUser,
      sum: data.generalSumInCart + targetProducts.price,
    }).unwrap();
  };

  const decrementQuantity = async () => {
    let indexItem = data.cart.items
        .findIndex((item: { id: number }) => item.id == id)

    let CartUser = [...data.cart.items
        .filter((item: { id: number }) => item.id != id)];
    let targetProducts = {...data.cart.items
        .filter((item: { id: number }) => item.id == id)[0]};

    if (targetProducts.col > 1) {
      targetProducts.col = targetProducts.col - 1

      let newCartUser = [...CartUser]
      newCartUser.splice(indexItem, 0, targetProducts)
  
      successRemove();
      await addProductInBasket({
        id: data.id,
        data: newCartUser,
        sum: data.generalSumInCart - targetProducts.price,
      }).unwrap();
    }
  };

  return (
    <div className='flex items-center'>
      <button 
        onClick={decrementQuantity}
        className='mr-2 p-1.5 rounded-full bg-gray text-white
         duration-200 disabled:opacity-75'
      >
        <MdRemove />
      </button>
      <p className='mr-2'>{col}</p>
      <button 
        onClick={incrementQuantity}
        className='mr-28 p-1.5 rounded-full bg-gray text-white duration-200'
      >
        <MdAdd />
      </button>
    </div>
  )
};

export default ChangeQuantityButton;
