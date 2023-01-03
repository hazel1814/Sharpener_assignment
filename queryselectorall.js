let output=document.querySelectorAll('.list-group-item')
output[1].style.color="green"

let odd=document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green"
}
