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
public class Monster {
    @Id
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn
    private User creator;


    private String name;

    public static enum Size {
        TINY, SMALL, MEDIUM, LARGE, HUGE, GARGANTUAN
    }

    public static enum Alignment {
        LAWFUL_GOOD,
        LAWFUL_NEUTRAL,
        LAWFUL_EVIL,
        NEUTRAL_GOOD,
        TRUE_NEUTRAL,
        NEUTRAL_EVIL,
        CHAOTIC_GOOD,
        CHAOTIC_NEUTRAL,
        CHAOTIC_EVIL
    }

    private Size size;

    private String race;

    private Alignment alignment;

    private Integer armorClass;

    private Integer hitPoints;

    private Integer speed;

    @OneToOne
    @JoinColumn(name = "stats_id")
    private Stats stats;

    @OneToOne
    @JoinColumn(name = "skills_prof_id")
    private SkillsProf skillsProf;

    private Integer challengeRating;

    private Integer masteryBonus;

    private String description;

    @Builder.Default
    private Boolean globalDatabase = true;
}
