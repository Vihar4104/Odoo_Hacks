// src/components/TabView.js
import React from 'react';

const TabView = ({ tabs, activeTab, onTabChange }) => {
  return (
    <ul className="tab-view flex border-b mb-6 overflow-hidden">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`relative cursor-pointer p-3 border-b-2 border-transparent text-lg transition-colors transform hover:border-gray-300 ${activeTab === tab ? 'border-blue-500 bg-blue-100' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-fade-in"></div>
          )}
        </li>
      ))}
      <div className={`tab-indicator absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 ${activeTab === tabs[0] ? 'transform translate-x-0' : 'transform translate-x-full'}`}></div>
    </ul>
  );
};

export default TabView;
