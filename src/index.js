import express from "express";
import routes from "./routes/";
//import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5656;
// routes go here

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
