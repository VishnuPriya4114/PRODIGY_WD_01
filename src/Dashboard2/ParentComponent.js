import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import Header from './Header';

function ParentComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  // Define the handleOptionSelect function to update the selectedOption state
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const OpenSidebar = () => {
    // Implement your logic to open sidebar here
  };

  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={true} OpenSidebar={OpenSidebar} handleOptionSelect={handleOptionSelect} />
      <Home selectedOption={selectedOption} />
    </div>
  );
}

export default ParentComponent;
