def calculadora_basal():
    peso = float(input("Digite o seu peso em (kg): "))
    altura = float(input("Digite a sua altua: "))
    idade = int(input("Digite sua idade: "))
    porcetagem_gordura = float(input("Digite seu percentual de gordura: "))
    
    
    massa_magra = peso * (porcetagem_gordura/100)
    mtb = 66 + (13,7 * peso)+(5 * altura)-(6,8 * idade)