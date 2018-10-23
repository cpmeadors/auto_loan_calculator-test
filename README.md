# auto_loan_calulator-test
Test plan and cypress test cases for auto load calculator.

page load
- loads defaults

page refresh
- loads defaults

principal
- alpha
- negative
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
- more than 98%

find rate
- click

help
- principal click
- term click

output
- payment
- total princ
- total interest

algorithm
- 36 new/used
- 48 new/used
- 60 new/used
- 72 new


