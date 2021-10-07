function CoffeeMachine() {
    var waterTankMl;
    var beansG;

    function fillWater(ml){
        waterTankMl = ml;
    }

    function fillBeans(g){
        beansG = g;
    }

    function brew(){
        return ( waterTankMl >= 20 && beansG >= 30 );
    }

    function brewAsync(cb){
        setTimeout(function(){cb(waterTankMl >= 20 && beansG >= 30)}, 500);
    }

    function clean() {
        return (waterTankMl >= 700);
    }

    return {fillWater, fillBeans, brew, brewAsync, clean}
}

module.exports = CoffeeMachine();