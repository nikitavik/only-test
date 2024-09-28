import React, { ButtonHTMLAttributes, FC, PropsWithoutRef } from 'react';

import clsx from 'clsx';

import styles from './CircleDot.module.scss';

type CircleDotProps = PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement>> & {
    isActive?: boolean;
};

export const CircleDot: FC<CircleDotProps> = (props) => {
    const { isActive = false, className, children, ...restProps } = props;

    return (
        <button
            type="button"
            className={clsx(styles.root, isActive && styles.isActive, className)}
            {...restProps}
        >
            <span className={styles.content}>{children}</span>
        </button>
    );
};
