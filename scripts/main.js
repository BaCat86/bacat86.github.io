const musicLinks = [
			'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/869468482&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/928330162&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1873908861&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1612018959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/26359617&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/765038335&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2128880289&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318624578&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        ];
	const musicCurrentIndex = Math.floor(Math.random() * 7);
	window.addEventListener('load', () => {
		document.getElementById('music-player').src = musicLinks[musicCurrentIndex];
    });

const imgLinks = [
    '../images/miay.png',
    '../images/ashito-no-joe.jpg',
    '../images/pricol.jpg',
    '../images/pricol-2.jpg',
    '../images/pricol-3.png',
];
	const imgCurrentIndex = Math.floor(Math.random() * 4);
	window.addEventListener('load', () => {
		document.getElementById('pic').src = imgLinks[imgCurrentIndex];
    });


// О Боже, они сделали из Кенни пасхалку! Вы - сволочи!
const kmCurrentIndex = Math.floor(Math.random() * 100);
	window.addEventListener('load', () => {
        if (kmCurrentIndex === 1) {
                    document.getElementById('ava-pic').src = '../images/KennyMcCormick.webp';
        }
    });


// Set the date we're counting down to
var countDownDate = new Date("Sep 1, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " д " + hours + " ч "
  + minutes + " м " + seconds + " с";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Собирайте портфели, осень уже наступила";
  }
}, 1000);

// let reviewcontainer = document.getElementById("all-review");
// let reviewchildren = reviewcontainer.children;
// let reviewindex = Math.floor(Math.random() * reviewchildren.length);

// for(let i = 0; i < reviewchildren.length; i++) {
//     if(reviewindex != i) {
//         reviewchildren[i].style.display= "none";
//     }
// }
