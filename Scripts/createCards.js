var getCards = () => {
    for(let i = 0; i < components.length; i++){
        let component = components[i];
        let containerId = i < 4 ? 'components1' : 'components2';
        let container = document.getElementById(containerId);
        let theme = (i < 4 && !(i % 2)) || (i >= 4 && i % 2) ? 'bg-dark' : 'bg-secondary' ;
        
        let card = document.createElement('div');
        card.id = 'component' + i;
        card.className = "card col-lg-3 text-white " + theme;

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
        content.appendChild(button);

        card.appendChild(image);
        card.appendChild(content);
        container.appendChild(card);
        card.addEventListener('click', handleClick);
    }
}

var handleClick = e => {
    console.log(e);
}