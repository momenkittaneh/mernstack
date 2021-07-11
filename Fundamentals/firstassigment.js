//1:
//before:
console.log(hello);                                   
var hello = 'world';    
//after
var hello;
console.log(hello);
hello='world';                             
//----------------------------------------
//2:
//before:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//after
var needle;
needle = "haystack";
test();
function test(){
var needle;
needle="magnet";
console.log(needle);
}
//--------------------------------------
//3:
//before:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//after
var brendan;
brendan = "super cool";
function print(){
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);
//--------------------------------------
//4:
//after
var food;
food = "chicken";
console.log(food);
eat();
function eat(){
    var food; 
    food = 'half-chicken';
    console.log(food);
    food = 'gone';

}
//--------------------------------------
//5:
//after:
mean();
console.log(food);
var mean = function() {
    var food; 
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
//--------------------------------------
//6:
//after
console.log(genre);
var genre;
genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre;
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
//----------------------------------------------
//7
//before
var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo; 
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//-------------------------------------------------
//8
// - Bonus ES6: const
//before
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo;
    dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}