const gcp = () => {
    return (
        <ul>
            <h3>GCP data engineering and related services/tools</h3>
            <li><strong>Data Warehousing:</strong> Centralized storage of large volumes of data from multiple sources.
                <em>Example:</em> Using Google BigQuery as a serverless, highly scalable data warehouse.
            </li>
            <li><strong>ETL (Extract, Transform, Load):</strong> Processes for extracting data, transforming it, and
                loading
                it into a data warehouse.
                <em>Example:</em> Using Google Cloud Dataflow for ETL pipelines.
            </li>
            <li><strong>Data Pipelines:</strong> Automated workflows for moving and processing data from source to
                destination.
                <em>Example:</em> Building data pipelines with Google Cloud Composer (managed Apache Airflow).
            </li>
            <li><strong>Data Lake:</strong> Large, unstructured storage repository holding raw data for future
                processing
                and analysis.
                <em>Example:</em> Storing raw data in Google Cloud Storage buckets.
            </li>
            <li><strong>Batch Processing:</strong> Processing large volumes of data in batches at scheduled intervals.
                <em>Example:</em> Using Google Cloud Dataflow for scheduled batch processing of data.
            </li>
            <li><strong>Stream Processing:</strong> Real-time processing of continuous data streams.
                <em>Example:</em> Using Google Cloud Pub/Sub and Dataflow for real-time data stream processing.
            </li>
            <li><strong>Data Modeling:</strong> Structuring data in logical ways to support analytics and
                decision-making.
                <em>Example:</em> Designing data models within BigQuery using schemas and partitions.
            </li>
            <li><strong>SQL (Structured Query Language):</strong> Standard language for querying and managing data in
                relational databases.
                <em>Example:</em> Running SQL queries on data stored in BigQuery.
            </li>
            <li><strong>NoSQL Databases:</strong> Non-relational databases designed for large-scale data storage.
                <em>Example:</em> Using Google Cloud Firestore for document-oriented data storage.
            </li>
            <li><strong>Data Integration:</strong> Combining data from different sources to provide a unified view.
                <em>Example:</em> Using Google Cloud Data Fusion for integrating data from multiple sources.
            </li>
            <li><strong>Data Quality:</strong> Ensuring data is accurate, consistent, and reliable.
                <em>Example:</em> Using Google Cloud Dataprep to clean and validate data before processing.
            </li>
            <li><strong>Data Governance:</strong> Policies and procedures for managing data quality, security, and
                privacy.
                <em>Example:</em> Implementing data governance with Google Cloud’s Data Catalog.
            </li>
            <li><strong>Data Security:</strong> Protecting data from unauthorized access and breaches.
                <em>Example:</em> Using Google Cloud IAM and Cloud KMS to manage data security and encryption.
            </li>
            <li><strong>Data Lineage:</strong> Tracking the origin and transformation of data from source to
                destination.
                <em>Example:</em> Tracking data lineage in BigQuery with Data Catalog lineage integration.
            </li>
            <li><strong>Data Catalog:</strong> Inventory of data assets to help users find and understand data.
                <em>Example:</em> Using Google Cloud Data Catalog to organize and search data assets.
            </li>
            <li><strong>Data Cleansing:</strong> Detecting and correcting errors in data to improve quality.
                <em>Example:</em> Cleaning data using Cloud Dataprep for BigQuery analysis.
            </li>
            <li><strong>Data Transformation:</strong> Converting data into the desired format for analysis or storage.
                <em>Example:</em> Transforming data with Google Cloud Dataflow.
            </li>
            <li><strong>Data Ingestion:</strong> Bringing data into a system from various sources.
                <em>Example:</em> Ingesting data into BigQuery using Cloud Storage and Pub/Sub.
            </li>
            <li><strong>Big Data:</strong> Large, complex data sets that require advanced processing and storage
                solutions.
                <em>Example:</em> Using Google BigQuery to process large-scale datasets efficiently.
            </li>
            <li><strong>Data Partitioning:</strong> Dividing data into smaller, more manageable segments for performance
                optimization.
                <em>Example:</em> Partitioning tables in BigQuery based on date fields.
            </li>
            <li><strong>Data Sharding:</strong> Splitting a database into smaller pieces to improve performance and
                scalability.
                <em>Example:</em> Sharding data across multiple Bigtable instances.
            </li>
            <li><strong>Data Orchestration:</strong> Managing the execution and scheduling of complex data workflows.
                <em>Example:</em> Using Google Cloud Composer to orchestrate ETL jobs.
            </li>
            <li><strong>DataOps:</strong> Automated and collaborative practices to improve data flow and data quality.
                <em>Example:</em> Implementing DataOps with CI/CD pipelines for data workflows in GCP.
            </li>
            <li><strong>Data Versioning:</strong> Tracking changes and versions of data over time.
                <em>Example:</em> Managing dataset versions in BigQuery using labels and partitioning.
            </li>
            <li><strong>Cloud Data Engineering:</strong> Using cloud platforms for data storage and processing.
                <em>Example:</em> Leveraging Google Cloud’s managed services for scalable data solutions.
            </li>
            <li><strong>Data Replication:</strong> Copying data across multiple databases or systems for redundancy and
                availability.
                <em>Example:</em> Replicating BigQuery datasets to different regions for disaster recovery.
            </li>
            <li><strong>Data Archiving:</strong> Storing historical data for long-term retention and compliance.
                <em>Example:</em> Archiving data in Google Cloud Storage Nearline or Coldline.
            </li>
            <li><strong>Data Compression:</strong> Reducing the size of data to save storage space and improve
                processing
                speed.
                <em>Example:</em> Using compressed file formats like Avro or Parquet in BigQuery.
            </li>
            <li><strong>Distributed Computing:</strong> Processing data across multiple machines to enhance performance
                and
                scalability.
                <em>Example:</em> Using Google Cloud Dataproc (managed Hadoop and Spark) for distributed data
                processing.
            </li>
            <li><strong>Apache Spark:</strong> Open-source framework for large-scale data processing and analytics.
                <em>Example:</em> Running Spark jobs on Google Cloud Dataproc for ETL and machine learning tasks.
            </li>
            <li><strong>Kafka:</strong> Distributed event streaming platform for building real-time data pipelines.
                <em>Example:</em> Using Confluent Cloud on GCP for managing Kafka-based streaming pipelines.
            </li>
        </ul>)
}

export default gcp;
