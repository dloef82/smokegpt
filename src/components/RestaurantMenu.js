
import { useState, Fragment } from 'react'
import RestaurantMenuTabs from './RestaurantMenuTabs';

export default function RestaurantMenu() {
  // Add state to keep track of the current tab
  const [currentTab, setCurrentTab] = useState('Meny');

  const locations = [
    {
      name: 'Förrätter',
      people: [
        { name: 'Räksoppa', title: 'Serveras med aioli', email: '90 kr', role: 'Tillgänglig' },
        { name: 'Carpaccio', title: 'Med parmesan och ruccola', email: '120 kr', role: 'Tillgänglig' },
      ],
    },
    {
      name: 'Huvudrätter',
      people: [
        { name: 'Grillad lax', title: 'Med kokt potatis och vitvinssås', email: '190 kr', role: 'Tillgänglig' },
        { name: 'Entrecôte', title: 'Med bearnaisesås och pommes frites', email: '220 kr', role: 'Tillgänglig' },
      ],
    },
    {
      name: 'Desserter',
      people: [
        { name: 'Crème brûlée', title: 'Klassisk fransk dessert', email: '80 kr', role: 'Tillgänglig' },
        { name: 'Chokladfondant', title: 'Med vaniljglass', email: '90 kr', role: 'Tillgänglig' },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <RestaurantMenuTabs currentTab={currentTab} onTabChange={setCurrentTab} />
      {currentTab === 'Meny' && (
        <div className="mt-4"> {/* Add top margin */}
          {/* Your table component code goes here */}
        </div>
      )}
    </div>
  );
}
