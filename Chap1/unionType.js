// example
function addNumberOrString(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid parameter');
}
console.log('>>> Check value ', addNumberOrString('asdadsa', true));
addNumberOrString(true, false);
// 
