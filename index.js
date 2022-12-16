const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement("H1");
document.body.append(newHeader);

newHeader.id = 'victory'

newHeader.textContent('Isaac is the champion')
