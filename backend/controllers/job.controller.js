import {Job} from "../models/job.model.js"

export const postJob = async (req, res) => {
    try {
        const {title, description, requirements, salary, experienceLevel, location, jobType, position, companyId} = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !experienceLevel || !location || !jobType || !position || !companyId) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            experienceLevelL: experience,
            location,
            jobType,
            position,
            company: companyId,
            created_by:userId
        });

        return res.status(201).json({
            message: "Job created successfully",
            job,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// get all jobs
export const getAllJobs = async (req, res) => {
    try {
       const keyword = req.query.keyword || "";
       const query = {
            $or:[
                {title: {$regex: keyword, $options: "i"}},
                {description: {$regex: keyword, $options: "i"}},   
            ]
       };

       const jobs = await Job.find(query).populate({
           path: "company",
       }).sort({createdAt: -1});
       if (!jobs) {
           return res.status(400).json({
               message: "No jobs found",
               success: false
           })
       }
       return res.status(200).json({
           jobs,
           success: true
       })
    } catch (error) {
        console.log(error);
    }
}

// get job by id for students
