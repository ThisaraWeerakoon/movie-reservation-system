package com.trs.movie_ticket_reservation_system.exceptions;

public class UserDoesNotExists extends RuntimeException {
    private static final long serialVersionUID = 264309547420961862L;

    public UserDoesNotExists() {
        super("User does not exists");
    }
}
