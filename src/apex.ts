export type FlowProcessType = 'AutoLaunchedFlow'
      |'Flow'
      |'Workflow'
      |'CustomEvent'
      |'InvocableProcess'
      |'LoginFlow'
      |'ActionPlan'
      |'JourneyBuilderIntegration'
      |'UserProvisioningFlow'
      |'Survey'
      |'SurveyEnrich'
      |'Appointments'
      |'FSCLending'
      |'DigitalForm'
      |'FieldServiceMobile'
      |'OrchestrationFlow'
      |'FieldServiceWeb'
      |'TransactionSecurityFlow'
      |'ContactRequestFlow'
      |'ActionCadenceFlow'
      |'ManagedContentFlow'
      |'CheckoutFlow'
      |'CartAsyncFlow'
      |'DataCaptureFlow'
      |'CustomerLifecycle'
      |'Journey'
      |'RecommendationStrategy'
      |'Orchestrator'
      |'RoutingFlow'
      |'ServiceCatalogItemFlow'
      |'EvaluationFlow'
      |'LoyaltyManagementFlow'
      |'ManagedContentAuthoringWorkflow'
      |'ActionCadenceAutolaunchedFlow'
      |'ActionCadenceStepFlow'
      |'IndicatorResultFlow'
      |'IndividualObjectLinkingFlow'
      |'PromptFlow'
      |'ApprovalWorkflow'
      |'DcvrFrameworkDataCaptureFlow'
      |'ActivityObjectMatchingFlow'
      |'ActionableEventManagementFlow'
      |'StageManagementEvaluationFlow'
      |'RpaFlow'

export type PerfOption = 'NONE'
      |'MINIMUM'

export type LogCategory = 'Db'
      |'Workflow'
      |'Validation'
      |'Callout'
      |'Apex_code'
      |'Apex_profiling'
      |'Visualforce'
      |'System'
      |'Wave'
      |'Nba'
      |'Data_Access'
      |'All'

export type LogCategoryLevel = 'None'
      |'Finest'
      |'Finer'
      |'Fine'
      |'Debug'
      |'Info'
      |'Warn'
      |'Error'

export type LogType = 'None'
      |'Debugonly'
      |'Db'
      |'Profiling'
      |'Callout'
      |'Detail'

export class ID {}

export class AllowFieldTruncationHeader {}

export class CallOptions {}

export class DebuggingHeader {}

export class DebuggingInfo {}

export class DisableFeedTrackingHeader {}

export class PackageVersionHeader {}

export class SessionHeader {}

export class compileAndTest {}

export class compileAndTestResponse {}

export class compileClasses {}

export class compileClassesResponse {}

export class compileTriggers {}

export class compileTriggersResponse {}

export class executeAnonymous {}

export class executeAnonymousResponse {}

export class runTests {}

export class runTestsResponse {}

export class wsdlToApex {}

export class wsdlToApexResponse {}

export class CompileAndTestRequest {
    checkOnly!: boolean;
    classes!: string[];
    deleteClasses!: string[];
    deleteTriggers!: string[];
    runTestsRequest?: RunTestsRequest;
    triggers!: string[];
}

export class RunTestsRequest {
    allTests!: boolean;
    classes!: string[];
    maxFailedTests?: number;
    namespace!: string;
    packages!: string[];
    skipCodeCoverage?: boolean;
    tests!: TestsNode[];
}

export class TestsNode {
    classId!: string;
    className!: string;
    testMethods!: string[];
}

export class CompileAndTestResult {
    classes!: CompileClassResult[];
    deleteClasses!: DeleteApexResult[];
    deleteTriggers!: DeleteApexResult[];
    runTestsResult!: RunTestsResult;
    success!: boolean;
    triggers!: CompileTriggerResult[];
}

export class CompileClassResult {
    bodyCrc?: number;
    column!: number;
    id?: ID;
    line!: number;
    name?: string;
    problem?: string;
    problems?: CompileIssue[];
    success!: boolean;
    warnings?: CompileIssue[];
}

export class CompileIssue {
    column?: number;
    line?: number;
    message?: string;
}

export class DeleteApexResult {
    id?: ID;
    problem?: string;
    success!: boolean;
}

export class RunTestsResult {
    apexLogId?: string;
    codeCoverage!: CodeCoverageResult[];
    codeCoverageWarnings!: CodeCoverageWarning[];
    failures!: RunTestFailure[];
    flowCoverage!: FlowCoverageResult[];
    flowCoverageWarnings!: FlowCoverageWarning[];
    numFailures!: number;
    numTestsRun!: number;
    successes!: RunTestSuccess[];
    totalTime!: number;
}

