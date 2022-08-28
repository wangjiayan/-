/**
 * Partial:将传入的属性变为可选项.
 * keyof T 拿到 T 所有属性名,
 * in 进行遍历, 将值赋给 P
 * 最后 T[P] 取得相应属性的值.
 * 
 */
type MyPartial<T> = {[P in keyof T]?:T[P]}

//测试
interface Foo {
    name: string;
    age: number
    height: number
  }
 const attrName : MyPartial<Foo>={name: 'name'}
 const attrAge : MyPartial<Foo>={age: 123}
 const attrNull = {}