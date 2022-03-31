package com.backend.trpg.repository;

import com.backend.trpg.entities.SkillsProf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SkillsProfRepository extends CrudRepository<SkillsProf, UUID> {
}
