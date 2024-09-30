import React, { FC } from 'react';
import { Timeline } from 'widgets/Timeline';

import clsx from 'clsx';

import { calculateTransform } from '../lib/calculateTransform';
import styles from './Circle.module.scss';
import { CircleDot } from './CircleDot';

type CircleProps = {
    timelines: Timeline[];
    activeTimelineId: number;
    onChange: (newTimelineId: number) => void;
    className?: string;
};

const CIRCLE_OFFSET = 45; // 45deg rotation

export const Circle: FC<CircleProps> = (props) => {
    const { timelines, activeTimelineId, onChange, className } = props;

    const rotationDegree =
        CIRCLE_OFFSET -
        (360 / timelines.length) *
            timelines.findIndex((timeline) => timeline.id === activeTimelineId);

    return (
        <div
            className={clsx(styles.circle, styles.tabs, className)}
            style={{ transform: `rotate(${rotationDegree}deg)` }}
        >
            {timelines.map((timeline, index) => (
                <div key={timeline.id} className={styles.dotContainer}>
                    <CircleDot
                        className={styles.dot}
                        style={calculateTransform(530, index, timelines.length, rotationDegree)}
                        isActive={timeline.id === activeTimelineId}
                        onClick={() => onChange(timeline.id)}
                    >
                        {timeline.id}
                    </CircleDot>
                </div>
            ))}
        </div>
    );
};
