import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section className="max-container flex gap-10 max-xl:flex-col-reverse justify-between items-center">
      <div className="flex-1" >
        <img src={offer} alt="Offer" 
        height={687}
        width={773}
        className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <h3 className="text-4xl font-bold font-palanquin leading-normal"><span className="text-coral-red">Special</span> Offer</h3>
        <p className="text-lg text-slate-gray font-montserrat leading-normal mt-4 ">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4 text-lg font-montserrat text-slate-gray leading-normal">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex gap-6 flex-wrap">
        <button className="bg-coral-red py-4 px-7 rounded-full text-white font-montserrat text-lg leading-normal">Shop now</button>
        <button className="border-2 border-coral-red text-coral-red py-4 px-7 rounded-full text-lg font-montserrat leading-normal">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer