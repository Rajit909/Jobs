import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { setAllApplicants } from '@/redux/applicationSlice';
import ApplicantsTable from './ApplicantsTable';

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store => store.application);
  useEffect(()=>{
    const fetchAllApplicants = async () =>{
      try {
        const response = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          { withCredentials: true }
        )
        dispatch(setAllApplicants(response.data.job))
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllApplicants();
  },[])
  return (
    <>
        <Navbar/>
      <section className='p-4'>
        <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
        <ApplicantsTable />
        </div>
      </section>

    </>
  )
}

export default Applicants