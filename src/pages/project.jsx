import React from 'react';
import Template from '../page-components/Project/Template';

const mockData = {
  projectTitle: 'Pixel**Perfect**',
  images: [
    {
      original: '/assets/mock-picture-1.jpeg',
      thumbnail: '/assets/mock-picture-1.jpeg',
    },
    {
      original: '/assets/mock-picture-2.jpeg',
      thumbnail: '/assets/mock-picture-2.jpeg',
    },
    {
      original: '/assets/mock-picture-3.jpeg',
      thumbnail: '/assets/mock-picture-3.jpeg',
    },
    {
      original: '/assets/mock-picture-1.jpeg',
      thumbnail: '/assets/mock-picture-1.jpeg',
    },
    {
      original: '/assets/mock-picture-2.jpeg',
      thumbnail: '/assets/mock-picture-2.jpeg',
    },
    {
      original: '/assets/mock-picture-3.jpeg',
      thumbnail: '/assets/mock-picture-3.jpeg',
    },
  ],
  description: `_**- Lorem Ipsum**_ is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.
  `,
  link: 'https://www.pixelperfectvfx.com/',
};

function TemplateProject() {
  return <Template data={mockData} />;
}

export default TemplateProject;
