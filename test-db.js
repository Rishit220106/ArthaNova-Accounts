import mongoose from "mongoose";
mongoose.connect("mongodb+srv://arthanovaccounts:ArthaNova220106@cluster0.taueim1.mongodb.net/arthanovaccounts?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected"))
  .catch(err => console.error(err));
