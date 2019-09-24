var con = require("./db.js");
const express = require("express");
var cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

const server = app.listen(port);

server.timeout = 1000 * 60 * 10; // 10 minutes

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.static(__dirname + "/public"));

// Use middleware to set the default Content-Type
app.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

app.get("/api/getCategory", (req, res) => {
  con.query("SELECT * FROM category", function(err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      res.send(JSON.stringify({ status: "200", error: "", response: result }));
    } else {
      res.send(
        JSON.stringify({
          status: "200",
          error: "",
          response: []
        })
      );
    }
  });
});

app.get("/api/getProduct/:category_id", (req, res) => {
  con.query(
    "select * from product where category_id=?",
    [req.params.category_id],
    function(err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        res.send(
          JSON.stringify({ status: "200", error: "", response: result })
        );
      } else {
        res.send(
          JSON.stringify({
            status: "200",
            error: "",
            response: []
          })
        );
      }
    }
  );
});
