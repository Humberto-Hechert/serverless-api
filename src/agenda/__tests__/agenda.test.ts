import { getMockedAgendas } from '../mocks';

test('Deve retornar a lista de agendas mockadas', () => {
  const agendas = getMockedAgendas();
  expect(agendas).toHaveLength(2);
  expect(agendas[0].nome).toBe('Dr. João Silva');
});
