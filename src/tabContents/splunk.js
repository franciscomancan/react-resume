const splunk = () => {
    return (
        <ul>
            <li>
                <strong>Search Command:</strong> <code>{`search error`}</code> searches for events containing the word "error"
            </li>
            <li>
                <strong>Time Range Selector:</strong> <code>{`earliest=-15m latest=now`}</code> sets the time range from the last 15 minutes to now
            </li>
            <li>
                <strong>Wildcard Search:</strong> <code>{`search host=*web*`}</code> searches for hosts containing "web"
            </li>
            <li>
                <strong>Field Extraction:</strong> <code>{`rex field=_raw "(?<status>\\d{3})"`}</code> extracts a 3-digit status code from the raw event
            </li>
            <li>
                <strong>Stats Command:</strong> <code>{`stats count by host`}</code> counts events grouped by the host field
            </li>
            <li>
                <strong>Top Command:</strong> <code>{`top source`}</code> finds the most frequent values for the source field
            </li>
            <li>
                <strong>Timechart Command:</strong> <code>{`timechart count by status`}</code> generates a time chart counting events by status code
            </li>
            <li>
                <strong>Transaction Command:</strong> <code>{`transaction startswith="login" endswith="logout"`}</code> creates a transaction between login and logout events
            </li>
            <li>
                <strong>Eval Command:</strong> <code>{`eval total = price * quantity`}</code> calculates a new field "total" by multiplying price and quantity
            </li>
            <li>
                <strong>Where Command:</strong> <code>{`where duration > 5`}</code> filters events where the duration is greater than 5 seconds
            </li>
            <li>
                <strong>Rename Command:</strong> <code>{`rename src_ip as source_ip`}</code> renames the src_ip field to source_ip
            </li>
            <li>
                <strong>Search Head:</strong> A Splunk instance that coordinates searches across indexers
            </li>
            <li>
                <strong>Indexer:</strong> Splunk instance responsible for indexing and storing data
            </li>
            <li>
                <strong>Universal Forwarder:</strong> A lightweight Splunk instance that sends data to an indexer
            </li>
            <li>
                <strong>Lookup Command:</strong> <code>{`lookup user_lookup username OUTPUT user_type`}</code> enriches search results by looking up user type based on username
            </li>
            <li>
                <strong>Eventtypes:</strong> <code>{`eventtype=failed_login`}</code> filters events classified under the "failed_login" event type
            </li>
            <li>
                <strong>Tags:</strong> <code>{`tag=web`}</code> filters events with a tag of "web"
            </li>
            <li>
                <strong>Extract Field:</strong> <code>{`extract source="access_combined"`}</code> automatically extracts fields from a known source type
            </li>
            <li>
                <strong>Multikv Command:</strong> <code>{`multikv`}</code> extracts multiple key-value pairs from multiline events
            </li>
            <li>
                <strong>Fillnull Command:</strong> <code>{`fillnull value="N/A"`}</code> replaces null values with "N/A"
            </li>
            <li>
                <strong>Table Command:</strong> <code>{`table host, source, sourcetype`}</code> displays a table with selected fields
            </li>
            <li>
                <strong>Dedup Command:</strong> <code>{`dedup host`}</code> removes duplicate events based on the host field
            </li>
            <li>
                <strong>Join Command:</strong> <code>{`join type=inner user_id [search index=other_index]`}</code> performs an inner join between two datasets based on user_id
            </li>
            <li>
                <strong>Summary Indexing:</strong> Stores precomputed search results in a special index
            </li>
            <li>
                <strong>Timewrap Command:</strong> <code>{`timewrap span=1d`}</code> compares current data to past data for the same time period
            </li>
            <li>
                <strong>Bin Command:</strong> <code>{`bin _time span=1h`}</code> groups events into 1-hour time bins
            </li>
            <li>
                <strong>Bucket Command:</strong> <code>{`bucket span=10m _time`}</code> similar to `bin`, it groups events into 10-minute buckets
            </li>
            <li>
                <strong>Inputlookup Command:</strong> <code>{`inputlookup user_roles.csv`}</code> reads data from a lookup table or CSV file
            </li>
            <li>
                <strong>Fields Command:</strong> <code>{`fields host, status`}</code> selects specific fields to display in the results
            </li>
            <li>
                <strong>Outputlookup Command:</strong> <code>{`outputlookup search_results.csv`}</code> writes search results to a CSV file
            </li>
            <li>
                <strong>Map Command:</strong> <code>{`map search="search index=users user_id=$user_id$"`}</code> runs a subsearch for each result in the primary search
            </li>
            <li>
                <strong>Rest Command:</strong> <code>{`| rest /services/authentication/users`}</code> retrieves data from Splunk's REST API
            </li>
            <li>
                <strong>Search Pipelines:</strong> The process of chaining search commands together using pipes (<code>|</code>)
            </li>
            <li>
                <strong>Subsearch:</strong> <code>{`[ search error ]`}</code> runs a search whose results are used in the main search
            </li>
            <li>
                <strong>Makemv Command:</strong> <code>{`makemv delim="," values`}</code> splits a field by a delimiter into multiple values
            </li>
            <li>
                <strong>Mvexpand Command:</strong> <code>{`mvexpand values`}</code> expands multivalue fields into separate events
            </li>
            <li>
                <strong>Convert Command:</strong> <code>{`convert timeformat="%Y-%m-%d" ctime(_time)`}</code> converts epoch time to human-readable time
            </li>
            <li>
                <strong>Delta Command:</strong> <code>{`delta bytes as diff`}</code> calculates the difference between consecutive events
            </li>
            <li>
                <strong>Streamstats Command:</strong> <code>{`streamstats current=f window=5 sum(bytes) as bytes_5`}</code> computes a rolling sum over a 5-event window
            </li>
            <li>
                <strong>Metadata Command:</strong> <code>{`| metadata type=hosts`}</code> returns metadata about hosts
            </li>
            <li>
                <strong>Datamodels:</strong> Structured datasets designed for accelerated reporting
            </li>
            <li>
                <strong>Fields Command:</strong> <code>{`fields - _raw`}</code> removes the raw event field from the output
            </li>
            <li>
                <strong>Regex Command:</strong> <code>{`regex _raw="(?i)error"`}</code> filters events containing the word "error" (case-insensitive)
            </li>
            <li>
                <strong>Format Command:</strong> <code>{`format`}</code> formats subsearch results for use in the main search
            </li>
            <li>
                <strong>Collect Command:</strong> <code>{`collect index=summary sourcetype="summary_data"`}</code> saves search results into a summary index
            </li>
            <li>
                <strong>Tag Command:</strong> <code>{`tag::host="production"`}</code> filters events tagged with "production"
            </li>
            <li>
                <strong>Tstats Command:</strong> <code>{`| tstats count where index=web by host`}</code> fast performance query for large datasets
            </li>
            <li>
                <strong>Anomalies Command:</strong> <code>{`anomalies`}</code> detects outliers or unusual events
            </li>
            <li>
                <strong>Eventcount Command:</strong> <code>{`eventcount summarize=false`}</code> returns the count of events in a search
            </li>
            <li>
                <strong>Delete Command:</strong> <code>{`delete`}</code> (admin-only) deletes search results permanently
            </li>
            <li>
                <strong>Persisted Searches:</strong> Saved searches that are scheduled to run periodically
            </li>
            <li>
                <strong>Schedule:</strong> Automatically runs saved searches based on a defined schedule
            </li>
            <li>
                <strong>Alerts:</strong> Conditions that trigger notifications or actions when met
            </li>
            <li>
                <strong>Index-time Extraction:</strong> Fields extracted when data is ingested into Splunk
            </li>
            <li>
                <strong>Search-time Extraction:</strong> Fields extracted dynamically during a search
            </li>
            <li>
                <strong>Acceleration:</strong> Uses precomputed summaries to speed up reporting and searches
            </li>
            <li>
                <strong>Pivot Command:</strong> <code>{`pivot datamodel_name filter source=source_name`}</code> creates a report from a data model
            </li>
        </ul>
    );
};

export default splunk;
