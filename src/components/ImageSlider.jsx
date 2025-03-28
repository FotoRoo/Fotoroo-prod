import  { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"


import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"



 const ImageSlider = ({ images }) => {
  const [swiper, setSwiper] = useState(null)

  return (
    <div className="relative w-full my-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true} 
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={setSwiper}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full py-12"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image || "/placeholder.svg"}
                alt={`Photo booth print ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="swiper-button-prev !left-0 sm:!left-4 !mt-0 !top-1/2 !-translate-y-1/2 !z-10 !w-10 !h-10 !bg-white !rounded-full !shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 mx-auto" />
      </button>
      <button
        className="swiper-button-next !right-0 sm:!right-4 !mt-0 !top-1/2 !-translate-y-1/2 !z-10 !w-10 !h-10 !bg-white !rounded-full !shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 mx-auto" />
      </button>
    </div>
  )
}


export default ImageSlider