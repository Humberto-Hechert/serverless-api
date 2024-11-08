import { APIGatewayProxyHandler } from 'aws-lambda';
import { getMockedAgendas } from './mocks';

export const getAgendas: APIGatewayProxyHandler = async (event) => {
  const agendas = getMockedAgendas();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos: agendas }),
  };
};
