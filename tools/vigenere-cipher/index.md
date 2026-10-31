---
title: "Vigenère Cipher"
seo_title: "Vigenère Cipher — Sergey Romanenko"
description: "A polyalphabetic cipher using a keyword to select different Caesar shifts for each letter — ideal for securing complex travel itineraries and multi-leg journeys."
canonical_url: "https://sergeyromanenko.com/tools/vigenere-cipher/"
markdown_url: "https://sergeyromanenko.com/tools/vigenere-cipher/index.md"
section: "Tools"
language: "en"
robots: "index, follow"
---

1. [TOOLS](https://sergeyromanenko.com/tools/)
2. Vigenère Cipher

# Vigenère Cipher

A polyalphabetic cipher using a keyword to select different Caesar shifts for each letter — ideal for securing complex travel itineraries and multi-leg journeys.

## At a glance

- **Key type:** Keyword
- **Advances on:** Letters
- **Formatting:** Preserved
- **Offline support:** Yes

## What you can do

1. **Keyword shifts**
  Each letter uses a shift chosen by the keyword.
2. **Formatting preserved**
  Non-letters do not consume keyword letters.
3. **Key validation**
  The keyword must contain at least one letter.
4. **Runs offline**
  Everything runs in your browser.

## How it works

The Vigenère cipher uses a keyword to create a polyalphabetic substitution. Each letter of the keyword determines a different Caesar shift, making it more secure than single-letter substitutions while remaining practical for manual encryption.

## The Mathematics

**Encryption:** `C_i = (P_i + K_i) mod 26`

**Decryption:** `P_i = (C_i - K_i) mod 26`

The keyword repeats cyclically: “KEYWORD” → K,E,Y,W,O,R,D,K,E,Y,W,O,R,…

## Travel-Themed Examples

### Camino de Santiago Journey

> “I went to sleep as a pilgrim and woke up as a traveler.” — Mikhail Baryshnikov

**Input:** “PILGRIM TO SANTIAGO”

With keyword “ Camino” (normalized to “CAMINO”):

- P (15) + C (2) = 17 → R
- I (8) + A (0) = 8 → I
- L (11) + M (12) = 23 → X

**Output:** “RIXIX TO NALXJ”

### Sahara Crossing

> “The desert is the mirror of all the treasures of the earth.” — Algerian Proverb

**Input:** “SAHARA DESERT TREASURES”

With keyword “ EXPLORER” (normalized to “EXPLORER”):

- S (18) + E (4) = 22 → W
- A (0) + X (23) = 23 → X

**Output:** “WXRXD RQKI WQKDZ”

## The Vigenère Tableau

Traditional Vigenère uses a 26×26 table where rows represent plaintext letters and columns represent key letters:

```plaintext
       KEYWORD:  K  E  Y  W  O  R
PLAIN: A  K  L  M  N  O  P  Q  R
         B  L  M  N  O  P  Q  R  S
         C  M  N  O  P  Q  R  S  T
         ...
```

## Travel Journey Security

Use Vigenère to protect complex itineraries:

> “We travel together, but we travel alone.” — Anthony Bourdain

**Input:** “TOGETHER, WE TRAVEL ALONE”

With keyword “ JOURNEY”:

- T → G
- O → F
- G → V

**Output:** “GVF, TF SFZ YXMFG”

## Special Features

- **Polyalphabetic:** Different shifts for different positions
- **Keyword driven:** No mathematical key, just a word
- **Flexible length:** Any length keyword works
- **Formatting aware:** Key advances only on letters

## Security Properties

- **Key length matters:** Longer keys → more secure
- **Kasiski examination:** Repeated patterns reveal key length
- **Index of coincidence:** Statistical analysis breaks keys

## Historical Context

The Vigenère cipher was considered unbreakable for centuries, earning the reputation of the “unbreakable cipher.” Cryptanalysts like Charles Babbage and Kasiski discovered its weaknesses in the 19th century.

## References

1. Vigenère, Blaise. “Méthode de déchiffrement des codes cryptographiques.” Paris: Dumont, 1862.
2. Kahn, David. “The Codebreakers.” Macmillan, 1967.
3. Singh, Simon. “The Code Book.” Penguin Books, 2000.

*Vigenère cipher provides flexible security for travel itineraries and journey logging.*

## Details

- **Access:** Free to use, no account
- **Runs in:** Web
- **Year:** 2026

## Related also keyword

- **[Columnar Transposition Cipher](https://sergeyromanenko.com/tools/columnar-transposition/)**
  Arrange text in a grid based on a keyword, then read columns in keyword order — perfect for creating structured travel itineraries and destination orders.

  - keyword
- **[Playfair Cipher](https://sergeyromanenko.com/tools/playfair-cipher/)**
  Encode digraphs using a 5×5 matrix built from a keyword — perfect for secure travel coordination and journey planning.

  - keyword

## Tags

Every tag below is a filter on the catalog: follow one to see the other tools filed under it.

- [vigenere](https://sergeyromanenko.com/tools/?tag=vigenere)
- [polyalphabetic](https://sergeyromanenko.com/tools/?tag=polyalphabetic)
- [keyword](https://sergeyromanenko.com/tools/?tag=keyword)
- [travel itinerary](https://sergeyromanenko.com/tools/?tag=travel+itinerary)
- [journey cipher](https://sergeyromanenko.com/tools/?tag=journey+cipher)
- [keyed substitution](https://sergeyromanenko.com/tools/?tag=keyed+substitution)
- [tableau](https://sergeyromanenko.com/tools/?tag=tableau)

Found this tool useful? [Support independent development](https://sergeyromanenko.com/support/)
