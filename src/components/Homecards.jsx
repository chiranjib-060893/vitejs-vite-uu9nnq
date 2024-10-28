import React from 'react';

const KeySkills = [
  'HTML',
  'CSS',
  'Javacript',
  'Nodejs',
  'React',
  'Typescript',
  'Angular',
  'Tailwind',
  'Wordpress',
  'Next js',
  'Responsive Web Development',
  'Version Control',
  'Github'
];

function Homecards() {
  return (
    <ul className="flex flex-wrap align-center justify-center py-20">
      {KeySkills.map((i) => (
        <li key={i} className= "bg-white-500 text-gray border-2 text-sm font-semibold rounded-full px-4 py-2 m-2 transition transform hover:bg-blue-700 hover:scale-105" >{i}</li>
      ))}
    </ul>
  );
}

export default Homecards;
