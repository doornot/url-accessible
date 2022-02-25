const http = require('http')
const { URL, parse } = require('url')

const isUrl = (str) => {
  if (!str || typeof str !== 'string') {
    return false
  }
  const trimmedStr = str.trim()
  if (trimmedStr.includes(' ')) {
    return false
  }
  try {
    new URL(str)
    return true
  } catch (err) {
    return false
  }
}

const isLocal = (url) => {
  return url.includes('localhost') || url.includes('127.0.0.1')
}

const urlAccessible = (url) => {
  return new Promise((resolve) => {
    if (!isUrl(url)) {
      resolve(false)
      return
    }
    const { host, pathname, port } = parse(url)
    const options = {
      method: 'GET',
      host: isLocal(host) ? 'localhost' : host,
      path: pathname,
      port: port || 80
    }
    const req = http.request(options, (res) => {
      resolve(res.statusCode < 400)
    })
    req.on('error', (error) => {
      resolve(false)
    })
    req.end()
  })
}

module.exports = urlAccessible
