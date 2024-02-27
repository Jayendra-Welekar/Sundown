const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var selectedEle = 'select1'
var select = document.querySelectorAll('.select')
select.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        var select1Text = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        var select2Text = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
        var select3Text = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."

        var prev = document.getElementById(selectedEle)
        var down = document.getElementById('down')

        
        prev.style.color = "rgb(47 46 46)"
        prev.style.borderColor = "rgb(47 46 46)"
        selectedEle = e.target.getAttribute('id')
        e.target.style.color = "#efeae3"
        e.target.style.borderColor = "#FE330A"
        
        if(selectedEle === "select1"){
            down.querySelector("p").innerHTML = select1Text
            document.querySelector('#page4img').setAttribute("src", 'image4.png') 
        }
        else if(selectedEle === "select2"){
            down.querySelector("p").innerHTML = select2Text
            document.querySelector('#page4img').setAttribute("src", 'image6.png')  
        }
        else if(selectedEle === "select3"){
            down.querySelector("p").innerHTML = select3Text
            console.log(document.getElementById('img'))
            document.querySelector('#page4img').setAttribute("src", 'image8.png') 
        }
    })
})

var cursor = document.querySelector('#scrollBall')

var page5 = document.querySelector('#page5')
page5.addEventListener('mouseenter', () => {
    cursor.style.scale = 1
})
page5.addEventListener('mouseleave', () => {
    cursor.style.scale = 0
})
page5.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.screenX - 50 + "px"
    console.log(dets.screenY)
    cursor.style.top = dets.screenY - 150 + "px"
})



