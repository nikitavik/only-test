import { FC, SVGProps } from 'react';

export type ClassNameMap<ClassKey extends string = string> = Partial<
    Record<ClassKey, string | undefined>
>;

declare global {
    type Classes<T extends string> = Partial<ClassNameMap<T>>;
    type SvgComponent = FC<SVGProps<SVGSVGElement>>;
}
