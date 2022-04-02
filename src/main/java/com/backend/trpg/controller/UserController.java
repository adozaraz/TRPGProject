package com.backend.trpg.controller;

import com.backend.trpg.entities.User;
import com.backend.trpg.service.UserService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/find/{id}")
    public Optional<User> findById(@PathVariable @NonNull UUID id) {
        return this.userService.findById(id);
    }

    @GetMapping("/find/username/{name}")
    public Optional<User> findByUsername(@PathVariable @NonNull String name) {
        return this.userService.findByUsername(name);
    }

    @GetMapping("/find/email/{email}")
    public Optional<User> findByEmail(@PathVariable @NonNull String email) {
        return this.userService.findByEmail(email);
    }
}
