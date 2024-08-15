import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback}) => {
  return(
  <div className="flex justify-center flex-col items-center ">
    <img src={imgURL} alt="Customer" 
    className="w-[120px] h-[120px] rounded-full object-cover"
    />
    <p className="mt-6 text-montserrat info-text max-w-sm leading-normal">{feedback}</p>
    <div className="mt-3 flex justify-center items-center gap-2.5">
      <img src={star} alt="star" 
      height={24}
      width={24}
      className="m-0 object-contain"
      />
      <p className="info-text">{rating}</p>
    </div>
      <h3 className="mt-1 font-palanquin font-bold text-3xl">{customerName}</h3>
  </div>
  )
}

export default ReviewCard