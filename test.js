const urlAccessible = require('./index');

(async function() {
  console.log(await urlAccessible('https://www.baidu.com/'))
  console.log(await urlAccessible('https://www.baidu.com/404test'))
  console.log(await urlAccessible('http://localhost:8080/'))
  console.log(await urlAccessible('not a url'))
  console.log(await urlAccessible('url'))
})()
