package com.trs.movie_ticket_reservation_system.repositories;

import com.trs.movie_ticket_reservation_system.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie,Integer> {
    Movie findByMovieName(String name);



}
