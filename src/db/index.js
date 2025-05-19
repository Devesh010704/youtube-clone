import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `db connected !! DB host name is ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("error connecting to database", error);
    process.exit(1);
  }
};

export default dbConnect;
