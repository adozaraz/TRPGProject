package com.backend.trpg.repository;

import com.backend.trpg.entities.User;
import lombok.NonNull;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {
    @Query("select user from User user where user.username = :username")
    Optional<User> findByUsername(@NonNull String username);
    @Query("select user from User user where user.email = :email")
    Optional<User> findByEmail(@NonNull String email);
}
