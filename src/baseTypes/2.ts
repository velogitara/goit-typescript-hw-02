let anything: unknown = -20;
anything = 'Text';
anything = {};

if (typeof anything === 'string') {
    console.log(anything);
}
if (typeof anything === 'number') {
    console.log(anything);
}
if (typeof anything === 'object' && anything !== null) {
    console.log(anything);
}
export {};
