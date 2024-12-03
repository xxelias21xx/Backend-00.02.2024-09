-- Trigger: tgr_del_audit_especie

-- DROP TRIGGER IF EXISTS tgr_del_audit_especie ON public.especie;

CREATE OR REPLACE TRIGGER tgr_del_audit_especie
    AFTER DELETE
    ON public.especie
    FOR EACH ROW
    EXECUTE FUNCTION public.del_audit_especie();