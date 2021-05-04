function getContactHtml(){
    return `<section id="tab-shifter">
    <section id="tab-container">
        <div class="tab" id="main-tab">
            <a class="tab-link"><h3>Main</h3></a>
        </div>
        <div class="tab" id="menu-tab">
            <a class="tab-link"><h3>Menu</h3></a>
        </div>
        <div class="tab active-tab" id="contact-tab">
            <a class="tab-link"><h3>Contact</h3></a>
        </div>
    </section>
    <section id="info-display">
        <h1>Contact us Here:</h1>
        <div id="contact-container">
            <h3>Email: *************@gmail.com</h3>
            <h3>Mobile: 599******</h3>
            <h3>Address: 21a, Buttocks Str., Zigland</h3>
        </div>
    </section>
</section>`;
}

export {getContactHtml};