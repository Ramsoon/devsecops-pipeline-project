require("dotenv").config();

const app = require("./app");

const { createUserTable } = require("./models/userModel");

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {

    await createUserTable();

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      );
    });

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();