const nonblocking = () => {
    return (


        <ul>
            <h3>asynch in jvm</h3>
            <li>
                <strong>1. CompletableFuture:</strong>
                <pre>{`import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureExample {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        
        // Simulate fetching user details asynchronously
        CompletableFuture<String> userFuture = CompletableFuture.supplyAsync(() -> {
            simulateDelay();
            return "User: John Doe";
        });
        
        // Simulate fetching latest order details asynchronously
        CompletableFuture<String> orderFuture = CompletableFuture.supplyAsync(() -> {
            simulateDelay();
            return "Order: #1234, Item: Laptop, Price: $1500";
        });
        
        // Combine both futures and display the result once both are complete
        CompletableFuture<Void> combinedFuture = userFuture.thenCombine(orderFuture, (user, order) -> {
            System.out.println("User Details: " + user);
            System.out.println("Latest Order: " + order);
            return null;
        });
        
        // Wait for both tasks to finish
        combinedFuture.get();
    }
    
    // Utility method to simulate a delay (e.g., network call)
    private static void simulateDelay() {
        try {
            Thread.sleep(2000);  // Simulates a 2-second delay
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}`}</pre>
            </li>

            <li>
                <strong>2. ExecutorService:</strong>
                <pre>{`ExecutorService executor = Executors.newCachedThreadPool();
                        executor.submit(() -> {// Non-blocking task
                        System.out.println("Task executed");
                        });
                        executor.shutdown();`}</pre>
            </li>

            <li>
                <strong>3. Project Reactor (Flux):</strong>
                <pre>{`
        // Create a Sink that acts as a producer of log messages
        Sinks.Many<String> sink = Sinks.many().multicast().onBackpressureBuffer();
        
        // Create a Flux that is backed by the Sink
        Flux<String> logStream = sink.asFlux();
        
        // Process the unbounded stream: Print logs with a delay
        logStream
            .doOnNext(log -> System.out.println("Processing Log: " + log))
            .subscribeOn(Schedulers.parallel())  // Run on a different thread for processing
            .publish()  // Publish the stream
            .connect(); // Connect to start processing

        // Simulate emitting log messages to the Sink
        Flux.interval(Duration.ofMillis(500))
            .map(tick -> "Log Entry " + tick)
            .doOnNext(sink::tryEmitNext)  // Emit log messages to the Sink
            .subscribe();

        // Sleep to let the unbounded stream run for a while (10 seconds in this case)
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }`}</pre>
            </li>

            <li>
                <strong>4. RxJava (Observable):</strong>
                <pre>{`Observable.just("Hello", "World")
                        .map(String::toUpperCase)
                        .subscribe(System.out::println);`}</pre>
            </li>

            <li>
                <strong>5. Vert.x (EventBus):</strong>
                <pre>{`
                    Vertx vertx = Vertx.vertx();
                    vertx.eventBus().send("address", "message", reply -> {
                        if (reply.succeeded()) {
                            System.out.println("Reply: " + reply.result().body());
                        }
                    });
                    `}</pre>
            </li>

            <li>
                <strong>6. Spring WebFlux (Reactor)(Mono):</strong>
                <pre>{`
    Mono.just("Hello")
        .map(String::toUpperCase)
        .subscribe(System.out::println);
    `}</pre>
            </li>

            <li>
                <strong>7. Java NIO (Asynchronous IO):</strong>
                <pre>{`
    Path file = Paths.get("example.txt");
    AsynchronousFileChannel channel = AsynchronousFileChannel.open(file, StandardOpenOption.READ);
    ByteBuffer buffer = ByteBuffer.allocate(1024);
    channel.read(buffer, 0, buffer, new CompletionHandler<Integer, ByteBuffer>() {
        @Override
        public void completed(Integer result, ByteBuffer buffer) {
            System.out.println("Read completed!");
        }
        @Override
        public void failed(Throwable exc, ByteBuffer attachment) {
            System.out.println("Error: " + exc.getMessage());
        }
    });
    `}</pre>
            </li>

            <li>
                <strong>8. Kotlin Coroutines (in Java):</strong>
                <pre>{`
    Executors.newSingleThreadExecutor().execute(() -> {
        runBlocking {
            delay(1000);
            System.out.println("Hello from coroutine");
        }
    });
    `}</pre>
            </li>

            <li>
                <strong>9. JBoss Undertow (Non-blocking HTTP):</strong>
                <pre>{`
    Undertow server = Undertow.builder()
        .addHttpListener(8080, "localhost")
        .setHandler(exchange -> {
            exchange.getResponseHeaders().put(Headers.CONTENT_TYPE, "text/plain");
            exchange.getResponseSender().send("Hello, World!");
        }).build();
    server.start();
    System.out.println("Server started on port 8080");
    `}</pre>
            </li>

            <li>
                <strong>10. Akka Actor Model:</strong>
                <pre>{`
    ActorSystem system = ActorSystem.create("system");
    ActorRef actor = system.actorOf(Props.create(MyActor.class));
    actor.tell("Hello", ActorRef.noSender());
    `}</pre>
            </li>
        </ul>);
};


export default nonblocking;
