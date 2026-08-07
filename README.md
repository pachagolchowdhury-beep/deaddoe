# deaddoe(mostlye html, css, js)

A collection of high school projects I made as a gullible smoll bean, revamped post-HS/pre-college. Mostly JavaScript calculators with a design pass, plus one Python script.

## Projects

### Interest Calculator (`interest.html`)
Calculates simple or compound interest from principal, rate, and time. Switch interest type from a dropdown, hit calculate, get interest earned and total amount back in ₹.

### Pythagorean Triplet Checker (`triplethreat.html`)
Enter three numbers and check whether they form a Pythagorean triplet (a² + b² = c²). Works regardless of which value is the largest.

### Mixed Calculator (`mixed-calculator.html`)
One calculator, eight operations: power, square root, cube root, logarithm, factorial, absolute value, prime check, and odd/even. Pick an operation, enter the relevant number(s), and calculate.

### `aesthetic.py`
Small script that hits the [Studio Ghibli API](https://ghibliapi.dev) and prints out the title and ID of every Ghibli film in their catalog.

## Running the calculators

No build step, no dependencies. Just open the `.html` file in a browser:

```bash
open interest.html
open triplethreat.html
open mixed-calculator.html
```

## Running `aesthetic.py`

Requires the `requests` library.

```bash
pip install requests
python aesthetic.py
```

## Notes

These started as plain HS coursework and got a styling pass afterward — the calculation logic is original; layout and CSS were reworked later. Any syggestions, correcctions or feedbacks are highly welcome and appreciated!
