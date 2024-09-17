const sql = () => {
        return (
            <ul>
                <h3>sql concepts & snippets</h3>
        <li>
            <strong>1. SELECT Statement:</strong>
            <pre>{`
                SELECT first_name, last_name
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>2. WHERE Clause:</strong>
            <pre>{`
                SELECT first_name, last_name
                FROM employees
                WHERE department = 'Sales';
            `}</pre>
        </li>

        <li>
            <strong>3. JOINs (INNER JOIN):</strong>
            <pre>{`
                SELECT e.first_name, e.last_name, d.department_name
                FROM employees e
                         INNER JOIN departments d ON e.department_id = d.department_id;
            `}</pre>
        </li>

        <li>
            <strong>4. LEFT JOIN:</strong>
            <pre>{`
                SELECT e.first_name, e.last_name, d.department_name
                FROM employees e
                         LEFT JOIN departments d ON e.department_id = d.department_id;
            `}</pre>
        </li>

        <li>
            <strong>5. RIGHT JOIN:</strong>
            <pre>{`
                SELECT e.first_name, e.last_name, d.department_name
                FROM employees e
                         RIGHT JOIN departments d ON e.department_id = d.department_id;
            `}</pre>
        </li>

        <li>
            <strong>6. FULL OUTER JOIN:</strong>
            <pre>{`
                SELECT e.first_name, e.last_name, d.department_name
                FROM employees e
                         FULL OUTER JOIN departments d ON e.department_id = d.department_id;
            `}</pre>
        </li>

        <li>
            <strong>7. CROSS JOIN:</strong>
            <pre>{`
                SELECT e.first_name, d.department_name
                FROM employees e
                         CROSS JOIN departments d;
            `}</pre>
        </li>

        <li>
            <strong>8. GROUP BY and Aggregate Functions:</strong>
            <pre>{`
                SELECT department, COUNT(*) AS num_employees
                FROM employees
                GROUP BY department;
            `}</pre>
        </li>

        <li>
            <strong>9. HAVING Clause:</strong>
            <pre>{`
                SELECT department, COUNT(*) AS num_employees
                FROM employees
                GROUP BY department
                HAVING COUNT(*) > 10;
            `}</pre>
        </li>

        <li>
            <strong>10. ORDER BY Clause:</strong>
            <pre>{`
                SELECT first_name, last_name, salary
                FROM employees
                ORDER BY salary DESC;
            `}</pre>
        </li>

        <li>
            <strong>11. LIMIT and OFFSET:</strong>
            <pre>{`
                SELECT first_name, last_name
                FROM employees
                ORDER BY last_name LIMIT 10
                OFFSET 20;
            `}</pre>
        </li>

        <li>
            <strong>12. Subqueries:</strong>
            <pre>{`
                SELECT first_name, last_name
                FROM employees
                WHERE department_id = (SELECT department_id
                                       FROM departments
                                       WHERE department_name = 'HR');
            `}</pre>
        </li>

        <li>
            <strong>13. EXISTS Clause:</strong>
            <pre>{`
                SELECT department_name
                FROM departments d
                WHERE EXISTS (SELECT 1
                              FROM employees e
                              WHERE e.department_id = d.department_id);
            `}</pre>
        </li>

        <li>
            <strong>14. IN Clause:</strong>
            <pre>{`
                SELECT first_name, last_name
                FROM employees
                WHERE department_id IN (1, 2, 3);
            `}</pre>
        </li>

        <li>
            <strong>15. CASE Statement:</strong>
            <pre>{`
                SELECT first_name,
                       salary,
                       CASE
                           WHEN salary > 100000 THEN 'High'
                           WHEN salary BETWEEN 50000 AND 100000 THEN 'Medium'
                           ELSE 'Low'
                           END AS salary_range
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>16. COALESCE Function:</strong>
            <pre>{`
                SELECT first_name, COALESCE(middle_name, 'N/A') AS middle_name
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>17. NULLIF Function:</strong>
            <pre>{`
                SELECT first_name, NULLIF(salary, 0) AS adjusted_salary
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>18. STRING Functions (e.g., CONCAT, SUBSTR):</strong>
            <pre>{`
                SELECT CONCAT(first_name, ' ', last_name) AS full_name
                FROM employees;

                SELECT SUBSTR(first_name, 1, 3) AS short_name
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>19. DATE Functions (e.g., CURRENT_DATE, DATEADD):</strong>
            <pre>{`
                SELECT first_name, hire_date, CURRENT_DATE - hire_date AS days_with_company
                FROM employees;

                SELECT first_name, DATEADD(year, 5, hire_date) AS promotion_date
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>20. Window Functions (ROW_NUMBER):</strong>
            <pre>{`
                SELECT first_name,
                       salary,
                       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>21. Window Functions (RANK and DENSE_RANK):</strong>
            <pre>{`
                SELECT first_name,
                       salary,
                       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_salary_rank
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>22. Window Functions (LEAD and LAG):</strong>
            <pre>{`
                SELECT first_name,
                       salary,
                       LAG(salary, 1) OVER (ORDER BY hire_date) AS previous_salary, LEAD(salary, 1) OVER (ORDER BY hire_date) AS next_salary
                FROM employees;
            `}</pre>
        </li>

        <li>
            <strong>23. CTE (Common Table Expressions):</strong>
            <pre>{`
                WITH DepartmentSalaries AS (SELECT department, AVG(salary) AS avg_salary
                                            FROM employees
                                            GROUP BY department)
                SELECT e.first_name, e.last_name, e.salary, ds.avg_salary
                FROM employees e
                         JOIN DepartmentSalaries ds ON e.department = ds.department
                WHERE e.salary > ds.avg_salary;
            `}</pre>
        </li>

        <li>
            <strong>24. MATERIALIZED VIEW:</strong>
            <pre>{`
    CREATE MATERIALIZED VIEW department_summary AS
    SELECT department, COUNT(*) AS num_employees, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department;
    `}</pre>
        </li>

        <li>
            <strong>25. INDEXES:</strong>
            <pre>{`
                CREATE INDEX idx_last_name ON employees (last_name);
            `}</pre>
        </li>

        <li>
            <strong>26. TRIGGERS:</strong>
            <pre>{`
    CREATE TRIGGER salary_update
    AFTER UPDATE OF salary
    ON employees
    FOR EACH ROW
    BEGIN
        INSERT INTO salary_audit (employee_id, old_salary, new_salary, change_date)
        VALUES (:OLD.employee_id, :OLD.salary, :NEW.salary, CURRENT_DATE);
    END;
    `}</pre>
        </li>

        <li>
            <strong>27. STORED PROCEDURES:</strong>
            <pre>{`
    CREATE PROCEDURE UpdateEmployeeSalary (
        IN emp_id INT, 
        IN new_salary DECIMAL
    )
    BEGIN
        UPDATE employees
        SET salary = new_salary
        WHERE employee_id = emp_id;
    END;
    `}</pre>
        </li>

        <li>
            <strong>28. FUNCTIONS:</strong>
            <pre>{`
    CREATE FUNCTION GetEmployeeFullName (emp_id INT)
    RETURNS VARCHAR(255)
    BEGIN
        DECLARE full_name VARCHAR(255);
        SELECT CONCAT(first_name, ' ', last_name) INTO full_name
        FROM employees
        WHERE employee_id = emp_id;
        RETURN full_name;
    END;
    `}</pre>
        </li>

        <li>
            <strong>29. TRANSACTIONS:</strong>
            <pre>{`
    START TRANSACTION;
    UPDATE employees SET salary = salary * 1.05 WHERE department = 'Sales';
    COMMIT;
    `}</pre>
        </li>

        <li>
            <strong>30. EXPLAIN and QUERY PLAN:</strong>
            <pre>{`
    EXPLAIN SELECT first_name, last_name
    FROM employees
    WHERE department = 'Sales';
    `}</pre>
        </li>
        <li>
            <strong>31. Recursive CTEs:</strong>{' '}
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
    </ul>);
};

export default sql;
