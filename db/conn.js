const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connect) {
      console.log("Success");
    }
  } catch (err) {
    console.log(err);
  }
};

connection();
