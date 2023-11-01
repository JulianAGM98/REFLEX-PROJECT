import reflex as rx
import datetime
from link_bio.styles.style import sizes as sizes
from link_bio.styles.colors import TextColor as TextColor

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(
            f"© 2022 - {datetime.date.today().year} Desing By: DevJG",
            href="https://github.com/JulianAGM98/REFLEX-PROJECT",
            is_external = True,
            font_size = sizes.MEDIUM.value,
            margin_top=sizes.ZERO.value
        ),
         margin_bottom = sizes.BIG.value ,
         padding_bottom = sizes.BIG.value,
         color=TextColor.FOOTER.value
    )