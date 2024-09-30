import {Slide} from 'features/TimelineSlider';
import React, {FC} from 'react';
import {SwiperClass} from 'swiper/react';

import styles from './SliderPagination.module.scss';
import clsx from "clsx";

type SliderPaginationProps = {
    controller: SwiperClass;
    slides: Slide[];
    activeIndex: number;
};

export const SliderPagination: FC<SliderPaginationProps> = (props) => {
    const {slides, controller, activeIndex} = props;

    return (
        <div className={styles.root}>
            {slides.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => controller.slideTo(index)}
                    className={clsx(styles.dot, activeIndex === index && styles.isActive)}
                />
            ))}
        </div>
    );
};
