package com.backend.trpg;

import com.backend.trpg.entities.*;
import com.backend.trpg.service.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.UUID;

@SpringBootApplication
public class TrpgApplication {

    public static void main(String[] args) {
        SpringApplication.run(TrpgApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ItemService itemService, UserService userService, PasswordEncoder passwordEncoder, MonsterService monsterService, SkillsProfService skillsProfService, StatsService statsService) {
        return args -> {
            User user = userService.save(
                  new User(
                          UUID.randomUUID(),
                          "admin",
                          "admin@yandex.ru",
                          passwordEncoder.encode("123456789"),
                          User.UserRole.ADMIN
                  )
                );
            Stats stats = statsService.save(new Stats(UUID.randomUUID(), 8, 8,8,8,8,8));
            SkillsProf skillsProf = skillsProfService.save(new SkillsProf(UUID.randomUUID(), false, false, false,false ,false, false));
            monsterService.save(new Monster(UUID.randomUUID(), user, "Jker", Monster.Size.LARGE, "Humanoid",
                    Monster.Alignment.CHAOTIC_EVIL, 15, 20, 30, stats,
                    skillsProf, 12, 12, "Test obj", true));
            itemService.save(new Item(UUID.randomUUID(), user, "TestObj", true, Item.Rarity.RARE, "TestOb", true));
        };
    }
}
