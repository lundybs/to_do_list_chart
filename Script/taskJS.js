//get values from the form
const name = document.querySelector('input[name="person"]:checked').value;
const difficult = document.getElementById('complexity').value;
const description = document.getElementById('task').value;

//values that go into the chart
const veryEasyDiff = 0;
const easyDiff = 0;
const moderateDiff = 0;
const meduimDiff = 0;
const difficultDiff = 0;
const veryDifficultDiff = 0;

function CreateTask() {
    event.preventDefault();
    console.log("In CreateTask function!");

    //create the ul and li and know where to place it in html body
    const parent = document.getElementById("list-container");
    const ulNode = document.createElement("ul");
    const liNode = document.createElement('li');

    //write to div in html
    var liText = document.createTextNode(name + " has a task of " + description + ", (" + difficult + ").");
    liNode.appendChild(liText);
    ulNode.appendChild(liNode);
    parent.appendChild(ulNode);
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Difficulty');
    data.addColumn('number', 'Number of tasks');
    data.addRows([
      ['Laughable Easy', veryEasyDiff],
      ['Easy', easyDiff],
      ['Moderate', moderateDiff],
      ['A Little Elbow Grease', meduimDiff],
      ['Difficult', difficultDiff],
      ['Call your Mom, you are not finishing this task', veryDifficultDiff]
    ]);

    // Set chart options
    var options = {
        'title': 'Number of task grouped by difficulty',
        'width': 600,
        'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

window.onload = function (){
    drawChart();
}