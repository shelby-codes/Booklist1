var btn = document.getElementById('btn')
btn.addEventListener("click", add)
var preview = document.querySelector('.preview')
var row = 1;

   function add(){
    //event.prevntDefault();
    var title = document.getElementById("t").value
    var author = document.getElementById("a").value

    // if(!title && !author){
    //     return alert('please enetr the details')
    // }


    var files = document.querySelector('input[type=file]').files

    function readandpreview(file){
    const reader = new FileReader()
    reader.addEventListener("load", function(){
        var img = document.createElement('img')
        //img.title=file.name
       // const url = this.result;
       img.src= this.result;

        var d = document.createElement("div")
        var ti = document.createElement("p")
        var au = document.createElement("p")

        ti.textContent = document.getElementById('t').value
        au.textContent = document.getElementById('a').value
        ti.classList.add("lione")
        au.classList.add("litwo")
        d.classList.add("full")

       
        
        img.classList.add("ima")

        d.appendChild(img)
        d.appendChild(ti)
        d.appendChild(au)
        

        document.body.appendChild(d)
        preview.appendChild(d)


    }, false)

   reader.readAsDataURL(file)
} 
    if(files){
        [].forEach.call(files, readandpreview);  
    }


    var image = document.createElement('img')
    const im = window.URL.createObjectURL(img.files[0])
    image.setAttribute("src", im)
    image.height= 100;
    image.classList.add("imagelist")
    preview.appendChild(image)


   
     var table = document.getElementById('table')
     var tr = table.insertRow(row)

    var th3 =  tr.insertCell(0);
    var th1 = tr.insertCell(1);
    var th2 = tr.insertCell(2);

    th1.innerHTML = title
    th2.innerHTML = author  
    th3.appendChild(image)
    
    row++;   
    }
    

