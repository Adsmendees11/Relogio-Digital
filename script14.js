function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');

    if (!msg || !img) {
        console.error('Elementos não encontrados');
        return;
    }

    var data = new Date();

    // Se quiser definir manualmente, altere essas duas variáveis:
    var horaManual = null; // Ex: 14
    var minutoManual = null; // Ex: 20

    var hora = horaManual !== null ? horaManual : data.getHours();
    var minutos = minutoManual !== null ? minutoManual : data.getMinutes();

    // Formatar hora com dois dígitos
    var horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    msg.innerHTML = `Agora são ${horaFormatada}.`; //altera o id msg do HTML

    // Alterar imagem e fundo conforme o horário
    var totalMinutos = hora * 60 + minutos;

    if (totalMinutos < 720) { // antes de 12:00
        img.src = 'morning.png';
        document.body.style.backgroundColor = 'yellow';
    } else if (totalMinutos < 1080) { // antes de 18:00
        img.src = 'afternoon.png';
        document.body.style.backgroundColor = 'orange';
    } else {
        img.src = 'evening.png';
        document.body.style.backgroundColor = 'black';
    }
}