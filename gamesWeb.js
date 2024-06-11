function colidiu() {
    let fundoY = 0;
let fundoSpeed = 100; // Velocidade de movimento do fundo

    var largura = nave.width;
    var altura = nave.height;
    return (xNave + largura) > xInimigo &&
    xNave < (xInimigo + largura) &&
    (yNave + altura) > yInimigo &&
    yNave < (yInimigo + altura)
    }
    function movimentaNaveInimigo(tecla) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (tecla == "ArrowLeft") { // Seta para esquerda
    xNave -= 50;
    xNave = Math.max(-180, xNave);

    } else if (tecla == "ArrowRight") { // Seta para direita
    xNave += 50;
    xNave = Math.min(canvas.width - 320, xNave);

    } else if (tecla == "ArrowUp") { // Seta para cima
    yNave -= 50;
    yNave = Math.max(0, yNave);

    } else if (tecla == "ArrowDown") { // Seta para baixo
    yNave += 50;
    yNave = Math.min(canvas.height - nave.height + 70, yNave);


    } else if (tecla == "a") { // Tecla A
    xInimigo -= 50;
    xInimigo = Math.max(-80, xInimigo);

    } else if (tecla == "d") { // Tecla D
    xInimigo += 50;
    xInimigo = Math.min(canvas.width - 226, xInimigo);

    } else if (tecla == "s") { // Tecla W
    yInimigo -= 50;
    yInimigo = Math.max(-150, yInimigo);

    } else if (tecla == "w") { // Tecla S
    yInimigo += 50;
    yNave = Math.min(canvas.height + nave.height + 50, yNave);

    }
    
    ctx.drawImage(nave, xNave, yNave);
    ctx.drawImage(inimigo, xInimigo, yInimigo);
    
    if (colidiu()) {
    alert("Chocou uma com a outra!");
    }
    }