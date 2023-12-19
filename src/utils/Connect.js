import mongoose from "mongoose";

async function Connect() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.URL);
    console.log("Connect To DB");
  } catch (error) {
    console.log(error);
  }
}

export default Connect;
