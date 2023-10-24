import reflex as rx
import datetime
from link_bio.styles.style import sizes as sizes

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(
            f"@ 2022 - {datetime.date.today().year} Desing By: DevJG",
            href="https://github.com/JulianAGM98/REFLEX-PROJECT",
            is_external = True,
            font_size=sizes.MEDIUM.value
        ),
         margin_bottom=sizes.BIG.value 
    )