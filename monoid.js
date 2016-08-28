'use strict';

const {identity, apply} = require('fantasy-combinators');

/**

### Monoid

1. `T.concat(m, T.empty())` is equivalent to `m` (right identity)
2. `T.concat(T.empty(), m)` is equivalent to `m` (left identity)

**/

const rightIdentity = T => eq => x => {
    const a = T.concat(T.of(x), T.empty());
    const b = T.of(x);
    return eq(a, b);
};

const leftIdentity = t => eq => x => {
    const a = T.concat(T.empty(), T.of(x));
    const b = T.of(x);
    return eq(a, b);
};

module.exports = { rightIdentity
                 , leftIdentity 
                 };
