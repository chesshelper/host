import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import "./embla.css"
import clsx from 'clsx'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
  isVertical: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, isVertical } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3500, stopOnMouseEnter: false })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  

  return (
    <div className={clsx("embla", isVertical && "embla__vertical")}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide}>
              <div className={clsx("embla__slide__image", isVertical && "embla__slide__image__vertical")}>
                <img src={slide}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div></div>
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

    
        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19V5h6v14zm-8 0V5h6v14zm10-2h2V7h-2zm-8 0h2V7H7zM7 7v10zm8 0v10z"></path></svg>
           : 
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712m2-1.825L15.25 12L10 8.65z"></path></svg> 
           }
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel
