import React, { FC } from 'react';
import { CircleDot } from 'shared/CircleDot';
import { PageTitle } from 'shared/PageTitle';

import styles from './App.module.scss';
import './styles/global.scss';

export const App: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <PageTitle />

                <CircleDot />
                <CircleDot />
                <CircleDot />
            </div>
        </div>
    );
};
