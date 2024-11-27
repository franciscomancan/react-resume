const kafka = () => {
    return (
        <ul>
            <h3>kafka notes</h3>
            <li>{`1. Install Kafka:
Download Kafka from https://kafka.apache.org/downloads, start ZooKeeper and Kafka:
./bin/zookeeper-server-start.sh config/zookeeper.properties
./bin/kafka-server-start.sh config/server.properties`}</li>

            <li>{`2. Create Kafka Topic:
./bin/kafka-topics.sh --create --topic my-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1`}</li>

            <li>{`3. List Kafka Topics:
./bin/kafka-topics.sh --list --bootstrap-server localhost:9092`}</li>

            <li>{`4. Describe Kafka Topic:
./bin/kafka-topics.sh --describe --topic my-topic --bootstrap-server localhost:9092`}</li>

            <li>{`5. Produce Message to Kafka Topic:
./bin/kafka-console-producer.sh --topic my-topic --bootstrap-server localhost:9092`}</li>

            <li>{`6. Consume Message from Kafka Topic:
./bin/kafka-console-consumer.sh --topic my-topic --from-beginning --bootstrap-server localhost:9092`}</li>

            <li>{`7. Delete Kafka Topic:
./bin/kafka-topics.sh --delete --topic my-topic --bootstrap-server localhost:9092`}</li>

            <li>{`8. Kafka Producer in Java:
KafkaProducer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("my-topic", "key", "message"));`}</li>

            <li>{`9. Kafka Consumer in Java:
KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(Arrays.asList("my-topic"));
while (true) {
  ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
  for (ConsumerRecord<String, String> record : records) {
    System.out.println(record.value());
  }
}`}</li>

            <li>{`10. Set Kafka Consumer Group:
./bin/kafka-console-consumer.sh --topic my-topic --bootstrap-server localhost:9092 --group my-group`}</li>

            <li>{`11. Kafka Offset Reset to Earliest:
props.put("auto.offset.reset", "earliest");`}</li>

            <li>{`12. Kafka Offset Management:
Use --from-beginning to read all messages or handle offsets with commitSync()`}</li>

            <li>{`13. Kafka Partitions:
./bin/kafka-topics.sh --alter --topic my-topic --partitions 3 --bootstrap-server localhost:9092`}</li>

            <li>{`14. Kafka Replication Factor:
./bin/kafka-topics.sh --create --topic my-topic --replication-factor 3 --partitions 1 --bootstrap-server localhost:9092`}</li>

            <li>{`15. Kafka Retention Policy:
log.retention.hours=168 in server.properties`}</li>

            <li>{`16. Kafka Log Compaction:
log.cleanup.policy=compact in server.properties`}</li>

            <li>{`17. Kafka Acks Configuration:
props.put("acks", "all");`}</li>

            <li>{`18. Keyed Messages:
producer.send(new ProducerRecord<>("my-topic", "my-key", "message"));`}</li>

            <li>{`19. Kafka Consumer Poll Timeout:
consumer.poll(Duration.ofMillis(100));`}</li>

            <li>{`20. Kafka Consumer Commit Offset:
consumer.commitSync();`}</li>

            <li>{`21. Kafka Producer Retry Mechanism:
props.put("retries", 3);`}</li>

            <li>{`22. Kafka Batch Size:
props.put("batch.size", 16384);`}</li>

            <li>{`23. Kafka Linger.ms:
props.put("linger.ms", 1);`}</li>

            <li>{`24. Kafka Compression:
props.put("compression.type", "gzip");`}</li>

            <li>{`25. Kafka SSL Encryption:
ssl.keystore.location=/etc/kafka/keystore.jks
ssl.keystore.password=password in server.properties`}</li>

            <li>{`26. Kafka SASL Authentication:
sasl.enabled.mechanisms=PLAIN
listeners=SASL_SSL://localhost:9093 in server.properties`}</li>

            <li>{`27. Kafka Monitoring with JMX:
export JMX_PORT=9999 before starting Kafka`}</li>

            <li>{`28. Kafka Consumer Group Management:
./bin/kafka-consumer-groups.sh --list --bootstrap-server localhost:9092`}</li>

            <li>{`29. Kafka Consumer Lag Monitoring:
./bin/kafka-consumer-groups.sh --describe --group my-group --bootstrap-server localhost:9092`}</li>

            <li>{`30. Kafka Broker Configuration:
server.properties file holds broker configs like listeners, port, and log retention`}</li>

            <li>{`31. Kafka Producer Idempotence:
props.put("enable.idempotence", "true");`}</li>

            <li>{`32. Kafka Exactly Once Semantics (EOS):
props.put("transactional.id", "my-transactional-id");
producer.initTransactions();
producer.beginTransaction();
producer.send(new ProducerRecord<>("my-topic", "message"));
producer.commitTransaction();`}</li>

            <li>{`33. Kafka Consumer Rebalance Listener:
consumer.subscribe(Arrays.asList("my-topic"), new ConsumerRebalanceListener() {
  public void onPartitionsRevoked(Collection<TopicPartition> partitions) {
    consumer.commitSync();
  }
  public void onPartitionsAssigned(Collection<TopicPartition> partitions) {
    // logic
  }
});`}</li>

            <li>{`34. Kafka Schema Registry:
props.put("schema.registry.url", "http://localhost:8081");`}</li>

            <li>{`35. Kafka Streams API:
StreamsBuilder builder = new StreamsBuilder();
KStream<String, String> stream = builder.stream("my-topic");
stream.to("output-topic");`}</li>

            <li>{`36. Kafka Connect:
./bin/connect-standalone.sh config/connect-standalone.properties config/connect-file-source.properties`}</li>

            <li>{`37. Kafka Connect JDBC Source:
Use JDBC connector to ingest data from databases into Kafka topics`}</li>

            <li>{`38. Kafka Connect Sink:
Use Kafka Connect sink connectors to write data from Kafka to external systems`}</li>

            <li>{`39. Kafka Consumer Parallelism:
Increase partitions to allow for parallel processing in consumer groups`}</li>

            <li>{`40. Kafka Topic Retention by Size:
log.retention.bytes=1073741824 in server.properties`}</li>

            <li>{`41. Kafka Broker Leader Election:
Kafka automatically elects new leaders for partitions when the leader broker goes down`}</li>

            <li>{`42. Kafka Topic Deletion:
Enable topic deletion with delete.topic.enable=true in server.properties`}</li>

            <li>{`43. Kafka Zookeeper:
Manages Kafka brokers and topics. Start Zookeeper with:
./bin/zookeeper-server-start.sh config/zookeeper.properties`}</li>

            <li>{`44. Kafka Replication Quotas:
Control bandwidth usage for replication with:
replica.fetch.max.bytes in server.properties`}</li>

            <li>{`45. Kafka Producer Acknowledgment:
props.put("acks", "1") for leader acknowledgment only`}</li>

            <li>{`46. Kafka Offset Retention:
log.retention.check.interval.ms=300000 in server.properties to control offset retention time`}</li>

            <li>{`47. Kafka Topic Cleanup Policy:
log.cleanup.policy can be set to delete or compact`}</li>

            <li>{`48. Kafka Streams State Store:
KTable<String, Long> store = builder.table("input-topic", "state-store");`}</li>

            <li>{`49. Kafka Streams Joins:
KStream<String, String> joined = stream1.join(stream2, (v1, v2) -> v1 + v2, JoinWindows.of(Duration.ofMinutes(5)));`}</li>

            <li>{`50. Kafka Streams Windowed Operations:
stream.groupByKey().windowedBy(TimeWindows.of(Duration.ofMinutes(10))).count().toStream();`}</li>
        </ul>
    );
};

export default kafka;
