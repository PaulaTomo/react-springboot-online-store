CREATE TABLE IF NOT EXISTS app_dress
(
    dress_id   SERIAL PRIMARY KEY,
    dress_name VARCHAR(65)    NOT NULL,
    price      DECIMAL(10, 2) NOT NULL
);

CREATE SEQUENCE app_dress_seq;

INSERT INTO app_dress(dress_name, price)
VALUES ('Radiant', 199.00),
       ('Dreamy', 89.00),
       ('Romance', 199.00),
       ('Gown', 79.00),
       ('Serene', 149.00),
       ('Graceful', 99.00),
       ('Aura', 89.00),
       ('Bella', 99.00),
       ('MyDress', 299.00);

SELECT *
FROM app_dress;


