document.addEventListener("DOMContentLoaded", ()=>{
    loadPortfolio();
})

function loadPortfolio() {
    fetch("data.json")
    .then(answer => {
        return answer.json();
    })
    .then((data)=>{
        let html = "";

        data.portfolio.forEach(element => {
            html+=`
                <div class="element">
                    <img src="img/${element.id}.jpg">
                    <div class="content">
                        <h3>${element.name}</h3>
                        <p>${element.desc}</p>
                    </div>
                </div>
            `;
        });

        document.querySelector("#list").innerHTML = html;
    })
}