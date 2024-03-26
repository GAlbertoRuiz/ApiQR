const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;




// // -----MIO------
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // res.send("Bienvenido a mi API");
//     res.send("Hola jaja");
// });

// app.listen(3000, () => {
//     console.log("server escuando 3000");
// });


// module.exports = app;