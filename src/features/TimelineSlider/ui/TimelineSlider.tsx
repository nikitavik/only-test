import { Card } from 'entities/Card';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import { Slide } from '../model/silde';
import styles from './TimelineSlider.module.scss';

type TimelineSliderProps = {
    slides: Slide[];
};

export const TimelineSlider: FC<TimelineSliderProps> = (props) => {
    const { slides } = props;

    return (
        <Swiper
            spaceBetween={80}
            breakpoints={{
                1200: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1.5,
                },
            }}
        >
            {slides.map((card, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                    <Card title={String(card.year.getFullYear())} description={card.description} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
