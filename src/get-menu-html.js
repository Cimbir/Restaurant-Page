function getMenuHtml(){
    return `<section id="tab-shifter">
    <section id="tab-container">
        <div class="tab" id="main-tab">
            <a class="tab-link"><h3>Main</h3></a>
        </div>
        <div class="tab active-tab" id="menu-tab">
            <a class="tab-link"><h3>Menu</h3></a>
        </div>
        <div class="tab" id="contact-tab">
            <a class="tab-link"><h3>Contact</h3></a>
        </div>
    </section>
    <section id="info-display">
        <h1>Menu</h1>
        <table>
            <tr>
                <td class="food-name head">Name</td>
                <td class="food-desc head">Description</td>
                <td class="food-img head">Image</td>
                <td class="food-cost head">Price</td>
            </tr>
            <tr>
                <td class="food-name">Some Food</td>
                <td class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                <td class="food-img"><img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"></td>
                <td class="food-cost">102$</td>
            </tr>
            <tr>
                <td class="food-name">Some More Food</td>
                <td class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                <td class="food-img"><img src="https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg"></td>
                <td class="food-cost">132$</td>
            </tr>
            <tr>
                <td class="food-name">Final Food</td>
                <td class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                <td class="food-img"><img src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/10/foodJointPainRelief-142336977-770x533-1.jpg"></td>
                <td class="food-cost">312$</td>
            </tr>
        </table>
    </section>
</section>`;
}

export {getMenuHtml};