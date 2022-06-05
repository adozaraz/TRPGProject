package com.backend.trpg.controller;

import com.backend.trpg.entities.Monster;
import com.backend.trpg.service.MonsterService;
import lombok.NonNull;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @GetMapping("/list/data/global")
    public Iterable<Monster> getGlobalData() {
        return this.monsterService.getGlobalData();
    }

    @GetMapping("/list/data/all")
    public Iterable<Monster> getAllData() {
        return this.monsterService.getAllData();
    }

    @GetMapping("/list/data/user")
    public Iterable<Monster> getUserData(Principal principal) {
        return this.monsterService.getUserData(principal);
    }

    @PostMapping("/globalDatabase/add/{id}")
    public ResponseEntity<?> addToGlobalDatabase(@PathVariable UUID id) {
        return this.monsterService.addToGlobalDatabase(id);
    }


    @PostMapping("/globalDatabase/remove/{id}")
    public ResponseEntity<?> removeFromGlobalDatabase(@PathVariable UUID id) {
        return this.monsterService.removeFromGlobalDatabase(id);
    }
}
