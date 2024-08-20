alert('test');

setTimeout(() => document.getElementsByClassName('name')[0].innerHTML = 'change name long', 3000)

setTimeout(() => document.getElementsByClassName('name')[1].innerHTML = '', 8000)

alert(6+6 )

console.log('output')

var para = document.createElement('p')

for(i = 0 ; i < 10 ; i++)
{
    console.log(i, document.getElementsByClassName('name')[0].innerHTML[i]);
    para.innerText += document.getElementsByClassName('name')[0].innerHTML[i];
}
document.body.append(para)