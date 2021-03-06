// 自行加入的JS請寫在這裡
//menu滑動連結
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //燈箱slick+lightBox組合
    $('.cppic_slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    // $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.controls').html(i + '/' + slick.slideCount);
    // });
    // $('.Slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     swipe: false,
    //     swipeToSlide: false,
    //     lazyLoad: 'ondemand',
    //     asNavFor: '.Slider-nav',
    //     infinite: true
    // });
    // $('.Slider-nav').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     asNavFor: '.Slider-for',
    //     dots: true,
    //     arrows: true,
    //     lazyLoad: 'ondemand',
    //     focusOnSelect: true,
    //     infinite: true
    // });
    // 旅行地點分佈
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // 系統公告
    //  $('.bulletin').addClass('goin');
 // $('.bulletin .btn_grp').click(function() {
 //     $('.bulletin').stop().removeClass('goin');
 // })
    if ($('.bulletin').html() != undefined) {
        $('.bulletin').addClass('goin');
        if (getCookie('mptopnews' + $('.bulletin').attr('id').replace('div_', '')) == '1') {
            $('.bulletin').stop().removeClass('goin');
        }
        $('.bulletin .btn_grp').click(function() {
            $('.bulletin').stop().removeClass('goin');
            var expires = new Date();
            //有效時間保存 20 分 20*60*1000 改為一年
            expires.setDate(expires.getDate() + 365);
            //expires.setTime(expires.getTime() + 1200000);
            document.cookie = "mptopnews" + $('.bulletin').attr('id').replace('div_', '') + "=" + escape('1') + ";expires=" + expires.toGMTString();
        })
    }

    function getCookie(name) {
        var arg = escape(name) + "=";
        var nameLen = arg.length;
        var cookieLen = document.cookie.length;
        var i = 0;
        while (i < cookieLen) {
            var j = i + nameLen;
            if (document.cookie.substring(i, j) == arg) return getCookieValueByIndex(j);
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break;
        }
        return null;
    }

    function getCookieValueByIndex(startIndex) {
        var endIndex = document.cookie.indexOf(";", startIndex);
        if (endIndex == -1) endIndex = document.cookie.length;
        return unescape(document.cookie.substring(startIndex, endIndex));
    }
    // 地點分佈輪播
    // $('.location_slider').slick({
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     responsive: [{
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //     ]
    // });
});
// 專題旅券
$(function() {
    $('.topic_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})
// 旅券瀏覽1
$(function() {
    $('.slider-time').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        // asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        // centerMode: false,
        // focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 545,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });
    // var slideLength = $('.slider-time div').length,
    //     slideIndex = $('.slide-time div').index();
    // // console.log(slideLength);
    // // console.log(slideIndex);
    // $('.slider-time').children('div').eq(slideIndex).find('a').off().click(function(e) {
    //     slideIndex = $(this).parent().index();
    //     $('.content').find('a:first').focus();
    //     $(this).parent().addClass('now');
    //     console.log(slideIndex);
    //     e.preventDefault();
    // });
    // $('.content').find('a:last').focusout(function(e) {
    //     $('.slider-time').children('.now').next('div').find('a').focus();
    // });
})
// 旅券瀏覽2
$(function() {
    $('.slider-time2').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        // asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        // centerMode: false,
        // focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 545,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });
    // var slideLength = $('.slider-time2 div').length,
    //     slideIndex = $('.slide-time2 div').index();
    // // console.log(slideLength);
    // // console.log(slideIndex);
    // $('.slider-time2').children('div').eq(slideIndex).find('a').off().click(function(e) {
    //     slideIndex = $(this).parent().index();
    //     $('.content').find('a:first').focus();
    //     $(this).parent().addClass('now');
    //     console.log(slideIndex);
    //     e.preventDefault();
    // });
    // $('.content').find('a:last').focusout(function(e) {
    //     $('.slider-time2').children('.now').next('div').find('a').focus();
    // });
})
// 地點分佈
$(function() {
    // 1
    $('.location01>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group01>a').addClass('addhover')
    })
    $('.location01>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group01>a').removeClass('addhover')
    })
    // ----
    $('.group01>a').mouseover(function() {
        $('.location01>a').next('.num_people').stop().fadeIn();
        $('.location01>a').addClass('addcolor');
    })
    $('.group01>a').mouseout(function() {
        $('.location01>a').next('.num_people').stop().fadeOut();
        $('.location01>a').removeClass('addcolor');
    })
    // 2
    $('.location02>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group02>a').addClass('addhover')
    })
    $('.location02>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group02>a').removeClass('addhover')
    })
    // ----
    $('.group02>a').mouseover(function() {
        $('.location02>a').next('.num_people').stop().fadeIn();
        $('.location02>a').addClass('addcolor');
    })
    $('.group02>a').mouseout(function() {
        $('.location02>a').next('.num_people').stop().fadeOut();
        $('.location02>a').removeClass('addcolor');
    })
    // 3
    $('.location03>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group03>a').addClass('addhover')
    })
    $('.location03>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group03>a').removeClass('addhover')
    })
    // ----
    $('.group03>a').mouseover(function() {
        $('.location03>a').next('.num_people').stop().fadeIn();
        $('.location03>a').addClass('addcolor');
    })
    $('.group03>a').mouseout(function() {
        $('.location03>a').next('.num_people').stop().fadeOut();
        $('.location03>a').removeClass('addcolor');
    })
    // 4
    $('.location04>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group04>a').addClass('addhover')
    })
    $('.location04>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group04>a').removeClass('addhover')
    })
    // ----
    $('.group04>a').mouseover(function() {
        $('.location04>a').next('.num_people').stop().fadeIn();
        $('.location04>a').addClass('addcolor');
    })
    $('.group04>a').mouseout(function() {
        $('.location04>a').next('.num_people').stop().fadeOut();
        $('.location04>a').removeClass('addcolor');
    })
    // 5
    $('.location05>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group05>a').addClass('addhover')
    })
    $('.location05>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group05>a').removeClass('addhover')
    })
    // ----
    $('.group05>a').mouseover(function() {
        $('.location05>a').next('.num_people').stop().fadeIn();
        $('.location05>a').addClass('addcolor');
    })
    $('.group05>a').mouseout(function() {
        $('.location05>a').next('.num_people').stop().fadeOut();
        $('.location05>a').removeClass('addcolor');
    })
    // 6
    $('.location06>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group06>a').addClass('addhover')
    })
    $('.location06>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group06>a').removeClass('addhover')
    })
    // ----
    $('.group06>a').mouseover(function() {
        $('.location06>a').next('.num_people').stop().fadeIn();
        $('.location06>a').addClass('addcolor');
    })
    $('.group06>a').mouseout(function() {
        $('.location06>a').next('.num_people').stop().fadeOut();
        $('.location06>a').removeClass('addcolor');
    })
    // 7
    $('.location07>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group07>a').addClass('addhover')
    })
    $('.location07>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group07>a').removeClass('addhover')
    })
    // ----
    $('.group07>a').mouseover(function() {
        $('.location07>a').next('.num_people').stop().fadeIn();
        $('.location07>a').addClass('addcolor');
    })
    $('.group07>a').mouseout(function() {
        $('.location07>a').next('.num_people').stop().fadeOut();
        $('.location07>a').removeClass('addcolor');
    })
    // 8
    $('.location08>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group08>a').addClass('addhover')
    })
    $('.location08>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group08>a').removeClass('addhover')
    })
    // ----
    $('.group08>a').mouseover(function() {
        $('.location08>a').next('.num_people').stop().fadeIn();
        $('.location08>a').addClass('addcolor');
    })
    $('.group08>a').mouseout(function() {
        $('.location08>a').next('.num_people').stop().fadeOut();
        $('.location08>a').removeClass('addcolor');
    })
    // 9
    $('.location09>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group09>a').addClass('addhover')
    })
    $('.location09>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group09>a').removeClass('addhover')
    })
    // ----
    $('.group09>a').mouseover(function() {
        $('.location09>a').next('.num_people').stop().fadeIn();
        $('.location09>a').addClass('addcolor');
    })
    $('.group09>a').mouseout(function() {
        $('.location09>a').next('.num_people').stop().fadeOut();
        $('.location09>a').removeClass('addcolor');
    })
    // 10
    $('.location10>a').mouseover(function() {
        $(this).next('.num_people').stop().fadeIn();
        $('.group10>a').addClass('addhover')
    })
    $('.location10>a').mouseout(function() {
        $(this).next('.num_people').stop().fadeOut();
        $('.group10>a').removeClass('addhover')
    })
    // ----
    $('.group10>a').mouseover(function() {
        $('.location10>a').next('.num_people').stop().fadeIn();
        $('.location10>a').addClass('addcolor');
    })
    $('.group10>a').mouseout(function() {
        $('.location10>a').next('.num_people').stop().fadeOut();
        $('.location10>a').removeClass('addcolor');
    })
})
$(function() {
    $('.query').click(function(e) {
        $(' body,html').stop(true, true).animate({ scrollTop: $('.groupA').offset().top }, 200, 'easeOutExpo');
    });
    $('.browse').click(function(e) {
        $('body,html').stop(true, true).animate({ scrollTop: $('.groupB').offset().top - 70 }, 200, 'easeOutExpo');
    });
    $('.place').click(function(e) {
        $('body,html').stop(true, true).animate({ scrollTop: $('.groupC').offset().top - 70 }, 200, 'easeOutExpo');
    });
    $('.purpose').click(function(e) {
        $('body,html').stop(true, true).animate({ scrollTop: $('.groupD').offset().top - 70 }, 200, 'easeOutExpo');
    });
    $('.project').click(function(e) {
        $('body,html').stop(true, true).animate({ scrollTop: $('.groupE').offset().top - 70 }, 200, 'easeOutExpo');
    });
    // e.preventDefault();
    // if ($('.innerpage').length > 0) {
    //     $('.query').click(function(e) {
    //         $(' body,html').stop(true, true).animate({ scrollTop: $('.groupA').offset().top - 500 }, 200, 'easeOutExpo');
    //     });
    // }    
})
// 結果條列頁展開按鈕
$(function() {
    $('.result_table table tr td .openbtn').click(function() {
        $(this).stop().toggleClass('closebtn');
        // $(this).parents('tr').siblings('tr').find('.second_data').stop().slideUp();
        $(this).parents('tr').next('tr').find('.second_data').stop().slideToggle();
        // $(this).parents('tr').siblings('tr').find('.openbtn').stop().removeClass('closebtn');                
        if ($('.all_unfold>a').html() === "全部展開") // 只針對單筆展開
        {
            $('.all_unfold>a').html("全部收合");
            $('.all_unfold>a').attr('name', '全部收合');
        }
        if ($('.result_table table tr td .openbtn.closebtn').length === 0) {
            $('.all_unfold>a').html("全部展開");
            $('.all_unfold>a').attr('name', '全部展開');
        }
        //if ($('.all_unfold>a').html() === "全部收合") {
        //    $('.all_unfold>a').html("全部展開");
        //    $('.all_unfold>a').attr('name', '全部展開');
        //}
        ////else {
        //    $('.all_unfold>a').html("全部收合");
        //    $('.all_unfold>a').attr('name', '全部收合');
        //}
    })
})
// 全部展開
// $(function() {
//     $('.all_unfold>a').click(function(e) {
//         $('.result_table table tr td .second_data').stop().slideToggle(function() {
//             if ($('.result_table table tr td .second_data').is(':visible')) {
//                 $('.all_unfold>a').html("全部收合");
//                 $('.all_unfold>a').attr('name', '全部收合');
//                 $('.result_table table tr td .openbtn').stop().addClass('closebtn');
//             } else {
//                 $('.all_unfold>a').html("全部展開");
//                 $('.all_unfold>a').attr('name', '全部展開');
//                 $('.result_table table tr td .openbtn').stop().removeClass('closebtn');
//             }
//         });
//     });
// })
// 全部展開
$(function() {
    $('.all_unfold>a').click(function(e) {
        if ($('.all_unfold>a').html() === "全部展開") {
            $('.result_table table tr td .second_data').stop().slideDown();
            $('.all_unfold>a').html("全部收合");
            $('.all_unfold>a').attr('name', '全部收合');
            $('.result_table table tr td .openbtn').stop().addClass('closebtn');
        } else {
            $('.result_table table tr td .second_data').stop().slideUp();
            $('.all_unfold>a').html("全部展開");
            $('.all_unfold>a').attr('name', '全部展開');
            $('.result_table table tr td .openbtn').stop().removeClass('closebtn');
        }
    });
})
// 後分類更多按鈕
$(function() {
    $(".sort_block").find("li:gt(2)").hide();
    $(".sort_block .more").click(function() {
        const isOpen = $(this).attr("isOpen") == "true" ? "false" : "true";
        $(this).attr("isOpen", isOpen);
        if (isOpen == "true") {
            $(".sort_block").find("li:gt(2)").hide(300);
            $(".sort_block .more").not(this).attr("isOpen", "false")
            $(".sort_block .more a").not(this).removeClass("close_btn").html("更多")
            $(this).prev("ul").find("li").show(300);
            $(this).find("a").addClass("close_btn");
        } else {
            $(".sort_block").find("li:gt(2)").hide(300);
            $(this).find("a").removeClass("close_btn");
        }
        $(this).find("a").html(isOpen == "true" ? "收合" : "更多")
    })
})
// 後分類開關
$(function() {
    $('.sort_switch>a').click(function() {
        $('.search_result_content .content_rightblock').css('right', '0');
        $('body').addClass('fix');
    })
    $('.search_result_content .content_rightblock .close>a').click(function() {
        $('.search_result_content .content_rightblock').css('right', '-100%');
        $('body').removeClass('fix');
    })
})
// 按進階查詢後，高度為auto
$(function() {
    $('.passport_search .tabSet .advancedbtn').click(function() {
        $(this).parents('.passport_search .tabSet').addClass('add_blockheight')
    })
    $('.passport_browse .tabSet .yearbrowsebtn').click(function() {
        $(this).parents('.passport_browse .tabSet').addClass('add_blockheight')
        $(this).parents('.passport_browse_block').addClass('add_blockheight')
    })
})
// 針對 cookie處理 4095 上限字
// 紀錄 checkbox value
$(function() {
    if (location.href.indexOf("sp-tp-result") > 0) {
        //var shareSize = $("#HIDShareSize").val();  // 分享筆數上限
        //var currentCount = parseInt($("#checkedNum").text());
        var TempNum = 0;
        var TempStr = "";
        var checkedbox = []; //宣告陣列存放已經點選的Checkbox值    
        //判斷Cookie是否有寫入
        if (getCookie("ckId") != "") {
            //將寫入的cookie轉換為物件
            checkedbox = JSON.parse(getCookie("ckId"));
            //輪流讀取已存放的值
            $.each(checkedbox, function(i, e) {
                $("input[name=ckDataID]").each(function() {
                    TempStr = $(this).val().substring(0, $(this).val().length - 3); // "_00" 截斷的字                
                    //若發現有同樣的值就勾選
                    if (TempStr === e) {
                        $(this).prop("checked", true);
                        TempNum++;
                    }
                })
            })
            $("#checkedNum").text(JSON.parse(getCookie("ckId")).length);
        }
        //若該頁紀錄已全選，則全選按鈕 打勾
        if (TempNum.toString() === $("#HIDPageSize").val()) {
            $("#clickAll").prop("checked", true);
            $("#select_all").prop("checked", true);
        }
        //勾選單一Checkbox事件
        $("input[name=ckDataID]").change(function() {
            checked = $(this);
            TempStr = checked.val().substring(0, checked.val().length - 3); // _00 截斷的字
            //判斷是否選取
            if ($(this).is(':checked')) {
                // 要修改
                if ((parseInt($("#checkedNum").text()) + 1) > $("#HIDShareSize").val()) {
                    alert("超過分享筆數上限！");
                    $("#clickAll").prop("checked", false);
                    $("#select_all").prop("checked", false);
                    $(this).prop("checked", false);
                    return false;
                }
                //若是已選取狀態則 加入存放值     
                //判斷現有cookie是否已有該值            
                //if (!checkedbox.includes(TempStr)) {
                if (checkedbox.indexOf(TempStr) === -1) {
                    checkedbox.push(TempStr);
                }
            } else {
                //若取消選取則移出值
                $.each(checkedbox, function(i, e) {
                    if (e === TempStr) {
                        checkedbox.splice(i, 1);
                    }
                })
            }
            document.cookie = "ckId=" + JSON.stringify(checkedbox); //encodeURIComponent(_QueryLink);
            // 分享上限
            if (getCookie("ckId") != "") {
                $("#checkedNum").text(JSON.parse(getCookie("ckId")).length);
            }
        })
        //全選Checkbox事件
        $("input[name=clickAll]").change(function() {
            var difNum = 0; // 未加
            var ckData = $("input[name=ckDataID]");
            for (var i = 0; i < ckData.length; i++) {
                if (ckData[i].checked === false) {
                    difNum++;
                }
            }
            if ($(this).is(":checked")) {
                //要修
                if ((parseInt($("#checkedNum").text()) + difNum) > $("#HIDShareSize").val()) {
                    alert("超過分享筆數上限！");
                    $("#clickAll").prop("checked", false);
                    return false;
                }
                $("input[name=ckDataID]").each(function() {
                    $(this).prop("checked", true);
                })
            } else {
                $("input[name=ckDataID]").each(function() {
                    $(this).prop("checked", false);
                })
            }
            //checkedbox.splice(0, checkedbox.length); 
            //因為狀態改變 所以觸發各個的單一選取事件
            $('input[name=ckDataID]').trigger('change');
        })
        // 手機版全選
        $("input[name=select_all]").change(function() {
            var difNum = 0; // 未加
            var ckData = $("input[name=ckDataID]");
            for (var i = 0; i < ckData.length; i++) {
                if (ckData[i].checked === false) {
                    difNum++;
                }
            }
            //判斷是否超過
            if ((parseInt($("#checkedNum").text()) + difNum) > $("#HIDShareSize").val()) {
                alert("超過分享筆數上限！");
                $("#select_all").prop("checked", false);
                return false;
            }
            if ($(this).is(":checked")) {
                $("input[name=ckDataID]").each(function() {
                    $(this).prop("checked", true);
                })
            } else {
                $("input[name=ckDataID]").each(function() {
                    $(this).prop("checked", false);
                })
            }
            //因為狀態改變 所以觸發各個的單一選取事件
            $('input[name=ckDataID]').trigger('change');
        })
    }
})