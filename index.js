import express from "express";
import { router } from "./app/routes";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(router);

app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "This is the root directory, you have not made any requests"
  });
});

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`listening at port ${port}....`));

export default app;
