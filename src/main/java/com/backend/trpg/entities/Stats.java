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
    private int strength = 10;
    @Builder.Default
    private int dexterity = 10;
    @Builder.Default
    private int constitution = 10;
    @Builder.Default
    private int intelligence = 10;
    @Builder.Default
    private int wisdom = 10;
    @Builder.Default
    private int charisma = 10;
}
