const express = require("express")
const app = express()
const path = require("path")
port = 3000

const server = path.join(__dirname, "../public")
app.use(express.static(server))
console.log(server)

app.get("/", (req, res) => {
    res.send("This is Home page")
})

app.listen(port, () => {
    console.log(`listening at port no ${port}`)
})