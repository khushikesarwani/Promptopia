import {Schema,model,models} from "mongoose";

 const PromptSchema=new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',

    },
    prompt:{
        type:String,
        required:[true,'Prompt is required.'],
    },
    tag:{
        type:String,
        required:[true,'Tag is reqiuired.'],

    }
});

const Prompt= models.Prompt || model('Prompt',PromptSchema); 
//either get the existing Prompt 
//simply or if it is not present create one
export default Prompt;