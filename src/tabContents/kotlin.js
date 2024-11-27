const kotlin = () => {
    return (
        <ul>
            {/* 1-10: Basic Syntax */}
            <li><b>1. Declaring Immutable Values:</b>
                <pre><code>{`val name: String = "Kotlin"`}</code></pre>
            </li>
            <li><b>2. Mutable Variables:</b>
                <pre><code>{`var count = 10`}</code></pre>
            </li>
            <li><b>3. String Templates:</b>
                <pre><code>{`val greeting = "Hello, $name"`}</code></pre>
            </li>
            <li><b>4. Functions:</b>
                <pre><code>{`fun add(a: Int, b: Int): Int = a + b`}</code></pre>
            </li>
            <li><b>5. Null Safety:</b>
                <pre><code>{`val nullable: String? = null`}</code></pre>
            </li>
            <li><b>6. Elvis Operator:</b>
                <pre><code>{`val length = nullable?.length ?: 0`}</code></pre>
            </li>
            <li><b>7. If Expression:</b>
                <pre><code>{`val max = if (a > b) a else b`}</code></pre>
            </li>
            <li><b>8. When Expression:</b>
                <pre><code>{`val result = when (value) { 1 -> "One" else -> "Unknown" }`}</code></pre>
            </li>
            <li><b>9. Ranges:</b>
                <pre><code>{`for (i in 1..5) print(i)`}</code></pre>
            </li>
            <li><b>10. Lists:</b>
                <pre><code>{`val list = listOf(1, 2, 3)`}</code></pre>
            </li>

            {/* 11-20: Intermediate Concepts */}
            <li><b>11. Maps:</b>
                <pre><code>{`val map = mapOf("key" to "value")`}</code></pre>
            </li>
            <li><b>12. Classes:</b>
                <pre><code>{`class Person(val name: String, val age: Int)`}</code></pre>
            </li>
            <li><b>13. Data Classes:</b>
                <pre><code>{`data class User(val id: Int, val name: String)`}</code></pre>
            </li>
            <li><b>14. Inheritance:</b>
                <pre><code>{`open class Animal; class Dog : Animal()`}</code></pre>
            </li>
            <li><b>15. Sealed Classes:</b>
                <pre><code>{`sealed class Result; class Success : Result()`}</code></pre>
            </li>
            <li><b>16. Extension Functions:</b>
                <pre><code>{`fun String.addExclamation() = this + "!"`}</code></pre>
            </li>
            <li><b>17. Higher-Order Functions:</b>
                <pre><code>{`fun operate(a: Int, b: Int, op: (Int, Int) -> Int): Int = op(a, b)`}</code></pre>
            </li>
            <li><b>18. Lambdas:</b>
                <pre><code>{`val sum = { a: Int, b: Int -> a + b }`}</code></pre>
            </li>
            <li><b>19. Collections:</b>
                <pre><code>{`list.filter { it > 2 }`}</code></pre>
            </li>
            <li><b>20. Generics:</b>
                <pre><code>{`fun <T> List<T>.firstOrNull(): T?`}</code></pre>
            </li>

            {/* 21-30: Advanced Features */}
            <li><b>21. Coroutines - Basics:</b>
                <pre><code>{`launch { delay(1000); println("Hello") }`}</code></pre>
            </li>
            <li><b>22. Suspending Functions:</b>
                <pre><code>{`suspend fun fetchData(): String { return "data" }`}</code></pre>
            </li>
            <li><b>23. Flow API:</b>
                <pre><code>{`flow { emit(1); emit(2) }.collect { println(it) }`}</code></pre>
            </li>
            <li><b>24. Threading with Executors:</b>
                <pre><code>{`Executors.newFixedThreadPool(2)`}</code></pre>
            </li>
            <li><b>25. Delegates:</b>
                <pre><code>{`val lazyValue: String by lazy { "Computed!" }`}</code></pre>
            </li>
            <li><b>26. Singleton:</b>
                <pre><code>{`object Singleton { fun show() = "Hello" }`}</code></pre>
            </li>
            <li><b>27. DSL Building:</b>
                <pre><code>{`html { body { p { "Hello" } } }`}</code></pre>
            </li>
            <li><b>28. Type Aliases:</b>
                <pre><code>{`typealias UserMap = Map<String, User>`}</code></pre>
            </li>
            <li><b>29. Inline Classes:</b>
                <pre><code>{`@JvmInline value class UserId(val id: String)`}</code></pre>
            </li>
            <li><b>30. Resource Management:</b>
                <pre><code>{`use { it.close() }`}</code></pre>
            </li>

            {/* 31-50: Concurrent Programming */}
            <li><b>31. Coroutines in IO:</b>
                <pre><code>{`withContext(Dispatchers.IO) { readFile() }`}</code></pre>
            </li>
            <li><b>32. Coroutine Channels:</b>
                <pre><code>{`channel.send(data)`}</code></pre>
            </li>
            <li><b>33. Async/Await:</b>
                <pre><code>{`val result = async { fetchData() }.await()`}</code></pre>
            </li>
            <li><b>34. Mutex:</b>
                <pre><code>{`mutex.withLock { criticalSection() }`}</code></pre>
            </li>
            <li><b>35. Shared State:</b>
                <pre><code>{`atomic { shared++ }`}</code></pre>
            </li>

            {/* 36-50: Concurrent Programming (Continued) */}
            <li><b>36. CoroutineScope:</b>
                <pre><code>{`CoroutineScope(Dispatchers.Default).launch { doWork() }`}</code></pre>
            </li>
            <li><b>37. SupervisorJob:</b>
                <pre><code>{`val scope = CoroutineScope(SupervisorJob())`}</code></pre>
            </li>
            <li><b>38. Exception Handling in Coroutines:</b>
                <pre><code>{`try { fetchData() } catch (e: Exception) { handleError(e) }`}</code></pre>
            </li>
            <li><b>39. Coroutine Cancellation:</b>
                <pre><code>{`job.cancel()`}</code></pre>
            </li>
            <li><b>40. Coroutine Timeout:</b>
                <pre><code>{`withTimeout(1000) { doTask() }`}</code></pre>
            </li>
            <li><b>41. Structured Concurrency:</b>
                <pre><code>{`coroutineScope { launch { doWork() } }`}</code></pre>
            </li>
            <li><b>42. Coroutine Dispatcher Switching:</b>
                <pre><code>{`withContext(Dispatchers.Main) { updateUI() }`}</code></pre>
            </li>
            <li><b>43. Select Expression:</b>
                <pre><code>{`select { channel.onReceive { handle(it) } }`}</code></pre>
            </li>
            <li><b>44. Producer-Consumer Pattern:</b>
                <pre><code>{`produce { send(data) }`}</code></pre>
            </li>
            <li><b>45. Combining Flows:</b>
                <pre><code>{`flow1.combine(flow2) { a, b -> a + b }`}</code></pre>
            </li>
            <li><b>46. StateFlow:</b>
                <pre><code>{`val state = MutableStateFlow(initialValue)`}</code></pre>
            </li>
            <li><b>47. SharedFlow:</b>
                <pre><code>{`val shared = MutableSharedFlow<Int>()`}</code></pre>
            </li>
            <li><b>48. Flow Operators:</b>
                <pre><code>{`flow.map { it * 2 }.collect { println(it) }`}</code></pre>
            </li>
            <li><b>49. Buffering in Flow:</b>
                <pre><code>{`flow.buffer().collect { process(it) }`}</code></pre>
            </li>
            <li><b>50. Launching Multiple Coroutines:</b>
                <pre><code>{`repeat(10) { launch { doWork(it) } }`}</code></pre>
            </li>

            {/* 51-65: Functional Programming */}
            <li><b>51. Map:</b>
                <pre><code>{`list.map { it * 2 }`}</code></pre>
            </li>
            <li><b>52. Filter:</b>
                <pre><code>{`list.filter { it % 2 == 0 }`}</code></pre>
            </li>
            <li><b>53. Reduce:</b>
                <pre><code>{`list.reduce { acc, value -> acc + value }`}</code></pre>
            </li>
            <li><b>54. Fold:</b>
                <pre><code>{`list.fold(0) { acc, value -> acc + value }`}</code></pre>
            </li>
            <li><b>55. FlatMap:</b>
                <pre><code>{`nestedList.flatMap { it }`}</code></pre>
            </li>
            <li><b>56. Grouping:</b>
                <pre><code>{`list.groupBy { it % 2 == 0 }`}</code></pre>
            </li>
            <li><b>57. Partitioning:</b>
                <pre><code>{`list.partition { it > 5 }`}</code></pre>
            </li>
            <li><b>58. Zipping:</b>
                <pre><code>{`listA.zip(listB) { a, b -> a + b }`}</code></pre>
            </li>
            <li><b>59. Chaining:</b>
                <pre><code>{`list.filter { it > 3 }.map { it * 2 }`}</code></pre>
            </li>
            <li><b>60. Custom Operators:</b>
                <pre><code>{`operator fun Int.times(other: Int) = this * other`}</code></pre>
            </li>
            <li><b>61. Recursion:</b>
                <pre><code>{`fun factorial(n: Int): Int = if (n == 1) 1 else n * factorial(n - 1)`}</code></pre>
            </li>
            <li><b>62. Tail Recursion:</b>
                <pre><code>{`tailrec fun sum(n: Int, acc: Int = 0): Int = if (n == 0) acc else sum(n - 1, acc + n)`}</code></pre>
            </li>
            <li><b>63. Functional Types:</b>
                <pre><code>{`val action: (Int) -> String = { "Number: $it" }`}</code></pre>
            </li>
            <li><b>64. Currying:</b>
                <pre><code>{`fun add(x: Int) = { y: Int -> x + y }`}</code></pre>
            </li>
            <li><b>65. Inline Higher-Order Functions:</b>
                <pre><code>{`inline fun calculate(a: Int, block: (Int) -> Int): Int = block(a)`}</code></pre>
            </li>

            {/* 66-80: Advanced Libraries */}
            <li><b>66. JSON Parsing with kotlinx.serialization:</b>
                <pre><code>{`@Serializable data class User(val id: Int); Json.encodeToString(user)`}</code></pre>
            </li>
            <li><b>67. HTTP Requests with Ktor:</b>
                <pre><code>{`HttpClient().get("https://example.com")`}</code></pre>
            </li>
            <li><b>68. Working with Files:</b>
                <pre><code>{`File("path").readText()`}</code></pre>
            </li>
            <li><b>69. Dependency Injection with Koin:</b>
                <pre><code>{`val module = module { single { MyService() } }`}</code></pre>
            </li>
            <li><b>70. Testing with JUnit:</b>
                <pre><code>{`@Test fun myTest() { assertEquals(4, 2 + 2) }`}</code></pre>
            </li>
            <li><b>71. Database Access with Exposed:</b>
                <pre><code>{`Transaction { MyTable.insert { it[column] = value } }`}</code></pre>
            </li>
            <li><b>72. Gradle Dependency Management:</b>
                <pre><code>{`implementation("org.jetbrains.kotlin:kotlin-stdlib")`}</code></pre>
            </li>
            <li><b>73. Reflection:</b>
                <pre><code>{`val kClass = MyClass::class`}</code></pre>
            </li>
            <li><b>74. Logging with SLF4J:</b>
                <pre><code>{`LoggerFactory.getLogger("MyLogger").info("Log Message")`}</code></pre>
            </li>
            <li><b>75. WebSocket Communication with Ktor:</b>
                <pre><code>{`webSocket { send(Frame.Text("Hello")) }`}</code></pre>
            </li>

            {/* 81-100: Streaming Data and HTML Output */}
            <li><b>81. Reading Large Files:</b>
                <pre><code>{`File("path").bufferedReader().lines().forEach { println(it) }`}</code></pre>
            </li>
            <li><b>82. Processing Streamed Data:</b>
                <pre><code>{`sequenceOf(1, 2, 3).map { it * 2 }.toList()`}</code></pre>
            </li>
            <li><b>83. Streaming API Data with Flows:</b>
                <pre><code>{`flow { emit(fetchNextPage()) }`}</code></pre>
            </li>
            <li><b>84. JSON Streaming:</b>
                <pre><code>{`jsonReader.use { while (it.hasNext()) println(it.nextName()) }`}</code></pre>
            </li>
            <li><b>85. HTML Generation:</b>
                <pre><code>{`html { body { ul { list.forEach { li { +it } } } } }`}</code></pre>
            </li>

                        {/* 86-100: Advanced Practices, Streaming, and Integrations */}
           <li><b>86. Custom DSL for Streaming Data:</b>
                            <pre><code>{`
            fun stream(block: StreamBuilder.() -> Unit) = StreamBuilder().apply(block)
            class StreamBuilder { fun emit(value: String) { println(value) } }
            stream { emit("Data1"); emit("Data2") }
            `}</code></pre>
                        </li>
                        <li><b>87. WebSocket Data Stream:</b>
                            <pre><code>{`
            webSocket("ws://example.com") { incoming.consumeEach { frame -> println((frame as Frame.Text).readText()) } }
            `}</code></pre>
                        </li>
                        <li><b>88. Collecting Live Flow Data:</b>
                            <pre><code>{`
            liveFlow.collect { data -> updateUI(data) }
            `}</code></pre>
                        </li>
                        <li><b>89. Streaming Files Line by Line:</b>
                            <pre><code>{`
            File("file.txt").useLines { lines -> lines.forEach { println(it) } }
            `}</code></pre>
                        </li>
                        <li><b>90. Handling Backpressure in Flows:</b>
                            <pre><code>{`
            flow { emit(fetch()) }.buffer(capacity = 10).collect { process(it) }
            `}</code></pre>
                        </li>
                        <li><b>91. Combining Async and Streaming:</b>
                            <pre><code>{`
            val result = async { flow.collect { process(it) } }
            `}</code></pre>
                        </li>
                        <li><b>92. HTML Streaming Output:</b>
                            <pre><code>{`
            html {
              body {
                div {
                  flowOf("Item1", "Item2").collect { +it }
                }
              }
            }
            `}</code></pre>
                        </li>
                        <li><b>93. Integrating with Kafka Streams:</b>
                            <pre><code>{`
            KafkaConsumer<String, String>(props).use { consumer ->
              consumer.subscribe(listOf("topic"))
              consumer.poll(Duration.ofMillis(1000)).forEach { println(it.value()) }
            }
            `}</code></pre>
                        </li>
                        <li><b>94. Consuming REST APIs with Ktor:</b>
                            <pre><code>{`
            val client = HttpClient()
            val response: String = client.get("https://api.example.com/data")
            println(response)
            `}</code></pre>
                        </li>
                        <li><b>95. Reactive Streams with Reactor:</b>
                            <pre><code>{`
            Flux.just("A", "B", "C").map { it.toLowerCase() }.subscribe { println(it) }
            `}</code></pre>
                        </li>
                        <li><b>96. Persisting Streaming Data:</b>
                            <pre><code>{`
            File("output.txt").bufferedWriter().use { writer ->
              flow.collect { writer.write(it) }
            }
            `}</code></pre>
                        </li>
                        <li><b>97. Streaming Data Transformation:</b>
                            <pre><code>{`
            flow.map { transform(it) }.collect { output(it) }
            `}</code></pre>
                        </li>
                        <li><b>98. Building Reactive Pipelines:</b>
                            <pre><code>{`
            val pipeline = flowOf(1, 2, 3).flatMapConcat { flowOf(it * 2) }
            pipeline.collect { println(it) }
            `}</code></pre>
                        </li>
                        <li><b>99. Dynamic HTML Rendering with Streaming:</b>
                            <pre><code>{`
            html {
              body {
                flowOf("Stream1", "Stream2").collect { div { +it } }
              }
            }
            `}</code></pre>
                        </li>
                        <li><b>100. Best Practices in Kotlin:</b>
                            <pre><code>{`
            // Use immutability
            val immutableList = listOf(1, 2, 3)
            // Handle nulls explicitly
            val safeValue = nullable ?: "default"
            // Write unit tests
            @Test fun validateLogic() { assertEquals(4, 2 + 2) }
            `}</code></pre>
                        </li>
            {/* 1. Reverse a String */}
            <li>
                <b>1. Reverse a String:</b>
                <pre><code>{`
fun reverseString(input: String): String {
    return input.reversed()
}

// Usage
println(reverseString("hello")) // Output: "olleh"
`}</code></pre>
            </li>

            {/* 2. Check if a Number is Prime */}
            <li>
                <b>2. Check if a Number is Prime:</b>
                <pre><code>{`
fun isPrime(n: Int): Boolean {
    if (n <= 1) return false
    for (i in 2..Math.sqrt(n.toDouble()).toInt()) {
        if (n % i == 0) return false
    }
    return true
}

// Usage
println(isPrime(11)) // Output: true
println(isPrime(4))  // Output: false
`}</code></pre>
            </li>

            {/* 3. Find the Fibonacci Sequence up to N Terms */}
            <li>
                <b>3. Generate Fibonacci Sequence:</b>
                <pre><code>{`
fun generateFibonacci(n: Int): List<Int> {
    if (n <= 0) return listOf()
    val result = mutableListOf(0, 1)
    for (i in 2 until n) {
        result.add(result[i - 1] + result[i - 2])
    }
    return result.take(n)
}

// Usage
println(generateFibonacci(5)) // Output: [0, 1, 1, 2, 3]
`}</code></pre>
            </li>

            {/* 4. Find the Maximum in a List */}
            <li>
                <b>4. Find the Maximum in a List:</b>
                <pre><code>{`
fun findMax(numbers: List<Int>): Int? {
    return numbers.maxOrNull()
}

// Usage
println(findMax(listOf(1, 3, 7, 2, 9))) // Output: 9
`}</code></pre>
            </li>

            {/* 5. Anagram Check */}
            <li>
                <b>5. Check if Two Strings are Anagrams:</b>
                <pre><code>{`
fun areAnagrams(s1: String, s2: String): Boolean {
    return s1.toCharArray().sorted() == s2.toCharArray().sorted()
}

// Usage
println(areAnagrams("listen", "silent")) // Output: true
println(areAnagrams("hello", "world"))   // Output: false
`}</code></pre>
            </li>
            </ul>
   );
};

export default kotlin;

