import React from 'react';
import mainPic from '../../assets/main-img.jpg';

const HeaderPic = () => {
  return (
    <div className="main-pic">
    <img src={mainPic} alt="people holding beers" />
    <a href="https://unsplash.com/photos/JKMnm3CIncw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank">Yutacar</a>
  </div>
  );
};

export default HeaderPic;