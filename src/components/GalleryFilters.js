import React, { useState } from 'react';
import styled from 'styled-components';

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
      <Container>
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
      </Container>
    </>
  );
};

export default GalleryFilters;

const Container = styled.div`
  align-items: center;
  height: 50px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  button {
    margin: 10px;
  }
`;
