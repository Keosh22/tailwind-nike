import { products  } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
   <section id='products' className='max-container max-sm:mt-12'>
    {/* TItle */}
    <div className='flex flex-col gap-5 justify-start'>
      <h2 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h2>
      <p className='text-slate-gray lg:max-w-lg font-montserrat'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
    </div>
    
    {/* Products */}
    <div className='mt-16 grid gap-14 grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
      {products.map((product)=> (
        // <img src={product.imgURL} alt="product" />
        <PopularProductCard key={product.name} {...product}/>
      ))}
    </div>
   </section>
  )
}

export default PopularProducts