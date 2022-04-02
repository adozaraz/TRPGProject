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
public class CharacterList {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    private String name;

    private String charClass;

    private String race;

    private Monster.Alignment alignment;

    private Integer speed;

    private Integer proficiencyBonus;

    private Boolean inspiration;

    private Integer maxHitPoints;

    private Integer curHitPoints;

    @ManyToOne
    @JoinColumn(name = "stats_id")
    private Stats stats;

    @ManyToOne
    @JoinColumn(name = "saving_throws_prof_id")
    private SavingThrowsProf savingThrowsProf;

    @ManyToOne
    @JoinColumn(name = "skills_prof_id")
    private SkillsProf skillsProf;
}
