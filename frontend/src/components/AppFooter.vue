<template>
    
<footer>
    <div class="container">
        <!-- <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> -->
        <div class="row m-3 p-4">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <a href="#" class="logo justify-content-md-center">
                    <b class="text-danger">KLibrary</b>
              </a>
              <p>
                  Giới thiệu và truyền đạt các thể loại sách đến mọi người!
              </p>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 link_web ">
              <ul>
                  <b class="text-success fs-5">TRANG</b>
                  <div><i class="fas fa-chevron-right text-danger"></i>Trang chủ</div>
                  <div><i class="fas fa-chevron-right text-danger"></i>Lịch trình</div>
                  <div><i class="fas fa-chevron-right text-danger"></i>Thể loại</div>
                  <div><i class="fas fa-chevron-right text-danger"></i>Thịnh hành</div>
                  <div><i class="fas fa-chevron-right text-danger"></i> Đánh giá</div>
                  <li class="widget">
                      <!-- Đánh giá -->
                      <div class="rating">
                          <input type="radio" name="rate" id="rate-5">
                          <label for="rate-5"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-4">
                          <label for="rate-4"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-3">
                          <label for="rate-3"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-2">
                          <label for="rate-2"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-1">
                          <label for="rate-1"><i class="fa-solid fa-star"></i></label>
                      </div>
                  </li>
                </ul>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div>
                <b class="text-success fs-5">MẠNG XÃ HỘI</b>
                  <ul class="row p-0">
                      <li class="col-3"><a href="#">
                          <i class="fa-brands fa-facebook-f" style="font-size: 25px; color: #106ce4;"></i>
                      </a></li>
                      <li class="col-3"><a href="#">
                          <i class="fa-brands fa-instagram" style="font-size: 25px; color: #106ce4;"></i>
                      </a></li>
                      <li class="col-3"><a href="#">
                          <i class="fa-brands fa-twitter" style="font-size: 25px; color: #106ce4;"></i>
                      </a></li>
                    </ul>
                  
              </div>
          </div>
      </div>
    </div>
</footer>
</template>
<script>
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()){
                $('.header').addClass('fixed');
            }
            else{
                $('.header').removeClass('fixed');
            }
        })
        $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })


    
    // var mybutton = document.getElementById("myBtn");
    // window.onscroll = function() {scrollFunction()};
    // function scrollFunction() {
    //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //     mybutton.style.display = "block";
    //     } else {
    //     mybutton.style.display = "none";
    //     }
    // }
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

   
</script>
