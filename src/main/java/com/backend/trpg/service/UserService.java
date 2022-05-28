package com.backend.trpg.service;

import com.backend.trpg.entities.User;
import com.backend.trpg.security.request.LoginForm;
import com.backend.trpg.security.request.PasswordChangeForm;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

public interface UserService {
    Optional<User> findById(@NonNull UUID id);
    Optional<User> findByUsername(@NonNull String username);
    Optional<User> findByEmail(@NonNull String email);
    User save(User user);
    Boolean canRegister(String username, String email);

    ResponseEntity<?> changePassword(PasswordChangeForm passwordChanger, Authentication authentication, PasswordEncoder encoder);
}
