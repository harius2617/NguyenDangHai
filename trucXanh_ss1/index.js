const space = 110;
var text = 0;
var countClick = 0;
let firstCard = null;
var backGround = document.createElement("div");
        // cover.setAttribute("class", "cardGame")
        document.body.appendChild(backGround);
        
        // cover.style.position = 'absolute'
for (let col = 0; col < 5; col++) {
    for (let row = 0; row < 4; row++) {
        text++
        var cover = document.createElement("div");
        // cover.setAttribute("class", "cardGame")
        backGround.appendChild(cover);
        cover.style.left = (300 + (space * col)).toString() + 'px';
        cover.style.top = (300 +( row * space)).toString() + 'px';
        cover.style.width = "100px";
        cover.style.height = "100px";
        cover.style.backgroundColor = "orange";
        cover.style.position = 'absolute'
        // cover.indexNum = text;

        var numLabel = document.createElement("num");
        cover.setAttribute("class", "cardGame")
        cover.appendChild(numLabel);
        numLabel.style.position = "absolute";
        numLabel.style.top = "30px";
        numLabel.style.left = "30px";
        numLabel.innerHTML = text.toString();
        numLabel.style.fontSize = "30px";
        // numLabel.indexNum = text;
    }
}
var len = backGround.children.length;

for(let i = 0; i < len; i ++) {
    backGround.children[i].addEventListener('mousedown',this.openCard.bind(this))
}

function openCard(event){
    if (countClick ===2) return;
    var elm = null;
    if(event.target.nodeName === "NUM"){
        elm = event.target.offsetParent;
    } else {
        elm = event.target;
    }
    if(firstCard === elm){
        elm.style.backgroundColor = "orange";
        countClick = 0;
        return;
    }
    const indexNum = event.target.indexNum;
    
    if(countClick === 0) {
        countClick = 1; 
        firstCard = elm;
    } else if (countClick === 1) {
        countClick = 2
        setTimeout(function(){
            elm.style.backgroundColor = "orange";
            firstCard.style.backgroundColor = "orange";
            countClick = 0;
        }, 2000)
    }
    elm.style.backgroundColor = "white"
}


