import { MyDataBaseFunction } from './db/my-database-function';


const myDataBaseFunction = MyDataBaseFunction;
myDataBaseFunction.add({ name: 'Gustavo', age: 30});
myDataBaseFunction.add({ name: 'Milena', age: 24});
myDataBaseFunction.add({ name: 'Olivia', age: 35});
myDataBaseFunction.add({ name: 'João', age: 75});
myDataBaseFunction.remove(1)

export { myDataBaseFunction }
