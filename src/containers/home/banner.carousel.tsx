'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import slide1 from '@public/images/carousel/slide-1.jpg'
import slide2 from '@public/images/carousel/slide-2.jpg'
import slide3 from '@public/images/carousel/slide-3.jpg'
import slide4 from '@public/images/carousel/slide-4.jpg'

export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div style={{ height: '20vh' }} className="embla__slide">
            <Image fill={true} className="embla__slide__img" src={slide1} alt={''} />
          </div>
          <div style={{ height: '20vh' }} className="embla__slide">
            <Image fill={true} className="embla__slide__img" src={slide2} alt={''} />
          </div>
          <div style={{ height: '20vh' }} className="embla__slide">
            <Image fill={true} className="embla__slide__img" src={slide3} alt={''} />
          </div>
          <div style={{ height: '20vh' }} className="embla__slide">
            <Image fill={true} className="embla__slide__img" src={slide4} alt={''} />
          </div>
        </div>
      </div>
    </div>
  )
}
