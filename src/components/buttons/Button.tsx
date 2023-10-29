import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCategory } from '../../store/productsSlice';
import { routes } from '../../utils/routes';

interface ButtonProps {
  link: string;
}

const Button = ({ link }: ButtonProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (link === 'gifts') {
      dispatch(changeCategory('sets'));
      navigate(routes.catalog);
    }

    navigate(routes.catalog);
  }
  
  return (
    <div className="text-white font-poiret flex items-center gap-5">
      <p>Подробнее</p>
      <button 
        onClick={handleClick}
        className="rounded-full border border-white 
        p-4 flex items-center hover:scale-105"
      >
        <BsArrowRight className="h-5 w-5 font-thin" />
      </button>
    </div>
  )
}

export default Button;
