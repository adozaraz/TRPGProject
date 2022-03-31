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
public class SkillsProf {
    @Id
    @GeneratedValue
    private UUID id;

    private Boolean strength;
    private Boolean dexterity;
    private Boolean constitution;
    private Boolean intelligence;
    private Boolean wisdom;
    private Boolean charisma;

}
