
'use client'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IProject } from '@/interfaces';
import React, { useEffect, useMemo, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import style from './projectSwiper.module.scss'

interface IProps {
  images: IProject['attributes']['images']['data']
}

interface IPositionSlider {
  isBeginning: boolean
  isEnd: boolean
}

export const ProjectSwiper = ({ images }: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [ positionSlider, setPositionSlider ] = useState<IPositionSlider | null>(null)

  const setializedImages = useMemo(()=>images.map(el=>({url: el.attributes.url, id: el.id})),[images])
  
  const setBreakPoints = (swiper: SwiperClass) => {
    setPositionSlider({isBeginning: swiper.isBeginning, isEnd:swiper.isEnd})
  }

  const onSlideChange = (e: SwiperClass) => {
    setBreakPoints(e)
  }

  useEffect(()=>{
    if (thumbsSwiper) {
      setBreakPoints(thumbsSwiper)
    }
  },[thumbsSwiper])

  return (
    <>
      <div 
        className={style.slider_big}
      >
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView="auto"
          spaceBetween={20}
          resizeObserver
          loop
          grabCursor
        >
          {setializedImages &&
            setializedImages.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <img
                    width={100}
                    height={100}
                    alt="Фото примера работы"
                    src={slide.url}
                    className={style.slider__image_big}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {setializedImages.length >= 2 ? (
        <div 
          className={style.slider_small}
          // data-is-next={!positionSlider?.isEnd}
          // data-is-prev={!positionSlider?.isBeginning}
        >
          <Swiper
            slidesPerView={3}
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            resizeObserver
            spaceBetween={10}
            onTransitionEnd={onSlideChange}
            // breakpoints={breakpoints}
          >
            {setializedImages &&
              setializedImages.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <img
                      width={150}
                      height={150}
                      alt="Фото примера работы"
                      src={slide.url}
                      className={style.slider__image_small}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      ) : null}
    </>
  )
}