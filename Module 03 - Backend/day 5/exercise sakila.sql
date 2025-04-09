-- Active: 1736650791469@@aws-0-ap-southeast-1.pooler.supabase.com@5432@sakila@public
-- Display the first and last names of all actors from the table actor.
select first_name,last_name from actor;
-- You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "JOE." What is one query would you use to obtain this information?
select actor_id as id_number,first_name,last_name from actor where first_name = 'JOE';

select * from address;

-- Display the address, district, and city_id from address only for district: California, Alberta and Mekka
select address,district,city_id from address where district IN ('California', 'Alberta' , 'Mekka');
select address,district,city_id from address where district = 'California' or district = 'Alberta' or district = 'Mekka'; 

-- Count actor with last name WOOD from table actors.
select count(actor_id) from actor where last_name = 'WOOD';

-- Shows list of customer_id and sum of amount spent that made payment more than 20.
select customer_id, sum(amount) as total_payment from payment GROUP BY customer_id HAVING sum(amount) > 20;


-- Add new actor into table actors with name JHONNY DAVIS.
select * from actor order by actor_id desc;
insert into actor(first_name,last_name) VALUES ('JHONNY','DAVIS');
-- There are several new actor to add. Add new actor into table actors with name ADAM DAVIS, JEREMY DAVIS, CRAIG DAVIS, f DAVIS in a single query.
insert into actor(first_name,last_name) VALUES ('JEREMY','DAVIS'),('CRAIG','DAVIS'),('f','DAVIS');

-- Count how many actors with last name DAVIS.
select count(*) from actor where last_name = 'DAVIS';
-- Delete actor with last name DAVIS and first name JENNIFER.
delete from actor where last_name = 'DAVIS' and first_name = 'JENNIFER';
-- Update actor with last name DAVIS and change his/her first name into GEORGE
update actor set first_name = 'GEORGE' where last_name = 'DAVIS';
-- Find top 10 actor with the most perform on film.

select count(actor_id)  as performance ,actor_id from film_actor group by actor_id order BY performance desc limit 10;
-- Display title, description, length, and rating from film, where special features include deleted scenes and behind the scenes order by most length
select title,description,length, rating, special_features from film where special_features @> ARRAY['Deleted Scenes','Behind the Scenes'] ORDER BY "length" DESC;
-- Display country and total of inactive customer (active = 0) from country where customer active = 0 order by the highest inactive (active = 0) customer
select count(c.country) as in_active_user,c.country from country c
join city ct on ct.country_id = c.country_id
join address ad on ad.city_id = ct.city_id 
join customer cus on cus.address_id = ad.address_id
where cus.active = 0
group by c.country
order BY count(c.country) desc;

select * from address;

-- PRIMARY KEY => 1 baris itu unik 
-- FOREIGN KEY => primary key milik table lain

-- select * from customer;
-- select * from address;