export const padNumber = (firstNumber: number, secondNumber: number) => {
    const secondLength = String(secondNumber).length;
    const paddedFirstNumber = String(firstNumber).padStart(secondLength, '0');
    return `${paddedFirstNumber}/${secondNumber}`;
};
