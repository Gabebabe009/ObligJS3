package com.example.oblig3jsweb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ticketController {
    @Autowired
    TicketRepo rep;

    @PostMapping("/save")
    public void saveTickets(tickets newTickets){
        rep.saveTicket(newTickets);}

    @GetMapping("/getAll")
    public List<tickets> getAll(){
        return rep.catchAll();}

    @GetMapping("/deleteAll")
    public void deleteAll(){
        rep.deleteAll();}
}
