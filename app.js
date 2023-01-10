const btn = document.querySelector('.talk');

const content = document.querySelector('.content');



function speak(sentence) {

    const text_speak = new SpeechSynthesisUtterance(sentence);



    text_speak.rate = 1;

    text_speak.pitch = 1;



    window.speechSynthesis.speak(text_speak);

}



function wishMe() {

    var day = new Date();

    var hr = day.getHours();



    if(hr >= 0 && hr < 12) {

        speak("Buongiorno ");

    }



    else if(hr == 12) {

        speak("Buonanotte");

    }



    else if(hr > 12 && hr <= 17) {

        speak("Buonpomeriggio");

    }



    else {

        speak("Buona Sera");

    }

}



window.addEventListener('load', ()=>{

    speak("Attendere prego...");

    speak("Mi dica");

    wishMe();

}

)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();



recognition.onresult = (event) => {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;

    speakThis(transcript.toLowerCase());

}



btn.addEventListener('click', ()=>{

    recognition.start();

})



function speakThis(message) {

    const speech = new SpeechSynthesisUtterance();



    speech.text = "I did not understand what you said please try again";



    if(message.includes('hey') || message.includes('hello')) {

        const finalText = "Hello Helpy";

        speech.text = finalText;

    }


    else if(message.includes('come ti chiami')) {

        const finalText = "Io mi chiamo Helpy, un assistente creato da Alessandro, per gestire al meglio l'azienda";

        speech.text = finalText;

    }
    

    else if(message.includes('che cosa fanno')) {

        const finalText = "Nell'impresa noi creiamo robot militari che in caso di guerra aiutano i cittadini nelle situazioni emergenziali e garantiscono loro sicurezza. ";

        speech.text = finalText;

    }
        

    else if(message.includes('quali sono i pacchetti')) {

        const finalText = "C'è il pacchetto base di 10000€ che comprende 5 Droni con la visione termica per saper dove si trovano i cittadini e robot che cercano i cittadini dispersi e li portano in salvo; C'è il pacchetto intermedio di 20000€ che comprende 3 robot che trovano le mine nei campi di guerra e trovano persone disperse negli alluvioni; e C'è il pacchetto completo di 45000€ che comprende un robot che in caso di guerra fa evacuare i cittadini dallo stato e li garantiscono una protezione. ";

        speech.text = finalText;

    }


    else if(message.includes('chi sono i creatori del progetto')) {

        const finalText = "Sono un duo con il sogno di diventare bravi nella robotica e informatica che si occupano della lavorazione dei robot che danno aiuti umanitari smart";

        speech.text = finalText;

    }



    else if(message.includes('apri google')) {

        window.open("https://google.com", "_blank");

        const finalText = "Subito, apro google";

        speech.text = finalText;

    }

    else if(message.includes('ho fame')) {

        window.open("https://glovoapp.com/it/it/", "_blank");

        const finalText = "Subito, vuole ordinare qual'cosa'";

        speech.text = finalText;

    }

    else if(message.includes('voglio cucinare')) {

        window.open("https://www.giallozafferano.it/", "_blank");

        const finalText = "Subito, le faccio vedere qualche ricetta'";

        speech.text = finalText;

    }

    else if(message.includes('voglio vedere qualche alloggio')) {

        window.open("https://www.expedia.it/", "_blank");

        const finalText = "Subito, le faccio vedere qualche alloggio'";

        speech.text = finalText;

    }

    else if(message.includes('voglio vedere qualche notizia')) {

        window.open("https://mediasetinfinity.mediaset.it/programmi-tv/tg5_SE000000000069", "_blank");

        const finalText = "Subito, le faccio vedere qualche notizia'";

        speech.text = finalText;

    }

    
    else if(message.includes('voglio vedere mediaworld')) {

        window.open("https://www.mediaworld.it/", "_blank");

        const finalText = "Subito, le faccio vedere mediaworld'";

        speech.text = finalText;

    }

    
    else if(message.includes('voglio vedere, gli animali')) {

        window.open("https://it.m.wikipedia.org/wiki/Animalia", "_blank");

        const finalText = "Subito, le faccio vedere gli animali'";

        speech.text = finalText;

    }
    
    
    else if(message.includes('blocco note')) {

        window.open("https://free.webnotepad.it/jFhBP8GY", "_blank");

        const finalText = "Subito, ora può scrivere'";

        speech.text = finalText;

    }

    
    else if(message.includes('voglio vedere, degli abiti')) {

        window.open("https://www.zalando.it/abbigliamento-uomo/", "_blank");

        const finalText = "Subito, le faccio vedere degli abiti'";

        speech.text = finalText;

    }

    
    else if(message.includes('voglio vedere gli ardwere')) {

        window.open("https://www.elegoo.com/en-it", "_blank");

        const finalText = "Subito, le faccio vedere gli ardwere'";

        speech.text = finalText;

  
    }
    

    else if(message.includes('apri il sito')) {

        window.open("https://alexnaschetti.wixsite.com/rhaa", "_blank");

        const finalText = "Subito, apro il suo sito";

        speech.text = finalText;

   
   
    }
           

    else if(message.includes('voglio vedere un film')) {

        window.open("https://streamingcommunity.click/marvel-studios-legends/", "_blank");

        const finalText = "Subito, ecco i film, le consiglio la marvel";

        speech.text = finalText;

    }


    else if(message.includes('apri wikipedia')) {

        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");

        const finalText = "Subito, apro wikipedia" + message;

        speech.text = finalText;

    }



    else if(message.includes('che ore sono')) {

        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})

        const finalText = time;

        speech.text = finalText;

    }



    else if(message.includes('che giorno è')) {

        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})

        const finalText = date;

        speech.text = finalText;

    }


    else if(message.includes('apri calcolatrice')) {

        window.open('Calculator:///')

        const finalText = "Apro la calcolatrice";

        speech.text = finalText;

    }
    

    else {

        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");

        const finalText = "Sto cercando " + message + " su google";

        speech.text = finalText;

    }



    speech.volume = 1;

    speech.pitch = 1;

    speech.rate = 1;



    window.speechSynthesis.speak(speech);
}