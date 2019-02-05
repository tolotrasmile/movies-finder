import React, { Suspense } from 'react';
import { createCache, createResource } from 'react-cache';

const cache = createCache();
const imageResource = createResource(
  src =>
    new Promise(resolve => {
      const image = new Image();
      image.onload = () => resolve(src);
      image.src = src;
    })
);

function Img({ src, alt, ...props }) {
  return (
    <Suspense fallback={<div>Load image...</div>}>
      <img {...props} src={imageResource.read(cache, src)} alt={alt} />
    </Suspense>
  );
}

export default Img;
