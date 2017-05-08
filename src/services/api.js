import fetch from 'isomorphic-fetch'

export function getRecipes () {
  const url = 'http://95.85.11.126/wp-json/wp/v2/recipes'

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
  .then(posts => posts.map(normalize))
}

export function getRecipeById (id) {
  const url = `http://95.85.11.126/wp-json/wp/v2/recipes/${id}`

  return fetch(url).then(response => {
    if (response.status >= 400) {
      return Promise.reject({
        message: 'Bad resposne from server'
      })
    }
    return response.json()
  })
  .then(
    recipe => recipe !== void 0
      ? recipe
      : Promise.reject({
        message: 'Recipe unavailable'
      })
  )
  .then(normalize)
}

export function getRecipeBySlug (id) {
  const url = `http://95.85.11.126/wp-json/wp/v2/recipes?slug=${id}`

  return fetch(url).then(response => {
    if (response.status >= 400) {
      return Promise.reject({
        message: 'Bad resposne from server'
      })
    }
    return response.json()
  })
  .then(
    recipe => recipe !== void 0
      ? recipe[0]
      : Promise.reject({
        message: 'Recipe unavailable'
      })
  )
  .then(normalize)
}

function normalize (recipe) {
  console.log(recipe)
  recipe.title = recipe.title.rendered
  recipe.content = recipe.content.rendered
  recipe.gallery = recipe.acf.gallery
  recipe.directions = recipe.acf.directions
  return recipe
}
