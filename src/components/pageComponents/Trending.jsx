import React from 'react';

let Trending = (props) => {
  let trendingArr = Array.from({ length: Math.round(props.popularity / 1000) });

  return (
    <span className='movie-span'>
      {props.popularity}{' '}
      {trendingArr.map((el, i) => {
        return <i className='ui orange fire icon' key={i}/>;
      })}
    </span>
  );
};

export default Trending;
