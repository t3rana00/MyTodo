drop table if exists task;

drop table if exists account;


create table account (
id serial primary key,
email varchar(50) unique not null,
password varchar(255) not NULL
);

create table task (
id serial primary key,
description varchar(255) not NULL
);

insert into task (description) values ('My test task');
insert into task (description) values ('My another test task');
insert into task (description) values ('One More');
insert into task (description) values ('Another one!');