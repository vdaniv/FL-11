let rootNode = document.getElementById('root');

let hea1 = document.createElement('h1');
let txt_h1 = document.createTextNode('TODO Cat List');
hea1.appendChild(txt_h1);
let input = document.createElement('input');
input.setAttribute('placeholder', 'Add New Action');
input.setAttribute('type', 'text');
input.setAttribute('id', 'inputValue1');
let buttonAdd = document.createElement('button');
let txtButtonAdd = document.createTextNode('add_box');
buttonAdd.className = 'material-icons';
buttonAdd.setAttribute('onclick', 'newElement()');
buttonAdd.style.backgroundColor = 'white';
buttonAdd.appendChild(txtButtonAdd);
let hr = document.createElement('hr');
const ten = 10;
const zero = 0;

function newElement() {

    let buttonEdit = document.createElement('button');
    let buttonTxt = document.createTextNode('edit');
    buttonEdit.className = 'material-icons edit';
    buttonEdit.appendChild(buttonTxt);
    let close = document.getElementsByClassName('close');
    let add = document.getElementsByClassName('add');

    let li = document.createElement('li');
    let inputValue = document.getElementById('inputValue1').value;
    let txtNew = document.createTextNode(inputValue);
    let span = document.createElement('span');
    let buttonClose = document.createElement('button');
    let txt = document.createTextNode('delete');

    buttonClose.className = 'material-icons close';
    let buttonClick = document.createElement('button');
    let txtClick = document.createTextNode('crop_din');
    buttonClick.appendChild(txtClick);
    buttonClick.className = 'material-icons add';
    buttonClose.appendChild(txt);
    let ul = document.createElement('ul');
    ul.className = 'myUl';

    if (inputValue === '') {

        alert('You must write something!');

    } else if (close.length === ten) {
        alert('Maximum item per list are created');

    } else {
        li.appendChild(buttonClose);
        li.appendChild(buttonEdit);
        span.appendChild(txtNew);
        li.appendChild(span);
        rootNode.appendChild(li);
        li.appendChild(buttonClick);


    }

    document.getElementById('inputValue1').value = '';
    let i;
    for (i = zero; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';

        }

    }

    for (i = zero; i < add.length; i++) {
        add[i].onclick = function() {
            let div = this;
            div.style.display = 'none';
            let buttonClick = document.createElement('button');
            let txtClick = document.createTextNode('check_box');
            buttonClick.appendChild(txtClick);
            buttonClick.className = 'material-icons add';
            li.appendChild(buttonClick);

        }

    }

    buttonEdit.onclick = function() {
        let input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'inputValue2');
        li.replaceChild(input1, span);

        let buttonSave = document.createElement('button');
        let buttonTxt1 = document.createTextNode('save');
        buttonSave.appendChild(buttonTxt1);
        buttonSave.className = 'material-icons save';
        li.replaceChild(buttonSave, buttonEdit);
        li.removeChild(buttonClick);

        buttonSave.onclick = function() {
            let inputValueEdit = document.getElementById('inputValue2').value;
            let txtEdit = document.createTextNode(inputValueEdit);
            let spanEdit = document.createElement('span');
            spanEdit.appendChild(txtEdit);
            li.replaceChild(spanEdit, input1);
            li.replaceChild(buttonEdit, buttonSave);
            li.appendChild(buttonClick);

        }
    }
}

rootNode.appendChild(hea1);
rootNode.appendChild(input);
rootNode.appendChild(buttonAdd);
rootNode.appendChild(hr);