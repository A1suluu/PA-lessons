function showCoods (event){
    setTimeout(() => {
        var x = event.clientX;
        var y = event.clientY;
        const ball = document.getElementById("ball")
        ball.style.top = y + "px"
        ball.style.left = x + "px"
    }, 300);
}
