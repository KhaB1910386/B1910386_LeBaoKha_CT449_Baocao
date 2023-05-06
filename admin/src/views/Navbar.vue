<template>
     <!-- Topbar -->
     <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<!-- Sidebar Toggle (Topbar) -->
<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
    <i class="fa fa-bars"></i>
</button>

<ul class="navbar-nav ml-auto">

    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
     

    <!-- Nav Item - User Information -->
    <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span style="    border: 1px solid;
                            padding: 5px 15px;
                            border-radius: 5px;" class="mr-2 d-none d-lg-inline text-gray-800">{{ username }}</span>
            
        </a>
        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <button class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Đăng xuất
            </button>
        </div>
    </li>

</ul>

</nav>
<!-- End of Topbar -->
</template>

<script>
    export default{
        props: {
            modelValue: { type: String, default: "" },
        },
        emits: ["submit", "update:modelValue"],
        data() {
            return {
                username:'',
                route: this.$route.query.page
            };
        },
        methods:{
            updateModelValue(e) {
                this.$emit("update:modelValue", e.target.value);
                },
                submit() {
                    this.$emit("submit");
                },
            getUserName (){
            
                const user= JSON.parse(localStorage.getItem('user'));
                if(user){
                    this.username = user.name;
                }
                console.log(this.username);

            },
        },
        mounted(){
            this.getUserName();
        }
    }
</script>