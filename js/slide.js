const slides = document.querySelectorAll("section div.slides")

slides.forEach(slide =>{
    let current=0
    let z= 10000000
    
    const images = slide.querySelectorAll("img")
    
    
    images.forEach(image => {
      z = z-1


      image.style.zIndex = z
    })
    
    const timeline = gsap.timeline()

    timeline
        .set(images,{
            x:()=>{
            return 500*Math.random()-250
            },
            y:"500%",  
            rotation: ()=>{
                return 90*Math.random()-45
            }
         })
        .to(images,{x:0, y:0, stagger: -0.25})
        .to(images,{
            rotation: ()=>{
                return 16 * Math.random()-8
            }
        })
    

    slide.addEventListener("click", function(){

        let direction = "130%"
        let midAngle=15

        if(Math.random()>0.5){
            direction="-130%"
            midAngle=-15
        }

        z= z-1
        const blurElement = {a:0};//start the blur at 0 pixels
        const currentImage= images[current]
        const flipTimeline=gsap.timeline()
        flipTimeline
            .set(currentImage,{x:0})
            .to(currentImage,{
                x: direction,
                rotation: midAngle,
                filter: "blur(10px)"
             })
          
            .set(currentImage,{zIndex:z})

            .to(currentImage,{
                x:0,
                filter: "blur(0px)",
                rotation: ()=>{
                    return 16 * Math.random()-8
                }
                
            })

      

        // currentImage.style.zIndex = z
    
        current=current+1
        current=current % images.length
    
    })
})


