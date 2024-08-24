package com.trs.movie_ticket_reservation_system.controllers;

import com.trs.movie_ticket_reservation_system.request.TicketRequest;
import com.trs.movie_ticket_reservation_system.response.TicketResponse;
import com.trs.movie_ticket_reservation_system.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping("/book")
    public ResponseEntity<Object> ticketBooking(@RequestBody TicketRequest ticketRequest) {
        try {
            TicketResponse result = ticketService.ticketBooking(ticketRequest);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
