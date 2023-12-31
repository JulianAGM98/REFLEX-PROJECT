import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.views.header.header import header
from link_bio.views.links.links import links
from link_bio.components.footer import footer
import link_bio.styles.style as styles
from link_bio.styles.style import sizes as sizes

class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.box(
            navbar(),
             rx.center(
                rx.vstack(
                    header(),
                    links(),
                    max_width=styles.MAX_WIDTH,
                    width="100%",
                    margin_y=sizes.BIG.value,
                    padding=sizes.BIG.value
            )
        ),
        footer()
    )

app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    title="Julian Gonzalez | Curriculum Vitae",
    description="Hola, mi nombre es Julián",
)
app.compile()