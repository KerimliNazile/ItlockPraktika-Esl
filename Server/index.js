import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())


const modeSchema = new Schema({
    image:{type:String,required:true},
    text: { type: String, required: true },
    title: { type: String, required: true }
}, { timestamps: true })


const Modes = mongoose.model("Modes", modeSchema)

app.get('/modes', async (req, res) => {
    try {
        const modes = await Modes.find({})
        res.send(modes)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})



app.get('/modes/:id', async (req, res) => {
    try {
        const modes = await Modes.findById(req.params.id)
        res.send(modes)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


app.post('/modes', async (req, res) => {
    try {
        const mode = new Modes({
            image:req.body.image,
            text: req.body.text,
            title: req.body.title
        })
        await mode.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


app.delete('/modes/:id', async (req, res) => {
    try {
        const modes = await Modes.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect"+err))
app.listen(port, () => {
    console.log(`Example app listening on port }`)
})