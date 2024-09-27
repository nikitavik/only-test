import React, {FC} from 'react';

import styles from './PageTitle.module.scss';

export const PageTitle: FC = () => {

    console.log(styles);

    return (
        <h1 className={styles.root}>
           Исторические даты
        </h1>
    );
};
