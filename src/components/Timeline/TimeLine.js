import React from 'react'
import TimeLineItem from './TimeLineItem'
import timelineData from '../../data/Experience.json'
import '../../styles/Timeline.css'

const TimeLine = () => 
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimeLineItem data={data} key={idx} />
            ))}
        </div>
)

export default TimeLine