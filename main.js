import {info, sayHi} from './first_module';
import * as stuff from './first_module';
import { info as secret_info } from './first_module';
import foo, * as name from './first_module'; // name is the name of the obj received by imported values

console.log(info);
console.log(stuff);
console.log(foo, name);