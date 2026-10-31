import{B as e,Dt as t,E as n,N as r,O as i,Ot as a,Tt as o,W as s,_ as c,c as l,d as u,et as d,g as f,h as p,j as m,k as h,l as g,n as _,s as v,u as y,z as b}from"./runtime-core.esm-bundler.Df01BWvV.js";import{t as x}from"./Button.DeN305sW.js";import{t as S}from"./Label.D0QCzdU2.js";import{t as ee}from"./Textarea.Cn7zCQf_.js";import{G as C,J as te,M as w,N as T,O as ne,S as re,X as E,Y as D,Z as O,_ as k,l as A,o as ie,p as j,q as M,r as N,rt as P,t as F,tt as I,w as L,x as ae}from"./dist.Bz8DRcNs.js";import{i as oe,n as se,r as ce,t as le}from"./dist.BCkYHo3v.js";import{n as R,r as z}from"./dist.D4JKbksj.js";import{i as B,n as V,r as H}from"./dist.AwvbB1g1.js";import{t as U}from"./_plugin-vue_export-helper.BDNMzG2s.js";import{t as ue}from"./Input.DLhpL-Qp.js";var W=[{id:`hello-world`,title:`Hello World`,description:`Basic output using print() and io.write()`,category:`basics`,difficulty:`beginner`,code:`-- Hello World - The classic first program
print("Hello, World!")

-- Using io.write for output without automatic newline
io.write("This appears on ")
io.write("the same line.\\n")

-- Multiple arguments to print
print("Lua", "version", _VERSION)

-- String concatenation
local greeting = "Hello" .. " " .. "Lua"
print(greeting)`},{id:`interactive-greeting`,title:`Interactive Greeting`,description:`Reads a name from stdin and prints a personalized greeting`,category:`interactive`,difficulty:`beginner`,code:`-- Interactive Greeting - Demonstrates stdin/stdout
io.write("What is your name? ")
local name = io.read("*l")
print("Hello, " .. name .. "!")

io.write("How old are you? ")
local age = io.read("*n")
if age then
  print("In 10 years, you'll be " .. (age + 10) .. "!")
else
  print("That wasn't a valid number.")
end

io.write("What's your favorite color? ")
local color = io.read("*l")
print(name .. " likes " .. color .. ". Nice choice!")`,stdin:`Alice
25
Blue`},{id:`calculator`,title:`Calculator`,description:`Accepts numeric input and performs arithmetic operations`,category:`interactive`,difficulty:`beginner`,code:`-- Simple Calculator - Basic arithmetic with user input
print("=== Simple Calculator ===")
io.write("Enter first number: ")
local a = io.read("*n")
io.write("Enter second number: ")
local b = io.read("*n")

if a and b then
  print("Addition:       " .. a .. " + " .. b .. " = " .. (a + b))
  print("Subtraction:    " .. a .. " - " .. b .. " = " .. (a - b))
  print("Multiplication: " .. a .. " * " .. b .. " = " .. (a * b))
  if b ~= 0 then
    print("Division:       " .. a .. " / " .. b .. " = " .. (a / b))
    print("Modulo:         " .. a .. " % " .. b .. " = " .. (a % b))
  else
    print("Division:       Cannot divide by zero")
  end
  print("Power:          " .. a .. " ^ " .. b .. " = " .. (a ^ b))
else
  print("Please enter valid numbers.")
end`,stdin:`10
3`},{id:`number-guessing-game`,title:`Number Guessing Game`,description:`Interactive game with conditional logic and loops`,category:`interactive`,difficulty:`beginner`,code:`-- Number Guessing Game - Interactive game with loops and conditionals
math.randomseed(os.time())
local secret = math.random(1, 100)
local attempts = 0
local maxAttempts = 7

print("=== Number Guessing Game ===")
print("I'm thinking of a number between 1 and 100.")
print("You have " .. maxAttempts .. " attempts.")

while attempts < maxAttempts do
  attempts = attempts + 1
  io.write("Attempt " .. attempts .. "/" .. maxAttempts .. ": Enter your guess: ")
  local guess = io.read("*n")
  
  if not guess then
    print("Please enter a valid number.")
    attempts = attempts - 1
  elseif guess < secret then
    print("Too low! Try higher.")
  elseif guess > secret then
    print("Too high! Try lower.")
  else
    print("Congratulations! You guessed it in " .. attempts .. " attempt(s)!")
    break
  end
  
  if attempts == maxAttempts then
    print("Game over! The number was " .. secret)
  end
end`},{id:`fizzbuzz`,title:`FizzBuzz`,description:`Classic FizzBuzz demonstrating loops and conditionals`,category:`control-flow`,difficulty:`beginner`,code:`-- FizzBuzz - Loop with conditional logic
print("=== FizzBuzz (1 to 100) ===")

for i = 1, 100 do
  local output = ""
  
  if i % 3 == 0 then output = output .. "Fizz" end
  if i % 5 == 0 then output = output .. "Buzz" end
  
  if output == "" then
    output = tostring(i)
  end
  
  print(output)
end

print("\\n--- Alternative: Using a function ---")
local function fizzbuzz(n)
  if n % 15 == 0 then return "FizzBuzz" end
  if n % 3 == 0 then return "Fizz" end
  if n % 5 == 0 then return "Buzz" end
  return tostring(n)
end

for i = 1, 20 do
  print(fizzbuzz(i))
end`},{id:`fibonacci`,title:`Fibonacci Sequence`,description:`Functions and recursion/iteration for Fibonacci numbers`,category:`algorithms`,difficulty:`intermediate`,code:`-- Fibonacci Sequence - Multiple implementations
print("=== Fibonacci Sequence ===")

-- Iterative approach (efficient)
local function fibIterative(n)
  if n <= 1 then return n end
  local a, b = 0, 1
  for i = 2, n do
    a, b = b, a + b
  end
  return b
end

-- Recursive approach (elegant but slower for large n)
local function fibRecursive(n)
  if n <= 1 then return n end
  return fibRecursive(n - 1) + fibRecursive(n - 2)
end

-- Memoized recursive (efficient recursion)
local memo = {}
local function fibMemoized(n)
  if n <= 1 then return n end
  if memo[n] then return memo[n] end
  memo[n] = fibMemoized(n - 1) + fibMemoized(n - 2)
  return memo[n]
end

print("First 20 Fibonacci numbers (iterative):")
for i = 0, 19 do
  io.write(fibIterative(i) .. " ")
end
print("\\n")

print("Fibonacci(10) recursive: " .. fibRecursive(10))
print("Fibonacci(30) memoized: " .. fibMemoized(30))

-- Interactive: Get nth Fibonacci
io.write("\\nEnter n for nth Fibonacci number: ")
local n = io.read("*n")
if n and n >= 0 and n <= 92 then -- 93rd overflows 64-bit
  print("Fibonacci(" .. n .. ") = " .. fibIterative(n))
else
  print("Please enter a number between 0 and 92")
end`,stdin:`15`},{id:`tables-arrays`,title:`Tables and Arrays`,description:`Lua tables as arrays, dictionaries, and mixed structures`,category:`data-structures`,difficulty:`beginner`,code:`-- Tables and Arrays - Lua's versatile data structure
print("=== Tables and Arrays ===")

-- Array-like table (1-indexed by convention)
local fruits = {"apple", "banana", "cherry", "date"}
print("Array: " .. table.concat(fruits, ", "))
print("Length: #fruits = " .. #fruits)
print("First: " .. fruits[1])
print("Last: " .. fruits[#fruits])

-- Adding elements
table.insert(fruits, "elderberry")
print("After insert: " .. table.concat(fruits, ", "))

-- Removing elements
local removed = table.remove(fruits, 2)
print("Removed: " .. removed .. ", Remaining: " .. table.concat(fruits, ", "))

-- Dictionary-like table (hash map)
local person = {
  name = "Alice",
  age = 30,
  city = "New York",
  skills = {"Lua", "Python", "JavaScript"}
}

print("\\nDictionary:")
for k, v in pairs(person) do
  if type(v) == "table" then
    print("  " .. k .. ": {" .. table.concat(v, ", ") .. "}")
  else
    print("  " .. k .. ": " .. tostring(v))
  end
end

-- Mixed table (array + hash)
local mixed = {10, 20, 30, name = "mixed", active = true}
print("\\nMixed table:")
print("  Array part: " .. table.concat(mixed, ", "))
print("  Hash part: name=" .. mixed.name .. ", active=" .. tostring(mixed.active))

-- Nested tables
local matrix = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
}
print("\\nMatrix:")
for i, row in ipairs(matrix) do
  print("  Row " .. i .. ": " .. table.concat(row, " "))
end`},{id:`string-utilities`,title:`String Utilities`,description:`String manipulation, formatting, and pattern matching`,category:`data-structures`,difficulty:`intermediate`,code:`-- String Utilities - Manipulation and formatting
print("=== String Utilities ===")

local text = "  Hello, Lua World!  "
print("Original: '" .. text .. "'")
print("Length: " .. #text)
print("Trimmed: '" .. text:match("^%s*(.-)%s*$") .. "'")

-- Case conversion
print("\\nCase:")
print("  Upper: " .. text:upper())
print("  Lower: " .. text:lower())

-- Substrings
print("\\nSubstrings:")
print("  Sub(1,5): '" .. text:sub(1, 5) .. "'")
print("  Sub(-6): '" .. text:sub(-6) .. "'")

-- Find and replace
local sentence = "The quick brown fox jumps over the lazy dog"
print("\\nFind/Replace:")
print("  Find 'fox': position " .. (sentence:find("fox") or "not found"))
print("  Replace: " .. sentence:gsub("fox", "cat"))

-- String formatting
print("\\nFormatting:")
print(string.format("Name: %s, Age: %d, Score: %.2f", "Alice", 25, 98.5))
print(string.format("Hex: %x, Octal: %o, Scientific: %e", 255, 255, 123.456))

-- Pattern matching
print("\\nPattern Matching:")
local email = "user.name@example.com"
local user, domain = email:match("(.+)@(.+)")
print("  Email: " .. email)
print("  User: " .. (user or "none"))
print("  Domain: " .. (domain or "none"))

-- Character classes
print("\\nCharacter Classes:")
local test = "Hello123_World!"
print("  Digits: " .. (test:match("%d+") or "none"))
print("  Words: " .. (test:match("%w+") or "none"))
print("  Non-space: " .. (test:match("%S+") or "none"))`},{id:`sorting-algorithms`,title:`Sorting Algorithms`,description:`Working implementations of bubble sort, quick sort, and table.sort`,category:`algorithms`,difficulty:`intermediate`,code:`-- Sorting Algorithms - Multiple approaches
print("=== Sorting Algorithms ===")

local function shuffle(t)
  local n = #t
  while n > 1 do
    local k = math.random(n)
    t[n], t[k] = t[k], t[n]
    n = n - 1
  end
end

local function bubbleSort(arr)
  local n = #arr
  local sorted = {}
  for i = 1, n do sorted[i] = arr[i] end
  for i = 1, n - 1 do
    for j = 1, n - i do
      if sorted[j] > sorted[j + 1] then
        sorted[j], sorted[j + 1] = sorted[j + 1], sorted[j]
      end
    end
  end
  return sorted
end

local function quickSort(arr)
  if #arr <= 1 then return arr end
  local pivot = arr[1]
  local left, right = {}, {}
  for i = 2, #arr do
    if arr[i] < pivot then
      table.insert(left, arr[i])
    else
      table.insert(right, arr[i])
    end
  end
  local sorted = quickSort(left)
  table.insert(sorted, pivot)
  for _, v in ipairs(quickSort(right)) do
    table.insert(sorted, v)
  end
  return sorted
end

-- Generate random data
math.randomseed(os.time())
local data = {}
for i = 1, 20 do
  table.insert(data, math.random(1, 100))
end

print("Original: " .. table.concat(data, ", "))

local bubble = bubbleSort(data)
print("Bubble:   " .. table.concat(bubble, ", "))

local quick = quickSort(data)
print("Quick:    " .. table.concat(quick, ", "))

local builtin = {}
for i = 1, #data do builtin[i] = data[i] end
table.sort(builtin)
print("Built-in: " .. table.concat(builtin, ", "))

-- Sort with custom comparator
local words = {"banana", "apple", "cherry", "date", "elderberry"}
table.sort(words, function(a, b) return #a < #b end)
print("\\nWords by length: " .. table.concat(words, ", "))

table.sort(words) -- alphabetical
print("Words alpha:   " .. table.concat(words, ", "))`},{id:`prime-checker`,title:`Prime Number Checker`,description:`Arithmetic and algorithmic logic for prime detection`,category:`algorithms`,difficulty:`intermediate`,code:`-- Prime Number Checker - Multiple algorithms
print("=== Prime Number Checker ===")

-- Trial division
local function isPrimeTrial(n)
  if n < 2 then return false end
  if n == 2 then return true end
  if n % 2 == 0 then return false end
  for i = 3, math.sqrt(n), 2 do
    if n % i == 0 then return false end
  end
  return true
end

-- Sieve of Eratosthenes
local function sieve(limit)
  local isPrime = {}
  for i = 2, limit do isPrime[i] = true end
  
  for i = 2, math.sqrt(limit) do
    if isPrime[i] then
      for j = i * i, limit, i do
        isPrime[j] = false
      end
    end
  end
  
  local primes = {}
  for i = 2, limit do
    if isPrime[i] then table.insert(primes, i) end
  end
  return primes
end

-- Test single number
io.write("Enter a number to check: ")
local n = io.read("*n")
if n then
  print(n .. " is " .. (isPrimeTrial(n) and "PRIME" or "COMPOSITE"))
end

-- Find primes up to limit
io.write("Find primes up to: ")
local limit = io.read("*n")
if limit and limit > 1 then
  local primes = sieve(limit)
  print("Primes up to " .. limit .. " (" .. #primes .. " found):")
  print(table.concat(primes, ", "))
end

-- Prime factorization
io.write("\\nFactorize number: ")
local factor = io.read("*n")
if factor and factor > 1 then
  print("Prime factors of " .. factor .. ":")
  local original = factor
  local factors = {}
  local d = 2
  while d * d <= factor do
    while factor % d == 0 do
      table.insert(factors, d)
      factor = factor / d
    end
    d = d + (d == 2 and 1 or 2)
  end
  if factor > 1 then table.insert(factors, factor) end
  print(original .. " = " .. table.concat(factors, " * "))
end`,stdin:`17
50
84`},{id:`inventory-system`,title:`Simple Inventory System`,description:`Tables, functions, and state management for an inventory`,category:`interactive`,difficulty:`intermediate`,code:`-- Simple Inventory System - State management with tables
print("=== Inventory System ===")

local inventory = {}
local maxSlots = 10

local function addItem(name, quantity)
  quantity = quantity or 1
  if inventory[name] then
    inventory[name] = inventory[name] + quantity
  else
    local count = 0
    for _ in pairs(inventory) do count = count + 1 end
    if count >= maxSlots and not inventory[name] then
      return false, "Inventory full"
    end
    inventory[name] = quantity
  end
  return true
end

local function removeItem(name, quantity)
  quantity = quantity or 1
  if not inventory[name] then
    return false, "Item not found"
  end
  if inventory[name] <= quantity then
    inventory[name] = nil
  else
    inventory[name] = inventory[name] - quantity
  end
  return true
end

local function listInventory()
  local count = 0
  for _ in pairs(inventory) do count = count + 1 end
  if count == 0 then
    print("Inventory is empty.")
    return
  end
  print("Inventory (" .. count .. "/" .. maxSlots .. " slots):")
  for name, qty in pairs(inventory) do
    print("  " .. qty .. "x " .. name)
  end
end

local function findItem(name)
  return inventory[name] or 0
end

-- Demo
addItem("Health Potion", 3)
addItem("Sword", 1)
addItem("Shield", 1)
addItem("Gold Coin", 50)
listInventory()

print("\\n--- Interactive Mode ---")
while true do
  io.write("\\nCommand (add/remove/list/find/quit): ")
  local cmd = io.read("*l")
  if not cmd or cmd == "quit" or cmd == "q" then break end
  
  if cmd == "list" then
    listInventory()
  elseif cmd == "add" then
    io.write("Item name: ")
    local name = io.read("*l")
    io.write("Quantity: ")
    local qty = io.read("*n")
    local ok, err = addItem(name, qty or 1)
    print(ok and "Added." or "Error: " .. err)
  elseif cmd == "remove" then
    io.write("Item name: ")
    local name = io.read("*l")
    io.write("Quantity: ")
    local qty = io.read("*n")
    local ok, err = removeItem(name, qty or 1)
    print(ok and "Removed." or "Error: " .. err)
  elseif cmd == "find" then
    io.write("Item name: ")
    local name = io.read("*l")
    local qty = findItem(name)
    print(qty > 0 and ("Found: " .. qty .. "x " .. name) or "Not found")
  else
    print("Unknown command. Try: add, remove, list, find, quit")
  end
end

print("Goodbye!")`,stdin:`list
add
Magic Ring
2
list
quit`},{id:`text-adventure`,title:`Text Adventure`,description:`Multi-step interactive program driven by stdin`,category:`interactive`,difficulty:`advanced`,code:`-- Text Adventure - Multi-room interactive story
print("=== The Lost Temple ===")
print("You wake up at the entrance of an ancient temple.")
print("Your goal: Find the Golden Idol and escape alive.\\n")

local rooms = {
  entrance = {
    desc = "A stone entrance with vines covering the walls. Torches flicker on the walls.",
    exits = {north = "hallway"},
    items = {"torch"},
    visited = false
  },
  hallway = {
    desc = "A long corridor with ancient carvings. There's a pressure plate on the floor.",
    exits = {south = "entrance", north = "chamber", east = "trap_room"},
    items = {},
    visited = false
  },
  chamber = {
    desc = "A grand chamber with a pedestal in the center. The Golden Idol rests upon it!",
    exits = {south = "hallway"},
    items = {"golden_idol"},
    visited = false
  },
  trap_room = {
    desc = "A room filled with spikes! The pressure plate in the hallway triggered them.",
    exits = {west = "hallway"},
    items = {},
    visited = false,
    trap = true
  }
}

local currentRoom = "entrance"
local inventory = {}
local hasIdol = false
local alive = true

local function look()
  local room = rooms[currentRoom]
  print(room.desc)
  if #room.items > 0 then
    print("You see: " .. table.concat(room.items, ", "))
  end
  local exits = {}
  for dir in pairs(room.exits) do table.insert(exits, dir) end
  print("Exits: " .. table.concat(exits, ", "))
end

local function move(dir)
  local room = rooms[currentRoom]
  if room.exits[dir] then
    currentRoom = room.exits[dir]
    local newRoom = rooms[currentRoom]
    if newRoom.trap and not inventory["torch"] then
      print("You trigger a trap! Spikes shoot from the floor!")
      alive = false
      return
    end
    print("You go " .. dir .. ".")
    look()
  else
    print("You can't go that way.")
  end
end

local function take(item)
  local room = rooms[currentRoom]
  for i, v in ipairs(room.items) do
    if v == item then
      table.remove(room.items, i)
      table.insert(inventory, item)
      print("You take the " .. item .. ".")
      if item == "golden_idol" then hasIdol = true end
      return
    end
  end
  print("No " .. item .. " here.")
end

local function showInventory()
  if #inventory == 0 then
    print("Inventory: (empty)")
  else
    print("Inventory: " .. table.concat(inventory, ", "))
  end
end

-- Game loop
look()
while alive do
  if hasIdol and currentRoom == "entrance" then
    print("\\n*** You escape with the Golden Idol! VICTORY! ***")
    break
  end
  
  io.write("\\n> ")
  local input = io.read("*l")
  if not input then break end
  
  local words = {}
  for w in input:gmatch("%S+") do table.insert(words, w:lower()) end
  if #words == 0 then goto continue end
  
  local cmd = words[1]
  local arg = words[2]
  
  if cmd == "go" or cmd == "move" then
    move(arg)
  elseif cmd == "take" or cmd == "get" then
    take(arg)
  elseif cmd == "look" or cmd == "l" then
    look()
  elseif cmd == "inventory" or cmd == "i" then
    showInventory()
  elseif cmd == "help" then
    print("Commands: go <dir>, take <item>, look, inventory, help, quit")
  elseif cmd == "quit" or cmd == "q" then
    break
  else
    print("Unknown command. Type 'help' for commands.")
  end
  
  ::continue::
end

if not alive then
  print("\\n*** GAME OVER ***")
end`,stdin:`take torch
go north
go north
take golden_idol
go south
go south`},{id:`random-generator`,title:`Random Number Generator`,description:`Using math.random with seeds and distributions`,category:`advanced`,difficulty:`intermediate`,code:`-- Random Number Generator - Seeds and distributions
print("=== Random Number Generator ===")

-- Seed for reproducibility
math.randomseed(os.time())
print("Seed: " .. os.time())

-- Basic random
print("\\nBasic random (0-1):")
for i = 1, 5 do print("  " .. math.random()) end

-- Random integers
print("\\nRandom integers (1-100):")
for i = 1, 10 do io.write(math.random(1, 100) .. " ") end
print()

-- Weighted random (simulate dice)
local function rollDice(sides, count)
  local total = 0
  for i = 1, count do total = total + math.random(1, sides) end
  return total
end

print("\\nDice rolls:")
print("  1d6: " .. rollDice(6, 1))
print("  2d6: " .. rollDice(6, 2))
print("  3d6: " .. rollDice(6, 3))
print("  1d20: " .. rollDice(20, 1))

-- Random choice from array
local function choose(arr)
  return arr[math.random(#arr)]
end

local colors = {"red", "blue", "green", "yellow", "purple", "orange"}
print("\\nRandom colors:")
for i = 1, 5 do print("  " .. choose(colors)) end

-- Shuffle array
local function shuffle(arr)
  local result = {}
  for i = 1, #arr do result[i] = arr[i] end
  for i = #result, 2, -1 do
    local j = math.random(i)
    result[i], result[j] = result[j], result[i]
  end
  return result
end

local deck = {}
for _, suit in ipairs({"♥", "♦", "♣", "♠"}) do
  for _, rank in ipairs({"A","2","3","4","5","6","7","8","9","10","J","Q","K"}) do
    table.insert(deck, rank .. suit)
  end
end

print("\\nShuffled deck (first 10):")
local shuffled = shuffle(deck)
for i = 1, 10 do io.write(shuffled[i] .. " ") end
print()

-- Reproducible with fixed seed
print("\\nReproducible sequence (seed = 42):")
math.randomseed(42)
for i = 1, 5 do print("  " .. math.random(1, 100)) end`},{id:`error-handling`,title:`Error Handling`,description:`Demonstrates pcall, xpcall, error, and recovery patterns`,category:`advanced`,difficulty:`intermediate`,code:`-- Error Handling - pcall, xpcall, error, and recovery
print("=== Error Handling ===")

-- Basic error
local function riskyDivide(a, b)
  if b == 0 then
    error("Division by zero!")
  end
  return a / b
end

-- pcall - protected call
print("1. pcall (protected call):")
local success, result = pcall(riskyDivide, 10, 2)
print("  10/2: success=" .. tostring(success) .. ", result=" .. tostring(result))

success, result = pcall(riskyDivide, 10, 0)
print("  10/0: success=" .. tostring(success) .. ", error=" .. tostring(result))

-- xpcall - protected call with error handler
print("\\n2. xpcall (with error handler):")
local function errorHandler(err)
  return "Caught: " .. err .. " (at " .. debug.traceback("", 2):match("[^\\n]+"):gsub("^%s+", "") .. ")"
end

success, result = xpcall(function() return riskyDivide(10, 0) end, errorHandler)
print("  Result: " .. tostring(result))

-- assert for preconditions
print("\\n3. assert (preconditions):")
local function sqrt(x)
  assert(type(x) == "number", "sqrt expects a number")
  assert(x >= 0, "sqrt expects non-negative number")
  return x ^ 0.5
end

print("  sqrt(16) = " .. sqrt(16))

-- Custom error objects
print("\\n4. Custom error objects:")
local function validateAge(age)
  if type(age) ~= "number" then
    error({code = "TYPE_ERROR", message = "Age must be a number"}, 0)
  end
  if age < 0 or age > 150 then
    error({code = "RANGE_ERROR", message = "Age out of range"}, 0)
  end
  return true
end

local testAges = {25, -5, "twenty", 200}
for _, age in ipairs(testAges) do
  success, result = pcall(validateAge, age)
  if success then
    print("  Age " .. tostring(age) .. ": Valid")
  else
    print("  Age " .. tostring(age) .. ": " .. result.code .. " - " .. result.message)
  end
end

-- finally pattern using pcall
print("\\n5. Resource cleanup pattern:")
local function withFile(filename, func)
  local file = {name = filename, open = true}
  print("  Opening: " .. filename)
  local success, result = pcall(func, file)
  if file.open then
    print("  Closing: " .. filename)
    file.open = false
  end
  if not success then error(result) end
  return result
end

withFile("data.txt", function(f)
  print("  Working with " .. f.name)
  return "Done"
end)

print("\\nAll error handling examples completed.")`},{id:`coroutines`,title:`Coroutines`,description:`Coroutine creation, resumption, and cooperative multitasking`,category:`advanced`,difficulty:`advanced`,code:`-- Coroutines - Cooperative multitasking
print("=== Coroutines ===")

-- Basic coroutine
local function counter()
  for i = 1, 5 do
    print("  Counter: " .. i)
    coroutine.yield(i)
  end
  return "done"
end

print("1. Basic coroutine:")
local co = coroutine.create(counter)
print("  Status: " .. coroutine.status(co))

while coroutine.status(co) ~= "dead" do
  local success, value = coroutine.resume(co)
  print("  Resumed: success=" .. tostring(success) .. ", value=" .. tostring(value))
end

-- Producer-consumer pattern
print("\\n2. Producer-Consumer:")
local function producer()
  for i = 1, 5 do
    coroutine.yield(i, "produced")
  end
end

local function consumer()
  local co = coroutine.create(producer)
  while true do
    local success, value, action = coroutine.resume(co)
    if not success or coroutine.status(co) == "dead" then break end
    print("  Consumed: " .. value .. " (" .. action .. ")")
  end
end

consumer()

-- Iterator using coroutine
print("\\n3. Coroutine as iterator:")
local function fibonacciIterator(n)
  return coroutine.create(function()
    local a, b = 0, 1
    for i = 1, n do
      coroutine.yield(a)
      a, b = b, a + b
    end
  end)
end

local fibCo = fibonacciIterator(10)
print("  Fibonacci sequence:")
while true do
  local success, value = coroutine.resume(fibCo)
  if not success or coroutine.status(fibCo) == "dead" then break end
  io.write(value .. " ")
end
print()

-- Multiple coroutines (simple scheduler)
print("\\n4. Multiple coroutines (scheduler):")
local tasks = {}

local function spawn(func)
  table.insert(tasks, coroutine.create(func))
end

local function runScheduler()
  local running = true
  while running do
    running = false
    for i = #tasks, 1, -1 do
      local co = tasks[i]
      if coroutine.status(co) ~= "dead" then
        running = true
        local success, wait = coroutine.resume(co)
        if not success then
          print("  Task error: " .. wait)
          table.remove(tasks, i)
        elseif wait then
          -- Task yielded a wait time (simulated)
        end
      else
        table.remove(tasks, i)
      end
    end
  end
end

spawn(function()
  for i = 1, 3 do
    print("  Task A: step " .. i)
    coroutine.yield()
  end
end)

spawn(function()
  for i = 1, 3 do
    print("  Task B: step " .. i)
    coroutine.yield()
  end
end)

runScheduler()
print("  Scheduler finished")`},{id:`modules-closures`,title:`Modules and Closures`,description:`Module pattern, closures, and encapsulation`,category:`advanced`,difficulty:`advanced`,code:`-- Modules and Closures - Encapsulation patterns
print("=== Modules and Closures ===")

-- Module pattern with closure (private state)
local function createCounter()
  local count = 0  -- Private variable
  
  return {
    increment = function()
      count = count + 1
      return count
    end,
    decrement = function()
      count = count - 1
      return count
    end,
    get = function()
      return count
    end,
    reset = function()
      count = 0
    end
  }
end

print("1. Closure-based counter:")
local counter1 = createCounter()
local counter2 = createCounter()
print("  Counter1: " .. counter1.increment() .. ", " .. counter1.increment())
print("  Counter2: " .. counter2.increment())
print("  Counter1: " .. counter1.get())
print("  Counter2: " .. counter2.get())

-- Module with private functions
print("\\n2. Module with private helpers:")
local MathUtils = (function()
  -- Private helper
  local function isEven(n) return n % 2 == 0 end
  local function isOdd(n) return n % 2 == 1 end
  
  -- Public API
  return {
    factorial = function(n)
      assert(n >= 0 and n == math.floor(n), "Factorial requires non-negative integer")
      local result = 1
      for i = 2, n do result = result * i end
      return result
    end,
    
    fibonacci = function(n)
      local a, b = 0, 1
      for i = 1, n do a, b = b, a + b end
      return a
    end,
    
    isPrime = function(n)
      if n < 2 then return false end
      for i = 2, math.sqrt(n) do
        if n % i == 0 then return false end
      end
      return true
    end,
    
    -- Expose predicates
    isEven = isEven,
    isOdd = isOdd,
  }
end)()

print("  5! = " .. MathUtils.factorial(5))
print("  Fib(10) = " .. MathUtils.fibonacci(10))
print("  17 is prime: " .. tostring(MathUtils.isPrime(17)))
print("  4 is even: " .. tostring(MathUtils.isEven(4)))

-- Factory pattern with configuration
print("\\n3. Configurable factory:")
local function createLogger(prefix)
  local logs = {}
  
  local function log(level, message)
    local entry = string.format("[%s] %s: %s", os.date("%H:%M:%S"), level, message)
    table.insert(logs, entry)
    print("  " .. entry)
  end
  
  return {
    info = function(msg) log("INFO", prefix .. " - " .. msg) end,
    warn = function(msg) log("WARN", prefix .. " - " .. msg) end,
    error = function(msg) log("ERROR", prefix .. " - " .. msg) end,
    getLogs = function() return logs end,
    clear = function() logs = {} end
  }
end

local appLog = createLogger("APP")
local dbLog = createLogger("DATABASE")

appLog.info("Application started")
dbLog.info("Connected to database")
appLog.warn("Low memory warning")
dbLog.error("Query timeout")

print("\\nApp logs: " .. #appLog.getLogs())
print("DB logs: " .. #dbLog.getLogs())`}];function G(e){return W.find(t=>t.id===e)}var de={maxOperations:1e5,maxMemory:10485760},K={SOURCE:`lua-editor-source`,INPUT:`lua-editor-input`,SNIPPETS:`lua-editor-snippets`};function fe(){let t=d(``),n=d(``),r=d([]),i=d(null),a=d(`loading`),o=d(!1),s=d(!1),c=d(``),l=d(``),u=d(``),f=d(null),p=d(`hello-world`),m=d([]),g=d(!1),_=null,y=``,b=!1,x=0,S=v(()=>t.value.trim().length>0),ee=v(()=>n.value.trim().length>0),C=v(()=>r.value.length>0),te=v(()=>S.value&&g.value&&!o.value),w=v(()=>W.length),T=v(()=>G(p.value)||W[0]),ne=v(()=>W);function re(e){if(y.length===0)return b?{kind:`eof`}:{kind:`prompt`};let t=e===void 0?`*l`:String(e);if(t===`*a`){let e=y;return y=``,{kind:`data`,value:e}}if(t===`*n`){let e=y.match(/^\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)/);if(e){let t=e[0].length;return y[t]===`\r`&&y[t+1]===`
`?t+=2:(y[t]===`
`||y[t]===`\r`)&&(t+=1),y=y.slice(t),{kind:`data`,value:e[1]}}}if(/^\d+$/.test(t)){let e=Number.parseInt(t,10),n=y.slice(0,e);return y=y.slice(e),{kind:`data`,value:n}}let n=y.indexOf(`
`);if(n===-1){let e=y;return y=``,{kind:`data`,value:e.replace(/\r$/,``)}}let r=y.slice(0,n);return y=y.slice(n+1),{kind:`data`,value:r.replace(/\r$/,``)}}function E(e){switch(e.type){case`stdout`:case`stderr`:r.value.push(e.data);break;case`stdin-request`:{let t=re(e.mode);if(t.kind===`data`){_?.postMessage({type:`stdin`,data:t.value});return}if(t.kind===`eof`){_?.postMessage({type:`stdin`,data:null});return}s.value=!0,c.value=e.prompt||``,l.value=String(e.mode??``),a.value=`awaiting-input`,u.value=e.prompt||`Program is waiting for input…`;break}case`result`:if(o.value=!1,s.value=!1,c.value=``,l.value=``,i.value={completed:e.completed,error:e.error,operations:e.operations,durationMs:e.durationMs},e.completed)a.value=`finished`,u.value=`Program completed in ${e.operations} operations (${e.durationMs.toFixed(1)} ms).`;else{let t=e.error??`Unknown error`;r.value.join(``).endsWith(`${t}\n`)||r.value.push(`${t}\n`),a.value=`error`,u.value=`Execution error: ${t}`}break;case`error`:o.value=!1,s.value=!1,a.value=`error`,u.value=`Execution error: ${e.message}`,i.value||={completed:!1,error:e.message,operations:0,durationMs:performance.now()-x}}}function D(){return _&&=(_.terminate(),null),g.value=!1,a.value=`loading`,u.value=`Initializing Lua runtime…`,new Promise(e=>{let t=!1,n=n=>{t||(t=!0,e(n))},r;try{r=new Worker(new URL(`/_astro/lua-worker-SNz9WGAs.js`,``+import.meta.url),{type:`module`})}catch(e){a.value=`error`,u.value=`Failed to start Lua worker: ${e instanceof Error?e.message:`Unknown error`}`,n(!1);return}_=r,r.onmessage=e=>{let t=e.data;t.type===`ready`?(g.value=!0,a.value=`ready`,u.value=`Lua 5.4 runtime ready. Select an example or write your own code.`,n(!0)):t.type===`error`&&!g.value?(a.value=`error`,u.value=`Failed to initialize Lua engine: ${t.message}`,n(!1)):E(t)},r.onerror=e=>{let t=e.message||`Unknown worker error`;g.value?E({type:`error`,message:t}):(a.value=`error`,u.value=`Failed to initialize Lua engine: ${t}`,n(!1))},r.onmessageerror=()=>{let e=`Could not read a message from the Lua worker`;g.value?E({type:`error`,message:e}):(a.value=`error`,u.value=e,n(!1))}})}function O(){try{let e=localStorage.getItem(K.SOURCE);e&&(t.value=e);let r=localStorage.getItem(K.INPUT);r&&(n.value=r);let i=localStorage.getItem(K.SNIPPETS);if(i){let e=JSON.parse(i);Array.isArray(e)&&(m.value=e)}}catch(e){console.warn(`Failed to load from localStorage:`,e),u.value=`Could not restore previous session (corrupted data).`}}function k(){try{localStorage.setItem(K.SOURCE,t.value)}catch(e){console.warn(`Failed to save source:`,e)}}function A(){try{localStorage.setItem(K.SNIPPETS,JSON.stringify(m.value))}catch(e){console.warn(`Failed to save snippets:`,e)}}e(t,()=>{k()},{deep:!1}),e(n,()=>{try{localStorage.setItem(K.INPUT,n.value)}catch{}},{deep:!1});async function ie(){O(),await D()&&(S.value?(a.value=`ready`,u.value=`Welcome back! Your previous session has been restored.`):await N(`hello-world`))}function j(e){G(e)&&(p.value=e,N(e))}async function M(){(o.value||s.value)&&await F()}async function N(e){let o=G(e);o&&(await M(),p.value=e,t.value=o.code,n.value=o.stdin??``,r.value=[],i.value=null,y=``,g.value&&(a.value=`ready`),u.value=`Loaded: ${o.title}. ${o.description}`)}async function P(){S.value?!g.value||!_?u.value=a.value===`loading`?`Lua runtime is still starting. Please wait…`:`Lua runtime is not available. Reload the page to try again.`:o.value||(y=n.value,b=n.value.length>0,o.value=!0,s.value=!1,c.value=``,l.value=``,a.value=`running`,u.value=`Executing Lua program…`,r.value=[],i.value=null,x=performance.now(),_.postMessage({type:`execute`,code:t.value,limits:de})):u.value=`There is no Lua program to execute yet.`}async function F(){(o.value||s.value||a.value===`running`||a.value===`awaiting-input`)&&(i.value===null&&(i.value={completed:!1,error:`Execution stopped by user`,operations:0,durationMs:performance.now()-x}),o.value=!1,s.value=!1,c.value=``,l.value=``,a.value=`ready`,u.value=`Execution stopped by user.`,await D()&&(a.value=`ready`,u.value=`Execution stopped by user.`))}function I(e){s.value&&_&&(s.value=!1,c.value=``,l.value=``,a.value=`running`,u.value=`Continuing execution…`,_.postMessage({type:`stdin`,data:e}))}async function L(){r.value=[],i.value=null,o.value=!1,s.value=!1,c.value=``,l.value=``,y=``,await D()&&(a.value=`ready`,u.value=`Program reset. Click Run to execute again.`)}async function ae(){await M(),t.value=``,n.value=``,r.value=[],i.value=null,y=``,g.value&&(a.value=`ready`),u.value=`Editor cleared. Use the examples or paste your own Lua program.`}function oe(){try{let e=t.value.split(`
`),n=0,r=e.map(e=>{let t=e.trimStart();if(!t)return``;/^(end|else|elseif|until)\b/.test(t)&&(n=Math.max(0,n-1));let r=`  `.repeat(n)+t;return(/^(else|elseif)\b/.test(t)||/\b(then|do)\s*$|\brepeat\s*$|^(local\s+)?function\b/.test(t)&&!/\bend\b/.test(t))&&n++,r});t.value=r.join(`
`),u.value=`Code formatted.`}catch{u.value=`Could not format code (syntax errors present).`}}function se(){if(!S.value){u.value=`Nothing to save.`;return}let e=prompt(`Enter a name for this snippet:`,`Snippet ${m.value.length+1}`);if(!e||!e.trim())return;let n={id:crypto.randomUUID(),name:e.trim(),code:t.value,createdAt:Date.now(),updatedAt:Date.now()};m.value.unshift(n),A(),u.value=`Saved snippet "${n.name}".`}async function ce(e){let n=m.value[e];n&&(await M(),t.value=n.code,r.value=[],i.value=null,y=``,g.value&&(a.value=`ready`),u.value=`Loaded snippet: ${n.name}`)}function le(e){let t=m.value[e];if(!t)return;let n=prompt(`Enter new name:`,t.name);n&&n.trim()&&(t.name=n.trim(),t.updatedAt=Date.now(),A(),u.value=`Renamed to "${t.name}".`)}function R(e){let t=m.value[e];t&&confirm(`Delete snippet "${t.name}"?`)&&(m.value.splice(e,1),A(),u.value=`Deleted snippet "${t.name}".`)}function z(){n.value=`Hello, World!
42
Lua`,u.value=`Sample input loaded. Click Run to execute.`}function B(){n.value=``,u.value=`Input cleared.`}function V(){if(!i.value){u.value=`No execution results to download.`;return}let e=i.value,a=new Blob([`Lua Execution Results
==========================

Program:
${t.value}

Input:
${n.value||`(none)`}

Output:
${r.value.join(``)}

Execution Details:
- Status: ${e.completed?`Completed`:`Stopped/Error`}
- Operations: ${e.operations}
- Duration: ${(e=>e<1e3?`${e.toFixed(1)} ms`:e<6e4?`${(e/1e3).toFixed(2)} s`:`${(e/6e4).toFixed(2)} min`)(e.durationMs)}
${e.error?`- Error: ${e.error}`:``}

Generated: ${new Date().toISOString()}
`],{type:`text/plain`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`lua-results.txt`,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.setTimeout(()=>URL.revokeObjectURL(o),1e3),u.value=`Results downloaded as lua-results.txt`}function H(e){t.value=e,i.value&&(u.value=`Program changed. Click Run to execute.`)}function U(e){n.value=e,i.value?.completed&&(u.value=`Input changed. Click Run to execute with new input.`)}return h(()=>{_?.terminate(),_=null,g.value=!1}),{source:t,input:n,output:r,executionResult:i,status:a,notice:u,currentLine:f,isExecuting:o,isAwaitingInput:s,awaitingPrompt:c,awaitingMode:l,selectedExampleId:p,snippets:m,workerReady:g,hasSource:S,hasInput:ee,hasOutput:C,canExecute:te,exampleCount:w,selectedExample:T,examples:ne,start:ie,selectExample:j,loadExample:N,executeProgram:P,run:P,stopExecution:F,supplyInput:I,resetProgram:L,clearEditor:ae,formatCode:oe,saveSnippet:se,loadSnippet:ce,renameSnippet:le,deleteSnippet:R,loadSampleInput:z,clearInput:B,downloadResult:V,setSource:H,setInput:U}}var pe=1,me=2,he=new R(e=>{if(e.next!==91)return;let t=0,n=1;for(;;){let r=e.peek(n);if(r===61)t++,n++;else if(r===91)break;else return}for(let n=0;n<2+t;n++)e.advance();for(;;){if(e.next<0){e.acceptToken(pe);return}if(e.next===93){let n=!0;for(let r=1;r<=t;r++)if(e.peek(r)!==61){n=!1;break}if(n&&e.peek(t+1)===93){for(let n=0;n<2+t;n++)e.advance();e.acceptToken(pe);return}}e.advance()}}),ge=new R(e=>{if(e.next!==45||e.peek(1)!==45||e.peek(2)!==91)return;let t=0,n=3;for(;;){let r=e.peek(n);if(r===61)t++,n++;else if(r===91)break;else return}for(let n=0;n<4+t;n++)e.advance();for(;;){if(e.next<0){e.acceptToken(me);return}if(e.next===93){let n=!0;for(let r=1;r<=t;r++)if(e.peek(r)!==61){n=!1;break}if(n&&e.peek(t+1)===93){for(let n=0;n<2+t;n++)e.advance();e.acceptToken(me);return}}e.advance()}}),_e={__proto__:null,break:22,goto:26,do:30,end:32,while:36,nil:40,true:42,false:44,function:86,not:100,or:110,and:112,repeat:174,until:176,if:180,then:182,elseif:184,else:186,for:190,in:198,local:206,return:222},ve=z.deserialize({version:14,states:"<tO!aQUOOO!hQUO'#CdOOQR'#D]'#D]O!mQZO'#DzOOQR'#Dy'#DyO$VQVO'#ElO$aQUO'#EkOOQQ'#Em'#EmOOQQ'#FO'#FOOOQQ'#Ep'#EpO%gQUO'#CbOOQQ'#Cb'#CbQOQUOOO`QUOOO!hQUO'#ChO%zQUO'#CjO!mQZO'#CmO&RQUO'#EUO!mQZO'#EXO#iQUO'#E^O&YQUO'#EdO&_QUO'#EhO&gQZO'#EnOOQQ'#Cf'#CfO&}QUO,59OOOQQ'#Cu'#CuO(WQZO'#CwO!mQZO'#D_O)rQUO,5:fO)yQVO'#DxOOQQ'#Dx'#DxOOQQ'#Co'#CoO,wQUO'#DWO!mQZO'#D{O&YQUO'#D{OOQR'#Es'#EsO,|QVO,5;WO-WQZO'#EPOOQQ'#EO'#EOO&YQUO'#EOOOQQ'#ET'#ETOOQQ'#ES'#ESO-_QUO,5:iO0gQUO'#EyO0oQUO,5;VO!mQZO,5;VOOQQ-E8n-E8nOOQQ,58|,58|OOQQ,59S,59SO0wQUO,59UO0|QUO,59XO1TQUO,5:pO1YQUO,5:sO1aQUO'#EbO1lQUO'#EaO1qQUO,5:xOOQR'#DR'#DRO1vQUO'#EeO,wQUO,5;OO2RQUO'#EjO3iQUO'#EiO#iQUO,5;QO4|QUO,5;SO6^QUO'#EQOOQQ,5;Y,5;YO7sQUO,5;YOOQQ1G.j1G.jO!mQZO'#C{O8XQVO'#DROOQQ'#DQ'#DQO:_QUO'#DPO:dQUO'#DSOOQQ'#Cz'#CzO:qQUO'#CyOOQQ,59c,59cO:|QUO,59cO;RQUO,59yO!mQZO,5:OO!mQZO,5:OO!mQZO,5:OO!mQZO,5:OO!mQZO,5:OO!mQZO,5:OO!mQZO,5:OOOQR1G0Q1G0QO!mQZO,5:OO!mQZO,5:OO>QQVO,5:dOAOQYO'#DYOOQQ,59r,59rOAZQUO,5:gOOQR,5:g,5:gOOQR-E8q-E8qOAbQUO1G0TOOQQ,5:k,5:kODjQUO,5:kODoQVO,5:jO&YQUO'#EOOOQQ'#Eu'#EuOAbQUO1G0TOD}QUO'#ElOOQQ,5;e,5;eOOQQ-E8w-E8wO!mQZO1G0qOOQQ1G0q1G0qOOQQ1G.p1G.pO%zQUO1G.sO!mQZO1G0[OE]QUO1G0_O#iQUO'#ErOEjQUO,5:|O!mQZO,5:zO!mQZO,5:{O%zQUO1G0dO&YQUO'#EwOErQUO,5;PO&YQUO,5;POOQQ1G0j1G0jO&YQUO,5;UO#iQUO'#ExOE}QUO,5;TO,wQUO1G0lO!mQZO1G0nO!mQZO'#EtOGbQUO,5:lOOQQ1G0t1G0tOHuQUO,59gO!mQZO,59kOOQR'#DT'#DTOH|QZO,59eOITQUO,59eOOQQ1G.}1G.}OL[QUO1G/jOLcQUO1G/jO! fQUO1G/jO! mQUO1G/jO!$jQUO1G/jO!$wQUO1G/jO!&{QUO1G/jO!+TQUO1G/jO!+[QUO1G/jO!+cQUO'#D[OOQQ'#D['#D[O%zQUO,59tO!+kQUO,59tOOQR1G0R1G0RO!+pQUO7+%oOOQQ1G0V1G0VOOQQ1G0U1G0UOOQQ1G0Y1G0YODxQUO,5:jOOQQ-E8s-E8sO!.xQUO,5;WOOQQ7+&]7+&]O!/WQUO7+$_O!/]QUO7+%vO!0lQUO7+%yOOQQ,5;^,5;^OOQQ-E8p-E8pO!0wQUO1G0fOOQQ1G0g1G0gO!1OQUO7+&OOOQQ,5;c,5;cOOQQ-E8u-E8uO&YQUO1G0kOOQQ1G0k1G0kO!1TQUO1G0pOOQQ,5;d,5;dOOQQ-E8v-E8vOOQQ7+&W7+&WOOQQ7+&Y7+&YO!1YQUO,5;`OOQQ-E8r-E8rO!2oQUO1G/RO!2tQUO1G/VOOQQ,5;],5;]O!3RQZO1G/POOQQ-E8o-E8oO!3YQYO,59vO!3bQUO,59vO!3jQUO1G/`O%zQUO1G/`OOQQ<<Gy<<GyO!3oQUO<<IeO!mQZO'#EvOOQQ<<Ie<<IeO%zQUO<<IeO!mQZO7+&QOOQQ<<Ij<<IjOOQQ7+&V7+&VOOQQ7+&[7+&[O!mQZO7+$mP'SQZO'#EqOOQQ1G/b1G/bO!3YQYO1G/bOOQQ7+$z7+$zO!3zQUO7+$zOOQQ-E8t-E8tOOQQAN?PAN?PO%zQUOAN?PO!4PQUO,5;bO!4WQUOAN?PO!4]QUO<<IlO!4gQUO<<HXOOQQ7+$|7+$|OOQQ<<Hf<<HfO!4tQUOG24kOE]QUO1G0|OOQQG24kG24kO!mQZOAN?WOOQQLD*VLD*VOOQQ7+&h7+&hO!4yQUOG24r",stateData:"!5b~O#pOS#qOSROSQOS~OVWOXPOZWO]^O__Ob`O{dO}RO!yaO!|bO#RcO#ZeO#cfO#sQO#nUP~OT]O~P`O#sgO~OPoOdoOeoOfoOgoOhoOjiOljO{pO}RO!SkO!TkO!UkO!VkO#sQO~OPxOhxOljOpqO}uO!prO!uwO~Or#`Xx#`X~P#nOr}Ox{O~OVWOXPOZWO]^O__Ob`O{dO}RO!yaO!|bO#RcO#ZeO#cfO#sQO~O#nUX`UX!zUX#OUX#PUX~P$iO`UP~P$iO!zUP~P$iO#s!YO~O{!_O#sQO~OV!bO#n#bX`#bX!z#bX#O#bX#P#bX~P!mOX!dO~OPoOdoOeoOfoOgoOhoOjiOljOp!eO{pO}RO!SkO!TkO!UkO!VkO#s!fO~Oy!lO~P'SO!U!tO!V!qO!X!wO!Y!xO!Z!oO![!oO!]!oO!^!oO!_!oO!`!oO!a!pO!b!rO!c!sO!d!sO!e!sO!f!tO!g!uO!h!uO!i!uO!j!uO!k!uO~O!Q!vO~P(_O!Q!lX!U!lX!V!lX!X!lX!Y!lX!Z!lX![!lX!]!lX!^!lX!_!lX!`!lX!a!lX!b!lX!c!lX!d!lX!e!lX!f!lX!g!lX!h!lX!i!lX!j!lX!k!lX_!lX!}!lXV!lXx!lX#n!lXy!lXq!lXX!lXZ!lX]!lXb!lX{!lX!y!lX!|!lX#R!lX#Z!lX#c!lX#s!lX`!lX!z!lX#O!lX#P!lX~P#nO}!zO~Or#`ax#`a~P#nO!Q#QO~P!mOpqO}uO!prO!u#TOV!qaX!qaZ!qa]!qa_!qab!qa{!qa!y!qa!|!qa#R!qa#Z!qa#c!qa#n!qa#s!qa!Q!qa!U!qa!V!qa!X!qa!Y!qa!Z!qa![!qa!]!qa!^!qa!_!qa!`!qa!a!qa!b!qa!c!qa!d!qa!e!qa!f!qa!g!qa!h!qa!i!qa!j!qa!k!qa`!qa!z!qa!}!qax!qay!qaq!qa#O!qa#P!qa~O}RO#sQO~Or#ZOx{O~O`#]O~O_#^O~P(_O!z#_O~O!}#`O~P(_Or#cOx#aO#V#UX~O#V#dO~O_#eO~O!p#fO!u#hO}#XX~O!Z#jOV#^XX#^XZ#^X]#^X_#^Xb#^Xr#^Xx#^X{#^X}#^X!y#^X!|#^X#R#^X#Z#^X#c#^X#n#^X#s#^X`#^X!z#^X#O#^X#P#^X~Ox#kOV#]XX#]XZ#]X]#]X_#]Xb#]Xr#]X{#]X}#]X!y#]X!|#]X#R#]X#Z#]X#c#]X#n#]X#s#]X`#]X!z#]X#O#]X#P#]X~Or#nOV#[aX#[aZ#[a]#[a_#[ab#[a{#[a}#[a!y#[a!|#[a#R#[a#Z#[a#c#[a#n#[a#s#[a`#[a!z#[a#O#[a#P#[a~Ox#oOV!tX#n!tX!Q!tXX!tXZ!tX]!tX_!tXb!tX{!tX}!tX!y!tX!|!tX#R!tX#Z!tX#c!tX#s!tX`!tX!z!tX#O!tX#P!tX~P(_OV#qO#n#ba`#ba!z#ba#O#ba#P#ba~OP!PXV!PXh!PXl!PXp!PXruXx!PXy!PX}!PX!U!PX!V!PX!X!PX!Y!PX!Z!PX![!PX!]!PX!^!PX!_!PX!`!PX!a!PX!b!PX!c!PX!d!PX!e!PX!f!PX!g!PX!h!PX!i!PX!j!PX!k!PX!p!PX!u!PX~Or#sO~OVvXxvXyvX~P(_OV#tOx#tOymX~Oy#wO~O!k!uO!Q!Ra!U!Ra!V!Ra!X!Ra!Y!Ra!Z!Ra![!Ra!]!Ra!^!Ra!_!Ra!`!Ra!a!Ra!b!Ra!c!Ra!d!Ra!e!Ra!f!Ra!g!Ra!h!Ra!i!Ra!j!Ra_!Ra!}!RaV!Rax!Ra#n!Ray!Raq!RaX!RaZ!Ra]!Rab!Ra{!Ra}!Ra!y!Ra!|!Ra#R!Ra#Z!Ra#c!Ra#s!Ra`!Ra!z!Ra#O!Ra#P!Ra~O!Q!la!U!la!V!la!X!la!Y!la!Z!la![!la!]!la!^!la!_!la!`!la!a!la!b!la!c!la!d!la!e!la!f!la!g!la!h!la!i!la!j!la!k!la_!la!}!laV!lax!la#n!lay!laq!laX!laZ!la]!lab!la{!la!y!la!|!la#R!la#Z!la#c!la#s!la`!la!z!la#O!la#P!la~P#nOjiO!Q$TO#sQO~Oq$VO~P(_OpqO}uO!prO!u#TOV!qiX!qiZ!qi]!qi_!qib!qi{!qi!y!qi!|!qi#R!qi#Z!qi#c!qi#n!qi#s!qi!Q!qi!U!qi!V!qi!X!qi!Y!qi!Z!qi![!qi!]!qi!^!qi!_!qi!`!qi!a!qi!b!qi!c!qi!d!qi!e!qi!f!qi!g!qi!h!qi!i!qi!j!qi!k!qi`!qi!z!qi!}!qix!qiy!qiq!qi#O!qi#P!qi~O!Q$XO~OPxOhxOljO}uO~OpqO!prOr#`Xx#`X~O`UP#OUP#PUP~P$iOx#aO#V#Ua~O!p#fO!u$jO}#Xa~Ox#kOV#]aX#]aZ#]a]#]a_#]ab#]ar#]a{#]a}#]a!y#]a!|#]a#R#]a#Z#]a#c#]a#n#]a#s#]a`#]a!z#]a#O#]a#P#]a~Ox#oOV!ta#n!ta!Q!taX!taZ!ta]!ta_!tab!ta{!ta}!ta!y!ta!|!ta#R!ta#Z!ta#c!ta#s!ta`!ta!z!ta#O!ta#P!ta~Oq$sO~P(_Oyma~P'SOV#tOx#tOyma~O!U!tO!V!qO!b!rO!c!sO!d!sO!e!sO!f!tO!g!uO!h!uO!i!uO!j!uO!k!uO!Q!Wi!X!Wi!Y!Wi!Z!Wi![!Wi!]!Wi!^!Wi!_!Wi!`!Wi_!Wi!}!WiV!Wix!Wi#n!Wiy!Wiq!WiX!WiZ!Wi]!Wib!Wi{!Wi}!Wi!y!Wi!|!Wi#R!Wi#Z!Wi#c!Wi#s!Wi`!Wi!z!Wi#O!Wi#P!Wi~O!a!pO~PI`O!a!Wi~PI`O!U!tO!c!sO!d!sO!e!sO!f!tO!g!uO!h!uO!i!uO!j!uO!k!uO!Q!Wi!V!Wi!X!Wi!Y!Wi!Z!Wi![!Wi!]!Wi!^!Wi!_!Wi!`!Wi!a!Wi_!Wi!}!WiV!Wix!Wi#n!Wiy!Wiq!WiX!WiZ!Wi]!Wib!Wi{!Wi}!Wi!y!Wi!|!Wi#R!Wi#Z!Wi#c!Wi#s!Wi`!Wi!z!Wi#O!Wi#P!Wi~O!b!rO~PLjO!b!Wi~PLjO!g!uO!h!uO!i!uO!j!uO!k!uO!Q!Wi!V!Wi!X!Wi!Y!Wi!Z!Wi![!Wi!]!Wi!^!Wi!_!Wi!`!Wi!a!Wi!b!Wi!c!Wi!d!Wi_!Wi!}!WiV!Wix!Wi#n!Wiy!Wiq!WiX!WiZ!Wi]!Wib!Wi{!Wi}!Wi!y!Wi!|!Wi#R!Wi#Z!Wi#c!Wi#s!Wi`!Wi!z!Wi#O!Wi#P!Wi~O!U!tO!e!sO!f!tO~P! tO!U!Wi!e!Wi!f!Wi~P! tO!k!uO!Q!Wi!X!Wi!Y!Wi_!Wi!}!WiV!Wix!Wi#n!Wiy!Wiq!WiX!WiZ!Wi]!Wib!Wi{!Wi}!Wi!y!Wi!|!Wi#R!Wi#Z!Wi#c!Wi#s!Wi`!Wi!z!Wi#O!Wi#P!Wi~O!U!Wi!V!Wi!Z!Wi![!Wi!]!Wi!^!Wi!_!Wi!`!Wi!a!Wi!b!Wi!c!Wi!d!Wi!e!Wi!f!Wi!g!Wi!h!Wi!i!Wi!j!Wi~P!%UO!U!tO!V!qO!Z!oO![!oO!]!oO!^!oO!_!oO!`!oO!a!pO!b!rO!c!sO!d!sO!e!sO!f!tO!g!uO!h!uO!i!uO!j!uO!k!uO!Q!Wi!X!Wi_!Wi!}!WiV!Wix!Wi#n!Wiy!Wiq!WiX!WiZ!Wi]!Wib!Wi{!Wi}!Wi!y!Wi!|!Wi#R!Wi#Z!Wi#c!Wi#s!Wi`!Wi!z!Wi#O!Wi#P!Wi~O!Y!xO~P!(XO!Y!Wi~P!(XOx$xO!Q!OX~O!Q${O~OpqO}uO!prO!u#TOV!qqX!qqZ!qq]!qq_!qqb!qq{!qq!y!qq!|!qq#R!qq#Z!qq#c!qq#n!qq#s!qq!Q!qq!U!qq!V!qq!X!qq!Y!qq!Z!qq![!qq!]!qq!^!qq!_!qq!`!qq!a!qq!b!qq!c!qq!d!qq!e!qq!f!qq!g!qq!h!qq!i!qq!j!qq!k!qq`!qq!z!qq!}!qqx!qqy!qqq!qq#O!qq#P!qq~OpqO!prOr#`ax#`a~O`$|O~OV!xqX!xqZ!xq]!xq_!xqb!xq{!xq}!xq!y!xq!|!xq#R!xq#Z!xq#c!xq#n!xq#s!xq`!xq!z!xq#O!xq#P!xq~P(_O`%PO#O%OO#P%QO~Ox%RO~P(_O`%SO~O![%UO~OV#hax#ha#n#ha!Q#haX#haZ#ha]#ha_#hab#ha{#ha}#ha!y#ha!|#ha#R#ha#Z#ha#c#ha#s#ha`#ha!z#ha#O#ha#P#ha~P(_Or%VO~OVsixsiysi~P(_Oymi~P'SOjiO#sQO~Ox%YO!Q!Oa~O`%ZO~O`%^O#O%OO#P%_O~O`%eO~O!}%gO~P(_O`%hO~Ox%iO_#Sy~P(_OVoyxoyyoy~P(_O`%jO~O_#S!Z~P(_OTR!j!c!d!]!^!_!`j!eX!U#s!_~",goto:"4s#sPPPPPP#tP$hP$wP$hP$hPP$hP$}PPPPP&tP'rP(n(q(yPPP(y)P)V(y)uPP){P*pP*y*|P){PPPP){PPPPPPPPPPPPPPPPPPP){,c-j.mP.{0P0_0mP1P1X$hPP$hPPPP$hP1b1b1eP$h1h$hP$h1k1n$h1t$h2WP2i2z3Q3[3j3p3z4Q4W4^PPPP4dS[O]Q!R_Q!TaQ$`#^Q$b#`Q$g#eQ$z$TQ%[${Q%a%QQ%f%_R%k%gkWOY]_a#^#`#e$T${%Q%_%gQhPR!Q^QlRQ!S`Q!Ub[!afu}#Z#d#nW!ij#u$v%WQ!nkQ!|qQ#r!eQ#x!oQ#y!pQ#z!qQ#{!rQ#|!sQ#}!tQ$O!uQ$P!wQ$Q!xQ$a#_Q$e#cQ$q#oQ$t#sQ%`%OQ%b%RQ%c%VR%l%i!doR`bfjkqu}!e!o!p!q!r!s!t!u!w!x#Z#_#c#d#n#o#s#u$v%O%R%V%W%iQ$S!zQ%X$xR%d%Y!doR`bfjkqu}!e!o!p!q!r!s!t!u!w!x#Z#_#c#d#n#o#s#u$v%O%R%V%W%iZxTmt!y#SR!mjQ!kjV$u#u$v%WX!jj#u$v%WX!hj#u$v%WQ!ZdW!gj#u$v%WQ!}rQ#SwQ$[#TQ$h#fQ$k#hQ$l#jR%T$jQ#u!kR$v#v!eoR`bfjkqu}!e!o!p!q!r!s!t!u!w!x#Z#_#c#d#n#o#s#u$v%O%R%V%W%iQ!{pQ#i![R$o#mR$U!z#QSORY]_`abfjkqu{}!e!o!p!q!r!s!t!u!w!x#Z#^#_#`#c#d#e#n#o#s#u$T$v${%O%Q%R%V%W%_%g%iQ!VcS!]e#kQ#m!_Q$R!zV$c#a$x%YjTOY]_a#^#`#e$T${%Q%_%g!dmR`bfjkqu}!e!o!p!q!r!s!t!u!w!x#Z#_#c#d#n#o#s#u$v%O%R%V%W%iR#W{#RSORY]_`abfjkqu{}!e!o!p!q!r!s!t!u!w!x#Z#^#_#`#c#d#e#n#o#s#u$T$v${%O%Q%R%V%W%_%g%i[sTmt!y#W$^X#Uz#P#V$WjVOY]_a#^#`#e$T${%Q%_%g!enR`bfjkqu}!e!o!p!q!r!s!t!u!w!x#Z#_#c#d#n#o#s#u$v%O%R%V%W%iSzTmS#Pt!yX#Uz#P#V$W`vTmtz!y#P#V$WT$Y#S$[Q!cfQ#RuQ#[}Q$_#ZQ$f#dR$p#nSzTmT#Pt!yWyTmt!yR$Z#SR!XcR!WcR![dR!`eQ!^eR$m#kjUOY]_a#^#`#e$T${%Q%_%gR#X{hZO]_a#^#`#e$T${%Q%_%gR!PYhYO]_a#^#`#e$T${%Q%_%gR!OYQ#v!kR$w#vQ#b!VS$d#b$yR$y$RQtTQ!ymU#Ot!y$^R$^#WQ#p!aR$r#pQ#VzQ$W#PT$]#V$WQ$}$bR%]$}Q#g!ZR$i#gQ#l!^R$n#lQ|UR#Y|kXOY]_a#^#`#e$T${%Q%_%g",nodeNames:`⚠ LongString BlockComment LineComment Chunk Shebang Block ; Label :: LabelName break GotoStatement goto DoBlock do end WhileBlock while Exp nil true false Number String Ellipsis ... TableConstructor { FieldList Field BracketField [ ] = NamedField FieldName Identifier ExpField FieldSep , } FunctionDef function FunctionBody ( ParamList VariableName ) UnaryExpression not # - ~ BinaryExpression or and < > <= >= == ~= | & << >> .. + * / % // ^ PrefixExp Atom Parens IndexProp . CallPrefix ParenCall ParenArgs ExpList : SugarCall SugarArgs RepeatBlock repeat until IfStatement if then elseif else ForStatement for ForNumeric ForGeneric NameList in FunctionDeclaration FuncName LocalFunctionDeclaration local LocalDeclaration AttNameList AttName Assignment Var CallStatement ReturnStatement return`,maxTerm:127,skippedNodes:[0,2,3],repeatNodeCount:10,tokenData:"7s~RsXY#`YZ#n[]#`]^#{pq#`rs$Tst(tuv)hvw)mwx)rxy.^yz.cz{.h{|.m|}.r}!O.w!O!P/k!P!Q1Z!Q!R1h!R![2Y![!]4x!]!^5V!^!_5[!_!`5q!`!a6O!c!}6e!}#O6v#P#Q6{#Q#R7Q#R#S6e#T#o6e#o#p7V#p#q7[#q#r7a#r#s7f~#eR#p~XY#`[]#`pq#`~#sP#q~]^#v~#{O#q~~$QP#q~YZ#v~$WXOY$TZ]$T^r$Trs$ss#O$T#O#P$x#P;'S$T;'S;=`'c<%lO$T~$xOh~~${^rs$Twx$T!Q![%w#O#P$T#T#U$T#U#V$T#Y#Z$T#b#c$T#f#g$T#h#i$T#i#j'i#j#k$T#l#m([#n#o$T~%zZOY$TZ]$T^r$Trs$ss!Q$T!Q![&m![#O$T#O#P$x#P;'S$T;'S;=`'c<%lO$T~&pZOY$TZ]$T^r$Trs$ss!Q$T!Q![$T![#O$T#O#P$x#P;'S$T;'S;=`'c<%lO$T~'fP;=`<%l$T~'lP#o#p'o~'rR!Q!['{!c!i'{#T#Z'{~(OS!Q!['{!c!i'{#T#Z'{#q#r$T~(_R!Q![(h!c!i(h#T#Z(h~(kR!Q![$T!c!i$T#T#Z$TR(yP!TQqr(|P)RTTPOY(|Z](|^;'S(|;'S;=`)b<%lO(|P)eP;=`<%l(|~)mO!i~~)rO!b~~)uXOY)rZ])r^w)rwx$sx#O)r#O#P*b#P;'S)r;'S;=`,{<%lO)r~*e^rs)rwx)r!Q![+a#O#P)r#T#U)r#U#V)r#Y#Z)r#b#c)r#f#g)r#h#i)r#i#j-R#j#k)r#l#m-t#n#o)r~+dZOY)rZ])r^w)rwx$sx!Q)r!Q![,V![#O)r#O#P*b#P;'S)r;'S;=`,{<%lO)r~,YZOY)rZ])r^w)rwx$sx!Q)r!Q![)r![#O)r#O#P*b#P;'S)r;'S;=`,{<%lO)r~-OP;=`<%l)r~-UP#o#p-X~-[R!Q![-e!c!i-e#T#Z-e~-hS!Q![-e!c!i-e#T#Z-e#q#r)r~-wR!Q![.Q!c!i.Q#T#Z.Q~.TR!Q![)r!c!i)r#T#Z)r~.cO}~~.hO!Q~~.mO!g~~.rO!f~~.wOx~~.|P!U~}!O/P~/UTR~OY/PZ]/P^;'S/P;'S;=`/e<%lO/P~/hP;=`<%l/P~/pQ!pP!O!P/v!Q![0T~/{P!e~!O!P0OQ0TOjQQ0YSgQ!Q![0T!g!h0f#R#S1T#X#Y0fQ0iR{|0r}!O0r!Q![0xQ0uP!Q![0xQ0}QgQ!Q![0x#R#S0rQ1WP!Q![0T~1`P!h~!P!Q1c~1hO!j~Q1mXgQ!O!P1T!Q![2Y!d!e2t!g!h0f!z!{3]#R#S2n#U#V2t#X#Y0f#l#m3]Q2_TgQ!O!P1T!Q![2Y!g!h0f#R#S2n#X#Y0fQ2qP!Q![2YQ2wQ!Q!R2}!R!S2}Q3SRgQ!Q!R2}!R!S2}#R#S2tQ3`R!Q![3i!c!i3i#T#Z3iQ3nVgQ!O!P4T!Q![3i!c!i3i!r!s0f#R#S3]#T#Z3i#d#e0fQ4WR!Q![4a!c!i4a#T#Z4aQ4fUgQ!Q![4a!c!i4a!r!s0f#R#S4T#T#Z4a#d#e0f~4}P!u~![!]5Q~5VOX~~5[OV~~5aQ!Z~!^!_5g!_!`5l~5lO!c~~5qO!]~~5vPr~!_!`5y~6OO!_~~6TQ![~!_!`6Z!`!a6`~6`O!^~~6eO!d~~6jS#s~!Q![6e!c!}6e#R#S6e#T#o6e~6{Op~~7QOq~~7VO!k~~7[Ol~~7aO!a~~7fOy~~7kP!V~!_!`7n~7sO!`~",tokenizers:[he,ge,0,1],topRules:{Chunk:[0,4]},specialized:[{term:127,get:e=>_e[e]||-1}],tokenPrec:3038}),ye=[{label:`and`,type:`keyword`,detail:`logical operator`},{label:`break`,type:`keyword`,detail:`break statement`},{label:`do`,type:`keyword`,detail:`do block`},{label:`else`,type:`keyword`},{label:`elseif`,type:`keyword`},{label:`end`,type:`keyword`},{label:`false`,type:`keyword`,detail:`boolean`},{label:`for`,type:`keyword`,detail:`for loop`},{label:`function`,type:`keyword`,detail:`function definition`},{label:`goto`,type:`keyword`},{label:`if`,type:`keyword`,detail:`if statement`},{label:`in`,type:`keyword`},{label:`local`,type:`keyword`,detail:`local declaration`},{label:`nil`,type:`keyword`,detail:`nil value`},{label:`not`,type:`keyword`,detail:`logical not`},{label:`or`,type:`keyword`,detail:`logical or`},{label:`repeat`,type:`keyword`,detail:`repeat loop`},{label:`return`,type:`keyword`},{label:`then`,type:`keyword`},{label:`true`,type:`keyword`,detail:`boolean`},{label:`until`,type:`keyword`},{label:`while`,type:`keyword`,detail:`while loop`}],be=[{label:`_G`,type:`variable`,detail:`global table`},{label:`_VERSION`,type:`variable`,detail:`Lua version`},{label:`assert`,type:`function`,detail:`assert(v [, message])`},{label:`collectgarbage`,type:`function`,detail:`collectgarbage([opt [, arg]])`},{label:`dofile`,type:`function`,detail:`dofile([filename])`},{label:`error`,type:`function`,detail:`error(message [, level])`},{label:`getmetatable`,type:`function`,detail:`getmetatable(object)`},{label:`ipairs`,type:`function`,detail:`ipairs(t)`},{label:`load`,type:`function`,detail:`load(chunk [, chunkname [, mode [, env]]])`},{label:`loadfile`,type:`function`,detail:`loadfile([filename [, mode [, env]]])`},{label:`next`,type:`function`,detail:`next(table [, index])`},{label:`pairs`,type:`function`,detail:`pairs(t)`},{label:`pcall`,type:`function`,detail:`pcall(f [, arg1, ...])`},{label:`print`,type:`function`,detail:`print(...)`},{label:`rawequal`,type:`function`,detail:`rawequal(v1, v2)`},{label:`rawget`,type:`function`,detail:`rawget(table, index)`},{label:`rawlen`,type:`function`,detail:`rawlen(v)`},{label:`rawset`,type:`function`,detail:`rawset(table, index, value)`},{label:`require`,type:`function`,detail:`require(modname)`},{label:`select`,type:`function`,detail:`select(index, ...)`},{label:`setmetatable`,type:`function`,detail:`setmetatable(table, metatable)`},{label:`tonumber`,type:`function`,detail:`tonumber(e [, base])`},{label:`tostring`,type:`function`,detail:`tostring(v)`},{label:`type`,type:`function`,detail:`type(v)`},{label:`warn`,type:`function`,detail:`warn(msg1, ...)`},{label:`xpcall`,type:`function`,detail:`xpcall(f, msgh [, arg1, ...])`}],xe=[{label:`coroutine.close`,type:`function`,detail:`coroutine.close(co)`},{label:`coroutine.create`,type:`function`,detail:`coroutine.create(f)`},{label:`coroutine.isyieldable`,type:`function`,detail:`coroutine.isyieldable([co])`},{label:`coroutine.resume`,type:`function`,detail:`coroutine.resume(co [, val1, ...])`},{label:`coroutine.running`,type:`function`,detail:`coroutine.running()`},{label:`coroutine.status`,type:`function`,detail:`coroutine.status(co)`},{label:`coroutine.wrap`,type:`function`,detail:`coroutine.wrap(f)`},{label:`coroutine.yield`,type:`function`,detail:`coroutine.yield(...)`}],Se=[{label:`string.byte`,type:`method`,detail:`string.byte(s [, i [, j]])`},{label:`string.char`,type:`method`,detail:`string.char(...)`},{label:`string.dump`,type:`method`,detail:`string.dump(function [, strip])`},{label:`string.find`,type:`method`,detail:`string.find(s, pattern [, init [, plain]])`},{label:`string.format`,type:`method`,detail:`string.format(formatstring, ...)`},{label:`string.gmatch`,type:`method`,detail:`string.gmatch(s, pattern)`},{label:`string.gsub`,type:`method`,detail:`string.gsub(s, pattern, repl [, n])`},{label:`string.len`,type:`method`,detail:`string.len(s)`},{label:`string.lower`,type:`method`,detail:`string.lower(s)`},{label:`string.match`,type:`method`,detail:`string.match(s, pattern [, init])`},{label:`string.pack`,type:`method`,detail:`string.pack(fmt, v1, v2, ...)`},{label:`string.packsize`,type:`method`,detail:`string.packsize(fmt)`},{label:`string.rep`,type:`method`,detail:`string.rep(s, n [, sep])`},{label:`string.reverse`,type:`method`,detail:`string.reverse(s)`},{label:`string.sub`,type:`method`,detail:`string.sub(s, i [, j])`},{label:`string.unpack`,type:`method`,detail:`string.unpack(fmt, s [, pos])`},{label:`string.upper`,type:`method`,detail:`string.upper(s)`}],Ce=[{label:`table.concat`,type:`method`,detail:`table.concat(list [, sep [, i [, j]]])`},{label:`table.insert`,type:`method`,detail:`table.insert(list [, pos,] value)`},{label:`table.move`,type:`method`,detail:`table.move(a1, f, e, t [,a2])`},{label:`table.pack`,type:`method`,detail:`table.pack(...)`},{label:`table.remove`,type:`method`,detail:`table.remove(list [, pos])`},{label:`table.sort`,type:`method`,detail:`table.sort(list [, comp])`},{label:`table.unpack`,type:`method`,detail:`table.unpack(list [, i [, j]])`}],we=[{label:`math.abs`,type:`property`,detail:`math.abs(x)`},{label:`math.acos`,type:`property`,detail:`math.acos(x)`},{label:`math.asin`,type:`property`,detail:`math.asin(x)`},{label:`math.atan`,type:`property`,detail:`math.atan(y [, x])`},{label:`math.ceil`,type:`property`,detail:`math.ceil(x)`},{label:`math.cos`,type:`property`,detail:`math.cos(x)`},{label:`math.deg`,type:`property`,detail:`math.deg(x)`},{label:`math.exp`,type:`property`,detail:`math.exp(x)`},{label:`math.floor`,type:`property`,detail:`math.floor(x)`},{label:`math.fmod`,type:`property`,detail:`math.fmod(x, y)`},{label:`math.huge`,type:`constant`,detail:`value larger than any number`},{label:`math.log`,type:`property`,detail:`math.log(x [, base])`},{label:`math.max`,type:`property`,detail:`math.max(x, ...)`},{label:`math.maxinteger`,type:`constant`},{label:`math.min`,type:`property`,detail:`math.min(x, ...)`},{label:`math.mininteger`,type:`constant`},{label:`math.modf`,type:`property`,detail:`math.modf(x)`},{label:`math.pi`,type:`constant`},{label:`math.rad`,type:`property`,detail:`math.rad(x)`},{label:`math.random`,type:`property`,detail:`math.random([m [, n]])`},{label:`math.randomseed`,type:`property`,detail:`math.randomseed(x [, y])`},{label:`math.sin`,type:`property`,detail:`math.sin(x)`},{label:`math.sqrt`,type:`property`,detail:`math.sqrt(x)`},{label:`math.tan`,type:`property`,detail:`math.tan(x)`},{label:`math.tointeger`,type:`property`,detail:`math.tointeger(x)`},{label:`math.type`,type:`property`,detail:`math.type(x)`},{label:`math.ult`,type:`property`,detail:`math.ult(m, n)`}],Te=[{label:`io.close`,type:`method`},{label:`io.flush`,type:`method`},{label:`io.input`,type:`method`},{label:`io.lines`,type:`method`},{label:`io.open`,type:`method`,detail:`io.open(filename [, mode])`},{label:`io.output`,type:`method`},{label:`io.popen`,type:`method`},{label:`io.read`,type:`method`},{label:`io.stderr`,type:`variable`},{label:`io.stdin`,type:`variable`},{label:`io.stdout`,type:`variable`},{label:`io.tmpfile`,type:`method`},{label:`io.type`,type:`method`},{label:`io.write`,type:`method`}],Ee=[{label:`os.clock`,type:`method`},{label:`os.date`,type:`method`,detail:`os.date([format [, time]])`},{label:`os.difftime`,type:`method`},{label:`os.execute`,type:`method`},{label:`os.exit`,type:`method`},{label:`os.getenv`,type:`method`},{label:`os.remove`,type:`method`},{label:`os.rename`,type:`method`},{label:`os.setlocale`,type:`method`},{label:`os.time`,type:`method`},{label:`os.tmpname`,type:`method`}],De=[{label:`utf8.char`,type:`method`},{label:`utf8.charpattern`,type:`constant`},{label:`utf8.codes`,type:`method`},{label:`utf8.codepoint`,type:`method`},{label:`utf8.len`,type:`method`},{label:`utf8.offset`,type:`method`}],Oe=[{label:`debug.debug`,type:`method`},{label:`debug.gethook`,type:`method`},{label:`debug.getinfo`,type:`method`},{label:`debug.getlocal`,type:`method`},{label:`debug.getmetatable`,type:`method`},{label:`debug.getregistry`,type:`method`},{label:`debug.getupvalue`,type:`method`},{label:`debug.getuservalue`,type:`method`},{label:`debug.sethook`,type:`method`},{label:`debug.setlocal`,type:`method`},{label:`debug.setmetatable`,type:`method`},{label:`debug.setupvalue`,type:`method`},{label:`debug.setuservalue`,type:`method`},{label:`debug.traceback`,type:`method`},{label:`debug.upvalueid`,type:`method`},{label:`debug.upvaluejoin`,type:`method`}],ke=[{label:`package.config`,type:`variable`},{label:`package.cpath`,type:`variable`},{label:`package.loaded`,type:`variable`},{label:`package.loadlib`,type:`method`},{label:`package.path`,type:`variable`},{label:`package.preload`,type:`variable`},{label:`package.searchers`,type:`variable`},{label:`package.searchpath`,type:`method`}],Ae=[B("function ${name}(${params})\n	${}\nend",{label:`function`,detail:`function snippet`,type:`keyword`,boost:1}),B("local function ${name}(${params})\n	${}\nend",{label:`local function`,detail:`local function snippet`,type:`keyword`}),B(`if \${cond} then
	\${}
end`,{label:`if`,detail:`if statement`,type:`keyword`}),B(`if \${cond} then
	\${}
else
	\${}
end`,{label:`ifelse`,detail:`if-else statement`,type:`keyword`}),B("for ${i} = ${1}, ${10} do\n	${}\nend",{label:`fori`,detail:`numeric for loop`,type:`keyword`}),B("for ${k}, ${v} in pairs(${table}) do\n	${}\nend",{label:`forp`,detail:`generic for (pairs)`,type:`keyword`}),B(`while \${cond} do
	\${}
end`,{label:`while`,detail:`while loop`,type:`keyword`}),B(`repeat
	\${}
until \${cond}`,{label:`repeat`,detail:`repeat-until loop`,type:`keyword`}),B("local ${name} = ${value}",{label:`local`,detail:`local declaration`,type:`keyword`}),B('print("${}")',{label:`print`,detail:`print snippet`,type:`function`}),B("::${label}::",{label:`::`,detail:`label definition`,type:`keyword`})],je=[...ye.map(e=>({...e,section:`Keyword`})),...be.map(e=>({...e,section:`Global`})),...xe.map(e=>({...e,section:`Coroutine`})),...Se.map(e=>({...e,section:`String`})),...Ce.map(e=>({...e,section:`Table`})),...we.map(e=>({...e,section:`Math`})),...Te.map(e=>({...e,section:`IO`})),...Ee.map(e=>({...e,section:`OS`})),...De.map(e=>({...e,section:`UTF8`})),...Oe.map(e=>({...e,section:`Debug`})),...ke.map(e=>({...e,section:`Package`})),...Ae],Me=H([`String`,`LongString`,`LineComment`,`BlockComment`],V(je));w({"if then else elseif end":T.controlKeyword,"while do repeat until":T.controlKeyword,"for in":T.controlKeyword,"return break goto":T.controlKeyword,"and or not":T.logicOperator,"function local":T.definitionKeyword,"nil true false":T.atom,Identifier:T.name,VariableName:T.variableName,LabelName:T.labelName,FuncName:T.function(T.definition(T.variableName)),FieldName:T.propertyName,Number:T.number,String:T.string,LongString:T.string,LineComment:T.lineComment,BlockComment:T.blockComment,Shebang:T.lineComment,'"+" "-" "*" "/" "^" "%" "//"':T.arithmeticOperator,"& | ~ << >>":T.bitwiseOperator,"< > <= >= == ~=":T.compareOperator,'".."':T.operator,'"#"':T.operator,Ellipsis:T.punctuation,"( )":T.paren,"[ ]":T.squareBracket,"{ }":T.brace,". , ; : ::":T.punctuation,"=":T.definitionOperator});var Ne=ve.configure({props:[w({"and or not":T.logicOperator,"if then else elseif end":T.controlKeyword,"while do repeat until":T.controlKeyword,"for in":T.controlKeyword,"function local":T.definitionKeyword,"return break goto":T.controlKeyword,"nil true false":T.atom,Identifier:T.name,VariableName:T.variableName,FuncName:T.function(T.definition(T.variableName)),FieldName:T.propertyName,LabelName:T.labelName,ParamList:T.variableName,Number:T.number,String:T.string,LongString:T.string,Ellipsis:T.punctuation,LineComment:T.lineComment,BlockComment:T.blockComment,Shebang:T.lineComment,'"+" "-" "*" "/" "^" "%" "//"':T.arithmeticOperator,"& | ~ << >>":T.bitwiseOperator,"< > <= >= == ~=":T.compareOperator,'".."':T.operator,'"#"':T.operator,"( )":T.paren,"[ ]":T.squareBracket,"{ }":T.brace,". , ; : ::":T.punctuation,"=":T.definitionOperator}),ae.add({DoBlock:j({closing:`end`}),WhileBlock:j({closing:`end`}),RepeatBlock:j({closing:`until`}),IfStatement:j({closing:`end`}),ForStatement:j({closing:`end`}),FunctionBody:j({closing:`end`}),TableConstructor:j({closing:`}`})}),k.add({DoBlock:e=>{let t=e.getChild(`do`),n=e.getChild(`end`);return t&&n?{from:t.to,to:n.from}:null},WhileBlock:e=>{let t=e.getChild(`do`),n=e.getChild(`end`);return t&&n?{from:t.to,to:n.from}:null},RepeatBlock:e=>{let t=e.getChild(`repeat`),n=e.getChild(`until`);return t&&n?{from:t.to,to:n.from}:null},IfStatement:e=>{let t=e.getChild(`then`),n=e.getChild(`end`);return t&&n?{from:t.to,to:n.from}:null},ForStatement:e=>{let t=e.getChild(`do`),n=e.getChild(`end`);return t&&n?{from:t.to,to:n.from}:null},FunctionBody:e=>{let t=e.getChild(`)`),n=e.getChild(`end`);return t&&n?{from:t.to,to:n.from}:null},TableConstructor:e=>({from:e.from+1,to:e.to-1}),LongString:e=>({from:e.from,to:e.to}),BlockComment:e=>({from:e.from,to:e.to})})]}),Pe=N.define({name:`lua`,parser:Ne,languageData:{commentTokens:{line:`--`,block:{open:`--[[`,close:`]]`}},indentOnInput:/^\s*(end|else|elseif|until|\)|\])$/,closeBrackets:{brackets:[`(`,`[`,`{`,`"`,`'`]},wordChars:`_`,autocomplete:Me}});function Fe(e={}){let t=e.enableCompletion===!1?[]:[Pe.data.of({autocomplete:Me})];return new ie(Pe,t)}var q=`#302d29`,Ie=`#655d51`,J=`#746a5c`,Y=`#e4dcce`,Le=`#cfc3ae`,X=`#9a5b3c`,Re=`#5f6647`,Z=`#b8a994`,ze=`#f4efe6`,Q=`#fffdf8`,$=`'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace`,Be=10,Ve=1.5,He=`72em`,Ue=[{className:`lua-punctuation`,tags:[T.punctuation,T.separator,T.paren,T.squareBracket,T.brace,T.bracket,T.angleBracket,T.operator,T.derefOperator,T.arithmeticOperator,T.logicOperator,T.compareOperator,T.updateOperator,T.meta,T.labelName],color:J},{className:`lua-name`,tags:[T.name,T.variableName,T.propertyName,T.attributeName,T.className,T.namespace,T.macroName,T.typeName,T.function(T.variableName),T.function(T.propertyName),T.special(T.variableName)],color:q},{className:`lua-literal`,tags:[T.number,T.integer,T.float,T.bool,T.null,T.atom,T.unit,T.escape,T.self,T.modifier,T.regexp],color:Ie},{className:`lua-string`,tags:[T.string,T.special(T.string),T.docString,T.link,T.url],color:Re},{className:`lua-keyword`,tags:[T.keyword,T.controlKeyword,T.moduleKeyword,T.operatorKeyword,T.definitionKeyword,T.standard(T.keyword),T.heading,T.heading1,T.heading2,T.heading3,T.quote,T.list],color:X,fontWeight:`600`},{className:`lua-comment`,tags:[T.comment,T.lineComment,T.blockComment,T.docComment],color:J,fontStyle:`italic`},{className:`lua-strong`,tags:[T.strong],color:q,fontWeight:`600`},{className:`lua-emphasis`,tags:[T.emphasis],color:q,fontStyle:`italic`}];function We(){let e={};for(let t of Ue){let n={color:t.color};t.fontWeight!==void 0&&(n.fontWeight=t.fontWeight),t.fontStyle!==void 0&&(n.fontStyle=t.fontStyle),e[`& .${t.className}`]=n}return e}function Ge(){return{theme:C.theme({"&":{color:q,backgroundColor:Q,fontSize:`0.9375rem`,fontFamily:$,height:`auto`,minHeight:`${Be*Ve}em`},".cm-content":{caretColor:X,fontFamily:$,lineHeight:String(Ve),padding:`0.75rem 0`,maxWidth:`none`},".cm-content :is(p, pre)":{margin:0},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:`rgba(154, 91, 60, 0.18)`},".cm-cursor, .cm-dropCursor":{borderLeftColor:X,borderLeftWidth:`2px`},".cm-activeLine":{backgroundColor:`rgba(228, 220, 206, 0.35)`},".cm-activeLineGutter":{backgroundColor:`rgba(228, 220, 206, 0.5)`},".cm-gutters":{position:`sticky`,top:`0`,left:`0`,alignSelf:`flex-start`,backgroundColor:ze,color:J,border:`none`,borderRight:`1px solid ${Y}`},".cm-lineNumbers .cm-gutterElement":{color:J,fontVariantNumeric:`tabular-nums`,minWidth:`2.5rem`},".cm-foldGutter .cm-gutterElement":{color:Z},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:`rgba(207, 195, 174, 0.5)`,outline:`none`},"&.cm-editor.cm-focused":{outline:`none`},"&.cm-editor":{borderRadius:`var(--radius-md)`},"& .cm-scroller":{overflowX:`auto`,overflowY:`visible`,fontFamily:$},"& .cm-scroller::-webkit-scrollbar":{width:`10px`,height:`10px`},"& .cm-scroller::-webkit-scrollbar-track":{backgroundColor:`transparent`},"& .cm-scroller::-webkit-scrollbar-thumb":{backgroundColor:Le,borderRadius:`var(--radius-sm)`,border:`2px solid ${Q}`},"& .cm-scroller::-webkit-scrollbar-thumb:hover":{backgroundColor:Z},".cm-panels":{backgroundColor:ze,color:q,borderTop:`1px solid ${Y}`},".cm-panels.cm-panels-bottom":{borderTop:`1px solid ${Y}`},".cm-searchMatch":{backgroundColor:`rgba(168, 134, 60, 0.3)`,outline:`1px solid ${Z}`},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:`rgba(154, 91, 60, 0.35)`},".cm-placeholder":{color:J,fontStyle:`italic`},...We()},{dark:!1}),highlightStyle:F.define(Ue.map(e=>({tag:[...e.tags],class:e.className})))}}var Ke=c({__name:`CodeEditor`,props:{modelValue:{},readonly:{type:Boolean},ariaLabel:{}},emits:[`update:modelValue`],setup(t,{expose:r,emit:a}){let o=t,s=a,c=b(`host`),l=d(),u=new I,f=new I,p=new I,{theme:m,highlightStyle:h}=Ge();i(()=>{c.value&&(l.value=new C({state:P.create({doc:o.modelValue,extensions:[u.of(Fe()),f.of(o.readonly?[]:E()),M(),te(),P.tabSize.of(2),L.of(`  `),re(),se(),A(),ne(h),m,D.of([...le,...ce,oe]),C.lineWrapping,p.of(C.editable.of(o.readonly!==!0)),O(`Write or paste Lua code…`),C.contentAttributes.of({"aria-label":o.ariaLabel??`Lua source code`,role:`textbox`,"aria-multiline":`true`}),C.updateListener.of(e=>{e.docChanged&&s(`update:modelValue`,e.state.doc.toString())})]}),parent:c.value}))});function g(e){let t=l.value;t&&(t.dispatch({changes:{from:0,to:t.state.doc.length,insert:e}}),t.focus())}e(()=>o.modelValue,e=>{e!==l.value?.state.doc.toString()&&g(e)}),e(()=>o.readonly,e=>{l.value?.dispatch({effects:f.reconfigure(e?[]:E())}),l.value?.dispatch({effects:p.reconfigure(C.editable.of(!e))})}),n(()=>{l.value?.destroy(),l.value=void 0}),r({setDoc:g,focus:()=>l.value?.focus()});let _={props:o,emit:s,host:c,view:l,languageCompartment:u,gutterCompartment:f,editableCompartment:p,theme:m,highlightStyle:h,setDoc:g,get EDITOR_MAX_HEIGHT(){return He}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),qe=[`data-readonly`];function Je(e,n,r,i,a,o){return m(),u(`div`,{ref:`host`,class:`lua-editor-host overflow-y-auto text-[0.9375rem]`,style:t({maxHeight:i.EDITOR_MAX_HEIGHT}),"data-readonly":r.readonly===!0?`true`:void 0},null,12,qe)}var Ye=U(Ke,[[`render`,Je]]),Xe=c({__name:`InputPrompt`,props:{prompt:{},mode:{default:`text`}},emits:[`submit`],setup(e,{expose:t,emit:n}){t();let r=e,a=n,o=d(``),s=d(null);i(()=>{s.value?.focus()});function c(){a(`submit`,o.value),o.value=``}function l(e){e.key===`Enter`&&!e.shiftKey&&c()}let u={props:r,emit:a,value:o,inputRef:s,submit:c,handleKeydown:l,get Button(){return x},get Label(){return S},get Input(){return ue}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),Ze={class:`card border-accent bg-accent/5 p-4`},Qe={class:`flex flex-col gap-3`},$e={class:`flex items-center gap-2`},et={key:0,class:`meta-mono text-label px-2 py-0.5 rounded bg-card border border-line`},tt={class:`flex gap-2`};function nt(e,t,n,r,i,o){return m(),u(`div`,Ze,[l(`div`,Qe,[l(`div`,$e,[t[1]||=l(`span`,{class:`label-micro text-ochre`},`►`,-1),f(r.Label,{class:`label-eyebrow text-ink`},{default:s(()=>[p(a(n.prompt||`Program is waiting for input…`),1)]),_:1}),n.mode?(m(),u(`span`,et,` mode: `+a(n.mode),1)):y(``,!0)]),l(`div`,tt,[f(r.Input,{ref:`inputRef`,modelValue:r.value,"onUpdate:modelValue":t[0]||=e=>r.value=e,type:n.mode===`*n`?`number`:`text`,onKeydown:r.handleKeydown,class:`flex-1 font-mono text-[0.9375rem]`,placeholder:n.mode===`*n`?`Enter a number…`:`Enter text and press Enter…`,autocomplete:`off`,spellcheck:`false`},null,8,[`modelValue`,`type`,`placeholder`]),f(r.Button,{type:`button`,onClick:r.submit,class:`border border-accent bg-accent text-[#fffaf5] hover:bg-accent/90 hover:text-[#fffaf5] pointer-coarse:min-h-11`},{default:s(()=>[...t[2]||=[p(` Submit `,-1)]]),_:1})]),t[3]||=l(`p`,{class:`label text-muted`},` The program is paused waiting for your input. Type a value and press Submit or Enter. `,-1)])])}var rt=U(Xe,[[`render`,nt]]),it=`pointer-coarse:min-h-11`,at=c({__name:`LuaEditor`,setup(e,{expose:t}){t();let r=fe();function a(e){return e<1e3?`${e.toFixed(1)} ms`:e<6e4?`${(e/1e3).toFixed(2)} s`:`${(e/6e4).toFixed(2)} min`}function o(e){(e.metaKey||e.ctrlKey)&&(e.key===`Enter`?(e.preventDefault(),r.executeProgram()):e.key.toLowerCase()===`s`&&(e.preventDefault(),r.saveSnippet()))}i(()=>{window.addEventListener(`keydown`,o),r.start()}),n(()=>{window.removeEventListener(`keydown`,o)});let s={editor:r,TOUCH_TARGET:it,formatDuration:a,handleKeyboardShortcut:o,get Button(){return x},get Label(){return S},get Textarea(){return ee},CodeEditor:Ye,InputPrompt:rt};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),ot={"aria-label":`Lua editor`,class:`flex flex-col gap-4`},st={class:`grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]`},ct={class:`card flex min-w-0 flex-col overflow-hidden`},lt={class:`border-b border-line px-4 py-3 sm:px-6`},ut={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},dt={class:`meta-mono text-label`},ft={class:`flex-1 px-4 py-4 sm:px-6`},pt={key:0,class:`lua-editor-host flex h-[22rem] items-center justify-center xl:h-[30rem]`,"aria-busy":`true`},mt={key:1,class:`lua-editor-host flex h-[22rem] flex-col justify-center px-6 xl:h-[30rem]`,role:`alert`},ht={class:`text-center`},gt={class:`mt-2 break-words font-mono text-[0.8125rem] leading-relaxed text-muted`},_t={class:`border-t border-line px-4 py-4 sm:px-6`},vt={class:`flex flex-wrap items-center gap-3`},yt={class:`ml-auto flex items-center gap-2`},bt={class:`card flex min-w-0 flex-col overflow-hidden`},xt={class:`flex flex-col gap-6 px-4 py-4 sm:px-6`},St={class:`flex min-w-0 flex-col`},Ct={class:`mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},wt={class:`mt-3 flex flex-wrap items-center gap-3`},Tt={class:`flex min-w-0 flex-col`},Et={class:`mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Dt={key:0,class:`mt-3 flex flex-wrap items-center gap-x-6 gap-y-1`},Ot={class:`label-mono text-label`},kt={class:`label-mono text-label`},At={key:0,class:`label-mono text-destructive`},jt={class:`card`},Mt={class:`border-b border-line px-4 py-3 sm:px-6`},Nt={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},Pt={class:`meta-mono text-label`},Ft={class:`px-4 py-4 sm:px-6`},It={key:0,class:`text-center py-8 text-muted`},Lt={key:1,class:`space-y-2 max-h-[30rem] overflow-y-auto`},Rt={class:`flex items-start justify-between gap-2`},zt={class:`flex-1 min-w-0`},Bt={class:`font-medium text-ink truncate`},Vt={class:`text-xs text-muted mt-0.5 font-mono`},Ht={class:`flex items-center gap-1 shrink-0`},Ut={class:`mt-4 border-t border-line pt-4`},Wt={class:`card`},Gt={class:`border-b border-line px-4 py-3 sm:px-6`},Kt={class:`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`},qt={class:`meta-mono text-label`},Jt={class:`px-4 py-4 sm:px-6`},Yt={class:`grid grid-cols-1 gap-3 sm:grid-cols-2`},Xt=[`onClick`],Zt={class:`text-[0.875rem] font-medium text-ink`},Qt={class:`mt-1 block text-xs leading-relaxed text-muted`},$t={key:0,class:`label-micro mt-2 block`},en={key:1,class:`label-micro mt-2 block`},tn={class:`font-mono`},nn={key:0,class:`card`},rn={class:`px-4 py-4 sm:px-6`},an={class:`grid grid-cols-1 gap-4 text-[0.875rem] sm:grid-cols-2`},on={class:`mt-1 text-muted`},sn={class:`text-muted`},cn={class:`mt-1 text-muted`},ln={class:`text-muted`},un={class:`text-muted`},dn={class:`label`,role:`status`,"aria-live":`polite`};function fn(e,t,n,i,c,d){return m(),u(`section`,ot,[l(`div`,st,[l(`div`,ct,[l(`div`,lt,[l(`div`,ut,[t[2]||=l(`h3`,{class:`label-eyebrow`},`Lua Program`,-1),l(`p`,dt,a(i.editor.source.value.length)+` characters `,1)])]),l(`div`,ft,[i.editor.status.value===`loading`?(m(),u(`div`,pt,[...t[3]||=[l(`p`,{class:`label`},`Starting Lua runtime…`,-1)]])):i.editor.status.value===`error`?(m(),u(`div`,mt,[l(`div`,ht,[t[4]||=l(`p`,{class:`label-micro`},`The Lua runtime could not start`,-1),l(`p`,gt,a(i.editor.notice.value),1)])])):(m(),g(i.CodeEditor,{key:2,modelValue:i.editor.source.value,"onUpdate:modelValue":t[0]||=e=>i.editor.source.value=e,readonly:i.editor.isExecuting.value,"aria-label":`Lua program source`},null,8,[`modelValue`,`readonly`]))]),l(`div`,_t,[l(`div`,vt,[f(i.Button,{type:`button`,size:`sm`,class:o([`border border-accent bg-accent text-[#fffaf5] hover:bg-accent/90 hover:text-[#fffaf5]`,i.TOUCH_TARGET]),disabled:!i.editor.hasSource.value||i.editor.isExecuting.value||!i.editor.workerReady.value,"aria-busy":i.editor.isExecuting.value,onClick:i.editor.executeProgram},{default:s(()=>[p(a(i.editor.isExecuting.value?`Running…`:`Run`),1)]),_:1},8,[`disabled`,`aria-busy`,`onClick`]),f(i.Button,{type:`button`,variant:`outline`,size:`sm`,class:o(i.TOUCH_TARGET),disabled:!i.editor.isExecuting.value,onClick:i.editor.stopExecution},{default:s(()=>[...t[5]||=[p(` Stop `,-1)]]),_:1},8,[`disabled`,`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:i.editor.resetProgram},{default:s(()=>[...t[6]||=[p(` Reset `,-1)]]),_:1},8,[`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:i.editor.clearEditor},{default:s(()=>[...t[7]||=[p(` Clear `,-1)]]),_:1},8,[`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:i.editor.formatCode},{default:s(()=>[...t[8]||=[p(` Format `,-1)]]),_:1},8,[`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:i.editor.downloadResult,disabled:!i.editor.executionResult.value},{default:s(()=>[...t[9]||=[p(` Download `,-1)]]),_:1},8,[`onClick`,`disabled`]),l(`div`,yt,[t[10]||=l(`span`,{class:`label-micro`},`Status:`,-1),l(`span`,{class:o([`label-mono`,{"text-ochre":i.editor.status.value===`ready`,"text-olive":i.editor.status.value===`running`,"text-cyan":i.editor.status.value===`awaiting-input`,"text-emerald":i.editor.status.value===`finished`,"text-destructive":i.editor.status.value===`error`}])},a(i.editor.status.value),3)])]),t[11]||=l(`p`,{class:`label mt-3`},` The interpreter runs entirely in your browser via WebAssembly with execution limits to prevent hangs. `,-1)])]),l(`div`,bt,[t[18]||=l(`div`,{class:`border-b border-line px-4 py-3 sm:px-6`},[l(`h3`,{class:`label-eyebrow`},`Data`)],-1),l(`div`,xt,[l(`div`,St,[l(`div`,Ct,[f(i.Label,{for:`lua-input`,class:`label-eyebrow`},{default:s(()=>[...t[12]||=[p(`Input`,-1)]]),_:1}),t[13]||=l(`span`,{class:`meta-mono text-label`},` provided to io.read() calls `,-1)]),i.editor.isAwaitingInput.value?(m(),g(i.InputPrompt,{key:0,prompt:i.editor.awaitingPrompt.value||``,mode:i.editor.awaitingMode.value||``,onSubmit:i.editor.supplyInput},null,8,[`prompt`,`mode`,`onSubmit`])):(m(),g(i.Textarea,{key:1,id:`lua-input`,modelValue:i.editor.input.value,"onUpdate:modelValue":t[1]||=e=>i.editor.input.value=e,rows:`6`,spellcheck:`false`,autocomplete:`off`,placeholder:`Type input here for io.read() calls…`,"aria-label":`Program input (stdin)`,class:`mt-2 w-full resize-y font-mono text-[0.9375rem] leading-relaxed break-words`},null,8,[`modelValue`])),l(`div`,wt,[f(i.Button,{type:`button`,variant:`outline`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:i.editor.loadSampleInput},{default:s(()=>[...t[14]||=[p(` Load Sample `,-1)]]),_:1},8,[`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:i.editor.clearInput},{default:s(()=>[...t[15]||=[p(` Clear Input `,-1)]]),_:1},8,[`onClick`])])]),l(`div`,Tt,[l(`div`,Et,[f(i.Label,{for:`lua-output`,class:`label-eyebrow`},{default:s(()=>[...t[16]||=[p(`Output`,-1)]]),_:1}),t[17]||=l(`span`,{class:`meta-mono text-label`},` rendered as it is produced `,-1)]),f(i.Textarea,{id:`lua-output`,"model-value":i.editor.output.value.join(``),rows:`10`,readonly:``,spellcheck:`false`,"aria-label":`Program output`,placeholder:`No output yet. Run a program to see results.`,class:`mt-2 w-full resize-y font-mono text-[0.9375rem] leading-relaxed break-words`},null,8,[`model-value`]),i.editor.executionResult.value?(m(),u(`div`,Dt,[l(`span`,Ot,` Operations: `+a(i.editor.executionResult.value.operations),1),l(`span`,kt,` Time: `+a(i.formatDuration(i.editor.executionResult.value.durationMs)),1),l(`span`,{class:o([`label-mono`,i.editor.executionResult.value.completed?`text-emerald`:`text-destructive`])},a(i.editor.executionResult.value.completed?`Completed`:`Stopped`),3),i.editor.executionResult.value.error?(m(),u(`span`,At,` Error: `+a(i.editor.executionResult.value.error),1)):y(``,!0)])):y(``,!0)])])])]),l(`div`,jt,[l(`div`,Mt,[l(`div`,Nt,[t[19]||=l(`h3`,{class:`label-eyebrow`},`Saved Snippets`,-1),l(`p`,Pt,a(i.editor.snippets.value.length)+` saved`,1)])]),l(`div`,Ft,[i.editor.snippets.value.length===0?(m(),u(`div`,It,[...t[20]||=[l(`p`,{class:`label`},`No saved snippets yet.`,-1),l(`p`,{class:`mt-1 text-sm`},`Save your current program using the button below.`,-1)]])):(m(),u(`div`,Lt,[(m(!0),u(_,null,r(i.editor.snippets.value,(e,n)=>(m(),u(`div`,{key:e.id,class:`card p-3 flex flex-col gap-2`},[l(`div`,Rt,[l(`div`,zt,[l(`p`,Bt,a(e.name),1),l(`p`,Vt,a(e.code.length)+` chars · `+a(new Date(e.updatedAt).toLocaleString()),1)]),l(`div`,Ht,[f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:e=>i.editor.loadSnippet(n)},{default:s(()=>[...t[21]||=[p(` Load `,-1)]]),_:1},8,[`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o(i.TOUCH_TARGET),onClick:e=>i.editor.renameSnippet(n)},{default:s(()=>[...t[22]||=[p(` Rename `,-1)]]),_:1},8,[`onClick`]),f(i.Button,{type:`button`,variant:`ghost`,size:`sm`,class:o([i.TOUCH_TARGET,`text-destructive hover:text-destructive`]),onClick:e=>i.editor.deleteSnippet(n)},{default:s(()=>[...t[23]||=[p(` Delete `,-1)]]),_:1},8,[`onClick`])])])]))),128))])),l(`div`,Ut,[f(i.Button,{type:`button`,size:`sm`,class:o([`border border-accent bg-accent text-[#fffaf5] hover:bg-accent/90 hover:text-[#fffaf5] w-full sm:w-auto`,i.TOUCH_TARGET]),disabled:!i.editor.hasSource.value,onClick:i.editor.saveSnippet},{default:s(()=>[...t[24]||=[p(` Save Current Program as Snippet `,-1)]]),_:1},8,[`disabled`,`onClick`]),t[25]||=l(`p`,{class:`label mt-2 text-muted`},` Snippets are stored locally in your browser and persist across page reloads. `,-1)])])]),l(`div`,Wt,[l(`div`,Gt,[l(`div`,Kt,[t[26]||=l(`h3`,{class:`label-eyebrow`},`Examples`,-1),l(`p`,qt,a(i.editor.exampleCount.value)+` programs`,1)])]),l(`div`,Jt,[l(`div`,Yt,[(m(!0),u(_,null,r(i.editor.examples.value,e=>(m(),u(`button`,{key:e.id,type:`button`,class:`rounded-md border border-line bg-card p-4 text-left transition-colors hover:bg-hover`,onClick:t=>i.editor.selectExample(e.id)},[l(`span`,Zt,a(e.title),1),l(`span`,Qt,a(e.description),1),e.stdin?(m(),u(`span`,$t,` Requires input: yes `)):y(``,!0),e.expectedOutput?(m(),u(`span`,en,[t[27]||=p(` Expected output: `,-1),l(`span`,tn,a(JSON.stringify(e.expectedOutput)),1)])):y(``,!0)],8,Xt))),128))])])]),i.editor.executionResult.value?(m(),u(`div`,nn,[t[30]||=l(`div`,{class:`border-b border-line px-4 py-3 sm:px-6`},[l(`h3`,{class:`label-eyebrow`},`Execution Details`)],-1),l(`div`,rn,[l(`div`,an,[l(`div`,null,[t[28]||=l(`p`,{class:`label-micro`},`Program`,-1),l(`p`,on,` Length: `+a(i.editor.source.value.length)+` characters `,1),l(`p`,sn,` Input provided: `+a(i.editor.input.value.length>0?`Yes`:`No`),1)]),l(`div`,null,[t[29]||=l(`p`,{class:`label-micro`},`Execution`,-1),l(`p`,cn,` Operations: `+a(i.editor.executionResult.value.operations),1),l(`p`,ln,` Duration: `+a(i.formatDuration(i.editor.executionResult.value.durationMs)),1),l(`p`,un,` Status: `+a(i.editor.executionResult.value.completed?`Completed`:`Stopped/Error`),1)])])])])):y(``,!0),l(`p`,dn,[i.editor.notice.value===``?(m(),u(_,{key:1},[p(` Everything runs in this browser: the Lua 5.4 runtime is WebAssembly and nothing is uploaded. `)],64)):(m(),u(_,{key:0},[p(a(i.editor.notice.value),1)],64))])])}var pn=U(at,[[`render`,fn]]);export{pn as default};