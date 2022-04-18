package com.backend.trpg.service;

import com.backend.trpg.entities.User;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface UserService {
    Optional<User> findById(@NonNull UUID id);
    Optional<User> findByUsername(@NonNull String username);
    Optional<User> findByEmail(@NonNull String email);
    User save(User user);
    Boolean canRegister(String username, String email);
}
