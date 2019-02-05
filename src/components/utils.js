function getImageUrl(imgUrl, width = 150, height = width * 1.5) {
  return `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${imgUrl}`;
}

export { getImageUrl };
