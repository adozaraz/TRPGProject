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
    private User owner;


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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stats_id")
    private Stats stats;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "skills_prof_id")
    private SkillsProf skillsProf;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "saving_throws_prof_id")
    private SavingThrowsProf savingThrowsProf;

    private Integer challengeRating;

    private Integer masteryBonus;

    private String description;

    private Boolean globalDatabase;
}
