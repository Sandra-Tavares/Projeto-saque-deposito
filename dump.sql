CREATE TABLE empresa (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  senha TEXT NOT NULL,
  cnpj TEXT UNIQUE
  );
  
  CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  senha TEXT NOT NULL,
  cpf TEXT UNIQUE
  );
  
  
CREATE TABLE saques (
  id SERIAL PRIMARY KEY,
  empresa_id INT NOT NULL REFERENCES empresa(id),
  cliente_id INT NOT NULL REFERENCES cliente(id),
  valor INT NOT NULL,
  data TIMESTAMP
  );
  
 CREATE TABLE depositos (
   id SERIAL PRIMARY KEY,
   empresa_id INT NOT NULL REFERENCES empresa(id),
   cliente_id INT NOT NULL REFERENCES cliente(id),
   valor INT NOT NULL,
   data TIMESTAMP
   );
  
