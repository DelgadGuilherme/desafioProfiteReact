import { Component } from "react";
import Header from "./components/header/Header";
import Carousell from "./components/carousel/Carousel";
import Produto from "./components/produto/Produto";
import Footer from "./components/footer/Footer";

export default class Home extends Component {
    render () {
        return (
            <div>
                <div class="container"><Header/></div>
                <Carousell/>
                <div class="container" style={{marginBottom: 100}}><Produto/></div>
                <Footer/>
            </div>
        );
    }
}