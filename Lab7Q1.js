function setup() {
  createCanvas(400, 400);
  arr1 = ["blue", "green", "red"]
}

function draw() {
  background(220);
   for (let i = 0; i < 5; i++) {
     fill(arr1[2])
     ellipse((70 * i)+ 40,(70* i)+ 40,70)
     fill(arr1[1])
     ellipse((70 * i)+ 40,(70* i)+ 40,60)
     fill(arr1[0])
     ellipse((70 * i)+ 40,(70* i)+ 40,50)
          
   }
}
