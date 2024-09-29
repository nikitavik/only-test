type TransformProperty = Pick<CSSStyleDeclaration, 'transform'>;

export const calculateTransform = (
    diameter: number,
    index: number,
    totalPoints: number,
    rotationDegree: number
): TransformProperty => {
    const radius = diameter / 2;

    const angle = (2 * Math.PI * index) / totalPoints - Math.PI / 2;

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return {
        transform: `translate(${x}px, ${y}px) rotate(${-rotationDegree}deg`,
    };
};
