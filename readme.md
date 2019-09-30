# Higher order Function practices

this repo has some tests setup. To run them you only need to run `npm test`. Once the functions in the `adder.js` and `filtering.js` files are working correctly all tests should pass. :) 

You of course don't need to work with the tests, but I think it might be fun :) 

## Practices:
- Create the makeAdder function inside the `adder.js` file. The adder shoud be a Higher order Function that allows you to set the initial number, that will be added to wnenever you call the function that gets created by the HOF. 
```js
const adder = makeAdder(120);

adder(50) //? should be 170
adder(30) //? should be 200
```
- Create the byProp function inside the `filtering.js` file. This function should allow the user to pass in the name of the prop that you want to filter, and the string that it should use for comparrison.
```js
const elementsStartingWithCa = elements.filter(byProp("Ca", "name"));

elementsStartingWithCa.length //? should be 4
```