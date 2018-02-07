// declare imports here
var p_func = require('./calc/p');
var a_func = require('./calc/a');
var v_func = require('./calc/v');

if (process.argv[2] === 'p') {
    if (!isNaN(process.argv[3])) {
        console.log(p_func.p(process.argv[3]));
    }
    else {
        console.log('Make sure that your last input is a number');
    }
}
else if (process.argv[2] === 'a') {
    if (!isNaN(process.argv[3])) {
        console.log(a_func.a(process.argv[3]));
    }
    else {
        console.log('Make sure that your last input is a number');
    }
}
else if (process.argv[2] === 'v') {
    if (!isNaN(process.argv[3])) {
        console.log(v_func.v(process.argv[3]));
    }
    else {
        console.log('Make sure that your last input is a number');
    }
} else {
    console.log('Make sure that your second input is either p, a, or v');
}


