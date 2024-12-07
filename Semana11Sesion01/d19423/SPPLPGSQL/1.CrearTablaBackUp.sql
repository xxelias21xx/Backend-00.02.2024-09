-- Table: public.especie

-- DROP TABLE IF EXISTS public.especie;

CREATE TABLE IF NOT EXISTS public.especie_bck
(
    id integer NULL ,
    descripcion character varying(100),
    is_activo bit(1),
    usuario_creacion integer,
    fecha_creacion timestamp without time zone,
    usuario_modificacion integer,
    fecha_modificacion timestamp without time zone,
	accion varchar(3),
	usuario varchar(255)
)