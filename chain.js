'use strict';

/**

### Chain

1. `T.chain(g, T.chain(f, m))` is equivalent to T.chain(x => T.chain(f(x), g), m)` (associativity)

**/

const associativity = T => eq => x => {
    const a = T.chain(T.of, T.chain(T.of, T.of(x)));
    const b = T.chain(x => T.chain(T.of, T.of(x)));
    return eq(a, b);
};

module.exports = { associativity };
