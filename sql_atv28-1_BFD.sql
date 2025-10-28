-- ===================================================
-- Liste o nome do médico e o nome do paciente de cada consulta.
-- ===================================================
SELECT c.IdConsulta, m.Nome AS Medico, p.Nome AS Paciente, c.Status
FROM Consulta c
JOIN Medico m ON c.IdMedico = m.IdMedico
JOIN Paciente p ON c.IdPaciente = p.IdPaciente
ORDER BY c.IdConsulta;

-- ===================================================
-- Mostre apenas as consultas realizadas
-- ===================================================
select*from consulta where status='realizada';

-- ===================================================
-- Liste quantas consultas cada médico realizou
-- ===================================================
select m.nome as medico, count(c.IdConsulta) as TotalConsultas 
from consulta c join medico m on c.IdMedico=m.Idmedico group by m.nome;

-- ===================================================
-- Quantos pacientes distintos cada médico atenteu
-- ===================================================
SELECT m.Nome AS Medico, count(distinct c.IdPaciente) as TotalPaciente
FROM Consulta c
JOIN Medico m ON c.IdMedico = m.IdMedico
group by m.nome;

-- ===================================================
-- Liste as consultas ordenadas por data
-- ===================================================
select c.DataHora as Data from consulta c order by data;

-- ===================================================
-- Liste os medicos sem consulta (left join)
-- ===================================================
select m.nome, m.IdMedico from medico m 
left join consulta c on c.IdMedico=m.IdMedico
where c.IdMedico is null;
 
-- ===================================================
-- Mostra o nome de todos os medicos
-- ===================================================
select m.nome as medico from consulta c
left join medico m on c.IdMedico=m.IdMedico group by nome;

-- ===================================================
-- Mostre os status de consulta e a quantidade de cada um
-- ===================================================
select c.status, count(*) as quantidade from consulta c
join medico m on c.IdMedico=m.IdMedico group by status;

-- ===================================================
-- Liste os pacientes sem consulta (right join)
-- ===================================================
select p.nome, p.IdPaciente from paciente p 
left join consulta c on c.IdPaciente=p.IdPaciente
where c.IdPaciente is null;

-- ===================================================
-- Mostre o medico com o maior numero de consulta
-- ===================================================
select m.nome as medico, max(IdConsulta) from consulta c 
join medico m on c.IdMedico=m.IdMedico group by m.nome;

-- ===================================================
-- Lista os médicos e a quantidade de consultas
-- ===================================================
SELECT m.IdMedico, m.Nome, COUNT(c.IdConsulta) AS QuantidadeConsultas FROM Medico m
LEFT JOIN  Consulta c ON m.IdMedico = c.IdMedico
GROUP BY m.IdMedico, m.Nome;
