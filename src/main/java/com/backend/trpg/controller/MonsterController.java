package com.backend.trpg.controller;

import com.backend.trpg.entities.Monster;
import com.backend.trpg.service.MonsterService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/monster")
public class MonsterController {
    private final MonsterService monsterService;
    public MonsterController(MonsterService monsterService) {
        this.monsterService = monsterService;
    }

    @GetMapping("/find/{id}")
    public Optional<Monster> findById(@PathVariable @NonNull UUID id) {
        return this.monsterService.findById(id);
    }

    @GetMapping("/find/name/{name}")
    public Optional<Monster> findByName(@PathVariable @NonNull String name) {
        return this.monsterService.findByName(name);
    }

    @PostMapping("/save")
    public Monster save(@RequestBody Monster monster) {
        return this.monsterService.save(monster);
    }
}
