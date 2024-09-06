const sql = () => {
        return (
            <ul>
                <h3>concepts/examples</h3>
                <li>
                    <strong>SELECT Statement:</strong> <code>{`SELECT *
                                                               FROM employees;`}</code>
                </li>
                <li>
                    <strong>WHERE Clause:</strong> <code>{`SELECT *
                                                           FROM employees
                                                           WHERE age > 30;`}</code>
                </li>
                <li>
                    <strong>JOIN:</strong> <code>{`SELECT *
                                                   FROM employees
                                                            JOIN departments ON employees.dept_id = departments.id;`}</code>
                </li>
                <li>
                    <strong>GROUP BY:</strong>{' '}
                    <code>{`SELECT department, COUNT(*)
                            FROM employees
                            GROUP BY department;`}</code>
                </li>
                <li>
                    <strong>ORDER BY:</strong> <code>{`SELECT *
                                                       FROM employees
                                                       ORDER BY salary DESC;`}</code>
                </li>
                <li>
                    <strong>INSERT INTO:</strong>{' '}
                    <code>{`INSERT INTO employees (name, age)
                            VALUES ('John', 30);`}</code>
                </li>
                <li>
                    <strong>UPDATE:</strong> <code>{`UPDATE employees
                                                     SET age = 31
                                                     WHERE name = 'John';`}</code>
                </li>
                <li>
                    <strong>DELETE:</strong> <code>{`DELETE
                                                     FROM employees
                                                     WHERE age < 25;`}</code>
                </li>
                <li>
                    <strong>CREATE TABLE:</strong>{' '}
                    <code>{`CREATE TABLE employees
                            (
                                id   INT,
                                name VARCHAR(50)
                            );`}</code>
                </li>
                <li>
                    <strong>ALTER TABLE:</strong>{' '}
                    <code>{`ALTER TABLE employees
                        ADD COLUMN salary DECIMAL;`}</code>
                </li>
                <li>
                    <strong>DROP TABLE:</strong> <code>{`DROP TABLE employees;`}</code>
                </li>
                <li>
                    <strong>Aggregate Functions:</strong>{' '}
                    <code>{`SELECT AVG(salary)
                            FROM employees;`}</code>
                </li>
                <li>
                    <strong>HAVING Clause:</strong>{' '}
                    <code>{`SELECT department, COUNT(*)
                            FROM employees
                            GROUP BY department
                            HAVING COUNT(*) > 5;`}</code>
                </li>
                <li>
                    <strong>Subqueries:</strong>{' '}
                    <code>{`SELECT *
                            FROM employees
                            WHERE salary > (SELECT AVG(salary) FROM employees);`}</code>
                </li>
                <li>
                    <strong>UNION:</strong>{' '}
                    <code>{`SELECT name
                            FROM employees
                            UNION
                            SELECT name
                            FROM managers;`}</code>
                </li>
                <li>
                    <strong>EXISTS:</strong>{' '}
                    <code>{`SELECT *
                            FROM employees
                            WHERE EXISTS (SELECT 1 FROM managers WHERE employees.id = managers.id);`}</code>
                </li>
                <li>
                    <strong>CASE Statement:</strong>{' '}
                    <code>{`SELECT name, CASE WHEN salary > 50000 THEN 'High' ELSE 'Low' END
                            FROM employees;`}</code>
                </li>
                <li>
                    <strong>Window Functions:</strong>{' '}
                    <code>{`SELECT name, salary, RANK() OVER (ORDER BY salary DESC)
                            FROM employees;`}</code>
                </li>
                <li>
                    <strong>CTE (Common Table Expressions):</strong>{' '}
                    <code>{`WITH top_salaries AS (SELECT * FROM employees WHERE salary > 50000)
                            SELECT *
                            FROM top_salaries;`}</code>
                </li>
                <li>
                    <strong>Indexes:</strong>{' '}
                    <code>{`CREATE INDEX idx_name ON employees (name);`}</code>
                </li>
                <li>
                    <strong>Transactions:</strong>{' '}
                    <code>{`BEGIN TRANSACTION; UPDATE employees SET salary = 60000 WHERE id = 1; COMMIT;`}</code>
                </li>
                <li>
                    <strong>ROLLBACK:</strong>{' '}
                    <code>{`BEGIN TRANSACTION; UPDATE employees SET salary = 60000 WHERE id = 1; ROLLBACK;`}</code>
                </li>
                <li>
                    <strong>Views:</strong>{' '}
                    <code>{`CREATE VIEW high_earners AS SELECT * FROM employees WHERE salary > 50000;`}</code>
                </li>
                <li>
                    <strong>Triggers:</strong>{' '}
                    <code>{`CREATE TRIGGER after_insert AFTER INSERT ON employees FOR EACH ROW BEGIN UPDATE departments SET total_employees = total_employees + 1; END;`}</code>
                </li>
                <li>
                    <strong>Stored Procedures:</strong>{' '}
                    <code>{`CREATE PROCEDURE increase_salary() BEGIN UPDATE employees SET salary = salary * 1.10; END;`}</code>
                </li>
                <li>
                    <strong>Pivot:</strong>{' '}
                    <code>{`SELECT department, SUM(salary)
                            FROM employees
                            GROUP BY department;`}</code>
                </li>
                <li>
                    <strong>JSON Functions:</strong>{' '}
                    <code>{`SELECT JSON_EXTRACT(data, '$.name')
                            FROM employees;`}</code>
                </li>
                <li>
                    <strong>Full-Text Search:</strong>{' '}
                    <code>{`SELECT *
                            FROM documents
                            WHERE MATCH (content) AGAINST('search terms');`}</code>
                </li>
                <li>
                    <strong>Analytic Functions:</strong>{' '}
                    <code>{`SELECT name, salary, SUM(salary) OVER (PARTITION BY department)
                            FROM employees;`}</code>
                </li>
                <li>
                    <strong>Recursive CTEs:</strong>{' '}
                    <pre><code>{`WITH RECURSIVE employee_hierarchy AS (SELECT id, name
                                   FROM employees
                                   WHERE manager_id IS NULL
                                   UNION ALL
                                   SELECT e.id, e.name
                                   FROM employees e
                                            INNER JOIN employee_hierarchy h ON e.manager_id = h.id)
                                 SELECT *
                                 FROM employee_hierarchy;`}</code></pre>
                </li>
            </ul>
        );
};

export default sql;
