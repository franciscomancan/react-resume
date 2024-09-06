const aws = () => {
    return (
        <ul>
            <li><strong>Data Warehousing:</strong> Centralized storage of large volumes of data from multiple sources.
                <em>Example:</em> Using Amazon Redshift as a fully managed data warehouse for analytics.
            </li>
            <li><strong>ETL (Extract, Transform, Load):</strong> Processes for extracting data, transforming it, and
                loading
                it into a data warehouse.
                <em>Example:</em> Using AWS Glue for serverless ETL operations.
            </li>
            <li><strong>Data Pipelines:</strong> Automated workflows for moving and processing data from source to
                destination.
                <em>Example:</em> Building data pipelines with AWS Data Pipeline or Step Functions.
            </li>
            <li><strong>Data Lake:</strong> Large, unstructured storage repository holding raw data for future
                processing
                and analysis.
                <em>Example:</em> Creating a data lake on Amazon S3.
            </li>
            <li><strong>Batch Processing:</strong> Processing large volumes of data in batches at scheduled intervals.
                <em>Example:</em> Using AWS Batch or AWS Glue for batch processing of data.
            </li>
            <li><strong>Stream Processing:</strong> Real-time processing of continuous data streams.
                <em>Example:</em> Using Amazon Kinesis Data Streams and AWS Lambda for real-time processing.
            </li>
            <li><strong>Data Modeling:</strong> Structuring data in logical ways to support analytics and
                decision-making.
                <em>Example:</em> Designing schemas and partitions in Amazon Redshift.
            </li>
            <li><strong>SQL (Structured Query Language):</strong> Standard language for querying and managing data in
                relational databases.
                <em>Example:</em> Running SQL queries on data stored in Amazon Redshift or Athena.
            </li>
            <li><strong>NoSQL Databases:</strong> Non-relational databases designed for large-scale data storage.
                <em>Example:</em> Using Amazon DynamoDB for key-value and document data storage.
            </li>
            <li><strong>Data Integration:</strong> Combining data from different sources to provide a unified view.
                <em>Example:</em> Using AWS Glue or AWS AppFlow for data integration from various sources.
            </li>
            <li><strong>Data Quality:</strong> Ensuring data is accurate, consistent, and reliable.
                <em>Example:</em> Using AWS Glue DataBrew for data profiling, cleansing, and quality checks.
            </li>
            <li><strong>Data Governance:</strong> Policies and procedures for managing data quality, security, and
                privacy.
                <em>Example:</em> Implementing data governance with AWS Lake Formation.
            </li>
            <li><strong>Data Security:</strong> Protecting data from unauthorized access and breaches.
                <em>Example:</em> Using AWS Key Management Service (KMS) for data encryption and IAM for access control.
            </li>
            <li><strong>Data Lineage:</strong> Tracking the origin and transformation of data from source to
                destination.
                <em>Example:</em> Tracking data lineage in AWS Glue with its integrated Data Catalog.
            </li>
            <li><strong>Data Catalog:</strong> Inventory of data assets to help users find and understand data.
                <em>Example:</em> Using AWS Glue Data Catalog to manage and search metadata.
            </li>
            <li><strong>Data Cleansing:</strong> Detecting and correcting errors in data to improve quality.
                <em>Example:</em> Cleaning data using AWS Glue DataBrew.
            </li>
            <li><strong>Data Transformation:</strong> Converting data into the desired format for analysis or storage.
                <em>Example:</em> Transforming data with AWS Glue or AWS Lambda.
            </li>
            <li><strong>Data Ingestion:</strong> Bringing data into a system from various sources.
                <em>Example:</em> Ingesting data into Amazon S3 using AWS Database Migration Service (DMS).
            </li>
            <li><strong>Big Data:</strong> Large, complex data sets that require advanced processing and storage
                solutions.
                <em>Example:</em> Using Amazon EMR (Elastic MapReduce) to process large-scale datasets.
            </li>
            <li><strong>Data Partitioning:</strong> Dividing data into smaller, more manageable segments for performance
                optimization.
                <em>Example:</em> Partitioning tables in Amazon Redshift or S3 for performance improvements.
            </li>
            <li><strong>Data Sharding:</strong> Splitting a database into smaller pieces to improve performance and
                scalability.
                <em>Example:</em> Sharding data across multiple Amazon DynamoDB tables.
            </li>
            <li><strong>Data Orchestration:</strong> Managing the execution and scheduling of complex data workflows.
                <em>Example:</em> Using AWS Step Functions to orchestrate ETL jobs and data workflows.
            </li>
            <li><strong>DataOps:</strong> Automated and collaborative practices to improve data flow and data quality.
                <em>Example:</em> Implementing DataOps using AWS CodePipeline for CI/CD of data workflows.
            </li>
            <li><strong>Data Versioning:</strong> Tracking changes and versions of data over time.
                <em>Example:</em> Managing dataset versions in Amazon S3 with versioning enabled.
            </li>
            <li><strong>Cloud Data Engineering:</strong> Using cloud platforms for data storage and processing.
                <em>Example:</em> Leveraging AWS managed services like Redshift, EMR, and Glue for data solutions.
            </li>
            <li><strong>Data Replication:</strong> Copying data across multiple databases or systems for redundancy and
                availability.
                <em>Example:</em> Replicating RDS or DynamoDB data across regions for disaster recovery.
            </li>
            <li><strong>Data Archiving:</strong> Storing historical data for long-term retention and compliance.
                <em>Example:</em> Archiving data in Amazon S3 Glacier for low-cost long-term storage.
            </li>
            <li><strong>Data Compression:</strong> Reducing the size of data to save storage space and improve
                processing
                speed.
                <em>Example:</em> Using compressed file formats like Parquet or ORC in S3 and Redshift.
            </li>
            <li><strong>Distributed Computing:</strong> Processing data across multiple machines to enhance performance
                and
                scalability.
                <em>Example:</em> Using Amazon EMR to run distributed data processing jobs with Hadoop or Spark.
            </li>
            <li><strong>Apache Spark:</strong> Open-source framework for large-scale data processing and analytics.
                <em>Example:</em> Running Spark jobs on Amazon EMR for ETL and machine learning tasks.
            </li>
            <li><strong>Kafka:</strong> Distributed event streaming platform for building real-time data pipelines.
                <em>Example:</em> Using Amazon MSK (Managed Streaming for Apache Kafka) for event-driven data pipelines.
            </li>
        </ul>
    )
}

export default aws;
