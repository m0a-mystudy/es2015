class TimeoutError extends Error {}
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


function cancelableXHR(url) {
  let req = new XMLHttpRequest()
  let promise = new Promise((resolve, reject) => {
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
    req.onabort = () => {
      reject(new Error('abort this request'))
    }
    req.send()
  })
  let abort = () => {
    if (req.readyState !== XMLHttpRequest.UNSET) {
      req.abort()
    }
  }
  return {
    promise,
    abort
  }
}

function timeoutPromise (promise, ms) {
  let delayPromise = new Promise(resolve => {
    setTimeout(resolve, ms)
  })
  let timeout = delayPromise.then(() => {
    return Promise.reject(new TimeoutError('Operation timed out after ' + ms + ' ms'))
  })
  return Promise.race([timeout, promise])
}

let object = cancelableXHR('https://httpbin.org/delay/10')
timeoutPromise(object.promise, 15000).then(content => { console.log('Contents: ' + content) })
.catch(err => {
  if (err instanceof TimeoutError) {
    object.abort()
    console.log('timeput err: ' + err)
  } else {
    console.log('err:' + err)
  }
})

