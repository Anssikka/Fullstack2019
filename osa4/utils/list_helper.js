const dummy = (blogs) => {

return 1
}

const totalLikes = (blogs) => {
  if (Array.isArray(blogs) && blogs.length === 0) {
    return 0
  } else if (Array.isArray(blogs)) {
    let likes = blogs.map(o => o.likes).reduce((total, numOfLikes) => total + numOfLikes)
    return likes
  } else if (isObject(blogs) && ('likes' in blogs)) {
    return blogs.likes
  } else if (!isObject(blogs) || !('likes' in blogs)) {
    throw new TypeError('Wrong type of parameters passed')
  }
 
  return null
}


const isObject = (value) => {
  if (value === null) {return false}
  return  (typeof value === 'object')

   /* maybe redundant
    ((typeof value === 'function') || */
}

const favouriteBlog = (blogs) => {
  if ((!Array.isArray(blogs)) || (blogs.length < 2)) {
    throw new TypeError('Passed parameter is not an array or its length is smaller than 2')
  }

  const result = blogs.reduce((blogOne, blogTwo) => {
    return blogOne.likes > blogTwo.likes ? blogOne : blogTwo
  }, {}) 

  return result
}

const mostBlogs = (blogs) => {
  return null
}


module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}