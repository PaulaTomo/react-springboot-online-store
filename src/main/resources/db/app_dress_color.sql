CREATE TABLE IF NOT EXISTS app_dress_color
(
    dress_id INT REFERENCES app_dress (dress_id),
    color_id INT REFERENCES color (color_id),
    PRIMARY KEY (dress_id, color_id)

);

ALTER TABLE app_dress_color
    ADD CONSTRAINT fk_app_dress
        FOREIGN KEY (dress_id) REFERENCES app_dress (dress_id);

ALTER TABLE app_dress_color
    ADD CONSTRAINT fk_color
        FOREIGN KEY (color_id) REFERENCES color (color_id);

INSERT INTO app_dress_color (dress_id, color_id)
VALUES (1, 1), (1, 2), (1, 3),(1,4),
       (2, 1), (2, 2), (2, 3), (2, 4),
       (3, 1), (3, 2), (3, 3), (3, 4),
       (4, 1), (4, 2), (4, 3), (4, 4),
       (5, 1), (5, 2), (5, 3), (5, 4),
       (6, 1), (6, 2), (6, 3), (6, 4),
       (7, 1), (7, 2), (7, 3), (7, 4),
       (8, 1), (8, 2), (8, 3), (8, 4),
       (9, 1), (9, 2), (9, 3), (9, 4);


SELECT * FROM app_dress_color;

SELECT d.dress_id, d.dress_name, c.color_name, s.size_name
FROM app_dress d
         JOIN app_dress_color dc ON d.dress_id = dc.dress_id
         JOIN color c ON dc.color_id = c.color_id
         JOIN app_dress_size ds ON d.dress_id = ds.dress_id
         JOIN size s ON ds.size_id = s.size_id;

SELECT * FROM app_dress;
SELECT * FROM color;
SELECT * FROM size;
SELECT * FROM app_dress_color;
SELECT * FROM app_dress_size;