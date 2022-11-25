function getPathImage(imageName){
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
}

export {getPathImage};

