package com.trs.movie_ticket_reservation_system.controllers;

import com.trs.movie_ticket_reservation_system.entities.Movie;
import com.trs.movie_ticket_reservation_system.request.MovieRequest;
import com.trs.movie_ticket_reservation_system.response.MovieResponse;
import com.trs.movie_ticket_reservation_system.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController{

    @Autowired
    private MovieService movieService;
    @PostMapping("/addNew")
    public ResponseEntity<String> addMovie(@RequestBody MovieRequest movieRequest) {
        try {
            String result = movieService.addMovie(movieRequest);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public List<MovieResponse> getAllMovies() {

        return movieService.getAllMovies();
    }




}