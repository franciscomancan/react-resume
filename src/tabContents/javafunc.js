const javafunc = () => {
    const examples = [
        {
            name: "Lambda Expressions",
            code: "list.forEach(item -> System.out.println(item));"
        },
        {
            name: "Method References",
            code: "list.forEach(System.out::println);"
        },
        {
            name: "Stream API - Filtering",
            code: "list.stream().filter(n -> n > 5).collect(Collectors.toList());"
        },
        {
            name: "Stream API - Mapping",
            code: "list.stream().map(String::toUpperCase).collect(Collectors.toList());"
        },
        {
            name: "Stream API - Reducing",
            code: "int sum = numbers.stream().reduce(0, (a, b) -> a + b);"
        },
        {
            name: "Optional for Null Handling",
            code: "Optional<String> name = Optional.ofNullable(getName());"
        },
        {
            name: "Functional Interfaces",
            code: "Predicate<String> isLong = s -> s.length() > 10;"
        },
        {
            name: "Parallel Streams",
            code: "list.parallelStream().forEach(item -> processItem(item));"
        },
        {
            name: "Collectors groupingBy",
            code: "Map<String, List<Person>> peopleByCity = people.stream().collect(Collectors.groupingBy(Person::getCity));"
        },
        {
            name: "Collectors joining",
            code: "String joined = list.stream().collect(Collectors.joining(\", \"));"
        },
        {
            name: "CompletableFuture for Async Operations",
            code: "CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> fetchDataFromAPI());"
        },
        {
            name: "Function Composition",
            code: "Function<Integer, Integer> multiply = x -> x * 2;\nFunction<Integer, Integer> add = x -> x + 3;\nFunction<Integer, Integer> composed = multiply.andThen(add);"
        },
        {
            name: "Lazy Evaluation with Suppliers",
            code: "Supplier<Heavy> heavySupplier = Heavy::new;\nHeavy heavy = heavySupplier.get();"
        },
        {
            name: "Immutable Collections",
            code: "List<String> immutableList = List.of(\"a\", \"b\", \"c\");"
        },
        {
            name: "Stream flatMap",
            code: "list.stream().flatMap(Collection::stream).collect(Collectors.toList());"
        },
        {
            name: "Stream peek for Debugging",
            code: "stream.peek(e -> System.out.println(\"Processed: \" + e)).collect(Collectors.toList());"
        },
        {
            name: "Functional Exception Handling",
            code: "Optional<Integer> result = Optional.ofNullable(someNullableMethod()).flatMap(this::tryParse);"
        },
        {
            name: "Stream generate",
            code: "Stream.generate(Math::random).limit(5).forEach(System.out::println);"
        },
        {
            name: "Stream iterate",
            code: "Stream.iterate(0, n -> n + 2).limit(10).forEach(System.out::println);"
        },
        {
            name: "Collectors partitioningBy",
            code: "Map<Boolean, List<Integer>> evenAndOddNumbers = numbers.stream().collect(Collectors.partitioningBy(n -> n % 2 == 0));"
        },
        {
            name: "Method References to Constructor",
            code: "Stream<Person> people = names.stream().map(Person::new);"
        },
        {
            name: "Functional Interfaces with Generics",
            code: "Function<String, Integer> stringToInt = Integer::parseInt;"
        },
        {
            name: "Stream takeWhile (Java 9+)",
            code: "Stream.iterate(1, n -> n + 1).takeWhile(n -> n <= 5).forEach(System.out::println);"
        },
        {
            name: "Stream dropWhile (Java 9+)",
            code: "Stream.of(1, 2, 3, 4, 5, 4, 3, 2, 1).dropWhile(n -> n < 5).forEach(System.out::println);"
        },
        {
            name: "Optional ifPresentOrElse (Java 9+)",
            code: "optional.ifPresentOrElse(value -> System.out.println(\"Found: \" + value), () -> System.out.println(\"Not found\"));"
        },
        {
            name: "Collectors toUnmodifiableList (Java 10+)",
            code: "List<String> immutableList = strings.stream().collect(Collectors.toUnmodifiableList());"
        },
        {
            name: "var for Lambda Parameters (Java 11+)",
            code: "list.stream().map((var x) -> x.toLowerCase()).collect(Collectors.toList());"
        },
        {
            name: "Switch Expressions (Java 14+)",
            code: "String result = switch(day) {\n    case MONDAY, FRIDAY -> \"Busy day\";\n    case TUESDAY -> \"Long day\";\n    default -> \"Normal day\";\n};"
        },
        {
            name: "Records for Immutable Data (Java 16+)",
            code: "record Point(int x, int y) {}"
        },
        {
            name: "Pattern Matching for instanceof (Java 16+)",
            code: "if (obj instanceof String s) {\n    System.out.println(s.toLowerCase());\n}"
        }
    ];

    return (
        <div className="p-4">
            <h3>java - functional</h3>
            <ul>
                {examples.map((example, index) => (
                    <li key={index}>
                        <strong className="font-semibold">{example.name}</strong>
                        <pre><code>{example.code}</code></pre>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default javafunc;