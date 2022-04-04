package com.backend.trpg.service;

import com.backend.trpg.entities.Item;
import com.backend.trpg.repository.ItemRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepository itemRepository;
    @Override
    public Optional<Item> findById(@NonNull UUID id) {
        return itemRepository.findById(id);
    }

    @Override
    public Optional<Item> findByItemName(@NonNull String itemName) {
        return itemRepository.findByItemName(itemName);
    }

    @Override
    public Item save(Item item) {
        return this.itemRepository.save(item);
    }
}
