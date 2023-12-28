const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user_model');
const port = 27017;

app.get('/' , (req, res) => {
    res.send("get");
})

app.listen(port , ()=> {
    console.log('server on port',port);
})