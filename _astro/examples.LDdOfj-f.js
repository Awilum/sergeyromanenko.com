var e=[{id:`variables`,label:`Variables and constants`,blocks:[{id:`declare-integer`,label:`Integer`,description:`Declare a whole-number variable with a starting value.`,template:`DECLARE «Count» : INTEGER ← 0`},{id:`declare-real`,label:`Real`,description:`Declare a decimal variable.`,template:`DECLARE «Price» : REAL ← 0.0`},{id:`declare-boolean`,label:`Boolean`,description:`Declare a TRUE or FALSE variable.`,template:`DECLARE «Ready» : BOOLEAN ← FALSE`},{id:`declare-char`,label:`Character`,description:`Declare a single character in single quotes.`,template:`DECLARE «Initial» : CHAR ← 'A'`},{id:`declare-string`,label:`String`,description:`Declare a text variable.`,template:`DECLARE «Name» : STRING ← ""`},{id:`declare-array`,label:`Array`,description:`Declare a one-dimensional array with fixed bounds.`,template:`DECLARE «Numbers» : ARRAY[1:10] OF INTEGER`},{id:`constant`,label:`Constant`,description:`Declare a named value that cannot be reassigned.`,template:`CONSTANT «MaxSize» = 100`}]},{id:`input-output`,label:`Input and output`,blocks:[{id:`output-text`,label:`Output text`,description:`Print a line of text.`,template:`OUTPUT "«Hello, world!»", "\\n"`},{id:`output-values`,label:`Output values`,description:`Print a label followed by a variable.`,template:`OUTPUT "«Result: »", Result, "\\n"`},{id:`input-prompt`,label:`Input with prompt`,description:`Ask a question and store the answer in a variable.`,template:`INPUT "Enter a value: ", «Value»`},{id:`input-plain`,label:`Input`,description:`Read a value without showing a prompt.`,template:`INPUT «Value»`},{id:`comment`,label:`Comment`,description:`Leave a note for the next reader.`,template:`// «Explain what this step does»`}]},{id:`assignment`,label:`Assignment`,blocks:[{id:`assign-value`,label:`Assign a value`,description:`Store a new value in a variable.`,template:`«Count» ← 0`},{id:`assign-update`,label:`Add one`,description:`Increase a counter by one.`,template:`Count ← Count + «1»`},{id:`array-element`,label:`Set an array element`,description:`Write a value at one index of an array.`,template:`Numbers[«1»] ← «0»`}]},{id:`selection`,label:`Selection`,blocks:[{id:`if`,label:`IF`,description:`Run a block only when a condition is TRUE.`,template:`IF «condition» THEN
   
ENDIF`},{id:`if-else`,label:`IF and ELSE`,description:`Choose between two blocks.`,template:`IF «condition» THEN
   
ELSE
   
ENDIF`},{id:`if-elseif-else`,label:`IF, ELSEIF and ELSE`,description:`Test several conditions in order.`,template:`IF «condition» THEN
   
ELSEIF condition THEN
   
ELSE
   
ENDIF`},{id:`case-of`,label:`CASE OF`,description:`Compare one value against several options.`,template:`CASE OF «Value»
   «1»
      
   OTHERWISE
      
ENDCASE`}]},{id:`loops`,label:`Loops`,blocks:[{id:`for`,label:`FOR`,description:`Count from one value to another.`,template:`FOR i ← 1 TO «10» DO
   
NEXT i`},{id:`for-step`,label:`FOR with STEP`,description:`Count down, or count in steps other than one.`,template:`FOR i ← «10» TO 1 STEP -1 DO
   
NEXT i`},{id:`while`,label:`WHILE`,description:`Repeat while a condition stays TRUE.`,template:`WHILE «condition» DO
   
ENDWHILE`},{id:`repeat`,label:`REPEAT and UNTIL`,description:`Run a block once, then repeat until a condition is TRUE.`,template:`REPEAT
   
UNTIL «condition»
ENDREPEAT`}]},{id:`subprograms`,label:`Procedures and functions`,blocks:[{id:`procedure`,label:`Procedure`,description:`Define a procedure with no parameters.`,template:`PROCEDURE «Greet»()
   
ENDPROCEDURE`},{id:`procedure-params`,label:`Procedure with a parameter`,description:`Define a procedure that receives a value.`,template:`PROCEDURE «Greet»(Name : STRING)
   
ENDPROCEDURE`},{id:`function`,label:`Function`,description:`Define a function that returns a value.`,template:`FUNCTION «Add»(A : INTEGER, B : INTEGER) RETURNS INTEGER
   RETURN «A + B»
ENDFUNCTION`},{id:`call`,label:`Call a procedure`,description:`Run a procedure that has already been defined.`,template:`CALL «Greet»()`},{id:`return`,label:`Return a value`,description:`Leave a function and hand a value back.`,template:`RETURN «value»`}]},{id:`arrays`,label:`Working with arrays`,blocks:[{id:`array-fill`,label:`Fill an array`,description:`Visit every index and store a value.`,template:`FOR i ← 1 TO «10» DO
   Numbers[i] ← «0»
NEXT i`},{id:`array-traverse`,label:`Traverse an array`,description:`Print every element in order.`,template:`FOR i ← 1 TO «10» DO
   OUTPUT Numbers[i], "\\n"
NEXT i`}]}],t=e.flatMap(e=>e.blocks),n=t.length,r=new Map(t.map(e=>[e.id,e]));function i(e){return r.get(e)}var a=[`declare-integer`,`assign-value`,`input-prompt`,`output-text`,`if-else`,`for`,`while`,`repeat`,`procedure`,`function`].map(e=>i(e)).filter(e=>e!==void 0),o=[{id:`hello`,title:`Hello, world`,group:`Fundamentals`,note:`The smallest program that says something. The space after the comma is inside the string, because OUTPUT puts nothing between its items.`,expectedOutput:`Hello, world!`,code:`OUTPUT "Hello, world!"`},{id:`variables`,title:`Variables and assignment`,group:`Fundamentals`,note:`Three types declared side by side. Every name is declared before it is used, and the type decides what may be stored in it.`,expectedOutput:`Count: 7
Pi is about 3.14
Ready: TRUE
`,code:`DECLARE Count : INTEGER ← 7
DECLARE Pi : REAL ← 3.14159
DECLARE Ready : BOOLEAN ← TRUE

OUTPUT "Count: ", Count, "\\n"
OUTPUT "Pi is about ", INT(Pi * 100) / 100, "\\n"
OUTPUT "Ready: ", Ready, "\\n"`},{id:`arithmetic`,title:`Arithmetic`,group:`Fundamentals`,note:`The ways to do arithmetic, and the one that behaves differently. DIV drops the decimal part, MOD keeps the remainder, and / always gives a REAL back.`,expectedOutput:`7 + 3 = 10
7 - 3 = 4
7 * 3 = 21
7 / 3 = 2.33333333333
7 DIV 3 = 2
7 MOD 3 = 1
2 ^ 10 = 1024
`,code:`OUTPUT "7 + 3 = ", 7 + 3, "\\n"
OUTPUT "7 - 3 = ", 7 - 3, "\\n"
OUTPUT "7 * 3 = ", 7 * 3, "\\n"
OUTPUT "7 / 3 = ", 7 / 3, "\\n"
OUTPUT "7 DIV 3 = ", 7 DIV 3, "\\n"
OUTPUT "7 MOD 3 = ", 7 MOD 3, "\\n"
OUTPUT "2 ^ 10 = ", 2 ^ 10, "\\n"`},{id:`strings`,title:`Joining text`,group:`Fundamentals`,note:`The & operator joins text. It is the only way to build a sentence out of pieces, and it is why a STRING cannot be added to a number with +.`,expectedOutput:`Ada Lovelace, born 1815
ADA LOVELACE
ada lovelace
Name has 12 characters
`,code:`DECLARE First : STRING ← "Ada"
DECLARE Last : STRING ← "Lovelace"
DECLARE Year : INTEGER ← 1815

DECLARE Full : STRING ← First & " " & Last

OUTPUT Full, ", born ", Year, "\\n"
OUTPUT UCASE(Full), "\\n"
OUTPUT LCASE(Full), "\\n"
OUTPUT "Name has ", LENGTH(Full), " characters\\n"`},{id:`comparison`,title:`Comparisons and Boolean logic`,group:`Fundamentals`,note:`Every comparison gives TRUE or FALSE, and those are the only values AND, OR and NOT accept. The two are different things: 7 is a number, 7 > 3 is TRUE.`,expectedOutput:`10 > 3 is TRUE
10 = 3 is FALSE
10 <> 3 is TRUE
TRUE AND FALSE is FALSE
TRUE OR FALSE is TRUE
NOT FALSE is TRUE
`,code:`DECLARE a : INTEGER ← 10
DECLARE b : INTEGER ← 3

OUTPUT a, " > ", b, " is ", a > b, "\\n"
OUTPUT a, " = ", b, " is ", a = b, "\\n"
OUTPUT a, " <> ", b, " is ", a <> b, "\\n"
OUTPUT "TRUE AND FALSE is ", TRUE AND FALSE, "\\n"
OUTPUT "TRUE OR FALSE is ", TRUE OR FALSE, "\\n"
OUTPUT "NOT FALSE is ", NOT FALSE, "\\n"`},{id:`input`,title:`Reading input`,group:`Fundamentals`,note:`INPUT stops the program and waits. Each value is checked against the type the variable was declared with, so a letter typed into an INTEGER is refused rather than quietly read as zero.`,expectedOutput:`Hello, Sam!
You typed: Sam
Half of 20 is 10
`,inputs:[`Sam`,`20`],code:`DECLARE Name : STRING
DECLARE Age : INTEGER

INPUT "What is your name?", Name
OUTPUT "Hello, ", Name, "!\\n"

INPUT Age
OUTPUT "You typed: ", Name, "\\n"
OUTPUT "Half of ", Age, " is ", Age DIV 2, "\\n"`},{id:`if-else`,title:`IF and ELSE`,group:`Control flow`,note:`A condition picks one of two blocks. Only the block that is chosen runs, which is the whole point of the IF.`,expectedOutput:`25 is above 20
15 is not above 20
`,code:`DECLARE Reading : INTEGER ← 25

IF Reading > 20 THEN
  OUTPUT Reading, " is above 20\\n"
ELSE
  OUTPUT Reading, " is not above 20\\n"
ENDIF

DECLARE Second : INTEGER ← 15

IF Second > 20 THEN
  OUTPUT Second, " is above 20\\n"
ELSE
  OUTPUT Second, " is not above 20\\n"
ENDIF`},{id:`elseif`,title:`ELSEIF chains`,group:`Control flow`,note:`ELSEIF is tested only when everything above it failed, so the first match wins and the rest are skipped.`,expectedOutput:`B
`,code:`DECLARE Grade : INTEGER ← 71

IF Grade >= 80 THEN
  OUTPUT "A\\n"
ELSEIF Grade >= 70 THEN
  OUTPUT "B\\n"
ELSEIF Grade >= 60 THEN
  OUTPUT "C\\n"
ELSE
  OUTPUT "D\\n"
ENDIF`},{id:`nested-conditions`,title:`Nested conditions`,group:`Control flow`,note:`An IF can sit inside the block of another IF. Each ENDIF closes the IF it belongs to, so the inner one comes first. Change b to an odd number and the other branch runs.`,expectedOutput:`Both numbers are even
`,code:`DECLARE a : INTEGER ← 4
DECLARE b : INTEGER ← 6

IF a MOD 2 = 0 THEN
  IF b MOD 2 = 0 THEN
    OUTPUT "Both numbers are even\\n"
  ELSE
    OUTPUT "Only the first is even\\n"
  ENDIF
ENDIF`},{id:`case-of`,title:`CASE OF`,group:`Control flow`,note:`CASE compares one value against a list and runs the first that matches. One arm can list several values, and OTHERWISE catches everything left over.`,expectedOutput:`Monday starts with M
`,code:`DECLARE Day : STRING ← "Monday"

CASE OF Day
  "Monday"
    OUTPUT Day, " starts with M\\n"
  "Tuesday", "Wednesday", "Thursday"
    OUTPUT Day, " is a weekday\\n"
  OTHERWISE
    OUTPUT "That day is not a weekday\\n"
ENDCASE`},{id:`for-loop`,title:`FOR loop`,group:`Control flow`,note:`The counter is set to each value from the first to the last, inclusive, and the body runs once per value. If the first value is already past the last, the body never runs.`,expectedOutput:`3
6
9
12
15
`,code:`FOR Count ← 3 TO 15 STEP 3 DO
  OUTPUT Count, "\\n"
NEXT Count`},{id:`for-down`,title:`Counting down`,group:`Control flow`,note:`A negative STEP turns the same loop round. The loop ends the moment the counter goes past the last value, so it does not wrap around.`,expectedOutput:`5
4
3
2
1
`,code:`FOR Count ← 5 TO 1 STEP -1 DO
  OUTPUT Count, "\\n"
NEXT Count`},{id:`while-loop`,title:`WHILE loop`,group:`Control flow`,note:`The condition is tested before the body. If it is FALSE to begin with, the body never runs at all.`,expectedOutput:`1
4
7
10
Counting up to: 13
`,code:`DECLARE n : INTEGER ← 1

WHILE n <= 10 DO
  OUTPUT n, "\\n"
  n ← n + 3
ENDWHILE

OUTPUT "Counting up to: ", n, "\\n"`},{id:`repeat-until`,title:`REPEAT and UNTIL`,group:`Control flow`,note:`The condition is tested after the body, so the body always runs at least once. That is the difference from WHILE, and it matters when the body is what changes the condition.`,expectedOutput:`Entering the body
Entering the body
Entering the body
Leaving with: 3
`,code:`DECLARE tries : INTEGER ← 0

REPEAT
  OUTPUT "Entering the body\\n"
  tries ← tries + 1
UNTIL tries >= 3
ENDREPEAT

OUTPUT "Leaving with: ", tries, "\\n"`},{id:`nested-loops`,title:`Nested loops`,group:`Control flow`,note:`A loop inside a loop runs its inner counter all the way round for each turn of the outer one. Repeating the counter after NEXT keeps the two apart.`,expectedOutput:`1 1
1 2
1 3
2 1
2 2
2 3
`,code:`FOR Row ← 1 TO 2 DO
  FOR Column ← 1 TO 3 DO
    OUTPUT Row, " ", Column, "\\n"
  NEXT Column
NEXT Row`},{id:`arrays`,title:`Arrays`,group:`Data structures`,note:`An array holds a fixed number of values of one type. The bounds are written down, and indices count from 1.`,expectedOutput:`First: 4
Second: 8
Third: 15
All three: 4, 8, 15
`,code:`DECLARE Scores : ARRAY[1:3] OF INTEGER

Scores[1] ← 4
Scores[2] ← 8
Scores[3] ← 15

OUTPUT "First: ", Scores[1], "\\n"
OUTPUT "Second: ", Scores[2], "\\n"
OUTPUT "Third: ", Scores[3], "\\n"
OUTPUT "All three: ", Scores[1], ", ", Scores[2], ", ", Scores[3], "\\n"`},{id:`array-fill`,title:`Filling an array`,group:`Data structures`,note:`Declare the array empty, then write into it with a loop. The counter runs from 1 to the number of elements, which is why arrays here count from 1.`,expectedOutput:`2 4 6 8 10 
`,code:`DECLARE Numbers : ARRAY[1:5] OF INTEGER

FOR i ← 1 TO 5 DO
  Numbers[i] ← i * 2
NEXT i

FOR i ← 1 TO 5 DO
  OUTPUT Numbers[i], " "
NEXT i
OUTPUT "\\n"`},{id:`array-traversal`,title:`Traversing an array`,group:`Data structures`,note:`A running total is the most common thing a loop over an array does. The total is declared and set to 0 before the loop, then added to on each turn.`,expectedOutput:`Total: 55
Average: 11
`,code:`DECLARE Numbers : ARRAY[1:5] OF INTEGER
DECLARE Total : INTEGER ← 0

Numbers[1] ← 4
Numbers[2] ← 12
Numbers[3] ← 7
Numbers[4] ← 19
Numbers[5] ← 13

FOR i ← 1 TO 5 DO
  Total ← Total + Numbers[i]
NEXT i

OUTPUT "Total: ", Total, "\\n"
OUTPUT "Average: ", Total DIV 5, "\\n"`},{id:`min-max`,title:`Minimum and maximum`,group:`Data structures`,note:`Seed both with the first element rather than with 0. Starting at 0 gives the wrong answer the moment every value in the array is negative.`,expectedOutput:`Minimum: -4
Maximum: 29
Index of the minimum: 2
`,code:`DECLARE Numbers : ARRAY[1:6] OF INTEGER
DECLARE Smallest : INTEGER
DECLARE Largest : INTEGER
DECLARE Where : INTEGER ← 1

Numbers[1] ← 12
Numbers[2] ← -4
Numbers[3] ← 7
Numbers[4] ← 29
Numbers[5] ← 3
Numbers[6] ← 15

Smallest ← Numbers[1]
Largest ← Numbers[1]

FOR i ← 2 TO 6 DO
  IF Numbers[i] < Smallest THEN
    Smallest ← Numbers[i]
    Where ← i
  ENDIF
  IF Numbers[i] > Largest THEN
    Largest ← Numbers[i]
  ENDIF
NEXT i

OUTPUT "Minimum: ", Smallest, "\\n"
OUTPUT "Maximum: ", Largest, "\\n"
OUTPUT "Index of the minimum: ", Where, "\\n"`},{id:`count-occurrences`,title:`Counting how many`,group:`Data structures`,note:`Counting is a sum of ones. Every time a value matches, add one; otherwise leave the count alone.`,expectedOutput:`Found 3 at index 1
Found 3 at index 5
Total: 2
`,code:`DECLARE Numbers : ARRAY[1:6] OF INTEGER
DECLARE Target : INTEGER ← 3
DECLARE Count : INTEGER ← 0

Numbers[1] ← 3
Numbers[2] ← 8
Numbers[3] ← 1
Numbers[4] ← 6
Numbers[5] ← 3
Numbers[6] ← 9

FOR i ← 1 TO 6 DO
  IF Numbers[i] = Target THEN
    OUTPUT "Found ", Target, " at index ", i, "\\n"
    Count ← Count + 1
  ENDIF
NEXT i

OUTPUT "Total: ", Count, "\\n"`},{id:`array-transform`,title:`Changing every element`,group:`Data structures`,note:`Writing back to the array inside the loop turns one set of numbers into another. The array itself does not move, only its contents do.`,expectedOutput:`2 4 6 8 
`,code:`DECLARE Numbers : ARRAY[1:4] OF INTEGER

Numbers[1] ← 1
Numbers[2] ← 2
Numbers[3] ← 3
Numbers[4] ← 4

FOR i ← 1 TO 4 DO
  Numbers[i] ← Numbers[i] * 2
NEXT i

FOR i ← 1 TO 4 DO
  OUTPUT Numbers[i], " "
NEXT i
OUTPUT "\\n"`},{id:`linear-search`,title:`Linear search`,group:`Algorithms`,note:`Check every element in turn and remember where the match was. It works on any order, which is why it is the fallback when a sorted array is not available.`,expectedOutput:`Found 42 at index 4
Not found: 99
`,code:`DECLARE Numbers : ARRAY[1:8] OF INTEGER
DECLARE Target : INTEGER ← 42
DECLARE Found : INTEGER ← 0

Numbers[1] ← 5
Numbers[2] ← 17
Numbers[3] ← 9
Numbers[4] ← 42
Numbers[5] ← 3
Numbers[6] ← 21
Numbers[7] ← 8
Numbers[8] ← 14

FOR i ← 1 TO 8 DO
  IF Numbers[i] = Target THEN
    Found ← i
  ENDIF
NEXT i

IF Found > 0 THEN
  OUTPUT "Found ", Target, " at index ", Found, "\\n"
ELSE
  OUTPUT "Not found: ", Target, "\\n"
ENDIF

DECLARE Missing : INTEGER ← 99
DECLARE AlsoFound : INTEGER ← 0

FOR i ← 1 TO 8 DO
  IF Numbers[i] = Missing THEN
    AlsoFound ← i
  ENDIF
NEXT i

IF AlsoFound > 0 THEN
  OUTPUT "Found ", Missing, " at index ", AlsoFound, "\\n"
ELSE
  OUTPUT "Not found: ", Missing, "\\n"
ENDIF`},{id:`binary-search`,title:`Binary search`,group:`Algorithms`,note:`Halve the range every turn, so the array is searched in about log2(n) steps rather than n. It only works on a sorted array, which is the catch.`,expectedOutput:`Found 23 at index 5
50 is not in the list
`,code:`FUNCTION Find(Sorted : ARRAY[1:10] OF INTEGER, Item : INTEGER) RETURNS INTEGER
  DECLARE Low : INTEGER ← 1
  DECLARE High : INTEGER ← 10
  DECLARE Result : INTEGER ← 0

  WHILE Low <= High DO
    DECLARE Middle : INTEGER ← (Low + High) DIV 2
    IF Sorted[Middle] = Item THEN
      Result ← Middle
      Low ← High + 1
    ELSE
      IF Sorted[Middle] < Item THEN
        Low ← Middle + 1
      ELSE
        High ← Middle - 1
      ENDIF
    ENDIF
  ENDWHILE

  RETURN Result
ENDFUNCTION

DECLARE Numbers : ARRAY[1:10] OF INTEGER

Numbers[1] ← 2
Numbers[2] ← 5
Numbers[3] ← 9
Numbers[4] ← 14
Numbers[5] ← 23
Numbers[6] ← 31
Numbers[7] ← 42
Numbers[8] ← 55
Numbers[9] ← 60
Numbers[10] ← 78

DECLARE Hit : INTEGER ← Find(Numbers, 23)

IF Hit > 0 THEN
  OUTPUT "Found 23 at index ", Hit, "\\n"
ELSE
  OUTPUT "23 is not in the list\\n"
ENDIF

DECLARE Miss : INTEGER ← Find(Numbers, 50)

IF Miss > 0 THEN
  OUTPUT "Found 50 at index ", Miss, "\\n"
ELSE
  OUTPUT "50 is not in the list\\n"
ENDIF`},{id:`bubble-sort`,title:`Bubble sort`,group:`Algorithms`,note:`Walk the array over and over, swapping neighbours that are the wrong way round. Each pass puts the largest value left at the end, so the range to walk shrinks by one every time.`,expectedOutput:`1 2 5 7 9 12 18 20 33 44 
`,code:`DECLARE Numbers : ARRAY[1:10] OF INTEGER

Numbers[1] ← 44
Numbers[2] ← 12
Numbers[3] ← 5
Numbers[4] ← 33
Numbers[5] ← 1
Numbers[6] ← 18
Numbers[7] ← 9
Numbers[8] ← 2
Numbers[9] ← 20
Numbers[10] ← 7

FOR Pass ← 1 TO 9 DO
  FOR i ← 1 TO 10 - Pass DO
    IF Numbers[i] > Numbers[i + 1] THEN
      DECLARE Swap : INTEGER ← Numbers[i]
      Numbers[i] ← Numbers[i + 1]
      Numbers[i + 1] ← Swap
    ENDIF
  NEXT i
NEXT Pass

FOR i ← 1 TO 10 DO
  OUTPUT Numbers[i], " "
NEXT i
OUTPUT "\\n"`},{id:`gcd`,title:`Greatest common divisor`,group:`Algorithms`,note:`Euclid's method: replace the pair with the second number and the remainder, over and over, until the remainder is zero. The last non-zero value is the answer.`,expectedOutput:`The greatest common divisor of 1071 and 462 is 21
`,code:`FUNCTION GreatestCommonDivisor(a : INTEGER, b : INTEGER) RETURNS INTEGER
  WHILE b <> 0 DO
    DECLARE Remainder : INTEGER ← a MOD b
    a ← b
    b ← Remainder
  ENDWHILE
  RETURN a
ENDFUNCTION

DECLARE First : INTEGER ← 1071
DECLARE Second : INTEGER ← 462

OUTPUT "The greatest common divisor of ", First, " and ", Second, " is ", GreatestCommonDivisor(First, Second), "\\n"`},{id:`factorial`,title:`Factorial`,group:`Algorithms`,note:`Each turn multiplies the running total by the next number. Once the counter passes the limit, multiplying by 0 would give 0, so the loop stops before that.`,expectedOutput:`10! is 3628800
`,code:`DECLARE Limit : INTEGER ← 10
DECLARE Factorial : INTEGER ← 1

FOR i ← 1 TO Limit DO
  Factorial ← Factorial * i
NEXT i

OUTPUT Limit, "! is ", Factorial, "\\n"`},{id:`fibonacci`,title:`Fibonacci`,group:`Algorithms`,note:`Each number is the sum of the two before it. The two rolling variables are what let a loop produce a sequence it is also computing.`,expectedOutput:`0 1 1 2 3 5 8 13 21 34 55 
`,code:`DECLARE Previous : INTEGER ← 0
DECLARE Current : INTEGER ← 1

OUTPUT Previous, " "
FOR i ← 1 TO 10 DO
  OUTPUT Current, " "
  DECLARE Following : INTEGER ← Previous + Current
  Previous ← Current
  Current ← Following
NEXT i
OUTPUT "\\n"`},{id:`sum-range`,title:`Summing a range`,group:`Algorithms`,note:`The arithmetic shortcut and the loop that gets the same answer. That they agree is how you know the loop is right. Note that FROM and TO are reserved words, so the bounds are held in names of their own.`,expectedOutput:`Loop: 500500
Shortcut: 500500
`,code:`DECLARE Lowest : INTEGER ← 1
DECLARE Highest : INTEGER ← 1000
DECLARE Running : INTEGER ← 0

FOR i ← Lowest TO Highest DO
  Running ← Running + i
NEXT i

OUTPUT "Loop: ", Running, "\\n"
OUTPUT "Shortcut: ", (Lowest + Highest) * (Highest - Lowest + 1) DIV 2, "\\n"`},{id:`prime-test`,title:`Testing for a prime`,group:`Algorithms`,note:`Only check up to the square root: if a number divides by something bigger, the smaller partner already proved it. The root rises quickly, which is why this is fast even for a large number.`,expectedOutput:`97 is prime
91 is not prime
`,code:`FUNCTION IsPrime(Number : INTEGER) RETURNS BOOLEAN
  IF Number < 2 THEN
    RETURN FALSE
  ENDIF

  DECLARE Limit : INTEGER ← 2
  WHILE Limit * Limit <= Number DO
    IF Number MOD Limit = 0 THEN
      RETURN FALSE
    ENDIF
    Limit ← Limit + 1
  ENDWHILE

  RETURN TRUE
ENDFUNCTION

IF IsPrime(97) THEN
  OUTPUT "97 is prime\\n"
ELSE
  OUTPUT "97 is not prime\\n"
ENDIF

IF IsPrime(91) THEN
  OUTPUT "91 is prime\\n"
ELSE
  OUTPUT "91 is not prime\\n"
ENDIF`},{id:`first-procedure`,title:`Defining and calling a procedure`,group:`Functions and procedures`,note:`A procedure runs and produces nothing. CALL is a complete statement on its own, and the brackets are written even when there are no arguments.`,expectedOutput:`The answer is 42
The answer is 42
`,code:`PROCEDURE ShowAnswer()
  OUTPUT "The answer is ", 42, "\\n"
ENDPROCEDURE

CALL ShowAnswer()
CALL ShowAnswer()`},{id:`parameters`,title:`Parameters`,group:`Functions and procedures`,note:`Arguments are passed by value unless BYREF is written, so the procedure works on its own copy and the caller is unaffected.`,expectedOutput:`Inside, doubled: 20
Outside, unchanged: 10
`,code:`PROCEDURE Double(Number : INTEGER)
  OUTPUT "Inside, doubled: ", Number * 2, "\\n"
ENDPROCEDURE

DECLARE Value : INTEGER ← 10

CALL Double(Value)
OUTPUT "Outside, unchanged: ", Value, "\\n"`},{id:`byref`,title:`Passing by reference`,group:`Functions and procedures`,note:`A BYREF parameter and the caller's variable are one piece of storage under two names, so writing to it inside the procedure changes it outside.`,expectedOutput:`Before: 3 8
After: 8 3
`,code:`PROCEDURE Swap(BYREF First : INTEGER, BYREF Second : INTEGER)
  DECLARE Holding : INTEGER ← First
  First ← Second
  Second ← Holding
ENDPROCEDURE

DECLARE a : INTEGER ← 3
DECLARE b : INTEGER ← 8

OUTPUT "Before: ", a, " ", b, "\\n"
CALL Swap(a, b)
OUTPUT "After: ", a, " ", b, "\\n"`},{id:`first-function`,title:`Defining and calling a function`,group:`Functions and procedures`,note:`A function gives a value back, so it is used inside an expression and is never called with CALL. RETURNS says what type that value is.`,expectedOutput:`The larger of 14 and 9 is 14
`,code:`FUNCTION Larger(First : INTEGER, Second : INTEGER) RETURNS INTEGER
  IF First > Second THEN
    RETURN First
  ELSE
    RETURN Second
  ENDIF
ENDFUNCTION

OUTPUT "The larger of 14 and 9 is ", Larger(14, 9), "\\n"`},{id:`local-variables`,title:`Local variables`,group:`Functions and procedures`,note:`Names declared inside a procedure belong to that procedure. Two procedures can both use a name called Count without either seeing the other.`,expectedOutput:`Counting up: 1 2 3 
Counting down: 3 2 1 
`,code:`PROCEDURE CountUp(Times : INTEGER)
  DECLARE Count : INTEGER ← 1
  FOR i ← 1 TO Times DO
    OUTPUT Count, " "
    Count ← Count + 1
  NEXT i
ENDPROCEDURE

PROCEDURE CountDown(Times : INTEGER)
  DECLARE Count : INTEGER ← Times
  FOR i ← 1 TO Times DO
    OUTPUT Count, " "
    Count ← Count - 1
  NEXT i
ENDPROCEDURE

OUTPUT "Counting up: "
CALL CountUp(3)
OUTPUT "\\n"
OUTPUT "Counting down: "
CALL CountDown(3)
OUTPUT "\\n"`},{id:`recursion`,title:`Recursion`,group:`Functions and procedures`,note:`A function that calls itself, with a case that stops it. Without the base case the calls never end, which is what the step limit is there to catch.`,expectedOutput:`factorial(6) = 720
`,code:`FUNCTION Factorial(Number : INTEGER) RETURNS INTEGER
  IF Number <= 1 THEN
    RETURN 1
  ENDIF
  RETURN Number * Factorial(Number - 1)
ENDFUNCTION

OUTPUT "factorial(6) = ", Factorial(6), "\\n"`},{id:`passed-and-returned`,title:`By value and by reference together`,group:`Functions and procedures`,note:`A function that reads an array without changing it, and a procedure that sorts one it is allowed to change. The same list is both.`,expectedOutput:`Largest: 88
Array after: 3 7 12 25 88 
`,code:`FUNCTION FindLargest(List : ARRAY[1:100] OF INTEGER, HowMany : INTEGER) RETURNS INTEGER
  DECLARE Largest : INTEGER ← List[1]
  FOR i ← 2 TO HowMany DO
    IF List[i] > Largest THEN
      Largest ← List[i]
    ENDIF
  NEXT i
  RETURN Largest
ENDFUNCTION

PROCEDURE Sort(BYREF List : ARRAY[1:100] OF INTEGER, HowMany : INTEGER)
  FOR Pass ← 1 TO HowMany - 1 DO
    FOR i ← 1 TO HowMany - Pass DO
      IF List[i] > List[i + 1] THEN
        DECLARE Swap : INTEGER ← List[i]
        List[i] ← List[i + 1]
        List[i + 1] ← Swap
      ENDIF
    NEXT i
  NEXT Pass
ENDPROCEDURE

DECLARE Numbers : ARRAY[1:5] OF INTEGER

Numbers[1] ← 25
Numbers[2] ← 3
Numbers[3] ← 88
Numbers[4] ← 7
Numbers[5] ← 12

OUTPUT "Largest: ", FindLargest(Numbers, 5), "\\n"

CALL Sort(Numbers, 5)

OUTPUT "Array after: "
FOR i ← 1 TO 5 DO
  OUTPUT Numbers[i], " "
NEXT i
OUTPUT "\\n"`}],s=[...new Set(o.map(e=>e.group))];function c(e){return o.find(t=>t.id===e)}var l=c(`hello`)?.code??`OUTPUT "Hello, world!"`;export{e as a,n as i,o as n,a as o,s as r,i as s,l as t};