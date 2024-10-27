const balls = document.getElementsByClassName("ball");
const eyes = document.getElementsByClassName("eye");

document.onmousemove = function(event) {
    let x = (event.clientX * 100) / window.innerWidth + "%";
    let y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = `translate(-${x}, -${y})`;
    }
};

// Gözlerin rastgele "sinirli" veya "şaşkın" ifade göstermesi
function randomExpression() {
    const expression = Math.random() < 0.5 ? 'angry' : 'surprised'; // %50 şans ile sinirli veya şaşkın

    for (let i = 0; i < balls.length; i++) {
        balls[i].classList.add(expression);
        eyes[i].classList.add(expression); // .eye sınıfına ifadeyi ekle
    }

    // 30 saniye sonra ifadeleri kaldırma
    setTimeout(() => {
        for (let i = 0; i < balls.length; i++) {
            balls[i].classList.remove('angry', 'surprised');
            eyes[i].classList.remove('angry', 'surprised'); // .eye sınıfından ifadeyi kaldır
        }
    }, 30000); // 30 saniye sonra sınıfları kaldır
}

// Her 10-15 saniyede bir randomExpression tetikleme
setInterval(randomExpression, Math.random() * 5000 + 10000); // 10-15 saniye aralığında rastgele
