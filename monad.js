'use strict';

const {identity, apply} = require('fantasy-combinators');
const {of, chain} = require('..');

/**

### Monad

1. `T.chain(f, T.of(a))` is equivalent to `f(a)` (left identity)
2. `T.chain(T.of, m)` is equivalent to `m` (right identity)

**/

const leftIdentity = T => eq => x => {
    const a =  T.chain(f, T.of(x));
    const b = identity(x);
    return eq(a, b);
};

const rightIdentity = T => eq => x => {
    const a = T.chain(T.of, T.of(x));
    const b = T.of(x);
    return eq(a, b);
};

module.exports = { leftIdentity
                 , rightIdentity 
                 };
