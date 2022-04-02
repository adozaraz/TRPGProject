package com.backend.trpg.controller;

import com.backend.trpg.entities.SavingThrowsProf;
import com.backend.trpg.service.SavingThrowsProfService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
