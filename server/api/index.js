"use strict";

const router = require("express").Router();

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:

router.use('/campuses', require('./campuses'));
// so GET /api/campuses knows where to look.

// we have to use the second route, which is for students and is for Tier 1.
router.use('/students', require('./students'));

//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!


router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

// error handling endware, for when the errors fall through:
router.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

module.exports = router;
