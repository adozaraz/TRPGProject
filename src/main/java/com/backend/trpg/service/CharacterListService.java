package com.backend.trpg.service;

import com.backend.trpg.entities.CharacterList;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

public interface CharacterListService {
    Optional<CharacterList> findById(@NonNull UUID id);
    Optional<CharacterList> findByName(@NonNull String name);
    CharacterList save(CharacterList characterList);

    Iterable<CharacterList> getUserCharacterLists(Principal principal);

    CharacterList updateCharacterList(CharacterList characterList);

    ResponseEntity<?> deleteById(UUID id);
}
