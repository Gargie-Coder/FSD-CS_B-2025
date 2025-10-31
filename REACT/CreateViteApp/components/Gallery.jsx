import React from 'react';
import Profile from './Profile.jsx';

function Gallery() {
  const students = [
    {
      name: "Gargie Gupta",
      branch: "Computer Science",
      section: "B",
      college: "ABES Engineering College",
    },
    {
      name: "John Doe",
      branch: "Mechanical Engineering",
      section: "A",
      college: "XYZ Institute of Technology",
    },
  ];

  return (
    <div>
      {students.map((student, index) => (
        <Profile
          key={index}
          name={student.name}
          branch={student.branch}
          section={student.section}
          college={student.college}
        />
      ))}
    </div>
  );
}

export default Gallery;
