const router = require('express').Router();
// import the Campus Sequelize model:
const Campus = require('../db/campus');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    res.json(allCampuses);
  } catch (error) {
    console.error(error)
    next(error);
  }
});

module.exports = router;
