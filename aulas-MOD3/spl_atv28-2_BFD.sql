-- ESCOLA ALFA

-- ===================================================
-- 1. Liste o nome dos alunos e suas disciplinas
-- ===================================================
select a.nome as Aluno, d.NomeDisciplina as Disciplina from matricula m 
join aluno a on a.RA=m.RA
join disciplina d on d.CodDisc=m.CodDisc;

-- ===================================================
-- 2. Mostre os professores e as disciplinas que lecionam
-- ===================================================
select p.nome as Professor, d.NomeDisciplina as Disciplina from disciplina d
join professor p on p.CodProf=d.CodProf;

-- ===================================================
-- 3. Calcule a média das notas por disciplina
-- ===================================================
select d.NomeDisciplina as Disciplina, avg(m.Nota) as Media from matricula m
join disciplina d on d.CodDisc=m.CodDisc group by disciplina;

-- ===================================================
-- 4. Mostre quantos alunos estão reprovados por disciplina
-- ===================================================
SELECT d.NomeDisciplina AS Disciplina, COUNT(*) AS QtdReprovados
FROM Matricula m JOIN Disciplina d ON d.CodDisc = m.CodDisc 
WHERE m.Situacao = 'Reprovado' GROUP BY d.NomeDisciplina;

-- ===================================================
-- 5. Liste as disciplinas sem alunos matriculados (left join e right join)
-- ===================================================
SELECT d.NomeDisciplina AS Disciplina 
FROM Disciplina d LEFT JOIN Matricula m ON d.CodDisc = m.CodDisc
WHERE m.CodDisc IS NULL;

SELECT d.NomeDisciplina AS Disciplina
FROM Matricula m RIGHT JOIN Disciplina d ON d.CodDisc = m.CodDisc
WHERE m.CodDisc IS NULL;
