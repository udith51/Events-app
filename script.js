var reg = document.querySelector('.reg');
var evts = document.querySelector('#evts');
var evtsDel = document.querySelector('#evtsDel');

var nameReg = document.querySelector('.nameReg');
var nameDel = document.querySelector('.nameDel');
var attType = document.querySelector('#attType');
var attTypeDel = document.querySelector('#attTypeDel');
var view = document.querySelector('.view');
var out = document.querySelector('.out');
var del = document.querySelector('.del');


var topica = [];
var topicaWt = [];
var topicb = [];
var topicbWt = [];
var workshopa = [];
var workshopaWt = [];
var workshopb = [];
var workshopbWt = [];
reg.addEventListener("submit", (e) => {
    e.preventDefault();
    var stt = 0;
    if (evts.value == "Topic A") {
        if (topica.length < 50) {
            topica.push([nameReg.value, attType.value]);
            stt = 1;
        }
        else {
            topicaWt.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    else if (evts.value == "Topic B") {
        if (topicb.length < 50) {
            topicb.push([nameReg.value, attType.value]);
            stt = 1;
        }
        else {
            topicb.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    else if (evts.value == "Workshop A") {
        if (workshopa.length < 50) {
            workshopa.push([nameReg.value, attType.value]);
            stt = 1;
        }
        else {
            topicb.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    else if (evts.value == "Workshop B") {
        if (workshopb.length < 50) {
            workshopb.push([nameReg.value, attType.value]);
            stt = 1;
        }
        else {
            topicb.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    console.log(stt);
    if (stt == 1) {
        reg.reset();
        document.querySelector('.stt').innerText = "Successfully Registered";
    }
    if (stt == 2) {
        reg.reset();
        document.querySelector('.stt').innerText = "Added to waitlist";
    }
    console.log(topica);
    console.log(topicb);
    console.log(workshopa);
    console.log(workshopb);
    console.log(document.querySelector('.taconfirmed'));
    document.querySelector('.taconfirmed').innerText = topica;
    document.querySelector('.tbconfirmed').innerText = topicb;
    document.querySelector('.waconfirmed').innerText = workshopa;
    document.querySelector('.wbconfirmed').innerText = workshopb;
    document.querySelector('.tawaitlist').innerText = topicaWt;
    document.querySelector('.tbwaitlist').innerText = topicbWt;
    document.querySelector('.wawaitlist').innerText = workshopaWt;
    document.querySelector('.wbwaitlist').innerText = workshopbWt;
})


del.addEventListener("submit", () => {
    e.preventDefault();
    console.log(evtsDel.value);
    if (evtsDel.value == "Topic A") {
        for (var i = 0; i < topica.length; i++) {
            if (topica[i][0] == nameDel) {
                topica.splice(i, 1);
            }
        }
    }
    else if (evtsDel.value == "Topic B") {
        for (var i = 0; i < topicb.length; i++) {
            if (topicb[i][0] == nameDel) {
                topicb.splice(i, 1);
            }
        }
    }
    else if (evtsDel.value == "Workshop A") {
        for (var i = 0; i < workshopa.length; i++) {
            if (workshopa[i][0] == nameDel) {
                workshopa.splice(i, 1);
            }
        }
    }
    else if (evtsDel.value == "Workshop B") {
        for (var i = 0; i < workshopb.length; i++) {
            if (workshopb[i][0] == nameDel) {
                workshopb.splice(i, 1);
            }
        }
    }
    document.querySelector('.taconfirmed').innerText = topica;
    document.querySelector('.tbconfirmed').innerText = topicb;
    document.querySelector('.waconfirmed').innerText = workshopa;
    document.querySelector('.wbconfirmed').innerText = workshopb;
    document.querySelector('.tawaitlist').innerText = topicaWt;
    document.querySelector('.tbwaitlist').innerText = topicbWt;
    document.querySelector('.wawaitlist').innerText = workshopaWt;
    document.querySelector('.wbwaitlist').innerText = workshopbWt;
})