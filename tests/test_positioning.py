from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class Text(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)


def visible_text(name):
    parser = Text()
    parser.feed((ROOT / name).read_text(encoding="utf-8"))
    return " ".join(" ".join(parser.parts).split())


def test_requested_tagline_is_used_consistently():
    home = visible_text("index.html")
    assert "We put AI to work for you" in home
    assert "We put AI to work in your office" not in home


def test_positioning_feedback_is_on_homepage():
    home = visible_text("index.html")
    for phrase in (
        "Forward-deployed AI engineering for operators who need working systems.",
        "Diagnostic. Install. Operate.",
        "You do not configure another platform. We do the engineering.",
        "No strategy decks. No sandbox demos. No AI workshops.",
    ):
        assert phrase in home
    assert "weeks, not months" not in home
    assert "No one else" not in home


def test_pricing_and_case_study_claims_remain_private_or_absent():
    published = " ".join(
        path.read_text(encoding="utf-8")
        for path in ROOT.glob("*.html")
        if path.name != "pirates.html"
    )
    assert "$12,500" not in published
    assert "$25,000" not in published
    assert "$8,000" not in published
    assert "87%" not in published
