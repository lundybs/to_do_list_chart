//values that go into the chart
var veryEasyDiff = 0;
var easyDiff = 0;
var moderateDiff = 0;
var meduimDiff = 0;
var difficultDiff = 0;
var veryDifficultDiff = 0;
var samTask = 0;
var terryTask = 0;
var alanTask = 0;

function CreateTask() {
    event.preventDefault();
    console.log("In CreateTask function!");

    //get values from the form
    const name = document.querySelector('input[name="person"]:checked').value;
    const difficult = document.getElementById('complexity').value;
    const description = document.getElementById('task').value;

    switch (difficult) {
        case "Laughably Easy":
            veryEasyDiff += 1;
            break;
        case "Easy":
            easyDiff += 1;
            break;
        case "Moderate":
            moderateDiff += 1;
            break;
        case "A little elbow grease":
            meduimDiff += 1;
            break;
        case "difficult":
            difficultDiff += 1;
            break;
        case "Call your Mom, you're not finishing this task":
            veryDifficultDiff += 1;
            break;
        default:
            break;
    }

    switch (name) {
        case "Terry":
            terryTask += 1;
            break;
        case "Sam":
            samTask += 1;
            break;
        case "Alan":
            alanTask += 1;
            break;
        default:
            break;
    }


    //create the ul and li and know where to place it in html body
    const parent = document.getElementById("list-container");
    const ulNode = document.createElement("ul");
    const liNode = document.createElement('li');

    //write to div in html
    var liText = document.createTextNode(name + " has a task of " + description + ", (" + difficult + ").");
    liNode.appendChild(liText);
    ulNode.appendChild(liNode);
    parent.appendChild(ulNode);
    drawChart();
    drawPieChart();
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Who has how many task');
    data.addColumn('number', 'Number of tasks');
    data.addRows([
      ['Terry', terryTask],
      ['Sam', samTask],
      ['Alan', alanTask]
    ]);

    // Set chart options
    var options = {
        'title': 'Who has how many tasks',
        'width': 500,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Who has how many task');
    data.addColumn('number', 'Number of tasks');
    data.addRows([
      ['Laughable Easy', veryEasyDiff],
      ['Easy', easyDiff],
      ['Moderate', moderateDiff],
      ['A Little Elbow Grease', meduimDiff],
      ['Difficult', difficultDiff],
      ['Call your Mom, you are not finishing this task', veryDifficultDiff]
    ]);

    var options = {
        title: 'Number of different difficulty tasks',
        width: 400,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_div'));
    chart.draw(data, options);
}

window.onload = function () {
    drawChart();
    drawPieChart();
}