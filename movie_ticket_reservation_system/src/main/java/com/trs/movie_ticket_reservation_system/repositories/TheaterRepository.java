package com.trs.movie_ticket_reservation_system.repositories;

import com.trs.movie_ticket_reservation_system.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TheaterRepository extends JpaRepository<Theater, Integer> {
    Theater findByAddress(String address);
}
