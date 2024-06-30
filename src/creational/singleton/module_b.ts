import { MyDataBaseClassic } from './db/my-database-classic';
import './module_a';

const myDataBaseClassic_1 = MyDataBaseClassic.getInstance();
myDataBaseClassic_1.add({ name: 'Manuel Gomes', age: 30});
myDataBaseClassic_1.add({ name: 'Tiringa', age: 75});
myDataBaseClassic_1.show();
