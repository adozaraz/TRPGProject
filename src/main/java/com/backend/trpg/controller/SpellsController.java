package com.backend.trpg.controller;

import com.backend.trpg.entities.Spell;
import com.backend.trpg.service.SpellsService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/spells")
public class SpellsController {
    private final SpellsService spellsService;

    public SpellsController(SpellsService spellsService) {
        this.spellsService = spellsService;
    }

    @GetMapping("/find/{id}")
    public Optional<Spell> findById(@PathVariable @NonNull UUID id) {
        return this.spellsService.findById(id);
    }

    @GetMapping("/find/name/{name}")
    public Optional<Spell> findByName(@PathVariable @NonNull String name) {
        return this.spellsService.findByName(name);
    }

    @PostMapping("/save")
    public Spell save(@RequestBody Spell spell) {
        return this.spellsService.save(spell);
    }

    @GetMapping("/list/data/global")
    public Iterable<Spell> getGlobalData() {
        return this.spellsService.getGlobalData();
    }

    @GetMapping("/list/data/all")
    public Iterable<Spell> getAllData() {
        return this.spellsService.getAllData();
    }
}
