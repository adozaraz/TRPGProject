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
public class Stats {
    @Id
    @GeneratedValue
    private UUID id;

    @Builder.Default
    private int strength = 8;
    @Builder.Default
    private int dexterity = 8;
    @Builder.Default
    private int constitution = 8;
    @Builder.Default
    private int intelligence = 8;
    @Builder.Default
    private int wisdom = 8;
    @Builder.Default
    private int charisma = 8;
}
