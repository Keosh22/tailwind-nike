const ServiceCard = ({imgURL, label, subtext}) => {
  return(
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16 shadow-3xl rounded-[20px]">
      <div className="bg-coral-red w-11 h-11 rounded-full flex justify-center items-center ">
        <img src={imgURL} alt={label}
        width={24}
        height={24}
        />
      </div>
      <h3 className="mt-5 text-3xl font-bold font-palanquin leading-normal">{label}</h3>
      <p className="mt-3 break-words leading-normal text-slate-gray text-lg">{subtext}</p>
    </div>
  )
}

export default ServiceCard