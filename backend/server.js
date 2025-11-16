const app = require("./src/app");
const connectToDB = require("./src/DB/db");
require("dotenv").config();
connectToDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});

