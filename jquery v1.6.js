const http = require('http');
const mysql = require('mysql');

console.log("6. Design a web page to fetch the profile of a student from a MySQL database using Node.js");
console.log("Server running at http://localhost:4000");
console.log("Open the browser and type the URL specified here to fetch the student's profile");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student"
});

http.createServer(function (req, res) {
  con.connect(function (err) {
    if (err) throw err;

    con.query("SELECT * FROM Student WHERE USN = '21DMMCA029'", function (err, result) {
      if (err) throw err;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write("6. Design a web page to fetch the profile of a student from a MySQL database using Node.js");
      res.write("<br><br><table border=1 align=center width=50%>");
      res.write("<caption> Profile of: " + result[0].Name + "</caption>");
      res.write("<tr><td> USN </td><td>" + result[0].USN + "</td></tr>");
      res.write("<tr><td> Name </td><td>" + result[0].Name + "</td></tr>");
      res.write("<tr><td> Gender </td><td>" + result[0].Gender + "</td></tr>");
      res.write("<tr><td> Program </td><td>" + result[0].Program + "</td></tr>");
      res.write("<tr><td> Sem </td><td>" + result[0].Sem + "</td></tr>");
      res.write("</table>");
      res.end();
    });
  });
}).listen(4000);


/* 
 CREATE TABLE Student (
  USN VARCHAR(10) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Gender VARCHAR(10) NOT NULL,
  Program VARCHAR(50) NOT NULL,
  Course VARCHAR(50) NOT NULL,
  Sem INT NOT NULL

  INSERT INTO Student (USN, Name, Gender, Program, Course, Sem)
VALUES
  ('21MMCA028', 'John Doe', 'Male', 'MCA', 'AWT', 1),
  ('21MMCA029', 'Jane Smith', 'Female', 'MCA', 'AWT', 1),
  ('21MMCA030', 'David Johnson', 'Male', 'MCA', 'AWT', 1),
  ('21MMCA031', 'Emily Williams', 'Female', 'MCA', 'AWT', 1),
  ('21MMCA032', 'Michael Brown', 'Male', 'MCA', 'AWT', 1),
  ('21MMCA033', 'Sarah Davis', 'Female', 'MCA', 'AWT', 1),
  ('21MMCA034', 'Robert Jones', 'Male', 'MCA', 'AWT', 1),
  ('21MMCA035', 'Jessica Miller', 'Female', 'MCA', 'AWT', 1),
  ('21MMCA036', 'Christopher Wilson', 'Male', 'MCA', 'AWT', 1),
  ('21MMCA037', 'Amanda Taylor', 'Female', 'MCA', 'AWT', 1);

);

*/