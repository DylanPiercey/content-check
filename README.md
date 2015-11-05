# Content Check
Attempt to guess the content type for some data.
# Installation

#### Npm
```console
npm install content-check
```

# Example

```javascript
var fs = require('fs');
var check = require('content-check');

check("hello"); // "text/plain"
check("<body></body>"); // "text/html"
check({ a: 1 }); // "application/json"
check(new Buffer("hello")); // "application/octet-stream"
check(fs.createReadStream(__dirname + "/index.js")); // "application/javascript"
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
