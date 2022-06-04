package com.backend.trpg.repository;

import com.backend.trpg.entities.Item;
import lombok.NonNull;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ItemRepository extends CrudRepository<Item, UUID> {
    @Query("select item from Item item where item.itemName = :itemName")
    Optional<Item> findByItemName(@NonNull String itemName);
    @Query("select item from Item item where item.globalDatabase = true")
    Iterable<Item> getGlobalData();
    @Query("select item from Item item")
    Iterable<Item> getAllData();
}
