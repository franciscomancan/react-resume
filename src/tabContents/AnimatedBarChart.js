import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// AnimatedBarChart Component
const AnimatedBarChart = () => {
    // Reference to the SVG element
    const svgRef = useRef();

    // Sample data for the chart
    const data = [30, 80, 45, 60, 20, 90, 50, 35, 85];
    const labels = ['kotlin', 'python','c#','java','other','javascript','powershell', 'go', 'sql'];

    // Effect hook to run D3 chart setup after the component mounts
    useEffect(() => {
        // Define the SVG dimensions and margins
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Select the SVG element via the ref and set its dimensions
        const svg = d3
            .select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        // Append a group element to the SVG and apply margins
        const g = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Set up the x and y scales
        const x = d3
            .scaleBand()
            .domain(data.map((_, i) => i))
            .range([0, width])
            .padding(0.2);

        const y = d3.scaleLinear().domain([0, d3.max(data)]).nice().range([height, 0]);

        // Append the x-axis
        g.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat((i) => `${labels[i]}`));

        // Append the y-axis
        g.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));

        // Append the bars
        const bars = g
            .selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (_, i) => x(i))
            .attr('y', height)
            .attr('width', x.bandwidth())
            .attr('height', 0)
            .on('mouseover', function () {
                d3.select(this).transition().duration(200).attr('fill', 'orange');
            })
            .on('mouseout', function () {
                d3.select(this).transition().duration(200).attr('fill', 'steelblue');
            });

        // Animate the bars
        bars.transition()
            .duration(800)
            .delay((_, i) => i * 100)
            .attr('y', (d) => y(d))
            .attr('height', (d) => height - y(d));

        // Cleanup function to remove the chart elements when the component unmounts
        return () => {
            svg.selectAll('*').remove();
        };
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default AnimatedBarChart;
