package com.backend.trpg.service;

import com.backend.trpg.entities.CharacterList;
import com.backend.trpg.repository.CharacterListRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class CharacterListServiceImpl implements CharacterListService {
    @Autowired
    private CharacterListRepository characterListRepository;
    @Override
    public Optional<CharacterList> findById(@NonNull UUID id) {
        return characterListRepository.findById(id);
    }

    @Override
    public Optional<CharacterList> findByName(@NonNull String name) {
        return characterListRepository.findByName(name);
    }
}
