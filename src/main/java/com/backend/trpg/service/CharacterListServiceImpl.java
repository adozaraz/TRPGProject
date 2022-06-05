package com.backend.trpg.service;

import com.backend.trpg.entities.CharacterList;
import com.backend.trpg.entities.User;
import com.backend.trpg.repository.*;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

@Service
public class CharacterListServiceImpl implements CharacterListService {
    @Autowired
    private CharacterListRepository characterListRepository;

    @Autowired
    private StatsRepository statsRepository;

    @Autowired
    private SkillsProfRepository skillsProfRepository;

    @Autowired
    private SavingThrowsProfRepository savingThrowsProfRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<CharacterList> findById(@NonNull UUID id) {
        return characterListRepository.findById(id);
    }

    @Override
    public Optional<CharacterList> findByName(@NonNull String name) {
        return characterListRepository.findByName(name);
    }

    @Override
    public CharacterList save(CharacterList characterList) {
        return characterListRepository.save(characterList);
    }

    @Override
    public Iterable<CharacterList> getUserCharacterLists(Principal principal) {
        Optional<User> user = this.userRepository.findByUsername(principal.getName());
        return user.map(value -> this.characterListRepository.getUserCharacterLists(value.getId())).orElse(null);
    }

    @Override
    public CharacterList updateCharacterList(CharacterList characterList) {
        Optional<CharacterList> charListToUpdate = characterListRepository.findByOwnerAndName(characterList.getOwner().getId(), characterList.getName());
        if (charListToUpdate.isEmpty()) return null;
        characterList.setId(charListToUpdate.get().getId());
        characterList.setStats(charListToUpdate.get().getStats());
        characterList.setSavingThrowsProf(charListToUpdate.get().getSavingThrowsProf());
        characterList.setSkillsProf(charListToUpdate.get().getSkillsProf());
        return this.characterListRepository.save(characterList);
    }

    @Override
    public ResponseEntity<?> deleteById(UUID id) {
        CharacterList list = this.characterListRepository.findById(id).get();
        this.savingThrowsProfRepository.deleteById(list.getSavingThrowsProf().getId());
        this.skillsProfRepository.deleteById(list.getSkillsProf().getId());
        this.statsRepository.deleteById(list.getStats().getId());
        this.characterListRepository.deleteById(list.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
