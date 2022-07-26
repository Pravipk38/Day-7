var request = new XMLHttpRequest();
request.open("get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);

    // 1. Get all the countries from the Asia continent /region using the Filter function::

    // var res = result.filter((ele) => ele.region === "Asia");
    // console.log(res);

    // 2. Get all the countries with a population of less than 2 lakhs using Filter function
    // var res = result.filter((ele) => ele.population < 200000);
    // console.log(res);

    //  3. Print the total population of countries using reduce function:

    // var res = result.reduce((acc, ele) => acc + ele.population, 0);
    // console.log(res);

    // 4.Print the country which uses US Dollars as currency.

    // var res = result.filter((ele) => {
    //     for (var i = 0; i < ele.currencies.length; i++) {
    //         if (ele.currencies[i].code === "USD") {
    //             return true;
    //         }
    //     }

    // });
    // console.log(res);


}