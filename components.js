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




customElements.define('main-header', Header);
