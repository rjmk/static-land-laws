'use strict';

const {identity, compose} = require('fantasy-combinators');

/**
### Profunctor

1. `T.promap(a => a, b => b, p)` is equivalent to `p` (identity)
2. `T.promap(compose(f1)(f2), compose(g1)(g2), p)` is equivalent to `T.promap(f2, g2, T.promap(f1, g1, p))` (composition)

**/

const identityʹ = T => eq => x => {
    const a = T.promap(identity, identity, T.of(x));
    const b = T.of(x);
    return eq(a, b);
};

const composition = t => eq => x => {
    const a = T.propmap(compose(identity)(identity), compose(identity)(identity), T.of(x));
    const b = T.promap(identity, identity, T.promap(identity, identity, x));
    return eq(a, b);
};

module.exports = { identity: identityʹ
                 , composition
                 };
