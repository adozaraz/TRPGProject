package com.backend.trpg.security.jwt;

import com.backend.trpg.entities.User;
import com.backend.trpg.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        var userByName = this.userRepository.findByUsername(login);
        User user = userByName.isEmpty() ? userRepository.findByEmail(login).get():userByName.get();
        //.orElseThrow(
        //() -> new UsernameNotFoundException("User Not Found with -> username or email : " + login));
        return UserPrinciple.build(user);
    }
}