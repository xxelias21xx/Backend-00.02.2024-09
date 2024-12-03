create or replace procedure sp_crud_category(
"accion" text,
"p_id" int,
"p_name" varchar,
"p_description" text
)
language plpgsql
as $BODY$
BEGIN
  IF (accion = 'insertar') THEN
  	
	    insert into categories (category_id, category_name, description)
		values(p_id, p_name, p_description);
	
  ELSIF(accion = 'actualizar') then
  	
		update categories set category_name = p_name, description = p_description
		where category_id = p_id;
	
  END IF;
END;
$BODY$;

call sp_crud_category('insertar', 99, 'miCategoria', 'Micategoriadescrip');


call sp_crud_category('actualizar', 99, 'miCategoriaUPD', 'MicategoriadescripUPD');
select * from categories;


DROP PROCEDURE sp_crud_category(text,integer,character varying,text) 