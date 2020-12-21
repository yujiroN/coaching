'usd strict';


// 質問

$(".qa-list dd").hide();
$(".qa-list dl").on("click", function (e) {
    $('dd', this).slideToggle('fast');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $(this).addClass('open');
    }
});

// 質問


// TOP
jQuery(window).on("scroll", function ($) {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.floating').show();
    } else {
        jQuery('.floating').hide();
    }
});

jQuery('.floating').click(function () {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
// TOP

























var boxes = document.querySelectorAll(".counted");
var boxesArray = Array.prototype.slice.call(boxes, 0);
var options = {
    root: null,
    rootMargin: "0px 50%",
    threshold: 0,
};
var observer = new IntersectionObserver(doWhenIntersect, options);
boxesArray.forEach(function (box) {
    observer.observe(box);
});

function doWhenIntersect(entries) {
    var entriesArray = Array.prototype.slice.call(entries, 0);
    entriesArray.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("count");
        }
    });
    // 数時間とアップ
    $(function () {
        var countElm = $('.count'),
            countSpeed = 10;

        countElm.each(function () {
            var self = $(this),
                countMax = self.attr('data-num'),
                thisCount = self.text(),
                countTimer;

            function timer() {
                countTimer = setInterval(function () {
                    var countNext = thisCount++;
                    self.text(countNext);

                    if (countNext == countMax) {
                        clearInterval(countTimer);
                    }
                }, countSpeed);
            }
            timer();
        });
    });
}



// first-vの背景画像のパララックス
$(function () {
    var target1 = $("#parallax-01");
    var targetPosOT1 = target1.offset().top;

    var targetFactor = 0.5;
    var windowH = $(window).height();
    var scrollYStart1 = targetPosOT1 - windowH;


    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        } else {
            // target1.css('background-position', 'center top');
        }

    });
});
// first-vの背景画像のパララックス