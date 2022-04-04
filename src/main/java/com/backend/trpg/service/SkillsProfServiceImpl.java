package com.backend.trpg.service;

import com.backend.trpg.entities.SkillsProf;
import com.backend.trpg.repository.SkillsProfRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class SkillsProfServiceImpl implements SkillsProfService {
    @Autowired
    private SkillsProfRepository skillsProfRepository;
    @Override
    public Optional<SkillsProf> findById(@NonNull UUID id) {
        return skillsProfRepository.findById(id);
    }

    @Override
    public SkillsProf save(SkillsProf skillsProf) {
        return this.skillsProfRepository.save(skillsProf);
    }
}
