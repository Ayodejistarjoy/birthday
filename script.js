


function press() {
    
    var first = firstName.value
    var second = lastName.value
    if( first == '' && second == ''){
          confirm ("FILL UP PLEASE")
    }
    else if ( first == 'dorcas' && second == "oyedeji"){
        
        console.log("continue");
        img.style.display = 'block'
        end.style.display = 'block'
        end.innerHTML =  " Happy Birthday," + first + " ! 🎉💖 Your presence fills my life with joy and warmth every day. On your special day, I wish you endless happiness, love, and all the beautiful things life has to offer. Cheers to another year of wonderful moments. I love you more than words can express. Here's to celebrating you today and always. Happy Birthday, my dear!" 
        hello.innerHTML = "Hello, welcome " +  first + " ....."

    }
    else{
        end.style.display ='block'
        end.innerHTML = "wait till your birthday"
        hello.innerHTML = "Hello, welcome " + first + " ....."
        img.style.display = 'none'
    }
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    



    
}