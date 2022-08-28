//作用：把传入的属性变成只读选项
type MyReadonly<T> = {readonly[P in keyof T]:T[P]}
