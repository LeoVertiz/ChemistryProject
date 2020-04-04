var getCards = () => {
    for(let i = 0; i < components.length; i++){
        let component = components[i];
        let containerId = i < 4 ? 'components1' : 'components2';
        let container = document.getElementById(containerId);
        let theme = (i < 4 && !(i % 2)) || (i >= 4 && i % 2) ? 'bg-dark' : 'bg-secondary' ;
        
        let card = document.createElement('div');
        card.id = 'component' + i;
        card.className = "card col-sm-3 text-white " + theme;

        let image = document.createElement('img');
        image.src = './Images/Components/' + component.img;
        image.className = 'card-img-top';

        let content = document.createElement('div');
        content.className = 'card-body';

        let title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = component.title;
        content.appendChild(title);

        let text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = component.text;
        content.appendChild(text);

        let button = document.createElement('a');
        button.className = 'btn btn-primary';
        button.href = '#';
        button.textContent = 'La quimica de ' + component.title;
        button.addEventListener('click', () => handleClick(i));
        content.appendChild(button);

        card.appendChild(image);
        card.appendChild(content);
        container.appendChild(card);
    }
}

var handleClick = i => {
    state.curComponent = components[i];
    let component = state.curComponent;
    document.getElementById('ccTitle').textContent = component.title;
    document.getElementById('ccDesc').textContent = component.text;
    document.getElementById('ccImg').src = './Images/Components/' + component.img;

    
    if(component.elements)
        for(let i = 0; i < component.elements.length; i++) {
            let element = component.elements[i];
            let lis = document.createElement('li');
            let as = document.createElement('button');
            as.href = '#';
            as.innerHTML = '<i class="fas fa-atom"></i> ' + element;
            if(i%5 == 1) as.className = 'btn btn-outline-warning btn-lg';
            else if(i%5 == 2) as.className = 'btn btn-outline-success btn-lg';
            else if(i%5 == 3) as.className = 'btn btn-outline-danger btn-lg';
            else if(i%5 == 4) as.className = 'btn btn-outline-dark btn-lg';
            else as.className = 'btn btn-outline-info btn-lg';
            lis.appendChild(as);
            document.getElementById('ccElements').appendChild(lis);
        }
    showCurComponent();
}