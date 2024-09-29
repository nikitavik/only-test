import { faker } from '@faker-js/faker/locale/ru';

import { Slide, Timeline } from './timeline';

const generateTimelineMock = (length: number) => {
    const timelines: Timeline[] = [];

    for (let i = 1; i < length; i++) {
        const startDate = faker.date.anytime();
        const endDate = faker.date.future({ refDate: startDate, years: 15 });

        const range = endDate.getFullYear() - startDate.getFullYear();

        const slides: Slide[] = Array.from({ length: range }, (_, x) => x + 1).map((j) => ({
            year: new Date(startDate.getFullYear() + j, 0, 1),
            description: faker.lorem.paragraph(1),
        }));

        const title = faker.word.noun();

        timelines.push({
            id: i,
            title: title.substring(0, 1).toUpperCase() + title.substring(1),
            startYear: startDate,
            endYear: endDate,
            slides: slides,
        });
    }

    return timelines;
};

export const mockTimelines = generateTimelineMock(6);
