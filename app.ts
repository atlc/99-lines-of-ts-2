const friends:Array<string> = ['Melissa', 'Zach', 'Shay', 'Jessi', 'Uri'];
const LOC:string = 'lines of code';
const ITF:string = `${LOC} in the file`;
const SOO:string = 'strikes one out, clears it all out';
document.body.style.backgroundColor = '#c89666';
document.getElementsByTagName('h1')[0].setAttribute('style', 'color: #12343b; text-align: center; box-shadow: 10px 10px 6px 8px #12343b; margin-bottom: 35px;')

function sing() {
    friends.forEach(friend => {
        let friendDiv:HTMLDivElement = document.createElement('div');
        let friendHeader:HTMLHeadingElement = document.createElement('h3');
        friendDiv.className = 'friend';
        friendHeader.innerText = friend;
        friendDiv.append(friendHeader);

        let lines:number = 99;
        while (lines > 1) {
            let friendParagraph:HTMLParagraphElement = document.createElement('p');
            friendParagraph.innerText = `${lines} ${ITF}, ${lines} ${LOC}; ${friend} ${SOO}, ${--lines} ${ITF}.`;
            friendDiv.append(friendParagraph);
        }
        let finalParagraph:HTMLParagraphElement = document.createElement('p');
        finalParagraph.innerText = `1 line of code in the file, 1 line of code; ${friend} ${SOO}, no more lines of code in the file!`;
        friendDiv.append(finalParagraph);
        document.body.append(friendDiv);
    });
    document.querySelectorAll('.friend h3').forEach(f => f.setAttribute('style', 'text-transform: uppercase; background-color: slategray;'));
    document.querySelectorAll('p').forEach(p => p.setAttribute('style', 'background-color: slategray;'));
}