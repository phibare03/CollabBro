import React from 'react';
import dayjs from 'dayjs';

function JobCard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    return (
        <div className="mx-40 mb-4">
            <div className="flex justify-between items-center px-6 py-4 bg-white rounded-md border border-gray-300 shadow-md hover:shadow-lg transition duration-300">
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-lg font-semibold text-gray-800">{props.title} - {props.company}</h1>
                    <p className="text-sm text-gray-600">{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                    <div className="flex items-center gap-2">
                        {props.skills.map((skill, i) => (
                            <p key={i} className="text-xs text-gray-700 bg-gray-100 rounded-md px-2 py-1">{skill}</p>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-600">Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
                    <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                        <button className="text-white bg-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
