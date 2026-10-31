import React from 'react'
import Experience from './ExperianceComponent'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col py-10 '>
            <Experience
                company="Trident Techlabs Ltd"
                role="Software Developer"
                duration="May 2024 - Present"
                points={[
                    "Developed and maintained scalable, responsive web applications using React.js, Tailwind CSS, Bootstrap 5 and Material-UI.",
                    "Integrated complex internal and third-party RESTful APIs, enabling real-time data flow and richer interactivity.",
                    "Translated wireframes into pixel-perfect interfaces with UI/UX designers — a 20% improvement in user engagement.",
                    "Engineered and streamlined ETL workflows, improving the speed and reliability of data processing.",
                    "Contributed to code reviews and sprint planning in an agile environment for high-quality, on-time delivery."
                ]}
                rounded='top'
                skills={['React', 'Tailwind CSS', 'Bootstrap 5', 'Material-UI', 'REST APIs', 'ETL', 'Agile']}
            />
            <Experience
                company="Trident Techlabs Ltd"
                role="Software Developer Intern"
                duration="Sep 2023 - Apr 2024"
                points={[
                    "Built and debugged responsive React.js UI components using MUI, reducing feature delivery cycles.",
                    "Integrated third-party APIs, troubleshooting data-flow issues and improving client–backend reliability.",
                    "Identified and resolved 40+ UI bugs across modules, boosting application stability and UX ratings."
                ]}
                rounded='bottom'
                skills={['React', 'Material-UI', 'JavaScript', 'API Integration', 'Debugging']}
            />
        </div>
    )
}

export default ExperienceSection
