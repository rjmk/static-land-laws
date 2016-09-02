'use strict'

const {identity, thrush} = require('fantasy-combinators')
var jsv = require('jsv')

/**

### Applicative

1. `A.ap(A.of(x => x), v)` is equivalent to `v` (identity)
2. `A.ap(A.of(f), A.of(x)` is equivalent to `A.of(f(x))` (homomorphism)
3. `A.ap(u, A.of(y))` is equivalent to `A.ap(A.of(f => f(y)), u)` (interchange)

**/

const identityʹ = T => eq =>
  jsv.forall("integer", x => {
    const a = T.ap(T.of(identity), T.of(x))
    const b = T.of(x)
    return eq(a, b)
  })

const homomorphism = T => eq =>
  jsc.forall("integer -> integer", "integer", (f, x) => {
    const a = T.ap(T.of(f), T.of(x))
    const b = T.of(f(x))
    return eq(a, b)
  })

const interchange = T => eq => {
  jsc.forall("integer -> integer", "integer", (f, x) => {
    const u = T.of(f)

    const a = T.ap(u, T.of(x))
    const b = T.ap(T.of(thrush(x)), u)
    return eq(a, b)
  })

module.exports = { identity: identityʹ
                 , homomorphism
                 , interchange 
                 }
