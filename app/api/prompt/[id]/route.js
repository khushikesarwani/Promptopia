//for getting get,patch a nd 

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


//get read

export const GET= async (req,{params})=>{
    try {

        await connectToDB();

        const prompt=await Prompt.findById(params.id).populate('creator');
        if(!prompt)
        return new Response("NO prompt found",{status:404});
    
        return new Response(JSON.stringify(prompt),{status:200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts",{status:500});
    }
}

//patch(update)

export const PATCH =async (req,{params})=>{
    const {prompt,tag}=await req.json();
    try {
        await connectToDB();
        const existingPrompt= await Prompt.findById(params.id);
        if(!existingPrompt)
        return new Response("No such post exist",{status:404});

        existingPrompt.prompt=prompt;
        existingPrompt.tag=tag;

        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt),{status:200});

    } catch (error) {
        return new Response("Error in updating prompt",{status:500});
    }

}

//DELETE

export const DELETE=async(req,{params})=>{
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id);
        return new Response("Prompt deleted successfully",{status:200});
    } catch (error) {
        return new Response("Failed to delete that post",{status:500});
    }
}

