$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
   });

   $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar, #content').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});

let APP = {
    run: function () {
        this.logout();
    },
    logout : function () {
        $('#logout').on('click', function () {
            $('#logout-form').submit();
        });
    },
};

let INIT = {
    run: function () {
        this.prepareAjax();
    },
    prepareAjax: function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    }
};

$(function () {
    INIT.run();
    APP.run();
});