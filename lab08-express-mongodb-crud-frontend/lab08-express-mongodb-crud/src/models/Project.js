import mongoose from 'mongoose';
const projectSchema=new mongoose.Schema({
 title:{type:String,required:true,trim:true,minlength:2,maxlength:100},
 description:{type:String,required:true,trim:true,maxlength:500},
 imageUrl:{type:String,default:''},
 category:{type:String,default:'Web development',trim:true}
},{timestamps:true});
export default mongoose.model('Project',projectSchema);