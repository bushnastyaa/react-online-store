import Button from "../buttons/Button";
import gift from "../../images/gift.png";
import gift2 from "../../images/gift-2.png";
import gift3 from "../../images/gift-3.png";
  
const CategoriesSection = () => {
  return (
    <div className="bg-gray font-poiret">
      <div className="max-width padding-x py-28 text-white">
        <h2 className="text-6xl uppercase mb-12 max-md:text-4xl">
          Подарочные наборы
        </h2>
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-5">
          <p className="w-[35%] text-lg max-md:w-full">
            Мы собираем наборы, которые идеально подойдут 
            для подарка дорогим вам людям. Сделано с любовью!
          </p>
          <Button link="gifts" />
        </div>
        <div className="mt-28 flex justify-between text-lg
        max-lg:flex-col max-lg:items-center max-lg:gap-5 max-lg:mt-10">
          <div>
            <img src={gift} alt="gift" className="object-cover w-[310px]" />
            <p className="mt-5 w-[250px]">Набор из 3 кокосовых свечей с маслом ши</p>
          </div>
          <div className="-top-[70px] relative max-lg:top-0">
            <img src={gift2} alt="gift" className="object-cover w-[310px]" />
            <p className="mt-5 w-[250px]">Набор из 4 ароматических свечей из кокосового воска</p>
          </div>
          <div>
            <img src={gift3} alt="gift" className="object-cover w-[310px]" />
            <p className="mt-5 w-[250px]">Набор из 3 ароматических свечей и диффузора</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesSection;
