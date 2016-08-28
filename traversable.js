'use strict';
const {identity} = require('fantasy-combinators');


// Lifted from the spec
const Compose = A => B => {

  of(x) {
    return A.of(B.of(x))
  },

  ap(a1, a2) {
    return A.ap(A.map(b1 => b2 => B.ap(b1, b2), a1), a2)
  },

  map(f, a) {
    return A.map(b => B.map(f, b), a)
  }

}

const Id = {
  of(x) {
    return x
  },
  
  ap(f, x) {
    return f(x)
  },
  
  map(f, x) {
    return f(x)
  },
  
  chain(f, x) {
    return f(x)
  },
  
  sequence(F, x) {
    return x
  }
}

/*

### Traversable

1. `t(T.sequence(F, u))` is equivalent to `T.sequence(G, T.map(t, u))`
where `t` is a natural transformation from `F` to `G` (naturality)

2. `T.sequence(F, T.map(F.of, u))` is equivalent to `F.of`, for any applicative F (identity)

3. `T.sequence(Compose(A)(B), u)` is equivalent to
   `A.map(v => T.sequence(B, v), T.sequence(A, u))` (composition)

*/

const naturality = T => eq => x => {
    const a = identity(T.sequence(T, T.of(x)));
    const b = T.sequence(T, T.map(identity, T.of(x)));
    return eq(a, b);
};

const identityʹ = T => eq => x => {
    const a = T.sequence(Id, T.map(Id.of, T.of(x)));
    const b = Id.of(T.of(x));
    return eq(a, b);
};

const composition = T => eq => x => {
    const ComposeAB = Compose(Id)(Id)
    const a = T.sequence(ComposeAB, T.of(x));
    const b = Id.map(v => T.sequence(Id, v), T.sequence(Id, T.of(x)));
    return eq(a, b);
};

module.exports = { naturality
                 , identity: identityʹ
                 , composition 
                 };
