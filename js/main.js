$(function(){
  /*--------------------------------------------------
  # 헤더
  --------------------------------------------------*/
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll > 1) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });

  /*--------------------------------------------------
  # 메인 - 비주얼
  --------------------------------------------------*/
  let visual = new Swiper('.slide-vi', {
    effect: 'fade',
    loop: true,
    speed : 500,
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
    scrollbar: {el: '.swiper-scrollbar'},
    autoplay: {disableOnInteraction: false, delay: 5000}
  });

  $('#visual .slide-wrap>li:nth-child(2)').on('click', function(){
    location.href = '#';
  });

  $('#visual .slide-wrap>li:nth-child(3)').on('click', function(){
    location.href = '#';
  });

  /*--------------------------------------------------
  # 메인 - 요일별 신작
  --------------------------------------------------*/
  let mon = new Swiper('#daily .tab-view>li#mon .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#mon .next', prevEl: '#daily .tab-view>li#mon .prev'}
  });

  let tue = new Swiper('#daily .tab-view>li#tue .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#tue .next', prevEl: '#daily .tab-view>li#tue .prev'}
  });

  let wed = new Swiper('#daily .tab-view>li#wed .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#wed .next', prevEl: '#daily .tab-view>li#wed .prev'}
  });

  let thu = new Swiper('#daily .tab-view>li#thu .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#thu .next', prevEl: '#daily .tab-view>li#thu .prev'}
  });

  let fri = new Swiper('#daily .tab-view>li#fri .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#fri .next', prevEl: '#daily .tab-view>li#fri .prev'}
  });

  let sat = new Swiper('#daily .tab-view>li#sat .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#sat .next', prevEl: '#daily .tab-view>li#sat .prev'}
  });

  let sun = new Swiper('#daily .tab-view>li#sun .slide-con', {
    observer: true,
    observeParents: true,
    watchOverflow : false,
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '#daily .tab-view>li#sun .next', prevEl: '#daily .tab-view>li#sun .prev'}
  });

  let today = new Date();
  let day = today.getDay();

  $('.tab-wrap>li').each(function(idx){
    day =  (day == 0) ? 7 : day;
    if(day == idx){
      $('.tab-wrap>li').eq(idx - 1).css({'background-color':'#816bff'});
      $('.tab-view>li').eq(idx - 1).hide().show();
    }
  });

  $('.tab-wrap>li').on('click', function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.tab-wrap>li').css({'background-color':'#d0d0d0'});
    $(this).css({'background-color':'#816bff'});
    $('.tab-view>li').hide().eq(i).show();
  });

  /*--------------------------------------------------
  # 메인 - 콘텐츠
  --------------------------------------------------*/
  let con = new Swiper('.con-wrap>li:nth-child(1) .slide-con', {
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '.con-wrap>li:nth-child(1) .next', prevEl: '.con-wrap>li:nth-child(1) .prev'}
  });

  let con2 = new Swiper('.con-wrap>li:nth-child(2) .slide-con', {
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '.con-wrap>li:nth-child(2) .next', prevEl: '.con-wrap>li:nth-child(2) .prev'}
  });

  let con3 = new Swiper('.con-wrap>li:nth-child(3) .slide-con', {
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '.con-wrap>li:nth-child(3) .next', prevEl: '.con-wrap>li:nth-child(3) .prev'}
  });

  let con4 = new Swiper('.con-wrap>li:nth-child(4) .slide-con', {
    speed : 500,
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      480: {slidesPerView: 3, slidesPerGroup: 3},
      768: {slidesPerView: 4, slidesPerGroup: 4},
      980: {slidesPerView: 5, slidesPerGroup: 5},
      1200: {slidesPerView: 6, slidesPerGroup: 6},
    },
    navigation: {nextEl: '.con-wrap>li:nth-child(4) .next', prevEl: '.con-wrap>li:nth-child(4) .prev'}
  });

  /*--------------------------------------------------
  # 푸터
  --------------------------------------------------*/
  $('#footer .bottom>button').on('click', function(){
    $('#footer .entre').toggle();
  });
});