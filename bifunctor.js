'use strict';

const {identity, compose} = require('fantasy-combinators');
const {bimap} = require('..');

/**
### Bifunctor

1. `T.bimap(a => a, b => b, p)` is equivalent to `p` (identity)
2. `T.bimap(compose(f1)(f2), compose(g1)(g2), p)` is equivalent to `T.bimap(f2, g2, T.bimap(f1, g1, p))` (composition)

**/

const identityʹ = T => eq => x => {
    const a =T.bimap(identity, identity, T.of(x));
    const b = T.of(x));
    return eq(a, b);
};

const composition = T => eq => x => {
    const a = T.bimap(compose(identity)(identity), compose(identity)(identity), T.of(x));
    const b = T.bimap(identity, identity, T.bimap(identity, identity, T.of(x)));
    return eq(a, b);
};

modules.exports = { identity: identityʹ
                  , composition 
                  };
