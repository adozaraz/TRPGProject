package com.backend.trpg.security.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
public class PasswordChangeForm {
    @NotBlank
    String oldPassword;

    @NotBlank
    String newPassword;

    @NotBlank
    String confirmNewPassword;
}
