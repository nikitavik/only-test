import React, { FC, HTMLAttributes, PropsWithoutRef, useEffect, useState } from 'react';

type YearCounterProps = PropsWithoutRef<HTMLAttributes<HTMLSpanElement>> & {
    counter: number;
};

export const YearCounter: FC<YearCounterProps> = (props) => {
    const { counter, ...restProps } = props;

    const [innerCounter, setInnerCounter] = useState(counter);

    useEffect(() => {
        if (innerCounter === counter) return;

        const step = counter > innerCounter ? 1 : -1;

        const timer = setTimeout(() => {
            setInnerCounter(innerCounter + step);
        }, 100);

        return () => clearTimeout(timer);
    }, [counter, innerCounter]);

    return <span {...restProps}>{innerCounter}</span>;
};
