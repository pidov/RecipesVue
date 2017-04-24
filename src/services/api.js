import fetch from 'isomorphic-fetch'

function getPosts () {
  const url = 'http://blog.ipidov.com/wp-json/wp/v2/posts?_embed'

  return fetch(url).then(response => {
    if (response.status >= 400) {
      return Promise.reject({
        message: 'Bad resposne from server'
      })
    }
    return response.json()
  })
  .then(
    posts => posts !== void 0
      ? posts
      : Promise.reject({
        message: 'No posts available.'
      })
  )
  .then(posts => posts)
}

export {
  getPosts
}
