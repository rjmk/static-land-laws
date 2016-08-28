# Static Land Laws

Eventually I want this to be a test suite that one can use to validate a static land instance.

Usage might look like

```js
var isApplicative = require('static-land-laws/applicative')
var myApplicative = require('./')

isApplicative(myApplicative, myApplicative.equals) // true / false
```

**The code in this repo has been lightly adapted from the laws in the Fantasy Land repo**
