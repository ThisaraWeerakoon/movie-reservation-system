package com.trs.movie_ticket_reservation_system.controllers;

import com.trs.movie_ticket_reservation_system.entities.Show;
import com.trs.movie_ticket_reservation_system.request.ShowRequest;
import com.trs.movie_ticket_reservation_system.request.ShowSeatRequest;
import com.trs.movie_ticket_reservation_system.response.ShowResponse;
import com.trs.movie_ticket_reservation_system.services.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@RestController
@RequestMapping("/show")
public class ShowController {
    @Autowired
    private ShowService showService;

    @PostMapping("/addNew")
    public ResponseEntity<String> addShow(@RequestBody ShowRequest showRequest) {
        try {
            String result = showService.addShow(showRequest);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/associateSeats")
    public ResponseEntity<String> associateShowSeats(@RequestBody ShowSeatRequest showSeatRequest) {
        try {
            String result = showService.associateShowSeats(showSeatRequest);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    // Endpoint to get all shows by movie ID
    @GetMapping("/movie/{movieId}")
    public List<Show> getAllShowsByMovieId(@PathVariable Integer movieId) {
        return showService.getAllShowsByMovieId(movieId);
    }

    // Endpoint to get show timings by date, theater ID, and movie ID
    @GetMapping("/timings")
    public List<Time> getShowTimingsOnDate(
            @RequestParam("date") Date date,
            @RequestParam("theaterId") Integer theaterId,
            @RequestParam("movieId") Integer movieId) {
        return showService.getShowTimingsOnDate(date, theaterId, movieId);
    }

//    @GetMapping("/showsByDate")
//    public List<ShowResponse> getShows(@RequestParam int movie_id,
//                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) java.sql.Date date) {
//        return showService.getShowsByMovieIdAndDate(movie_id, date);
//    }


}
