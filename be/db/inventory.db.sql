create database if not exists inventory_mgt;

use inventory_mgt;

create table if not exists products(
	id int not null auto_increment,
    name varchar(100) not null,
    description varchar(400) not null,
    price int not null,
    quantity int not null,
    date_added datetime default current_timestamp not null,
    primary key(id)
);

create table if not exists orders(
	id int not null auto_increment,
    customer_name varchar(100) not null,
    customer_address varchar(100) not null,
    order_date datetime default current_timestamp not null,
    primary key(id)
);

INSERT INTO orders(customer_name, customer_address) VALUES ('John Doe','Beijing rd');
INSERT INTO orders(customer_name, customer_address) VALUES ('Doe John','Shang Tao');

create table if not exists order_items(
	id int not null auto_increment,
	order_id int not null,
	product_id int not null,
    quantity int not null,
    primary key(id),
    foreign key(order_id) references orders(id),
    foreign key(product_id) references products(id)
);

INSERT INTO order_items(order_id, product_id, quantity) VALUES (1,1,5);
INSERT INTO order_items(order_id, product_id, quantity) VALUES (2,1,1);
INSERT INTO order_items(order_id, product_id, quantity) VALUES (2,2,1);

create table if not exists cart(
	id int not null auto_increment,
	customer_name varchar(100) not null,
    primary key(id)
);

INSERT INTO cart(customer_name) VALUES ('John Doe');
INSERT INTO cart(customer_name) VALUES ('Doe John');

create table if not exists cart_items(
	id int not null auto_increment,
	cart_id int not null,
	product_id int not null,
    quantity int not null,
    primary key(id),
    foreign key(cart_id) references cart(id),
    foreign key(product_id) references products(id)
);

INSERT INTO cart_items(cart_id, product_id, quantity) VALUES (1, 2, 1);
INSERT INTO cart_items(cart_id, product_id, quantity) VALUES (1, 1, 2);