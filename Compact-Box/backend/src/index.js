const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");

mongoose.connect("mongodb+srv://hermino:gDkNwlpyglUyStBy@cluster0-qzcqd.mongodb.net/compactbox?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const app = express();

app.use(
    cors({
      origin: "*"
    })
  );
  
app.use(express.json());
app.use(routes);
app.listen(3333);