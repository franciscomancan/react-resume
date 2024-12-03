const bq = () => {
    return (<ul>
            {/* Basics */}
            <li>
                <strong>1. Dataset Creation:</strong> A dataset is a top-level container for your BigQuery tables.
                <pre>{`CREATE SCHEMA my_project.my_dataset;`}</pre>
            </li>
            <li>
                <strong>2. Table Creation:</strong> Create a table in a dataset.
                <pre>{`CREATE TABLE my_project.my_dataset.my_table (id INT64, name STRING);`}</pre>
            </li>
            <li>
                <strong>3. Inserting Data:</strong> Insert rows into a table.
                <pre>{`INSERT INTO my_project.my_dataset.my_table (id, name) VALUES (1, 'Alice');`}</pre>
            </li>
            <li>
                <strong>4. Selecting Data:</strong> Retrieve data from a table.
                <pre>{`SELECT * FROM my_project.my_dataset.my_table;`}</pre>
            </li>
            <li>
                <strong>5. Filtering Data:</strong> Use a WHERE clause to filter rows.
                <pre>{`SELECT * FROM my_project.my_dataset.my_table WHERE id = 1;`}</pre>
            </li>
            <li>
                <strong>6. Basic SQL Functions:</strong> Use functions like UPPER, LOWER, LENGTH.
                <pre>{`SELECT UPPER(name) FROM my_project.my_dataset.my_table;`}</pre>
            </li>
            <li>
                <strong>7. Casting Data Types:</strong> Convert data types with CAST or SAFE_CAST.
                <pre>{`SELECT CAST(id AS STRING) FROM my_table;`}</pre>
            </li>
            <li>
                <strong>8. Distinct Values:</strong> Retrieve unique rows.
                <pre>{`SELECT DISTINCT name FROM my_table;`}</pre>
            </li>
            <li>
                <strong>9. Null Handling:</strong> Use IFNULL, COALESCE for null-safe operations.
                <pre>{`SELECT IFNULL(name, 'Unknown') FROM my_table;`}</pre>
            </li>
            <li>
                <strong>10. Case Statements:</strong> Implement conditional logic in queries.
                <pre>{`SELECT CASE WHEN id > 5 THEN 'Large' ELSE 'Small' END AS size FROM my_table;`}</pre>
            </li>
            <li>
                <strong>11. Mathematical Operations:</strong> Perform calculations with +, -, *, /.
                <pre>{`SELECT id, id * 10 AS multiplied FROM my_table;`}</pre>
            </li>
            {/* Intermediate */}
            <li>
                <strong>12. Aggregations:</strong> Use aggregate functions like COUNT, AVG, SUM.
                <pre>{`SELECT COUNT(*) AS total FROM my_project.my_dataset.my_table;`}</pre>
            </li>
            <li>
                <strong>13. Group By:</strong> Group data based on specific columns.
                <pre>{`SELECT name, COUNT(*) AS total FROM my_table GROUP BY name;`}</pre>
            </li>
            <li>
                <strong>14. Order By:</strong> Sort data by a specific column.
                <pre>{`SELECT * FROM my_table ORDER BY name ASC;`}</pre>
            </li>
            <li>
                <strong>15. Limit:</strong> Limit the number of rows returned.
                <pre>{`SELECT * FROM my_table LIMIT 10;`}</pre>
            </li>
            <li>
                <strong>16. Joining Tables:</strong> Combine rows from two tables.
                <pre>{`SELECT a.id, b.name FROM table_a a JOIN table_b b ON a.id = b.id;`}</pre>
            </li>
            <li>
                <strong>17. Left Join:</strong> Keep all rows from the left table.
                <pre>{`SELECT a.id, b.name FROM table_a a LEFT JOIN table_b b ON a.id = b.id;`}</pre>
            </li>
            <li>
                <strong>18. Right Join:</strong> Keep all rows from the right table.
                <pre>{`SELECT a.id, b.name FROM table_a a RIGHT JOIN table_b b ON a.id = b.id;`}</pre>
            </li>
            <li>
                <strong>19. Full Outer Join:</strong> Keep rows from both tables.
                <pre>{`SELECT a.id, b.name FROM table_a a FULL OUTER JOIN table_b b ON a.id = b.id;`}</pre>
            </li>
            <li>
                <strong>20. Cross Join:</strong> Cartesian product of two tables.
                <pre>{`SELECT a.id, b.name FROM table_a a CROSS JOIN table_b b;`}</pre>
            </li>
            <li>
                <strong>21. Subqueries:</strong> Use a query inside another query.
                <pre>{`SELECT id FROM (SELECT id, name FROM my_table WHERE name = 'Alice');`}</pre>
            </li>
            <li>
                <strong>22. CTEs:</strong> Temporary result sets for readability.
                <pre>{`WITH cte AS (SELECT id FROM my_table WHERE name = 'Alice') SELECT * FROM cte;`}</pre>
            </li>
            <li>
                <strong>23. Window Functions:</strong> Perform calculations over a window of rows.
                <pre>{`SELECT id, name, RANK() OVER (PARTITION BY name ORDER BY id) AS rank FROM my_table;`}</pre>
            </li>
            <li>
                <strong>24. Array Functions:</strong> Use ARRAY functions like ARRAY_AGG.
                <pre>{`SELECT ARRAY_AGG(name) AS names FROM my_table;`}</pre>
            </li>
            <li>
                <strong>25. Structs:</strong> Use STRUCT for nested data.
                <pre>{`SELECT STRUCT(id, name) AS user_info FROM my_table;`}</pre>
            </li>
            <li>
                <strong>26. Pivot Queries:</strong> Transform rows into columns.
                <pre>{`SELECT * FROM my_table PIVOT (COUNT(id) FOR name IN ('Alice', 'Bob'));`}</pre>
            </li>
            <li>
                <strong>27. JSON Functions:</strong> Parse and query JSON data.
                <pre>{`SELECT JSON_EXTRACT('{"key": "value"}', '$.key') AS key_value;`}</pre>
            </li>
            <li>
                <strong>28. Partitioned Tables:</strong> Optimize large tables by partitioning.
                <pre>{`CREATE TABLE my_table PARTITION BY DATE(timestamp_column);`}</pre>
            </li>
            <li>
                <strong>29. Clustering:</strong> Sort rows within partitions.
                <pre>{`CREATE TABLE my_table CLUSTER BY name;`}</pre>
            </li>
            <li>
                <strong>30. Data Studio Integration:</strong> Visualize BigQuery data with Data Studio.
                <pre>{`// Use Data Studio GUI for integration`}</pre>
            </li>
            {/* Advanced */}
            <li>
                <strong>31. Federated Queries:</strong> Query external data sources.
                <pre>{`SELECT * FROM EXTERNAL_QUERY('connection_id', 'SELECT * FROM external_table');`}</pre>
            </li>
            <li>
                <strong>32. UDFs:</strong> Write custom functions in SQL or JavaScript.
                <pre>{`CREATE FUNCTION my_udf(x INT64) RETURNS INT64 AS (x * x);`}</pre>
            </li>
            <li>
                <strong>33. ML Models:</strong> Train and use machine learning models in SQL.
                <pre>{`CREATE MODEL my_model OPTIONS(model_type='linear_reg') AS SELECT * FROM my_table;`}</pre>
            </li>
            <li>
                <strong>34. Update Data:</strong> Modify rows using DML.
                <pre>{`UPDATE my_table SET name = 'Bob' WHERE id = 1;`}</pre>
            </li>
            <li>
                <strong>35. Delete Data:</strong> Remove rows from a table.
                <pre>{`DELETE FROM my_table WHERE id = 1;`}</pre>
            </li>
            <li>
                <strong>36. Temporary Tables:</strong> Create session-scoped tables.
                <pre>{`CREATE TEMP TABLE temp_table AS SELECT * FROM my_table;`}</pre>
            </li>
            <li>
                <strong>37. Procedures:</strong> Encapsulate logic for reuse.
                <pre>{`CREATE PROCEDURE my_proc() BEGIN SELECT * FROM my_table; END;`}</pre>
            </li>
            <li>
                <strong>38. Materialized Views:</strong> Precompute and store results.
                <pre>{`CREATE MATERIALIZED VIEW mv AS SELECT COUNT(*) FROM my_table;`}</pre>
            </li>
            <li>
                <strong>39. Metadata Queries:</strong> Query INFORMATION_SCHEMA.
                <pre>{`SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = 'my_table';`}</pre>
            </li>
            <li>
                <strong>40. Wildcard Tables:</strong> Query tables matching a pattern.
                <pre>{`SELECT * FROM my_dataset.my_table_* WHERE _TABLE_SUFFIX = '2023';`}</pre>
            </li>
            <li>
                <strong>41. Scheduling Queries:</strong> Automate queries with schedules.
                <pre>{`// Use BigQuery UI for scheduled queries`}</pre>
            </li>
            <li>
                <strong>42. Exporting Data:</strong> Export results to Cloud Storage.
                <pre>{`EXPORT DATA OPTIONS(uri='gs://my_bucket/export.csv') AS SELECT * FROM my_table;`}</pre>
            </li>
            <li>
                <strong>43. Optimizing Queries:</strong> Use EXPLAIN for query optimization.
                <pre>{`EXPLAIN SELECT * FROM my_table;`}</pre>
            </li>
            <li>
                <strong>44. Handling Errors:</strong> Use SAFE functions for error handling.
                <pre>{`SELECT SAFE_DIVIDE(10, 0);`}</pre>
            </li>
            <li>
                <strong>45. Recursive CTEs:</strong> Perform recursive queries.
                <pre>{`WITH RECURSIVE cte AS (SELECT 1 AS num UNION ALL SELECT num + 1 FROM cte WHERE num < 5) SELECT * FROM cte;`}</pre>
            </li>
            <li>
                <strong>46. BigQuery GIS:</strong> Work with geospatial data.
                <pre>{`SELECT ST_DISTANCE(ST_GEOGPOINT(0, 0), ST_GEOGPOINT(1, 1));`}</pre>
            </li>
            <li>
                <strong>47. Time Travel:</strong> Query table snapshots.
                <pre>{`SELECT * FROM my_table FOR SYSTEM_TIME AS OF TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR);`}</pre>
            </li>
            <li>
                <strong>48. Data Transfer Service:</strong> Automate data imports from external sources.
                <pre>{`// Use the BigQuery UI for transfer setup`}</pre>
            </li>
            <li>
                <strong>49. BigQuery Admin Queries:</strong> Manage roles and permissions.
                <pre>{`GRANT roles/bigquery.dataViewer ON TABLE my_table TO 'user@example.com';`}</pre>
            </li>
            <li>
                <strong>50. JSON_TABLE:</strong> Parse JSON into structured tables.
                <pre>{`SELECT * FROM JSON_TABLE('{"key": "value"}', '$');`}</pre>
            </li>
            <li>
                <strong>51. BigQuery Reservations:</strong> Manage query resources.
                <pre>{`// Use the BigQuery UI for reservation setup`}</pre>
            </li>
            <li>
                <strong>52. Query Tags:</strong> Add custom tags to queries for monitoring.
                <pre>{`SELECT * FROM my_table /* tag: team=analytics */;`}</pre>
            </li>
            <li>
                <strong>53. Access Logs:</strong> Monitor query history.
                <pre>{`SELECT * FROM \`region-us\`.INFORMATION_SCHEMA.JOBS_BY_PROJECT WHERE user_email = 'user@example.com';`}</pre>
            </li>
            <li>
                <strong>54. Streaming Data:</strong> Insert streaming data into a table.
                <pre>{`INSERT INTO my_table (id, name) VALUES (1, 'Alice');`}</pre>
            </li>
            <li>
                <strong>55. Querying External Storage:</strong> Use BigQuery Omni for multi-cloud queries.
                <pre>{`SELECT * FROM EXTERNAL_QUERY('connection_name', 'SELECT * FROM other_cloud_table');`}</pre>
            </li>
            </ul>
    );
};

export default bq;
