var express=require('express')
var app=express()
var path=require('path')

app.get('/',function(req,res){
    res.send('Welcome to the home page of eLearning system')


})
app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, 'student.html'));
});

app.get('/course', (req, res) => {
  res.sendFile(path.join(__dirname, 'course.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
