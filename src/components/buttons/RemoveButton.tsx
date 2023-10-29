import { BsTrash } from 'react-icons/bs';
import { successRemove } from '../../utils/common';
import { 
  useGetSingleUserQuery, 
  useRemoveProductsFromCartMutation 
} from '../../store/apiSlice';

interface RemoveButtonProps {
  id: number;
};

const RemoveButton = ({ id }: RemoveButtonProps) => {
  const [RemoveProductFromCart, { isLoading }] = useRemoveProductsFromCartMutation();  
  const userId = 1;
  const { data = [] } = useGetSingleUserQuery(userId);

  const removeItem = async () => {
    let result = data.cart.items.filter((item: { id: number }) => item.id != id);
    let targetProducts = data.cart.items.filter((item: { id: number }) => item.id == id);
    let sum = data.generalSumInCart - (targetProducts[0].price * targetProducts[0].col);
    successRemove();
    await RemoveProductFromCart({
      id: data.id,
      data: result,
      sum: sum
    });
  };

  return (
    <button className="flex gap-2">
      <BsTrash 
        className="text-red-300 h-5 w-5 mt-1" 
        onClick={removeItem} 
      />
      <span className="hidden max-md:block">Удалить</span>
    </button>
  )
}

export default RemoveButton;
