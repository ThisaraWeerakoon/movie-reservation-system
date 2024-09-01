package com.trs.movie_ticket_reservation_system.convertor;

import com.trs.movie_ticket_reservation_system.entities.Movie;
import com.trs.movie_ticket_reservation_system.request.MovieRequest;

public class MovieConvertor {
    public static Movie movieDtoToMovie(MovieRequest movieRequest) {
        Movie movie = Movie.builder()
                .movieName(movieRequest.getMovieName())
                .duration(movieRequest.getDuration())
                .genre(movieRequest.getGenre())
                .language(movieRequest.getLanguage())
                .releaseDate(movieRequest.getReleaseDate())
                .rating(movieRequest.getRating())
                .description(movieRequest.getDescription())
                .director(movieRequest.getDirector())
                .imageURL(movieRequest.getImageURL())
                .build();

        return movie;
    }
}
