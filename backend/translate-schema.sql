CREATE DATABASE translate;
CREATE TABLE languages (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    name VARCHAR(50) NOT NULL
);


CREATE TABLE translations (
    id SERIAL PRIMARY KEY,
    source_text TEXT NOT NULL,
    target_text TEXT NOT NULL,
    source_language_id INT,
    target_language_id INT,
    FOREIGN KEY (source_language_id) REFERENCES languages(id),
    FOREIGN KEY (target_language_id) REFERENCES languages(id)
);

CREATE TABLE users (
    username VARCHAR(50) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
       CHECK (position('@' IN email) > 1)
);

CREATE TABLE history(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50),
    translation_id INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(username),
    FOREIGN KEY (translation_id) REFERENCES translations(id)
);