import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { useGetProductQuery } from '../../store/apiSlice';
import Carousel from '../../components/Carousel';
import AddProductButton from '../../components/buttons/AddProductButton';
import Spinner from '../../components/Spinner';

const Product = () => {
  const { id } = useParams();
  const { data = [], isLoading } = useGetProductQuery(id);
  const { title, price, images, description, category } = data;
  let htmlText = description?.replace(/\n/g, "<br />");

  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    if (!images?.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  if (isLoading) return (
    <div className="max-width padding-x"><Spinner /></div>
  );

  return (
    <div className="bg-beige text-primary font-poiret">
      <div className="max-width padding-x padding-y">
        <div className="flex gap-10 mt-10 max-md:flex-col">
          <div className="flex flex-col gap-3 max-md:flex-row">
            {images?.map((image: any) => (
              <img
                key={uuidv4()}
                src={image}
                alt={title}
                className='w-[90px] h-[90px] cursor-pointer object-cover'
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
          <img 
            src={currentImage} 
            alt={title} 
            className="object-cover w-[400px] h-[400px]" 
          />
          <div className="pl-16 max-md:pl-0">
            <p className="text-3xl mb-3">{title}</p>
            <p className="text-2xl mb-10">{price} Р</p>
            <p 
              className="font-lato mb-16 leading-7" 
              dangerouslySetInnerHTML={{__html: htmlText}} 
            />
            <AddProductButton 
              product={data} 
              btnClass="border border-gray py-2 px-12 text-xl" 
            />
          </div>
        </div>

        <Carousel category={category} />

      </div>
    </div>
  )
}

export default Product;
