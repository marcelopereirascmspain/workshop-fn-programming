# https://himera.herokuapp.com/index.html

(defn add [a b] (+ a b))

(defn square [x] (* x x))

(reduce + 0 (map square (filter even? [1 2 3 4 5])))