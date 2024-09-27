import React, {FC} from 'react';

import {PageTitle} from "shared/PageTitle";

import styles from './App.module.scss';

export const App: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <PageTitle />
            </div>
        </div>
    );
};
