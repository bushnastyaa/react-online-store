import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';
import { routes } from '../utils/routes';
import SearchTitle from './SearchTitle';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={`font-poiret
      ${location.pathname === '/' 
        ? 'bg-gray text-white' 
        : 'bg-beige text-primary'
      }
    `}>
      <nav className="max-width padding-x py-3 flex 
      items-center justify-between max-md:flex-wrap">
        <div className="flex items-center gap-10">
          <Link to={routes.home}>
            <p className="text-3xl mb-1.5">Mirage</p>
          </Link>
        
          <Link to={routes.catalog}>
            <p className="text-lg">Каталог</p>
          </Link>  
        </div>

        <div className="flex items-center gap-8">
          <SearchTitle />
          <div>
            <button 
              onClick={() => navigate(routes.cart)} 
              className="flex items-center gap-3 hover:bg-gray
              hover:text-white rounded-full p-1.5 px-4"
            >
              <BsBagCheck className="w-5 h-5" /> 
              <span className="text-lg max-lg:hidden">Корзина</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
