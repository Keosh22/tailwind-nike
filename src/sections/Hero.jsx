import { arrowRight } from '../assets/icons';
import Button  from '../components/Button';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';
const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    
    // Main content hero
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
    >
      {/* Left Section */}
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28 ">
      <p className='text-coral-red text-xl font-montserrat'>Our Summer Collection</p>
        <h1 className='text-8xl mt-10 font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className='text-lg text-slate-gray sm:max-w-sm mt-6 mb-14 leading-8'>Discover stylish Nike arrivals, quality, comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />
        
        <div className="flex flex-wrap w-full mt-20 justify-start items-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}> 
              <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
              <p className='leading-7 text-slate-gray font-montserrat'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side section */}
      <section className='relative flex flex-1 justify-center items-center max-xl:py-40 xl:min-h-screen bg-primary   bg-hero bg-cover bg-center'>
          <img 
          src={bigShoeImg}
          alt=""
          width={610}
          height={500}
          className='relative z-10 object-contain' 
          />
          {/* SHoe card */}
          <div className='flex  absolute sm:left-[10%] max-sm:px-6 -bottom-[5%] gap-4 sm:gap-6'>
            {shoes.map((shoe)=> (
              <div key={shoe}>
                <ShoeCard
                imgURL={shoe}
                changeBigShoeImage=
                {(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
      </section>
    </section>
  )
}

export default Hero