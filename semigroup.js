'use strict';

const {identity, apply} = require('fantasy-combinators');

/**

### Semigroup

1. `T.concat(T.concat(a, b), c)` is equivalent to `T.concat(a, T.concat(b, c))` (associativity)

**/

const associativity = T => eq => x => {
    const f = T.of(x);
    const g = T.of(x);
    const h = T.of(x);

    const a = T.concat(T.concat(f, g), h);
    const b = T.concat(f, T.concat(g, h));
    return eq(a, b);
};

module.exports = { associativity };
