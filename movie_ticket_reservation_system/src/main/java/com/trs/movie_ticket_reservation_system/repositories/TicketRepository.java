package com.trs.movie_ticket_reservation_system.repositories;

import com.trs.movie_ticket_reservation_system.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket,Integer> {
}
