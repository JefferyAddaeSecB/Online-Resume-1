import React, { useEffect, useState } from 'react';
import './styles.css';

const App = () => {
  const [overview, setOverview] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // Fetch data from the Express server
    fetch('http://localhost:8000/getOverview')
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error('Error fetching overview:', error));

    fetch('http://localhost:8000/getEdu')
      .then((response) => response.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error('Error fetching education:', error));

    fetch('http://localhost:8000/getExp')
      .then((response) => response.json())
      .then((data) => setExperience(data))
      .catch((error) => console.error('Error fetching experience:', error));
  }, []);

  return (
    <div>
      <h1>Online Resume</h1>

      {/* Overview Section */}
      <div>
        <h2>Overview</h2>
        <p>{overview.summary}</p>
      </div>

      {/* Education Section */}
      <div>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div>
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;