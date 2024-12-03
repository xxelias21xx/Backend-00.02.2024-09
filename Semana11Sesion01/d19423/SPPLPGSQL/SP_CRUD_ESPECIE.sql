create or replace procedure sp_crud_especie(
"accion" varchar,
"p_id" int,
"p_descripcion" varchar,
"p_is_activo" int,
"p_usuario" int
)
language plpgsql
as $BODY$
BEGIN
  IF (accion = 'insertar') THEN
  begin
	insert into especie(descripcion, usuario_creacion)
	values(p_descripcion,p_usuario);
  end;
	
  ELSIF(accion = 'actualizar') then
	begin
		update especie set descripcion = p_descripcion,
		is_activo =  CAST (p_is_activo AS BIT),
		usuario_modificacion = p_usuario,
		fecha_modificacion = CURRENT_TIMESTAMP
		where id= p_id;
	end;
  ELSIF(accion = 'borrar') then
  	begin
		update especie set 
		is_activo = CAST (0 AS BIT),
		usuario_modificacion = p_usuario,
		fecha_modificacion = CURRENT_TIMESTAMP
		where id= p_id;
	end;
  END IF;
END;
$BODY$;


select * from especie;

call sp_crud_especie('insertar', null,'Roedor',null, 1);
call sp_crud_especie('actualizar', 3,'Roedores',1, 1);
call sp_crud_especie('borrar', 3,'Roedores',1, 1);