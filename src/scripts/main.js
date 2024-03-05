const dataDoEvento = new Date("Mar 28, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteOEvento % diaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaAteOEvento % diaEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento encerrado';
    }
}, 1000);