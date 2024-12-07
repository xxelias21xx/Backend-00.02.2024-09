-- Trigger: tgr_upd_audit_especie

-- DROP TRIGGER IF EXISTS tgr_upd_audit_especie ON public.especie;

CREATE OR REPLACE TRIGGER tgr_upd_audit_especie
    AFTER UPDATE 
    ON public.especie
    FOR EACH ROW
    EXECUTE FUNCTION public.upd_audit_especie();