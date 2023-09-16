const mongoose=require('mongoose')
const connDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database`)
    } catch (error) {
        console.log(`Mongo Connect Error ${error}`)
    }
}
module.exports=connDB