const BaseBusiness = require('./baseBusiness')

class ProductBusiness extends BaseBusiness{

  constructor(){
    super();
  }

  async createProduct(params){

    const payload = {
      id: params.id
    }

    const result = await this.db.mongodb.create(payload);


            /**
          seller_id: 12
          seller_name: 'Lojinha do Dogão',
          product_name: DOG completo
          price: 12.09
        */

        //get no mysql -> getStore( seller_id, store_id)
        //get no mysql -> getSeller( seller_id, store_id)

        //dt-product ( seller_id, store_id, price, product_name)

        //SaveProducts( {seller_id, } )  -> mongodb
  }


}

module.exports = ProductBusiness;
