package com.trs.movie_ticket_reservation_system.response;

import java.sql.Time;
import java.time.LocalTime;

public class ShowResponse {
    private String theaterName;
    private String theaterAddress;
    private Time showTime;

    public ShowResponse(String theaterName, String theaterAddress, Time showTime) {
        this.theaterName = theaterName;
        this.theaterAddress = theaterAddress;
        this.showTime = showTime;
    }

    // Getters and Setters
    public String getTheaterName() {
        return theaterName;
    }

    public void setTheaterName(String theaterName) {
        this.theaterName = theaterName;
    }

    public String getTheaterAddress() {
        return theaterAddress;
    }

    public void setTheaterAddress(String theaterAddress) {
        this.theaterAddress = theaterAddress;
    }

    public Time getShowTime() {
        return showTime;
    }

    public void setShowTime(Time showTime) {
        this.showTime = showTime;
    }


}
