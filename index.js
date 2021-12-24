function receivesAFunction (callback) {
    callback(console.log("Hey, I'm a callback function!"));
};

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return () => {console.log("Something.")};
}