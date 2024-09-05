const python = () => {
    return (
        <ul>
            <li>
                <strong>Variables:</strong> <code>{`x = 10`}</code>
            </li>
            <li>
                <strong>Data Types:</strong>{' '}
                <code>{`x = 5 # int, y = 3.14 # float, z = 'hello' # str`}</code>
            </li>
            <li>
                <strong>Lists:</strong> <code>{`fruits = ['apple', 'banana', 'cherry']`}</code>
            </li>
            <li>
                <strong>Dictionaries:</strong>{' '}
                <code>{`person = {'name': 'John', 'age': 30}`}</code>
            </li>
            <li>
                <strong>Tuples:</strong> <code>{`coords = (10, 20)`}</code>
            </li>
            <li>
                <strong>Sets:</strong> <code>{`unique_numbers = {1, 2, 3}`}</code>
            </li>
            <li>
                <strong>Functions:</strong> <code>{`def greet(name): return f"Hello, {name}"`}</code>
            </li>
            <li>
                <strong>Lambda Functions:</strong> <code>{`double = lambda x: x * 2`}</code>
            </li>
            <li>
                <strong>List Comprehensions:</strong>{' '}
                <code>{`squares = [x**2 for x in range(10)]`}</code>
            </li>
            <li>
                <strong>For Loops:</strong> <code>{`for x in range(5): print(x)`}</code>
            </li>
            <li>
                <strong>Conditional Statements:</strong>{' '}
                <code>{`if x > 0: print("Positive")`}</code>
            </li>
            <li>
                <strong>Error Handling:</strong>{' '}
                <code>{`try: 1 / 0 except ZeroDivisionError: print("Error")`}</code>
            </li>
            <li>
                <strong>Classes:</strong> <code>{`class Dog: def __init__(self, name): self.name = name`}</code>
            </li>
            <li>
                <strong>Inheritance:</strong>{' '}
                <code>{`class Poodle(Dog): pass`}</code>
            </li>
            <li>
                <strong>Modules:</strong> <code>{`import math; print(math.sqrt(4))`}</code>
            </li>
            <li>
                <strong>File Handling:</strong>{' '}
                <code>{`with open('file.txt', 'r') as file: data = file.read()`}</code>
            </li>
            <li>
                <strong>Generators:</strong> <code>{`def counter(): yield 1`}</code>
            </li>
            <li>
                <strong>Decorators:</strong> <code>{`@decorator def func(): pass`}</code>
            </li>
            <li>
                <strong>Regular Expressions:</strong>{' '}
                <code>{`import re; re.match(r'^a', 'apple')`}</code>
            </li>
            <li>
                <strong>DataFrames (Pandas):</strong>{' '}
                <code>{`import pandas as pd; df = pd.DataFrame({'A': [1, 2]})`}</code>
            </li>
            <li>
                <strong>Reading CSV with Pandas:</strong>{' '}
                <code>{`df = pd.read_csv('file.csv')`}</code>
            </li>
            <li>
                <strong>Filtering DataFrame Rows:</strong>{' '}
                <code>{`df[df['A'] > 1]`}</code>
            </li>
            <li>
                <strong>DataFrame Aggregation:</strong>{' '}
                <code>{`df.groupby('A').sum()`}</code>
            </li>
            <li>
                <strong>Sorting DataFrame:</strong>{' '}
                <code>{`df.sort_values(by='A')`}</code>
            </li>
            <li>
                <strong>Merge DataFrames:</strong>{' '}
                <code>{`pd.merge(df1, df2, on='key')`}</code>
            </li>
            <li>
                <strong>Matplotlib Plotting:</strong>{' '}
                <code>{`import matplotlib.pyplot as plt; plt.plot([1, 2, 3])`}</code>
            </li>
            <li>
                <strong>Numpy Arrays:</strong>{' '}
                <code>{`import numpy as np; arr = np.array([1, 2, 3])`}</code>
            </li>
            <li>
                <strong>Zip Function:</strong>{' '}
                <code>{`zipped = list(zip([1, 2], ['a', 'b']))`}</code>
            </li>
            <li>
                <strong>Enumerate Function:</strong>{' '}
                <code>{`for idx, val in enumerate(['a', 'b']): print(idx, val)`}</code>
            </li>
            <li>
                <strong>F-strings:</strong>{' '}
                <code>{`name = 'World'; print(f'Hello, {name}')`}</code>
            </li>
        </ul>
    );
};

export default python;
