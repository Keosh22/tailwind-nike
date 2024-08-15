import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section 
    id="about-us" 
    className="flex max-lg:flex-col max-container gap-10 justify-between w-full items-center"
    >
      {/* Left Side Text */}
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg capitalize">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="text-lg font-montserrat mt-4 text-slate-gray lg:max-w-lg leading-7">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
       </p>
        <p className="text-slate-gray font-montserrat text-lg mt-6 lg:max-w-lg leading-7"> Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <button className="flex justify-center items-center gap-2 border border-coral-red leading-none px-7 py-4 bg-coral-red rounded-full text-white font-montserrat text-lg">View details</button>
        </div>
      </div>
      {/* Big Shoe Image */}
      <div className="flex flex-1 justify-center items-center">
        <img 
        src={shoe8} alt="Big Shoe" 
        height={522}
        width={570}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality