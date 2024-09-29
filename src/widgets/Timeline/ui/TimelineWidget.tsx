import { sleep } from 'app/lib/utils';
import { CircleControlBlock } from 'features/CircleControlBlock';
import { TimelineSlider } from 'features/TimelineSlider';
import { Circle } from 'features/TimelineCircle';
import React, { FC, useState } from 'react';
import { mockTimelines } from 'widgets/Timeline/model/mock-timeline';
import { Timeline } from 'widgets/Timeline/model/timeline';
import { YearCounter } from 'widgets/Timeline/ui/YearCounter';

import clsx from 'clsx';

import styles from './TimelineWidget.module.scss';

const timelines = mockTimelines;

const findTimelineIndex = (timelinesArr: Timeline[], targetTimelineId: number) =>
    timelinesArr.findIndex((timeline) => timeline.id === targetTimelineId);

export const TimelineWidget: FC = () => {
    const [activeTimelineId, setActiveTimelineId] = useState(timelines[0].id);

    const [isLoading, setLoading] = useState(false);

    const activeTimeline = timelines.find((timeline) => timeline.id === activeTimelineId);
    const currentIndex = findTimelineIndex(timelines, activeTimelineId);

    const setWithLoading = async <T extends (...args: unknown[]) => void>(func: T) => {
        setLoading(true);
        func();
        await sleep(300);
        setLoading(false);
    };

    const handleTimelineChange = (newId: number) =>
        setWithLoading(() => setActiveTimelineId(newId));

    const handleNext = () =>
        setWithLoading(() =>
            setActiveTimelineId((prev) => {
                const index = findTimelineIndex(timelines, prev);
                if (index !== timelines.length - 1) {
                    return timelines[index + 1].id;
                }
                return prev;
            })
        );

    const handlePrev = () =>
        setWithLoading(() =>
            setActiveTimelineId((prev) => {
                const index = findTimelineIndex(timelines, prev);
                if (index !== 0) {
                    return timelines[index - 1].id;
                }
                return prev;
            })
        );

    if (activeTimeline === undefined) {
        return <div>Error</div>;
    }

    return (
        <div>
            <div className={styles.circleContainer}>
                <h2 className={styles.yearContainer}>
                    <YearCounter
                        counter={activeTimeline.startYear.getFullYear()}
                        className={clsx(styles.year, styles.colorBlue)}
                    />
                    <YearCounter
                        counter={activeTimeline.endYear.getFullYear()}
                        className={clsx(styles.year, styles.colorPink)}
                    />
                </h2>

                <Circle
                    timelines={timelines}
                    activeTimelineId={activeTimelineId}
                    onChange={handleTimelineChange}
                    className={styles.circle}
                />

                <CircleControlBlock
                    onNext={handleNext}
                    onPrev={handlePrev}
                    currentNumber={currentIndex + 1}
                    maxNumber={timelines.length}
                />
            </div>

            <div className={clsx(styles.sliderContainer, isLoading && styles.isLoading)}>
                <div className={styles.mobileTitleContainer}>
                    <h3 className={styles.mobileTitle}>{activeTimeline.title}</h3>
                </div>

                <TimelineSlider slides={activeTimeline.slides} />
            </div>
        </div>
    );
};
