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
var dlt = document.querySelector('.dlt');


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
        if (topica.length < 2) {
            for (var k = 0; k < topica.length; k++) {
                if (topica[k][0] == nameReg.value)
                    stt = 4;
            }
            if (stt != 4) {
                topica.push([nameReg.value, attType.value]);
                stt = 1;
            }
        }
        else {
            topicaWt.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    else if (evts.value == "Topic B") {
        if (topicb.length < 2) {
            for (var k = 0; k < topicb.length; k++) {
                if (topicb[k][0] == nameReg.value)
                    stt = 4;
            }
            if (stt != 4) {
                topicb.push([nameReg.value, attType.value]);
                stt = 1;
            }
        }
        else {
            topicbWt.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    else if (evts.value == "Workshop A") {
        if (workshopa.length < 2) {
            for (var k = 0; k < workshopa.length; k++) {
                if (workshopa[k][0] == nameReg.value)
                    stt = 4;
            }
            for (var j = 0; j < workshopb.length; j++) {
                if (workshopb[j][0] == nameReg.value)
                    stt = 3;
            }
            if (stt != 3 && stt != 4) {
                workshopa.push([nameReg.value, attType.value]);
                stt = 1;
            }
        }
        else {
            workshopaWt.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    else if (evts.value == "Workshop B") {
        if (workshopb.length < 2) {
            for (var k = 0; k < workshopb.length; k++) {
                if (workshopb[k][0] == nameReg.value)
                    stt = 4;
            }
            for (var j = 0; j < workshopa.length; j++) {
                console.log(workshopb[j]);
                if (workshopa[j][0] == nameReg.value)
                    stt = 3;
            }
            if (stt != 3 && stt != 4) {
                workshopb.push([nameReg.value, attType.value]);
                stt = 1;
            }
        }
        else {
            workshopbWt.push([nameReg.value, attType.value]);
            stt = 2;
        }
    }
    if (stt == 1) {
        document.querySelector('.stt').innerText = "Successfully Registered!";
    }
    if (stt == 2) {
        document.querySelector('.stt').innerText = "Added to waitlist!";
    }
    if (stt == 3) {
        document.querySelector('.stt').innerText = "Slot Clash. You can't register for this event.";
    }
    if (stt == 4) {
        document.querySelector('.stt').innerText = "You have already registered for this event. You can't redo it.";
    }
    reg.reset();
    document.querySelector('.taconfirmed').innerText = topica;
    document.querySelector('.tbconfirmed').innerText = topicb;
    document.querySelector('.waconfirmed').innerText = workshopa;
    document.querySelector('.wbconfirmed').innerText = workshopb;
    document.querySelector('.tawaitlist').innerText = topicaWt;
    document.querySelector('.tbwaitlist').innerText = topicbWt;
    document.querySelector('.wawaitlist').innerText = workshopaWt;
    document.querySelector('.wbwaitlist').innerText = workshopbWt;
})


del.addEventListener("submit", (e) => {
    e.preventDefault();
    var stt = 0;
    if (evtsDel.value == "Topic A") {
        for (var i = 0; i < topica.length; i++) {
            if (topica[i][0] == nameDel.value) {
                topica.splice(i, 1);
                stt = 1;
            }
        }
        var found = 0;
        for (var j = 0; j < topicaWt.length; j++) {
            if (topicaWt[j][1] === "Special Guest") {
                topica.push([topicaWt[j][0], topicaWt[j][1]])
                topicaWt.splice(j, 1);
                found = 1;
                break;
            }
        }
        if (!found)
            for (var j = 0; j < topicaWt.length; j++) {
                if (topicaWt[j][1] === "Business Person") {
                    topica.push([topicaWt[j][0], topicaWt[j][1]])
                    topicaWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < topicaWt.length; j++) {
                if (topicaWt[j][1] === "Professor") {
                    topica.push([topicaWt[j][0], topicaWt[j][1]])
                    topicaWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < topicaWt.length; j++) {
                if (topicaWt[j][1] === "Student") {
                    topica.push([topicaWt[j][0], topicaWt[j][1]])
                    topicaWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
    }
    else if (evtsDel.value == "Topic B") {
        for (var i = 0; i < topicb.length; i++) {
            if (topicb[i][0] == nameDel.value) {
                topicb.splice(i, 1);
                stt = 1;
            }
        }
        var found = 0;
        for (var j = 0; j < topicaWt.length; j++) {
            if (topicaWt[j][1] === "Special Guest") {
                topica.push([topicaWt[j][0], topicaWt[j][1]])
                topicaWt.splice(j, 1);
                found = 1;
                break;
            }
        }
        if (!found)
            for (var j = 0; j < topicbWt.length; j++) {
                if (topicbWt[j][1] === "Business Person") {
                    topicb.push([topicbWt[j][0], topicbWt[j][1]])
                    topicbWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < topicbWt.length; j++) {
                if (topicbWt[j][1] === "Professor") {
                    topicb.push([topicbWt[j][0], topicbWt[j][1]])
                    topicbWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < topicbWt.length; j++) {
                if (topicbWt[j][1] === "Student") {
                    topicb.push([topicbWt[j][0], topicbWt[j][1]])
                    topicbWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
    }
    else if (evtsDel.value == "Workshop A") {
        for (var i = 0; i < workshopa.length; i++) {
            if (workshopa[i][0] == nameDel.value) {
                workshopa.splice(i, 1);
                stt = 1;
            }
        }
        var found = 0;
        for (var j = 0; j < workshopaWt.length; j++) {
            if (workshopaWt[j][1] === "Special Guest") {
                workshopa.push([workshopaWt[j][0], workshopaWt[j][1]])
                workshopaWt.splice(j, 1);
                found = 1;
                break;
            }
        }
        if (!found)
            for (var j = 0; j < workshopaWt.length; j++) {
                if (workshopaWt[j][1] === "Business Person") {
                    workshopa.push([workshopaWt[j][0], workshopaWt[j][1]])
                    workshopaWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < workshopaWt.length; j++) {
                if (workshopaWt[j][1] === "Professor") {
                    workshopa.push([workshopaWt[j][0], workshopaWt[j][1]])
                    workshopaWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < workshopaWt.length; j++) {
                if (workshopaWt[j][1] === "Student") {
                    workshopa.push([workshopaWt[j][0], workshopaWt[j][1]])
                    workshopaWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
    }
    else if (evtsDel.value == "Workshop B") {
        for (var i = 0; i < workshopb.length; i++) {
            if (workshopb[i][0] == nameDel.value) {
                workshopb.splice(i, 1);
                stt = 1;
            }
        }
        var found = 0;
        for (var j = 0; j < workshopbWt.length; j++) {
            if (workshopbWt[j][1] === "Special Guest") {
                workshopb.push([workshopbWt[j][0], workshopbWt[j][1]])
                workshopbWt.splice(j, 1);
                found = 1;
                break;
            }
        }
        if (!found)
            for (var j = 0; j < workshopbWt.length; j++) {
                if (workshopbWt[j][1] === "Business Person") {
                    workshopb.push([workshopbWt[j][0], workshopbWt[j][1]])
                    workshopbWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < workshopbWt.length; j++) {
                if (workshopbWt[j][1] === "Professor") {
                    workshopb.push([workshopbWt[j][0], workshopbWt[j][1]])
                    workshopbWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
        if (!found)
            for (var j = 0; j < workshopbWt.length; j++) {
                if (workshopbWt[j][1] === "Student") {
                    workshopb.push([workshopbWt[j][0], workshopbWt[j][1]])
                    workshopbWt.splice(j, 1);
                    found = 1;
                    break;
                }
            }
    }
    if (stt == 0) {
        dlt.innerText = "No such data found"
    }
    else if (stt = 1) {
        dlt.innerText = "Deletion Successful!"
    }
    document.querySelector('.taconfirmed').innerText = topica;
    document.querySelector('.tbconfirmed').innerText = topicb;
    document.querySelector('.waconfirmed').innerText = workshopa;
    document.querySelector('.wbconfirmed').innerText = workshopb;
    document.querySelector('.tawaitlist').innerText = topicaWt;
    document.querySelector('.tbwaitlist').innerText = topicbWt;
    document.querySelector('.wawaitlist').innerText = workshopaWt;
    document.querySelector('.wbwaitlist').innerText = workshopbWt;
    del.reset();
})