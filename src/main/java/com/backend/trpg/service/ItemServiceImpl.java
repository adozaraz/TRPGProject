package com.backend.trpg.service;

import com.backend.trpg.entities.Item;
import com.backend.trpg.entities.User;
import com.backend.trpg.repository.ItemRepository;
import com.backend.trpg.repository.UserRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private UserRepository userRepository;
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

    @Override
    public Iterable<Item> getGlobalData() {
        return this.itemRepository.getGlobalData();
    }

    @Override
    public Iterable<Item> getAllData() {
        return this.itemRepository.getAllData();
    }

    @Override
    public Iterable<Item> getUserData(Principal principal) {
        Optional<User> user = this.userRepository.findByUsername(principal.getName());
        return user.map(value -> this.itemRepository.getUserData(value.getId())).orElse(null);
    }

    @Override
    public ResponseEntity<?> addToGlobalDatabase(UUID id) {
        Optional<Item> item = this.itemRepository.findById(id);
        if (item.isEmpty()) return ResponseEntity.notFound().build();
        item.get().setGlobalDatabase(true);
        this.itemRepository.save(item.get());
        return ResponseEntity.ok("Changed successfully");
    }

    @Override
    public ResponseEntity<?> removeFromGlobalDatabase(UUID id) {
        Optional<Item> item = this.itemRepository.findById(id);
        if (item.isEmpty()) return ResponseEntity.notFound().build();
        item.get().setGlobalDatabase(false);
        this.itemRepository.save(item.get());
        return ResponseEntity.ok("Changed successfully");
    }


}
