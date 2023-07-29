export interface user {
    Category: string
    "EAN Code": string
    "Product Line": string
    "Product Line Item": string
    "Product Price": string
    "Product Type": string
    "Sub-Cateogry": string
    field1: string
  }
export type Root = Root2[]

export interface Root2 {
  field1: string
  Category: string
  "Sub-Cateogry": string
  "Product Type": string
  "Product Line": string
  "Product Line Item": string
  "Product Price": string
  "EAN Code": string
}