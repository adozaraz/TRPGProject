package com.backend.trpg.repository;

import com.backend.trpg.entities.Monster;
import lombok.NonNull;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface MonsterRepository extends CrudRepository<Monster, UUID> {
    @Query("select monster from Monster monster where monster.name = :name")
    Optional<Monster> findByName(@NonNull String name);
    @Query("select monster from Monster monster where monster.globalDatabase = true")
    Iterable<Monster> getGlobalData();
}
