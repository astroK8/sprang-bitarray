# sprang-bitarray
bit array implementation

```typescript
import {BitArray} from 'sprang-bit-array';

let bArray = new BitArray('0101');

bArray.set(0,1); // 1101
bArray.set(3,0); // 1100
bArray.toggle(2); // 1110
bArray.unset(0); // 0110
bArray.get(2); // 1
bArray.toString(); // '0110'
bArray.toNumber(); // 6
bArray.reset(); // 0000


```

