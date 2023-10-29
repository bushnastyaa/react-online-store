import { useDispatch } from 'react-redux';
import { addProducts } from '../../store/productsSlice';

const MoreProductsButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addProducts());
  };
  
  return (
    <button 
      onClick={onClick} 
      className='text-white border-2 px-6 py-2
      rounded-3xl bg-gray hover:bg-primary-blue duration-200'
    >
      Показать еще
    </button>
  );
}

export default MoreProductsButton;
