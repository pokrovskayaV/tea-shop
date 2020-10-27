export default function itemBtn() {
  //Счетчик
  $('.counter__minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
 $('.counter__plus').click(function () {
   var $input = $(this).parent().find('input');
   $input.val(parseInt($input.val()) + 1);
   $input.change();
   return false;
  });
  // Кнопка лайк
  $('.item__like').click(function () {
    $(this).toggleClass('_active');
  });
}
