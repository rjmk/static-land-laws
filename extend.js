'use strict';

const {identity} = require('fantasy-combinators');

/**

### Extend

1. `T.extend(f, T.extend(g, w))` is equivalent to `T.extend(_w => f(T.extend(g, _w), w))` (associativity)

**/

const associativity = T => eq => x => {
    const a = T.extend(identity, T.extend(identity, T.of(x)));
    const b = T.extend(identity, w => identity(T.extend(identity, w)));
    return eq(a, b);
};

module.exports = { associativity };
