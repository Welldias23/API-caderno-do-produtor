# API-caderno-do-produtor

## Sobre a API

O objetivo desta API é coletar e armazenar dados, ajudadando a ter um maior conhecimento de tudo que acontece na sua propriedade. desse modo com a ajuda de um técnico, você tera como identificar quais pontos a serem melhorados na fazenda.

Para um bom funcionamento da API, conto com o esforco para que seja colocados todos os dados necessarios, atualizados e precisos para um bom funcionamento do software.

## funcionalidades

Nessa API é possivel cadastrar, atualizar e excluir dados como, dados de Controle pluviométrico, Controle leiteiro, Controle de nascimentos, Controle reprodutivo, Controle de secagens, Controle rerodutivo, Controle de pesagens, Controle de ocorrências, Controle do rebanho, Controle de despesas, Controle de receitas, Recomendacões, Índices técnicos e econômicos. Apos 1 mês coletando os dados será possivel ter indicadores mensais e anuais que traram informacões da sua producão como...

- Producão de leite
- Producão média diária
- Área da atividade
- Área produtiva
- vacas em lactacão
- Total de vacas
- Total de animais no rebanho
- Vacas em lactacão sobre o total de vacas
- Vacas em lactacão sobre o total do rebanho
- Total de vacas / rebanho
- Vacas em lactacão / Área da atividade
- Producão por vaca em lactacão
- Producão por vacas totais
- Producão por mão de obra permanente
- Producão/ Área de atividade
- Producão/ Área produtiva
- Renda bruta da atividade
- Renda bruta do leite
- Preco médio do leite
- Gasto com concentrados
- Gasto com mão de obra contratada
- Custo operacional efetivo da atividade
- Custo operacional total da atividade
- Percentual do COT no preco do leite
- Percentual do CT no preco do leite
- Percentual do gasto com mão de obra sobre a renda bruta do leite
- Percentual do gasto com consentrados sobre a renda bruta do leite
- Margem bruta da atividade
- Margem bruta unitária
- Margem bruta por área
- Margem bruta em equivalentes litros de leite
- Margem bruta por vaca em lactacão
- Margem bruta por total de vacas
- Margem líquida da atividade
- Margem líquida unitaria
- Margem líquida em equivalentes litros de leite
- Lucro da atividade
- Lucro unitario
- Lucro em equivalete litros de leite
- Renda do leite em relacão a renda da atividade
- Estoque de capital sem terra
- Custo da mão de obra familiar
- Remuneracão da mão de obra failiar
- Taxa de giro do capital
- Custo total da atividade
- Custo operacional efetivo do leite
- Custo operacional total do leite
- Custo total do leite
- Percentual do COE no preco de leite
- Lucratividade
- Taxa de retorno do capital sem terra
- Taxa de retorno do capital com terra
- Ponto de cobertura total

## EndPoints

### cadastro do Produtor

#### `post` `/produtor`

- **Requisição**  
  Sem parâmetros de rota ou de query.  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - nome
  - sobrenome
  - cpf
  - email
  - senha

- **Resposta**  
  Em caso de **sucesso**, você recebera o corpo (body) da resposta com o conteúdo do usuário cadastrado, incluindo seu respectivo `id` e excluindo a senha criptografada.
  Em caso de **falha no cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Campos obrigatórios:
    - nome
    - sobrenome
    - cpf
    - email
    - senha
  - O e-mail informado deve ser único
  - O cpf informado deve ser único
  - a senha deve ter no minimo 6 caracteres

### Atualizar cadastro do Produtor

#### `put` `/produtor`

- **Requisição**  
  Devera seguir o mesmo padrão da rota de cadastro do produtor

- **Resposta**  
  Em caso de **sucesso**, você não recebera um corpo (body) somente o **_status code_** 204.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Devera seguir os mesmos requisitos obrigatorio da rota de cadastro do produtor

### Excluir cadastro do Produtor

#### `delete` `/produtor`

- **Requisição**
  Sem parâmetros de rota ou de query  
  Não devera possuir corpo (body)

- **Resposta**  
  Em caso de **sucesso**,você recebera o corpo (body) da resposta com uma mensagem contendo o nome e sobrenome do produtor excluido dizendo que o cadastro foi excluido.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - O produtor devera está logado

### Cadastro de propriedade

#### `post` `/propriedade`

- **Requisição**  
  Sem parâmetros de rota ou de query.  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - nome_propriedade
  - area_da_atividade
  - area_produtiva

- **Resposta**  
  Em caso de **sucesso**, você recebera o corpo (body) da resposta com o conteúdo da propriedade cadastrada, incluindo seu respectivo `id` e o id\*produtor do produtor logado.
  Em caso de **falha no cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Campos obrigatórios:
    - nome_propriedade
    - area_da_atividade
    - area_produtiva
  - O produtor deve estar logado no seu cadastro.

