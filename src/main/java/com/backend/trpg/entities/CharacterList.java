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

    private Integer charLevel;

    private Integer armorClass;

    private Integer proficiencyBonus;

    private Integer maxHitPoints;

    private Integer curHitPoints;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "stats_id")
    private Stats stats;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "saving_throws_prof_id")
    private SavingThrowsProf savingThrowsProf;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "skills_prof_id")
    private SkillsProf skillsProf;
}
