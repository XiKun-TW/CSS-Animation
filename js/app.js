String.prototype.remove = function (str) {
    return this.toString().replace(new RegExp('(' + str +')+'), '');
}

var bind = function () {
    var hamburgers = document.querySelectorAll('.js-hamburger');
    if (hamburgers) {
        hamburgers.forEach(function (item) {
            item.onclick = function () {
                if (item.className.indexOf('is-active') !== -1) {
                    item.className = item.className.replace(new RegExp('(?:^|\\s)' + 'is-active' + '(?:\\s|$)'), '');
                } else {
                    item.className += " is-active";
                }
            };
        });
    }
};

var Reveal = window.Reveal;

var colors = new Array(
    [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
    if (document.body.className.indexOf('show') === -1 || interv === null) {
        clearBG();
        return;
    }
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    document.querySelectorAll('.backgrounds')[0].style.background = "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))";

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

var interv = null;

const clearBG = () => {
    clearInterval(interv);
    document.querySelectorAll('.backgrounds')[0].style.background = "#222";
    document.body.className = '';
}

function handleShowPanelType(domElement, isShow) {
    if(isShow) {
        domElement.className += ' is-active';
    } else {
        domElement.className = domElement.className.remove(' is-active');
    }
}

function handleFragmentEvents(event, isShow) {
    let dataSet = event.fragment.dataset;
	if(dataSet && dataSet.type) {
        let elements = document.querySelectorAll('.js-' + dataSet.type);
        handleShowPanelType(elements[dataSet.index], isShow); 
    }
}

Reveal.addEventListener( 'fragmentshown', function( event ) {
    handleFragmentEvents(event, true);
} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
	handleFragmentEvents(event, false);
} );

Reveal.addEventListener('other', function () {
    clearBG();
}, false);

Reveal.addEventListener('onend', function () {
    document.body.className = 'show';
    setTimeout(function () {
        if (interv) {
            clearInterval(interv);
            interv = null;
        }
        interv = setInterval(updateGradient, 10);
    }, 1000);
}, false);

window.onload = function () {
    bind();
};