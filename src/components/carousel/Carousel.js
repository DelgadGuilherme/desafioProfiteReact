import Carousel from 'react-bootstrap/Carousel'

function Carousell() {
    return(
        <Carousel>
            <Carousel.Item>
                <img style={{height: '20rem'}} class="w-100" src="https://54337.cdn.simplo7.net/static/54337/sku/tricoline-tricoline-lisa-cinza-chumbo-fio-50-100-algodao-com-1-50-lg--p-1595291707803.jpg"/>
                <Carousel.Caption>
                <div class="col-lg-4 col-mb-4" style={{marginBottom: 100}}>
                    <h1>Nossa especializade:</h1>
                    <p>experiência de compra.</p>
                </div>
                </Carousel.Caption>
               
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '20rem'}} class="w-100" src="https://54337.cdn.simplo7.net/static/54337/sku/tricoline-tricoline-lisas-tricoline-bahamas-tinto-lisa-fio-30-cor-azul-turquesa-100-algodao-com-1-50-lg--p-1637112890294.jpeg"/>
                <Carousel.Caption>
                <div class="col-lg-4 col-mb-4" style={{marginBottom: 100}}>
                    <h1>Nossa especializade:</h1>
                    <p>experiência de compra.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousell;
