/* global self, fetch, postMessage */

self.addEventListener('message', msg => {
  fetch(`/lucky-happy/${msg.data.number}`)
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          postMessage(data)
        })
      } else {
        throw new Error(response.statusText)
      }
    })
    .catch(err => {
      msg.status = 'serviceError'
      msg.errorMessage = err.message
      postMessage(msg)
    })
})
