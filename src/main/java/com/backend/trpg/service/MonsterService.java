package com.backend.trpg.service;

import com.backend.trpg.entities.Monster;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface MonsterService {
    Optional<Monster> findById(@NonNull UUID id);
    Optional<Monster> findByName(@NonNull String name);
    Monster save(Monster monster);

    Iterable<Monster> getGlobalData();
}
