package com.backend.trpg.service;

import com.backend.trpg.entities.Stats;
import com.backend.trpg.repository.StatsRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class StatsServiceImpl implements StatsService {
    @Autowired
    private StatsRepository statsRepository;
    @Override
    public Optional<Stats> findById(@NonNull UUID id) {
        return statsRepository.findById(id);
    }
}
