import React, {useState} from 'react'

import ProjectItem from "./ProjectItem";

const Gallery = ({projects}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleArrowPress = (page) => {
        let desiredNewPage = currentPage + page;

        if (projects.length === 0) {
            return;
        }

        while (desiredNewPage >= projects.length) {
            desiredNewPage -= projects.length;
        }
        while (desiredNewPage < 0) {
            desiredNewPage += projects.length;
        }


        setCurrentPage(desiredNewPage);
    };

    const getPage = () => {
        if (projects === null || projects === undefined) {
            return null;
        }

        if (currentPage < projects.length) {
            console.log(`Page ${currentPage} returned.`);
            return <ProjectItem key={currentPage} index={currentPage} project={projects[currentPage]}
                                     onClick={handleArrowPress}/>
        } else {
            return null;
        }
    };

    return (
        <div>
            {getPage()}
        </div>
    );

};

export default Gallery;