$('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


$(function () {

    let form = $('#category_form');

    $('#add_category').click(function () {
        form.animate({
            left: '0',
        }, 680, function(){})
    }),

    $('#category_form_btn').click(function () {
        form.animate({
            left: '-=1000',
        },680, function () {})
    })
})
