-- V17 Database Setup
-- Student: Vatsal Kalpesh Upadhyay (801478817)

CREATE DATABASE IF NOT EXISTS v17_db;
USE v17_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default user (Vatsal/Vatsal)
INSERT INTO users (username, password) VALUES ('Vatsal', 'Vatsal');
