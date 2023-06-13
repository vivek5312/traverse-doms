//Traverse Dom//
let itemList=document.querySelector('#items');
//parentnode
console.log(itemList.parentElement);
console.log(itemList.lastElementChild);
console.log(itemList.childNodes);
itemList.childNodes[0].textContent='Hello word';
console.log(itemList.lastChild);
console.log(itemList.children);

     //first Elementchild
 console.log(itemList.firstElementChild);
 //nextsibiling child
 console.log(itemList.nextSibling);
 //nextelementsibiling
 console.log(itemList.nextElementSibling);
 //prviousElementsibiling
 console.log(itemList.previousElementSibling);
 //itemList.previousElementSibling.textContent="hello world";
 //create element
 newDiv=document.createElement('div');
 console.log(newDiv);
 //Add class
 newDiv.className='hello';
 console.log(newDiv);

 //Add id
 newDiv.id='hello1';

 //create text node
 let text=document.createTextNode('hello world');
 console.log(text);
 newDiv.appendChild(text);
 console.log(newDiv);
let it =document.querySelector('#main');
console.log(it);
console.log(it.childNodes);
it.childNodes[4].textContent='Hello word';



 




