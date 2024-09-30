import { PageTitle } from 'entities/PageTitle';
import React, { FC } from 'react';
import { TimelineWidget } from 'widgets/Timeline';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.titleContainer}>
                        <PageTitle />
                    </div>

                    <TimelineWidget />
                </div>
            </div>
        </div>
    );
};
