module.exports.a = (rad) =>
{
    var area = 3.14 * rad * rad;
    
    var fixedArea = area.toFixed(2);

    return 'The area of a circle with radius '+ rad + ' is ' + fixedArea;
}