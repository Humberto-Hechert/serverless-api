interface AgendamentoPayload {
    medico_id: number;
    paciente_nome: string;
    data_horario: string;
  }
  
  export const createAgendamentoService = (payload: AgendamentoPayload) => {
    const { medico_id, paciente_nome, data_horario } = payload;
  
    const medico = medico_id === 1 ? 'Dr. João Silva' : 'Dra. Maria Souza';
  
    return {
      medico,
      paciente: paciente_nome,
      data_horario,
    };
  };
  