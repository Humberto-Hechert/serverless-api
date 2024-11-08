export const validateAgendamentoPayload = (payload: any) => {
    if (!payload.medico_id || !payload.paciente_nome || !payload.data_horario) {
      throw new Error('Campos obrigatórios estão faltando.');
    }
  };
  