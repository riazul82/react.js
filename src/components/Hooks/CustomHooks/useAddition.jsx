const useAddition = (values) => {
    let sum = 0;
    for (let x of values) {
        sum += x;
    }
    return { sum };
}

export default useAddition;
