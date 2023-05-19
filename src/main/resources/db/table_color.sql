CREATE TABLE IF NOT EXISTS color
(
    color_id   SERIAL PRIMARY KEY,
    color_name VARCHAR(45) NOT NULL
);

INSERT INTO color (color_name)
VALUES ('Black'), ('Red'), ('Blue'), ('Purple');

SELECT *
FROM color

