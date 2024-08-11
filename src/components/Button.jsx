const Button = ({ label, iconURL}) => {
  return(
    <button className="flex justify-center items-center gap-2 bg-coral-red px-7 py-4 border border-coral-red font-montserrat text-lg text-white rounded-full leading-none">
      {label}

      <img 
      className="ml-2 rounded-full w-5 h-5"
      src={iconURL} 
      alt="arrow right" 
      />
    </button>
  )
}

export default Button