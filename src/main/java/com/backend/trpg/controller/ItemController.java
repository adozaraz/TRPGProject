package com.backend.trpg.controller;

import com.backend.trpg.entities.Item;
import com.backend.trpg.service.ItemService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
