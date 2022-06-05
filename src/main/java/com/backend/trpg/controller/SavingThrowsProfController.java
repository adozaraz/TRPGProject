package com.backend.trpg.controller;

import com.backend.trpg.entities.SavingThrowsProf;
import com.backend.trpg.service.SavingThrowsProfService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/savingThrowsProf")
public class SavingThrowsProfController {
    private final SavingThrowsProfService savingThrowsProfService;
    public SavingThrowsProfController(SavingThrowsProfService savingThrowsProfService) {
        this.savingThrowsProfService = savingThrowsProfService;
    }

    @GetMapping("/find/{id}")
    public Optional<SavingThrowsProf> findById(@PathVariable @NonNull UUID id) {
        return this.savingThrowsProfService.findById(id);
    }

    @PostMapping("/save")
    public SavingThrowsProf save(@RequestBody SavingThrowsProf savingThrowsProf) {
        return this.savingThrowsProfService.save(savingThrowsProf);
    }

    @PostMapping("/update")
    public SavingThrowsProf updateSavingThrows(@RequestBody SavingThrowsProf savingThrowsProf) {
        return this.savingThrowsProfService.updateSavingThrows(savingThrowsProf);
    }
}
