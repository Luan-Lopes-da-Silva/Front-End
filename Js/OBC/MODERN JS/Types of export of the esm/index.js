import { inline } from './inline.js';
import defaultInline from './inline.js';
import { group } from './no-inline.js';
import exportDefaultNoInline from './no-inline.js'

inline()
defaultInline()

group()
exportDefaultNoInline()

//The main difference of default export for the others type of export is which default export only can have one per file until why your name already say default and if is default only should have one default the default export in question of renamed function is more flexible of the which the inlines export but case we wish change the name in inline exports we should use the following code 
//Example 
//import { inline as i } from "./inline.js";
//i()
