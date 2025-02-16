let counterUp = document.querySelectorAll('.counterUp');


arr = Array.from(counterUp)



arr.map((item)=>{

    let counter = 0;

    function count(){
        counter++
    
        item.innerHTML = counter
    
        if (counter==item.dataset.number){
            clearInterval(stop)
        }
    };
    
    let stop = setInterval(function(){
        count();
    }, 500/item.dataset.speed);
});


