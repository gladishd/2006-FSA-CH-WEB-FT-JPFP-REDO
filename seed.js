const { green, red } = require("chalk");
const { db } = require("./server/db");
const { Campus, Student } = require("./server/db");

let campusList = [
  {
    name: 'Wake Forest University',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/journalnow.com/content/tncms/assets/v3/editorial/5/bd/5bdec614-db50-537a-b7e2-a3cd4ebb8466/57c4dcee7d877.image.jpg?crop=1189%2C1189%2C276%2C0&resize=1200%2C1200&order=crop%2Cresize',
    address: '1834 Wake Forest Rd, Winston-Salem, NC 27109',
    description: "Wake Forest University is a private research university in Winston-Salem, North Carolina. Founded in 1834, the university received its name from its original location in Wake Forest, north of Raleigh, North Carolina."
  },
  {
    name: 'University of California',
    imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/200512231338-ucla-campus-large-169.jpg',
    address: 'Oakland, California, United States',
    description: "The University of California is a public university system in the U.S. state of California. The system is composed of the campuses at Berkeley, Davis, Irvine, Los Angeles, Merced, Riverside, San Diego, San Francisco, Santa Barbara, and Santa Cruz, along with numerous research centers and academic abroad centers."
  },
  {
    name: 'Carleton College',
    imageUrl: 'https://d31kydh6n6r5j5.cloudfront.net/uploads/sites/284/2020/01/Carleton_Aerial-4.jpg?resize=1261,938&crop=0,1,100,99',
    address: 'Sayles Hill Campus Center, North College Street, Northfield, MN 55057',
    description: "Carleton College is a private liberal arts college in Northfield, Minnesota. Founded in 1866, the college enrolled 2,105 undergraduate students and employed 269 faculty members in fall 2016."
  },
  {
    name: 'Whitman College',
    imageUrl: 'https://www.whitman.edu/images/About/squaretwigs.jpg',
    address: '345 Boyer Ave, Walla Walla, WA 99362',
    description: "Whitman College is a private liberal arts college in Walla Walla, Washington. Founded as a seminary by a territorial legislative charter in 1859, the school became a four-year degree-granting institution and abandoned its religious affiliation in 1882 and 1907, respectively."
  },
  {
    name: 'Middlebury College',
    imageUrl: 'https://www.liberalartscolleges.com/wp-content/uploads/2012/09/Middlebury-College.jpg',
    address: '14 Old Chapel Rd, Middlebury, VT 05753',
    description: "Middlebury College is a private liberal arts college in Middlebury, Vermont. It was founded in 1800 by Congregationalists."
  },
  {
    name: 'Harvey Mudd College',
    imageUrl: 'https://www.hmc.edu/about-hmc/wp-content/uploads/sites/2/2013/05/visit-campus-header.jpg',
    address: '301 Platt Blvd, Claremont, CA 91711',
    description: "Harvey Mudd College is a private residential undergraduate science and engineering college in Claremont, California. It is one of the institutions of the contiguous Claremont Colleges which share adjoining campus grounds."
  },
  {
    name: 'Centre College',
    imageUrl: 'https://www.centre.edu/wp-content/uploads/2017/11/04202017_Campus_Spring_00027.jpg',
    address: '600 W Walnut St, Danville, KY 40422',
    description: "Centre College is a private liberal arts college in Danville, Kentucky. It is an undergraduate college with an enrollment of approximately 1,400 students. Centre was founded by Presbyterian leaders, and it maintains a loose affiliation with the Presbyterian Church."
  },
  {
    name: 'Wellesley College',
    imageUrl: 'https://www.cappex.com/sites/default/files/images/hero/college/168218_hero.jpg',
    address: '106 Central St, Wellesley, MA 02481',
    description: "Wellesley is a town in Norfolk County, Massachusetts, United States. Wellesley is part of Greater Boston. The population was 27,982 at the time of the 2010 census. Wellesley was the 7th wealthiest city in the United States in 2018."
  },
  {
    name: 'University of California',
    imageUrl: 'https://media.nbclosangeles.com/2019/09/GettyImages-606330033.jpg?resize=1200%2C675',
    address: 'Oakland, California, United States',
    description: "The University of California is a public university system in the U.S. state of California. The system is composed of the campuses at Berkeley, Davis, Irvine, Los Angeles, Merced, Riverside, San Diego, San Francisco, Santa Barbara, and Santa Cruz, along with numerous research centers and academic abroad centers."
  },
  {
    name: 'University of Florida',
    imageUrl: 'https://sweetwaterinn.com/wp-content/uploads/2019/06/facts-about-the-university-of-florida.jpg',
    address: 'Gainesville, FL 32611',
    description: "The University of Florida is a public land-grant, sea-grant, and space-grant research university in Gainesville, Florida. It is a senior member of the State University System of Florida and traces its origins to 1853 and has operated continuously on its Gainesville campus since September 1906."
  },
  {
    name: 'University of California, Davis',
    imageUrl: 'https://www.doingcollege.com/wp-content/uploads/2018/02/UC_Davis.jpg',
    address: '1 Shields Ave, Davis, CA 95616',
    description: "The University of California, Davis, is a public research university and land-grant university adjacent to Davis, California. It is part of the University of California system and has the third-largest enrollment in the system after UCLA and UC Berkeley."
  }]




const studentsToPopulate = [
  {
    firstName: "Indiana",
    lastName: "Frank",
    email: "indiana.frank@mail.com",
    gpa: 4.0,
    campusId: 1
  },
  {
    firstName: "Lilly-Rose",
    lastName: "Lawson",
    email: "lilly-rose.lawson@mail.com",
    gpa: 3.5,
    // not assigned to a campus
  },
  {
    firstName: "Bilal",
    lastName: "Byers",
    email: "bilal.byers@mail.com",
    gpa: 3.0,
    campusId: 1
  },
  {
    firstName: "Holly",
    lastName: "Hale",
    email: "holly.hale@mail.com",
    gpa: 2.5,
    campusId: 7
  },
  {
    firstName: "Jessica",
    lastName: "Tanner",
    email: "jessica.tanner@mail.com",
    gpa: 2.0,
    campusId: 11
  },
  {
    firstName: "Dean",
    lastName: "Gladish",
    email: "gladish.dean@gmail.com",
    gpa: 1.5,
    campusId: 3
  },
  {
    firstName: "Alannah",
    lastName: "Osborn",
    email: "alannah.osborn@mail.com",
    gpa: 1.0,
    campusId: 5
  },
  {
    firstName: "Nyle",
    lastName: "Joyce",
    email: "nyle.joyce@mail.com",
    gpa: 0.5,
    campusId: 4
  },
  {
    firstName: "Kyron",
    lastName: "Talley",
    email: "kyron.talley@mail.com",
    gpa: 0.0,
    campusId: 4
  },
  {
    firstName: "Noor",
    lastName: "Henderson",
    email: "noor.henderson@mail.com",
    gpa: 4.0,
    campusId: 10
  },
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
