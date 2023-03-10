import TarpNavigator from "./TarpNavigator.js";

const tarp = jQuery("#tarp")

tarp.append(
    `
<div class="container">
    <h1>Welcome to Tarp</h1>
    <div class="row">
    
         
        <!--        SIZE 2 for medium and above-->
        <!--        DONT SHOW UNTIL MEDIUM-->
        <div class=" col-md-2 d-none d-md-block">
            ${TarpNavigator()}
        </div>

        <!--        DONT SHOW UNTIL MEDIUM-->
        <div class="col-md-2 d-none d-md-block">
            <div class="list-group">
                <a class="list-group-item active" href="#">Home</a>
                <a class="list-group-item" href="#">Modules</a>
                <a class="list-group-item " href="#">Piazza</a>
                <a class="list-group-item" href="#">Zoom</a>
                <a class="list-group-item" href="grades.html">Grades</a>


            </div>
        </div>

        <div class="col-lg-6 col-md-8 col-12">
            <ul class="list-group border border-dark mb-3">
                <li class="list-group-item list-group-item-primary">Resources</li>
                <li class="list-group-item">Syllabus</li>
                <li class="list-group-item">Piazza</li>
                <li class="list-group-item">Github</li>
            </ul>

            <ul class="list-group border border-dark mb-3">
                <li class="list-group-item list-group-item-primary">Week1</li>
                <li class="list-group-item">Reading</li>
                <li class="list-group-item">Slides</li>
                <li class="list-group-item">Evaluation</li>
                <li class="list-group-item list-group-item-warning">Videos</li>

            </ul>
        </div>

        <div class="col-md-2 bg-warning d-none d-lg-block">
            <div class="list-group">Sidebar</div>
        </div>
    </div>
</div>`
)