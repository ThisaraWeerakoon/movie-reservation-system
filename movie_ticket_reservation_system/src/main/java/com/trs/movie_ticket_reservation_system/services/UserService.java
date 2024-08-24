package com.trs.movie_ticket_reservation_system.services;

import com.trs.movie_ticket_reservation_system.convertor.UserConvertor;
import com.trs.movie_ticket_reservation_system.entities.User;
import com.trs.movie_ticket_reservation_system.exceptions.UserExist;
import com.trs.movie_ticket_reservation_system.repositories.UserRepository;
import com.trs.movie_ticket_reservation_system.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String addUser(UserRequest userRequest) {
        Optional<User> users = userRepository.findByEmailId(userRequest.getEmailId());

        if (users.isPresent()) {
            throw new UserExist();
        }

        User user = UserConvertor.userDtoToUser(userRequest,  passwordEncoder.encode("1234"));

        userRepository.save(user);
        return "User Saved Successfully";
    }

}