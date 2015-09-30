# What's a function?

[function](https://en.wikipedia.org/wiki/Function_(mathematics))

In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output.

## Examples of functions
      
       *---------*
       |         |
x  ->  |   f(x)  |  ->  y
       |         |
       *---------*

square :: Number => Number

...
-2 -> 4
-1 -> 1
 1 -> 1
 2 -> 4
 3 -> 9
 4 -> 16
 5 -> 25
 6 -> 36
...

add :: Number => Number -> Number

...
2 -> (1 -> 3)
2 -> (2 -> 4)
2 -> (5 -> 10)
3 -> (5 -> 8)
3 -> (12 -> 15)
...

## Examples of non-functions

crazySquare :: Number => Number

...
1 -> 1
2 -> 4
2 -> 99 (wait...what?)
3 -> 9 
...


# Function composition

[function composition](https://en.wikipedia.org/wiki/Function_composition)

       *---------*             *---------*
       |         |             |         |
x  ->  |   f(x)  |  ->  y  ->  |   g(y)  |  ->  z
       |         |             |         |
       *---------*             *---------*


       *-----------*             *-----------*
       |           |             |           |
2  ->  | double(2) |  ->  4  ->  | square(4) |  ->  16
       |           |             |           |
       *-----------*             *-----------*

g ∘ f = double(square(x)) = compose(square, double)(x)


