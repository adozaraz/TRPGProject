package com.backend.trpg.service;

import com.backend.trpg.entities.Monster;
import lombok.NonNull;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

public interface MonsterService {
    Optional<Monster> findById(@NonNull UUID id);
    Optional<Monster> findByName(@NonNull String name);
    Monster save(Monster monster);

    Iterable<Monster> getGlobalData();

    Iterable<Monster> getAllData();

    Iterable<Monster> getUserData(Principal principal);

    ResponseEntity<?> addToGlobalDatabase(UUID id);

    ResponseEntity<?> removeFromGlobalDatabase(UUID id);
}
