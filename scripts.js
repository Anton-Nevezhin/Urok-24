const mas = ['Маша',"Саша","Паша","Гена","Вова"]

function classPlus() {
   const elem = document.getElementById('elem1')
   elem.innerHTML = elem.classList + '<br>'
   elem.classList.add('www')
   elem.innerHTML += elem.classList
}

function classMinus() {
   const elem = document.getElementById('elem2')
   elem.innerHTML = elem.classList + '<br>'
   elem.classList.remove('www')
   elem.innerHTML += elem.classList
}

function classNal() {
   const elem = document.getElementById('elem3')
   elem.innerHTML = elem.classList + '<br>'
   const a = elem.classList.contains('www')
   elem.innerHTML += a
}

function classTrig() {
   const elem = document.getElementById('elem4')
   elem.innerHTML = elem.classList + '<br>'
   const a = elem.classList.contains('www')
   if (a == true) {
      elem.classList.remove('www')
   } else {
      elem.classList.add('www')
   }
   elem.innerHTML += elem.classList
}

function classCol() {
   const elem = document.getElementById('elem5')
   const col = elem.classList.length
   elem.innerHTML = col
}

function classAlert() {
   const elem = document.getElementById('elem6')
   for (let i = 0; i<elem.classList.length; i++) {
      alert(elem.classList[i])
   }
}

function stiles() {
   const elem = document.getElementById('cssText')
   elem.style.cssText = 'color:red; font-size: 30px; border: 2px double green; line-height: 40px;'
}

function showTeg(elem) {
   const t = elem.tagName
   elem.innerHTML = t
}

function showTeg1(elem) {
   let t = elem.tagName
   t = t.toLowerCase()
   elem.innerHTML = t
}

function endTeg() {
   let l = document.querySelector('div.ww')
   let t = l.tagName
   t = t.toLowerCase()
   let s = l.outerHTML
   document.getElementById('endTeg').innerHTML = s//l.outerHTML
}

function  endLi() {
   const elem = document.getElementById('endLi')
   const li = document.createElement('li')
   li.innerHTML = 'пункт'
   elem.appendChild(li)
}

function masLi() {
   const elem = document.getElementById('masLi')
   for (let i=0; i<mas.length; i++) {
      const li = document.createElement('li')
      li.innerHTML = mas[i]
      elem.appendChild(li)
   }
}


function liOut() {
   const elems = document.getElementsByClassName(li.liclick)
   for (i=0; i<elems.length;i++) {
      document.getElementById('clickOut').innerHTML = elems[i].innerHTML
//      elems[i].click = func1()
   }
//   document.getElementById('clickOut').innerHTML = elem.innerHTML
}

function clickOut() {
   const elem = document.getElementById('masClick')
   for (i=0; i<mas.length; i++) {
      const li = document.createElement('li')
      li.innerHTML = mas[i]
      li.onclick = function() {
            document.getElementById('clickOut').innerHTML = li.innerHTML
      }
      li.id='liClick'
      elem.appendChild(li)
   }
}

function liBefore() {
   const elem = document.getElementById('ulBefore')
   const liPust = document.getElementById('liBefore')
   const li = document.createElement('li')
   li.innerHTML = '!!!'
   elem.insertBefore(li, liPust)
}

function divBefore() {
   const elem = document.getElementById('divBefore')
   elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>')
}

function afterEnd() {
   const elem = document.getElementById('divAfter')
   elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>')
}

function afterBegin() {
   const elem = document.getElementById('divBegin')
   elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>')
}

function endBefore() {
   const elem = document.getElementById('divEnd')
   elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>')
}

function potFirst() {
   const elem = document.getElementById('potFirst')
   const child = elem.firstElementChild
   child.style.cssText = 'color:red;'
}

function potEnd() {
   const elem = document.getElementById('potEnd')
   const child = elem.lastElementChild
   child.style.cssText = 'color:red;'
}

function potAll() {
   const elem = document.getElementById('potAll')
   const elems = elem.children
   for (i of elems) {
      i.innerHTML = i.innerHTML += '!'
   }
}

function sibPre() {
   const elem = document.getElementById('sibPre')
   const sibPre = elem.previousElementSibling
   sibPre.innerHTML += '!'
}

function sibNext() {
   const elem = document.getElementById('sibNext')
   const sibNext = elem.nextElementSibling
   sibNext.innerHTML += '!'
}

function sibNextNext() {
   const elem = document.getElementById('sibNextNext')
   const sibNext = elem.nextElementSibling
   const sibNextNext = sibNext.nextElementSibling
   sibNextNext.innerHTML += '!'
}

function poiskPar() {
   const elem = document.getElementById('poiskPar')
   const parent = elem.parentElement
   parent.style.cssText = 'color:red;'
}

function poiskParPar() {
   const elem = document.getElementById('poiskParPar')
   const parent = elem.parentElement
   const parentPar = parent.parentElement
   parentPar.style.cssText = 'color:red;'
}

function chUdal() {
   const elem = document.getElementById('chPar')
   const child = document.getElementById('chUdal')
   elem.removeChild(child)
}

function chEndUdal() {
   const elem = document.getElementById('chEndUdal')
   const child = elem.lastElementChild
   elem.removeChild(child)
}

function selfUdal() {
   const elem = document.getElementById('selfUdal')
   const parent = elem.parentElement
   parent.removeChild(elem)
}

function chThisUdal(elem) {
   const parent = elem.parentElement
   parent.removeChild(elem)
}

function elCopy() {
   const elem = document.getElementById('elCopy')
   const parent = elem.parentElement
   const elemNew = elem.cloneNode(true)
   parent.appendChild(elemNew)
 //  parent.insertAdjacentHTML('beforebegin,elemNew')
}

function spisPlus() {
   const elemUl = document.createElement('ul')
   const elem = document.getElementById('spisPlus')
   elem.appendChild(elemUl)
   for (let i=0; i<mas.length; i++) {
      const elemLi = document.createElement('li')
      elemLi.innerHTML = mas[i]
      elemUl.appendChild(elemLi)
   }
}

function plusCopy() {
   const elem = document.getElementById('plusCopy')
   const parent = elem.parentElement
   const elemNew = elem.cloneNode(true)
   parent.appendChild(elemNew)
 //  parent.insertAdjacentHTML('afterBegin, elemNew')
}

function inpNew() {
   const elem = document.getElementById('inpNew')
   const parent = document.getElementById('divNew')
   const str = elem.value
   const masNew = str.split('')
   for (let i=0; i<masNew.length; i++) {
      const inpNew = document.createElement('input')
      inpNew.value = masNew[i]
      parent.appendChild(inpNew)
   }
}

function skrPar() {
   const elem = document.getElementById('skrPar')
   const parent = elem.parentElement
   parent.style.display = 'none'
}

function primer()
{
 //   var name = document.getElementById("fullName").value;
    document.getElementById("feedBack").innerHTML = 9
 //   mas.push(name)
//    document.getElementById("fullName").value = ''
//    for (let i=0; i<mas.length; i++) {
//        document.getElementById("feedBack").innerHTML = document.getElementById("feedBack").innerHTML+    '<br/>\n'+mas[i]
  
//   }
}

