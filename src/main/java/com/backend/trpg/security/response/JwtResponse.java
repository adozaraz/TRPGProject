package com.backend.trpg.security.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.Date;

@Getter
@Setter
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Date expirationDate;
    private String username;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String accessToken, String username, Date expirationDate, Collection<? extends GrantedAuthority> authorities) {
        this.token = accessToken;
        this.username = username;
        this.expirationDate = expirationDate;
        this.authorities = authorities;
    }
}
