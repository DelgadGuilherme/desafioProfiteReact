import { Component } from "react";
import CardProduto from "../cardProduto/CardProduto";
import Carousel from 'react-bootstrap/Carousel'

export default class Produto extends Component {
    
    constructor(props){
        super(props);
        this.state = {produtoList: [
            {
            "id": 0,
            "name": "Product Number 0",
            "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538",
            "oldPrice": 363,
            "price": 332,
            "description": "Product long description number 0 just to make more than one like of text.",
            "installments": {
                "count": 10,
                "value": 33.2
            }
        }, {
            "id": 1,
            "name": "Product Number 1",
            "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307",
            "oldPrice": 104,
            "price": 76,
            "description": "Product long description number 1 just to make more than one like of text.",
            "installments": {
                "count": 10,
                "value": 7.6
            }
        }, {
            "id": 2,
            "name": "Product Number 2",
            "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376",
            "oldPrice": 154,
            "price": 134,
            "description": "Product long description number 2 just to make more than one like of text.",
            "installments": {
                "count": 10,
                "value": 13.4
            }
        }, {
            "id": 3,
            "name": "Product Number 3",
            "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6584703",
            "oldPrice": 292,
            "price": 272,
            "description": "Product long description number 3 just to make more than one like of text.",
            "installments": {
                "count": 10,
                "value": 27.2
            }
        }, {
            "id": 4,
            "name": "Product Number 4",
            "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6875461",
            "oldPrice": 139,
            "price": 92,
            "description": "Product long description number 4 just to make more than one like of text.",
            "installments": {
                "count": 10,
                "value": 9.2
            }
        }, {
            "id": 5,
            "name": "Product Number 5",
            "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363",
            "oldPrice": 112,
            "price": 68,
            "description": "Product long description number 5 just to make more than one like of text.",
            "installments": {
                "count": 10,
                "value": 6.8
            }
        }]};
    }

    onCarregamentoProdutoFalhou(erro) {
        console.log(erro);
    }

    render() {
        return (   
            
            <section id="produtos">
                <h2 class="text border-bottom col-2" style={{marginTop: 30}}>Produtos</h2>

                <div class="row justify-content-center text-center">
                    {
                       this.state.produtoList.map(function (produto) {
                        return <CardProduto produto={produto} />
                        })
                    }
                </div>
            </section>
        )
    }
}