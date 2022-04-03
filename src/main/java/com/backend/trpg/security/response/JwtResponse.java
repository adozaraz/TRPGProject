package com.backend.trpg.security.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
public class JwtResponse {
    private String type = "Bearer";
    private String username;
    private Collection<? extends GrantedAuthority> authorities;
}
