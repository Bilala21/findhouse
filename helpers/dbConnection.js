import mongoose from "mongoose";
mongoose.set('strictQuery', true);
function initDb() {
    // console.log("mongodb+srv://bilal:z2Bfl9YSy0k3ODYl@cluster0.bqdbvzr.mongodb.net/property?retryWrites=true&w=majority")
    if (mongoose.connections[0].readyState) {
        console.log("already connected")
        return
    }
    mongoose.connect("mongodb://127.0.0.1:27017/property", {
        useNewUrlParser: true
    })
    mongoose.connection.on("connected", () => {
        console.log("Conection established")
    })
    mongoose.connection.on("error", (err) => {
        console.log(err)
    })
}

export default initDb