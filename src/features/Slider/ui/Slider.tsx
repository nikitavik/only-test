import React, { FC } from 'react';
import { Card, CardProps } from 'shared/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import styles from './Slider.module.scss';

const mockCards: CardProps[] = [
    {
        title: '2015',
        description:
            '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
    },
    {
        title: '2016',
        description:
            'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
    },
];

export const Slider: FC = () => {
    return (
        <Swiper
            spaceBetween={80}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
            className={styles.root}
        >
            {[...mockCards, ...mockCards, ...mockCards].map((card, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                    <Card {...card} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
