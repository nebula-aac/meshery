import { atom } from "jotai";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ThunkMiddleware } from "redux-thunk";

export const initialState = {
  page: {
    path: '',
    title: '',
    isBeta: false,
  },
  user: {},
  k8sConfig: [], // k8sconfig stores kubernetes cluster configs
  selectedK8sContexts: ['all'], // The selected k8s context on which the operations should be performed
  loadTest: {
    testName: '',
    meshName: '',
    url: '',
    qps: 0,
    c: 0,
    t: '30s',
    result: {},
  },
  loadTestPref: {
    qps: 0,
    t: '30s',
    c: 0,
    gen: 'fortio',
    ts: new Date(),
  },
  meshAdapters: [],
  meshAdaptersts: new Date(),
  results: {
    startKey: '',
    results: [],
  },
  results_selection: {}, // format - { page: {index: content}}
  grafana: {
    grafanaURL: '',
    grafanaAPIKey: '',
    grafanaBoardSearch: '',
    grafanaBoards: [],
    selectedBoardsConfigs: [],
    ts: new Date(-8640000000000000),
  },
  prometheus: {
    prometheusURL: '',
    selectedPrometheusBoardsConfigs: [],
    ts: new Date(-8640000000000000),
  },
  staticPrometheusBoardConfig: {},
  anonymousUsageStats: true,
  anonymousPerfResults: true,
  showProgress: false,
  isDrawerCollapsed: false,
  selectedAdapter: '',
  events: [],
  catalogVisibility: true,
  extensionType: '',
  capabilitiesRegistry: null,
  telemetryURLs: {
    grafana: [],
    prometheus: [],
  },
  // global gql-subscriptions
  operatorState: null,
  meshSyncState: null,
}

/*
export const pageAtom = atom({
    path: '',
    title: '',
    isBeta: false,
});

export const userAtom = atom({});

export const k8sConfigAtom = atom([]);

export const selectedK8sContextsAtom = atom(['all']);

export const loadTestAtom = atom({
    testName: '',
    meshName: '',
    url: '',
    qps: 0,
    c: 0,
    t: '30s',
    result: {},
});

export const loadTestPrefAtom = atom({
    qps: 0,
    t: '30s',
    c: 0,
    gen: 'fortio',
    ts: new Date(),
});

export const meshAdaptersAtom = atom([]);

export const resultsAtom = atom({
    startKey: '',
    results: [],
});

export const resultsSelectionAtom = atom({});

export const grafanaAtom = atom({
    grafanaURL: '',
    grafanaAPIKey: '',
    grafanaBoardSearch: '',
    grafanaBoards: [],
    selectedBoardsConfigs: [],
    ts: new Date(-8640000000000000),
});

export const prometheusAtom = atom({
    prometheusURL: '',
    selectedPrometheusBoardsConfigs: [],
    ts: new Date(-8640000000000000),
});

export const staticPrometheusBoardConfigAtom = atom({});

export const anonymousUsageStatsAtom = atom(true);

export const anonymousPerfResultsAtom = atom(true);

export const showProgressAtom = atom(false);

export const isDrawerCollapsedAtom = atom(false);

export const selectedAdapterAtom = atom('');

export const eventsAtom = atom([]);

export const catalogVisibilityAtom = atom(true);

export const extensionTypeAtom = atom('');

export const capabilitiesRegistryAtom = atom(null);

export const telemetryURLsAtom = atom({
    grafana: [],
    prometheus: [],
});

export const operatorStateAtom = atom(null);

export const meshSyncStateAtom = atom(null);
*/

export const pageAtom = atom(initialState.page)
export const userAtom = atom(initialState.user)
export const k8sConfigAtom = atom(initialState.k8sConfig)
export const selectedK8sContextsAtom = atom(initialState.selectedK8sContexts)
export const loadTestAtom = atom(initialState.loadTest)
export const loadTestPrefAtom = atom(initialState.loadTestPref)
export const meshAdaptersAtom = atom(initialState.meshAdapters)
export const meshAdapterstsAtom = atom(initialState.meshAdaptersts)
export const resultsAtom = atom(initialState.results)
export const resultsSelectionAtom = atom(initialState.results_selection)
export const grafanaAtom = atom(initialState.grafana)
export const prometheusAtom = atom(initialState.prometheus)

