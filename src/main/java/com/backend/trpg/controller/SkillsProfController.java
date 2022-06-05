package com.backend.trpg.controller;

import com.backend.trpg.entities.SkillsProf;
import com.backend.trpg.service.SkillsProfService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/save")
    public SkillsProf save(@RequestBody SkillsProf skillsProf) {
        return this.skillsProfService.save(skillsProf);
    }

    @PostMapping("/update")
    public SkillsProf updateSkillsProf(@RequestBody SkillsProf skillsProf) {
        return this.skillsProfService.updateSkillsProf(skillsProf);
    }
}
