const kotlin = () => {
    return (
        <ul>
            <h3>kotlin concepts & snippets</h3>
            <li>
                <strong>Variables:</strong> <code>{`val x = 10 // Immutable, var y = 20 // Mutable`}</code>
            </li>
            <li>
                <strong>Data Types:</strong>{' '}
                <code>{`val name: String = "John", val age: Int = 30`}</code>
            </li>
            <li>
                <strong>Functions:</strong> <code>{`fun greet(name: String): String = "Hello, $name"`}</code>
            </li>
            <li>
                <strong>Lambda Functions:</strong> <code>{`val add = { x: Int, y: Int -> x + y }`}</code>
            </li>
            <li>
                <strong>Classes:</strong> <code>{`class Person(val name: String, var age: Int)`}</code>
            </li>
            <li>
                <strong>Data Classes:</strong> <code>{`data class User(val name: String, val age: Int)`}</code>
            </li>
            <li>
                <strong>Object Declarations:</strong> <code>{`object Singleton { fun doSomething() = "Done" }`}</code>
            </li>
            <li>
                <strong>Null Safety:</strong> <code>{`val name: String? = null // Nullable type`}</code>
            </li>
            <li>
                <strong>Type Inference:</strong> <code>{`val list = listOf(1, 2, 3) // Type inferred`}</code>
            </li>
            <li>
                <strong>Extension Functions:</strong>{' '}
                <code>{`fun String.addExclamation() = this + "!"`}</code>
            </li>
            <li>
                <strong>Coroutines:</strong>{' '}
                <code>{`suspend fun fetchData() { delay(1000); println("Fetched") }`}</code>
            </li>
            <li>
                <strong>Collections:</strong> <code>{`val list = listOf(1, 2, 3)`}</code>
            </li>
            <li>
                <strong>Higher-Order Functions:</strong>{' '}
                <code>{`fun operate(x: Int, y: Int, op: (Int, Int) -> Int) = op(x, y)`}</code>
            </li>
            <li>
                <strong>For Loop:</strong> <code>{`for (i in 1..5) { println(i) }`}</code>
            </li>
            <li>
                <strong>Conditional Expressions:</strong> <code>{`val max = if (a > b) a else b`}</code>
            </li>
            <li>
                <strong>When Expression:</strong>
                <code>{`val result = when (x) { 1 -> "One"; else -> "Unknown" }`}</code>
            </li>
            <li>
                <strong>Interfaces:</strong> <code>{`interface Drivable { fun drive() }`}</code>
            </li>
            <li>
                <strong>Inheritance:</strong> <code>{`open class Animal; class Dog : Animal()`}</code>
            </li>
            <li>
                <strong>Smart Casts:</strong> <code>{`if (obj is String) { println(obj.length) }`}</code>
            </li>
            <li>
                <strong>Generics:</strong> <code>{`class Box<T>(val item: T)`}</code>
            </li>
            <li>
                <strong>Delegation:</strong> <code>{`class MyList by ArrayList<String>()`}</code>
            </li>
            <li>
                <strong>Properties:</strong> <code>{`var name: String = "Kotlin" get() = field.uppercase()`}</code>
            </li>
            <li>
                <strong>Elvis Operator:</strong> <code>{`val length = name?.length ?: 0`}</code>
            </li>
            <li>
                <strong>Lazy Initialization:</strong> <code>{`val value: String by lazy { "Lazy Value" }`}</code>
            </li>
            <li>
                <strong>Scope Functions:</strong> <code>{`val result = list.apply { add(4) }`}</code>
            </li>
            <li>
                <strong>Try-Catch Block:</strong> <code>{`try { riskyOperation() } catch (e: Exception) { }`}</code>
            </li>
            <li>
                <strong>Named Arguments:</strong>{' '}
                <code>{`fun printName(firstName: String, lastName: String); printName(lastName = "Doe", firstName = "John")`}</code>
            </li>
            <li>
                <strong>Default Arguments:</strong> <code>{`fun greet(name: String = "Guest")`}</code>
            </li>
            <li>
                <strong>Ranges:</strong> <code>{`for (i in 1..10) { print(i) }`}</code>
            </li>
            <li>
                <strong>Safe Call Operator:</strong> <code>{`val length = name?.length`}</code>
            </li>
        </ul>
    );
};

export default kotlin;
