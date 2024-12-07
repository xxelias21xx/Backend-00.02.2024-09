-- Trigger: tgr_ins_audit_especie

-- DROP TRIGGER IF EXISTS tgr_ins_audit_especie ON public.especie;

CREATE OR REPLACE TRIGGER tgr_ins_audit_especie
    AFTER INSERT
    ON public.especie
    FOR EACH ROW
    EXECUTE FUNCTION public.ins_audit_especie();