var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');
http.createServer(function (req, res) {
 if (req.url == '/fileupload') {
 var form = new formidable.IncomingForm();
 form.parse(req, function (err, fields, files) {
 var oldpath = files.filetoupload.filepath;
 var newpath = 'g:/AWT PL/' + files.filetoupload.originalFilename;
 console.log(oldpath);
 res.write(oldpath);
 res.write(newpath);
 fs.copyFileSync(oldpath, newpath);

 mv(oldpath,newpath, function(err) {
 if (err) { throw err; }
console.log('file moved successfully');
res.write('File uploaded and moved!');
res.end();
});
 /*fs.copyFileSync(oldpath, newpath, function (err) {
 if (err) throw err;
 res.write('File uploaded and moved!');
 res.end();
 }); */
});
 } else {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
res.write('<h1>FILE UPLOAD PROGRAM USING NODEJS</h1>');
 res.write('<input type="file" name="filetoupload"><br>');
 res.write('<br><input type="submit">');
 res.write('</form>');
 return res.end();
 }
}).listen(8092);