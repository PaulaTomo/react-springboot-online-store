CREATE TABLE IF NOT EXISTS size
(
    size_id   SERIAL PRIMARY KEY,
    size_name VARCHAR(10) NOT NULL
);

INSERT INTO size (size_name)
VALUES ('XS'), ('S'), ('M'), ('L');



SELECT * FROM size;

SELECT d.dress_id, d.dress_name, c.color_name, s.size_name
FROM app_dress d
         JOIN app_dress_color dc ON d.dress_id = dc.dress_id
         JOIN color c ON dc.color_id = c.color_id
         JOIN app_dress_size ds ON d.dress_id = ds.dress_id
         JOIN size s ON ds.size_id = s.size_id;
