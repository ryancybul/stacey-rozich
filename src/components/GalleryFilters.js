import React, { useState } from 'react';
import Gallery from './Gallery';

const GalleryFilters = () => {
  const [state, setState] = useState('All');

  const filterNames = ['All', 'Studio', 'Commercial', 'Mural', 'Personal'];

  const filterImages = filterName => {
    const filter = filterName.toLowerCase();
    setState(filter);
    return filter;
  };

  return (
    <>
      <div>
        {filterNames.map(filterName => (
          <button
            type="button"
            key={filterName}
            onClick={() => {
              filterImages(filterName);
            }}
            className={state === filterName.toLowerCase() ? 'active' : null}
          >
            {filterName}
          </button>
        ))}
      </div>
      <Gallery filter={state} />
    </>
  );
};

export default GalleryFilters;
