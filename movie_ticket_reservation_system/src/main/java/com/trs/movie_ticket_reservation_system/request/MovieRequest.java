package com.trs.movie_ticket_reservation_system.request;

import com.trs.movie_ticket_reservation_system.enums.Genre;
import com.trs.movie_ticket_reservation_system.enums.Language;
import lombok.Data;

import java.sql.Date;

@Data
public class MovieRequest {
    private String movieName;
    private Integer duration;
    private Double rating;
    private Date releaseDate;
    private Genre genre;
    private Language language;
}
