const myObject = {
    firstName:"Arvind",
    lastName:"B S",
    address:"Tiruppur",
    display: function(){
        console.log("Display Function " + this.firstName + ' ' + this.lastName);
    }
}

module.exports = {myObject};