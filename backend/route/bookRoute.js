module.exports= (app)=>{
    const bookDetails= require("../controller/bookController");

    app.post("/bookDetails", bookDetails.create);

    app.get("/bookDetails", bookDetails.findAll);

    app.get("bookDetails/:bookId", bookDetails.findOne);

    app.put("/bookDetails/:bookId", bookDetails.update);

    app.delete('/bookDetails/:bookId', bookDetails.delete);
}