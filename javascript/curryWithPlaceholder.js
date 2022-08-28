function curry(fn) {
  let lastArgs = null;
  return function curryFn(...args) {
    let allArgs;
    if (!lastArgs) {
      allArgs = lastArgs = args;
    } else {
      lastArgs.forEach((item, idx) => {
        if (item === curry.placeholder) {
          lastArgs[idx] = args.shift();
        }
      });
      allArgs = [...lastArgs, ...args];
      console.log('args',args)
      debugger
    }
    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    } else {
      return (...args2) => curryFn(...args2);
    }
  };
}

curry.placeholder = Symbol();

const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }

const curriedJoin = curry(join)
const _ = curry.placeholder

//  console.log(curriedJoin(1, 2, 3)) // '1_2_3'
 
//  console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'
 
 console.log('3===',curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'
