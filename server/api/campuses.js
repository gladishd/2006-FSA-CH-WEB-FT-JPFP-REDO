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

/* Even though we defined the axios route for
 * updating the database, we still need to
 * make sure the API route it goes to ( the same
 * as the URL in the browser) actually has a corresponding
 * post route for adding new stuff to the database. */
router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.json(campus);
  } catch (error) {

  }
})

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

router.delete('/:campusId', async (req, res, next) => {
  try {
    await Campus.destroy({ where: { id: req.params.campusId } });
    res.status(204).send();
  } catch (error) {
    next(error)
  }
})

module.exports = router;
