export interface Products
{
  id: number;
  title:string;
  image:string;
  price:number;
  stock?:number;
}

// stock 这个属性 可能存在，也可能不存在。
// 如果存在，它的类型必须是 number。
// 如果不存在，不会报错