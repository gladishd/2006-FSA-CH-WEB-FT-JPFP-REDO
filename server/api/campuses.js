const router = require('express').Router();
// import the Campus Sequelize model:
const Campus = require('../db/campus');
const Student = require('../db/student');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    res.json(allCampuses);
  } catch (error) {
    // console.error(error)
    next(error);
  }
});

router.get('/:campusIdSlug', async (req, res, next) => {
  try {
    const specificCampusWithStudents = await Campus.findOne({
      where: { id: req.params.campusIdSlug }, // query the Student model as well
      include: [{ model: Student }]
    });
    res.json(specificCampusWithStudents);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
