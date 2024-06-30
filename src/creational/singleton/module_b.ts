import { MyDataBaseFunction } from './db/my-database-function';
import { myDataBaseFunction as myDataBaseFunctionFromA } from './module_a';


const myDataBaseFunction = MyDataBaseFunction;
myDataBaseFunction.add({ name: 'Manuel Gomes', age: 30});
myDataBaseFunction.add({ name: 'Tiringa', age: 75});
myDataBaseFunction.show();

console.log(myDataBaseFunction === myDataBaseFunctionFromA)
