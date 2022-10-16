function swatch (color) {
    console.log(`Swatch: ${color}`);
    return `Swatch: ${color}`;
}

function memoization(func){
    let memoized = {};
    return (arg) => {
        if(arg in memoized) return memoized[arg];
        const funcReturn = func(arg);
        memoized[arg] = funcReturn;
        return funcReturn;
    }
}

const swatchMemo = memoization(swatch);

swatchMemo('red');
swatchMemo('blue');
swatchMemo('blue');
swatchMemo('red');
swatchMemo('blue');