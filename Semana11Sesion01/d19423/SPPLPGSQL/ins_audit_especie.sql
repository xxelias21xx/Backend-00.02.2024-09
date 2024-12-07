-- FUNCTION: public.ins_audit_especie()

-- DROP FUNCTION IF EXISTS public.ins_audit_especie();

CREATE OR REPLACE FUNCTION public.ins_audit_especie()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
  DECLARE
  BEGIN
    
   insert into especie_bck(id, descripcion, is_activo,usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion,accion,usuario)
   values(NEW.id, new.descripcion, new.is_activo, new.usuario_creacion, new.fecha_creacion,new.usuario_modificacion,new.fecha_modificacion,'INS',CURRENT_USER);
return new;
  END;
$BODY$;

ALTER FUNCTION public.ins_audit_especie()
    OWNER TO postgres;
