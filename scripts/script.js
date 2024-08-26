

document.getElementById("main-action-button").onclick = function () {
        // pour scroller to menu products

        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// creons une variable dans laquelle nous allons sauvegarder tous nons liens a

const links= document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {

        // possibilite-1

        // links[i].addEventListener("click", function () {
        //         document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
        // })

        // possibilite-2

        links[i].onclick = function () {
                document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
        }
}

// buttons de commande

const buttons= document.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
                document.getElementById("order").scrollIntoView({ behavior: "smooth" });
        }
}

// button d'echange de monnaie

const prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = function (e) {
        const currentCurrency = e.target.innerText;

        let newCurrency = "$";
        let coefficient = 1;

        if (currentCurrency === "$") {
                newCurrency = "₽";
                coefficient = 90.89;
        }else if (currentCurrency === "₽") {
                newCurrency = "Fcfa";
                coefficient = 603.82;
        } else if (currentCurrency === "Fcfa") {
                newCurrency = "€";
                coefficient = 0.9;
        }else if (currentCurrency === "€") {
                newCurrency = "BYN";
                coefficient = 3.27;
        }else if (currentCurrency === "BYN") {
                newCurrency = "¥"
                coefficient = 6.9;
        }

        e.target.innerText = newCurrency;

        for (let i = 0; i < prices.length; i++) {
               prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
        }
}

// validation du formulaire

const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [product, name, phone].forEach((item) => {
            if (!item.value) {
                    item.style.borderColor = "red";
                    hasError = true;
            }else{
                    item.style.borderColor = "";
            }
    });

    if (!hasError) {
            [product, name, phone].forEach((item) => {
                   item.value="";
            });
            alert("Merci pour la commande ! Nous vous contacterons bientot !")
    }
};