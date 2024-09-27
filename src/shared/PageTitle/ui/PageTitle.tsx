import React, { FC } from 'react';

import styles from './PageTitle.module.scss';

export const PageTitle: FC = () => {
    return (
        <h1 className={styles.root}>
            Исторические
            <br />
            даты
        </h1>
    );
};
