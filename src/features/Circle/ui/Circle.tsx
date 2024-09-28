import { calculateTransform } from 'features/Circle/lib/calculateTransform';
import React, { FC, useState } from 'react';
import { CircleDot } from 'shared/CircleDot';

import clsx from 'clsx';

import styles from './Circle.module.scss';

type CircleProps = {
    className?: string;
};

export const Circle: FC<CircleProps> = (props) => {
    const { className } = props;

    const [activeDot, setActiveDot] = useState(1);

    const array = [1, 2, 3, 4, 5, 6];

    const rotationDegree = 45 - (360 / array.length) * array.findIndex((val) => val === activeDot);

    const handleClick = (newIdx: number) => setActiveDot(newIdx);

    return (
        <div
            className={clsx(styles.circle, styles.tabs, className)}
            style={{ transform: `rotate(${rotationDegree}deg)` }}
        >
            {array.map((number, index) => (
                <div className={styles.dotContainer}>
                    <CircleDot
                        key={index}
                        className={styles.dot}
                        style={calculateTransform(530, index, array.length, rotationDegree)}
                        isActive={number === activeDot}
                        onClick={() => handleClick(number)}
                    >
                        {number}
                    </CircleDot>
                </div>
            ))}
        </div>
    );
};
