import reflex as rx
from link_bio.components.link_buttom import link_buttom

def links() -> rx.Component:
    return rx.vstack(
        link_buttom("My projects", "https://github.com/JulianAGM98"),
        link_buttom("Youtube", "https://github.com/JulianAGM98"),
        link_buttom("GitHub", "https://github.com/JulianAGM98"),
        link_buttom("LinkedIN", "https://github.com/JulianAGM98"),
    )