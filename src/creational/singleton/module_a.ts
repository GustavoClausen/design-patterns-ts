import { MyDataBaseModule } from './db/my-database-module';


const myDataBaseModule = MyDataBaseModule;
myDataBaseModule.add({ name: 'Gustavo', age: 30});
myDataBaseModule.add({ name: 'Milena', age: 24});
myDataBaseModule.add({ name: 'Olivia', age: 35});
myDataBaseModule.add({ name: 'João', age: 75});
myDataBaseModule.remove(1)

export { myDataBaseModule }
