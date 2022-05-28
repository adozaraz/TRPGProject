package com.backend.trpg.service;

import com.backend.trpg.entities.User;
import com.backend.trpg.repository.UserRepository;
import com.backend.trpg.security.request.LoginForm;
import com.backend.trpg.security.request.PasswordChangeForm;
import com.backend.trpg.security.response.ResponseMessage;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Override
    public ResponseEntity<?> changePassword(PasswordChangeForm passwordChanger, Authentication authentication, PasswordEncoder encoder) {
        if (!passwordChanger.getNewPassword().equals(passwordChanger.getConfirmNewPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }
        User user = this.userRepository.findByUsername(((UserDetails) authentication.getPrincipal()).getUsername()).get();
        if (!encoder.matches(passwordChanger.getOldPassword(), user.getPassword())) {
            return ResponseEntity.status(203).body("Wrong password");
        }
        user.setPassword(encoder.encode(passwordChanger.getNewPassword()));
        userRepository.save(user);
        return new ResponseEntity<>(new ResponseMessage("User registered successfully"), HttpStatus.OK);
    }
}
