module.exports.v = function (rad)
{
    var volume = (4 * 3.14 * rad * rad * rad)/3;
    
    var fixedVolume = volume.toFixed(2);

    return 'The volume of a circle with radius '+ rad + ' is ' + fixedVolume;
}