package com.backend.trpg.repository;


import com.backend.trpg.entities.SavingThrowsProf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SavingThrowsProfRepository extends CrudRepository<SavingThrowsProf, UUID> {
}
