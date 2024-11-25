package com.example.demo.entity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "\"user\"") // Add quotes to the table name
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}