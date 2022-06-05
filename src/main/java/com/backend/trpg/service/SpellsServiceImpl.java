package com.backend.trpg.service;

import com.backend.trpg.entities.Spell;
import com.backend.trpg.entities.User;
import com.backend.trpg.repository.SpellsRepository;
import com.backend.trpg.repository.UserRepository;
import com.backend.trpg.security.jwt.UserPrinciple;
import lombok.NonNull;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

@Service
public class SpellsServiceImpl implements SpellsService {
    @Autowired
    private SpellsRepository spellsRepository;

    @Autowired
    private UserRepository userRepository;
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

    @Override
    public Iterable<Spell> getAllData() {
        return this.spellsRepository.getAllData();
    }

    @Override
    public Iterable<Spell> getUserData(Principal principal) {
        Optional<User> user = userRepository.findByUsername(principal.getName());
        return user.map(value -> this.spellsRepository.getUserData(value.getId())).orElse(null);
    }

    @Override
    public ResponseEntity<?> addToGlobalDatabase(UUID id) {
        Optional<Spell> spell = this.spellsRepository.findById(id);
        if (spell.isEmpty()) return ResponseEntity.notFound().build();
        spell.get().setGlobalDatabase(true);
        this.spellsRepository.save(spell.get());
        return ResponseEntity.ok("Changed successfully");
    }

    @Override
    public ResponseEntity<?> removeFromGlobalDatabase(UUID id) {
        Optional<Spell> spell = this.spellsRepository.findById(id);
        if (spell.isEmpty()) return ResponseEntity.notFound().build();
        spell.get().setGlobalDatabase(false);
        this.spellsRepository.save(spell.get());
        return ResponseEntity.ok("Changed successfully");
    }
}
