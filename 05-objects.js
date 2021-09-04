const cookie = {
    "cookie name": "ice cookie",
    isGlutenFree: false,
    eatCookie: function(){
        console.log("I am eating" + this["cookie name"]);
    }
};
//cookie.eatCookie();
//cookie["cookie name"]="cookie ice";
//console.log(cookie);

class Cookie{
    constructor(name,isGlutenFree){
       this.name=name;
        this.isGlutenFree=isGlutenFree;
    }
    eatCookie (){
        console.log("I am eating  " + this.name);
    }
}
    const newCookie = new Cookie("ice cookie",false);
newCookie.eatCookie();

//console.log(newCookie.name);