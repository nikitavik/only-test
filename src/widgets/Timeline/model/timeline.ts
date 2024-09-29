import { Slide } from 'features/TimelineSlider/model/silde';

export type Timeline = {
    id: number;
    title: string;
    startYear: Date;
    endYear: Date;
    slides: Slide[];
};
