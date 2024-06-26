import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LocationSearch from '../LocationSearch.js';
import treeImage from '../tree1.png'; 
import '../variables.css';
import './HomeScreen.css';

const topics = [
    'Local Government',
    'Crime and Public Safety',
    'Live Music',
    'Transportation',
    'Healthcare',
    'Business and Economy',
    'Environment',
    'Community Events',
    'Housing',
    'Weather',
    'Sports',
    'Arts and Culture',
    'Social Issues',
    'Local Infrastructure',
    'Local History',
    'Food and Dining',
    'Technology',
    'Volunteerism and Charity',
    'Local Businesses',
];

function HomeScreen() {
    const navigate = useNavigate();
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [isMonkeySliding, setIsMonkeySliding] = useState(false);
    const [location, setLocation] = useState('');

    const handleTopicClick = (topic) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(selectedTopics.filter((item) => item !== topic));
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    const handleSubmit = () => {
        if (selectedTopics.length >= 3) {
            console.log(location);
            navigate('/loading', { state: { selectedTopics, location } });
        } else {
            alert('Please select ' + (3 - selectedTopics.length) + ' more topics!');
        }
    };

    const nextPageRef = useRef(null);

    const scrollToNextPage = () => {
        console.log("helllo");
        window.scrollTo({
            top: 750,
            behavior: 'smooth'
        });
    }
 
    const scrollToNextPage2 = () => {
        window.scrollTo({
            top: 5240,
            behavior: 'smooth'
        });
    };

    const handleLocationSelect = (location) => {
        setLocation(location['name']);
    };

    

    return (
        <div className="home-page">
            <div className="tree-container">
                <img src={treeImage} alt="Tree" />
            </div>
            <div className="title-page">
                <h1 className="title-text">Grassroots</h1>
                <h2 className="subtitle-text">Sprout-sized news, diverse views. Powered by LLM's.</h2>
        
                <FontAwesomeIcon className="scroll-button" onClick={scrollToNextPage} icon={faChevronDown} />
            </div>
            <div class="header-container">
            <h1 className="header-text">First, your roots!</h1>
            </div>
            <div className="location-search-container">
                <LocationSearch onSelect={handleLocationSelect} />
            </div>
            <FontAwesomeIcon className="scroll-button2" onClick={scrollToNextPage2} icon={faChevronDown} />
            
            <p ref={nextPageRef}>Select a minimum of 3 preferred topics you'd like to see in your feed!</p>
            
            <div className="topic-buttons">
                {topics.map((topic, index) => (
                    <button
                        key={index}
                        className={selectedTopics.includes(topic) ? 'selected' : ''}
                        onClick={() => handleTopicClick(topic)}
                    >
                        {topic}
                    </button>
                ))}
            </div>
            <button className="submit-button" onClick={handleSubmit}>
                Continue
            </button>
        </div>
    );
}

export default HomeScreen;
