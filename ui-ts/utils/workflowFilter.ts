export function groupWorkloadByType() {}

export function groupWorkfloadByVersion(){}

export function getUnformattedName(oamWorkloadOrTrait) {
    return oamWorkloadOrTrait.workload.oam_definition?.metadata?.name || "Un-Named"
}

export function findWorkloadByName(name, workloads) {
    return workloads?.find(workload => getUnformattedName(workload) == name)
}