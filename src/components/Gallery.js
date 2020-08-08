import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useArtQuery } from '../queries/useArtQuery';
import Artwork from './Artwork';
import GalleryFilters from './GalleryFilters';

const Gallery = () => {
  const artQuery = useArtQuery();
  const data = artQuery.allWordpressWpMedia.edges;
  const [allArt, setArtwork] = useState({ data: [] });
  const [filteredArt, setFilteredArt] = useState({ data: [] });

  const filterCategory = filterName => {
    const filteredData = [];

    if (filterName === 'All') {
      setFilteredArt({ data });
    } else {
      allArt.data.map(node => {
        node.node.categories.map(category => {
          if (category.name === filterName) {
            filteredData.push(node);
          }
        });
      });
      setFilteredArt({ data: filteredData });
    }
  };

  useEffect(() => {
    setArtwork({ data });
    setFilteredArt({ data });
  }, [data]);

  return (
    <Container>
      <GalleryFilters filterCategory={filterCategory} />
      <Artwork data={filteredArt} />
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  width: 100%;
`;

/* 
To do:
Figure out how to sort by date.
Figure out how to get the rows an average height
Hover description effect
Delete all duplicates images on Wordpress
Ask Stacey what kind of layoud she would like.
*/
