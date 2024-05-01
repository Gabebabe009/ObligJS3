package com.example.oblig3jsweb;

public class tickets {
    private String movies;
    private String number;
    private String firstname;
    private String lastname;
    private String phonenr;
    private String mail;

   /* public tickets(String movies, String number, String firstname, String lastname, String phonenr, String mail) {
        this.movies = movies;
        this.number = number;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenr = phonenr;
        this.mail = mail;
    }
    */

    public String getMovies() {
        return movies;
    }

    public void setMovies(String movies) {
        this.movies = movies;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhonenr() {
        return phonenr;
    }

    public void setPhonenr(String phonenr) {
        this.phonenr = phonenr;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
