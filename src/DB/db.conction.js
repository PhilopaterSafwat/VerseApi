import mongoose from "mongoose";
const connectDB = () => {
    mongoose.connect(`mongodb+srv://felo:Felo2000@cluster0.xape0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/AyatApp`).then(res => {
        console.log(`DB is connected`);

    }).catch(err => {
        console.error("there is error at connect", err);

    })

}

export default connectDB