import React, { useState } from 'react';

const GalleryFilters = props => {
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
              props.filterCategory(filterName);
              filterImages(filterName);
            }}
            className={state === filterName.toLowerCase() ? 'active' : null}
          >
            {filterName}
          </button>
        ))}
      </div>
    </>
  );
};

export default GalleryFilters;
