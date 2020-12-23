class Product {
    constructor(name, kcal_per_portion) {
        this.name = name;
        this.kcal_per_portion = kcal_per_portion;
    }
}

class Ingestion extends Product{
    constructor(meal_type = [], id, day_of_diet, products = []) {
        super()
        this.meal_type = meal_type;
        this.id = id;
        this.day_of_diet = day_of_diet;
        this.product = products;
    }
    getFromFridge(product) {

    }
    setProduct(name, cals) {
        this.name = name;
        this.kcal_per_portion = cals;
    }
}
const stock = new Ingestion('breakfast', 1);
console.log(stock.meal_type);
console.log(stock.id);

productNames.forEach(name => {
    stock.setProduct(newProduct(name, randomInt(40, 500)))
})