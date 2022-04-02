package com.backend.trpg.controller;

import com.backend.trpg.entities.Monster;
import com.backend.trpg.service.MonsterService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
