package com.backend.trpg.entities;


import lombok.*;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Spell {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    private String name;

    private Integer level;

    private String school;

    private String actionTime;

    private String distance;

    private Boolean verbalComp;

    private Boolean somaticComp;

    private Boolean materialComp;

    private String material;

    private String availableClasses;

    private String description;

    private Boolean globalDatabase;
}
