var get = function(req, res, next) {
  try {
    return res.json({message: 'users get'});
  } catch(e) {
    next(e);
  }
}

module.exports = get;