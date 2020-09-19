import React from 'react';
import Card from './Cards';
import MovieList from './MovieList';
// function MapMovies(movies) {
//   return (
//     < Card imgsrc={movies.imgsrc}
//       title={movies.title}
//       sname={movies.sname}
//       link={movies.link}
//     />
//   );
// } - MAP Method in ES6


const MapMovies = (movies) => {
  return (< Card
    key={movies.id}
    imgsrc={movies.imgsrc}
    title={movies.title}
    sname={movies.sname}
    link={movies.link}
  />
  );
} // FAT Function in ES6

function App(){
  return (<>
    <h1 className="heading_style">Top 5 Netflix Series</h1>
    {MovieList.map(MapMovies)}
  </>);
}

export default App;