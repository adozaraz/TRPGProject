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
@Table
public class Item {

    public static enum Rarity {
        COMMON, UNCOMMON, RARE, VERY_RARE, LEGENDARY, ARTIFACT
    }

    @Id
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn(name = "creator_id")
    private User owner;

    private String description;

    private String name;

    private Boolean attunementRequirement;

    @Builder.Default
    private Rarity rarity = Rarity.COMMON;

    private Boolean globalDatabase;

}
