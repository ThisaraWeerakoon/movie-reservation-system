package com.trs.movie_ticket_reservation_system.services;

import com.trs.movie_ticket_reservation_system.request.MovieRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public String addMovie(MovieRequest movieRequest){

    }
}
