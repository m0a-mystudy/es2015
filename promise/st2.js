var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


function getURL (url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = () => {
      reject(new Error(req.statusText))
    }
    req.send()
  })
}

// const url = 'http://httpbin.org/ip'
// getURL(url).then(success => {
//   console.log(success)
// }).catch(err => {
//   console.log('err: ' + err)
// })

const url = 'http://httpbin.org/status/500'
getURL(url).then(success => {
  console.log('success: ' + success)
}).catch(err => {
  console.log('err: ' + err.stack)
})
