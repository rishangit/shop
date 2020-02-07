var CustomInit = function () {
    $.typeahead({
        input: '.js-typeahead-user_v1',
        minLength: 1,
        order: "asc",
        dynamic: true,
        delay: 500,
        backdrop: {
            "background-color": "#fff"
        },
        template: function (query, item) {

            var color = "#777";
            if (item.status === "owner") {
                color = "#ff1493";
            }

            return '<span class="row">' +
                '<span class="avatar">' +
                '<img src="{{avatar}}">' +
                "</span>" +
                '<span class="username">{{username}} <small style="color: ' + color + ';">({{status}})</small></span>' +
                '<span class="id">({{id}})</span>' +
                "</span>"
        },
        emptyTemplate: "no result for {{query}}",
        source: {
            user: {
                display: "username",
                href: "https://www.github.com/{{username|slugify}}",
                data: [{
                    "id": 415849,
                    "username": "an inserted user that is not inside the database",
                    "avatar": "https://avatars3.githubusercontent.com/u/415849",
                    "status": "contributor"
                }],
                ajax: function (query) {
                    return {
                        type: "GET",
                        url: "/jquerytypeahead/user_v1.json",
                        path: "data.user",
                        data: {
                            q: "{{query}}"
                        },
                        callback: {
                            done: function (data) {
                                for (var i = 0; i < data.data.user.length; i++) {
                                    if (data.data.user[i].username === 'running-coder') {
                                        data.data.user[i].status = 'owner';
                                    } else {
                                        data.data.user[i].status = 'contributor';
                                    }
                                }
                                return data;
                            }
                        }
                    }
                }

            },
            project: {
                display: "project",
                href: function (item) {
                    return '/' + item.project.replace(/\s+/g, '').toLowerCase() + '/documentation/'
                },
                ajax: [{
                    type: "GET",
                    url: "/jquerytypeahead/user_v1.json",
                    data: {
                        q: "{{query}}"
                    }
                }, "data.project"],
                template: '<span>' +
                    '<span class="project-logo">' +
                    '<img src="{{image}}">' +
                    '</span>' +
                    '<span class="project-information">' +
                    '<span class="project">{{project}} <small>{{version}}</small></span>' +
                    '<ul>' +
                    '<li>{{demo}} Demos</li>' +
                    '<li>{{option}}+ Options</li>' +
                    '<li>{{callback}}+ Callbacks</li>' +
                    '</ul>' +
                    '</span>' +
                    '</span>'
            }
        },
        callback: {
            onClick: function (node, a, item, event) {

                // You can do a simple window.location of the item.href
                alert(JSON.stringify(item));

            },
            onSendRequest: function (node, query) {
                console.log('request is sent')
            },
            onReceiveRequest: function (node, query) {
                console.log('request is received')
            }
        },
        debug: true
    });
}

