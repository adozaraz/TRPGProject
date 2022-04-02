package com.backend.trpg.entities;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="trpg_user")
public class User {
    public static enum UserRole {
        ADMIN, USER
    }

    @Id
    @GeneratedValue()
    private UUID id;

    private String username;

    private String email;

    private String password;

    @Builder.Default
    private UserRole userRole = UserRole.USER;

}
