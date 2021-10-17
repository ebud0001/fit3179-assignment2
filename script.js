const specVis1 = "vic-suburb-map.vg.json";
const specVis2 = "vic-suburb-scatterplot.vg.json";
const specVis3 = "vic-suburb-stackedbar.vg.json";
const specVis4 = "vic-rent-byregion.vg.json";

const caption1 =
	"The highest median property price across all quarters is in Toorak. It can also be seen that property prices tend to be higher in its surrounding areas.";
const caption2 =
	"The change in median house prices across different quarterly periods tend to only vary slightly. <br/> Hence, no clear patterns or relationships between consecutive time periods can be established with certainty.";
const caption3 =
	"The periods of highest median property prices vary for each locality, but it is generally lowest during the second and third quarters of 2020.";
const caption4 =
	"Between September 2020 to March 2021, the rental prices across various regions converge to $340 - $450.";

const source1 =
	"Data Source: https://discover.data.vic.gov.au/dataset/victorian-property-sales-report-median-house-by-suburb <br/> Map Source: https://data.gov.au/dataset/ds-dga-af33dd8c-0534-4e18-9245-fc64440f742e/details";
const source2 =
	"Data Source: https://discover.data.vic.gov.au/dataset/victorian-property-sales-report-median-house-by-suburb";
const source3 =
	"Data Source: https://discover.data.vic.gov.au/dataset/victorian-property-sales-report-median-house-by-suburb";
const source4 =
	"Data Source: https://discover.data.vic.gov.au/dataset/rental-report-quarterly-data-tables/historical";

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const title = document.getElementById("title");
const graph = document.getElementById("graph");
const content = document.getElementById("content");
const menu = document.getElementById("menu");
const data = document.getElementById("data");
const colGraph = document.getElementById("col-graph");
const caption = document.getElementById("caption");
const source = document.getElementById("source");

option1.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption1;
	source.innerHTML = source1;
	vegaEmbed("#graph", specVis1);
});

option2.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption2;
	source.innerHTML = source2;
	vegaEmbed("#graph", specVis2);
});

option3.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption3;
	source.innerHTML = source3;
	vegaEmbed("#graph", specVis3);
});

option4.addEventListener("click", () => {
	colGraph.classList.add("col-graph");
	graph.classList.add("graph");
	content.classList.add("height-auto");
	menu.classList.add("height-auto");
	caption.classList.add("caption");
	source.classList.add("caption");
	caption.innerHTML = caption4;
	source.innerHTML = source4;
	vegaEmbed("#graph", specVis4);
});
