INSERT INTO department (id, name)
VALUES
    (1, 'Paint'),
    (2, 'Photography'),
    (3, 'Sketch');

INSERT INTO job (title, salary, department_id)
VALUES
    ('Painter', 80000, 1),
    ('Photographer', 60000, 2),
    ('Photo Printer', 40000, 2),
    ('Sketch artist', 60000, 3),
    ('Sketch Instructor', 60000, 3);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES
    ('Mahogany', 'Wood', 1, 2),
    ('Free', 'Style', 1, NULL),
    ('Mike', "Pilgrim", 2, NULL),
    ('Expo', 'Mark', 3, 3),
    ('Strath', 'More', 4, 5),
    ('Jeremy', 'Lead', 5, NULL);