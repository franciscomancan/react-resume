const java17 = () => {
    return (
        <ul>
            <h3>java concepts & snippets</h3>
            <li>
                <strong>Text Blocks:</strong>{' '}
                <code>{`String json = """ { "name": "John", "age": 30 } """;`}</code>
            </li>
            <li>
                <strong>Records:</strong>{' '}
                <code>{`public record Person(String name, int age) {}`}</code>
            </li>
            <li>
                <strong>Sealed Classes:</strong>{' '}
                <code>{`public sealed class Shape permits Circle, Rectangle {}`}</code>
            </li>
            <li>
                <strong>Pattern Matching for instanceof:</strong>{' '}
                <code>{`if (obj instanceof String s) { System.out.println(s); }`}</code>
            </li>
            <li>
                <strong>Switch Expressions:</strong>{' '}
                <code>{`String result = switch (day) { case MONDAY -> "Start of week"; default -> "Midweek"; };`}</code>
            </li>
            <li>
                <strong>Enhanced Switch:</strong>{' '}
                <code>{`switch (day) { case MONDAY, FRIDAY -> System.out.println("Busy"); }`}</code>
            </li>
            <li>
                <strong>Local Variable Type Inference:</strong> <code>{`var list = new ArrayList<String>();`}</code>
            </li>
            <li>
                <strong>Helpful NullPointerExceptions:</strong>{' '}
                <code>{`// Prints detailed message if a NullPointerException occurs`}</code>
            </li>
            <li>
                <strong>Compact Number Formatting:</strong>{' '}
                <code>{`NumberFormat fmt = NumberFormat.getCompactNumberInstance();`}</code>
            </li>
            <li>
                <strong>Enhanced Pseudorandom Number Generators:</strong>{' '}
                <code>{`RandomGenerator rng = RandomGenerator.of("L64X128MixRandom");`}</code>
            </li>
            <li>
                <strong>Pattern Matching for switch:</strong>{' '}
                <code>{`String formatted = switch (obj) { case String s -> s.toUpperCase(); default -> "Unknown"; };`}</code>
            </li>
            <li>
                <strong>Stream API Enhancements:</strong>{' '}
                <code>{`List<Integer> odds = list.stream().filter(x -> x % 2 != 0).toList();`}</code>
            </li>
            <li>
                <strong>Instanceof Improvements:</strong>{' '}
                <code>{`if (obj instanceof String s) { s.toLowerCase(); }`}</code>
            </li>
            <li>
                <strong>Enhanced Deprecation:</strong>{' '}
                <code>{`@Deprecated(forRemoval = true, since = "17")`}</code>
            </li>
            <li>
                <strong>Foreign Function & Memory API:</strong>{' '}
                <code>{`// Enables calling native libraries efficiently`}</code>
            </li>
            <li>
                <strong>JEP 356: Enhanced Pseudo-Random Number Generators:</strong>{' '}
                <code>{`RandomGeneratorFactory.of("L128X1024MixRandom").create();`}</code>
            </li>
            <li>
                <strong>Removal of RMI Activation:</strong>{' '}
                <code>{`// RMI Activation is no longer supported`}</code>
            </li>
            <li>
                <strong>Strong Encapsulation of JDK Internals:</strong>{' '}
                <code>{`// Access to internal APIs is restricted`}</code>
            </li>
            <li>
                <strong>Preview Features:</strong>{' '}
                <code>{`// Some features are marked as preview for feedback`}</code>
            </li>
            <li>
                <strong>Deprecation of Applet API:</strong>{' '}
                <code>{`// Applets are deprecated and should be avoided`}</code>
            </li>
            <li>
                <strong>Vector API:</strong>{' '}
                <code>{`// Supports vector computations for better performance`}</code>
            </li>
            <li>
                <strong>JFR Streaming:</strong>{' '}
                <code>{`// Java Flight Recorder data can now be streamed in real-time`}</code>
            </li>
            <li>
                <strong>New Charset APIs:</strong>{' '}
                <code>{`Charset.availableCharsets().values().forEach(System.out::println);`}</code>
            </li>
            <li>
                <strong>Modern Garbage Collectors:</strong>{' '}
                <code>{`// G1, ZGC, and Shenandoah are optimized further`}</code>
            </li>
            <li>
                <strong>Deprecation of Security Manager:</strong>{' '}
                <code>{`// Security Manager is deprecated for future removal`}</code>
            </li>
            <li>
                <strong>Context-Specific Deserialization Filters:</strong>{' '}
                <code>{`// Provides better control over object deserialization`}</code>
            </li>
            <li>
                <strong>Enhanced Performance of Arm64:</strong>{' '}
                <code>{`// Performance improvements on ARM platforms`}</code>
            </li>
            <li>
                <strong>JEP 391: macOS/AArch64 Port:</strong>{' '}
                <code>{`// Native support for macOS on ARM architecture`}</code>
            </li>
            <li>
                <strong>Reimplementation of the Legacy DatagramSocket API:</strong>{' '}
                <code>{`// Better performance and reliability of socket communication`}</code>
            </li>
            <li>
                <strong>Project Loom:</strong>{' '}
                <code>{`// Introduces lightweight, high-throughput concurrency`}</code>
            </li>
        </ul>
    );
};

export default java17;
