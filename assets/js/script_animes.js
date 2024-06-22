
let gon = document.getElementById('gon');
let hisoka = document.getElementById('hisoka');
let montana1 = document.getElementById('montana1');
let brigada = document.getElementById('brigada');
let textHxH = document.getElementById('textHxH');


window.addEventListener('scroll', function(){
    //let tituloHxH = document.getElementById('tituloHxH');
    let tanjiro = document.getElementById('tanjiro');
    let gon = document.getElementById('gon');
    let asta = document.getElementById('asta');
    console.log(this.window.pageYOffset);
    var scrolledY = window.pageYOffset;

    if(scrolledY>=2300){
        let rate = (scrolledY - 2300) * 0.5;
        if(scrolledY <= 2670){
            
            gon.style.transform = 'translate3d(-' + rate + 'px, 0px, 0px)';
           
        }

        if(scrolledY <= 2690){
            tanjiro.style.transform = 'translate3d(-' + rate + 'px,  0px, 0px)';
            asta.style.transform = 'translate3d(-' + rate + 'px, 0px, 0px)';
        }

    }

});
