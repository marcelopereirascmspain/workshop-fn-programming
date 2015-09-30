-- http://elm-lang.org/try

import Html exposing (text)

add a b =
  a + b
  
square x =
  x * x
  
even x =
  x % 2 == 0
  
result = 
  List.filter even [1, 2, 3, 4, 5]
  |> List.map square
  |> List.foldl add 0

main =
  text (toString result)