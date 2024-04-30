package com.example.oblig3jsweb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepo {
    @Autowired
    private JdbcTemplate db;

    public void saveTicket(tickets ticket) {
        String sql = "INSERT INTO ticket (movies, number, firstname, lastname, phonenr,mail)VALUES(?,?,?,?,?,?)";
        db.update(sql,ticket.getMovies(),ticket.getNumber(),ticket.getFirstname(), ticket.getLastname(), ticket.getMail(), ticket.getPhonenumber());
    }
    public List<tickets> catchAll() {
        String sql = "SELECT * FROM Billet";
        return db.query(sql, new BeanPropertyRowMapper(tickets.class));
    }
    public void deleteAll() {
        String sql = "DELETE FROM tickets";
        db.update(sql);
    }
}
