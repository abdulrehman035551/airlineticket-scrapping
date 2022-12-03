var mongoose = require('mongoose')
var express = require('express');
let userModel = require('./DB/userSchema');
var app = express();
var PORT =  process.env.PORT || 5000; 

app.use(express.json());

const DB = 'mongodb+srv://khan:khan123@cluster0.ebqyutn.mongodb.net/usersdata?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify:false

})
    .then(() => {
        console.log("connection scuss")
    }).catch((error) => {
        console.log(error)
    })
app.get('/home', (req, res) => {

    res.json('this is our backend');
    console.log('asdsad')

})

app.post('/users', async (req, res) => {

    userModel.create(req.body , (error,data) => {
        if (error) {
            res.send({error:error.message});
        }
        else {
            res.send({message: "Data added Successfu;;t"});
        }
    })

});

app.listen(PORT, function (err) {
    if (err) console.log(err);

    console.log("Server listening on PORT", PORT);
});