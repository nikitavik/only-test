import { Slide } from 'features/TimelineSlider';

export type Timeline = {
    id: number;
    title: string;
    startYear: Date;
    endYear: Date;
    slides: Slide[];
};
