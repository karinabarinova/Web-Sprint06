class EatException extends Error {
    constructor(message) {
        // message = "No more junk food, dumpling";
        super(message);
        this.name = "";
    }
}

module.exports = EatException;

