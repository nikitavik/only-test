import React, { ButtonHTMLAttributes, FC, PropsWithoutRef } from 'react';

import clsx from 'clsx';

import styles from './IconButton.module.scss';

type IconButtonProps = PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement>> & {
    icon: SvgComponent;
    classes?: Classes<'root' | 'icon'>;
};

export const IconButton: FC<IconButtonProps> = (props) => {
    const { icon: Icon, className, classes, ...restProps } = props;

    return (
        <button
            type="button"
            className={clsx(styles.root, className, classes?.root)}
            {...restProps}
        >
            <Icon className={clsx(styles.icon, classes?.icon)} />
        </button>
    );
};
