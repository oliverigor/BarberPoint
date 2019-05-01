module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.local.user = req.session.user

    return next()
  }

  return res.redirect('/')
}
