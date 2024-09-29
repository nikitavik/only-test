import { Circle } from 'features/Circle';
import { CircleControlBlock } from 'features/CircleControlBlock';
import { Slider } from 'features/Slider';
import React, { FC } from 'react';
import { PageTitle } from 'shared/PageTitle';

import clsx from 'clsx';

import styles from './App.module.scss';
import './styles/global.scss';

export const App: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.titleContainer}>
                        <PageTitle />
                    </div>

                    <div className={styles.circleContainer}>
                        <h2 className={styles.yearContainer}>
                            <span className={clsx(styles.year, styles.colorBlue)}>2027</span>
                            <span className={clsx(styles.year, styles.colorPink)}>2023</span>
                        </h2>

                        <Circle className={styles.circle} />

                        <CircleControlBlock circleNumber={2} />
                    </div>

                    <div className={styles.sliderContainer}>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
};
