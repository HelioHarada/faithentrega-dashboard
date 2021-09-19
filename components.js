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
        <div class="box-avatar">
            <div class="circle">
                <h3>HH</h3>
                <!-- <img src="person.svg"  alt=""> -->
            </div>
        </div>
        <div class="box-title">
            <h6>Jose de Alencar</h6>
            <h6>Status: Em trânsito</h6>
        </div>
        <div class="box-text">
            <p>Em andamento: 3</p>
            <p>Em andamento: 3</p>
            <p>Em andamento: 3</p>
        </div>
        <div class="box-btn">
            <button class="btn">Mais detalhes</button>
       
        </div>
    </div>`;
    }
}


customElements.define('main-header', Header);
customElements.define('card-profile', Card);