const actionTypes = {
  UPDATE_PAGE: 'UPDATE_PAGE',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_BETA_BADGE: 'UPDATE_BETA_BADGE',
  UPDATE_CLUSTER_CONFIG: 'UPDATE_CLUSTER_CONFIG',
  SET_K8S_CONTEXT: 'SET_K8S_CONTEXT',
  UPDATE_LOAD_TEST_DATA: 'UPDATE_LOAD_TEST_DATA',
  UPDATE_ADAPTERS_INFO: 'UPDATE_ADAPTERS_INFO',
  // UPDATE_MESH_RESULTS: 'UPDATE_MESH_RESULTS',
  UPDATE_RESULTS_SELECTION: 'UPDATE_RESULTS_SELECTION',
  // DELETE_RESULTS_SELECTION: 'DELETE_RESULTS_SELECTION',
  CLEAR_RESULTS_SELECTION: 'CLEAR_RESULTS_SELECTION',
  UPDATE_GRAFANA_CONFIG: 'UPDATE_GRAFANA_CONFIG',
  UPDATE_PROMETHEUS_CONFIG: 'UPDATE_PROMETHEUS_CONFIG',
  UPDATE_STATIC_BOARD_CONFIG: 'UPDATE_STATIC_BOARD_CONFIG',
  UPDATE_LOAD_GEN_CONFIG: 'UPDATE_LOAD_GEN_CONFIG',
  UPDATE_ANONYMOUS_USAGE_STATS: 'UPDATE_ANONYMOUS_USAGE_STATS',
  UPDATE_ANONYMOUS_PERFORMANCE_RESULTS: 'UPDATE_ANONYMOUS_PERFORMANCE_RESULTS',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  TOOGLE_DRAWER: 'TOOGLE_DRAWER',
  SET_ADAPTER: 'SET_ADAPTER',
  UPDATE_EVENTS: 'UPDATE_EVENTS',
  SET_CATALOG_CONTENT: 'SET_CATALOG_CONTENT',
  SET_OPERATOR_SUBSCRIPTION: 'SET_OPERATOR_SUBSCRIPTION',
  SET_MESHSYNC_SUBSCRIPTION: 'SET_MESHSYNC_SUBSCRIPTION',
  // UPDATE_SMI_RESULT: 'UPDATE_SMI_RESULT',
  UPDATE_EXTENSION_TYPE: 'UPDATE_EXTENSION_TYPE',
  UPDATE_CAPABILITY_REGISTRY: 'UPDATE_CAPABILITY_REGISTRY',
  UPDATE_TELEMETRY_URLS: 'UPDATE_TELEMETRY_URLS',
};

const handleUpdatePage = (state, action) => {
  const { path, title } = action.payload;
  return {
    ...state,
    page: {
      ...state.page,
      path,
      title,
    },
  }
}

/*
const handleUpdatePage1 = {
  [updatePagePath.type]: (state, { payload }) => {
    return {
      ...state,
      pagePath: payload.path,
    };
  },
  [updatePageTitle.type]: (state, { payload }) => {
    return {
      ...state,
      pageTitle: payload.title,
    };
  },
}
*/

const actionHandlers = {
  [actionTypes.UPDATE_PAGE]: handleUpdatePage,
  //    [actionTypes.UPDATE_TITLE]: handleUpdateTitle,
  //    [actionTypes.UPDATE_USER]: handleUpdateUser,
  //    [actionTypes.UPDATE_BETA_BADGE]: handleUpdateBetaBadge,
  //    [actionTypes.UPDATE_CLUSTER_CONFIG]: handleUpdateClusterConfig,
  //    [actionTypes.SET_K8S_CONTEXT]: handleSetK8sContext,
  //    [actionTypes.UPDATE_LOAD_TEST_DATA]: handleUpdateLoadTestData,
  //    [actionTypes.UPDATE_ADAPTERS_INFO]: handleUpdateAdaptersInfo,
  //    [actionTypes.UPDATE_RESULTS_SELECTION]: handleUpdateResultsSelection,
  //    [actionTypes.CLEAR_RESULTS_SELECTION]: handleClearResultsSelection,
  //    [actionTypes.UPDATE_GRAFANA_CONFIG]: handleUpdateGrafanaConfig,
  //    [actionTypes.UPDATE_PROMETHEUS_CONFIG]: handleUpdatePrometheusConfig,
  //    [actionTypes.UPDATE_STATIC_BOARD_CONFIG]: handleUpdateStaticBoardConfig,
  //    [actionTypes.UPDATE_LOAD_GEN_CONFIG]: handleUpdateLoadGenConfig,
  //    [actionTypes.UPDATE_ANONYMOUS_USAGE_STATS]: handleUpdateAnonymousUsageStats,
  //    [actionTypes.UPDATE_ANONYMOUS_PERFORMANCE_RESULTS]: handleUpdateAnonymousPerformanceResults,
  //    [actionTypes.UPDATE_PROGRESS]: handleUpdateProgress,
  //    [actionTypes.TOOGLE_DRAWER]: handleToggleDrawer,
  //    [actionTypes.SET_ADAPTER]: handleSetAdapter,
  //    [actionTypes.UPDATE_EVENTS]: handleUpdateEvents,
  //    [actionTypes.SET_CATALOG_CONTENT]: handleSetCatalogContent,
  //    [actionTypes.SET_OPERATOR_SUBSCRIPTION]: handleSetOperatorSubscription,
  //    [actionTypes.SET_MESHSYNC_SUBSCRIPTION]: handleSetMeshsyncSubscription,
  //    [actionTypes.UPDATE_EXTENSION_TYPE]: handleUpdateExtensionType,
  //    [actionTypes.UPDATE_CAPABILITY_REGISTRY]: handleUpdateCapabilityRegistry,
  //    [actionTypes.UPDATE_TELEMETRY_URLS]: handleUpdateTelemetryUrls,
};

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
};

export const reducer = createReducer(initialState, actionHandlers);

export const store = createStore(
  reducer,
  // composeWithDevTools(applyMiddleware(ThunkMiddleware))
)