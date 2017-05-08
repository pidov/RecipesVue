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

function sum (values) {
  let total = 0
  for (var i = 0; i < values.length; i++) {
    const value = Number(values[i]) || 0
    total += value
  }
  return total
}

function getTotalPreparationTime (recipe) {
  const timesByStep = recipe.directions.map(direction => direction.duration)
  return sum(timesByStep)
}

function normalize (recipe) {
  recipe = Object.assign(recipe, recipe.acf)
  delete recipe.acf
  recipe.title = recipe.title.rendered
  recipe.content = recipe.content.rendered
  recipe.preparation_time = getTotalPreparationTime(recipe)

  return recipe
}
