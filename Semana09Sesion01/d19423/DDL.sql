drop table if exists mascota_vacuna;
drop table if exists mascota;
drop table if exists sexo;
drop table if exists raza;
drop table if exists especie;
drop table if exists vacuna;
drop table if exists propietario;
drop table if exists ubigeo;
drop table if exists nacionalidad;

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


create table especie(
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

insert into especie (descripcion, usuario_creacion)
values('Perros',1)
,('Gatos', 1);

select * from especie;


create table vacuna(
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

insert into vacuna (descripcion, usuario_creacion)
values('Triple Felina',1)
,('Antirrabica', 1);

select * from vacuna;



create table nacionalidad(
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

insert into nacionalidad (descripcion, usuario_creacion)
values('Peruana',1)
,('Ecuatoriana', 1);

select * from nacionalidad;

create table ubigeo(
	ubigeo varchar(6) primary key,
	departamento varchar(100) not null,
	provincia varchar(100) not null,
	distrito varchar(100) not null,
	is_activo bit default '1'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id)
);

insert into ubigeo (ubigeo,departamento ,provincia,distrito, usuario_creacion)
values('140109','Lima','Lima','La Victoria',1)
,('130115','Lambayeque','Chiclayo','La Victoria',1);

select * from ubigeo;


create table propietario(
	id serial primary key,
	nombres varchar(100) not null,
	apellidos varchar(100) not null,
	telefono varchar(9) not null check(telefono ~ '^9\d{8}$'),
	ubigeo varchar(6) not null,
	direccion varchar(255) not null,
	id_nacionalidad int not null,
	is_activo bit default '1'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id),
	foreign key (ubigeo) references ubigeo(ubigeo),
	foreign key (id_nacionalidad) references nacionalidad(id)
);

insert into propietario(nombres, apellidos, telefono, ubigeo, direccion, id_nacionalidad, usuario_creacion)
values('Roberto David', 'Pineda Lopez','916730940','140109','Teodoro Cardenas 111', 2,1 );

select * from propietario;


create table mascota(
	id serial primary key,
	nombre varchar(100) not null,
	fecha_nacimiento timestamp with time zone null,
	color varchar(100) not null,
	id_especie int not null,
	id_raza int not null,
	id_sexo int not null,
	id_propietario int not null,
	is_activo bit default '1'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id),
	foreign key (id_especie) references especie(id),
	foreign key (id_raza) references raza(id),
	foreign key (id_sexo) references sexo(id),
	foreign key (id_propietario) references propietario(id)
	
);

insert into mascota (nombre, fecha_nacimiento, color, id_especie, id_raza, id_sexo, id_propietario, usuario_creacion)
values('Pancho',null, 'Atigrado', 2, 1, 1, 1, 1);

select * from mascota;

create table mascota_vacuna(
	id serial primary key,
	id_mascota int not null,
	id_vacuna int not null,
	fecha_aplicacion timestamp with time zone null,
	is_activo bit default '1'::bit not null,
	usuario_creacion int not null,
	fecha_creacion timestamp not null default now(),
	usuario_modificacion int null,
	fecha_modificacion timestamp null,
	foreign key (usuario_creacion) references usuario(id),
	foreign key (usuario_modificacion) references usuario(id),
	foreign key (id_mascota) references mascota(id),
	foreign key (id_vacuna) references vacuna(id)
	
);

insert into mascota_vacuna( id_mascota, id_vacuna, fecha_aplicacion, usuario_creacion)
values(1,1,null,1),
(1,2,'2023-11-03 18:00 -05',1);

select * from mascota_vacuna;


select 
m.nombre,
m.fecha_nacimiento,
m.color,
e.descripcion as Especie,
r.descripcion as Raza,
s.descripcion as Sexo,
p.nombres as Nombre_Propietario,
p.apellidos as Apellido_Propietario,
u.provincia,
u.departamento,
u.distrito,
n.descripcion as nacionalidad

from mascota m 

inner join especie e on m.id_especie = e.id
inner join raza r on m.id_raza = r.id
inner join sexo s on m.id_sexo = s.id
inner join propietario p on m.id_propietario  = p.id
inner join ubigeo u on p.ubigeo = u.ubigeo
inner join nacionalidad n on p.id_nacionalidad = n.id;