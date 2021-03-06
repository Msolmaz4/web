import React from 'react';

const  MovieList =(props) => {

    


        return (
            <div className="row">

            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}>
                <div className="card mb-4 schadow-sm">
                    <img src={movie.imageURL}className="card-img-top" alt="Sample Movie" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5> 
                        <p className="card-text"> {movie.overviem} </p>
                        <div className="d-flex justify-content-between aligin-items-center">
                            <button type="button" className="btn btn-md btn-outline-danger">delete</button>
                            <h2><span>{movie.rating}</span></h2>
                        </div>

                    </div>
                </div> 
            </div>
             ) 
             ) }
                


            </div>

        )

    

}
export default MovieList;