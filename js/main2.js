let certo = document.querySelector('#certo')
let errado = document.querySelector('#errado')




var sampler = new Tone.Sampler({
	"C3" : "../assets/audio/acertou.mp3",
	"C#3" : "../assets/audio/errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    errado.onclick = function () {

        sampler.triggerAttack('C#3')
        errado.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            errado.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

   

    certo.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        certo.classList.add('animate__flash')

        setTimeout(function () {
            certo.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = '../views/q3.html'
            
        }, 2000)
        
    }
}).toDestination()