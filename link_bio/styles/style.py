import reflex as rx
from enum import Enum



# Constats
MAX_WIDTH = "600px"

# Sizes

class sizes(Enum):
    SMALLL = "0.5em",
    MEDIUM = "0.7em",
    DEFAULT = "1em",
    BIG = "2em"


# Styles

BASE_STYLE = {
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": sizes.SMALLL.value,
        "borde_radius": sizes.BIG.value
    },
    rx.Link: {
        "text_decoration": "None",
        "_hover": {}
    }
}

title_style = dict(
    size="lg",
    width="100%",
    padding_top=sizes.DEFAULT.value
)

buttom_title_style = dict(
    font_size=sizes.DEFAULT.value
)

buttom_body_style = dict(
    font_size=sizes.MEDIUM.value
)

