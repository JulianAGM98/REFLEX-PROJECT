import reflex as rx
from link_bio.components.link_buttom import link_buttom
from link_bio.components.title import title

def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_buttom("My projects", 
                    "Da click para ver mis proyectos", 
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("Youtube",
                     "Mi canal de youtube", 
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("GitHub", 
                    "Todos mis repositorios", 
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("LinkedIN", 
                    "Mi experiencia", 
                    "https://github.com/JulianAGM98"
        ),
        title("Comunidad"),
        link_buttom("My projects", 
                    "Da click para ver mis proyectos", 
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("Youtube",
                     "Mi canal de youtube", 
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("GitHub", 
                    "Todos mis repositorios", 
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("LinkedIN", 
                    "Mi experiencia", 
                    "https://github.com/JulianAGM98"
        ),
        width = "100%",
    )