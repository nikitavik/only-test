import React, { FC } from 'react';

import styles from './CircleDot.module.scss';

export const CircleDot: FC = () => {
    return (
        <button type="button" className={styles.root}>
            <span className={styles.content}>1</span>
        </button>
    );
};
