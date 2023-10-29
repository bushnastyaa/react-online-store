import hero from '../../images/bg-2.png';
import hero_bg from '../../images/bg-1.png';
import Button from '../buttons/Button';

const HeroSection = () => {
  return (
    <div className="bg-gray text-white font-poiret">
      <div className="max-width padding-x py-28 h-screen max-sm:px-2">
        <div className="flex justify-between max-lg:flex-col max-lg:justify-center">
          <img src={hero} alt="hero" className="w-full max-w-[300px] max-lg:hidden" />
          <div className="mt-3 px-2">
            <h1 className="text-[130px] uppercase mb-5 border-b max-sm:pb-5 max-sm:text-7xl">
              Mirage
            </h1>
            <div className="flex items-end max-md:justify-between
            max-sm:flex-col max-sm:items-start">
              <p className="text-5xl uppercase mb-12 leading-snug max-sm:text-3xl">
                Натуральные <br /> <span>свечи</span>
              </p>
              <Button link="hero" />
            </div>
          </div>
          <div className="max-lg:hidden">
            <img 
              src={hero_bg} alt="hero" 
              className="w-full max-w-[250px] max-h-[320px] mb-5" 
            />
            <p className="flex items-center gap-3 text-2xl">
              99% 
              <span className="text-base leading-tight">натуральных <br /> ингредиентов</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
