import { STATUS } from "./constants"

export function getOperatorStatus(runningStatus, contextId) {
    const state = runningStatus.operatorStatus;
    if (!state) {
        return STATUS.DISABLED;
    }

    const context = state.find(st => st.contextID === contextId);
    if (!context) {
        return STATUS.DISABLED;
    }

    return context.operatorStatus.status === 'ENABLED' ? STATUS.ACTIVE : STATUS.DISABLED;
}

export function getMeshSyncStatus(runningStatus, contextId) {
    const state = runningStatus.operatorStatus;
    if (!state) {
        return STATUS.DISABLED;
    }

    const context = state.find(st => st.contextID === contextId);
    if (!context) {
        return STATUS.DISABLED;
    }

    const status = context.operatorStatus.controllers[CONTROLLERS.MESHSYNC]?.status;
    if (status?.includes('ENABLED')) {
        return status.split(' ')[1].trim();
    }
    return status;
}

export function getBrokerStatus(runningStatus, contextId) {
    const state = runningStatus.operatorStatus;
    if (!state) {
        return STATUS.NOT_CONNECTED;
    }

    const context = state.find(st => st.contextID === contextId);
    if (!context) {
        return STATUS.NOT_CONNECTED;
    }

    const status = context.operatorStatus.controllers[CONTROLLERS.BROKER]?.status;
    if (status?.includes('CONNECTED')) {
        return status.split(' ')[1].trim();
    }

    return STATUS.NOT_CONNECTED;
}
