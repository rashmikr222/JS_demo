const data = {
    // take a empty array
    locations:[],
    get location() {
        // return `this is a test`
        return this._location
    },
    set location(value) {
        // value = value.trim();
        this._location = value.trim();
        this.locations.push(this._location)
    }
}

data.location = 'mysore';
data.location = "bangalore";
data.location = 'mangalore';
// for get location
console.log(data.location); //this will return the current location value i.e mangalore
// for set location
console.log(data);

