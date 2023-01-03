//Declare global container constant to represent <div> container
let div= document.getElementById("divv");

//Define Fruit Object type with required properties
class fruit {
    private name: string;
    private price: string;
    private image:string;
    private unit: string;
    constructor(name1:string, price1:string, image1:string, unit1:string) {
            this.name = name1;
            this.price = price1;
            this.image = image1;
            this.unit = unit1;
    }
    get Name():string{
        return this.name;
    }
    
    set Name(value:string){
        this.name=value;
    }
    get Price():string{
        return this.price;
    }
    
    set Price(value:string){
        this.price=value;
    }
    get Image():string{
        return this.image;
    }
    
    set Image(value:string){
        this.image=value;
    }
    get Unit():string{
        return this.unit;
    }
    
    set Unit(value:string){
        this.unit=value;
    }
}

//Fetch data from server using getFruits() method
let fetchURL="http://localhost:3000/fruits";
let array=[];
function getFruits(){
    let fetchPromsiseObj=fetch(fetchURL);
    fetchPromsiseObj.then((response)=>{
         return response.json();
}).then((data)=>{
        array.push(data);
        transform(data);
    })

}




//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruits:any){
    let transformFruit ;
    for(let i=0; i<fruits.length; i++){
        transformFruit=new fruit(<string>fruits[i].name,<string>fruits[i].price,<string>fruits[i].image,<string>fruits[i].unit);
        showFruit(transformFruit);
    }    

}



//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(transformFruit:any){
    let element1=document.createElement("div");
    let element2=document.createElement("img");
    element2.style.width="200px";
    element2.style.height="200px";
    
    element2.setAttribute("src",transformFruit.image);
    element1.appendChild(element2);


    let element3=document.createElement("h3");
    let h3text=document.createTextNode(transformFruit.name);
    element3.appendChild(h3text);

    let para=document.createElement("p");
    let ptext=document.createTextNode(transformFruit.price);
    let ptext1=document.createTextNode(transformFruit.unit);
    para.appendChild(ptext);
    para.appendChild(ptext1);

    div?.appendChild(element1);
    element1.appendChild(element3);
    element1.appendChild(para);

element1.style.backgroundColor="smokewhite";
element1.style.border="1px solid black";
element1.style.margin="20px";
element1.style.borderRadius="15px";
element1.style.padding="20px";
   
div?.setAttribute("style","display:flex;flex-wrap: wrap; padding: 20px;");
}






//Call getFruits() method globally
getFruits();