export class CodeCoverageResult {
    id!: ID;
    locationsNotCovered!: CodeLocation[];
    name!: string;
    namespace?: string;
    numLocations!: number;
    numLocationsNotCovered!: number;
    type!: string;
}

export class CodeLocation {
    column!: number;
    line!: number;
    numExecutions!: number;
    time!: number;
}

export class CodeCoverageWarning {
    id!: ID;
    message!: string;
    name?: string;
    namespace?: string;
}

export class RunTestFailure {
    id!: ID;
    message!: string;
    methodName?: string;
    name!: string;
    namespace?: string;
    seeAllData?: boolean;
    stackTrace?: string;
    time!: number;
    type!: string;
}

export class FlowCoverageResult {
    elementsNotCovered!: string[];
    flowId!: string;
    flowName!: string;
    flowNamespace?: string;
    numElements!: number;
    numElementsNotCovered!: number;
    processType!: FlowProcessType;
}

export class FlowCoverageWarning {
    flowId?: string;
    flowName?: string;
    flowNamespace?: string;
    message!: string;
}

export class RunTestSuccess {
    id!: ID;
    methodName!: string;
    name!: string;
    namespace?: string;
    seeAllData?: boolean;
    time!: number;
}

export class CompileTriggerResult {
    bodyCrc?: number;
    column!: number;
    id?: ID;
    line!: number;
    name?: string;
    problem?: string;
    problems?: CompileIssue[];
    success!: boolean;
    warnings?: CompileIssue[];
}

export class ExecuteAnonymousResult {
    column!: number;
    compileProblem?: string;
    compiled!: boolean;
    exceptionMessage?: string;
    exceptionStackTrace?: string;
    line!: number;
    success!: boolean;
}

export class WsdlToApexInfo {
    mapping!: NamespacePackagePair[];
    wsdl!: string;
}

export class NamespacePackagePair {
    namespace!: string;
    packageName!: string;
}

export class WsdlToApexResult {
    apexScripts!: string[];
    errors!: string[];
    success!: boolean;
}

export class LogInfo {
    category!: LogCategory;
    level!: LogCategoryLevel;
}

export class PackageVersion {
    majorNumber!: number;
    minorNumber!: number;
    namespace!: string;
    packageId!: string;
}

export type ApiSchemaTypes = {
	FlowProcessType: FlowProcessType;
	PerfOption: PerfOption;
	LogCategory: LogCategory;
	LogCategoryLevel: LogCategoryLevel;
	LogType: LogType;
	ID: ID;
	AllowFieldTruncationHeader: AllowFieldTruncationHeader;
	CallOptions: CallOptions;
	DebuggingHeader: DebuggingHeader;
	DebuggingInfo: DebuggingInfo;
	DisableFeedTrackingHeader: DisableFeedTrackingHeader;
	PackageVersionHeader: PackageVersionHeader;
	SessionHeader: SessionHeader;
	compileAndTest: compileAndTest;
	compileAndTestResponse: compileAndTestResponse;
	compileClasses: compileClasses;
	compileClassesResponse: compileClassesResponse;
	compileTriggers: compileTriggers;
	compileTriggersResponse: compileTriggersResponse;
	executeAnonymous: executeAnonymous;
	executeAnonymousResponse: executeAnonymousResponse;
	runTests: runTests;
	runTestsResponse: runTestsResponse;
	wsdlToApex: wsdlToApex;
	wsdlToApexResponse: wsdlToApexResponse;
	CompileAndTestRequest: CompileAndTestRequest;
	RunTestsRequest: RunTestsRequest;
	TestsNode: TestsNode;
	CompileAndTestResult: CompileAndTestResult;
	CompileClassResult: CompileClassResult;
	CompileIssue: CompileIssue;
	DeleteApexResult: DeleteApexResult;
	RunTestsResult: RunTestsResult;
	CodeCoverageResult: CodeCoverageResult;
	CodeLocation: CodeLocation;
	CodeCoverageWarning: CodeCoverageWarning;
	RunTestFailure: RunTestFailure;
	FlowCoverageResult: FlowCoverageResult;
	FlowCoverageWarning: FlowCoverageWarning;
	RunTestSuccess: RunTestSuccess;
	CompileTriggerResult: CompileTriggerResult;
	ExecuteAnonymousResult: ExecuteAnonymousResult;
	WsdlToApexInfo: WsdlToApexInfo;
	NamespacePackagePair: NamespacePackagePair;
	WsdlToApexResult: WsdlToApexResult;
	LogInfo: LogInfo;
	PackageVersion: PackageVersion;
}