CustomInit.prototype.init = function (param) {

    "use strict"; var e = $("body"); $(function () { $(".preloader").fadeOut(), $("#side-menu").metisMenu() }), $(".open-close").on("click", function () { e.toggleClass("show-sidebar").toggleClass("hide-sidebar"), $(".sidebar-head .open-close i").toggleClass("ti-menu") }), $(".right-side-toggle").on("click", function () { $(".right-sidebar").slideDown(50).toggleClass("shw-rside"), $(".fxhdr").on("click", function () { e.toggleClass("fix-header") }), $(".fxsdr").on("click", function () { e.toggleClass("fix-sidebar") }); var i = $(".fxhdr"); e.hasClass("fix-header") ? i.attr("checked", !0) : i.attr("checked", !1) }), $(function () { var i = function () { var i = 60, l = window.innerWidth > 0 ? window.innerWidth : this.screen.width, s = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1; 768 > l ? ($("div.navbar-collapse").addClass("collapse"), i = 100) : $("div.navbar-collapse").removeClass("collapse"), 1170 > l ? (e.addClass("content-wrapper"), $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible")) : e.removeClass("content-wrapper"), s -= i, 1 > s && (s = 1), s > i && $("#page-wrapper").css("min-height", s + "px") }, l = window.location, s = $("ul.nav a").filter(function () { return this.href === l || 0 === l.href.indexOf(this.href) }).addClass("active").parent().parent().addClass("in").parent(); s.is("li") && s.addClass("active"), $(window).ready(i), $(window).bind("resize", i) }), function (e, i, l) { var s = '[data-perform="panel-collapse"]', n = '[data-perform="panel-dismiss"]'; e(s).each(function () { var i = { toggle: !1 }, l = e(this).closest(".panel"), s = l.find(".panel-wrapper"), n = e(this).children("i"); s.length || (s = l.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"), i = {}), s.collapse(i).on("hide.bs.collapse", function () { n.removeClass("ti-minus").addClass("ti-plus") }).on("show.bs.collapse", function () { n.removeClass("ti-plus").addClass("ti-minus") }) }), e(l).on("click", s, function (i) { i.preventDefault(); var l = e(this).closest(".panel"), s = l.find(".panel-wrapper"); s.collapse("toggle") }), e(l).on("click", n, function (i) { function s() { var i = l.parent(); l.remove(), i.filter(function () { return e(this).is('[class*="col-"]') && 0 === e(this).children("*").length }).remove() } i.preventDefault(); var l = e(this).closest(".panel"); s() }) }(jQuery, window, document), $(function () { $('[data-toggle="tooltip"]').tooltip() }), $(function () { $('[data-toggle="popover"]').popover() }), $(".list-task li label").on("click", function () { $(this).toggleClass("task-done") }), $(".settings_box a").on("click", function () { $("ul.theme_color").toggleClass("theme_block") }), $(".collapseble").on("click", function () { $(".collapseblebox").fadeToggle(350) }), $(".slimscrollright").slimScroll({ height: "100%", position: "right", size: "5px", color: "#dcdcdc" }), $(".slimscrollsidebar").slimScroll({ height: "100%", position: "right", size: "6px", color: "rgba(0,0,0,0.3)" }), $(".chat-list").slimScroll({ height: "100%", position: "right", size: "0px", color: "#dcdcdc" }), e.trigger("resize"), $(".visited li a").on("click", function (e) { $(".visited li").removeClass("active"); var i = $(this).parent(); i.hasClass("active") || i.addClass("active"), e.preventDefault() }), $("#to-recover").on("click", function () { $("#loginform").slideUp(), $("#recoverform").fadeIn() }), $(".navbar-toggle").on("click", function () { $(".navbar-toggle i").toggleClass("ti-menu").addClass("ti-close") })

}

CustomInit.prototype.select2 = function (param) {
    // For select 2
    $(".select2").select2();
    $('.selectpicker').selectpicker();
}

CustomInit.prototype.typehead = function (param) {

    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    //ar states = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","Åland","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthélemy","Bermuda","Brunei","Bolivia","Bonaire","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos [Keeling] Islands","Congo","Central African Republic","Republic of the Congo","Switzerland","Ivory Coast","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curacao","Christmas Island","Cyprus","Czechia","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","United Kingdom","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and the South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","Saint Martin","Madagascar","Marshall Islands","Macedonia","Mali","Myanmar [Burma]","Mongolia","Macao","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn Islands","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","Réunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","São Tomé and Príncipe","El Salvador","Sint Maarten","Syria","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","U.S. Minor Outlying Islands","United States","Uruguay","Uzbekistan","Vatican City","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","U.S. Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Kosovo","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"];;
    states = param;

    $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
        {
            name: 'states',
            source: substringMatcher(states)
        });

    // ---------- Bloodhound ----------

    // constructs the suggestion engine
    var states = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `states` is an array of state names defined in "The Basics"
        local: states
    });

    $('#bloodhound .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
        {
            name: 'states',
            source: states
        });


    // -------- Prefatch --------

    var countries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // url points to a json file that contains an array of country names, see
        // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
        prefetch: '../plugins/bower_components/typeahead.js-master/countries.json'
    });

    // passing in `null` for the `options` arguments will result in the default
    // options being used
    $('#prefetch .typeahead').typeahead(null, {
        name: 'countries',
        source: countries
    });

    // -------- Custom --------

    var nflTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        identify: function (obj) { return obj.team; },
        prefetch: '../plugins/bower_components/typeahead.js-master/nfl.json'
    });

    function nflTeamsWithDefaults(q, sync) {
        if (q === '') {
            sync(nflTeams.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'));
        }

        else {
            nflTeams.search(q, sync);
        }
    }

    $('#default-suggestions .typeahead').typeahead({
        minLength: 0,
        highlight: true
    },
        {
            name: 'nfl-teams',
            display: 'team',
            source: nflTeamsWithDefaults
        });

    // -------- Multiple --------

    var nbaTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '../plugins/bower_components/typeahead.js-master/nba.json'
    });

    var nhlTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '../plugins/bower_components/typeahead.js-master/nhl.json'
    });

    $('#multiple-datasets .typeahead').typeahead({
        highlight: true
    },
        {
            name: 'nba-teams',
            display: 'team',
            source: nbaTeams,
            templates: {
                header: '<h3 class="league-name">NBA Teams</h3>'
            }
        },
        {
            name: 'nhl-teams',
            display: 'team',
            source: nhlTeams,
            templates: {
                header: '<h3 class="league-name">NHL Teams</h3>'
            }
        });

    // -------- Scrollable --------


    $('#scrollable-dropdown-menu .typeahead').typeahead(null, {
        name: 'states',
        limit: 10,
        source: states
    });
}

