const scala = () => {
        return (
            <ul>
                <h3>scala concepts & snippets</h3>
                <li>
                    <strong>Variables and Values:</strong> <code>{`val x: Int = 10 // immutable`}</code>{' '}
                    <code>{`var y: Int = 20 // mutable`}</code>
                </li>
                <li>
                    <strong>Functions:</strong> <code>{`def add(a: Int, b: Int): Int = a + b`}</code>
                </li>
                <li>
                    <strong>Higher-Order Functions:</strong>{' '}
                    <code>{`val nums = List(1, 2, 3).map(_ * 2)`}</code>
                </li>
                <li>
                    <strong>Pattern Matching:</strong>{' '}
                    <code>{`val result = x match { case 1 => "One"; case _ => "Other" }`}</code>
                </li>
                <li>
                    <strong>Collections:</strong> <code>{`val list = List(1, 2, 3)`}</code>
                </li>
                <li>
                    <strong>Option Type:</strong> <code>{`val maybeName: Option[String] = Some("Scala")`}</code>
                </li>
                <li>
                    <strong>Case Classes:</strong> <code>{`case class Person(name: String, age: Int)`}</code>
                </li>
                <li>
                    <strong>Traits:</strong> <code>{`trait Animal { def sound(): String }`}</code>
                </li>
                <li>
                    <strong>For Comprehensions:</strong> <code>{`val result = for (i <- 1 to 5) yield i * 2`}</code>
                </li>
                <li>
                    <strong>Implicits:</strong> <code>{`implicit val multiplier: Int = 2`}</code>
                </li>
                <li>
                    <strong>Type Inference:</strong> <code>{`val name = "Scala" // inferred as String`}</code>
                </li>
                <li>
                    <strong>Lazy Evaluation:</strong> <code>{`lazy val data = loadData()`}</code>
                </li>
                <li>
                    <strong>Anonymous Functions:</strong> <code>{`(x: Int) => x * 2`}</code>
                </li>
                <li>
                    <strong>Partial Functions:</strong>{' '}
                    <code>{`val partial: PartialFunction[Int, String] = { case 1 => "One" }`}</code>
                </li>
                <li>
                    <strong>Tuples:</strong> <code>{`val pair = (1, "Scala")`}</code>
                </li>
                <li>
                    <strong>Recursion:</strong>{' '}
                    <code>{`def factorial(n: Int): Int = if (n == 0) 1 else n * factorial(n - 1)`}</code>
                </li>
                <li>
                    <strong>Singleton Object:</strong>{' '}
                    <code>{`object Singleton { def greet() = "Hello" }`}</code>
                </li>
                <li>
                    <strong>Map Operations:</strong> <code>{`val map = Map(1 -> "One", 2 -> "Two")`}</code>
                </li>
                <li>
                    <strong>Fold and Reduce:</strong> <code>{`val sum = List(1, 2, 3).reduce(_ + _)`}</code>
                </li>
                <li>
                    <strong>Currying:</strong> <code>{`def add(x: Int)(y: Int): Int = x + y`}</code>
                </li>
                <li>
                    <strong>Sequences:</strong> <code>{`val seq = Seq(1, 2, 3)`}</code>
                </li>
                <li>
                    <strong>Try-Catch for Error Handling:</strong>{' '}
                    <code>{`try { val res = 1 / 0 } catch { case e: Exception => println("Error") }`}</code>
                </li>
                <li>
                    <strong>Abstract Classes:</strong>{' '}
                    <code>{`abstract class Animal { def sound(): String }`}</code>
                </li>
                <li>
                    <strong>Streams:</strong> <code>{`val stream = Stream.from(1).take(5).toList`}</code>
                </li>
                <li>
                    <strong>Immutable Collections:</strong>{' '}
                    <code>{`val immutList = List(1, 2, 3)`}</code>
                </li>
                <li>
                    <strong>Mutable Collections:</strong>{' '}
                    <code>{`val mutSet = scala.collection.mutable.Set(1, 2, 3)`}</code>
                </li>
                <li>
                    <strong>Custom Exception Handling:</strong>{' '}
                    <code>{`class CustomException(msg: String) extends Exception(msg)`}</code>
                </li>
                <li>
                    <strong>XML Processing:</strong>{' '}
                    <code>{`val xml = <note><to>Scala</to></note>`}</code>
                </li>
                <li>
                    <strong>Pattern Matching with Extractors:</strong>{' '}
                    <code>{`object Twice { def unapply(x: Int): Option[Int] = if (x % 2 == 0) Some(x / 2) else None }`}</code>
                </li>
                <li>
                    <strong>Parameterized Types:</strong>{' '}
                    <code>{`class Stack[A] { private var elements: List[A] = Nil }`}</code>
                </li>
            </ul>
        );
};

export default scala;
