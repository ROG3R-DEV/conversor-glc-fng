# Conversor GLC FNG

Esse código começa criando uma nova lista de regras para o FNC. Em seguida, ele percorre cada regra da GLC. Se a regra já está na forma correta (ou seja, tem um corpo de tamanho 1 ou 2), ele apenas a adiciona à lista FNC. Se o corpo da regra tem mais de 2 símbolos, ele cria novas variáveis e regras para quebrar a regra original em várias regras menores, todas na forma correta.
