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


def test_board_lock_tagline_is_used_consistently():
    home = visible_text("index.html")
    assert "We put AI to work in your office." in home
    assert "We put AI to work for you" not in home
    assert "If you don’t have an AI team, we are it." in home


def test_forbidden_recut_copy_is_absent():
    home = visible_text("index.html")
    for phrase in (
        "Forward-deployed AI engineering",
        "Diagnostic. Install. Operate.",
        "No strategy decks. No sandbox demos. No AI workshops.",
        "We follow up until they book",
        "We work last week’s unworked leads",
        "Tomorrow’s call list",
        "8am Call Pack",
    ):
        assert phrase not in home


def test_pricing_and_case_study_claims_remain_private_or_absent():
    published = " ".join(
        path.read_text(encoding="utf-8")
        for path in ROOT.glob("*.html")
        if path.name != "pirates.html"
    )
    assert "$12,500" not in published
    assert "$25,000" not in published
    assert "$8,000" not in published
    assert "$4,000" not in published
    assert "$4k" not in published
    assert "Four days free" not in published
    assert "Five days free" not in published
    assert "87%" not in published
