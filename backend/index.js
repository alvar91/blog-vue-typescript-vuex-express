const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json(), cors());

app.post('/login', (req, res)=>{
  const token = jwt.sign({user: 'user name', admin: true}, 'alvar91', {expiresIn: '5d'});
  try{
    if(!(req.body.email === 'test@gmail.com' && req.body.password === '123456')){
      throw new Error('this user not found');
    }
    res.status(200).send({accessToken: token});
  }
  catch(e){
    res.status(400).send('User not found');
    console.log(e);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`app listening port ${port}`);
});

