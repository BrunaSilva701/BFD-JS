### Modelo sem entidade associativa
```
+--------------+                         +-----------------+
|medico        |                         | paciente        |
+--------------+                         +-----------------+
|PK id_medico  |                         | PK cpf_paciente |
|especialidade | N                    N  |data_nascimento  |
|nome_medico   |-----------atende--------|nome_paciente    |
+--------------+                         +-----------------+
        |  1                                      | 1
        |                                         |
    realiza                                       |
        |                                         |
        | N                                       |
+-----------------+                               |
|consulta         |                               |
+-----------------+                               |
|PK id_consulta   |----------------------------- tem
|data_consulta    | N
|horario_consulta |
+-----------------+

```
### Modelo com entidade associativa
```
+--------------+                         
|medico        |                        
+--------------+                         
|PK id_medico  |                         
|especialidade | 
|nome_medico   |
+--------------+  
        | 1
        |
        | N
+-----------------+                                 
|   ⟨ consulta ⟩   |                                 
+-----------------+                                 
|PK id_consulta   |
|FK id_medico     |
|FK cpf_paciente  | 
|data_consulta    |
|horario_consulta |
+-----------------+
        | N
        | 
        | 1
+-----------------+
| paciente        |
+-----------------+
|PK cpf_paciente |
|data_nascimento  |
|nome_paciente    |
+-----------------+
