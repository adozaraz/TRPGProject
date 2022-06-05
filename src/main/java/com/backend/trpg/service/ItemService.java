package com.backend.trpg.service;

import com.backend.trpg.entities.Item;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

public interface ItemService {
    Optional<Item> findById(@NonNull UUID id);
    Optional<Item> findByItemName(@NonNull String itemName);
    Item save(Item item);

    Iterable<Item> getGlobalData();

    Iterable<Item> getAllData();

    Iterable<Item> getUserData(Principal principal);

    ResponseEntity<?> addToGlobalDatabase(UUID id);

    ResponseEntity<?> removeFromGlobalDatabase(UUID id);
}
