import React, { FC } from 'react';

import styles from './Card.module.scss';

type CardProps = {
    title: string;
    description: string;
};

export const Card: FC<CardProps> = (props) => {
    const { title, description } = props;

    return (
        <article className={styles.root}>
            <h4>{title}</h4>
            <p>{description}</p>
        </article>
    );
};
