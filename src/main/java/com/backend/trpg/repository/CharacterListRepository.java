package com.backend.trpg.repository;

import com.backend.trpg.entities.CharacterList;
import lombok.NonNull;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CharacterListRepository extends CrudRepository<CharacterList, UUID> {
    @Query("select characterList from CharacterList characterList where characterList.name = :name")
    Optional<CharacterList> findByName(@NonNull String name);

    @Query("select characterList from CharacterList characterList where characterList.owner.id = :id")
    Iterable<CharacterList> getUserCharacterLists(UUID id);

    @Query("select characterList from CharacterList characterList where characterList.owner.id = :id and characterList.name = :name")
    Optional<CharacterList> findByOwnerAndName(UUID id, String name);
}
