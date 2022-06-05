package com.backend.trpg.service;

import com.backend.trpg.entities.Spell;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

public interface SpellsService {
    Optional<Spell> findById(@NonNull UUID id);

    Optional<Spell> findByName(@NonNull String name);

    Spell save(Spell spell);


    Iterable<Spell> getGlobalData();

    Iterable<Spell> getAllData();

    Iterable<Spell> getUserData(Principal principal);

    ResponseEntity<?> addToGlobalDatabase(UUID id);

    ResponseEntity<?> removeFromGlobalDatabase(UUID id);

    ResponseEntity<?> remove(UUID id);
}
