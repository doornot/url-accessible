# URL Accessible

Check if a URL accessible.

### Install

`yarn add url-accessible -S`

### Usage

```js
import urlAccessible from 'url-accessible'

await urlAccessible('https://www.baidu.com/')
//=> true

await urlAccessible('https://www.baidu.com/404test')
//=> false

await urlAccessible('http://localhost:8080/')
//=> false

await urlAccessible('not a url')
//=> false
```
