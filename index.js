let form = document.querySelector('#form')
let obj = JSON.parse(localStorage.getItem('data')) || []
let batch = JSON.parse(localStorage.getItem('batch'))
let bmap = new Map()
let barr = []

if(batch!=null){
    for(let j=0; j<batch.length; j++){
        if(bmap.get(batch[i])==undefined){
            bmap.set(batch[i],1)
            barr.push(batch[i])
        }
        else{
            bmap.set(batch[i],bmap.get(batch[i])+1)
        }
    }
    for(let k=0; k<barr.length; k++){
        let h3 = document.createElement('h3')
        h3.id = 'batchno'
        h3.innerText =   `${barr[k]} : ${bmap.get(barr[k])}`
        let flex = document.getElementsByClassName('flex-container')
        flex.append(h3)
    }
}

if(obj.length>0){
    for(let i=0; i<obj.length; i++){

        let tr = document.createElement('tr')
    
        let td1 = document.createElement('td')
    
        let image = document.createElement('img')
        image.src = obj[i].td1
        let w = obj[i].td1
        td1.append(image)
    
        let td2 = document.createElement('td')
        td2.innerText = obj[i].td2
        let x = obj[i].td2
    
        let td3 = document.createElement('td')
        td3.innerText = obj[i].td3
        let y = obj[i].td3

        let b = new Map()
        let td4 = document.createElement('td')
        td4.innerText = obj[i].td4
        let z = obj[i].td4
    
        let td5 = document.createElement('tr')
        td5.innerText = 'Remove'
        td5.addEventListener('click',function(e){
            e.target.parentNode.remove()
            let trash = JSON.parse(localStorage.getItem('trash')) || []
            let obj1 = JSON.parse(localStorage.getItem('data'))

            trash.push(obj1.splice(i,1))
            localStorage.setItem('data',JSON.stringify(obj1))
            localStorage.setItem('trash',JSON.stringify(trash))
            console.log(trash)
        })
        tr.append(td1,td2,td3,td4,td5)
        console.log(tr)
        tr.style.height = '45px';
        document.querySelector('tbody').append(tr)
    }
}




form.addEventListener('submit',function(){
    event.preventDefault();
    let w = document.querySelector('#image').value


    let x = document.querySelector('#name').value


    let y = document.querySelector('#course').value


    let z = document.querySelector('#batch').value

    let batch = JSON.parse(localStorage.getItem('batch')) || []
    batch.push(z)
    localStorage.setItem('batch',JSON.stringify(batch))

    let a = {td1:w,td2:x,td3:y,td4:z}
    obj.push(a)
    localStorage.setItem('data',JSON.stringify(obj))
    location.reload()
})

document.querySelector('thead>tr').appendChild(document.createElement('th'))