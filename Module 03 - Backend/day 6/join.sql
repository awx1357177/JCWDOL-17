
select * from customer;
select * from address;

select concat(first_name,' ', last_name) as fullname, city, address  from customer as c 
JOIN address as a on a.address_id = c.address_id and c.active = 1
JOIN city ct on ct.city_id = a.city_id;

select first_name, last_name, address  from customer c 
JOIN address a on a.address_id = c.address_id
where c.active = 1;

select  first_name, last_name, address, customer.address_id from customer 
JOIN address on address.address_id = customer.address_id;


-- inner join adalah menggabungkan antar table dimana masing2 table memiliki value yg match


select c.first_name, c.last_name, a.first_name , a.last_name from customer c
left join actor a on a.last_name = c.last_name;

select c.customer_id, a.actor_id from customer c 
left join actor a on a.first_name = c.first_name;
-- munculkan semua customer dan actor yg memiliki firstname yg sama dengan customer

select c.customer_id, a.actor_id from customer c 
join actor a on a.first_name = c.first_name;
-- munculkan customer dan actor yg firstnya sama

select c.customer_id, a.actor_id from customer c 
right join actor a on a.first_name = c.first_name 
where a.first_name = 'udin';
-- munculkan semua actor dan customer yg memiliki firstname yg sama dengan actor

-- customer sebagai sumber data
-- actor sebagai data tambahan
-- join -> sumber berada disebelah kiri
-- left join artinya menampilkan data yg bersinggungan dan seluruh data milik sumber data. 
-- right join menampilakn seluruh data dari data tambahan dan data yg bersinggungan. 
-- cross join menampilkan 1 data dari sumber data akan memiliki seluruh data dari data tambahan. 
-- full join menampilkan seluruh data di sumber data dan seluruh data di data tambahan.

-- full join menam
-- customer 100
-- actor 200 
-- bersinggungan 50 

-- join = 50 
-- left join = 100 
-- right join = 200
-- cross join = 100 * 200 = 20000; 

select * from customer 
cross join actor
where customer_id = 1;

select * from customer c
full join actor a on a.first_name = c.first_name;

-- bersinggungan = 599
-- customer = 599
-- actor = 204