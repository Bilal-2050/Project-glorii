const mongoose = require("mongoose");
 mongoose.set('strictQuery', false);

 mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});
















// mongoose.connect('mongodb://localhost:27017/glorri',{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>{
//   console.log('connection is sucessful');
// }).catch((e)=>{
//   console.log('connection is not sucessful!');
// })
