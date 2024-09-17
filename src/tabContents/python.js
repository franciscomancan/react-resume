const python = () => {
    return (<ul>
            <h3>python concepts & snippets</h3>
            <li><strong>Variables:</strong> Containers for storing data values.
                <code>{`age = 25`}</code>
            </li>
            <li><strong>Data Types:</strong> Different types of data such as integers, floats, strings, etc.
                <code>{`name = "Alice"  # String, age = 30  # Integer, height = 5.7  # Float`}</code>
            </li>
            <li><strong>Lists:</strong> Ordered collection of items, mutable and indexed.
                <code>{`fruits = ["apple", "banana", "cherry"]`}</code>, <code>{`print(fruits[1])  # Output: banana`}</code>
            </li>
            <li><strong>Tuples:</strong> Ordered collection of items, immutable and indexed.
                <code>{`coordinates = (10, 20)`}</code>, <code>{`print(coordinates[0])  # Output: 10`}</code>
            </li>
            <li><strong>Dictionaries:</strong> Collection of key-value pairs, unordered and mutable.
                <code>{`person = {"name": "John", "age": 30}`}</code>, <code>{`print(person["name"])  # Output: John`}</code>
            </li>
            <li><strong>Sets:</strong> Unordered collection of unique items.
                <code>{`unique_numbers = {1, 2, 3, 2}`}</code>, <code>{`print(unique_numbers)  # Output: {1, 2, 3}`}</code>
            </li>
            <li><strong>If Statements:</strong> Conditional statements that execute code based on conditions.
                <code>{`if age > 18: print("Adult")`}</code>
            </li>
            <li><strong>For Loops:</strong> Iterate over a sequence (like a list, tuple, or string).
                <code>{`for fruit in fruits: print(fruit)`}</code>
            </li>
            <li><strong>While Loops:</strong> Repeats as long as a condition is true.
                <code>{`count = 0`}</code>, <code>{`while count < 5: print(count); count += 1`}</code>
            </li>
            <li><strong>Functions:</strong> Block of code that only runs when called.
                <code>{`def greet(name): print(f"Hello, {name}")`}</code>, <code>{`greet("Alice")`}</code>
            </li>
            <li><strong>Lambda Functions:</strong> Small anonymous functions defined using
                the <code>lambda</code> keyword.
                <code>{`square = lambda x: x * x`}</code>, <code>{`print(square(4))  # Output: 16`}</code>
            </li>
            <li><strong>List Comprehensions:</strong> Concise way to create lists.
                <code>{`squares = [x * x for x in range(5)]`}</code>, <code>{`print(squares)  # Output: [0, 1, 4, 9, 16]`}</code>
            </li>
            <li><strong>Set Comprehensions:</strong> Concise way to create sets.
                <code>{`unique_squares = {x * x for x in range(5)}`}</code>, <code>{`print(unique_squares)  # Output: {0, 1, 4, 9, 16}`}</code>
            </li>
            <li><strong>Dictionary Comprehensions:</strong> Concise way to create dictionaries.
                <code>{`squares_dict = {x: x * x for x in range(5)}`}</code>, <code>{`print(squares_dict)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`}</code>
            </li>
            <li><strong>Exception Handling:</strong> Managing errors using try-except blocks.
                <code>{`try: print(10 / 0)`}</code>, <code>{`except ZeroDivisionError: print("Cannot divide by zero!")`}</code>
            </li>
            <li><strong>Classes and Objects:</strong> Defining and creating custom data types using classes.
                <code>{`class Dog: def __init__(self, name): self.name = name`}</code>, <code>{`dog = Dog("Buddy")`}</code>, <code>{`print(dog.name)  # Output: Buddy`}</code>
            </li>
            <li><strong>Inheritance:</strong> Creating a new class from an existing class.
                <code>{`class Animal: def speak(self): print("Animal speaks")`}</code>, <code>{`class Dog(Animal): def speak(self): print("Bark!")`}</code>, <code>{`dog = Dog()`}</code>, <code>{`dog.speak()  # Output: Bark!`}</code>
            </li>
            <li><strong>Modules:</strong> Reusable pieces of code saved in separate files.
                <code>{`# math_module.py`}</code>, <code>{`def add(a, b): return a + b`}</code>, <code>{`import math_module`}</code>, <code>{`print(math_module.add(5, 3))  # Output: 8`}</code>
            </li>
            <li><strong>Packages:</strong> Collection of modules grouped in a directory.
                <code>{`# Create a package by creating an __init__.py file inside a directory e.g., mypackage/__init__.py`}</code>
            </li>
            <li><strong>File I/O:</strong> Reading and writing files.
                <code>{`with open("file.txt", "w") as file: file.write("Hello, World!")`}</code>, <code>{`with open("file.txt", "r") as file: print(file.read())`}</code>
            </li>
            <li><strong>Generators:</strong> Functions that yield values one at a time, providing lazy evaluation.
                <code>{`def count_up_to(max): count = 1; while count <= max: yield count; count += 1`}</code>, <code>{`for number in count_up_to(3): print(number)  # Output: 1 2 3`}</code>
            </li>
            <li><strong>Decorators:</strong> Functions that modify the behavior of other functions.
                <code>{`def my_decorator(func): def wrapper(): print("Before function."); func(); print("After function."); return wrapper`}</code>, <code>{`@my_decorator`}</code>, <code>{`def say_hello(): print("Hello!")`}</code>, <code>{`say_hello()`}</code>
            </li>
            <li><strong>Context Managers:</strong> Manage resources, like files, efficiently
                using <code>with</code> statements.
                <code>{`with open("file.txt", "w") as file: file.write("Hello, World!")`}</code>
            </li>
            <li><strong>Regular Expressions:</strong> Matching patterns in strings using <code>re</code> module.
                <code>{`import re`}</code>, <code>{`pattern = r"\\d+"`}</code>, <code>{`print(re.findall(pattern, "There are 123 numbers"))  # Output: ['123']`}</code>
            </li>
            <li><strong>Map, Filter, Reduce:</strong> Functional programming tools for data transformation.
                <code>{`nums = [1, 2, 3, 4]`}</code>, <code>{`doubled = list(map(lambda x: x * 2, nums))  # Output: [2, 4, 6, 8]`}</code>
            </li>
            <li><strong>Argparse:</strong> Command-line argument parsing for scripts.
                <code>{`import argparse`}</code>, <code>{`parser = argparse.ArgumentParser()`}</code>, <code>{`parser.add_argument("--name", help="Your name")`}</code>, <code>{`args = parser.parse_args()`}</code>, <code>{`print(f"Hello, {args.name}!")`}</code>
            </li>
            <li><strong>JSON:</strong> Parsing and writing JSON data.
                <code>{`import json`}</code>, <code>{`data = {"name": "Alice", "age": 25}`}</code>, <code>{`json_str = json.dumps(data)`}</code>, <code>{`print(json_str)  # Output: {"name": "Alice", "age": 25}`}</code>
            </li>
            <li><strong>Datetime:</strong> Working with dates and times.
                <code>{`from datetime import datetime`}</code>, <code>{`now = datetime.now()`}</code>, <code>{`print(now.strftime("%Y-%m-%d %H:%M:%S"))`}</code>
            </li>
            <li><strong>Multithreading:</strong> Running tasks concurrently in threads.
                <code>{`import threading`}</code>, <code>{`def print_numbers(): for i in range(5): print(i)`}</code>, <code>{`thread = threading.Thread(target=print_numbers)`}</code>, <code>{`thread.start()`}</code>
            </li>
            <li><strong>Asyncio:</strong> Asynchronous programming for managing I/O-bound tasks efficiently.
                <code>{`import asyncio`}</code>, <code>{`async def greet(): print("Hello"); await asyncio.sleep(1); print("World!")`}</code>, <code>{`asyncio.run(greet())`}</code>
            </li>
            <li><strong>Virtual Environments:</strong> Isolating dependencies for different Python projects.
                <code>{`python -m venv myenv`}</code>, <code>{`# Activating the environment`}</code>, <code>{`# Windows: myenv\\Scripts\\activate`}</code>, <code>{`# macOS/Linux: source myenv/bin/activate`}</code>
            </li>
            <h3>dataframes and analytics</h3>
            <li><strong>Creating DataFrames:</strong> Constructing DataFrames from various data sources.
                <pre><code>{`import pandas as pd\n\n# From a dictionary\ndata = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}\ndf = pd.DataFrame(data)`}</code></pre>
            </li>
            <li><strong>Reading Data:</strong> Importing data from files like CSV, Excel, etc.
                <pre><code>{`df = pd.read_csv('file.csv')`}</code></pre>
            </li>
            <li><strong>Viewing Data:</strong> Displaying the first few rows of a DataFrame.
                <pre><code>{`print(df.head())`}</code></pre>
            </li>
            <li><strong>Data Selection:</strong> Accessing specific rows and columns.
                <pre><code>{`# Selecting a column\ndf['Name']\n\n# Selecting multiple columns\ndf[['Name', 'Age']]\n\n# Selecting rows by index\ndf.loc[0]`}</code></pre>
            </li>
            <li><strong>Filtering Data:</strong> Applying conditions to filter rows.
                <pre><code>{`df_filtered = df[df['Age'] > 25]`}</code></pre>
            </li>
            <li><strong>Adding Columns:</strong> Creating new columns based on existing data.
                <pre><code>{`df['AgePlusOne'] = df['Age'] + 1`}</code></pre>
            </li>
            <li><strong>Renaming Columns:</strong> Changing column names.
                <pre><code>{`df.rename(columns={'Age': 'Years'}, inplace=True)`}</code></pre>
            </li>
            <li><strong>Dropping Columns:</strong> Removing columns from the DataFrame.
                <pre><code>{`df.drop('AgePlusOne', axis=1, inplace=True)`}</code></pre>
            </li>
            <li><strong>Handling Missing Data:</strong> Techniques for dealing with NaN values.
                <pre><code>{`df.fillna(value=0, inplace=True)  # Replace NaN with 0\n\n# Drop rows with NaN\n df.dropna(inplace=True)`}</code></pre>
            </li>
            <li><strong>Grouping Data:</strong> Aggregating data based on a column.
                <pre><code>{`df_grouped = df.groupby('Name').sum()`}</code></pre>
            </li>
            <li><strong>Aggregating Data:</strong> Calculating summary statistics like mean, sum, etc.
                <pre><code>{`df['Age'].mean()  # Mean of the 'Age' column\n\ndf.describe()  # Summary statistics for numeric columns`}</code></pre>
            </li>
            <li><strong>Sorting Data:</strong> Ordering data by column values.
                <pre><code>{`df_sorted = df.sort_values(by='Age', ascending=False)`}</code></pre>
            </li>
            <li><strong>Indexing:</strong> Setting a specific column as the index of the DataFrame.
                <pre><code>{`df.set_index('Name', inplace=True)`}</code></pre>
            </li>
            <li><strong>Resetting Index:</strong> Resetting the index to default integer index.
                <pre><code>{`df.reset_index(inplace=True)`}</code></pre>
            </li>
            <li><strong>Merging DataFrames:</strong> Combining multiple DataFrames.
                <pre><code>{`df_merged = pd.merge(df1, df2, on='key')`}</code></pre>
            </li>
            <li><strong>Joining DataFrames:</strong> Joining DataFrames on indices.
                <pre><code>{`df_joined = df1.join(df2, lsuffix='_left', rsuffix='_right')`}</code></pre>
            </li>
            <li><strong>Concatenating DataFrames:</strong> Stacking DataFrames on top of each other or side by side.
                <pre><code>{`df_concat = pd.concat([df1, df2], axis=0)`}</code></pre>
            </li>
            <li><strong>Pivot Tables:</strong> Creating pivot tables for multidimensional data analysis.
                <pre><code>{`pivot_table = df.pivot_table(values='Sales', index='Date', columns='Product')`}</code></pre>
            </li>
            <li><strong>Applying Functions:</strong> Applying functions to DataFrame columns or rows.
                <pre><code>{`df['Age'] = df['Age'].apply(lambda x: x + 1)`}</code></pre>
            </li>
            <li><strong>Using `applymap`:</strong> Applying functions to each element of a DataFrame.
                <pre><code>{`df.applymap(lambda x: len(str(x)))`}</code></pre>
            </li>
            <li><strong>Saving Data:</strong> Exporting DataFrame to CSV, Excel, etc.
                <pre><code>{`df.to_csv('output.csv', index=False)`}</code></pre>
            </li>
            <li><strong>Reading from SQL:</strong> Importing data from SQL databases.
                <pre><code>{`import sqlalchemy\n\nengine = sqlalchemy.create_engine('sqlite:///database.db')\ndf = pd.read_sql('SELECT * FROM table', con=engine)`}</code></pre>
            </li>
            <li><strong>Plotting Data:</strong> Creating basic plots with DataFrame data.
                <pre><code>{`import matplotlib.pyplot as plt\n\ndf['Age'].plot(kind='hist')\nplt.show()`}</code></pre>
            </li>
            <li><strong>Handling Categorical Data:</strong> Converting categorical variables into dummy/indicator
                variables.
                <pre><code>{`df_dummies = pd.get_dummies(df['Category'])`}</code></pre>
            </li>
            <li><strong>Resampling Data:</strong> Resampling time series data.
                <pre><code>{`df_resampled = df.resample('M').mean()`}</code></pre>
            </li>
            <li><strong>Rolling Statistics:</strong> Calculating rolling mean, sum, etc.
                <pre><code>{`df['RollingMean'] = df['Sales'].rolling(window=3).mean()`}</code></pre>
            </li>
            <li><strong>Window Functions:</strong> Applying window functions for advanced analytics.
                <pre><code>{`df['CumulativeSum'] = df['Sales'].cumsum()`}</code></pre>
            </li>
            <li><strong>Data Normalization:</strong> Normalizing data for better analytics.
                <pre><code>{`df['Normalized'] = (df['Sales'] - df['Sales'].mean()) / df['Sales'].std()`}</code></pre>
            </li>
            <li><strong>Outlier Detection:</strong> Identifying and handling outliers.
                <pre><code>{`df_outliers = df[df['Sales'] > df['Sales'].quantile(0.95)]`}</code></pre>
            </li>
            <li><strong>Correlation Analysis:</strong> Computing correlation between columns.
                <pre><code>{`correlation_matrix = df.corr()`}</code></pre>
            </li>
            <li><strong>Value Counts:</strong> Counting unique values in a column.
                <pre><code>{`value_counts = df['Category'].value_counts()`}</code></pre>
            </li>
            <li><strong>Applying Aggregations:</strong> Using aggregation functions like `sum`, `mean`, etc.
                <pre><code>{`df.groupby('Category').agg({'Sales': 'sum', 'Profit': 'mean'})`}</code></pre>
            </li>
            <li><strong>Handling Dates:</strong> Working with datetime columns for analysis.
                <pre><code>{`df['Date'] = pd.to_datetime(df['Date'])\ndf['Month'] = df['Date'].dt.month`}</code></pre>
            </li>
            <li><strong>Indexing and Slicing:</strong> Advanced indexing and slicing techniques.
                <pre><code>{`df.loc[df['Age'] > 25, 'Name']`}</code></pre>
            </li>
            <li><strong>Transforming Data:</strong> Using `transform` for element-wise operations.
                <pre><code>{`df['Transformed'] = df.groupby('Category')['Sales'].transform(lambda x: (x - x.mean()) / x.std())`}</code></pre>
            </li>
            <li><strong>Memory Usage:</strong> Checking and optimizing memory usage.
                <pre><code>{`print(df.memory_usage(deep=True))`}</code></pre>
            </li>
        </ul>
    );
};

export default python;
