const { green, red } = require("chalk");
const { db } = require("./server/db");
const { Campus, Student } = require("./server/db");

const campusList = [
  {
    name: 'FullStack Academy',
    imageUrl: 'https://i.pinimg.com/originals/7d/5e/c6/7d5ec6af649f2eea51d36574eca5026f.jpg',
    address: "4 E. Mayflower Ave. Elmhurst, NY 11373",
    description: "the first academy"
  },
  {
    name: 'FullStack Academyy',
    imageUrl: 'https://i.insider.com/5d49c45c100a24238a318c3b?width=1100&format=jpeg&auto=webp',
    address: "1 N. Gonzales Dr. Solon, OH 44139",
    description: "the second academy"
  },
  {
    name: 'FullStack Academe',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/University_of_texas_at_austin_main_building_2014.jpg',
    address: "4 E. Mayflower Ave. Elmhurst, NY 11373",
    description: "the third academy"
  },
  {
    name: "FullStack Academy's fourth campus",
    imageUrl: 'https://www.utica.edu/sites/default/files/styles/width_2520x1120/public/2020-03/uc_science_annex_rendering.jpg?h=5ae4ef65&itok=AcixSjFp',
    address: "45 La Sierra St. West Des Moines, IA 50265",
    description: "the fourth academy"
  }
]

const studentsToPopulate = [
  {
    firstName: "FullStack's first",
    lastName: "snoo",
    email: "snoo1@fllstck.com",
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: "FullStack's second",
    lastName: "snoo",
    email: "snoo2@fullstk.com",
    gpa: 4.0,
    // not assigned to a campus
  },
  {
    firstName: "FullStack's third",
    lastName: "snoo",
    email: "snoo3@fullstaaak.com",
    gpa: 4.0,
    campusId: 3
  },
  {
    firstName: "FullStack's fourth",
    lastName: "snoo",
    email: "snoo4@fullstaaak.com",
    gpa: 4.0,
    campusId: 3 // the third campus has two students
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(campusList.map(campus => Campus.create(campus))); // provides status message and way to resolve/reject what's happening
    // centralized object; run all the calls in parallel.  The awaits are synchronous, NOT asynchronous.

    await Promise.all(studentsToPopulate.map(student => Student.create(student)));
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
