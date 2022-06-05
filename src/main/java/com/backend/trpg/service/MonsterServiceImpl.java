package com.backend.trpg.service;

import com.backend.trpg.entities.Monster;
import com.backend.trpg.entities.User;
import com.backend.trpg.repository.*;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

@Service
public class MonsterServiceImpl implements MonsterService {
    @Autowired
    private MonsterRepository monsterRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SkillsProfRepository skillsProfRepository;

    @Autowired
    private SavingThrowsProfRepository savingThrowsProfRepository;

    @Autowired
    private StatsRepository statsRepository;

    @Override
    public Optional<Monster> findById(@NonNull UUID id) {
        return monsterRepository.findById(id);
    }

    @Override
    public Optional<Monster> findByName(@NonNull String name) {
        return monsterRepository.findByName(name);
    }

    @Override
    public Monster save(Monster monster) {
        return this.monsterRepository.save(monster);
    }

    @Override
    public Iterable<Monster> getGlobalData() {
        return this.monsterRepository.getGlobalData();
    }

    @Override
    public Iterable<Monster> getAllData() {
        return this.monsterRepository.getAllData();
    }

    @Override
    public Iterable<Monster> getUserData(Principal principal) {
        Optional<User> user = userRepository.findByUsername(principal.getName());
        return user.map(value -> this.monsterRepository.getUserData(value.getId())).orElse(null);
    }

    @Override
    public ResponseEntity<?> addToGlobalDatabase(UUID id) {
        Optional<Monster> monster = this.monsterRepository.findById(id);
        if (monster.isEmpty()) return ResponseEntity.notFound().build();
        monster.get().setGlobalDatabase(true);
        this.monsterRepository.save(monster.get());
        return ResponseEntity.ok("Changed successfully");
    }

    @Override
    public ResponseEntity<?> removeFromGlobalDatabase(UUID id) {
        Optional<Monster> monster = this.monsterRepository.findById(id);
        if (monster.isEmpty()) return ResponseEntity.notFound().build();
        monster.get().setGlobalDatabase(false);
        this.monsterRepository.save(monster.get());
        return ResponseEntity.ok("Changed successfully");
    }

    @Override
    public ResponseEntity<?> remove(UUID id) {
        Monster monster = this.monsterRepository.findById(id).get();
        this.skillsProfRepository.deleteById(monster.getSkillsProf().getId());
        this.savingThrowsProfRepository.deleteById(monster.getSavingThrowsProf().getId());
        this.statsRepository.deleteById(monster.getStats().getId());
        this.monsterRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
