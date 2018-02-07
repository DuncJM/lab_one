module.exports.p = function (rad)
{
    var perimeter = 2 * 3.14 * rad;
    
    var fixedPerimeter = perimeter.toFixed(2);

    return 'The perimeter of a circle with radius '+ rad + ' is ' + fixedPerimeter;
}