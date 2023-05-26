const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://archana:archana123@cluster0.baq3pi9.mongodb.net/')
.then(()=>{
 console.log('db connection established');
})
.catch((err)=>{
 console.log(err);
});