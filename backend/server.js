const express = require('express');
require('dotenv').config();
const nodemailer = require("nodemailer");
const multer = require('multer');
const path = require('path');
const username = process.env.USER_NAME;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service:"Gmail",
  auth:
  {
    user:username,
    pass:emailPassword,
  }
});
const fs = require('fs');
const uploadDestination = './uploads'
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

fs.access(uploadDestination,fs.constants.W_OK,(err)=>
{
  if(err)
  {console.error(err)}
  else{
    console.log("upload available!")
  }
})

const storage = multer.diskStorage({
  destination:(req,file,cb) =>
  {
    cb(null,'./uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})
const upload = multer({storage});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.post('/upload',upload.single('design'),(req,res)=>
{
  console.log('Received File:', req.file);
  res.status(200).send("File Uploaded");
})


app.post('/send-email',upload.single('design'),(req,res)=>
{
  console.log(req.file);
  if(!req.file)
  {
    console.log('no file uploaded');
    return res.status(400).send('No file uploaded');
  }

  

  console.log(req.body);

  const { email,name, phoneNumber, quantity, selectedOptions, otherOptionText } = req.body;
  const designFile = req.file;
  const mailSettings = {
    from:username,
    to:username,
    subject:'Screen Printing Quote - ' + name,
    html:`
      <h1> Screen Printing Quote Submission </h1>
      <ul>
        <li>Name: ${name} </li>
        <li>Email: ${email} </li>
        <li>Phone Number: ${phoneNumber}</li>
        <li>Quantity: ${quantity}</li>
        <li>Selected Options: ${selectedOptions}</li>
        <li>Other: ${otherOptionText}</li>
      </ul>
    `,
    attachments:[
      {
      filename:designFile.filename,
      path:path.join(__dirname,'uploads',designFile.originalname),
      contentType:'image/jpeg'
      }
    ],
  }
  
  console.log(designFile.buffer);
  transporter.sendMail(mailSettings,(error,info)=>
  {
    if(error)
    {
      console.error("Error sending email:",error);
    }
    else{
      console.log("Email sent successfully",info.response);
    }
  })
  res.status(200).send('Email sent successfully');
});

app.post('/send-design',(req,res)=>
{
  const {name,email,phoneNumber,description} = req.body;
  console.log(req.body);
  const mailSettings = 
  {
    from:username,
    to:username,
    subject:'Screen Printing Quote - '+ name,
    html:`
      <h1> Logo Design Quote Submission </h1>
      <ul>
        <li>Name: ${name} </li>
        <li>Email: ${email} </li>
        <li>Phone Number: ${phoneNumber}</li>
        <li>Description: ${description}</li>
      </ul>
    `,
  }

  transporter.sendMail(mailSettings,(error,info)=>
  {
    if(error)
    {
      console.error("error sending email:",error);
    }
    else{
      console.log('Email sent successfully',info.response);
    }
  })
   res.status(200).send('Email Sent Successfully');
})

app.get('/api', (req, res) => {
  res.json({ message: 'API endpoint' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
