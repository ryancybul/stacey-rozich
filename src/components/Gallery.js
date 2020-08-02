import React, { useState, useEffect } from 'react';
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
    <div>
      <GalleryFilters filterCategory={filterCategory} />
      <Artwork data={filteredArt} />
    </div>
  );
};

export default Gallery;

/* 
To do:
Figure out how to sort by date.
Figure out how to get the rows an average height
Hover description effect
Delete all duplicates images on Wordpress
Ask Stacey what kind of layoud she would like.
*/
