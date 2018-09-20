$(window).scroll(function() {
    $(window).scrollTop() > $(window).height() * 0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

$("#homelogo").click(function() {
    $("html, body").animate({
        scrollTop: $(window).height()
    }, 1000, null);
    return false;
});

var articleW = $('#main>article').css("width");

$("#menu-switch").click(function() {
    if ($("#toc-sidebar").hasClass("toc-hide")) {
        setTimeout(function() {
            $("#toc-sidebar").removeClass("toc-hide");
        }, 200);
        $('#main>article').css("width", articleW);
    } else {
        $("#toc-sidebar").addClass("toc-hide");
        setTimeout(function() {
            $('#main>article').css("width", "100%");
        }, 200);
    }
});

// Directory  
var $itemHasChild = $("#toc .nav-item:has(> .nav-child)");
var $titleHasChild = $itemHasChild.children(".nav-link");
$itemHasChild.prepend("<i class='fa fa-caret-down'></i><i class='fa fa-caret-right'></i>");

var clickIcon = function() {
    $("#toc .nav-item > i").click(function() {
        $(this).siblings(".nav-child").slideToggle(100);
        $(this).toggleClass("hide");
        $(this).siblings("i").toggleClass("hide");
    })
}()

var clickTitle = function() {
    $titleHasChild.dblclick(function() {
            $(this).siblings(".nav-child").hide(100);
            $(this).siblings("i").toggleClass("hide");
        })
        // After dblclick enent
    $titleHasChild.click(function() {
        var $curentTocChild = $(this).siblings(".nav-child");
        if ($curentTocChild.is(":hidden")) {
            $curentTocChild.show(100);
            $(this).siblings("i").toggleClass("hide");
        }
    })
}()

var clickTocTitle = function() {
    var $iconToExpand = $(".nav-item > .fa-caret-right");
    var $iconToFold = $(".nav-item > .fa-caret-down");
    var $subToc = $titleHasChild.next(".nav-child");
    $iconToExpand.addClass("hide");

    var $tocTitle = $("#toc .toc-title");
    if ($titleHasChild.length) {
        $tocTitle.addClass("clickable");
        $tocTitle.click(function() {
            if ($subToc.is(":hidden")) {
                $subToc.show(150);
                $iconToExpand.removeClass("hide");
                $iconToFold.addClass("hide");
            } else {
                $subToc.hide(100);
                $iconToExpand.addClass("hide");
                $iconToFold.removeClass("hide");
            }
        })
    }
}()