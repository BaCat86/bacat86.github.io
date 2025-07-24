// let container = document.getElementById("all-music");
// let children = container.children;



// let index = Math.floor(Math.random() * children.length);

// for(let i = 0; i < children.length; i++) {
//     if(index != i) {
//         children[i].style.display= "none";
//     }
// }


let musiccontainer = document.getElementById("all-music");
let musicchildren = musiccontainer.children;



let musicindex = Math.floor(Math.random() * musicchildren.length);

for(let i = 0; i < musicchildren.length; i++) {
    if(musicindex != i) {
        musicchildren[i].style.display= "none";
    }
}

let piccontainer = document.getElementById("all-pic");
let picchildren = piccontainer.children;



let picindex = Math.floor(Math.random() * picchildren.length);

for(let i = 0; i < picchildren.length; i++) {
    if(picindex != i) {
        picchildren[i].style.display= "none";
    }
}


let reviewcontainer = document.getElementById("all-review");
let reviewchildren = reviewcontainer.children;



let reviewindex = Math.floor(Math.random() * reviewchildren.length);

for(let i = 0; i < reviewchildren.length; i++) {
    if(reviewindex != i) {
        reviewchildren[i].style.display= "none";
    }
}