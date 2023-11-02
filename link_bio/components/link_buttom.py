import reflex as rx
import link_bio.styles.style as styles
from link_bio.styles.style import sizes as sizes

def link_buttom(title: str, body: str, image: str, url: str) -> rx.Component:
    return rx.link(
            rx.button(
                rx.hstack(
                    rx.image(
                        src=image,
                        width=sizes.BIG.value,
                        height=sizes.BIG.value,
                        margin=sizes.MEDIUM.value
                    ),
                    rx.vstack(
                        rx.text(title, style=styles.buttom_title_style),
                        rx.text(body, style=styles.buttom_body_style),
                        align_items = "start",
                        padding_y=sizes.SMALLL.value
                    )
                )
            ),
            href = url,
            is_external= True,
            width="100%",
    )
    