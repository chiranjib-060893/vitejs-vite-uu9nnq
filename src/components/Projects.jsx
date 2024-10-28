import React from 'react';

const projects = [
  { id: 1, name: 'Persistent Systems', url: 'https://www.persistent.com/' },
  { id: 2, name: 'Pepper Square', url: 'https://www.peppersquare.com/' },
  { id: 3, name: 'Get Things Done', url: 'https://getthingsdone.io/' },
  { id: 4, name: 'Cooper Tires', url: 'https://www.coopertire.com/' },
  { id: 5, name: 'Outtrigger', url: 'https://www.outrigger.com/' },
  { id: 6, name: 'Unqork', url: '' },
  { id: 7, name: 'Innoterra', url: 'https://www.innoterra.com/' },
  { id: 8, name: 'Olive Garden', url: 'https://www.olivegarden.com/home' },
  { id: 4, name: 'Maveric', url: 'https://maveric-systems.com/' },
];

function Projects() {
  return (
    <div>
      <ul>
        {projects.map((i) => (
          <li key={i.id} className="">
            <a href={i.url} target="_blank">
              <div class="max-w-sm mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  class="w-full h-48 object-cover"
                  src="https://via.placeholder.com/400x200"
                  alt="Card Image"
                />
                <div class="p-4">
                  <h2 class="text-lg font-bold mb-2">Card Title</h2>
                  <p class="text-gray-700">
                    This is a simple card component styled with Tailwind CSS.
                  </p>
                  <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Read More
                  </button>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;