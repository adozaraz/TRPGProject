package com.backend.trpg.controller;

import com.backend.trpg.entities.CharacterList;
import com.backend.trpg.service.CharacterListService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/characterList")
public class CharacterListController {
    private final CharacterListService characterListService;
    public CharacterListController(CharacterListService characterListService) {
        this.characterListService = characterListService;
    }

    @GetMapping("/find/{id}")
    public Optional<CharacterList> findById(@PathVariable @NonNull UUID id) {
        return characterListService.findById(id);
    }

    @GetMapping("/find/name/{name}")
    public Optional<CharacterList> findByName(@PathVariable @NonNull String name) {
        return characterListService.findByName(name);
    }
}
