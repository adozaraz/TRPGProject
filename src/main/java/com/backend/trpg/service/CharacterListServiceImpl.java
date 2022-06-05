package com.backend.trpg.service;

import com.backend.trpg.entities.CharacterList;
import com.backend.trpg.entities.User;
import com.backend.trpg.repository.CharacterListRepository;
import com.backend.trpg.repository.UserRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

@Service
public class CharacterListServiceImpl implements CharacterListService {
    @Autowired
    private CharacterListRepository characterListRepository;

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


}
