const { faker } = require("@faker-js/faker");

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Mahi@7781",
});
//generating random users
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
//Inserting new data
let q = "INSERT INTO user (id,username,email,passward) VALUES ?";
let data=[];
for(i=1;i<=100;i++){
  data.push(getRandomUser());//100 fake users data is here in this array
}
// let users = [
//   ["123b", "shubham_07b", "shubhamranjane16@gmail.comb", "Mahi@7781b"],
//   ["123c", "shubham_07c", "shubhamranjane16@gmail.comc", "Mahi@7781c"],
// ];

try {
  connection.query(q,[data], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();


