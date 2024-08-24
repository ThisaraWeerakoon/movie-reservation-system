package com.trs.movie_ticket_reservation_system.services;

import com.trs.movie_ticket_reservation_system.convertor.ShowConvertor;
import com.trs.movie_ticket_reservation_system.entities.Movie;
import com.trs.movie_ticket_reservation_system.entities.Show;
import com.trs.movie_ticket_reservation_system.entities.Theater;
import com.trs.movie_ticket_reservation_system.exceptions.MovieDoesNotExists;
import com.trs.movie_ticket_reservation_system.repositories.MovieRepository;
import com.trs.movie_ticket_reservation_system.repositories.ShowRepository;
import com.trs.movie_ticket_reservation_system.repositories.TheaterRepository;
import com.trs.movie_ticket_reservation_system.request.ShowRequest;

import java.util.Optional;

public class ShowService {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private TheaterRepository theaterRepository;

    @Autowired
    private ShowRepository showRepository;

    public String addShow(ShowRequest showRequest) {
        Show show = ShowConvertor.showDtoToShow(showRequest);

        Optional<Movie> movieOpt = movieRepository.findById(showRequest.getMovieId());

        if (movieOpt.isEmpty()) {
            throw new MovieDoesNotExists();
        }

        Optional<Theater> theaterOpt = theaterRepository.findById(showRequest.getTheaterId());

        if (theaterOpt.isEmpty()) {
            throw new TheaterDoesNotExists();
        }

        Theater theater = theaterOpt.get();
        Movie movie = movieOpt.get();

        show.setMovie(movie);
        show.setTheater(theater);
        show = showRepository.save(show);

        movie.getShows().add(show);
        theater.getShowList().add(show);

        movieRepository.save(movie);
        theaterRepository.save(theater);

        return "Show has been added Successfully";
    }

}
