💸 Desafio Backend Wirecard 💳

Desafio Backend proposto pela WireCard. Nele tive que desenvolver uma API que seria usada numa negociação entre Client (vendedor) e Buyer (comprador), gerando e processando o pagamento da negociação. Os pagametos poderiam ser Boleto ou Cartão de Crédito. Na opção boleto, retornamos um número aleatório de pagamento, já no cartão de crédito, se o pagamento foi aprovado ou não. Deveria ser retornado em um outro endpoint, o status do pagamento e suas informações. Por fim, era necessário a realização de testes unitários nos endpoints desenvolvidos.

Você pode encontrar os detalhes do desafio [clicando aqui!](https://github.com/wirecardBrasil/challenge/tree/master/backend)

Endpoints desenvolvidos:
Cadastro Buyer
Cadastro Client
Gerar pagamento
Pegar pagamento pelo ID
⚙️ Funções e regras de negócio desenvolvidas:
Fiz os testes com JEST para elaboração dos endpoints, padronizando as entradas e saídas do projeto.
Utilizei o MySQL como Banco de Dados.
No Cadastro Buyer, o usuário precisa informar um nome, email e cpf válidos. Faço a verificação se o email ou cpf já estão cadastrados no meu banco de dados, caso esteja, o cadastro é interrompido. Em caso de sucesso, o cadastro é relizado e um ID é atribuido ao Buyer (ID gerado pela biblioteca UUID)
No Cadastro Client nenhuma informação é pedida ao usuário, endpoint criado apenas para popular o banco e gerar os pagamentos, apenas um ID por Client consiste essa tabela (também gerado por UUID).
Para Gerar Pagamento o usuário precisa me informar um ID de Client e um de Buyer por Params. No body eu coloco todas as informações necessárias tanto para pagamento por cartão, como pagamento por boleto (amount, type, status, card holder, card number, card expiration date, card cvv), porém o usuário apenas precisa preencher os dados de cartão se for realmente pagar com cartão de crédito.
No caso Boleto: Verifico se o Client e Buyer estão cadastrados e são usuários válidos, além de setar automático o Status para A PAGAR. Optei por gerar o número do boleto com um Date.now(), salvando o pagamento na Tabela payments_wirecard com um ID único para recuperar as informações do mesmo a qualquer momento.
No caso Cartão de Crédito: Verifico se o Client e Buyer estão cadastrados e são usuários válidos, além de checar os formatos passados dos dados do Cartão. Para ter uma resposta de "Não autorizado", mockei um array de CVV's válidos, simulando uma conversa com o Banco. Se o CVV do cartão não estiver nesse array, o pagamento não é autorizado, porém o pagamento é salvo no banco de dados com o Status A PAGAR. Caso o CVV esteja no array mocado, o pagamento é autorizado, salvo no banco de dados com o Status PAGO. Caso o cartão esteja com data expirada, o pagamento também é salvo no Banco de Dados, porém com o Status de A PAGAR.
No endpoint de Pegar pagamento pelo ID, o usuário precisa me informar o ID do pagamento por params, retornando o valor, id de buyer e client, além do status do pagamento.
📚 Documentação da API:
[Acesse completa aqui!](https://documenter.getpostman.com/view/20352183/UzXKXeWX)
🖥️ Linguagens e Bibliotecas usadas:
Typescript;
Node;
Jest;
Express;
Knex;
Cors;
UUID.
