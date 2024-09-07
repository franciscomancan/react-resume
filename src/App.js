import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Header from './Header'; // Import the Header component

// map custom tab name to content objects and file names
// (dynamic, just add the tab info here and add the js file in tabContents folder)
const tabNames = {
    'contact': 'contact',
    'resume': 'resume',
    'code samples': 'code',
    'visual samples': 'visuals',
    'java': 'java17',
    'kotlin': 'kotlin',
    'python': 'python',
    'sql': 'sql',
    'scala': 'scala',
    'ai/ml': 'ml',
    'gcp': 'gcp',
    'aws': 'aws',
    'pubs': 'contact',
    'prompts': 'prompt',
    'chart':'chart'
};
const initialPage = 'contact'

// Function to dynamically import tab content components
const importTabContent = (tabName) => {
    console.log(`loading tabName ${tabName}`)
    return lazy(() => import(`./tabContents/${tabNames[tabName]}`));
};

const TabContent = ({ content }) => {
    const Content = importTabContent(content);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content />
        </Suspense>
    );
};

const App = () => {
    //console.log(`loading initial page > ${initialPage}`)
    const [activeTab, setActiveTab] = useState(initialPage);

    // Use the keys from tabNames for tabs
    const tabs = Object.keys(tabNames);

    document.title = "Anthony Francis - Online"

    return (
        <div className="app">
            <Header />
            <div className="tabs">
                {tabs.map(tabKey => (
                    <div
                        key={tabKey}
                        className={`tab ${activeTab === tabKey ? 'active' : ''}`}
                        onClick={() => setActiveTab(tabKey)}
                    >
                        {tabKey}
                    </div>
                ))}
            </div>
            <TabContent content={activeTab} />
        </div>
    );
};

export default App;
