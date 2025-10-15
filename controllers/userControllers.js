const AdvisorSchema = require("../models/AdvisorSchema");
const PracticeAreaSchema = require("../models/PracticeAreaSchema");
const ServiceSchema = require("../models/ServiceSchema");





const AddAdvisor = async(req,res)=>{
    try{
        const { name, email, phone, designation, specialization, description, imageurl } = req.body;
        const addAdvisor = await new AdvisorSchema({ name, email, phone, designation, specialization, description, imageurl });
        await addAdvisor.save();
        res.status(200).json({ message: 'Advisor added successfully', advisor: addAdvisor });   
    }catch(err){
        console.log(err)
    }
}

const FetchAdvisors = async(req,res)=>{
    try{
        const fetchAdvisors = await AdvisorSchema.find()
       await res.status(200).json({ message: 'Advisors fetched successfully', success: true, data: fetchAdvisors })
    }catch(err){
        res.status(500).json({ message: 'Server Error' });
    }
}


const AddService = async(req,res)=>{
    try{
        const {title,duration,price,description} = req.body;
        const addService = await new ServiceSchema({title,duration,price,description})
        await addService.save()
        res.status(201).json({message:'Service added successfully',service:addService})
    }catch(err){
        res.status(500).json({message:'Server Error',error:err.message})
    }
}


const fetchServices = async(req,res)=>{
    try{
        const services = await ServiceSchema.find()
        await res.status(200).json({message:'Services fetched successfully',success:true,data:services})
    }catch(err){
         res.status(500).json({message:'Server Error',error:err.message})
    }
}


const AddPracticeArea = async(req,res)=>{
    try{
        const { title, description, icon } = req.body;
        const addPracticeArea = await new PracticeAreaSchema({ title, description, icon });
        await addPracticeArea.save();
        res.status(201).json({ message: 'Practice area added successfully', practiceArea: addPracticeArea });
    }catch(err){
        res.status(500).json({message:'Server Error',error:err.message})
    }
}


const fetchPracticeAreas = async(req,res)=>{
    try{
        const practiceAreas = await PracticeAreaSchema.find()   
        await res.status(200).json({ message: 'Practice areas fetched successfully', success: true, data: practiceAreas })
    }catch(err){
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {AddAdvisor,FetchAdvisors,AddService,fetchServices,AddPracticeArea,fetchPracticeAreas}