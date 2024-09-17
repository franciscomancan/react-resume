const flink = () => (
<ul>
    <h2>flink concepts & snippets</h2>
    <li>
        <strong>StreamExecutionEnvironment:</strong> The context in which a streaming program is executed.
        <pre>{`StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();`}</pre>
    </li>
    <li>
        <strong>DataStream:</strong> Represents a stream of data.
        <pre>{`DataStream<String> text = env.readTextFile("path/to/file");`}</pre>
    </li>
    <li>
        <strong>readTextFile:</strong> Reads a file as a DataStream.
        <pre>{`DataStream<String> text = env.readTextFile("path/to/file");`}</pre>
    </li>
    <li>
        <strong>fromElements:</strong> Creates a DataStream from a list of elements.
        <pre>{`DataStream<Integer> numbers = env.fromElements(1, 2, 3, 4);`}</pre>
    </li>
    <li>
        <strong>filter:</strong> Filters a DataStream based on a predicate.
        <pre>{`DataStream<Integer> filtered = numbers.filter(num -> num > 2);`}</pre>
    </li>
    <li>
        <strong>map:</strong> Applies a function to each element of a DataStream.
        <pre>{`DataStream<String> mapped = numbers.map(num -> "Number: " + num);`}</pre>
    </li>
    <li>
        <strong>flatMap:</strong> Flattens the result of applying a function to each element.
        <pre>{`DataStream<Integer> flatMapped = numbers.flatMap(new FlatMapFunction<Integer, Integer>() {
      public void flatMap(Integer value, Collector<Integer> out) {
        if (value % 2 == 0) {
          out.collect(value);
        }
      }
    });`}</pre>
    </li>
    <li>
        <strong>keyBy:</strong> Partitions a DataStream by a key.
        <pre>{`DataStream<Tuple2<Integer, String>> keyed = tuples.keyBy(0);`}</pre>
    </li>
    <li>
        <strong>reduce:</strong> Aggregates elements of a DataStream by applying a reduce function.
        <pre>{`DataStream<Integer> reduced = keyed.reduce((a, b) -> a + b);`}</pre>
    </li>
    <li>
        <strong>window:</strong> Groups the stream into windows.
        <pre>{`DataStream<Tuple2<String, Integer>> windowed = stream
      .keyBy(0)
      .window(TumblingProcessingTimeWindows.of(Time.seconds(5)));`}</pre>
    </li>
    <li>
        <strong>timeWindow:</strong> Applies a time-based window to the keyed stream.
        <pre>{`DataStream<Tuple2<String, Integer>> windowed = stream
      .keyBy(0)
      .timeWindow(Time.seconds(5));`}</pre>
    </li>
    <li>
        <strong>countWindow:</strong> Creates a count-based window on the keyed stream.
        <pre>{`DataStream<Tuple2<String, Integer>> windowed = stream
      .keyBy(0)
      .countWindow(10);`}</pre>
    </li>
    <li>
        <strong>apply:</strong> Applies a custom function to a window.
        <pre>{`windowed.apply(new WindowFunction<Tuple2<String, Integer>, String, Tuple, TimeWindow>() {
      public void apply(Tuple tuple, TimeWindow window, Iterable<Tuple2<String, Integer>> input, Collector<String> out) {
        out.collect("Window result");
      }
    });`}</pre>
    </li>
    <li>
        <strong>aggregate:</strong> Performs an incremental aggregation on a window.
        <pre>{`windowed.aggregate(new AggregateFunction<Integer, Integer, Integer>() {
      public Integer createAccumulator() { return 0; }
      public Integer add(Integer value, Integer accumulator) { return accumulator + value; }
      public Integer getResult(Integer accumulator) { return accumulator; }
      public Integer merge(Integer a, Integer b) { return a + b; }
    });`}</pre>
    </li>
    <li>
        <strong>process:</strong> Allows for low-level processing of a keyed stream with timestamps.
        <pre>{`stream.process(new ProcessFunction<Integer, String>() {
      public void processElement(Integer value, Context ctx, Collector<String> out) {
        out.collect("Processed: " + value);
      }
    });`}</pre>
    </li>
    <li>
        <strong>sinkTo:</strong> Adds a sink to the stream.
        <pre>{`stream.sinkTo(new MySink());`}</pre>
    </li>
    <li>
        <strong>addSink:</strong> Adds a custom sink function to a DataStream.
        <pre>{`stream.addSink(new SinkFunction<String>() {
      public void invoke(String value) { System.out.println(value); }
    });`}</pre>
    </li>
    <li>
        <strong>print:</strong> A simple sink that prints the result to standard output.
        <pre>{`stream.print();`}</pre>
    </li>
    <li>
        <strong>writeAsText:</strong> Writes the stream to a text file.
        <pre>{`stream.writeAsText("path/to/output");`}</pre>
    </li>
    <li>
        <strong>writeToSocket:</strong> Writes the stream to a socket.
        <pre>{`stream.writeToSocket("localhost", 9999, new SimpleStringSchema());`}</pre>
    </li>
    <li>
        <strong>broadcast:</strong> Broadcasts a stream to all downstream tasks.
        <pre>{`stream.broadcast();`}</pre>
    </li>
    <li>
        <strong>connect:</strong> Connects two streams with different types.
        <pre>{`ConnectedStreams<Integer, String> connected = intStream.connect(stringStream);`}</pre>
    </li>
    <li>
        <strong>coMap:</strong> Applies a different function to each stream in a connected stream.
        <pre>{`connected.map(i -> i.toString(), s -> s.length());`}</pre>
    </li>
    <li>
        <strong>union:</strong> Unions two streams with the same type.
        <pre>{`DataStream<Integer> unioned = stream1.union(stream2);`}</pre>
    </li>
    <li>
        <strong>shuffle:</strong> Shuffles the data across all tasks.
        <pre>{`stream.shuffle();`}</pre>
    </li>
    <li>
        <strong>rebalance:</strong> Rebalances the data across all tasks evenly.
        <pre>{`stream.rebalance();`}</pre>
    </li>
    <li>
        <strong>partitionCustom:</strong> Applies a custom partitioner to the data.
        <pre>{`stream.partitionCustom(new Partitioner<String>() {
      public int partition(String key, int numPartitions) {
        return key.hashCode() % numPartitions;
      }
    }, keySelector);`}</pre>
    </li>
    <li>
        <strong>iterate:</strong> Allows iterative processing of data.
        <pre>{`IterativeStream<Integer> iteration = stream.iterate();`}</pre>
    </li>
    <li>
        <strong>closeWith:</strong> Closes an iteration by providing a feedback stream.
        <pre>{`iteration.closeWith(feedBackStream);`}</pre>
    </li>
    <li>
        <strong>Checkpointing:</strong> Enables checkpointing for fault tolerance.
        <pre>{`env.enableCheckpointing(10000);`}</pre>
    </li>
    <li>
        <strong>setParallelism:</strong> Sets the parallelism of an operation.
        <pre>{`stream.setParallelism(4);`}</pre>
    </li>
    <li>
        <strong>setMaxParallelism:</strong> Sets the maximum parallelism of an operation.
        <pre>{`stream.setMaxParallelism(8);`}</pre>
    </li>
    <li>
        <strong>execute:</strong> Executes the Flink program.
        <pre>{`env.execute("Flink Job");`}</pre>
    </li>
    <li>
        <strong>KeyedStream:</strong> A stream of keyed elements.
        <pre>{`KeyedStream<Tuple2<Integer, String>, Tuple> keyedStream = stream.keyBy(0);`}</pre>
    </li>
    <li>
        <strong>TumblingEventTimeWindows:</strong> Defines a tumbling window based on event time.
        <pre>{`stream.window(TumblingEventTimeWindows.of(Time.seconds(10)));`}</pre>
    </li>
    <li>
        <strong>SlidingEventTimeWindows:</strong> Defines a sliding window based on event time.
        <pre>{`stream.window(SlidingEventTimeWindows.of(Time.seconds(10), Time.seconds(5)));`}</pre>
    </li>
    <li>
        <strong>SessionWindows:</strong> Defines session windows.
        <pre>{`stream.window(ProcessingTimeSessionWindows.withGap(Time.seconds(10)));`}</pre>
    </li>
    <li>
        <strong>Watermark:</strong> A mechanism for handling out-of-order events.
        <pre>{`stream.assignTimestampsAndWatermarks(new WatermarkStrategy<>() {
      public WatermarkGenerator<String> createWatermarkGenerator() {
        return new WatermarkGenerator<String>() {
          public void onEvent(String event, long eventTimestamp, WatermarkOutput output) {
            output.emitWatermark(new Watermark(eventTimestamp - 1));
          }
          public void onPeriodicEmit(WatermarkOutput output) {}
        };
      }
    });`}</pre>
    </li>
    <li>
        <strong>KeySelector:</strong> A function to select keys from elements.
        <pre>{`KeySelector<Tuple2<Integer, String>, Integer> keySelector = new KeySelector<Tuple2<Integer, String>, Integer>() {
      public Integer getKey(Tuple2<Integer, String> value) {
        return value.f0;
      }
    };`}</pre>
    </li>
    <li>
        <strong>RichMapFunction:</strong> A map function with setup and teardown lifecycle methods.
        <pre>{`stream.map(new RichMapFunction<Integer, String>() {
      public void open(Configuration parameters) { // Setup code here }
      public String map(Integer value) { return "Mapped: " + value; }
      public void close() { // Cleanup code here }
    });`}</pre>
    </li>
    <li>
        <strong>FlinkKafkaConsumer:</strong> Reads data from a Kafka topic.
        <pre>{`DataStream<String> kafkaStream = env.addSource(new FlinkKafkaConsumer<>("topic", new SimpleStringSchema(), properties));`}</pre>
    </li>
    <li>
        <strong>FlinkKafkaProducer:</strong> Writes data to a Kafka topic.
        <pre>{`stream.addSink(new FlinkKafkaProducer<>("topic", new SimpleStringSchema(), properties));`}</pre>
    </li>
    <li>
        <strong>TimerService:</strong> Schedules timers for event-time processing.
        <pre>{`ctx.timerService().registerEventTimeTimer(time);`}</pre>
    </li>
    <li>
        <strong>RichFlatMapFunction:</strong> A flatMap function with lifecycle methods.
        <pre>{`stream.flatMap(new RichFlatMapFunction<Integer, String>() {
      public void flatMap(Integer value, Collector<String> out) { if (value > 0) out.collect("Positive: " + value); }
    });`}</pre>
    </li>
    <li>
        <strong>BroadcastStream:</strong> A broadcast stream for shared state.
        <pre>{`BroadcastStream<String> broadcastStream = stream.broadcast(stateDescriptor);`}</pre>
    </li>
    <li>
        <strong>BroadcastConnectedStream:</strong> A connected stream with a broadcast stream.
        <pre>{`BroadcastConnectedStream<String, Integer> connectedStream = stream.connect(broadcastStream);`}</pre>
    </li>
</ul>
);

export default flink;
