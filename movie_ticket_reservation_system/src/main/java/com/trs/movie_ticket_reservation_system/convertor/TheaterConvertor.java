package com.trs.movie_ticket_reservation_system.convertor;

import com.trs.movie_ticket_reservation_system.entities.Theater;
import com.trs.movie_ticket_reservation_system.request.TheaterRequest;

public class TheaterConvertor {

    public static Theater theaterDtoToTheater(TheaterRequest theaterRequest) {
        Theater theater = Theater.builder()
                .name(theaterRequest.getName())
                .address(theaterRequest.getAddress())
                .build();
        return theater;
    }
}
