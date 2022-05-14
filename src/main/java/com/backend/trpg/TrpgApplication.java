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
            if (userService.canRegister("admin", "admin@yandex.ru")) {
                userService.save(
                        new User(
                                UUID.randomUUID(),
                                "admin",
                                "admin@yandex.ru",
                                passwordEncoder.encode("123456789"),
                                User.UserRole.ADMIN
                        )
                );
            }
        };
    }
}
