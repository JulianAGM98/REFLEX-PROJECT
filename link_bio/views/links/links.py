import reflex as rx
from link_bio.components.link_buttom import link_buttom
from link_bio.components.title import title
import link_bio.constants as constants

def links() -> rx.Component:
    return rx.vstack(
        title("Mi experiencia"),
        link_buttom("My projects", 
                    "Da click para ver mis proyectos",
                    "icons/user-tie-solid.svg",  
                    constants.GITHUB_URL
        ),
        title("Mi formación"),
        link_buttom("Backend Developer Jr", 
                    "Alura Latam - Oracle | 03/2023 - 10/2023",
                    "icons/hive.svg",  
                    constants.GITHUB_URL
        ),
        link_buttom("Ingeniero de petróleos", 
                    "Universidad Industrial de Santander | 08/2016 - 12/2021",
                    "icons/graduation-cap-solid.svg" ,
                    constants.GITHUB_URL
        ),
        title("Cursos"),
        link_buttom("xxxxxx", 
                    "xxxxxxx", 
                    "/icons/book.svg" ,
                    "https://github.com/JulianAGM98"
        ),
        title("Redes sociales"),
        link_buttom("LinkedIN", 
                    "xxxxxxx", 
                    "/icons/linkedin.svg" ,
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("Youtube",
                     "Mi canal de youtube", 
                     "icons/youtube.svg" ,
                    "https://github.com/JulianAGM98"
        ),
        link_buttom("Instagram", 
                    "xxxxxx",
                    "icons/instagram.svg" , 
                    "https://github.com/JulianAGM98"
        ),        
        link_buttom("GitHub", 
                    "Todos mis repositorios",
                    "icons/github.svg" , 
                    "https://github.com/JulianAGM98"
        ),
        title("Contactame"),
        link_buttom("Email", 
        constants.EMAIL,
        "icons/envelope-solid.svg" ,
        f"mailto:{constants.EMAIL}"
        ),
        width = "100%",
    )