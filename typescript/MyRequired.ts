/**
 * -? 移除了可选属性中的？
 * +？ 把必选项改成可选项
 */
type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

interface Boo {
    name?: string;
    age?: number
    height: number
}
const test: MyRequired<Boo> = {
    name:'S1',
    age:12,
    height:12
}