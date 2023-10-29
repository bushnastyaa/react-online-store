import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useGetCategoryQuery } from '../../store/apiSlice';
import { changeCategory } from '../../store/productsSlice';
import { Categories } from '../../utils/types';
import categoryImg from '../../images/categories.png';
import Spinner from '../Spinner';
import { routes } from '../../utils/routes';

const CategoriesSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetCategoryQuery();

  const handleClick = (name: React.SetStateAction<string>) => {
    dispatch(changeCategory(name));
    navigate(routes.catalog);
  };

  if (isLoading) return (
    <div className="max-width padding-x"><Spinner /></div>
  );

  return (
    <div className="bg-beige font-poiret">
      <div className="max-width padding-x py-28">
        <div className="flex justify-around items-center text-primary
         uppercase max-md:justify-center max-md:flex-col max-md:gap-10">
          <ul className="flex flex-col gap-10">
            <li className="text-lg normal-case border-b pb-2 border-[#D7C6C6]">
              Категории
            </li>
            {data?.map((link: Categories) => (
              <>
                {link.name !== "" && link.name !== "sets" && (
                  <li 
                    key={uuidv4()}
                    onClick={() => handleClick(link.name)}
                    className="block text-6xl pb-8 pr-28 border-b border-[#D7C6C6] 
                    max-md:text-5xl max-md:pr-0 hover:text-primary-blue
                    hover:border-primary-blue cursor-pointer"
                  >
                    {link.visibleName}
                  </li>
                )}
              </>
            ))}
          </ul>
          <img src={categoryImg} alt="category" className="w-full max-w-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default CategoriesSection;
