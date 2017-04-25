import fetch from 'isomorphic-fetch'

function getRecipes () {
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
  .then(posts => posts.map(mapRecipe))
}

function getRecipe (id) {
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
  .then(mapRecipe)
}

function mapRecipe (recipe) {
  recipe.title = recipe.title.rendered
  recipe.content = recipe.content.rendered
  return recipe
}

export {
  getRecipes, getRecipe
}
