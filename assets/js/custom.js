
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'ease',
  touchMove: true,

});


var imgs = $('.slider img');
imgs.each(function () {
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')',
    'background-position': 'center',
    '-webkit-background-size': 'cover',
    'background-size': 'cover',
  });
  $(this).hide();
});


$(document).ready(function(){

$('.datepicker-1').datepicker({
  autoShow: false,
  format: 'mm/dd/yyyy',
}).on('pick.datepicker', function (e) {
  e.preventDefault(); // Prevent to pick the date
  $('.datepicker-1 .datepicker-month').text($(this).datepicker('getMonthName'));
  $('.datepicker-1 .datepicker-day-numric').text($(this).datepicker('getDate', true).split('/')[1]);
  $('.datepicker-1 .datepicker-day').text($(this).datepicker('getDayName'));
  $('.datepicker-1-input').val($(this).datepicker('getDate', true));
});

$('.datepicker-1 .datepicker-month').text($('.datepicker-1').datepicker('getMonthName'));
$('.datepicker-1 .datepicker-day-numric').text($('.datepicker-1').datepicker('getDate', true).split('/')[1]);
$('.datepicker-1 .datepicker-day').text($('.datepicker-1').datepicker('getDayName'));
$('.datepicker-1-input').val($('.datepicker-1').datepicker('getDate', true));

$('.datepicker-2').datepicker({
  autoShow: false,
  date: new Date((new Date()).valueOf() + 1000*3600*72),
  format: 'mm/dd/yyyy',
}).on('pick.datepicker', function (e) {
  e.preventDefault(); // Prevent to pick the date
  $('.datepicker-2 .datepicker-month').text($(this).datepicker('getMonthName'));
  $('.datepicker-2 .datepicker-day-numric').text($(this).datepicker('getDate', true).split('/')[1]);
  $('.datepicker-2 .datepicker-day').text($(this).datepicker('getDayName'));
  $('.datepicker-2-input').val($(this).datepicker('getDate', true));
});

$('.datepicker-2 .datepicker-month').text($('.datepicker-2').datepicker('getMonthName'));
$('.datepicker-2 .datepicker-day-numric').text($('.datepicker-2').datepicker('getDate', true).split('/')[1]);
$('.datepicker-2 .datepicker-day').text($('.datepicker-2').datepicker('getDayName'));
$('.datepicker-2-input').val($('.datepicker-2').datepicker('getDate', true));

$('.datepicker-add, .round-trip').click(function(){
  $('.search-nav-left li.active').removeClass('active');
  $('.round-trip').addClass('active');
  $('.datepicker-add').hide();
  $('.datepicker-2').show();
});

$('.datepicker-2-hide, .one-way').click(function(){
  $('.search-nav-left li.active').removeClass('active');
  $('.one-way').addClass('active');
  $('.datepicker-add').show();
  $('.datepicker-2').hide();
  $('.datepicker-2').datepicker('hide');
});

$('.passengers-toggle').click(function(){
  $('.passengers-dropdown').fadeToggle(100);
});

});


var but = document.getElementById('totalpassengers'),
 count4 = 0;
this.innerHTML =  totalpassengers;

var button = document.getElementById('addadult'),
  count = 0;
button.onclick = function() {
  count += 1;
  count4 +=1;
  totalpassengers.innerHTML =  count4;
  totaladult.innerHTML =  count; 
};

var button = document.getElementById('addchild'),
 count2 = 0;
button.onclick = function() {
  
  count2 += 1;
  count4 +=1;
  totalpassengers.innerHTML =  count4;
  totalchild.innerHTML =  count2;
};

var button = document.getElementById('addinfat'),
  count3 = 0;
button.onclick = function() {
 
  count3 += 1;
  count4 +=1;
  totalinfat.innerHTML =  count3;
  totalpassengers.innerHTML =  count4;
};

