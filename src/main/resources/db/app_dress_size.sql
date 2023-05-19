CREATE TABLE IF NOT EXISTS app_dress_size
(
    dress_id INT REFERENCES app_dress (dress_id),
    size_id  INT REFERENCES size (size_id),
    PRIMARY KEY (dress_id, size_id)
);

ALTER TABLE app_dress_size
    ADD CONSTRAINT fk_app_dress
        FOREIGN KEY (dress_id) REFERENCES app_dress (dress_id);

ALTER TABLE app_dress_size
    DROP CONSTRAINT fk_size,
    ADD CONSTRAINT fk_size
        FOREIGN KEY (size_id) REFERENCES size (size_id);


INSERT INTO app_dress_size (dress_id, size_id)
VALUES (1, 13),
       (1, 14),
       (1, 15),
       (1, 16),
       (2, 13),
       (2, 14),
       (2, 15),
       (2, 16),
       (3, 13),
       (3, 14),
       (3, 15),
       (3, 16),
       (4, 13),
       (4, 14),
       (4, 15),
       (4, 16),
       (5, 13),
       (5, 14),
       (5, 15),
       (5, 16),
       (6, 13),
       (6, 14),
       (6, 15),
       (6, 16),
       (7, 13),
       (7, 14),
       (7, 15),
       (7, 16),
       (8, 13),
       (8, 14),
       (8, 15),
       (8, 16),
       (9, 13),
       (9, 14),
       (9, 15),
       (9, 16);
SELECT *
FROM app_dress_size;

SELECT d.dress_id, d.dress_name, c.color_name, s.size_name
FROM app_dress d
            JOIN app_dress_color dc ON d.dress_id = dc.dress_id
            JOIN color c ON dc.color_id = c.color_id
            JOIN app_dress_size ds ON d.dress_id = ds.dress_id
            JOIN size s ON ds.size_id = s.size_id;

