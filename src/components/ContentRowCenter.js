import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import SearchMovies from './SearchMovies';

function ContentRowCenter(){
    return (
        <div className="row">
            
             {/*<!-- SearchMovie -->*/}
             <SearchMovies />
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

           
            
        </div>
    )
}

export default ContentRowCenter;