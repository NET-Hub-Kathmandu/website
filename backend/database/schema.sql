-- MySQL Schema for .NET Hub Kathmandu
-- Database: nethub_db

CREATE DATABASE IF NOT EXISTS nethub_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE nethub_db;

-- 1. Stats Table
CREATE TABLE IF NOT EXISTS stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    target_number INT NOT NULL,
    suffix VARCHAR(10) DEFAULT '+',
    label VARCHAR(255) NOT NULL,
    animation_delay VARCHAR(20) DEFAULT '0s',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seed Stats
INSERT INTO stats (target_number, suffix, label, animation_delay, display_order) VALUES
(933, '+', 'Community members', '0s', 1),
(184, '+', '.NET Foundation groups worldwide', '0.1s', 2),
(20, '+', 'Workshops & talks hosted', '0.2s', 3),
(100, '%', 'Free & community‑driven', '0.3s', 4);

-- 2. Tech Stack Table
CREATE TABLE IF NOT EXISTS tech_stack (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    animation_delay VARCHAR(20) DEFAULT '0s',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Tech Stack
INSERT INTO tech_stack (title, description, animation_delay, display_order) VALUES
('C# & .NET', 'Modern C#, .NET 8/9, minimal APIs and performance‑first design.', '0s', 1),
('Microsoft Azure', 'Cloud‑native apps, App Service, Functions, and Azure DevOps pipelines.', '0.05s', 2),
('ASP.NET Core & Blazor', 'Web APIs, MVC, Razor Pages and interactive Blazor front ends.', '0.1s', 3),
('SQL Server & EF Core', 'Data modelling, performance tuning and cloud database patterns.', '0.15s', 4),
('Angular & React', 'Front‑end pairings that plug into .NET APIs at production scale.', '0.2s', 5),
('DevOps & GitHub', 'CI/CD, GitHub Actions and Copilot‑assisted engineering workflows.', '0.25s', 6);

-- 3. Leaders Table
CREATE TABLE IF NOT EXISTS leaders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    role VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    avatar_text VARCHAR(10) NOT NULL,
    linkedin_url VARCHAR(500) NOT NULL,
    animation_delay VARCHAR(20) DEFAULT '0s',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Leaders
INSERT INTO leaders (name, role, bio, avatar_text, linkedin_url, animation_delay, display_order) VALUES
('Pasang Tamang', 'Founder & Lead Organizer, Microsoft MVP', 'Senior software engineer driving the .NET Hub Kathmandu community, workshops and Foundation partnership.', 'PT', 'https://www.linkedin.com/in/ptamang/', '0s', 1),
('Nabaraj Ghimire', 'Principal Software Engineer, SELISE Group', 'Senior technical leader speaking and mentoring at .NET Hub Kathmandu workshops and dev days.', 'NG', 'https://www.linkedin.com/in/nabaraj-ghimire/', '0.1s', 2);

-- 4. Events Table
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    animation_delay VARCHAR(20) DEFAULT '0s',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Events
INSERT INTO events (tag, title, description, animation_delay, display_order) VALUES
('Workshop', 'Umbraco CMS with ASP.NET Core', 'A hands‑on build session covering setup, content modelling and deployment of Umbraco on .NET.', '0s', 1),
('Conference', 'Microsoft Build — Localhost Kathmandu', 'Our community watch party and local deep‑dives on the year’s biggest Microsoft Build announcements.', '0.1s', 2),
('Dev Day', 'GitHub Copilot Dev Days', 'Practical, hands‑on sessions on pairing GitHub Copilot with everyday .NET development.', '0.2s', 3);
