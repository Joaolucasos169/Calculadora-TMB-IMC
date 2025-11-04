def calculadora_imc():
    peso = float(input("Digite seu peso em kg: "))
    altura = float(input("Digite sua altura: "))
    
    imc = peso / (altura ** 2)
    print(f"Seu IMC é: {imc:.2f}")
    
    if imc < 18.5:
        print("Classificação: Você está Abaixo do peso!")
    elif imc > 18.5 and imc < 24.90:
         print("Classificação: Você está no peso ideal!")
    elif imc > 24.90 and imc < 29.90:
        print("Classificação: Você está com sobrepeso!")
    elif imc > 29.90 and imc < 34.90:
        print("Classificação: Você está com Obsidade Grau I!")
    elif imc > 34.90 and imc < 39.90:
        print("Classificação: Você está com Obsidade Grau II!")
    else:
        print("Classificação: Você está com Obsidade Grau III (mórbida)!")
        
calculadora_imc()
        
