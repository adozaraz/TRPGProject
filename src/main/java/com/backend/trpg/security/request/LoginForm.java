package com.backend.trpg.security.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
public class LoginForm {
    private String username;
    @Email
    private String email;
    @NotBlank
    private String password;
}
