// import _ from 'lodash'; 
// import './style.css';
// import svg from './runkit.svg';
// import printMe from './print.js';
import { cube } from './math.js';

function component() {
    // var element = document.createElement('div');
    var element = document.createElement('pre');
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['hello','webpack'],' ');

    // btn.innerHTML = 'Click me and check the console!';
    element.innerHTML = [
        'Hello Webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    // btn.onclick = printMe;

    // element.appendChild(btn);
    // element.classList.add('hello');

    // Add the image to our existing div
    // var mySvg = new Image();
    // mySvg.src = svg;

    // element.appendChild(mySvg);

    return element;
}

document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./print.js', function() {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }