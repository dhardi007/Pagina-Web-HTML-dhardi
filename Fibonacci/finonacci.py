def fibonacci(n):
    secuencia = [0, 1]
    while len(secuencia) < n:
        siguiente = secuencia[-1] + secuencia[-2]
        secuencia.append(siguiente)
    return secuencia[:n]

print(fibonacci(10))

