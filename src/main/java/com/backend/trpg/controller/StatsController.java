package com.backend.trpg.controller;

import com.backend.trpg.entities.Stats;
import com.backend.trpg.service.StatsService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/stats")
public class StatsController {
    private final StatsService statsService;
    public StatsController(StatsService statsService) {
        this.statsService = statsService;
    }

    @GetMapping("/find/{id}")
    public Optional<Stats> findById(@PathVariable @NonNull UUID id) {
        return this.statsService.findById(id);
    }

    @PostMapping("/save")
    public Stats save(@RequestBody Stats stats) {
        return this.statsService.save(stats);
    }
}
