import React, { FC } from 'react';

import styles from './Card.module.scss';

export type CardProps = {
    title: string;
    description: string;
};

export const Card: FC<CardProps> = (props) => {
    const { title, description } = props;

    return (
        <article className={styles.root}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{description}</p>
        </article>
    );
};
