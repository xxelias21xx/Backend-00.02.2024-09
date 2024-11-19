drop table if exists sexo;
drop table if exists raza;
drop table if exists usuario;




create table usuario(
	id serial primary key,
	username varchar(100) not null unique,
	password varchar(200) not null,
	email varchar(100) not null unique,
	is_activo bit default '0'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id)
);

insert into usuario(username, password, email, usuario_creacion)
values('dchalan', '123123', 'dchalan@x-codec.net', 1);

select * from usuario;




create table sexo(
	id serial primary key,
	descripcion varchar(100) not null unique,
	is_activo bit default '1'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id)
);

insert into sexo (descripcion, usuario_creacion)
values('Macho',1)
,('Hembra', 1);

select * from sexo;

create table raza(
	id serial primary key,
	descripcion varchar(100) not null unique,
	is_activo bit default '1'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id)
);

insert into raza (descripcion, usuario_creacion)
values('Mestizo',1)
,('Azul Ruso', 1);

select * from raza;

