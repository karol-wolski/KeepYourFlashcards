import { useState } from 'react'
import SlideTile from '../TileSlide/TileSlide'

type Slide = {
  id: string
  iconClass: string
  text: string
}

interface Props {
  slides: Slide[]
}

const TileSlider = ({ slides }: Props) => {
  const [activeSlideId, setActiveSlideId] = useState(slides[0].id)

  return (
    <div className="bg-secondary p-[1.6rem] flex flex-col justify-center items-center min-h-[18.8rem] w-full relative">
      {slides.map((slide) => (
        <SlideTile
          key={slide.id}
          iconClass={slide.iconClass}
          text={slide.text}
          isVisible={slide.id === activeSlideId}
        />
      ))}
      <div className="absolute bottom-[1rem]">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`${slides.length - 1 !== index ? 'mr-[0.8rem]' : ''}`}
            onClick={() => setActiveSlideId(slide.id)}
            aria-label={`Display slide no ${index + 1}`}
          >
            <i
              className={`${
                slide.id === activeSlideId ? 'fa-solid' : 'fa-regular'
              } fa-circle text-secondaryHover text-[1rem]`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default TileSlider
