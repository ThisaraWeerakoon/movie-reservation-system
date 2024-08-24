package com.trs.movie_ticket_reservation_system.convertor;

import com.trs.movie_ticket_reservation_system.entities.Show;
import com.trs.movie_ticket_reservation_system.request.ShowRequest;

public class ShowConvertor {
    public static Show showDtoToShow(ShowRequest showRequest) {
        Show show = Show.builder()
                .time(showRequest.getShowStartTime())
                .date(showRequest.getShowDate())
                .build();

        return show;
    }
}
