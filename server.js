const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const nodemailer = require('nodemailer');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'tensa',
        database: 'careseeker'
    }
})

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "register.html"));
})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(intialPath, "dashboard.html"));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(intialPath, "admindash.html"));
})

app.post('/register-user', (req, res) => {
    const { firstname, lastname, email, mobileno, password, image, qualification, experience, hourlyRate, bio } = req.body;

    if(!firstname.length || !lastname.length || !email.length || !mobileno.length || !password.length || !image.length || !qualification.length || !experience.length || !hourlyRate.length || !bio.length){
        res.json('fill all the fields');
    } else{
        alert("hello");
        db("users").insert({
            firstname: firstname,
            lastname: lastname,
            mobileno: mobileno,
            email: email,
            password: password,
            image: image,
            qualification: qualification,
            experience: experience,
            hourlyRate: hourlyRate,
            bio: bio
        })
        .returning(["firstname", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('email already exists');
            }
        })
    }
})



app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})








const transporter = nodemailer.createTransport({
  service: 'Google',
  auth: {
    user: 'bc180404460@gmail.com',
    pass: 'password',
  },
});



const user = {
    email: 'bc180404460@gmail.com',
 
  };
  
 
  const mailOptions = {
    from: 'CareSeekre@email.com', 
    to: user.email, 
    subject: 'Approval Notification',
    text: `Hello ${user.firstName},\n\nYour registration has been approved. You can now log in to our platform.\n\nThank you!`,
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
  