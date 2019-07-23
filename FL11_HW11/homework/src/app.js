let rootNode = document.getElementById('root');
const button_plus = document.getElementById('pluse');
const action = document.getElementById('action');
const input = document.querySelector('div.input_date');
let header = document.createElement('label');
header.innerHTML = 'Maximum item per list are created';

let count_element = 0;
const max_count = 10;

action.addEventListener('input', () => {
  if (action.value.length !== 0) {
    button_plus.disabled = false;
  }else {
    button_plus.disabled = true;
  }
})

button_plus.addEventListener('click', () => {
    createEl();
})
function createCheck_Box (elem){
  let check_box = document.createElement('button');
  check_box.className = 'material-icons check_box';
  check_box.id = 'check';
  check_box.innerHTML = 'crop_3_2';
  check_box.addEventListener('click',() => {
    check_box.innerHTML = 'done';
  })
  return check_box;
}
function createValue (elem){
  let value = document.createElement('label');
  value.className = 'value';
  value.innerHTML = `${action.value}`;
  action.value = '';
  return value;
}
function createEdit (elem,check_box,value,delet){
  let edit = document.createElement('button');
  edit.className = 'material-icons';
  edit.innerHTML = 'create';
  edit.addEventListener('click', () => {
    if(edit.innerHTML === 'create' ){
      check_box.remove();
      delet.remove();
      value.remove();
      value = document.createElement('input');
      elem.insertBefore(value,edit);
      edit.innerHTML = 'save';
    } else{
      elem.insertBefore(check_box,value);
      let new_value = value.value;
      value.remove();
      value = document.createElement('label');
      value.innerHTML = new_value;
      elem.insertBefore(value,edit);
      elem.appendChild(delet);
      edit.innerHTML = 'create';
    }
  })
  return edit;
}
function createDelet (elem){
  let delet = document.createElement('button');
  delet.className = 'material-icons delet';
  delet.id = 'delet';
  delet.innerHTML = 'delete';
  delet.addEventListener('click',() => {
    if(count_element === 10){
      action.disabled = false;
      button_plus.disabled = false;
      header.remove();
    }
    elem.remove();
    count_element--;
  })
  return delet;
}
function createElem(){
  count_element++;
  let element = document.createElement('div');
  element.className = 'element';
  let check_box = createCheck_Box(element);
  element.appendChild(check_box);
  let value = createValue(element);
  element.appendChild(value);
  let delet = createDelet(element);
  let edit = createEdit(element,check_box,value,delet);
  element.appendChild(edit);
  element.appendChild(delet);
  rootNode.appendChild(element);
  if(count_element === max_count){
    action.disabled = true;
    button_plus.disabled = true;
    rootNode.insertBefore(header,input);
  }
}
