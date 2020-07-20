const router = require('express').Router();
const Student = require('../db/student');
const Campus = require('../db/campus');

// this is already at /students in ..index.js and so we don't need to specify the /students here.
router.get('/', async (req, res, next) => {
  try { // have to include req, as req (convention)
    const studentData = await Student.findAll();
    res.json(studentData);
  } catch (error) {
    console.error(error)
  }
}); // router.use is fuzzy matching

router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: { id: req.params.studentId },
      include: [{ model: Campus }] // we want to include the data from the Campus table as well
    });
    res.json(student);
  } catch (error) {
    console.error(error)
  }
})

// next is made possible with Express
router.post('/', async (req, res, next) => {
  try {
    const campus = await Student.create(req.body);
    res.json(campus);
  } catch (error) {
    // console.log('did an error happen')
    console.error(error)
  }
})

router.delete('/:studentId', async (req, res, next) => {
  try {
    await Student.destroy({ where: { id: req.params.studentId } });
    res.status(204).send();
  } catch (error) {
    console.error(error)
  }
})

router.put('/:studentId', async (req, res, next) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findByPk(studentId, { include: Campus });
    await student.update(req.body);
    res.json(student);
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
