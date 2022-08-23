class BMW{
    constructor(name,model,speciliaty,engine){
        this.name = name;
        this.model = model;
        this.speciliaty = speciliaty;
        this.engineNo = engine;
    }
    
    showDetails(){
        console.log(`
        CAR NAME : ${this.name} 
        MODEL : ${ this.model}
        SPECIALITY : ${this.speciliaty}
        ENGINE NO : ${ this.engineNo}`
        )
    }}
let bmw = new BMW ("BMW","M5","Engine","44444")
bmw.showDetails()
       
  class mercedes{
    constructor(name,model,speciliaty,engine,color){
        this.name = name;
        this.model = model;
        this.speciliaty = speciliaty;
        this.engineNo = engine;
        this.color = color;
    }
    
    showDetails(){
        console.log(`
        CAR NAME : ${this.name} 
        MODEL : ${ this.model}
        SPECIALITY : ${this.speciliaty}
        ENGINE NO : ${ this.engineNo} 
        CAR COLOR : ${this.color}`
        
        )
  } }
   let merc = new mercedes ("MERCEDES","C210","ENGINE","5555","MATTE BLACK")     
   merc.showDetails()
   let aui = new mercedes ("MERCEDES","c340","ENGINE","5555","matte red")     
   aui.showDetails()