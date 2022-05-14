package com.backend.trpg.controller;

import com.backend.trpg.entities.User;
import com.backend.trpg.security.jwt.JwtProvider;
import com.backend.trpg.security.request.LoginForm;
import com.backend.trpg.security.request.SignUpForm;
import com.backend.trpg.security.response.JwtResponse;
import com.backend.trpg.security.response.ResponseMessage;
import com.backend.trpg.service.UserService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Logger;

@RestController
@RequestMapping("api/users")
public class UserController {

    private static Logger log = Logger.getLogger(UserController.class.getName());
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtProvider jwtProvider;

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

    @PostMapping("/auth/signUp")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if (!this.userService.canRegister(signUpRequest.getUsername(), signUpRequest.getEmail()))
            return new ResponseEntity<>(new ResponseMessage("Email / Username is already in use"), HttpStatus.CONFLICT);

        User user = new User(
                UUID.randomUUID(),
                signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                User.UserRole.USER
        );
        this.userService.save(user);
        return new ResponseEntity<>(new ResponseMessage("User registered successfully"), HttpStatus.OK);
    }

    @PostMapping("/auth/signIn")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
        User user;
        if (loginRequest.getEmail() == null) {
            user = this.userService.findByUsername(loginRequest.getUsername()).get();
        }
        else {
            user = this.userService.findByEmail(loginRequest.getEmail()).get();
        }
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), loginRequest.getPassword())
        );
        JwtResponse jwtResponse = jwtProvider.generateJwtResponse(authentication, (UserDetails) authentication.getPrincipal());
        return ResponseEntity.ok(jwtResponse);
    }
}
