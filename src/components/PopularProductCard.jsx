import { star } from "../assets/icons";
const PopularProductCard = ({imgURL, name, price}) => {
  return(
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="shoe" 
      className="w-[280px] h-[280px]"
      />
      {/* Start review */}
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" 
          height={24}
          width={24}
        />
        <p className="text-slate-gray text-xl leading-normal font-monseratt">(4.5)</p>
      </div>
        <h3 className="mt-2 font-semibold font-palanquin text-2xl leading-normal">{name}</h3>
        <p className="text-2xl text-coral-red font-montserrat font-semibold leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard