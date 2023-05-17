const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Buspunetosatara")
.then(()=>console.log("connected success..."))
.catch((err)=>console.log(err))


const busdepoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

const busrouteSchema=new mongoose.Schema({
    routename:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    }
})

const busdepo=new mongoose.model("busdepo",busdepoSchema);

const busdepo2=new busdepo({
    name:'shivneri',
    location:'pune-to-satara'
})

const busroute=new mongoose.model("busroute",busrouteSchema)
const busroute1=new busroute({
    routename:'pune-to-satara',
    start:'pune',
    end:'satara'
})



busdepo2.save()
busroute1.save()