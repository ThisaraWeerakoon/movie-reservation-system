package com.trs.movie_ticket_reservation_system.response;


import com.trs.movie_ticket_reservation_system.enums.Genre;
import com.trs.movie_ticket_reservation_system.enums.Language;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MovieResponse {
    private Integer id;
    private String movieName;
    private Integer duration;
    private Double rating;
    private Date releaseDate;
    private Genre genre;
    private Language language;
    private String imageURL;
    private String description;
    private String director;
}
