import { APIGatewayProxyHandler } from 'aws-lambda';
import { createAgendamentoService } from './service';

export const createAgendamento: APIGatewayProxyHandler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const agendamento = createAgendamentoService(body);

    return {
      statusCode: 201,
      body: JSON.stringify({
        mensagem: 'Agendamento realizado com sucesso',
        agendamento,
      }),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return {
        statusCode: 400,
        body: JSON.stringify({ error: errorMessage }),
    };
  }
};
