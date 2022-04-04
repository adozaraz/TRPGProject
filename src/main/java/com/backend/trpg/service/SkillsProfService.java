package com.backend.trpg.service;

import com.backend.trpg.entities.SkillsProf;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface SkillsProfService {
    Optional<SkillsProf> findById(@NonNull UUID id);
    SkillsProf save(SkillsProf skillsProf);
}
