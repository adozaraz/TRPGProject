package com.backend.trpg.service;

import com.backend.trpg.entities.SavingThrowsProf;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface SavingThrowsProfService {
    Optional<SavingThrowsProf> findById(@NonNull UUID id);
    SavingThrowsProf save(SavingThrowsProf savingThrowsProf);

    SavingThrowsProf updateSavingThrows(SavingThrowsProf savingThrowsProf);
}
