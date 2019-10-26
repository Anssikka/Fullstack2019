
const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === 'ValidationError') {
    return response.status(400).json({
      error: error.message
    })
  }

  next(error)
}

const tokenExtractor = (request, res, next) => {
  const authorization = request.get('Authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    request.token = authorization.substring(7)
  }
  next()
}


module.exports = {
  errorHandler,
  tokenExtractor
}