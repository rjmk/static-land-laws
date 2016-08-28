'use strict';

const {identity, compose} = require('fantasy-combinators');

/**

### Apply

1. `T.ap(T.ap(T.map(f => g => x => f(g(x))), a), u), v) is equivalent to `T.ap(a, T.ap(u, v))` (composition)

**/

const composition = T => eq => x => {
    const y = T.of(identity);

    const a = T.ap(T.ap(T.map(compose, y), y), y);
    const b = T.ap(y, T.ap(y, y));
    return eq(a, b);
};

module.exports = { composition };
