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
  cpf TEXT NOT NULL REFERENCES cliente(cpf),
  cnpj TEXT NOT NULL REFERENCES empresa(cnpj),
  valor INT NOT NULL,
  data DATE
  );
  
 CREATE TABLE depositos (
   id SERIAL PRIMARY KEY,
   cpf TEXT NOT NULL REFERENCES cliente(cpf),
   cnpj TEXT NOT NULL REFERENCES empresa(cnpj),
   valor INT NOT NULL,
   data DATE
   );


ALTER TABLE depositos alter column data type date;
