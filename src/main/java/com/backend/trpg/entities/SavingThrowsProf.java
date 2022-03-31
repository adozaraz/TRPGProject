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
public class SavingThrowsProf {
    @Id
    @GeneratedValue
    private UUID id;

    private Boolean athletics;
    private Boolean acrobatics;
    private Boolean sleightOfHands;
    private Boolean stealth;
    private Boolean arcana;
    private Boolean history;
    private Boolean investigation;
    private Boolean nature;
    private Boolean religion;
    private Boolean animalHandling;
    private Boolean insight;
    private Boolean medicine;
    private Boolean perception;
    private Boolean survival;
    private Boolean deception;
    private Boolean intimidation;
    private Boolean performance;
    private Boolean persuasion;
}
