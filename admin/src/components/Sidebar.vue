<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div class="sidebar-brand-text mx-3">Klibrary Admin</div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item">
    <router-link to="/" class="nav-link">
        <i class="far fa-chart-bar" style="padding-right: 8px;"></i>
        <span>Bảng quản lý</span>
    </router-link>
   
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Giao diện
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne"
        aria-expanded="true" aria-controls="collapseOne">
        <i class="fas fa-tasks" style="padding-right: 8px;"></i>
        <span>Thể loại</span>
    </a>
    <div id="collapseOne" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <!-- <h6 class="collapse-header">Manages:</h6> -->
            <router-link class="collapse-item" to="/genre/list">Danh sách thể loại</router-link>
            <router-link class="collapse-item" to="/genre/add">Thêm thể loại</router-link>
        </div>
    </div>
</li>

<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-book" style="padding-right: 8px;"></i>
        <span>Sách</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <!-- <h6 class="collapse-header">Manages:</h6> -->
            <router-link class="collapse-item" to="/comic/list">Danh sách sách</router-link>
            <router-link class="collapse-item" to="/comic/add">Thêm sách</router-link>
        </div>
    </div>
</li>

<!-- Nav Item - Utilities Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-user" style="padding-right: 8px;"></i>
        <span>Tài khoản</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <!-- <h6 class="collapse-header">Manages:</h6> -->
            <router-link class="collapse-item" to="/user/list">Danh sách tài khoản</router-link>
            <router-link class="collapse-item" to="/login">Đăng ký tài khoản</router-link>
        </div>
    </div>
</li>


<!-- Nav Item - Utilities Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseComment"
        aria-expanded="true" aria-controls="collapseComment">
        <i class="fas fa-comments" style="padding-right: 8px;"></i>
        <span>Bình luận</span>
    </a>
    <div id="collapseComment" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <!-- <h6 class="collapse-header">Manages:</h6> -->
            <router-link class="collapse-item" to="/comment/list">Danh sách bình luận</router-link>
        </div>
    </div>
</li>


<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

</ul>
<!-- End of Sidebar -->
</template>