-- ===================================================
-- Selecionar todos os registros de medicos cadastrados
-- ===================================================
select*from medico;

-- ===================================================
-- Selecionar campos especificos
-- ===================================================
select nome, especialidade from medico;

-- ===================================================
-- Usar filtro com where
-- ===================================================
select*from consulta where status='agendada';

-- ===================================================
-- Ordenar resultados 
-- ===================================================
select nome, especialidade from medico order by nome asc;

-- ===================================================
-- Atualização do status de uma consulta para cancelada
-- ===================================================
update consulta
set status='Cancelada'
where idConsulta=1;

-- ===================================================
-- Remove registro (não pode apagar por ter vinculação com outra tabela)
-- ===================================================
delete from paciente
where idPaciente =2;

-- ===================================================
-- Consulta realizada
-- ===================================================
select*from consulta where status='realizada';