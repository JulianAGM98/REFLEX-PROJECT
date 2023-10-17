import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="DevJG", size = "xl"),
        rx.text("@DevJG"),
        rx.text("""Hola, mi nombre es Julian.
                Soy ingeniero de petróleos apasionado por el desarrollo web y ciencia de datos.
                ¡Bienvendio a mi Web!""")

    )