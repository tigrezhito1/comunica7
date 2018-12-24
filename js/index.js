var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

$('.selector button').click(function(e) {
    toggleOptions($(this).parent());
});

setTimeout(function() { toggleOptions('.selector'); }, 100);

$('.selector1 button').click(function(e) {
    toggleOptions($(this).parent());
});

setTimeout(function() { toggleOptions('.selector1'); }, 100);

$('.cobro button').click(function(e) {
    toggleOptions($(this).parent());
});

setTimeout(function() { toggleOptions('.cobro'); }, 100);
setTimeout(function() { toggleOptions('.informar'); }, 100);

setTimeout(function() { toggleOptions('.consultas'); }, 100);
setTimeout(function() { toggleOptions('.solicitud'); }, 100);

setTimeout(function() { toggleOptions('.emergencias'); }, 100);


setTimeout(function() { toggleOptions('.ayuda'); }, 100);

setTimeout(function() { toggleOptions('.entretener'); }, 100);