import { MyDataBaseClassic } from './db/my-database-classic';


const myDataBaseClassic_1 = MyDataBaseClassic.getInstance();
myDataBaseClassic_1.add({ name: 'Gustavo', age: 30});
myDataBaseClassic_1.add({ name: 'Milena', age: 24});
myDataBaseClassic_1.add({ name: 'Olivia', age: 35});
myDataBaseClassic_1.add({ name: 'João', age: 75});
myDataBaseClassic_1.remove(1)
// myDataBaseClassic_1.show()