// 作用：从 T 中取出 一系列 K 的属性
// keyof T相当于:type keys = "x" | "y"
// K extends keyof T的意思是：K是T的子类型
type MyPick<T, K extends keyof T> = {[P in K]:T[P]}

interface Foo {
    a?:number
    b:string
    c: boolean
}


const test1 : MyPick<Foo,  "a" | "b" > = {
    b:'123'
}

