import { MyDataBaseModule } from './db/my-database-module';
import { myDataBaseModule as myDataBaseModuleFromA } from './module_a';


const myDataBaseModule = MyDataBaseModule;
myDataBaseModule.add({ name: 'Manuel Gomes', age: 30});
myDataBaseModule.add({ name: 'Tiringa', age: 75});
myDataBaseModule.show();

console.log(myDataBaseModule === myDataBaseModuleFromA)
