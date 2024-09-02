package com.trs.movie_ticket_reservation_system.repositories;

import com.trs.movie_ticket_reservation_system.entities.Show;
import com.trs.movie_ticket_reservation_system.response.ShowResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public interface ShowRepository extends JpaRepository<Show, Integer> {

    @Query(value = "select time from shows where date = :date and movie_id = :movieId and theater_id = :theaterId" , nativeQuery = true)
    public List<Time> getShowTimingsOnDate(@Param("date") Date date, @Param("theaterId")Integer theaterId, @Param("movieId")Integer movieId);

    @Query(value = "select movie_id from shows group by movie_id order by count(*) desc limit 1" , nativeQuery = true)
    public Integer getMostShowsMovie();

    @Query(value = "select * from shows where movie_id = :movieId" , nativeQuery = true)
    public List<Show> getAllShowsOfMovie(@Param("movieId")Integer movieId);

//    @Query("SELECT new com.trs.movie_ticket_reservation_system.response.ShowResponse(t.name, t.address, s.time) " +
//            "FROM Show s JOIN s.theater t " +
//            "WHERE s.movieId = :movieId AND s.date = :date " +
//            "ORDER BY t.name, s.time")
//    List<ShowResponse> findShowsByMovieIdAndDate(@Param("movieId") int movieId, @Param("date") Date date);

}