const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'fakeusers',
    password:'Mahi@7781'
})

// using the fakers id
let  createRandomUser=()=> {
    return[
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password()
    ];
  }


let data=[];
for(i=1;i<=100;i++){
    data.push(createRandomUser())
}

let q="INSERT INTO fakeinfo (id,username,email,password) VALUES ?";
try{
    connection.query(q,[data],(err,result)=>{
        if(err){
            throw err
        }
        console.log(result);
    })
}catch(err){
    console.log(err);
}

connection.end();//to stop the connection