function Footer() {
    return (
            <footer class="footer text-white text-center text-md-start" style={{backgroundColor: '#160a3a'}}>
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Localizacao</h5>
                            <div class="row">
                                <div class="col-mb-4 col-lg-4">
                                    <p>São Paulo</p>
                                    <p>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div class="col-mb-4 col-lg-4">
                                    <p>Rio de Janeiro</p>
                                    <p>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-3 align-self-end">
                            <ul class="list-unstyled mb-0 text-center">
                                <li class="rounded-pill" style={{backgroundColor: 'orange'}}>
                                <span>Entre em contato</span>
                                </li>
                                <li class="rounded-pill" style={{backgroundColor: 'orange', marginTop: 10}}>
                                <span>Fale com o nosso consulto online</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    )
}


export default Footer;