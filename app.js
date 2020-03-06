var friends = ['Melissa', 'Zach', 'Shay', 'Jessi', 'Uri'];
var LOC = 'lines of code';
var ITF = LOC + " in the file";
var SOO = 'strikes one out, clears it all out';
document.body.style.backgroundColor = '#c89666';
document.getElementsByTagName('h1')[0].setAttribute('style', 'color: #12343b; text-align: center; box-shadow: 10px 10px 6px 8px #12343b; margin-bottom: 35px;');
function sing() {
    friends.forEach(function (friend) {
        var friendDiv = document.createElement('div');
        var friendHeader = document.createElement('h3');
        friendDiv.className = 'friend';
        friendHeader.innerText = friend;
        friendDiv.append(friendHeader);
        var lines = 99;
        while (lines > 1) {
            var friendParagraph = document.createElement('p');
            friendParagraph.innerText = lines + " " + ITF + ", " + lines + " " + LOC + "; " + friend + " " + SOO + ", " + --lines + " " + ITF + ".";
            friendDiv.append(friendParagraph);
        }
        var finalParagraph = document.createElement('p');
        finalParagraph.innerText = "1 line of code in the file, 1 line of code; " + friend + " " + SOO + ", no more lines of code in the file!";
        friendDiv.append(finalParagraph);
        document.body.append(friendDiv);
    });
    document.querySelectorAll('.friend h3').forEach(function (f) { return f.setAttribute('style', 'text-transform: uppercase; background-color: slategray;'); });
    document.querySelectorAll('p').forEach(function (p) { return p.setAttribute('style', 'background-color: slategray;'); });
}
