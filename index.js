//BONUS background, I could not figure it out for the life of me so i had to check the solution code for the bonus.
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)



//image function
function newImage (src, left, bottom) {
    let image = document.createElement('img')
    image.src = src
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}
//item function
function newItem (url, left, bottom){
    let image = newImage(url, left, bottom)
    //remove item
    image.addEventListener("dblclick", function(){
        image.remove()
    })
}

//images
newImage("assets/green-character.gif", 100, 100)
newImage("assets/tree.png", 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//items
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)