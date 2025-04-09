-- Active: 1736650791469@@aws-0-ap-southeast-1.pooler.supabase.com@5432@purwadhika@public
-- Create project name as purwadhika.
CREATE DATABASE purwadhika;
-- Show list of database with name contain purwadhika.
-- Create table name as students, with field id, last_name, first_name, address, city. The id field should be in integer type while the rest is varchar.
create table students ( id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), address VARCHAR, city VARCHAR(50) );
-- Add email column into table Students with type varchar.
alter TABLE students ADD COLUMN email VARCHAR(50);
-- Add gender, batch_code, phone_number, alternative_phone_number column in single query.
select * from students;
create type valid_gender as ENUM ('male','female');
alter Table students ADD COLUMN gender valid_gender,add COLUMN batch_code VARCHAR(20), ADD COLUMN phone_number VARCHAR(20), ADD COLUMN alternative_phone_number VARCHAR(20); 

-- Change alternative_phone_number column name into description with varchar type.
alter TABLE students RENAME COLUMN alternative_phone_number to description;
-- Remove column gender in table Students
alter Table students DROP COLUMN IF EXISTS gender;

-- Try to create table branch with output look like image below:
drop table if EXISTS branch;
CREATE TABLE BRANCH(
    id SERIAL PRIMARY KEY,
    branch_name VARCHAR(50),
    pic VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(20),
    province VARCHAR(20)
);
select * from branch;

INSERT INTO branch (branch_name, pic, address,city,province) VALUES
('BSD','THOMAS', 'GREEN OFFICE PARK 9', 'BSD','TANGERANG'),
('JKT','BUDI', 'MSIG TOWER', 'JAKARTA SELATAN','JAKARTA'),
('BTM','ANGEL', 'NONGSA', 'BATAM','KEP. RIAU');


-- Change PIC name into Dono if city is BSD
update branch set pic = 'DONO' where city = 'BSD';

-- Add another branch with branch name BLI, pic is Tono, address is Gianyar, city is Gianyar, province is Bali
insert INTO branch (branch_name, pic, address,city,province) VALUES ('BLI','TONO', 'GIANYAR', 'GIANYAR','BALI');


TRUNCATE Table branch;

