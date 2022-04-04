package com.backend.trpg.service;

import com.backend.trpg.entities.SavingThrowsProf;
import com.backend.trpg.repository.SavingThrowsProfRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class SavingThrowsProfServiceImpl implements SavingThrowsProfService {
    @Autowired
    private SavingThrowsProfRepository savingThrowsProfRepository;
    @Override
    public Optional<SavingThrowsProf> findById(@NonNull UUID id) {
        return savingThrowsProfRepository.findById(id);
    }

    @Override
    public SavingThrowsProf save(SavingThrowsProf savingThrowsProf) {
        return this.savingThrowsProfRepository.save(savingThrowsProf);
    }
}
