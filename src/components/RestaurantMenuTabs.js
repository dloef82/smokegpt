import { Fragment, useState } from 'react';
import MenuTable from './MenuTable';

const tabs = [
  { name: 'Meny', href: '#', id: 'Meny' },
  { name: 'Ingredienser', href: '#', id: 'Ingredienser' },
  { name: 'Reservationer', href: '#', id: 'Reservationer' },
  { name: 'Statistik', href: '#', id: 'Statistik' },
  { name: 'Personal', href: '#', id: 'Personal' },
  { name: 'Arkiv', href: '#', id: 'Arkiv' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedTab, setSelectedTab] = useState('Meny');

  return (
    <div className="border-b border-gray-200 pb-5 sm:pb-0">
      <h2 className="text-base font-semibold leading-6 text-gray-900">Smokehouse Restaurant</h2>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.id}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.id)}
                className={classNames(
                  selectedTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                )}
                aria-current={selectedTab === tab.id ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {selectedTab === 'Meny' && <MenuTable />}
    </div>
  );
}
