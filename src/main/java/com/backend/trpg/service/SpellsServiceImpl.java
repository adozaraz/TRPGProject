package com.backend.trpg.service;

import com.backend.trpg.entities.Spell;
import com.backend.trpg.repository.SpellsRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class SpellsServiceImpl implements SpellsService {
    @Autowired
    private SpellsRepository spellsRepository;

    @Override
    public Optional<Spell> findById(@NonNull UUID id) {
        return this.spellsRepository.findById(id);
    }

    @Override
    public Optional<Spell> findByName(@NonNull String name) {
        return this.spellsRepository.findByName(name);
    }

    @Override
    public Spell save(Spell spell) {
        return this.spellsRepository.save(spell);
    }

    @Override
    public Iterable<Spell> getGlobalData() {
        return this.spellsRepository.getGlobalData();
    }
}