CustomInit.prototype.sweetalert = function (param) {
    swal(param);
}

CustomInit.prototype.sweetalertClose = function (param) {
    swal.close()
}

CustomInit.prototype.stylishTab = function () {
    [].slice.call(document.querySelectorAll('.sttabs')).forEach(function(el) {
        new CBPFWTabs(el);
    });
}

// CustomInit.prototype.sweetalert = function () {

//     "use strict";




//         var SweetAlert = function() {};


//         this.custom = function (param) {
//             swal(param);
//         }

//         this.close = function (param) {
//             swal.close()
//         }
//         //examples 
//         SweetAlert.prototype.init = function() {
//         //Basic
//         $('#sa-basic').click(function(){
//             swal("Here's a message!");
//         });

//         //A title with a text under
//         $('#sa-title').click(function(){
//             swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.")
//         });

//         //Success Message
//         $('#sa-success').click(function(){
//             swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.", "success")
//         });

//         //Warning Message
//         $('#sa-warning').click(function(){
//             swal({   
//                 title: "Are you sure?",   
//                 text: "You will not be able to recover this imaginary file!",   
//                 type: "warning",   
//                 showCancelButton: true,   
//                 confirmButtonColor: "#DD6B55",   
//                 confirmButtonText: "Yes, delete it!",   
//                 closeOnConfirm: false 
//             }, function(){   
//                 swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
//             });
//         });

//         //Parameter
//         $('#sa-params').click(function(){
//             swal({   
//                 title: "Are you sure?",   
//                 text: "You will not be able to recover this imaginary file!",   
//                 type: "warning",   
//                 showCancelButton: true,   
//                 confirmButtonColor: "#DD6B55",   
//                 confirmButtonText: "Yes, delete it!",   
//                 cancelButtonText: "No, cancel plx!",   
//                 closeOnConfirm: false,   
//                 closeOnCancel: false 
//             }, function(isConfirm){   
//                 if (isConfirm) {     
//                     swal("Deleted!", "Your imaginary file has been deleted.", "success");   
//                 } else {     
//                     swal("Cancelled", "Your imaginary file is safe :)", "error");   
//                 } 
//             });
//         });

//         //Custom Image
//         $('#sa-image').click(function(){
//             swal({   
//                 title: "Govinda!",   
//                 text: "Recently joined twitter",   
//                 imageUrl: "../plugins/images/users/govinda.jpg" 
//             });
//         });

//         //Auto Close Timer
//         $('#sa-close').click(function(){
//              swal({   
//                 title: "Auto close alert!",   
//                 text: "I will close in 2 seconds.",   
//                 timer: 2000,   
//                 showConfirmButton: false 
//             });
//         });


