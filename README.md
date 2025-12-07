# Pitonico
<img src="/pitonico-logo.png" alt="Pitonico Logo" width="150"/>


<details>
<summary>En Español</summary>

Programar ya es bastante difícil en tu propio idioma. Sin embargo, para más de 519 millones de hablantes nativos de español, la única opción ha sido usar lenguajes de programación basados en el inglés.

Con Pitonico, ¡puedes programar en Python usando palabras clave en español!

## Ejemplo
Aquí tienes un ejemplo de código Pitonico:
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

Y aquí está su equivalente en inglés:
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

## Estructura
Pitonico son tres cosas:

1. Nueva localización de Python: Pitonico es como el Python regular: tiene bucles *for*, declaraciones *if* y es compatible con todas las bibliotecas de Python. Sin embargo, Pitonico usa palabras clave basadas en el español. Por ejemplo, una "if statement" es una "sentencia si".
2. Compilador de código a código: Para ejecutar tu nuevo código en español, Pitonico es un programa que traduce tu código de vuelta a Python típico en inglés (y viceversa).
3. Capa de traducción: Pitonico puede traducir tu código automáticamente en segundo plano antes de ejecutarlo. Desde tu perspectiva, nunca verás la versión inglesa de Python: simplemente se ejecutará. Se está desarrollando una extensión para VSCode para hacer esto.

Este proyecto está en progreso. Si tienes sugerencias, ¡involúcrate!

## Detalles técnicos:

- Pitonico no traduce nombres de variables o funciones. Sin embargo, sí traduce muchos paquetes, módulos, métodos y nombres de atributos comunes.
- No todas las funciones o características están soportadas — ¡Aún estamos trabajando!
- El formato de este proyecto no es final. El plan es construir un portal web, una extensión para VSCode, un resaltador de sintaxis, una utilidad de terminal y una documentación mucho mejor.

</details>


<details>
<summary>In English</summary>


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
- The format of this project is not final. The plan is to make a web portal, VSCode extension, syntax highlighter, terminal utility, and much better documentation. 

</details>
