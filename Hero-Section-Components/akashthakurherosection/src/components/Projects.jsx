import React from 'react';
import ProjectCard from '../components/ProjectCard'
import roomease from '../Asset/roomease.jpg'
import domconnect from '../Asset/Dom.png'
import freshfeast from '../Asset/freshfeast.jpeg'
import propertease from '../Asset/PropertEase.png'

const Projects = () => {
  const cardsData = [
    { id: 1, title: 'RoomEase-Room Rental Web App', tech: 'MERN Stack | JWT', imgUrl: roomease , githubLink:'https://github.com/akashthakur09/RoomEase-Online-Rooms-on-Rent',liveLink:'https://roomease-online-rooms-on-rent.onrender.com'},
    { id: 2, title: 'DomConnect-A Social Media Web App', tech: 'MERN Stack | Socket.io', imgUrl: domconnect ,githubLink:'https://github.com/akashthakur09/DomConnect-Social-Media-Website',liveLink:'https://domconnect-social-media-platform.onrender.com/'},
    { id: 3, title: 'PropertEase-Renting and finding properties online', tech: 'MERN Stack | JWT', imgUrl: propertease ,githubLink:'https://github.com/akashthakur09/PropertEase-Online-Platform-for-renting-properties.git',liveLink:'https://propertease-online-platform-for-renting.onrender.com'},
    { id: 4, title: 'FreshCart-Grocery Web App', tech: 'MERN Stack | Redux | JWT', imgUrl: freshfeast ,githubLink:'https://github.com/akashthakur09/FreashFeast--Online-Grocery-Website-.git',liveLink:'https://github.com/akashthakur09/FreashFeast--Online-Grocery-Website-.git'},
    
  ];

  return (
    <div className="projectcontainer">
      {/* <h1 style={{ textAlign: 'center' }}>React Card Slider</h1> */}
      <div className="project-cards-container">
        {cardsData.map((card) => (
          <ProjectCard
            key={card.id}
            title={card.title}
            tech={card.tech}
            githubLink={card.githubLink}
            liveLink={card.liveLink}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
