const EatException = require("./EatException");
const {Product} = require("./Product");

class Ingestion extends Product{
    constructor(meal_type = [], id, day_of_diet, products = []) {
        super()
        this.meal_type = meal_type;
        this.id = id;
        this.day_of_diet = day_of_diet;
        this.products = products;
    }
    getFromFridge(product) {
        for (let prod in this.products) 
            if (this.products[prod].name === product)
                if ((this.products[prod].kcal_per_portion) > 200)
                    throw new EatException(` Too many calories in ${product} for ${this.meal_type}`);
    }
    setProduct(obj) {
        this.products.push(obj);
    }
    getProductInfo(productName) {
        let obj = {kcal: 0}
        for (let prod in this.products) {
            if (this.products[prod].name === productName) {
                obj.kcal = this.products[prod].kcal_per_portion;
            }
        }
        return obj;
    }
}

module.exports = {Ingestion};

//for test.js

// const {Product} = require("./Product");
// const {Ingestion} = require("./Ingestion");
// const stock = new Ingestion('breakfast', 1);
// const productNames= ['Nutella','Chicken','Coca-Cola','Biscuit','Brocolli','Tomatoes','Apple','Potato','Pizza','Beer'];
// const randomInt= (min, max) => {return min+ Math.floor((max- min) * Math.random());}

// productNames.forEach(name => {
//     stock.setProduct(new Product(name, randomInt(40, 500)))
// })

// productNames.forEach(productName=> {
//     console.log(`***\nGetting ${productName} that has`,
//     `${stock.getProductInfo(productName).kcal} calories.`)
// try {
//     stock.getFromFridge(productName);
//     console.log(`You're doing great, ${productName} is good!`)
// } 
// catch(error) {
//     console.log(`Caught exception:${error.message}!`,`Throw ${productName} away!`)}
// })