/*Puxando os elementos do html e colocando em uma variável*/

const video = document.getElementById("meuvideo")
const mute = document.getElementById("mute")
const pausePlay = document.getElementById("pausePlay")
const restart = document.getElementById("restart")

/*Adicionando uma ação a cada elemento que foi pego anteriormente, a cada click ele ira fazer uma ação*/

/*Muta e desmuta o video*/
mute.addEventListener('click', function muteVideo(){
    if(video.muted == false){
        video.muted = true

        /*Quando o botão for clicado ele vai mudar seu no para Unmute*/ 
        mute.innerHTML = "Unmute"
    }else{
        video.muted = false

        /*Quando o botão for clicado ele vai mudar seu no para Mute*/
        mute.innerHTML = "Mute"
    }
})

/*Dar play e pausar o video*/
pausePlay.addEventListener('click', function pausaPlay(){
    if(video.paused){
        video.play();

        /*Quando o botão for clicado ele vai mudar seu no para Pause*/
        pausePlay.innerHTML = "Pause"
    }else{
        video.pause();

        /*Quando o botão for clicado ele vai mudar seu no para Play*/
        pausePlay.innerHTML = "Play"
    }
})

/*Aqui vai reiniciar o video quando for clicado*/
restart.addEventListener('click', function restartVideo(){
    video.currentTime = 0;
})


