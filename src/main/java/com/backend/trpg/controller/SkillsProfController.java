package com.backend.trpg.controller;

import com.backend.trpg.entities.SkillsProf;
import com.backend.trpg.service.SkillsProfService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/skillsProf")
public class SkillsProfController {
    private final SkillsProfService skillsProfService;
    public SkillsProfController(SkillsProfService skillsProfService) {
        this.skillsProfService = skillsProfService;
    }

    @GetMapping("/find/{id}")
    public Optional<SkillsProf> findById(@PathVariable @NonNull UUID id) {
        return this.skillsProfService.findById(id);
    }
}
