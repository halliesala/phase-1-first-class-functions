const receivesAFunction = (func) => func();
const returnsANamedFunction = () => {
    const namedFunc = () => "This function has a name!";
    return namedFunc;
};

const returnsAnAnonymousFunction = () => {
    return (x => 2 * x);
}