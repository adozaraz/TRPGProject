package com.backend.trpg.service;

import com.backend.trpg.entities.Spell;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface SpellsService {
    Optional<Spell> findById(@NonNull UUID id);

    Optional<Spell> findByName(@NonNull String name);

    Spell save(Spell spell);


    Iterable<Spell> getGlobalData();
}
