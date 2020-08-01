import React, { useState, useEffect } from 'react';
import { useArtQuery } from '../queries/useArtQuery';
import Artwork from './Artwork';
import GalleryFilters from './GalleryFilters';

const Gallery = () => {
  const artQuery = useArtQuery();
  const [artwork, setArtwork] = useState({ dataAll: [] });
  const [filteredArt, setFilteredArt] = useState({ data: [] });

  const filteredArtwork = filteredCat => {
    const newData = [];
    setFilteredArt({ newData });
  };

  useEffect(() => {
    const data = artQuery.allWordpressWpMedia.edges;
    setArtwork({ dataAll: data });
    setFilteredArt({ data });
  }, [artQuery.allWordpressWpMedia.edges]);

  return (
    <div>
      <GalleryFilters />
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
