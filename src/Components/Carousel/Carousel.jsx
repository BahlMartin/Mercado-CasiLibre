import { useRef, useState, useEffect } from "react"
import CarouselButton from "../CarouselButton/CarouselButton.jsx"
import './Carousel.css'

export default function Carousel({ children }) {
  const carouselRef = useRef(null)

  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const updateArrowVisibility = () => {
    const carouselElement = carouselRef.current
    if (!carouselElement) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselElement
    //console.log({ scrollLeft, scrollWidth, clientWidth })
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
  }

  const handleScroll = (direction) => {
    const carouselElement = carouselRef.current
    if (!carouselElement) return

    const scrollAmount = 218

    carouselElement.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    updateArrowVisibility()

    const carouselElement = carouselRef.current
    carouselElement?.addEventListener("scroll", updateArrowVisibility)

    return () => {
      carouselElement?.removeEventListener("scroll", updateArrowVisibility)
    }
  }, [])

  return (
    <div className="carousel-wrapper">
      {showLeftArrow && (
        <CarouselButton direction="prev" onClick={handleScroll} />
      )}

      <div className="carousel" ref={carouselRef}>
        {children}
      </div>

      {showRightArrow && (
        <CarouselButton direction="next" onClick={handleScroll} />
      )}
    </div>
  )
}