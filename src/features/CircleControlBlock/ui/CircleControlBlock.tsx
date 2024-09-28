import React, { FC } from 'react';
import { IconButton } from 'shared/IconButton';

import ChevronLeft from '../assets/chevron-left.svg';
import ChevronRight from '../assets/chevron-right.svg';
import styles from './CircleControlBlock.module.scss';

type CircleControlBlockProps = {
    circleNumber: number;
};

export const CircleControlBlock: FC<CircleControlBlockProps> = (props) => {
    const { circleNumber } = props;

    return (
        <div className={styles.root}>
            <div className={styles.counter}>0{circleNumber}/06</div>

            <div className={styles.buttons}>
                <IconButton icon={ChevronLeft} aria-label="Назад" />
                <IconButton icon={ChevronRight} aria-label="Далее" />
            </div>
        </div>
    );
};
