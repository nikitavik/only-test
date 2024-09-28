import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './CircleDot.module.scss';

type CircleDotProps = {
    isActive?: boolean;
};

export const CircleDot: FC<CircleDotProps> = (props) => {
    const { isActive = false } = props;

    return (
        <button type="button" className={clsx(styles.root, isActive && styles.isActive)}>
            <span className={styles.content}>1</span>
        </button>
    );
};
