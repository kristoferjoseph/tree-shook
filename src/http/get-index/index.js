const html = require('@begin/enhance')()

exports.handler = function http() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html`<hello-world greeting="Halo Verld!"></hello-world>`
  }
}
