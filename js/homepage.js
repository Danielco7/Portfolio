const radius = 100;
const wheel_radius = 400;
const number_of_icons = 7;
const radian_interval = (2 * Math.PI) / number_of_icons;


var currentScrollPos = 0;
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu").style.left = "0";
    } else {
        document.getElementById("menu").style.transition = " 0.5s";
        document.getElementById("menu").style.left = "-80px";
    }
    prevScrollpos = currentScrollPos;
}
function shownav() {
    document.getElementById("menu").style.left = "0px";
}



var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


window.onunload = function () {
    window.scrollTo(0, 0);
    hover()

}
window.onload = function () {
    move()
    lightclick('l5')

}


var shape1 = document.getElementById("shape1");
var length1 = shape1.getTotalLength();
shape1.style.strokeDasharray = length1;
shape1.style.strokeDashoffset = length1;

var shape2 = document.getElementById("shape2");
var length2 = shape2.getTotalLength();
shape2.style.strokeDasharray = length2;
shape2.style.strokeDashoffset = length2;

var shape3 = document.getElementById("shape3");
var length3 = shape3.getTotalLength();
shape3.style.strokeDasharray = length3;
shape3.style.strokeDashoffset = length3;

var shape4 = document.getElementById("shape4");
var length4 = shape4.getTotalLength();
shape4.style.strokeDasharray = length4;
shape4.style.strokeDashoffset = length4;

var shape5 = document.getElementById("shape5");
var length5 = shape5.getTotalLength();
shape5.style.strokeDasharray = length5;
shape5.style.strokeDashoffset = length5;

var shape6 = document.getElementById("shape6");
var length6 = shape6.getTotalLength();
shape6.style.strokeDasharray = length6;
shape6.style.strokeDashoffset = length6;

var shape7 = document.getElementById("shape7");
var length7 = shape7.getTotalLength();
shape7.style.strokeDasharray = length7;
shape7.style.strokeDashoffset = length7;

var shape8 = document.getElementById("shape8");
var length8 = shape8.getTotalLength();
shape8.style.strokeDasharray = length8;
shape8.style.strokeDashoffset = length8;

var hexgon = document.getElementById('hexgon')

var hextext1 = document.getElementById('hextext1')
var hextext2 = document.getElementById('hextext2')

window.addEventListener("scroll", myFunction);

function myFunction() {


    let scrollpercent = (document.documentElement.scrollTop + 790 - hexgon.offsetTop) / (hexgon.scrollHeight + 800 - document.documentElement.clientHeight);

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    function draw(scrollpercent) {
        if (width > 800) {
            hextext1.style.left = `${24 + (scrollpercent * 14)}%`
            hextext2.style.left = `${46 - (scrollpercent * 14)}%`
        }
        else {
            hextext1.style.left = `${6.5 + (scrollpercent * 14)}%`
            hextext2.style.left = `${27 - (scrollpercent * 14)}%`
        }


        var draw = length1 * scrollpercent;
        shape1.style.strokeDashoffset = length1 - draw;

        var draw = length2 * scrollpercent;
        shape2.style.strokeDashoffset = length2 - draw;

        var draw = length3 * scrollpercent;
        shape3.style.strokeDashoffset = length3 - draw;

        var draw = length4 * scrollpercent;
        shape4.style.strokeDashoffset = length4 - draw;

        var draw = length5 * scrollpercent;
        shape5.style.strokeDashoffset = length5 - draw;

        var draw = length6 * scrollpercent;
        shape6.style.strokeDashoffset = length6 - draw;

        var draw = length7 * scrollpercent;
        shape7.style.strokeDashoffset = length7 - draw;

        var draw = length8 * scrollpercent;
        shape8.style.strokeDashoffset = length8 - draw;

    }
    if (scrollpercent < 1.002 && scrollpercent > 0) {
        draw(scrollpercent)
    }
    else if (scrollpercent > 1.002) {
        draw(1.002)
    }
    else {
        draw(0)
    }


}



function lightclick(e) {
    var light = document.getElementById(e)
    var alllights = document.getElementById('light2').children
    for (let i = 0; i < alllights.length; i++) {
        const element = alllights[i];
        if (element.children[0] === light) { continue; }
        if (element.children[0].classList.contains('on')) {
            element.children[0].classList.toggle('on');

            var element2 = element.children[0].id.split('l')[1];
            var expl = 'expl';
            var explnumber = document.getElementById(expl.concat(element2));
            explnumber.classList.toggle('on_explall');
        }

    }
    light.classList.toggle('on');
    var element = e.split('l')[1];
    var expl = 'expl';
    var explnumber = document.getElementById(expl.concat(element));
    explnumber.classList.toggle('on_explall');



};
var momvent
function move(e) {

    var light = document.getElementById('light2').children
    for (let index = 0; index < 7; index++) {
        const element = light[index];
        let element2 = element.children[0].children[0]
        const pos = element.style.transform;
        const pos2 = pos.split('deg)')
        const pos3 = pos2[0].split('rotate(')
        let pos4 = pos3[1]
        let pos5 = -pos3[1]
        let moti = 1
        momvent = setInterval(frame, 0.10);
        function frame() {
            moti++;
            pos4 = Number(pos4) + 0.009;
            pos5 = Number(pos5) - 0.009;
            element.style.transform = 'rotate(' + pos4 + 'deg)';
            element2.style.transform = 'rotate(' + pos5 + 'deg)';

        }
    }
}
function hover(params) {
    clearInterval(momvent);
    momvent = null
}
function NavFunc(number) {
    { number == 1 ? document.getElementById('home').scrollIntoView({ behavior: 'smooth' }) : null }
    { number == 2 ? document.getElementById('project').scrollIntoView({ behavior: 'smooth' }) : null }
    { number == 3 ? document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) : null }
    { number == 4 ? document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) : null }
    { number == 5 ? document.getElementById('light2').scrollIntoView({ behavior: 'smooth' }) : null }
}
const onSendMail = () => {
    window.location.href = 'mailto:danielcohenn9@gmail.com';
}

