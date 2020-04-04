var hideCurComponent = () => {
    document.getElementById('ccElements').innerHTML = null;
    document.getElementById('curComponent').className = 'row d-none';
}
var showCurComponent = () => {
    document.getElementById('curComponent').className = 'row';
}
document.getElementById('ccClose').addEventListener('click', () => {
    state.curComponent = null;
    hideCurComponent();
    
});