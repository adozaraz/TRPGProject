package com.backend.trpg.service;

import com.backend.trpg.entities.Item;
import lombok.NonNull;

import java.util.Optional;
import java.util.UUID;

public interface ItemService {
    Optional<Item> findById(@NonNull UUID id);
    Optional<Item> findByItemName(@NonNull String itemName);
    Item save(Item item);

    Iterable<Item> getGlobalData();
}
