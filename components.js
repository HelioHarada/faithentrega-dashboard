class Header extends HTMLElement{
    connectedCallback() {
      
        this.innerHTML = `
        <div class="ui secondary menu">
        <div class="header item">Brand</div>
        <a class="active item">
            Home
        </a>
        <a class="item">
            Messages
        </a>
        <a class="item">
            Friends
        </a>
        <div class="right menu">
            <div class="item">
                <div class="ui icon input">
                    <input type="text" placeholder="Search...">
                    <i class="search link icon"></i>
                </div>
            </div>
            <a class="ui item">
                Logout
            </a>
        </div>
    </div>
        ` ;
    }
}

class Card extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="fs-box-profile mt-md">

        <div class="box-title">
            <p>Motorista</p>
            <h1>José Alencar</h1>
            <h4>Status: Em trânsito</h4>
            <p class="label">útima comunicaçã: 14/09 13:30</p>
        </div>

        <div class="fs-box-peso">
            <h4>120.000KG</h4>
            <p>Peso da carga</p>
        </div>

        <!-- text -->
        <div class="box-text">

            <div class="row">
                <div class="fs-box-dados">
                    <h4>120</h4>
                    <p>Total de entregas</p>
                </div>

                <div class="fs-box-dados">
                    <h4>12</h4>
                    <p>Entregas realizadas</p>
                </div>
            </div>

            <div class="row">
                <div class="fs-box-dados">
                    <h4>120</h4>
                    <p>Entrega restantes</p>
                </div>

                <div class="fs-box-dados">
                    <h4>12</h4>
                    <p>Parcial ou não entregues </p>
                </div>
            </div>

        </div>
        <div class="box-btn">
            <button class="btn">Mais detalhes</button>
    
        </div>
    </div>`;
    }
}


customElements.define('main-header', Header);
customElements.define('card-profile', Card);