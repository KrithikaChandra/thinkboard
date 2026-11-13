import { Ratelimit } from "@upstash/ratelimit"
import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try{
    const {success} = await ratelimit.limit("my-rate-limit");
    if(!success){
        return res.status(429).json({message: "Too Many Requests"});
    }
    next();
    }
    catch(error){
        console.log("Error in ratelimiter",error);
        next(error);
    }
}

export default rateLimiter;