### Atualizar cadastro de propriedade

#### `put` `/propriedade/:id`

- **Requisição**  
  Devera possuir o parametro de rota id com o id da propriedade a ser atualizada.

- **Resposta**  
  Em caso de **sucesso**, você não recebera um corpo (body) somente o **_status code_** 204.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Devera seguir os mesmos requisitos obrigatorio da rota de cadastro de propriedade
  - parametro de rota id

### Excluir cadastro de propriedade

#### `delete` `/propriedade/:id`

- **Requisição**
  Devera possuir o parametro de rota id com o id da propriedade a ser excluida.
  Não devera possuir corpo (body)

- **Resposta**  
  Em caso de **sucesso**,você recebera o corpo (body) da resposta com uma mensagem dizendo que o cadastro foi excluido.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - O produtor devera está logado
  - parametro de rota id

### Cadastro de Controle pluviométrico

#### `post` `/controles/pluviometrico`

- **Requisição**  
  Sem parâmetros de rota ou de query.  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - id_propriedade
  - data_chuva
  - volume_de_chuva

- **Resposta**  
  Em caso de **sucesso**, você recebera o corpo (body) da resposta com o conteúdo da propriedade cadastrada, incluindo seu respectivo `id` e o id\*produtor do produtor logado.
  Em caso de **falha no cadastro**, Você recebera um **\_status code\*** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Campos obrigatórios:
    - id_propriedade
    - data_chuva
    - volume_de_chuva
  - O produtor deve estar logado no seu cadastro.
  - a data deve ser no formato americano.

### Atualizar cadastro de Controle pluviométrico

#### `put` `/controles/pluviometrico/:id`

- **Requisição**  
  Devera possuir o parametro de rota id do cadastro de controle pluviométrico a ser atualizada.

- **Resposta**  
  Em caso de **sucesso**, você não recebera um corpo (body) somente o **_status code_** 204.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Devera seguir os mesmos requisitos obrigatorio da rota de cadastro de controle pluviométrico
  - parametro de rota id

### Excluir cadastro de controle pluviométrico

#### `delete` `/controles/pluviometrico/:id`

- **Requisição**
  Devera possuir o parametro de rota id com o id do controle pluviométrico a ser excluida.
  Não devera possuir corpo (body)

- **Resposta**  
  Em caso de **sucesso**,você recebera o corpo (body) da resposta com uma mensagem dizendo que o cadastro foi excluido.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - O produtor devera está logado
  - parametro de rota id

### Cadastro de Controle leiteiro

#### `post` `/controles/leiteiro`

- **Requisição**  
  Sem parâmetros de rota ou de query.  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - id_propriedade
  - data
  - industria
  - consumo_familiar
  - consumo_bezerros
  - descarte

- **Resposta**  
  Em caso de **sucesso**, você recebera o corpo (body) da resposta com o conteúdo do controle leiteiro cadastrado, incluindo seu respectivo `id` e o id\*produtor do produtor logado.
  Em caso de **falha no cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Campos obrigatórios:
    -id_propriedade
    -data
    -industria
    -consumo_familiar
    -consumo_bezerros
    -descarte
  - O produtor deve estar logado no seu cadastro.
  - a data deve ser no formato americano.

### Atualizar cadastro de Controle leiteiro

#### `put` `/controles/leiteiro/2`

- **Requisição**  
  Devera possuir o parametro de rota id do cadastro de controle leiteiro a ser atualizada.

- **Resposta**  
  Em caso de **sucesso**, você não recebera um corpo (body) somente o **_status code_** 204.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - Devera seguir os mesmos requisitos obrigatorio da rota de cadastro de controle leiteiro
  - parametro de rota id

### Excluir cadastro de Controle leiteiro

#### `delete` `/controles/leiteiro/id`

- **Requisição**
  Devera possuir o parametro de rota id com o id do controle leiteiro a ser excluida.
  Não devera possuir corpo (body)

- **Resposta**  
  Em caso de **sucesso**,você recebera o corpo (body) da resposta com uma mensagem dizendo que o cadastro foi excluido.
  Em caso de **falha no atualizar cadastro**, Você recebera um **_status code_** apropriado, e em seu corpo (body) ira possuir um objeto com uma propriedade **mensagem** que vai possuir como valor um texto explicando o motivo da falha.

- **REQUISITOS OBRIGATÓRIOS**
  - O produtor devera está logado
  - parametro de rota id

Controle de nascimentos

Controle reprodutivo

Controle de secagens

Controle rerodutivo - novilhas

Controle de pesagens

Controle de ocorrências

Controle do rebanho

Controle de despesas

Controle de receitas

Recomendacões

Índices técnicos e econômicos
