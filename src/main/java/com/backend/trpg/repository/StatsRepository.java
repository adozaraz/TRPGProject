package com.backend.trpg.repository;

import com.backend.trpg.entities.Stats;
import lombok.NonNull;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface StatsRepository extends CrudRepository<Stats, UUID> {
}
