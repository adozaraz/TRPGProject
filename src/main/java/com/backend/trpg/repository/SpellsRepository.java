package com.backend.trpg.repository;

import com.backend.trpg.entities.Spell;
import lombok.NonNull;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface SpellsRepository extends CrudRepository<Spell, UUID> {
    @Query("select spell from Spell spell where spell.name = :name")
    Optional<Spell> findByName(@NonNull String name);
    @Query("select spell from Spell spell where spell.globalDatabase = true")
    Iterable<Spell> getGlobalData();
    @Query("select spell from Spell spell")
    Iterable<Spell> getAllData();
    @Query("select spell from Spell spell where spell.owner.id = :id")
    Iterable<Spell> getUserData(UUID id);
}
