import reflex as rx
import link_bio.styles.style as styles

def link_buttom(title: str, body: str, url: str) -> rx.Component:
    return rx.link(
            rx.button(
                rx.hstack(
                    rx.icon(
                        tag="arrow_forward",
                        width=styles.sizes.DEFAULT.value,
                        height=styles.sizes.BIG.value
                    ),
                    rx.vstack(
                    rx.text(title, style=styles.buttom_title_style),
                    rx.text(body, style=styles.buttom_body_style),
                    align_items = "start"
                    )
                )
            ),
            href = url,
            is_external= True,
            width="100%",
    )
    