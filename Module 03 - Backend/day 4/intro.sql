-- Active: 1736650791469@@aws-0-ap-southeast-1.pooler.supabase.com@5432
CREATE DATABASE TEST; -- create database

drop database if EXISTS test; -- hapus database

create SCHEMA testing; -- create schema 

create database jcwdol17;

create Table employees (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,
    salary NUMERIC(10,2) NOT NULL, 
    hire_date DATE 
);  -- buat table employees


drop Table employees; -- hapus table


ALTER Table employees ADD COLUMN department VARCHAR(50); -- tambah kolom department

INSERT INTO employees (name,salary, hire_date) VALUES('John Doe', 50000, '2023-01-15');

INSERT INTO employees (name,salary, hire_date) VALUES('David Doe', 45000, '2023-01-15'), ('cindy Doe', 40000, '2023-01-15'); -- memasukan data ke table employees

SELECT * FROM employees; -- read table employees

SELECT name,salary from employees; -- read selected column in employees

update employees set salary = 43000 where id = 3; -- update salary 43000 dimana id = 3 

delete FROM employees where id = 2; -- menghapus data yang memiliki id = 2


INSERT INTO employees (name,salary, hire_date) VALUES('David Doe', 50000, '2023-01-15');

select count(salary) as total, salary from employees GROUP BY salary order by salary desc; -- mengelompokan data berdasarkan gaji dan menghitung baris data yang memiliki gaji yg sama


select count(salary) as total, salary from employees GROUP BY salary HAVING count(salary) > 1 order by salary; 
-- memunculkan data yg sudah dikelompokan. dimana hasil pengelompokannya diberi kondisi .

-- having sama dengan where. where memberikan kondisi terhadap source table.
-- sedangkan having memberikan kondisi pada hasil data yg sudah dikelompokan 

select * from employees;
select * from employees LIMIT 2 OFFSET 0; -- page 1 datanya dilimit sebanyak 2.
select * from employees LIMIT 2 OFFSET 2; -- page 2 
select * from employees LIMIT 2 OFFSET 4; -- page 3 



