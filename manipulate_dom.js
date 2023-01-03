let output=document.querySelector('#items')
//parentelement
console.log(output.parentElement)

//lastelement
console.log(output.lastElementChild)

//firstchild
console.log(output.firstChild)

//firstelentchild
console.log(output.firstElementChild)

//lastchild
console.log(output.lastChild)

//lastelementchild
console.log(output.lastElementChild)

//nextsibling
console.log(output.nextSibling)

//nextelementsibling
console.log(output.nextElementSibling)

//previoussibling
console.log(output.previousSibling)

//previouselementsiblng
console.log(output.previousElementSibling)

//create element
let newdiv=document.createElement('div')
newdiv.className="hello"
console.log(newdiv)

//newdiv.id="hello1"

//create attributes
newdiv.setAttribute('name','hello div')

//textnode
let text=document.createTextNode('Hello world')

//append
newdiv.appendChild(text)

//insert before
/*let container=document.querySelector('#items')
container.insertBefore(li,container.children[0])*/

let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')
container.insertBefore(newdiv,h1)

let container1=document.querySelector('#items')
container1.insertBefore(newdiv,container1.children[0])

/*let result=document.querySelector('#main')
let h2=document.querySelector('h2')
result.insertBefore(newdiv,h2)*/