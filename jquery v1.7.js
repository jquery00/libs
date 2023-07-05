const http = require("http");
const mysql = require("mysql");

console.log(
  "7. Create a web page to fetch data from the database and display all students of MCA 2nd semester who have chosen AWT Course using Node.js\n"
);
console.log("Server running at http://localhost:8090");
console.log(
  "Open the browser and type the URL specified here to fetch students who have opted for AWT Course"
);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student",
});

http.createServer(function (req, res) {
    con.connect(function (err) {
      if (err) throw err;

      con.query("SELECT * FROM Student WHERE Course ='AWT' AND Program = 'MCA' AND Sem = '2'",function (err, result) {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write("<table border='1'><tr><th>USN</th><th>Name</th><th>Gender</th><th>Program</th><th>Semester</th> <th>Course</th></tr>");

          for (var i = 0; i < result.length; i++) {
            res.write( "<tr><td>" +result[i].USN +"</td><td>" +
                result[i].Name +"</td><td>" +
                result[i].Gender +"</td><td>" +
                result[i].Program +"</td><td>" +
                result[i].Sem +"</td><td>" +
                result[i].Course +"</td></tr>"
            );
          }

          res.write("</table>");
          res.end();
        }
      );
    });
  })
  .listen(2000);


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