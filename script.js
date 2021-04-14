class Room {
    constructor(name, length, width, capacity = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.capacity = capacity; //9
        this.available = true; //6
    }
   
    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return (this.width * 2) + (this.length * 2);
    }
}

//4
let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20, 18);

//7
room2.available = false;

//5
console.log(room1.name, room1.length, room1.width, room1.getArea(), room1.getPerimeter());
console.log(room2.name, room2.length, room2.width, room2.getArea(), room2.getPerimeter());

//8
console.log(room1.available, room2.available);

//11
console.log(room1.capacity, room2.capacity);



