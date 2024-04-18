import React, { useState, useEffect } from 'react';
import Navbar from '../Job/Navbar/index';
import Header from '../Job/Header';
import SearchBar from '../Job/SearchBar';
import jobData from '../JobDummyData';
import Navigation from './Navigation';
import JobCard from '../Job/JobCard/index';
import Chat from '../Chat/Chat'
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../FbConfig";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [customSearch, setCustomSearch] = useState(false);

    const fetchJobs = async () => {
        setCustomSearch(false);
        const tempJobs = [];
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            });
        });
        setJobs(tempJobs);
    };

    const fetchJobsCustom = async (jobCriteria) => {
        try {
            setCustomSearch(true);
            const tempJobs = [];
            const jobsRef = collection(db, "jobs");
            let q = query(jobsRef, orderBy("postedOn", "desc"));

            // Apply filters based on search criteria
            if (jobCriteria.title) {
                q = query(jobsRef, where("title", "==", jobCriteria.title));
            }
            // Add more conditions for other search criteria as needed

            const req = await getDocs(q);

            req.forEach((job) => {
                tempJobs.push({
                    ...job.data(),
                    id: job.id,
                    postedOn: job.data().postedOn.toDate()
                });
            });
            setJobs(tempJobs);
        } catch (error) {
            console.error("Error fetching custom jobs:", error);
        }
    };

    // Fetch all jobs when component mounts
    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div className="bg-gradient-to-b from-blue-200 via-teal-200 to-green-200 min-h-screen">
            <Navigation />
            <Navbar />
            <Header />
            {/* Pass the fetchJobsCustom function to the SearchBar component */}
            <SearchBar fetchJobsCustom={fetchJobsCustom} />
            {/* Render job cards based on search results */}
            <div >
                {customSearch ? (
                    // If custom search is performed, render filtered job list
                    jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))
                ) : (
                    // Otherwise, render all jobs
                    jobData.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))
                )}
                <Chat/>
            </div>
        </div>
    );
}

export default Jobs;
