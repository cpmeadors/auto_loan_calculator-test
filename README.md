# auto_loan_calulator-test
Test plan and cypress test cases for auto load calculator.

Test conditions

page load
- loads defaults

page refresh
- loads defaults

principal
- alpha
- less than 1000
- more than 100000

term
- select length

new/used
- select type

rate
- alpha
- multiple "."
- negative
- 99% or greater

find rate
- click

help
- principal 
- term

output
- payment
- total princ
- total interest

algorithm
- 36 new/used
- 48 new/used
- 60 new/used
- 72 new

Test Cases

1. Verify that the web app loads with default values

Steps:
- Load page from URL.

Expect results:
- Fields should be filled in and outputs displays.
principal = 15000
term = 60 months
type = used
rate = 3
payment = 270
total principal = 15000
total interest = 1172

2. Verify that reloading the web app resets the values to the default values after changing them.

Steps:
- Load page from URL.
- Change values.
- Reload page.

Expect results:
- Fields should be filled in and outputs displays.
principal = 15000
term = 60 months
type = used
rate = 3
payment = 270
total principal = 15000
total interest = 1172

3. Verify that the principal field takes a number between 1000 and 100000

Steps:
- Load page from URL
- Enter a number from 1000 to 100000 (inclusive) in the "How much are you looking to borrow?" field.

Expected results:
- Value is displayed in black font color with blue line under text box

4. Verify that the principal field rejects any other input

Steps:
- Load page from URL
- Enter invalid input in the "How much are you looking to borrow?" field.

Expected results:
- Non-numerical characters are not displayed. A number less that 1000 or greater than 100000 is displayed in orange font color and bar under text entry box is orange.

5. Verify that the term can be selected.

Steps:
- Load page from URL
- Click on entry field for "For how long?"
- Click on any value

Expected results:
- Value is displayed in the field

6. Verify that the type of loan is selectable.

Steps:
- Load page from URL
- Click on the entry field for "Is your vehicle new or used?"
- Click on any value.

Expected results:
- Value is displayed in the field

7. Verify that the interest takes decimal number between 0.0 and 99.0.

Steps:
- Load page from URL
- Enter a decimal number between 0.0 and 99.0 in the "Interest rate" text input box.
- Hit enter of click outside the text input box

Expected results:
- Entered value is displayed in black font with a blue line under the text box

8. Verify that the interest field rejects all other values

Steps:
- Load page from URL
- Enter a non-numerical number, more than one "." (decimal point), a value 0 or less, or a value 99 or greater.

Expected results:
- Entered value is displayed in orange font color, orange line is under the text box, and "Invalid rate" is displayed under the text box.

9. Verify "Find rate box" displays text

10. Verify the help for principal displays text

11. Verify the help for term displays text

12. Verify any change to principal, term, type, rate updates the outputs

13. Verify the algorithm to calculate outputs is correct
