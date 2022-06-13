const container = document.querySelector('.container');

for(i=0; i<8; i++){
    for(j=0; j<8; j++){
        const div = document.createElement('div' + i);
        div.innerHTML = "t";
        div.setAttribute('class', 'div')
        container.appendChild(div);
    }
}