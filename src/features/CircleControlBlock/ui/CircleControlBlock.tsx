import ChevronLeft from 'app/assets/chevron-left.svg';
import ChevronRight from 'app/assets/chevron-right.svg';
import { padNumber } from 'features/CircleControlBlock/lib/padNumber';
import React, { FC } from 'react';
import { IconButton } from 'shared';

import styles from './CircleControlBlock.module.scss';

type CircleControlBlockProps = {
    currentNumber: number;
    maxNumber: number;
    onNext: () => void;
    onPrev: () => void;
};

export const CircleControlBlock: FC<CircleControlBlockProps> = (props) => {
    const { currentNumber, maxNumber, onNext, onPrev } = props;

    return (
        <div className={styles.root}>
            <div className={styles.counter}>{padNumber(currentNumber, maxNumber)}</div>

            <div className={styles.buttons}>
                <IconButton
                    icon={ChevronLeft}
                    aria-label="Назад"
                    onClick={onPrev}
                    disabled={currentNumber === 1}
                />
                <IconButton
                    icon={ChevronRight}
                    aria-label="Далее"
                    onClick={onNext}
                    disabled={currentNumber === maxNumber}
                />
            </div>
        </div>
    );
};
