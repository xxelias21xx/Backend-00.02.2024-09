-- FUNCTION: public.upd_audit_especie()

-- DROP FUNCTION IF EXISTS public.upd_audit_especie();

CREATE OR REPLACE FUNCTION public.upd_audit_especie()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
  DECLARE
  BEGIN
    
   insert into especie_bck(id, descripcion, is_activo,usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion,accion,usuario)
   values(old.id, old.descripcion, old.is_activo, old.usuario_creacion, old.fecha_creacion,old.usuario_modificacion,old.fecha_modificacion,'UPD',CURRENT_USER);
return old;
  END;
$BODY$;

ALTER FUNCTION public.upd_audit_especie()
    OWNER TO postgres;
