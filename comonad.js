'use strict';

const {identity} = require('fantasy-combinators');
const {extend} = require('..');

/**

### Comonad

1. `T.extend(_w => T.extract(_w), w)` is equivalent to `w`
2. `T.extract(T.extend(f, w))` is equivalent to `f(w)`
3. `T.extend(f, w)` is equivalent to `T.map(f, T.extend(x => x, w))`

**/

const leftIdentity = T => eq => x => {
    const a = T.extract(T.extend(f, T.of(x)));
    const b = T.of(x);
    return eq(a, b);
};

const rightIdentity = T => eq => x => {
    const a = T.extend(w => T.extract(w), T.of(x));
    const b = T.of(x);
    return eq(a, b);
};

const associativity = T => eq => x => {
    const a = T.extend(identity, T.of(x));
    const b = T.map(identity, T.extend(identity, T.of(x)));
    return eq(a, b);
};

module.exports = { leftIdentity
                 , rightIdentity
                 , associativity
                 };
