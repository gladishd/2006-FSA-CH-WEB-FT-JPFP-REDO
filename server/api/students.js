const router = require('express').Router();
const Student = require('../db/student');

// this is already at /students in ..index.js and so we don't need to specify the /students here.
router.get('/', async (req, res, next) => {
  try {
    const studentData = await Student.findAll();
    res.json(studentData);
  } catch (error) {
    console.error(error)
    next(error);
  }
});

module.exports = router;
