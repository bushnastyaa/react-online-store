import { useMemo, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../store/apiSlice";
import { Product } from "../utils/types";
import Spinner from "./Spinner";

interface CarouselProps {
  category: string;
}

const Carousel = ({ category }: CarouselProps) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const { data: products = [], isLoading } = useGetProductsQuery();

  const relatedProducts = useMemo(() => {
    return products?.filter((item: Product) => category === item.category);
  }, [products, category]);

  const slideLeft = () => {
    // @ts-ignore
    sliderRef.current.scrollLeft -= 280;
  };
  const slideRight = () => {
     // @ts-ignore
    sliderRef.current.scrollLeft += 280;
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="mb-10 mt-32">
      <div className="flex justify-between items-center gap-2 max-md:flex-col max-md:items-start">
        <h2 className="text-4xl uppercase">Вам могут понравиться</h2>
        <div className="flex gap-5">
          <button 
            onClick={slideLeft} 
            className="rounded-full border border-primary p-3 flex items-center hover:scale-105"
          >
            <BsArrowLeft className="h-4 w-4 font-thin" />
          </button>
          <button
            onClick={slideRight} 
            className="rounded-full border border-primary p-3 flex items-center hover:scale-105"
          >
            <BsArrowRight className="h-4 w-4 font-thin" />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="flex gap-5 overflow-x-scroll scroll 
      whitespace-nowrap scroll-smooth scrollbar-hide mt-8">
        {relatedProducts.map((product: Product) => (
          <img
            onClick={() => navigate(`/products/${product.id}`)}
            src={product.images[0]}
            alt={product.title}
            className="object-cover w-[272px] h-[272px] cursor-pointer hover:scale-105"
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel;
