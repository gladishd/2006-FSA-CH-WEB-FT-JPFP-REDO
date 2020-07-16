const router = require('express').Router();
const Student = require('../db/student');
const Campus = require('../db/campus');

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

router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.studentId },
      include: [{ model: Campus }] // we want to include the data from the Campus table as well
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
