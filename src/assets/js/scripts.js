if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0 && ($(window).width() > 600))
{

}

else {



    $(document).on("scroll", function(){
        if
        ($(document).scrollTop() > 100){
            $("header").addClass("shrink");
            $(".logo").addClass("logo-m");
            $(".pr-bar").addClass("pr-bar-active");
            $(".pr-photo").addClass("pr-photo-active");
        }
        else
        {
            $("header").removeClass("shrink");
            $(".logo").removeClass("logo-m");
            $(".pr-bar").removeClass("pr-bar-active");
            $(".pr-photo").removeClass("pr-photo-active");

        }
    });

}// Empty JS for your own code to be here




var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    menuTop = document.getElementById( 'cbp-spmenu-s3' ),
    menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
    showLeft = document.getElementById( 'showLeft' ),
    showRight = document.getElementById( 'showRight' ),
    showTop = document.getElementById( 'showTop' ),
    showBottom = document.getElementById( 'showBottom' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    showRightPush = document.getElementById( 'showRightPush' ),
    body = document.body;

// showLeft.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( menuLeft, 'cbp-spmenu-open' );
//     disableOther( 'showLeft' );
// };
// showRight.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( menuRight, 'cbp-spmenu-open' );
//     disableOther( 'showRight' );
// };
// showTop.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( menuTop, 'cbp-spmenu-open' );
//     disableOther( 'showTop' );
// };
// showBottom.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( menuBottom, 'cbp-spmenu-open' );
//     disableOther( 'showBottom' );
// };
// showLeftPush.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( body, 'cbp-spmenu-push-toright' );
//     classie.toggle( menuLeft, 'cbp-spmenu-open' );
//     disableOther( 'showLeftPush' );
// };
// showRightPush.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( body, 'cbp-spmenu-push-toleft' );
//     classie.toggle( menuRight, 'cbp-spmenu-open' );
//     disableOther( 'showRightPush' );
// };

function disableOther( button ) {
    if( button !== 'showLeft' ) {
        classie.toggle( showLeft, 'disabled' );
    }
    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }
    if( button !== 'showTop' ) {
        classie.toggle( showTop, 'disabled' );
    }
    if( button !== 'showBottom' ) {
        classie.toggle( showBottom, 'disabled' );
    }
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
    }
}
