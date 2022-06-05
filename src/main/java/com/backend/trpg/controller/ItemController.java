package com.backend.trpg.controller;

import com.backend.trpg.entities.Item;
import com.backend.trpg.service.ItemService;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/items")
public class ItemController {
    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/find/{id}")
    public Optional<Item> findById(@PathVariable @NonNull UUID id) {
        return this.itemService.findById(id);
    }

    @GetMapping("/find/itemName/{itemName}")
    public Optional<Item> findByItemName(@PathVariable @NonNull String itemName) {
        return this.itemService.findByItemName(itemName);
    }

    @PostMapping("/save")
    public Item save(@RequestBody Item item) {
        return this.itemService.save(item);
    }

    @GetMapping("/list/data/global")
    public Iterable<Item> getGlobalData() {
        return this.itemService.getGlobalData();
    }

    @GetMapping("/list/data/all")
    public Iterable<Item> getAllData() {
        return this.itemService.getAllData();
    }

    @GetMapping("/list/data/user")
    public Iterable<Item> getUserData(Principal principal) {
        return this.itemService.getUserData(principal);
    }

    @PostMapping("/globalDatabase/add/{id}")
    public ResponseEntity<?> addToGlobalDatabase(@PathVariable UUID id) {
        return this.itemService.addToGlobalDatabase(id);
    }

    @PostMapping("/globalDatabase/remove/{id}")
    public ResponseEntity<?> removeFromGlobalDatabase(@PathVariable UUID id) {
        return this.itemService.removeFromGlobalDatabase(id);
    }
}
