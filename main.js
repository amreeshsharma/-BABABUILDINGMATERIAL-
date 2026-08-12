const components = [

    {
        id: "hero",
        html: "hero.html",
        css: "hero.css"
    },

    {
        id: "about",
        html: "about.html",
        css: "about.css"
    },

    {
        id: "products",
        html: "products.html",
        css: "products.css"
    },

    {
        id: "services",
        html: "services.html",
        css: "services.css"
    },

    {
        id: "why-us",
        html: "why-us.html",
        css: "why-us.css"
    },

    {
        id: "testimonials",
        html: "testimonials.html",
        css: "testimonials.css"
    },

    {
        id: "contact",
        html: "contact.html",
        css: "contact.css"
    },

    {
        id: "footer",
        html: "footer.html",
        css: "footer.css"
    }

];


async function loadComponents() {

    for (const component of components) {

        try {

            const response =
                await fetch(component.html);

            if (!response.ok) {

                throw new Error(
                    "Cannot find " +
                    component.html
                );

            }

            const html =
                await response.text();

            document.getElementById(
                component.id
            ).innerHTML = html;


            const css =
                document.createElement("link");

            css.rel = "stylesheet";

            css.href = component.css;

            document.head.appendChild(css);

        }

        catch (error) {

            console.error(error);

            document.getElementById(
                component.id
            ).innerHTML = `
                <p style="
                    color:red;
                    padding:30px;
                    font-family:Arial;
                ">
                    Error loading section.
                </p>
            `;

        }

    }

}


/* MOBILE NAVBAR */

const menuButton =
    document.getElementById("menu-btn");

const navLinks =
    document.getElementById("nav-links");


menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

    }
);


navLinks
    .querySelectorAll("a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    });


loadComponents();