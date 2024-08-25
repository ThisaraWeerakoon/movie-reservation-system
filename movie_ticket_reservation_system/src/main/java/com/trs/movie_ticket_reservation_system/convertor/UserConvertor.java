package com.trs.movie_ticket_reservation_system.convertor;

import com.trs.movie_ticket_reservation_system.entities.User;
import com.trs.movie_ticket_reservation_system.request.UserRequest;
import com.trs.movie_ticket_reservation_system.response.UserResponse;

public class UserConvertor {

    public static User userDtoToUser(UserRequest userRequest) {
        User user = User.builder()
                .name(userRequest.getName())
                .age(userRequest.getAge())
                .address(userRequest.getAddress())
                .gender(userRequest.getGender())
                .build();

        return user;
    }
}
