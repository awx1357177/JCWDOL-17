create index idx_firstname
on actor (first_name);

select * from actor where first_name = 'NICK';

select * from actor where first_name like 'N%';
select * from actor where first_name like '%n';


select count(*) from actor;

