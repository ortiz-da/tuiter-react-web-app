import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
<!--            https://getbootstrap.com/docs/4.0/utilities/vertical-align/-->

            <div class="input-group mb-2 align-items-center">
<!--                REFRENCE: https://mdbootstrap.com/docs/standard/utilities/position/-->
                <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Twitter" style="z-index: 0">
                <span class="position-absolute translate-middle top-50  ps-5">
                    <i class="fas fa-search"></i>
                </span>
                <a href="#">
                    <i class="fa-sharp fa-solid fa-gear fa-2x  ms-4" style="color: #2a9fd6" ></i>
                </a>

           </div>
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="entertainment.html"><span class="d-none d-sm-none d-md-inline">Entertainment</span></a>
                </li>
            </ul>
           <!-- image with overlaid text -->
           <div class="position-relative mb-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
                     class="img-fluid">
                <div class="position-absolute start-0 bottom-0 text-light m-2 fs-2 fw-bold">
                    SpaceX's Starship
                </div>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
