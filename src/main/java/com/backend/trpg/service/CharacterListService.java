package com.backend.trpg.service;

import com.backend.trpg.entities.CharacterList;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface CharacterListService {
    Optional<CharacterList> findById(@NonNull UUID id);
    Optional<CharacterList> findByName(@NonNull String name);
    CharacterList save(CharacterList characterList);
}
