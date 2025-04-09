-- tampilkan film yang durasinya lebih lama dari durasi rata2 film
select film_id,title, "length" from film
where "length" > (
    select avg("length") from film
);

select (select first_name from customer c where c.address_id = a.address_id), a.address from address a;


select * from actor a 
join (select (select a2.actor_id from actor a2 where a2.actor_id = 5) id) as test on test.id = a.actor_id;

-- select row yg direturn wajib 1 row 
