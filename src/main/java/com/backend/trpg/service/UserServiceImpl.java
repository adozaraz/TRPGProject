package com.backend.trpg.service;

import com.backend.trpg.entities.User;
import com.backend.trpg.repository.UserRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public Optional<User> findById(@NonNull UUID id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> findByUsername(@NonNull String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(@NonNull String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public Boolean canRegister(String username, String email) {
        if (userRepository.findByUsername(username).isPresent()) return false;
        return userRepository.findByEmail(email).isEmpty();
    }
}
