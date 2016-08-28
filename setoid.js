'use strict';

const {identity, apply} = require('fantasy-combinators')

/**

### Setoid

1. `T.equals(a, a) === true` (reflexivity)
2. `T.equals(a, b) === T.equals(b, a)` (symmetry)
3. If `T.equals(a, b)` and `T.equals(b, c), then `T.equals(a, c)` (transitivity)

**/

const reflexivity = T => eq => x => {
    const y = T.of(x);

    const a = T.equals(y, y);
    const b = true;
    return eq(a, b);
};

const symmetry = T => eq => x => {
    const f = T.of(x);
    const g = T.of(x);

    const a = T.equals(f, g);
    const b = T.equals(g, f);
    return eq(a, b);
};

const transitivity = T => eq => x => {
    const f = T.of(x);
    const g = T.of(x);
    const h = T.of(x);

    const a = T.equals(f, g);
    const b = T.equals(g, h);
    const c = T.equals(f, h);
    return !(a && b) || c;
};

module.exports = { reflexivity
                 , symmetry
                 , transitivity
                 };
