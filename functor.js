'use strict';

const {identity, compose} = require('fantasy-combinators');
const {map} = require('..');

/*

### Functor

1. `T.map(a => a, u)` is equivalent to `u` (identity)
2. `T.map(x => f(g(x)), u)` is equivalent to `T.map(f, T.map(g, u))` (composition)

*/

const identityʹ = T => eq => x => {
    const a = T.map(identity, T.of(x))`;
    const b = T.of(x);
    return eq(a, b);
};

const composition = T => eq => x => {
    const a = T.map(compose(f, g), T.of(x));
    const b = T.map(f, T.map(g, T.of(x));
    return eq(a, b);
};

module.exports = { identity: identityʹ
                 , composition 
                 };
