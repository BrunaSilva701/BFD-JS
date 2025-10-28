-- ===================================================
-- BANCO: ESCOLAR ALFA
-- ===================================================

DROP DATABASE IF EXISTS escolar_alfa;
CREATE DATABASE escolar_alfa
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE escolar_alfa;

-- ---------------------------------------------------
-- TABELA: Aluno
-- ---------------------------------------------------
CREATE TABLE Aluno (
  RA             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome           VARCHAR(100) NOT NULL,
  DataNascimento DATE,
  PRIMARY KEY (RA)
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- TABELA: Professor
-- ---------------------------------------------------
CREATE TABLE Professor (
  CodProf   INT UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome      VARCHAR(100) NOT NULL,
  Formacao  VARCHAR(100),
  PRIMARY KEY (CodProf)
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- TABELA: Disciplina
-- ---------------------------------------------------
CREATE TABLE Disciplina (
  CodDisc        INT UNSIGNED NOT NULL AUTO_INCREMENT,
  NomeDisciplina VARCHAR(120) NOT NULL,
  CodProf        INT UNSIGNED NOT NULL,
  PRIMARY KEY (CodDisc),
  KEY idx_disc_prof (CodProf),
  CONSTRAINT fk_disc_prof
    FOREIGN KEY (CodProf) REFERENCES Professor(CodProf)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- TABELA: Matricula
-- ---------------------------------------------------
CREATE TABLE Matricula (
  IdMatricula INT UNSIGNED NOT NULL AUTO_INCREMENT,
  RA          INT UNSIGNED NOT NULL,
  CodDisc     INT UNSIGNED NOT NULL,
  Nota        DECIMAL(5,2),
  Situacao    ENUM('Aprovado','Reprovado','Cursando') DEFAULT 'Cursando',
  PRIMARY KEY (IdMatricula),
  KEY idx_mat_aluno (RA),
  KEY idx_mat_disc  (CodDisc),
  CONSTRAINT fk_mat_aluno FOREIGN KEY (RA)     REFERENCES Aluno(RA)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_mat_disc  FOREIGN KEY (CodDisc) REFERENCES Disciplina(CodDisc)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  UNIQUE KEY uk_aluno_disc (RA, CodDisc)
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- DADOS DE EXEMPLO
-- ---------------------------------------------------
INSERT INTO Aluno (Nome, DataNascimento) VALUES
('Ana Souza','2004-05-10'),
('João Alves','2003-02-20'),
('Marina Dias','2005-11-03');

INSERT INTO Professor (Nome, Formacao) VALUES
('Carlos Ramos','Engenharia de Software'),
('Mariana Prado','Ciência da Computação');

INSERT INTO Disciplina (NomeDisciplina, CodProf) VALUES
('Banco de Dados', 1),
('Programação',    2),
('Redes de Computadores', 1);

INSERT INTO Matricula (RA, CodDisc, Nota, Situacao) VALUES
(1, 1, 8.5, 'Aprovado'),
(1, 2, 7.0, 'Aprovado'),
(2, 1, 5.0, 'Reprovado'),
(3, 2, NULL, 'Cursando');

-- ---------------------------------------------------
-- CONSULTA DE TESTE
-- ---------------------------------------------------
SELECT a.Nome AS Aluno, d.NomeDisciplina, p.Nome AS Professor, m.Nota, m.Situacao
FROM Matricula m
JOIN Aluno a PRIMARY ON a.RA=m.RA
JOIN Disciplina d ON d.CodDisc = m.CodDisc
JOIN Professor p  ON p.CodProf = d.CodProf
ORDER BY a.Nome, d.NomeDisciplina;
