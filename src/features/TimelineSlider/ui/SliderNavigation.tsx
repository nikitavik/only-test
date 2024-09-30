import ChevronLeft from 'app/assets/chevron-left.svg';
import ChevronRight from 'app/assets/chevron-right.svg';
import React, { FC } from 'react';
import { SwiperClass } from 'swiper/react';

import clsx from 'clsx';

import styles from './SliderNavigation.module.scss';

type SliderNavigationProps = {
    controller: SwiperClass;
    isBeginning: boolean;
    isEnd: boolean;
};

export const SliderNavigation: FC<SliderNavigationProps> = (props) => {
    const { controller, isEnd, isBeginning } = props;

    return (
        <div className={styles.root}>
            <button
                type="button"
                className={clsx(styles.navigationButton, isBeginning && styles.isHidden)}
                disabled={isBeginning}
                aria-label="Предыдущий слайд"
                onClick={() => controller.slidePrev()}
            >
                <ChevronLeft className={styles.icon} />
            </button>

            <button
                type="button"
                className={clsx(styles.navigationButton, isEnd && styles.isHidden)}
                disabled={isEnd}
                aria-label="Следующий слайд"
                onClick={() => controller.slideNext()}
            >
                <ChevronRight className={styles.icon} />
            </button>
        </div>
    );
};
