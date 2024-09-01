package com.trs.movie_ticket_reservation_system.services;

import com.trs.movie_ticket_reservation_system.convertor.MovieConvertor;
import com.trs.movie_ticket_reservation_system.entities.Movie;
import com.trs.movie_ticket_reservation_system.exceptions.MovieAlreadyExist;
import com.trs.movie_ticket_reservation_system.repositories.MovieRepository;
import com.trs.movie_ticket_reservation_system.request.MovieRequest;
import com.trs.movie_ticket_reservation_system.response.MovieResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public String addMovie(MovieRequest movieRequest){
        Movie movieByName = movieRepository.findByMovieName(movieRequest.getMovieName());

        if(movieByName != null && movieByName.getLanguage().equals(movieRequest.getLanguage())){
            throw new MovieAlreadyExist();

        }

        Movie movie = MovieConvertor.movieDtoToMovie(movieRequest);

        movieRepository.save(movie);
        return "The movie has been added successfully";


    }
    public List<MovieResponse> getAllMovies() {
        List<Movie> movies = movieRepository.findAll();
        return movies.stream().map(this::convertToMovieResponse).collect(Collectors.toList());
    }

    private MovieResponse convertToMovieResponse(Movie movie) {
        return MovieResponse.builder()
                .id(movie.getId())
                .movieName(movie.getMovieName())
                .duration(movie.getDuration())
                .rating(movie.getRating())
                .releaseDate(movie.getReleaseDate())
                .genre(movie.getGenre())
                .language(movie.getLanguage())
                .imageURL(movie.getImageURL())
                .description(movie.getDescription())
                .director(movie.getDirector())
                .build();
    }
    
}
