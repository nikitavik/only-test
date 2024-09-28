import { Circle } from 'features/Circle';
import { CircleControlBlock } from 'features/CircleControlBlock';
import { Slider } from 'features/Slider';
import React, { FC } from 'react';
import { PageTitle } from 'shared/PageTitle';

import styles from './App.module.scss';
import './styles/global.scss';

export const App: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <PageTitle />

                <Circle />

                <CircleControlBlock circleNumber={2} />
                <Slider />
            </div>
        </div>
    );
};
