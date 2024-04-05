dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
function dragElement(terrariumElement) {
	//Establece las 4 posiciones en la pantalla
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
        clicks = 0;
        const terrarium = document.getElementsByClassName('dirt');
        let rect1 = terrarium[0].getBoundingClientRect();
        let rect2 = terrariumElement.getBoundingClientRect();
	terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        clicks += 1;
        console.log("Se clickeo "+pos3, pos4);
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
        setTimeout(() => {
            //Si se clickea 2 veces o mas el objeto se manda hacia atras
            if(clicks >= 2){
                terrariumElement.style.zIndex = 2;
                clicks = 0;
                console.log("Se clickeo mas de 2 veces")
            }
            //Manda adelante el objeto que se clickeo una vez
            else if(clicks === 1){
                terrariumElement.style.zIndex = 3;
                clicks = 0;
                console.log("Se clickeo 1 vez")
            }
        }, 500);
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4,"Se arrastro");
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

