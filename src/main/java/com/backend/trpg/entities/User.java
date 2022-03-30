package com.backend.trpg.entities;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="Users")
@Table
public class User {
    public static enum UserRole {
        ADMIN, USER
    }

    @Id
    @GeneratedValue()
    private UUID id;

    private String nickname;

    private String email;

    private String password;

    public UUID getId() {return id;}

    @Builder.Default
    private UserRole userRole = UserRole.USER;

}
