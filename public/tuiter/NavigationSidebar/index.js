const NavigationSidebar = () => {
    return (`
    <div class="row">
        <div>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action"><i class="fab fa-twitter"></i></a>

                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-home"></i> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Home</span></a>
                <a href="#" class=" list-group-item list-group-item-action active"><i class="fas fa-hashtag"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Explore</span></a>
                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-bell"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Notifications</span></a>
                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-envelope"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Messages</span></a>
                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-bookmark"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Bookmarks</span></a>
                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-list"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Lists</span></a>
                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-user"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> Profile</span></a>
                <a href="#" class=" list-group-item list-group-item-action"><i class="fas fa-minus-circle"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline"> More</span></a>
            </div>
           <div class="d-flex">
                <button type="button" class="btn btn-primary rounded-pill flex-fill my-2">Tweet</button>
            </div>
        </div>
    </div>
     
    `);
}
export default NavigationSidebar