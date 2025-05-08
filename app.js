
const express = require("express")
const bookRoute = require("./routes/bookRoute")
const app = express()
require("./database/connection")





app.use(express.json())

/*app.get("/books",async function (req, res){
   const datas = await books.findAll()
    res.json({
        message: "Book fetched successfylly",
        datas
    })
})


app.post("/books",function(req, res){
    console.log(req.body)
    res.json({
        message: "Book added successfylly."
    })
})


app.delete("/books/:id", (req, res)=>{
    res.json({
        message: "Book deleted successfylly."
    })
})


app.patch("/books/:id", (req, res)=>{
    res.json({
        message: "Book updated successfylly."
    })
})

*/




//postgresql://postgres.xjzuywnjwqrufivkxbbg:heybeautifulkxakhabar@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

//locahost:3000/api/books
app.use("/api/books",bookRoute)

app.listen(3000,function(){
    console.log("project/server/backend has started at port 3000")
})
