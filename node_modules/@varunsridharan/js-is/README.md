# JS IS
ES6 JavaScript Type Check Library.

## ⚙️Installation
The preferred way to install this extension is through [NPM][NPM].

    $ npm install @varunsridharan/js-is --save-dev


## 🚀 Usage

```javascript
import { isUndefined } from "@varunsridharan/js-is"
var var1 = 'your-value';

if( isUndefined(var1) ){
    alert('Var1 is defined')
}

if( isUndefined(var2) ){
    alert('Var1 is defined')
} else {
    alert('Var2 is NOT defined')
}
```

## 🏗 Functions
### `isNull`
```javascript  
import { isNull } from "@varunsridharan/js-is"

isNull( null ); // true

isNull( 42 ); // false
```

### `isObject`
```javascript  
import { isObject } from "@varunsridharan/js-is"

isObject( { foo: 'bar' } ); // true

isObject( null ); // false

isObject( 'foo' ); // false
```

### `isArguments`
```javascript  
import { isArguments } from "@varunsridharan/js-is"

var getArguments = function() {
	return arguments;
};

isArguments( getArguments() ); // true

isArguments( { foo: 'bar' } ); // false
```

### `isArray`
```javascript  
import { isArray } from "@varunsridharan/js-is"

isArray( ['foo', 'bar', 'baz'] ); // true

isArray( {foo: 'bar'} ); // false
```

### `isBoolean`
```javascript  
import { isBoolean } from "@varunsridharan/js-is"

isBoolean( true ); // true

isBoolean( false ); // true

isBoolean( 'value' ); // false
```

### `isTrue`
```javascript  
import { isTrue } from "@varunsridharan/js-is"

isTrue( true ); // true

isTrue( false ); // false
```

### `isFalse`
```javascript  
import { isFalse } from "@varunsridharan/js-is"

isFalse( false ); // true

isFalse( true ); // false
```

### `isDate`
```javascript  
import { isDate } from "@varunsridharan/js-is"

isDate( new Date() ); // true

isDate( '20/09/2020' ); // false
```

### `isError`
```javascript  
import { isError } from "@varunsridharan/js-is"

isError( new Error() ); // true

isError( 'unknown error' ); // false
```

### `isFunction`
```javascript  
import { isFunction } from "@varunsridharan/js-is"

const tolowercase = ( string ) => String.toLowerCase.call( string );

function myfunction() {
	return 'Nothing';
}

isFunction( toString ); // true

isFunction( tolowercase ); // true

isFunction( myfunction ); // true

isFunction( { foo: bar } ); // false
```

### `isNan`
```javascript  
import { isNan } from "@varunsridharan/js-is"

isNan( NaN ); // true

isNan( 1 ); // false

isNan( '1' ); // false
```

### `isNull`
```javascript  
import { isNan } from "@varunsridharan/js-is"

isNull( null ); // true

isNull( 1 ); // false

isNull( '1' ); // false
```

### `isNumber`
```javascript  
import { isNumber } from "@varunsridharan/js-is"

isNumber( 42 ); // true

isNumber( '42' ); // false

isNumber( NaN ); // false
```

### `isNumeric`
```javascript  
import { isNumeric } from "@varunsridharan/js-is"

isNumeric( 42 ); // true

isNumeric( '42' ); // true

isNumeric( NaN ); // false
```

### `isString`
```javascript  
import { isNumeric } from "@varunsridharan/js-is"

isNumeric( '42' ); // true

isNumeric( 'your-string' ); // true

isNumeric( 42 ); // false

isNumeric( NaN ); // false
```

### `isUndefined`
```javascript  
import { isUndefined } from "@varunsridharan/js-is"

const var2 = 'somevalue';

isUndefined( var1 ); // true

isUndefined( var2 ); // false

isUndefined( 'your-string' ); // false
```

### `isPlainObject`
```javascript  
import { isPlainObject } from "@varunsridharan/js-is"

isPlainObject( {} ); // true

isUndefined( var2 ); // false

isUndefined( 'your-string' ); // false
```

### `isWindow`
```javascript
import { isWindow } from "@varunsridharan/js-is"

isWindow( window ); // true

isWindow( document ); // false
```

### `isElement`
```javascript
import { isDocument } from "@varunsridharan/js-is"

isDocument( yourelem ); // true

isDocument( 'window' ); // false
```

### `isDocument`
```javascript
import { isDocument } from "@varunsridharan/js-is"

isDocument( document ); // true

isDocument( window ); // false
```

---

## 📝 Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[Checkout CHANGELOG.md](/CHANGELOG.md)

## 🤝 Contributing
If you would like to help, please take a look at the list of [issues](issues/).

## 💰 Sponsor
[I][twitter] fell in love with open-source in 2013 and there has been no looking back since! You can read more about me [here][website].
If you, or your company, use any of my projects or like what I’m doing, kindly consider backing me. I'm in this for the long run.

- ☕ How about we get to know each other over coffee? Buy me a cup for just [**$9.99**][buymeacoffee]
- ☕️☕️ How about buying me just 2 cups of coffee each month? You can do that for as little as [**$9.99**][buymeacoffee]
- 🔰         We love bettering open-source projects. Support 1-hour of open-source maintenance for [**$24.99 one-time?**][paypal]
- 🚀         Love open-source tools? Me too! How about supporting one hour of open-source development for just [**$49.99 one-time ?**][paypal]

## 📜  License & Conduct
- [**General Public License v3.0 license**](LICENSE) © [Varun Sridharan](website)
- [Code of Conduct](code-of-conduct.md)

## 📣 Feedback
- ⭐ This repository if this project helped you! :wink:
- Create An [🔧 Issue](issues/) if you need help / found a bug

## Connect & Say 👋
- **Follow** me on [👨‍💻 Github][github] and stay updated on free and open-source software
- **Follow** me on [🐦 Twitter][twitter] to get updates on my latest open source projects
- **Message** me on [📠 Telegram][telegram]
- **Follow** my pet on [Instagram][sofythelabrador] for some _dog-tastic_ updates!

---

<p align="center">
<i>Built With ♥ By <a href="https://sva.onl/twitter"  target="_blank" rel="noopener noreferrer">Varun Sridharan</a> 🇮🇳 </i>
</p>

---

<!-- Personl Links -->
[paypal]: https://sva.onl/paypal
[buymeacoffee]: https://sva.onl/buymeacoffee
[sofythelabrador]: https://www.instagram.com/sofythelabrador/
[github]: https://sva.onl/github/
[twitter]: https://sva.onl/twitter/
[telegram]: https://sva.onl/telegram/
[email]: https://sva.onl/email
[website]: https://sva.onl/website/
[NPM]: https://npmjs.com
