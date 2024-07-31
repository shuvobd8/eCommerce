export class Product {
    product_id: number
    product_name: string
    description: string
    purchase_price: number
    sales_price: number
    discount_amount: number
    stock_quantity: number
    category_id: number
    image: string
    active: boolean
    user_code: string
    constructor(){
       this.product_id =0;
       this.product_name ='';
       this.description =''
       this.purchase_price =0
       this.sales_price =0
       this.discount_amount=0
       this.stock_quantity =0
       this.category_id=0
       this.image =''
       this.active = true;
       this.user_code =''
    }
}
