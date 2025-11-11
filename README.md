# Pitonico
<img src="/pitonico-logo.png" alt="Pitonico Logo" width="150"/>

Coding is hard enough in your own language. Yet, for over 519 million native Spanish speakers, the only option is to use English-based programming languages.

With Pitonico, you can code in Python using Spanish keywords!

## Example
Here's an example of Pitonico code:
```python
importa mat

def resumen_factorial(numero):
    si numero < 0:
        lanza ErrorDeValor("Números negativos no permitidos")
    secuencia = lista(rango(1, numero + 1))
    total = mat.prod(secuencia)
    devuelve redondea(total / (suma(secuencia) o 1))

imprime(resumen_factorial(5))
```

And here's it's matching English Python:
```python
import math

def factorial_summary(n):
    if n < 0:
        raise ValueError("Negative numbers not allowed")
    seq = list(range(1, n + 1))
    total = math.prod(seq)
    return round(total / (sum(seq) or 1))

print(factorial_summary(5))
```

## Structure
Pitonico is three things:

1. New Python Localization: Pitonico is just like regulary Python: it has for loops, if statements, and is compatible with all Python libraries. However, Pitonico uses Spanish-based keywords. For example, an "if statement" is a "sentencia si".
2. Source-to-source compiler: To run your new spanish-based code, Pitonico is a program that translates your code back into typical English Python (and vice versa).
3. Translation Layer: Pitonico can automatically translate your code in the background before you run it. From your perspective, you'll never see the English Python version - it'll just run right away. A VSCode extension is in the works to do this.

This project is a work in progress. If you have suggestions, please get involved!


## Nitty-gritty Notes:

- Pitonico does not translate variable or function names. However, it does translate many common packages, modules, methods, and attribute names.
- Not every function or feature is supported - We're still a work in progress!
- The format of this project is not final. The plan is to make a web portal, VSCode extension, linter/syntax highlighter, terminal utility, and much better documentation. 
