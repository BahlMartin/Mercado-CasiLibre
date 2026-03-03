import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import './CarouselButton.css'

export default function CarouselButton({ direction, onClick }) {
  return (
    <button
      className={`carousel__button carousel__button--${direction}`}
      onClick={() => onClick(direction)}
      aria-label={direction === "next" ? "Siguiente" : "Anterior"}
    >
      {direction === "next" 
        ? <IoChevronForward size={32}/> 
        : <IoChevronBack size={32}/>}
    </button>
  )
} 