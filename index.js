require("dotenv").config();
const express = require("express")
const mongoose = require('mongoose');
const BookRoute = require("./routes/BookRoute");
const productRoute = require("./routes/productRoute")
const userAuth = require("./routes/userAuth")
const cors = require("cors");

const App = express();
App.use(express.json());
App.use(cors());


// FIRST TIME GETTING

// App.get("/", (req, res) => {
//     console.log("Get APi works");
//     res.send({
//         des: "Users Api Works"
//     })
// })

// GETTING WITH NORMAL METHOD

// App.get("/book", async (req, res) => {
//     try {
//         const result = await BookModel.find({})
//         res.status(200).json({
//             isSuccessful: true,
//             data: result,
//         })
//     }
//     catch (error) {
//         console.log(error)
//         res.status(400).json({
//             isSuccessful: false,
//             error: error.message,
//         })

//     }
// })

// GETTING WITH id METHOD

// App.get("/book/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const result = await BookModel.findById(id);
//         res.status(200).json({
//             isSuccessful: true,
//             data: result,
//         })
//     }
//     catch (error) {
//         console.log(error)
//         res.status(400).json({
//             isSuccessful: false,
//             error: error.message,
//         })

//     }
// })


// dELETE WITH id METHOD

// App.delete("/book/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const result = await BookModel.findById(id);
//         res.status(200).json({
//             isSuccessful: true,
//             data: result,
//         })
//     }
//     catch (error) {
//         console.log(error)
//         res.status(400).json({
//             isSuccessful: false,
//             error: error.message,
//         })

//     }
// })

// // POSTING WITH DATA

// App.post("/bookPost", (req, res) => {
//     try {
//         const body = req.body
//         const obj = {
//             title: body.title,
//             description: body.description,
//             author: body.author,
//             noOfPages: body.noOfPages,
//         }
//         const modelObj = new BookModel(obj)

//         modelObj
//             .save()
//             .then((result) => {
//                 res.status(201).json({
//                     isSuccessful: true,
//                     message: "Book Added Successfully"
//                 })
//             })
//             .catch((err) => {
//                 throw err
//             })
//     }
//     catch (error) {

//     }
// })

// Update 

// App.put("/book/:id", (req, res) => {

//     const id = req.params.id
//     const body = req.body
//     const result = await 

// })

App.use("/books", BookRoute);
App.use("/products", productRoute);
App.use("/auth" , userAuth)



mongoose.connect(process.env.MONGO_URI).then(() => {
    App.listen(4000, () => {
        console.log("DB connected and SerVer Started");
    })
}).catch((err) => {
    console.log(err);
})

