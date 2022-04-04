package com.backend.trpg.service;

import com.backend.trpg.entities.Stats;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface StatsService {
    Optional<Stats> findById(@NonNull UUID id);
    Stats save(Stats stats);
}
