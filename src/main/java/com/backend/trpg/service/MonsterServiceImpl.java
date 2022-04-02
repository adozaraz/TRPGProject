package com.backend.trpg.service;

import com.backend.trpg.entities.Monster;
import com.backend.trpg.repository.MonsterRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class MonsterServiceImpl implements MonsterService {
    @Autowired
    private MonsterRepository monsterRepository;
    @Override
    public Optional<Monster> findById(@NonNull UUID id) {
        return monsterRepository.findById(id);
    }

    @Override
    public Optional<Monster> findByName(@NonNull String name) {
        return monsterRepository.findByName(name);
    }
}
