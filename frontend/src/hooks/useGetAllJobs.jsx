import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector((store) => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const response = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, {withCredentials: true});
                console.log(response)
                if (response.data.success) {
                    dispatch(setAllJobs(response.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllJobs();
    }, []);
}


export default useGetAllJobs;