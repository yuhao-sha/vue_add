module.exports = {
  devServer: function (app, server, compiler) {
    var books = [
      { id: 1, name: "add1" },
      { id: 2, name: "add2" },
      { id: 3, name: "add3" },
      { id: 4, name: "add4" },
      { id: 5, name: "add5" },
      { id: 6, name: "add6" },
    ];

    app.get("/api/getBooks", function (req, res) {
      var data = books
      res.json({
        code: 200,
        message: "登录成功",
        books:data
      })
    })
  }
}