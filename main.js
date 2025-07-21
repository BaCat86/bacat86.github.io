// const review_window_overlay = document.getElementById("review-window-overlay")
// const review_window = document.getElementById("review-window")

// function showReview() {
//     review_window_overlay.style.display = "block";
// }

// function hideReview() {
//     review_window_overlay.style.display = "none";
// }

// review_window_overlay.addEventListener("click", hideReview);
// review_window.addEventListener("click", (event) =&gt; event.stopPropagation());

let container = document.getElementById("all-music");
let children = container.children;



let index = Math.floor(Math.random() * children.length);

for(let i = 0; i < children.length; i++) {
    if(index != i) {
        children[i].style.display= "none";
    }
}
