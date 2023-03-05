import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css"
// <!--            https://getbootstrap.com/docs/4.0/utilities/vertical-align/-->
// <!--                REFRENCE: https://mdbootstrap.com/docs/standard/utilities/position/-->

const ExploreComponent = () => {
    return (
        <>

            <div className="input-group mb-2 align-items-center">
                <input type="text" className="form-control rounded-pill ps-5 " id={"wd-z-index-0"}
                       placeholder="Search Twitter"
                />
                <span className="position-absolute translate-middle top-50  ps-5">
                    <i className="fas fa-search"></i>
                </span>
                <a href="#">
                    <i className="fas fa-solid fa-gear fa-2x  ms-4"></i>
                </a>


            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="entertainment.html"><span
                        className="d-none d-sm-none d-md-inline">Entertainment</span></a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
                     className="img-fluid"/>
                <div className="position-absolute start-0 bottom-0 text-light m-2 fs-2 fw-bold">
                    SpaceX's Starship
                </div>
            </div>

            <PostSummaryList/>
        </>

    );
}
export default ExploreComponent;
