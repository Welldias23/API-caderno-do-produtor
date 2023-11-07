const validarCpf = (cpf) => {
  let n1 = 10
  const array1 =[]
  for (let i = 0; i <= 8; i++) {
    let numeroAtual = Number(cpf[i]) * n1
    array1.push(numeroAtual)
    n1 -= 1
  }
  let somaArray1 = 0
  for (const i of array1) {
    somaArray1 += i
  }

  let numeroVerificador1 = somaArray1 % 11

  if (numeroVerificador1 !== 1 || numeroVerificador1 !== 0) {
    numeroVerificador1 = 11 - numeroVerificador1
  }

  let n2 = 11
  const array2 =[]
  for (let i = 0; i <= 9; i++) {
    let numeroAtual = Number(cpf[i]) * n2
    array2.push(numeroAtual)
    n2 -= 1
  }
  let somaArray2 = 0
  for (const i of array2) {
    somaArray2 += i
  }

  let numeroVerificador2 = somaArray2 % 11

  if (numeroVerificador2 !== 1 || numeroVerificador2 !== 0) {
    numeroVerificador2 = 11 - numeroVerificador2
  }
  
  if (Number(cpf[9]) === numeroVerificador1 && Number(cpf[10]) === numeroVerificador2) {
    return true
  } else {
    return false
  }
}

module.exports = { validarCpf }