const java = () => {
    return (
        <ul>
            <h3>java OO</h3>
                <li><strong>Class:</strong> Blueprint for creating objects. <code>{`public class Car { private String model; }`}</code></li>
                <li><strong>Object:</strong> Instance of a class. <code>{`Car myCar = new Car();`}</code></li>
                <li><strong>Encapsulation:</strong> Bundling data and methods that operate on that data. <code>{`private int speed; public void setSpeed(int speed) { this.speed = speed; }`}</code></li>
                <li><strong>Inheritance:</strong> Creating a new class based on an existing class. <code>{`public class ElectricCar extends Car { }`}</code></li>
                <li><strong>Polymorphism:</strong> Ability of objects to take on multiple forms. <code>{`Vehicle v = new Car(); // Car is-a Vehicle`}</code></li>
                <li><strong>Abstraction:</strong> Hiding complex implementation details. <code>{`abstract class Shape { abstract double area(); }`}</code></li>
                <li><strong>Interface:</strong> Contract specifying behavior that classes must implement. <code>{`interface Drawable { void draw(); }`}</code></li>
                <li><strong>Constructor:</strong> Special method for initializing objects. <code>{`public Car(String model) { this.model = model; }`}</code></li>
                <li><strong>Method Overloading:</strong> Multiple methods with the same name but different parameters. <code>{`public void accelerate() { } public void accelerate(int speed) { }`}</code></li>
                <li><strong>Method Overriding:</strong> Redefining a method in a subclass. <code>{`@Override public String toString() { return "Car: " + model; }`}</code></li>
                <li><strong>super Keyword:</strong> Refer to superclass members. <code>{`super.accelerate(); // Call superclass method`}</code></li>
                <li><strong>this Keyword:</strong> Refer to the current object. <code>{`this.speed = speed; // Set instance variable`}</code></li>
                <li><strong>Static Members:</strong> Belong to the class, not instances. <code>{`public static final int MAX_SPEED = 120;`}</code></li>
                <li><strong>Final Class:</strong> Cannot be subclassed. <code>{`final class ImmutableCar { }`}</code></li>
                <li><strong>Final Method:</strong> Cannot be overridden in subclasses. <code>{`public final void start() { }`}</code></li>
                <li><strong>Abstract Class:</strong> Cannot be instantiated, may contain abstract methods. <code>{`abstract class Vehicle { abstract void move(); }`}</code></li>
                <li><strong>Abstract Method:</strong> Method without implementation in an abstract class. <code>{`abstract void brake();`}</code></li>
                <li><strong>Default Methods:</strong> Provide default implementation in interfaces. <code>{`default void log() { System.out.println("Logging..."); }`}</code></li>
                <li><strong>Multiple Inheritance (Interfaces):</strong> A class implementing multiple interfaces. <code>{`class MyClass implements Interface1, Interface2 { }`}</code></li>
                <li><strong>Composition:</strong> Creating complex objects from simpler ones. <code>{`class Car { private Engine engine; private Wheels wheels; }`}</code></li>
                <li><strong>Association:</strong> Relationship between two separate classes. <code>{`class Driver { private Car car; }`}</code></li>
                <li><strong>Aggregation:</strong> Weak "has-a" relationship. <code>{`class Team { private List<Player> players; }`}</code></li>
                <li><strong>Method Hiding:</strong> Redefining static methods in subclass. <code>{`public static void printInfo() { } // in subclass`}</code></li>
                <li><strong>Covariant Return Types:</strong> Overridden method returns subtype of original return type. <code>{`class A { B method() { } } class SubA extends A { SubB method() { } }`}</code></li>
                <li><strong>Anonymous Classes:</strong> Declare and instantiate a class at the same time. <code>{`new Interface() { public void method() { } };`}</code></li>
                <li><strong>Inner Classes:</strong> Classes defined within other classes. <code>{`class OuterClass { class InnerClass { } }`}</code></li>
                <li><strong>Static Nested Classes:</strong> Static classes defined within other classes. <code>{`static class StaticNestedClass { }`}</code></li>
                <li><strong>Local Classes:</strong> Classes defined within a method. <code>{`void method() { class LocalClass { } }`}</code></li>
                <li><strong>Marker Interfaces:</strong> Interfaces with no methods, used to mark a class as having a certain property. <code>{`public interface Serializable { }`}</code></li>
                <li><strong>Functional Interfaces:</strong> Interfaces with a single abstract method. <code>{`@FunctionalInterface interface Runnable { void run(); }`}</code></li>
                <li><strong>Lambda Expressions:</strong> Concise way to represent anonymous classes of functional interfaces. <code>{`Runnable r = () -> System.out.println("Running");`}</code></li>
                <li><strong>Method References:</strong> Shorthand syntax for lambda expressions calling a specific method. <code>{`List<String> names; names.forEach(System.out::println);`}</code></li>
                <li><strong>Generics:</strong> Enable types to be parameters when defining classes or methods. <code>{`public class Box<T> { private T t; }`}</code></li>
                <li><strong>Type Erasure:</strong> Process of removing generic type information at compile time. <code>{`List<String> list = new ArrayList<>(); // becomes List list at runtime`}</code></li>
                <li><strong>Bounded Type Parameters:</strong> Restrict the types that can be used as type arguments in a parameterized type. <code>{`public <T extends Number> void method(T t) { }`}</code></li>
                <li><strong>Wildcard Types:</strong> Unknown type in generics, represented by ?. <code>{`List<?> list = new ArrayList<String>();`}</code></li>
                <li><strong>Enums:</strong> Special type of class that represents a group of constants. <code>{`enum Day { MONDAY, TUESDAY, WEDNESDAY }`}</code></li>
                <li><strong>Singleton Pattern:</strong> Ensure a class has only one instance. <code>{`private static final Singleton INSTANCE = new Singleton(); private Singleton() {}`}</code></li>
                <li><strong>Factory Pattern:</strong> Create objects without specifying the exact class. <code>{`public static Shape createShape(String type) { if (type.equals("circle")) return new Circle(); }`}</code></li>
                <li><strong>Builder Pattern:</strong> Construct complex objects step by step. <code>{`Car car = new Car.Builder().setModel("Tesla").setColor("red").build();`}</code></li>
                <li><strong>Observer Pattern:</strong> Define a dependency between objects so that when one changes state, all its dependents are notified. <code>{`interface Observer { void update(); }`}</code></li>
                <li><strong>Strategy Pattern:</strong> Define a family of algorithms, encapsulate each one, and make them interchangeable. <code>{`interface PaymentStrategy { void pay(int amount); }`}</code></li>
                <li><strong>Decorator Pattern:</strong> Attach additional responsibilities to an object dynamically. <code>{`abstract class ShapeDecorator implements Shape { protected Shape decoratedShape; }`}</code></li>
                <li><strong>Proxy Pattern:</strong> Provide a surrogate or placeholder for another object to control access to it. <code>{`class ProxyInternet implements Internet { private Internet internet; }`}</code></li>
                <li><strong>Adapter Pattern:</strong> Allow incompatible interfaces to work together. <code>{`class MediaAdapter implements MediaPlayer { AdvancedMediaPlayer advancedMusicPlayer; }`}</code></li>
                <li><strong>Template Method Pattern:</strong> Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. <code>{`abstract class Game { abstract void initialize(); abstract void startPlay(); abstract void endPlay(); }`}</code></li>
                <li><strong>Command Pattern:</strong> Encapsulate a request as an object. <code>{`interface Command { void execute(); }`}</code></li>
                <li><strong>State Pattern:</strong> Allow an object to alter its behavior when its internal state changes. <code>{`interface State { void doAction(Context context); }`}</code></li>
                <li><strong>Chain of Responsibility Pattern:</strong> Pass the request along a chain of handlers. <code>{`abstract class Logger { protected Logger nextLogger; }`}</code></li>
                <li><strong>Memento Pattern:</strong> Capture and restore an object's internal state. <code>{`class Memento { private String state; }`}</code></li>
                <li><strong>Visitor Pattern:</strong> Represent an operation to be performed on elements of an object structure. <code>{`interface Visitor { void visit(ConcreteElement element); }`}</code></li>
                <li><strong>Flyweight Pattern:</strong> Use sharing to support large numbers of fine-grained objects efficiently. <code>{`class CharacterFactory { private Map<String, Character> characters = new HashMap<>(); }`}</code></li>
                <li><strong>Bridge Pattern:</strong> Decouple an abstraction from its implementation so that the two can vary independently. <code>{`abstract class Shape { protected DrawAPI drawAPI; }`}</code></li>
                <li><strong>Composite Pattern:</strong> Compose objects into tree structures to represent part-whole hierarchies. <code>{`class Employee { private List<Employee> subordinates; }`}</code></li>
                <li><strong>Interpreter Pattern:</strong> Define a representation for a language's grammar along with an interpreter. <code>{`interface Expression { boolean interpret(String context); }`}</code></li>
                <li><strong>Mediator Pattern:</strong> Define an object that encapsulates how a set of objects interact. <code>{`class ChatMediator { private List<User> users; }`}</code></li>
                <li><strong>Prototype Pattern:</strong> Create new objects by cloning an existing object. <code>{`interface Prototype { Prototype clone(); }`}</code></li>
                <li><strong>SOLID Principles:</strong> Design principles for making software designs more understandable, flexible, and maintainable.</li>
                <li><strong>Single Responsibility Principle:</strong> A class should have only one reason to change. <code>{`class UserManager { void createUser() { } void deleteUser() { } }`}</code></li>
                <li><strong>Open/Closed Principle:</strong> Software entities should be open for extension, but closed for modification. <code>{`interface Shape { double area(); } class Circle implements Shape { }`}</code></li>
                <li><strong>Liskov Substitution Principle:</strong> Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. <code>{`void drawShape(Shape shape) { shape.draw(); }`}</code></li>
                <li><strong>Interface Segregation Principle:</strong> Many client-specific interfaces are better than one general-purpose interface. <code>{`interface Printable { void print(); } interface Scannable { void scan(); }`}</code></li>
                <li><strong>Dependency Inversion Principle:</strong> Depend upon abstractions, not concretions. <code>{`class UserService { private UserRepository repository; // interface }`}</code></li>
                <li><strong>Law of Demeter:</strong> A method of an object should invoke only the methods of the following kinds of objects: itself, its parameters, any objects it creates/instantiates, and its direct component objects. <code>{`void method(Parameter param) { this.field.method(); param.method(); new Object().method(); }`}</code></li>
                <li><strong>DRY (Don't Repeat Yourself):</strong> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. <code>{`void commonMethod() { // Reusable code }`}</code></li>
                <li><strong>KISS (Keep It Simple, Stupid):</strong> Most systems work best if they are kept simple rather than made complicated. <code>{`void simpleMethod() { // Simple, straightforward implementation }`}</code></li>
                <li><strong>YAGNI (You Aren't Gonna Need It):</strong> Don't add functionality until you need it. <code>{`// Implement only what's currently required`}</code></li>
                <li><strong>Composition over Inheritance:</strong> Favor object composition over class inheritance. <code>{`class Car { private Engine engine; } // instead of class Car extends Engine`}</code></li>
                <li><strong>Program to an Interface, not an Implementation:</strong> Depend on abstractions, not concrete classes. <code>{`List<String> list = new ArrayList<>(); // not ArrayList<String> list = new ArrayList<>();`}</code></li>
                <li><strong>Favor Immutability:</strong> Make objects immutable when possible to simplify programming and enhance thread safety. <code>{`public final class ImmutableClass { private final int value; }`}</code></li>
                <li><strong>Fail-Fast:</strong> Report errors as soon as possible, ideally at compile time. <code>{`if (param == null) throw new IllegalArgumentException("param cannot be null");`}</code></li>
                <li><strong>Separation of Concerns:</strong> Divide a program into distinct sections, each addressing a separate concern. <code>{`class UserService { } class EmailService { } // Separate classes for different concerns`}</code></li>
                <li><strong>Inversion of Control:</strong> The flow of control of a system is inverted in comparison to procedural programming. <code>{`@Autowired private UserService userService; // Spring framework handles instantiation`}</code></li>
                <li><strong>Dependency Injection:</strong> A technique whereby one object supplies the dependencies of another object. <code>{`public UserController(UserService userService) { this.userService = userService; }`}</code></li>
                <li><strong>Aspect-Oriented Programming:</strong> Increase modularity by allowing the separation of cross-cutting concerns. <code>{`@Aspect public class LoggingAspect { @Before("execution(* com.example.*.*(..))") public void logBefore() { } }`}</code></li>
                <li><strong>Serialization:</strong> Convert objects to a byte stream for storage or transmission. <code>{`class Car implements Serializable { private String model; }`}</code></li>
                <li><strong>Deserialization:</strong> Reconstruct objects from a byte stream. <code>{`Car car = (Car) objectInputStream.readObject();`}</code></li>
                <li><strong>Reflection:</strong> Inspect and modify the runtime behavior of applications. <code>{`Method method = obj.getClass().getMethod("methodName", paramTypes);`}</code></li>
                <li><strong>JavaBeans:</strong> Reusable software components. <code>{`public class MyBean implements java.io.Serializable { private String property; public String getProperty() { return property; } public void setProperty(String value) { property = value; } }`}</code></li>
                <li><strong>Immutable Class:</strong> Class whose instances cannot be modified after they are created. <code>{`public final class ImmutableClass { private final int value; public ImmutableClass(int value) { this.value = value; } public int getValue() { return value; } }`}</code></li>
                <li><strong>Cloning:</strong> Creating a copy of an object. <code>{`public class MyClass implements Cloneable { @Override protected Object clone() throws CloneNotSupportedException { return super.clone(); } }`}</code></li>
                <li><strong>Deep Copy vs Shallow Copy:</strong> Copying an object along with all nested objects vs copying only the immediate fields. <code>{`// Deep copy: manually copy all nested objects. Shallow copy: Object clone() method`}</code></li>
                <li><strong>Object Pool Pattern:</strong> Reuse and share objects that are expensive to create. <code>{`class ObjectPool<T> { private Set<T> available = new HashSet<>(); private Set<T> inUse = new HashSet<>(); public synchronized T checkOut() { /* ... */ } }`}</code></li>
                <li><strong>Fluent Interface:</strong> Design pattern that allows chaining method calls. <code>{`new StringBuilder().append("Hello").append(" ").append("World").toString();`}</code></li>
                <li><strong>Method Chaining:</strong> Calling multiple methods sequentially using dot notation. <code>{`obj.method1().method2().method3();`}</code></li>
                <li><strong>Lazy Initialization:</strong> Delaying the creation of an object until it is first needed. <code>{`private volatile Helper helper; public Helper getHelper() { if (helper == null) { synchronized (this) { if (helper == null) helper = new Helper(); } } return helper; }`}</code></li>
                <li><strong>Initialization-on-demand holder idiom:</strong> Lazy-loaded singleton pattern. <code>{`public class Singleton { private static class SingletonHolder { private static final Singleton INSTANCE = new Singleton(); } public static Singleton getInstance() { return SingletonHolder.INSTANCE; } }`}</code></li>
                <li><strong>Double-checked locking:</strong> Reduce the overhead of acquiring a lock by first testing the locking criterion without actually acquiring the lock. <code>{`private volatile static Singleton instance; public static Singleton getInstance() { if (instance == null) { synchronized (Singleton.class) { if (instance == null) instance = new Singleton(); } } return instance; }`}</code></li>
                <li><strong>Object Composition:</strong> Combining simple objects or data types into more complex ones. <code>{`public class Car { private Engine engine; private Wheels wheels; }`}</code></li>
                <li><strong>Is-A Relationship:</strong> Inheritance relationship between classes. <code>{`public class Car extends Vehicle { }`}</code></li>
                <li><strong>Has-A Relationship:</strong> Composition relationship between classes. <code>{`public class Car { private Engine engine; }`}</code></li>
                <li><strong>Cohesion:</strong> Degree to which the elements of a module belong together. <code>{`// High cohesion: class methods are closely related and work on a single task`}</code></li>
                <li><strong>Coupling:</strong> Degree of interdependence between software modules. <code>{`// Low coupling: minimize dependencies between classes`}</code></li>
                <li><strong>Delegation:</strong> Object relies on another object for some functionality. <code>{`public class A { private B b; public void task() { b.task(); } }`}</code></li>
                <li><strong>Favor Composition over Inheritance:</strong> Use Has-A relationships instead of Is-A when possible. <code>{`class Car { private Engine engine; } // instead of class Car extends Engine`}</code></li>
                <li><strong>Programming to Interface:</strong> Depend on interfaces rather than concrete classes. <code>{`List<String> list = new ArrayList<>(); // instead of ArrayList<String> list = new ArrayList<>();`}</code></li>
                <li><strong>Dependency Inversion Principle:</strong> High-level modules should not depend on low-level modules. Both should depend on abstractions. <code>{`class UserService { private UserRepository repository; // depend on interface, not concrete class }`}</code></li>
                <li><strong>Tell, Don't Ask Principle:</strong> Tell objects what to do, don't ask for their state and make decisions for them. <code>{`account.withdraw(amount); // instead of if (account.getBalance() >= amount) account.setBalance(account.getBalance() - amount);`}</code></li>
                <li><strong>Law of Demeter:</strong> A method of an object should invoke only the methods of specific related objects. <code>{`public void method(A a) { B b = a.getB(); b.doSomething(); } // violates Law of Demeter`}</code></li>
                <li><strong>Null Object Pattern:</strong> Use an object with defined neutral behavior instead of null. <code>{`public class NullCustomer extends Customer { @Override public String getName() { return "Guest"; } }`}</code></li>
                <li><strong>Value Object:</strong> Small, immutable object that represents a simple entity whose equality is based on their value rather than identity. <code>{`public final class Money { private final BigDecimal amount; private final Currency currency; }`}</code></li>
                <li><strong>Data Transfer Object (DTO):</strong> Object that carries data between processes. <code>{`public class CustomerDTO { private String name; private String email; // getters and setters }`}</code></li>
                <li><strong>Anemic Domain Model:</strong> Domain model with little or no behavior (anti-pattern). <code>{`public class Customer { private String name; // only getters and setters, no business logic }`}</code></li>
                <li><strong>Rich Domain Model:</strong> Domain objects with both data and behavior. <code>{`public class Customer { private String name; public void placeOrder(Order order) { // business logic here } }`}</code></li>
                <li><strong>Event-Driven Programming:</strong> Programming paradigm in which the flow of the program is determined by events. <code>{`button.addActionListener(e -> System.out.println("Button clicked"));`}</code></li>
                <li><strong>Publish-Subscribe Pattern:</strong> Senders of messages (publishers) do not send directly to receivers (subscribers). <code>{`interface Subscriber { void update(String message); } class Publisher { private List<Subscriber> subscribers; public void publish(String message) { subscribers.forEach(s -> s.update(message)); } }`}</code></li>
        </ul>
    );
};

export default java;
