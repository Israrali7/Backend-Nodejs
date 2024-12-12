const express = require("express")
const productModel = require("../models/productModel")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const result = await productModel.find({})
        res.status(200).json({
            isSuccessful: true,
            data: result,
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccessful: false,
            err: error.message,
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await productModel.findById(id)
        res.status(200).json({
            isSuccessful: true,
            data: result,
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccessful: false,
            err: error.message,
        })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await productModel.findByIdAndUpdate(id ,req.body, { new: true });
        res.status(200).json({
            isSuccessful: true,
            data: result,
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccessful: false,
            err: error.message,
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await productModel.findByIdAndDelete(id);
        res.status(200).json({
            isSuccessful: true,
            data: "Empty",
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccessful: false,
            err: error.message,
        })
    }
})

router.post("/", (req, res) => {
    try {
        const requiredKeys = ["description", "price", "name"]
        const body = req.body;
        let arr = []
        requiredKeys.forEach(x => {
            if (!body[x]) {
                [
                    arr.push(`required ${x}`)
                ]
            }
        });
        if (arr.length > 0) {
            res.status(400).json({
                isSuccessful: false,
                err: "some Fields ARe Mising",
                required: arr,
            })
        }
        else {
            const obj = {
                description: body.description,
                price: body.price,
                name: body.name,
            }
            const modelObj = new productModel(obj);
            modelObj.save()
            .then(()=>{
                res.status(201).json({
                    isSuccessful: true,
                    data: modelObj,
                })
            }).catch((error)=>{
                throw error
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            isSuccessful: false,
            err: error.message,
        })
    }
})
module.exports = router;