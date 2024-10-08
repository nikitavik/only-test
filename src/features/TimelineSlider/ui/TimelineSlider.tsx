import { Card } from 'entities/Card';
import { SliderNavigation } from 'features/TimelineSlider/ui/SliderNavigation';
import { SliderPagination } from 'features/TimelineSlider/ui/SliderPagination';
import React, { FC, useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import type { Swiper as SwiperClass } from 'swiper/types';

import { Slide } from '../model/silde';
import styles from './TimelineSlider.module.scss';

type TimelineSliderProps = {
    slides: Slide[];
    classes?: Classes<'slider' | 'navigation'>;
};

export const TimelineSlider: FC<TimelineSliderProps> = (props) => {
    const { slides, classes } = props;

    const [controller, setController] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const initializeOptions = (swiper: SwiperClass) => {
        setController(swiper);
        setActiveIndex(swiper.activeIndex);
        setIsEnd(swiper.isEnd);
        setIsBeginning(swiper.isBeginning);
    };
    return (
        <div className={styles.root}>
            {controller !== null && (
                <SliderNavigation
                    controller={controller}
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    className={classes?.navigation}
                />
            )}

            <Swiper
                modules={[Controller]}
                onSwiper={initializeOptions}
                onSlideChange={initializeOptions}
                onSlidesUpdated={initializeOptions}
                spaceBetween={80}
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                    },
                    1000: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1.6,
                    },
                }}
                className={classes?.slider}
            >
                {slides.map((card, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <Card
                            title={String(card.year.getFullYear())}
                            description={card.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {controller !== null && (
                <SliderPagination
                    controller={controller}
                    slides={slides}
                    activeIndex={activeIndex}
                />
            )}
        </div>
    );
};
