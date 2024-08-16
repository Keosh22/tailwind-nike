const Subscribe = () => {
  return (

    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl lg:max-w-md font-palanquin font-bold leading-[68px]">Sign Up for<span className="text-coral-red"> Updates</span> & Newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 max-sm:flex-col sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscibe@nike.com" className="input" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <button className="bg-coral-red text-white py-4 px-7 rounded-full font-montserrat text-lg leading-normal border border-coral-red flex justify-center items-center gap-2 w-full">Sign up</button>
        </div>
      </div>
    </section>


    // <section className="max-container flex max-lg:flex-col justify-between items-center gap-10">
    //   <div className="flex justify-center items-center">
    //     <h3 className="text-4xl font-bold font-palanquin leading-normal flex-1 lg:max-w-md">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>
    //   </div>
    //   <div className="border-2 py-6 px-8 rounded-full border-gray-400 flex-1 lg:max-w-[40%] w-full">
    //       <div>
    //         <p>Kenjoshua@gmail.com</p>
    //       </div>
    //   </div>
    // </section>
  )
}

export default Subscribe