//        },

//     //"use strict";

//     $.SweetAlert.init()

// }

/*Document Ready minified*/
$(document).ready(function () { "use strict"; var e = $("body"); $(function () { $(".preloader").fadeOut(), $("#side-menu").metisMenu() }), $(".open-close").on("click", function () { e.toggleClass("show-sidebar").toggleClass("hide-sidebar"), $(".sidebar-head .open-close i").toggleClass("ti-menu") }), $(".right-side-toggle").on("click", function () { $(".right-sidebar").slideDown(50).toggleClass("shw-rside"), $(".fxhdr").on("click", function () { e.toggleClass("fix-header") }), $(".fxsdr").on("click", function () { e.toggleClass("fix-sidebar") }); var i = $(".fxhdr"); e.hasClass("fix-header") ? i.attr("checked", !0) : i.attr("checked", !1) }), $(function () { var i = function () { var i = 60, l = window.innerWidth > 0 ? window.innerWidth : this.screen.width, s = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1; 768 > l ? ($("div.navbar-collapse").addClass("collapse"), i = 100) : $("div.navbar-collapse").removeClass("collapse"), 1170 > l ? (e.addClass("content-wrapper"), $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible")) : e.removeClass("content-wrapper"), s -= i, 1 > s && (s = 1), s > i && $("#page-wrapper").css("min-height", s + "px") }, l = window.location, s = $("ul.nav a").filter(function () { return this.href === l || 0 === l.href.indexOf(this.href) }).addClass("active").parent().parent().addClass("in").parent(); s.is("li") && s.addClass("active"), $(window).ready(i), $(window).bind("resize", i) }), function (e, i, l) { var s = '[data-perform="panel-collapse"]', n = '[data-perform="panel-dismiss"]'; e(s).each(function () { var i = { toggle: !1 }, l = e(this).closest(".panel"), s = l.find(".panel-wrapper"), n = e(this).children("i"); s.length || (s = l.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"), i = {}), s.collapse(i).on("hide.bs.collapse", function () { n.removeClass("ti-minus").addClass("ti-plus") }).on("show.bs.collapse", function () { n.removeClass("ti-plus").addClass("ti-minus") }) }), e(l).on("click", s, function (i) { i.preventDefault(); var l = e(this).closest(".panel"), s = l.find(".panel-wrapper"); s.collapse("toggle") }), e(l).on("click", n, function (i) { function s() { var i = l.parent(); l.remove(), i.filter(function () { return e(this).is('[class*="col-"]') && 0 === e(this).children("*").length }).remove() } i.preventDefault(); var l = e(this).closest(".panel"); s() }) }(jQuery, window, document), $(function () { $('[data-toggle="tooltip"]').tooltip() }), $(function () { $('[data-toggle="popover"]').popover() }), $(".list-task li label").on("click", function () { $(this).toggleClass("task-done") }), $(".settings_box a").on("click", function () { $("ul.theme_color").toggleClass("theme_block") }), $(".collapseble").on("click", function () { $(".collapseblebox").fadeToggle(350) }), $(".slimscrollright").slimScroll({ height: "100%", position: "right", size: "5px", color: "#dcdcdc" }), $(".slimscrollsidebar").slimScroll({ height: "100%", position: "right", size: "6px", color: "rgba(0,0,0,0.3)" }), $(".chat-list").slimScroll({ height: "100%", position: "right", size: "0px", color: "#dcdcdc" }), e.trigger("resize"), $(".visited li a").on("click", function (e) { $(".visited li").removeClass("active"); var i = $(this).parent(); i.hasClass("active") || i.addClass("active"), e.preventDefault() }), $("#to-recover").on("click", function () { $("#loginform").slideUp(), $("#recoverform").fadeIn() }), $(".navbar-toggle").on("click", function () { $(".navbar-toggle i").toggleClass("ti-menu").addClass("ti-close") }) });

/*Document Ready Unminified for modification
$(document).ready(function () {
    "use strict";
    var e = $("body");
    $(function () {
        $(".preloader").fadeOut(), $("#side-menu").metisMenu()
    }), $(".open-close").on("click", function () {
        e.toggleClass("show-sidebar").toggleClass("hide-sidebar"), $(".sidebar-head .open-close i").toggleClass("ti-menu")
    }), $(".right-side-toggle").on("click", function () {
        $(".right-sidebar").slideDown(50).toggleClass("shw-rside"), $(".fxhdr").on("click", function () {
            e.toggleClass("fix-header")
        }), $(".fxsdr").on("click", function () {
            e.toggleClass("fix-sidebar")
        });
        var i = $(".fxhdr");
        e.hasClass("fix-header") ? i.attr("checked", !0) : i.attr("checked", !1)
    }), $(function () {
        var i = function () {
            var i = 60,
                l = window.innerWidth > 0 ? window.innerWidth : this.screen.width,
                s = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
            768 > l ? ($("div.navbar-collapse").addClass("collapse"), i = 100) : $("div.navbar-collapse").removeClass("collapse"), 1170 > l ? (e.addClass("content-wrapper"), $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible")) : e.removeClass("content-wrapper"), s -= i, 1 > s && (s = 1), s > i && $("#page-wrapper").css("min-height", s + "px")
        },
            l = window.location,
            s = $("ul.nav a").filter(function () {
                return this.href === l || 0 === l.href.indexOf(this.href)
            }).addClass("active").parent().parent().addClass("in").parent();
        s.is("li") && s.addClass("active"), $(window).ready(i), $(window).bind("resize", i)
    }),
        function (e, i, l) {
            var s = '[data-perform="panel-collapse"]',
                n = '[data-perform="panel-dismiss"]';
            e(s).each(function () {
                var i = {
                    toggle: !1
                },
                    l = e(this).closest(".panel"),
                    s = l.find(".panel-wrapper"),
                    n = e(this).children("i");
                s.length || (s = l.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"), i = {}), s.collapse(i).on("hide.bs.collapse", function () {
                    n.removeClass("ti-minus").addClass("ti-plus")
                }).on("show.bs.collapse", function () {
                    n.removeClass("ti-plus").addClass("ti-minus")
                })
            }), e(l).on("click", s, function (i) {
                i.preventDefault();
                var l = e(this).closest(".panel"),
                    s = l.find(".panel-wrapper");
                s.collapse("toggle")
            }), e(l).on("click", n, function (i) {
                function s() {
                    var i = l.parent();
                    l.remove(), i.filter(function () {
                        return e(this).is('[class*="col-"]') && 0 === e(this).children("*").length
                    }).remove()
                }
                i.preventDefault();
                var l = e(this).closest(".panel");
                s()
            })
        }(jQuery, window, document), $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        }), $(function () {
            $('[data-toggle="popover"]').popover()
        }), $(".list-task li label").on("click", function () {
            $(this).toggleClass("task-done")
        }), $(".settings_box a").on("click", function () {
            $("ul.theme_color").toggleClass("theme_block")
        }), $(".collapseble").on("click", function () {
            $(".collapseblebox").fadeToggle(350)
        }), $(".slimscrollright").slimScroll({
            height: "100%",
            position: "right",
            size: "5px",
            color: "#dcdcdc"
        }), $(".slimscrollsidebar").slimScroll({
            height: "100%",
            position: "right",
            size: "6px",
            color: "rgba(0,0,0,0.3)"
        }), $(".chat-list").slimScroll({
            height: "100%",
            position: "right",
            size: "0px",
            color: "#dcdcdc"
        }), e.trigger("resize"), $(".visited li a").on("click", function (e) {
            $(".visited li").removeClass("active");
            var i = $(this).parent();
            i.hasClass("active") || i.addClass("active"), e.preventDefault()
        }), $("#to-recover").on("click", function () {
            $("#loginform").slideUp(), $("#recoverform").fadeIn()
        }), $(".navbar-toggle").on("click", function () {
            $(".navbar-toggle i").toggleClass("ti-menu").addClass("ti-close")
        })
});
*/