-- ===================================================
-- BANCO: CLINICA VIDA PLENA
-- ===================================================

DROP DATABASE IF EXISTS clinica_vidaplena;
CREATE DATABASE clinica_vidaplena
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE clinica_vidaplena;

-- ---------------------------------------------------
-- TABELA: Medico
-- ---------------------------------------------------
CREATE TABLE Medico (
  IdMedico      INT UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome          VARCHAR(100) NOT NULL,
  CRM           VARCHAR(30)  NOT NULL,
  Especialidade VARCHAR(80),
  Telefone      VARCHAR(25),
  PRIMARY KEY (IdMedico),
  UNIQUE KEY uk_medico_crm (CRM)
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- TABELA: Paciente
-- ---------------------------------------------------
CREATE TABLE Paciente (
  IdPaciente     INT UNSIGNED NOT NULL AUTO_INCREMENT,
  Nome           VARCHAR(100) NOT NULL,
  CPF            VARCHAR(20)  NOT NULL,
  DataNascimento DATE,
  Telefone       VARCHAR(25),
  PRIMARY KEY (IdPaciente),
  UNIQUE KEY uk_paciente_cpf (CPF)
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- TABELA: Consulta
-- ---------------------------------------------------
CREATE TABLE Consulta (
  IdConsulta INT UNSIGNED NOT NULL AUTO_INCREMENT,
  DataHora   DATETIME      NOT NULL,
  Tipo       VARCHAR(30),
  Status     VARCHAR(20),
  IdMedico   INT UNSIGNED  NOT NULL,
  IdPaciente INT UNSIGNED  NOT NULL,
  PRIMARY KEY (IdConsulta),
  KEY idx_consulta_medico   (IdMedico),
  KEY idx_consulta_paciente (IdPaciente),
  CONSTRAINT fk_consulta_medico
    FOREIGN KEY (IdMedico) REFERENCES Medico(IdMedico)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_consulta_paciente
    FOREIGN KEY (IdPaciente) REFERENCES Paciente(IdPaciente)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- ---------------------------------------------------
-- DADOS DE EXEMPLO
-- ---------------------------------------------------
INSERT INTO Medico (Nome, CRM, Especialidade, Telefone) VALUES
('Carlos Souza','CRM123','Cardiologia','9999-1111'),
('Mariana Lima','CRM456','Pediatria','9888-2222'),
('Rafael Nunes','CRM789','Clínico Geral','9777-3333');

INSERT INTO Paciente (Nome, CPF, DataNascimento, Telefone) VALUES
('Ana Silva','111.222.333-44','1990-04-12','9876-3333'),
('João Melo','555.666.777-88','1985-02-23','9865-4444'),
('Maria Souza','999.000.111-22','2001-08-01','9855-5555');

INSERT INTO Consulta (DataHora, Tipo, Status, IdMedico, IdPaciente) VALUES
('2025-10-10 14:00:00','Rotina','Agendada', 1, 1),
('2025-10-11 10:00:00','Retorno','Realizada',2, 2),
('2025-10-12 09:30:00','Urgência','Agendada', 3, 1),
('2025-10-12 11:00:00','Rotina','Cancelada', 1, 3),
('2025-10-13 15:00:00','Rotina','Agendada', 2, 3);

-- ---------------------------------------------------
-- CONSULTA DE TESTE
-- ---------------------------------------------------
SELECT c.IdConsulta, c.DataHora, m.Nome AS Medico, p.Nome AS Paciente, c.Status
FROM Consulta c
JOIN Medico m ON m.IdMedico = c.IdMedico
JOIN Paciente p ON p.IdPaciente = c.IdPaciente
ORDER BY c.DataHora;
