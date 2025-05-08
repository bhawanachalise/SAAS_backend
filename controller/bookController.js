const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    // logic to fetch books from database 
    const datas = await books.findAll() 
    res.json({
        message : "books fetched successfully", 
        datas
    })
}

exports.addBook = async function(req,res){
 

    const {bookNamess,bookPrice,bookAuthor,bookGenre} = req.body
    
    await books.create({
        bookName : bookNamess,
        price : bookPrice, 
        bookAuthor, 
        bookGenre
      
    })
    res.json({
        message : "Book added successfully"
    })
}

exports.deleteBook = function(req,res){
  
    res.json({
      message : "Book Deleted successfully"
    })
}
exports.editBook = function(req,res){
 
    res.json({
      message : "Book updated successfully"
    })
}

exports.singleFetchBook = async function(req,res){
   
    const id = req.params.id 
    const datas = await books.findByPk(id) 
 
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
     
    })

}

 