export type DeployProblemType = 'Warning'
      |'Error'
      |'Info'

export type ManageableState = 'released'
      |'deleted'
      |'deprecated'
      |'installed'
      |'beta'
      |'unmanaged'
      |'installedEditable'
      |'deprecatedEditable'

export type RetrieveStatus = 'Pending'
      |'InProgress'
      |'Succeeded'
      |'Failed'

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

export type DeployStatus = 'Pending'
      |'InProgress'
      |'Succeeded'
      |'SucceededPartial'
      |'Failed'
      |'Canceling'
      |'Canceled'

export type AsyncRequestState = 'Queued'
      |'InProgress'
      |'Completed'
      |'Error'

export type AIFilterUnit = 'Milliseconds'
      |'Seconds'
      |'Minutes'
      |'Hours'
      |'Days'
      |'Weeks'
      |'Months'
      |'Years'

export type AIFilterOperation = 'And'
      |'Or'
      |'Not'
      |'LessThan'
      |'LessThanOrEqual'
      |'GreaterThan'
      |'GreaterThanOrEqual'
      |'Equals'
      |'NotEquals'
      |'Add'
      |'Subtract'
      |'Multiply'
      |'Divide'
      |'IsNull'
      |'IsNotNull'
      |'StartsWith'
      |'EndsWith'
      |'Contains'
      |'Concat'
      |'DoesNotContain'
      |'Between'
      |'In'

export type AISide = 'Left'
      |'Right'

export type AIValueType = 'Number'
      |'String'
      |'Boolean'
      |'Date'
      |'DateTime'
      |'Supplier'
      |'Currency'
      |'Varchar'
      |'Comparison'

export type AIManagedFieldType = 'Included'
      |'Excluded'

export type AIModelDefinitionApprovalType = 'RequireApproval'
      |'PreApproved'

export type AIModelDefinitionStatus = 'Enabled'
      |'Disabled'

export type AIModelType = 'RandomForest'
      |'LogisticRegression'
      |'LinearRegression'
      |'DecisionTree'
      |'DeepLearningIntent'
      |'DeepLearningNER'
      |'GlobalDeepLearningIntent'
      |'GlobalDeepLearningNER'
      |'GlobalLanguageDetection'
      |'BinaryClassification'
      |'GeneralizedLinearModels'
      |'GradientBoostedTrees'
      |'LinearSupportVectorClassifiers'
      |'MulticlassClassification'
      |'NaiveBayes'
      |'Regression'
      |'XGBoost'
      |'NeuralNet'
      |'PopularityCount'

export type AIPredictionStrategy = 'Maximize'
      |'Minimize'

export type AIPredictionDefinitionStatus = 'Enabled'
      |'Disabled'

export type AIPredictionType = 'ScoringSpecificOutcome'
      |'BinaryClassification'
      |'MulticlassClassification'
      |'Regression'
      |'LanguageDetection'
      |'DeepLearningIntentClassification'
      |'DeepLearningNameEntityRecognition'
      |'GlobalDeepLearningIntentClassification'
      |'GlobalDeepLearningNameEntityRecognition'

export type AIApplicationStatus = 'Draft'
      |'Migrated'
      |'Enabled'
      |'Disabled'

export type AIApplicationType = 'Platform'
      |'LeadScoring'
      |'ForecastingPredictive'
      |'CaseClassification'
      |'PredictionBuilder'
      |'Assistant'
      |'Bots'
      |'EPLite'
      |'Discovery'
      |'ReferralScoring'
      |'IntelligentOffers'
      |'CaseWrapUp'
      |'VoiceWrapUp'
      |'RecommendationBuilder'
      |'OpportunityScoring'
      |'SalesAILeadScoring'
      |'ServiceCaseWrapUp'
      |'ServiceCaseClassification'
      |'KeyAccountIdentification'
      |'OpportunityPushedOutInsight'
      |'InvoiceLatePaymentRiskCalculation'
      |'SalesAIOpportunityScoring'
      |'SalesAIForecastingPredictive'
      |'CallCaseWrapUp'
      |'SalesAIOpportunityForecasting'
      |'CustomizablePropensityScoring'
      |'GenerativeIntelligence'
      |'OmOrderRouting'

export type AIScoringMode = 'Batch'
      |'OnDemand'
      |'Streaming'

export type RecsOutputFieldName = 'Summary'
      |'Issue'
      |'Resolution'
      |'IndividualEmailSummary'
      |'CompleteEmailsSummary'

export type ConfigStatus = 'Enabled'
      |'Disabled'

export type AIModelApproval = 'Pending'
      |'Approved'
      |'Rejected'

export type AIModelMetricOperation = 'LessThan'
      |'Equals'
      |'NotEquals'
      |'GreaterThan'
      |'IsNull'
      |'IsNotNull'
      |'StartsWith'
      |'EndsWith'
      |'Contains'

export type AIIntensityType = 'Weight'
      |'Importance'
      |'Correlation'

export type AIModelFactorType = 'Basic'
      |'And'
      |'Or'

export type AIDataSetType = 'HoldOut'
      |'Training'
      |'Live'
      |'Model'
      |'Baseline'

export type AIModelGraphType = 'ConfidencePlot'
      |'LiftPlot'
      |'PrecisionGraph'
      |'RecallGraph'
      |'HitRateGraph'
      |'MeanReciprocalRankGraph'
      |'DiscountedCumulativeGainsGraph'
      |'NormalizedDiscountedCumulativeGainsGraph'
      |'KBasedRankingGraph'
      |'ConfusionMatrixPerThreshold'
      |'RegressionErrorBands'
      |'MultiClassMisclassifications'
      |'MultiClassConfusionMatrixPerThreshold'

export type AIMetricType = 'auROC'
      |'Accuracy'
      |'BalancedAccuracy'
      |'Precision'
      |'Recall'
      |'FMeasure'
      |'RootMeanSquaredError'
      |'MeanAbsoluteError'
      |'RSquared'
      |'auPR'
      |'PrecisionAtK'
      |'RecallAtK'
      |'HitRateAtK'
      |'F1Score'
      |'MeanPercentileRank'
      |'MeanAbsoluteRank'
      |'ExpectedTopPercentileRank'
      |'ExpectedTopAbsoluteRank'
      |'MeanReciprocalRankAtK'
      |'DiscountedCumulativeGainAtK'
      |'NormalizedDiscountedCumulativeGainsAtK'
      |'AveragePrecision'
      |'MeanAveragePrecisionAtK'
      |'MeanReciprocalRank'
      |'MeanTopReciprocalRank'
      |'LiftBucket'

export type AIScoringStatus = 'Enabled'
      |'Disabled'

export type AIScoringModelDefVersionMode = 'TRAIN'
      |'DEPLOY'
      |'TRAIN_AND_DEPLOY'

export type MappedFieldType = 'FEATURE'
      |'PREDICTION_SCORE'
      |'INSIGHT'
      |'SUGGESTION'
      |'SECONDARY_RESPONSE_RECORD_ID'
      |'RECOMMENDATION_RESPONSE_RECORD_ID'
      |'RECOMMENDATION'
      |'PREDICTION_SCORE_INPUT'

export type BatchInputSourceType = 'CRMA'
      |'Data_Cloud'

export type ExtractorType = 'APEX'
      |'JAVA'
      |'HYBRID'

export type FeatureInputType = 'Realtime_Input'
      |'Sample_Input'
      |'Batch_Input'
      |'Batch_And_Realtime_Input'

export type PredictionPlatform = 'Einstein_Discovery'
      |'Default'
      |'Data_Cloud'
      |'Einstein_on_Data_Cloud'

export type CreatorType = 'INTERNAL_USER'
      |'SALESFORCE_ADMIN'

export type RcmdSourceType = 'Next_Best_Action_Flow'
      |'None'

export type FormulaType = 'QUANTITY'
      |'REVENUE'

export type CalculationFrequency = 'Monthly'
      |'Quarterly'

export type ForecastFrequency = 'Monthly'
      |'Quarterly'

export type AccountingType = 'Revenue'
      |'Expense'

export type ExpectedCashFlowGrouping = 'GroupByFundAccount'
      |'GroupByFundAndDueDate'

export type PaidCashFlowGrouping = 'GroupBySummary'
      |'GroupByFundAccount'

export type PeriodTypes = 'Month'
      |'Quarter'
      |'Week'
      |'Year'

export type TeamMemberHierarchyType = 'ManagerHierarchy'
      |'ForecastsHierarchy'

export type ItemActionType = 'Omniscript'
      |'Aura'
      |'LWC'

export type ItemCategory = 'dbBased'
      |'fileBased'

export type ActionLinkType = 'API'
      |'APIAsync'
      |'Download'
      |'UI'

export type ActionLinkHttpMethod = 'HttpDelete'
      |'HttpHead'
      |'HttpGet'
      |'HttpPatch'
      |'HttpPost'
      |'HttpPut'

export type ActionLinkUserVisibility = 'Creator'
      |'Everyone'
      |'EveryoneButCreator'
      |'Manager'
      |'CustomUser'
      |'CustomExcludedUser'

export type PlatformActionGroupCategory = 'Primary'
      |'Overflow'

export type ActionLinkExecutionsAllowed = 'Once'
      |'OncePerUser'
      |'Unlimited'

export type ActionPlanTemplateType = 'Industries'
      |'Retail'
      |'Sales'
      |'Service'
      |'PrvdEngmtCompliance'

export type ActivationFlowType = 'SEGMENT'
      |'DMO'

export type ActivationPlatformConnectorType = 'S3'
      |'OAUTH'

export type ActivationPlatformFileOutputFormat = 'CSV'
      |'JSON'
      |'PARQUET'

export type ActivationPlatformFileOutputGrouping = 'PER_SEGMENT'
      |'PER_ACCOUNT'

export type ActivationPlatformPeriodicFullRefresh = 'REFRESH_30'
      |'REFRESH_60'

export type ActivationPlatformProcessingType = 'Batch'
      |'Streaming'

export type ActivationPlatformType = 'Advertising'
      |'Publishing'
      |'Analytics'
      |'Marketing'
      |'Technology'

export type ActivationPlatformRefreshFrequency = 'FOUR'
      |'TWELVE'
      |'TWENTY_FOUR'

export type ActivationPlatformRefreshMode = 'FULL'
      |'INCREMENTAL'

export type ActivationPlatformFieldDataType = 'Text'
      |'Number'

export type ActionableListKPIAggType = 'SUM'
      |'COUNT'
      |'MIN'
      |'MAX'
      |'AVG'

export type ActionableListKPIStType = 'ACTIVE'
      |'INACTIVE'

export type ActivationPlatformIdentifierHashMethod = 'SHA1'
      |'SHA256'
      |'MD5'
      |'NONE'

export type ActivationPlatformIdentifierType = 'EMAIL'
      |'PHONE'
      |'OTT'
      |'MAID'

export type OAuthProviderType = 'GOOGLE'
      |'FACEBOOK'
      |'AMAZON'
      |'LINKEDIN'
      |'SNAPCHAT'
      |'DV360'
      |'META_CAPI'

export type DefaultLicenseStatus = 'Active'
      |'Trial'
      |'Free'

export type AdvAcctFcstCalcFrequency = 'Monthly'
      |'Quarterly'
      |'Yearly'
      |'Weekly'

export type AdvAcctFrcstDisplayGroupType = 'MEASURE'

export type AdvAcctFcstFormulaType = 'QUANTITY'
      |'REVENUE'

export type AdvAcctFcstAggregationType = 'SUM'
      |'MINIMUM'
      |'MAXIMUM'
      |'AVERAGE'

export type AdvAcctFcstComputationMethod = 'DATA_PROCESSING_ENGINE_DEFINITION'
      |'CUSTOM'
      |'FORMULA'

export type AdvAcctFcstMeasureType = 'QUANTITY'
      |'REVENUE'

export type AdvAccForecastSetStatus = 'Active'
      |'Inactive'

export type ForecastPeriodGroupStatus = 'Active'
      |'Inactive'

export type FieldMappingClient = 'PriceSheetPricing'
      |'CustomFieldMappingPricing'

export type AffinityScoreType = 'RFM'
      |'CAP'

export type ReportSummaryType = 'Sum'
      |'Average'
      |'Maximum'
      |'Minimum'
      |'Unique'
      |'Median'
      |'Noop'
      |'None'

export type ReportJobSourceTypes = 'tabular'
      |'summary'
      |'snapshot'

export type AnalyticsWidgetType = 'visualization'
      |'text'
      |'filter'
      |'parameter'
      |'button'
      |'metric'
      |'container'

export type AnalyticsActionType = 'recordaction'
      |'flow'
      |'navigate'

export type AnalyticsActionEventType = 'click'
      |'select'

export type ApplicationObjectName = 'BusinessLicenseApplication'
      |'IndividualApplication'

export type ApplicationUsageType = 'LPI'
      |'ERM'
      |'HC'
      |'EDU'
      |'BA'
      |'CCM'
      |'Grantmaking'

export type AppDomainUsageType = 'ExplainabilityService'

export type PolicyApplicableDuration = 'ParameterBased'
      |'Monthly'
      |'Weekly'

export type AssignmentPolicyType = 'loadBalancing'

export type UtilizationFactor = 'TotalAppointmentDuration'
      |'NumberOfAppointments'

export type ProcessSubmitterType = 'group'
      |'role'
      |'user'
      |'roleSubordinates'
      |'roleSubordinatesInternal'
      |'owner'
      |'creator'
      |'accountOwner'
      |'ownerDelegate'
      |'creatorDelegate'
      |'accountOwnerDelegate'
      |'partnerUser'
      |'customerPortalUser'
      |'portalRole'
      |'portalRoleSubordinates'
      |'allInternalUsers'

export type WorkflowActionType = 'FieldUpdate'
      |'KnowledgePublish'
      |'Task'
      |'Alert'
      |'Send'
      |'OutboundMessage'
      |'FlowAction'
      |'FlowAutomation'

export type NextOwnerType = 'adhoc'
      |'user'
      |'userHierarchyField'
      |'relatedUserField'
      |'queue'
      |'apexMethod'
      |'PreviousApprover'
      |'none'

export type RoutingType = 'Unanimous'
      |'FirstResponse'

export type FilterOperation = 'equals'
      |'notEqual'
      |'lessThan'
      |'greaterThan'
      |'lessOrEqual'
      |'greaterOrEqual'
      |'contains'
      |'notContain'
      |'startsWith'
      |'includes'
      |'excludes'
      |'within'

export type StepCriteriaNotMetType = 'ApproveRecord'
      |'RejectRecord'
      |'GotoNextStep'

export type StepRejectBehaviorType = 'RejectRequest'
      |'BackToPrevious'

export type RuleExprObjTargetType = 'Plugin'
      |'PluginFunction'
      |'Function'

export type ExpressionCondition = 'AND'
      |'OR'
      |'CUSTOM'

export type RecordEditabilityType = 'AdminOnly'
      |'AdminOrCurrentApprover'

export type AssignToLookupValueType = 'User'
      |'Queue'

export type BusinessHoursSourceType = 'None'
      |'Case'
      |'Static'

export type EscalationStartTimeType = 'CaseCreation'
      |'CaseLastModified'

export type AssistantDefinitionStatus = 'DISABLED'
      |'ENABLED'

export type AssistantSkillSobjectActionType = 'CREATE'
      |'UPDATE'
      |'READ'

export type AssistantSkillType = 'AGENDA'
      |'SOBJECT'

export type AudienceCriterionOperator = 'Equal'
      |'NotEqual'
      |'GreaterThan'
      |'GreaterThanOrEqual'
      |'LessThan'
      |'LessThanOrEqual'
      |'Contains'
      |'StartsWith'
      |'Includes'
      |'NotIncludes'

export type AudienceCriterionType = 'Default'
      |'Profile'
      |'FieldBased'
      |'GeoLocation'
      |'Domain'
      |'Permission'
      |'Audience'

export type FormulaFilterType = 'AllCriteriaMatch'
      |'AnyCriterionMatches'
      |'CustomLogicMatches'

export type AuraBundleType = 'Application'
      |'Component'
      |'Event'
      |'Interface'
      |'Tokens'

export type MuleSoftControlPlane = 'None'
      |'US'
      |'EU'

export type AuthProviderType = 'Facebook'
      |'Janrain'
      |'Salesforce'
      |'OpenIdConnect'
      |'MicrosoftACS'
      |'LinkedIn'
      |'Twitter'
      |'Google'
      |'GitHub'
      |'Custom'
      |'Apple'
      |'Evergreen'
      |'Slack'
      |'HubSpot'
      |'Microsoft'
      |'MuleSoft'
      |'Bitbucket'

export type BatchCalcJobCSVDelimiter = 'COMMA'
      |'BACKQUOTE'
      |'CARET'
      |'PIPE'
      |'SEMICOLON'
      |'TAB'

export type BatchCalcJobDataType = 'Text'
      |'Numeric'
      |'Date'
      |'DateTime'
      |'MultiValue'

export type BatchCalcJobFileSource = 'ContentManagement'

export type BatchCalcJobDatasourceType = 'StandardObject'
      |'Analytics'
      |'DataModelObject'
      |'CalculatedInsightsObject'
      |'CRMObject'
      |'CSV'
      |'DataLakeObject'

export type BatchCalcJobFilterOperator = 'Equals'
      |'NotEquals'
      |'GreaterThan'
      |'GreaterThanOrEquals'
      |'LessThan'
      |'LessThanOrEquals'
      |'StartsWith'
      |'EndsWith'
      |'Contains'
      |'DoesNotContain'
      |'IsNull'
      |'IsNotNull'
      |'In'
      |'NotIn'

export type BatchCalcJobFrcstAccuracy = 'None'
      |'Eighty'
      |'NinetyFive'

export type BatchCalcJobAggregateFunction = 'Unique'
      |'Sum'
      |'Max'
      |'Min'
      |'Avg'
      |'Std'
      |'StdP'
      |'Var'
      |'VarP'
      |'Count'

export type BatchCalcJobFrcstModel = 'Additive'
      |'Multiplicative'
      |'Auto'

export type BatchCalcJobFrcstPeriodType = 'Year'
      |'YearQuarter'
      |'YearMonth'
      |'YearWeek'
      |'YearMonthDay'
      |'FiscalYear'
      |'FiscalYearQuarter'
      |'FiscalYearMonth'
      |'FiscalYearWeek'

export type BatchCalcJobFrcstSeasonality = 'Auto'
      |'None'
      |'Two'
      |'Three'
      |'Four'
      |'Five'
      |'Six'
      |'Seven'
      |'Eight'
      |'Nine'
      |'Ten'
      |'Eleven'
      |'Twelve'
      |'Thirteen'
      |'Fourteen'
      |'Fifteen'
      |'Sixteen'
      |'Seventeen'
      |'Eighteen'
      |'Nineteen'
      |'Twenty'
      |'TwentyOne'
      |'TwentyTwo'
      |'TwentyThree'
      |'TwentyFour'

export type BatchCalcJobParameterDataType = 'Text'
      |'Numeric'
      |'Date'
      |'DateTime'
      |'Filter'
      |'Expression'
      |'FileIdentifier'

export type BatchCalcJobSourceJoinType = 'LeftOuter'
      |'RightOuter'
      |'Inner'
      |'Outer'

export type BatchCalcJobOrderType = 'Ascending'
      |'Descending'

export type BatchCalcJobTransformType = 'Expression'
      |'Slice'
      |'ComputeRelative'

export type BatchCalcJobWritebackOpn = 'Insert'
      |'Update'
      |'Upsert'
      |'Delete'
      |'Overwrite'

export type BatchCalcJobWritebackType = 'sObject'
      |'Analytics'
      |'DataLakeObject'
      |'DataModelObject'
      |'CalculatedInsights'

export type BatchCalcJobDefRunMode = 'Batch'
      |'OnDemand'

export type ExecutionPlatformType = 'CRMA'
      |'CDP'
      |'CORE'

export type BatchCalcProcessType = 'DataProcessingEngine'
      |'Rebates'
      |'FSCHierarchyRollUp'
      |'Loyalty'
      |'AdvancedAccountForecast'
      |'LoyaltyPartnerManagement'
      |'LoyaltyPointsAggregation'
      |'NetZero'
      |'ProgramBasedBusiness'
      |'ProviderSearch'
      |'AccountingSubledger'
      |'ActionableList'
      |'DecisionMatrixDataUpload'
      |'ProgramManagementRollups'
      |'NetZeroHidden'
      |'CriteriaBsdSearchAndFilter'
      |'RecordAggregation'
      |'Education'
      |'CDPEnrichment'
      |'CdpActionableList'
      |'CSVCoreUpload'
      |'BenefitManagement'
      |'BillingSchedulesforInvoiceGeneration'
      |'Recruitment'
      |'NextGenForecasting'
      |'InvoiceGeneration'
      |'AccountingPeriodClosure'
      |'PnmRosterFileUpload'
      |'FinancialSummaryRollup'
      |'PriceProtection'
      |'Decisiontable'
      |'UsageManagement'
      |'TestProcessType'
      |'ProductCatalogManagement'
      |'ChannelInventoryManagement'
      |'SalesAgreement'
      |'LegalEntityAccountingPeriodClosureAdvanced'
      |'LifeSciencesCommercialTerritoryAlignment'
      |'RevenueTransactionManagement'
      |'FundraisingRollups'
      |'EmployeeService'

export type BatchJobDefinitionStatus = 'Active'
      |'Inactive'

export type BenefitActionDataType = 'String'
      |'Date'
      |'DateTime'
      |'Boolean'
      |'Picklist'
      |'EntityPicklist'
      |'Number'

export type BuildingEnergyIntensityType = 'BuildingEnergyIntensity'
      |'RegionalBuildingEnergyIntensity'

export type GenAiAgentType = 'Employee'
      |'EinsteinSDR'
      |'SalesEinsteinCoach'
      |'Setup'
      |'EinsteinServiceAgent'
      |'Analytics'
      |'BankingServiceAgent'
      |'ServicePlanner'
      |'BuyerAgent'

export type Language = 'en_US'
      |'de'
      |'es'
      |'fr'
      |'it'
      |'ja'
      |'sv'
      |'ko'
      |'zh_TW'
      |'zh_CN'
      |'pt_BR'
      |'nl_NL'
      |'da'
      |'th'
      |'fi'
      |'ru'
      |'es_MX'
      |'no'
      |'hu'
      |'pl'
      |'cs'
      |'tr'
      |'in'
      |'ro'
      |'vi'
      |'uk'
      |'iw'
      |'el'
      |'bg'
      |'en_GB'
      |'ar'
      |'sk'
      |'pt_PT'
      |'hr'
      |'sl'
      |'fr_CA'
      |'ka'
      |'sr'
      |'sh'
      |'en_AU'
      |'en_MY'
      |'en_IN'
      |'en_PH'
      |'en_CA'
      |'ro_MD'
      |'bs'
      |'mk'
      |'lv'
      |'lt'
      |'et'
      |'sq'
      |'sh_ME'
      |'mt'
      |'ga'
      |'eu'
      |'cy'
      |'is'
      |'cac'
      |'quc'
      |'cak'
      |'ms'
      |'tl'
      |'lb'
      |'rm'
      |'hy'
      |'hi'
      |'ur'
      |'bn'
      |'de_AT'
      |'de_CH'
      |'ta'
      |'ar_DZ'
      |'ar_BH'
      |'ar_EG'
      |'ar_IQ'
      |'ar_JO'
      |'ar_KW'
      |'ar_LB'
      |'ar_LY'
      |'ar_MA'
      |'ar_OM'
      |'ar_QA'
      |'ar_SA'
      |'ar_SD'
      |'ar_SY'
      |'ar_TN'
      |'ar_AE'
      |'ar_YE'
      |'zh_SG'
      |'zh_HK'
      |'en_HK'
      |'en_IE'
      |'en_SG'
      |'en_ZA'
      |'fr_BE'
      |'fr_LU'
      |'fr_CH'
      |'de_BE'
      |'de_LU'
      |'it_CH'
      |'nl_BE'
      |'es_AR'
      |'es_BO'
      |'es_CL'
      |'es_CO'
      |'es_CR'
      |'es_DO'
      |'es_EC'
      |'es_SV'
      |'es_GT'
      |'es_HN'
      |'es_NI'
      |'es_PA'
      |'es_PY'
      |'es_PE'
      |'es_PR'
      |'es_US'
      |'es_UY'
      |'es_VE'
      |'ca'
      |'af'
      |'sw'
      |'zu'
      |'xh'
      |'te'
      |'ml'
      |'kn'
      |'mr'
      |'gu'
      |'pa'
      |'en_NZ'
      |'mi'
      |'my'
      |'fa'
      |'km'
      |'am'
      |'kk'
      |'ht'
      |'sm'
      |'haw'
      |'zh_MY'
      |'ru_LT'
      |'ru_PL'
      |'ru_AM'
      |'ru_KZ'
      |'ru_KG'
      |'ru_BY'
      |'ru_MD'
      |'ru_UA'
      |'en_AE'
      |'en_BE'
      |'en_CY'
      |'en_DE'
      |'en_IL'
      |'en_IT'
      |'en_NL'
      |'en_MT'
      |'en_ES'
      |'en_PL'
      |'en_DK'
      |'en_SE'
      |'en_NO'
      |'en_FR'
      |'en_HU'
      |'en_CZ'
      |'en_SK'
      |'en_RO'
      |'en_CH'
      |'en_AL'
      |'en_AD'
      |'en_AG'
      |'en_AT'
      |'en_BS'
      |'en_BB'
      |'en_BZ'
      |'en_BA'
      |'en_BG'
      |'en_HR'
      |'en_DM'
      |'en_EE'
      |'en_FI'
      |'en_GI'
      |'en_GR'
      |'en_GD'
      |'en_GY'
      |'en_IS'
      |'en_JM'
      |'en_JP'
      |'en_LV'
      |'en_LI'
      |'en_LT'
      |'en_LU'
      |'en_MC'
      |'en_ME'
      |'en_MK'
      |'en_PT'
      |'en_RS'
      |'en_SI'
      |'en_KR'
      |'en_KN'
      |'en_LC'
      |'en_VC'
      |'en_TW'
      |'en_TH'
      |'en_TT'
      |'en_TR'
      |'nl_SR'
      |'fr_HT'
      |'de_LI'
      |'es_AD'
      |'sv_FI'
      |'el_CY'
      |'fr_MA'
      |'kl'
      |'ji'
      |'hmn'
      |'eo'
      |'iw_EO'

export type MlSlotClassDataType = 'Text'
      |'Number'
      |'Boolean'
      |'Date'
      |'DateTime'
      |'Currency'

export type MlSlotClassExtractionType = 'Pattern'
      |'Value'

export type ConversationInvocableTargetType = 'apex'
      |'flow'
      |'standardInvocableAction'
      |'logFeedback'
      |'externalService'
      |'logGoalAchieved'
      |'logDisambiguation'
      |'quickAction'
      |'api'
      |'botAction'

export type BotInvocationMappingType = 'Input'
      |'Output'
      |'Error'

export type ConversationVariableType = 'ConversationVariable'
      |'ContextVariable'
      |'PageContextVariable'

export type BotNavigationType = 'Call'
      |'Redirect'
      |'TransferToAgent'
      |'EndChat'

export type BotStepConditionOperatorType = 'Equals'
      |'NotEquals'
      |'IsSet'
      |'IsNotSet'
      |'GreaterThan'
      |'LessThan'
      |'GreaterThanOrEqualTo'
      |'LessThanOrEqualTo'

export type ConversationVariableOperandSourceType = 'StandardConversationVariable'
      |'ConversationVariable'
      |'ContextVariable'
      |'MlSlotClass'
      |'StandardMlSlotClass'
      |'Value'
      |'BotDefinition'
      |'Queue'
      |'FlowDefinition'

export type ConversationMessageExecutionType = 'Sync'
      |'Async'

export type BotQuickReplyType = 'Static'
      |'Dynamic'

export type BotWidgetType = 'Menu'
      |'Buttons'

export type BotVariableOperationType = 'Set'
      |'Unset'
      |'Collect'
      |'SetConversationLanguage'
      |'CollectAttachment'

export type ConversationDefinitionLogicalOperatorType = 'And'
      |'Or'

export type SortOrder = 'Asc'
      |'Desc'

export type ConversationMappingType = 'Input'
      |'Output'

export type ConversationSystemMessageParamType = 'Transfer'

export type ConversationSystemMessageType = 'Transfer'
      |'EndChat'

export type BotStepType = 'Navigation'
      |'Invocation'
      |'VariableOperation'
      |'Message'
      |'Wait'
      |'Group'
      |'SystemMessage'
      |'RecordLookup'
      |'RichMessage'
      |'GoalStep'

export type ConversationSystemDialogType = 'TransferFailed'
      |'ErrorHandling'
      |'KnowledgeFallback'
      |'Disambiguation'
      |'DisambiguationFailed'
      |'KnowledgeAction'

export type ConversationVariableCollectionType = 'List'

export type ConversationDataType = 'Text'
      |'Number'
      |'Boolean'
      |'Object'
      |'Date'
      |'DateTime'
      |'Currency'
      |'Id'

export type ConversationVariableVisibilityType = 'Internal'
      |'External'

export type ConversationDefinitionNlpProviderType = 'EinsteinAi'
      |'Apex'

export type GenAiBotToneType = 'Casual'
      |'Neutral'
      |'Formal'

export type MessageType = 'Text'
      |'Facebook'
      |'Line'
      |'GoogleHome'
      |'Alexa'
      |'Omega'
      |'AppleBusinessChat'
      |'WeChat'
      |'WebChat'
      |'WhatsApp'
      |'Phone'
      |'EmbeddedMessaging'
      |'Voice'
      |'Custom'
      |'InternalCopilot'

export type BotType = 'Bot'
      |'InternalCopilot'
      |'ExternalCopilot'

export type ConvDefBlockVersionStatus = 'Published'

export type BriefcaseFilterOperator = 'e'
      |'n'
      |'l'
      |'g'
      |'m'
      |'h'
      |'s'
      |'d'

export type FilterScope = 'Everything'
      |'Mine'
      |'Queue'
      |'Delegated'
      |'MyTerritory'
      |'MyTeamTerritory'
      |'Team'
      |'SalesTeam'
      |'AssignedToMe'
      |'MineAndMyGroups'
      |'ScopingRule'

export type BriefcaseRuleRelationshipType = 'ParentToChild'
      |'ChildToParent'

export type BriefcaseType = 'Standard'
      |'HighVolume'

export type ForecastCategories = 'Omitted'
      |'Pipeline'
      |'BestCase'
      |'MostLikely'
      |'Forecast'
      |'Closed'

export type ExpFeedbackCollType = 'SURVEY'
      |'PHONE_CALL'

export type SurveyQuestionType = 'MultiChoice'
      |'RadioButton'
      |'FreeText'
      |'Date'
      |'Rating'
      |'CSAT'
      |'Slider'
      |'Picklist'
      |'NPS'
      |'StackRank'
      |'Currency'
      |'Number'
      |'DateTime'
      |'Toggle'
      |'MultiSelectPicklist'
      |'Image'
      |'Boolean'
      |'ShortText'
      |'Attachment'
      |'Matrix'

export type CMSSourceConnectionType = 'Public'
      |'Authenticated'

export type CMSConnectionStatus = 'ACTIVE'
      |'INACTIVE'

export type CMSConnectionSourceType = 'AEM'
      |'Drupal'
      |'WordPress'
      |'SDL'
      |'Sitecore'
      |'Other'

export type FeedItemDisplayFormat = 'Default'
      |'HideBlankLines'

export type FeedItemType = 'TrackedChange'
      |'UserStatus'
      |'TextPost'
      |'AdvancedTextPost'
      |'LinkPost'
      |'ContentPost'
      |'DashboardComponentAlert'
      |'PollPost'
      |'RypplePost'
      |'ProfileSkillPost'
      |'DashboardComponentSnapshot'
      |'TestItem'
      |'ApprovalPost'
      |'CaseCommentPost'
      |'ReplyPost'
      |'EmailMessageEvent'
      |'CallLogPost'
      |'ChangeStatusPost'
      |'AttachArticleEvent'
      |'MilestoneEvent'
      |'ActivityEvent'
      |'ChatTranscriptPost'
      |'CollaborationGroupCreated'
      |'AttachExternalDocumentEvent'
      |'CollaborationGroupUnarchived'
      |'SocialPost'
      |'QuestionPost'
      |'Undefined'
      |'FacebookPost'
      |'BasicTemplateFeedItem'
      |'CreateRecordEvent'
      |'CanvasPost'
      |'AnnouncementPost'

export type EmailToCaseOnFailureActionType = 'Bounce'
      |'Discard'
      |'Requeue'

export type EmailToCaseRoutingAddressType = 'EmailToCase'
      |'Outlook'
      |'GmailOAuth'
      |'E2cEasy'

export type CaseSubjectParticleType = 'ProvidedString'
      |'Source'
      |'MessageType'
      |'SocialHandle'
      |'SocialNetwork'
      |'Sentiment'
      |'RealName'
      |'Content'
      |'PipeSeparator'
      |'ColonSeparator'
      |'HyphenSeparator'

export type ActionForNoRecordFound = 'CreateNewRecordAndLink'
      |'PromptAgent'

export type ActionForSingleRecordFound = 'AutoLink'
      |'PromptAgent'

export type ChannelType = 'FacebookMessenger'
      |'Text'
      |'WeChat'
      |'WhatsApp'
      |'Phone'

export type ObjectToLink = 'Contact'

export type ChatterExtensionType = 'Lightning'

export type EmbeddedServiceFeature = 'NotInUse'
      |'Base'
      |'LiveAgent'
      |'FieldService'
      |'Flows'
      |'ChannelMenu'
      |'EmbeddedMessaging'

export type EmbeddedServiceLabelKey = 'LA_Container_Base_Close'
      |'LA_Container_Base_Minimize'
      |'LA_Container_Base_EndOfDialog'
      |'LA_Container_Base_MinimizedContainerAssistiveText'
      |'LA_Chat_Body_ChatWindowAgent'
      |'LA_Chat_Body_InputTextPlaceholder'
      |'LA_Chat_Body_AgentTypingUpdate'
      |'LA_Chat_Body_Send'
      |'LA_Chat_Body_ChatStartTime'
      |'LA_Chat_Body_MessageAreaTransferred'
      |'LA_Chat_Body_FileTransferCanceled'
      |'LA_Chat_Body_FileTransferSuccess'
      |'LA_Chat_Body_FileTransferFailure'
      |'LA_Chat_Body_FileTransferRequested'
      |'LA_Chat_Body_TransferFailed'
      |'LA_Chat_ExtendedHeader_ShowExtendedHeader'
      |'LA_Chat_ExtendedHeader_HideExtendedHeader'
      |'LA_Chat_ExtendedHeader_ChatStateHeaderGreeting'
      |'LA_Chat_ExtendedHeader_SaveTranscript'
      |'LA_Chat_ExtendedHeader_EndChatAction'
      |'LA_Chat_FileTransfer_FileUpload'
      |'LA_Chat_FileTransfer_UploadFile'
      |'LA_Chat_FileTransfer_SelectNewFile'
      |'LA_Chat_FileTransfer_UsePreviousElementToUploadFile'
      |'LA_Chat_FileTransfer_RemoveFile'
      |'LA_Chat_Minimized_MessageNotification'
      |'LA_Chat_Minimized_SingleMessageNotification'
      |'LA_Chat_Minimized_AgentSaysNotification'
      |'LA_Chat_Minimized_IdleTimeoutMinimizedWarning'
      |'LA_Chat_Minimized_IdleTimeoutMinimizedEndChat'
      |'LA_Chat_Ended_ChatEnd'
      |'LA_Chat_Ended_ChatEndAgent'
      |'LA_Chat_Ended_ChatEndConnection'
      |'LA_Chat_Ended_ChatButtonClose'
      |'LA_Chat_Ended_PostChatButton'
      |'LA_Chat_Ended_IdleTimeoutEndChatMessage'
      |'LA_Chat_Reconnecting_ReconnectingChasitorIssue'
      |'LA_Chat_Reconnecting_ReconnectingMinimizedMessage'
      |'LA_Chat_Timeout_IdleTimeoutWarningQuestion'
      |'LA_Chat_AgentTransfer_BannerInProgressTransfer'
      |'LA_Chat_AgentTransfer_MinimizedInProgressTransfer'
      |'LA_Chat_AgentTransfer_BannerTransferred'
      |'LA_Chat_AgentTransfer_BannerReconnected'
      |'LA_Chat_CloseConfirmation_ChatStateHeader'
      |'LA_Chat_CloseConfirmation_ChatStateBody'
      |'LA_Chat_CloseConfirmation_ChatStateResume'
      |'LA_Chat_CloseConfirmation_ChatStateEnd'
      |'LA_Chat_UnseenMessage_UnseenMessage'
      |'LA_Chat_UnseenMessage_SingleUnseenMessage'
      |'LA_OfflineSupport_SupportForm_HeaderText'
      |'LA_OfflineSupport_Error_ErrorDialogTitle'
      |'LA_OfflineSupport_Error_ErrorDialogBody'
      |'LA_OfflineSupport_Error_ErrorDialogButton'
      |'LA_OfflineSupport_SupportForm_SupportFormTitle'
      |'LA_OfflineSupport_SupportForm_SupportFormSubtitle'
      |'LA_OfflineSupport_SupportForm_SupportFormButton'
      |'LA_OfflineSupport_SupportForm_BannerAltText'
      |'LA_OfflineSupport_CloseConfirmation_ConfirmationDialogTitle'
      |'LA_OfflineSupport_CloseConfirmation_ConfirmationDialogBody'
      |'LA_OfflineSupport_CloseConfirmation_ConfirmationDialogButton'
      |'LA_OfflineSupport_Minimized_ConfirmationMinimizedText'
      |'LA_OfflineSupport_Minimized_ErrorMinimizedText'
      |'LA_PostChat_Base_PostChat'
      |'LA_PreChat_Base_LiveChat'
      |'LA_PreChat_Base_Instructions'
      |'LA_PreChat_Base_BannerAltText'
      |'LA_PreChat_Base_PrechatAssistiveText'
      |'LA_PreChat_Base_StartChat'
      |'LA_PreChat_Base_FieldError'
      |'LA_Waiting_WithoutQueuePos_WaitingGreeting'
      |'LA_Waiting_WithoutQueuePos_WaitingDefaultName'
      |'LA_Waiting_WithoutQueuePos_WaitingMessage'
      |'LA_Waiting_WithoutQueuePos_WaitingCancelChatRequest'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosMessageFirstLine'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosMessageSecondLine'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosZeroMessage'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosConnectingMessage'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosMaxNumber'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosMaxMessageFirstLine'
      |'LA_Waiting_WithQueuePos_WaitingQueuePosMaxMessageSecondLine'
      |'LA_Waiting_Minimized_MinimizedWaitingMessage'
      |'LA_Waiting_Minimized_MinimizedQueuePosMessage'
      |'LA_Waiting_Minimized_MinimizedQueuePosZeroMessage'
      |'LA_Waiting_Minimized_MinimizedQueuePosAssistiveMessage'
      |'LA_Waiting_Minimized_MinimizedQueuePosZeroAssistiveMessage'
      |'LA_Waiting_Error_ErrorNoAgentTitle'
      |'LA_Waiting_Error_ErrorNoAgentHeader'
      |'LA_Waiting_Error_ErrorNoAgentBodyApology'
      |'LA_Waiting_Error_ErrorBlockedTitleAndHeader'
      |'LA_Waiting_Error_ErrorBlockedBody'
      |'LA_Waiting_Error_ErrorBlockedCloseButton'
      |'LA_Waiting_Error_ErrorNoConnectionTitle'
      |'LA_Waiting_Error_ErrorNoConnectionHeader'
      |'LA_Waiting_Error_ErrorNoConnectionBodyApology'
      |'LA_Waiting_Error_ErrorTryAgainButton'
      |'LA_Waiting_Error_ErrorExitChatButton'
      |'LA_Waiting_CloseConfirmation_WaitingStateHeader'
      |'LA_Waiting_CloseConfirmation_WaitingStateBodyApology'
      |'LA_Waiting_CloseConfirmation_WaitingStateLeave'
      |'LA_Waiting_CloseConfirmation_WaitingStateContinue'
      |'LA_Chat_Timeout_IdleTimeoutWarningRequest'
      |'LA_Waiting_Error_ErrorNoAgentBodyRequest'
      |'LA_Waiting_Error_ErrorNoConnectionBodyRequest'
      |'LA_Waiting_CloseConfirmation_WaitingStateBodyWarning'
      |'LA_General_CloseSessionWarningTitle'
      |'LA_General_CloseSessionWarningBody'
      |'LA_General_CloseSessionWarningButton'
      |'LA_Chat_Body_ChooseOption'
      |'LA_Waiting_Base_BannerAssistiveText'
      |'LA_Chat_Group_Chat_HeaderTitle'
      |'LA_Chat_Group_Chat_ExtendedHeaderGreeting'
      |'LA_Chat_Group_Chat_AgentJoinedChat'
      |'LA_Chat_Group_Chat_AgentLeftChat'
      |'LA_Chat_Group_Chat_MinimizedStateMessage'
      |'LA_Chat_WithQueuePos_QueuePosTransferringMessage'
      |'LA_Chat_Ended_ChatEndChatbot'
      |'LA_Chat_Body_InputTextAssistiveText'
      |'LA_Waiting_Header_Text'
      |'LA_PreChat_Terms_And_Conditions'
      |'LA_PreChat_Base_Terms_And_Conditions_Acknowledgement'
      |'FS_Container_Base_Back'
      |'FS_Container_AuthenticationFailure_Title'
      |'FS_Container_AuthenticationFailure_Body'
      |'FS_Container_AuthenticationFailure_Button'
      |'FS_AppointmentDetail_Error_AccessDenied'
      |'FS_AppointmentDetail_Error_NoAppointmentFound'
      |'FS_AppointmentDetail_Error_ButtonOK'
      |'FS_AppointmentList_Base_ActiveAppointmentTab'
      |'FS_AppointmentList_Base_ClosedAppointmentTab'
      |'FS_AppointmentList_Base_Header'
      |'FS_AppointmentList_Base_NewAppointmentButtonLabel'
      |'FS_AppointmentList_Error_GenericErrorStatement'
      |'FS_AppointmentList_Empty_NoAppointmentsTitleUpcomingTab'
      |'FS_AppointmentList_Empty_NoAppointmentsDescriptionUpcomingTab'
      |'FS_AppointmentList_Empty_NoAppointmentsTitlePastTab'
      |'FS_AppointmentList_Empty_NoAppointmentsDescriptionPastTab'
      |'FS_Confirmation_Base_Scheduled'
      |'FS_Confirmation_Base_Assigned'
      |'FS_Confirmation_Base_Arriving'
      |'FS_Confirmation_Base_InProgress'
      |'FS_Confirmation_Base_Dispatched'
      |'FS_Confirmation_Base_Completed'
      |'FS_Confirmation_Base_HeaderText'
      |'FS_Confirmation_Base_AddCalendar'
      |'FS_Confirmation_Base_ViewAppointment'
      |'FS_Flows_Error_Title'
      |'FS_Flows_Error_Body'
      |'FS_Flows_Error_ConfirmButton'
      |'FS_Flows_Error_CancelOrModifyError'
      |'FS_Flows_NewAppointmentCloseConfirmation_Title'
      |'FS_Flows_NewAppointmentCloseConfirmation_Body'
      |'FS_Flows_NewAppointmentCloseConfirmation_ButtonClose'
      |'FS_Flows_NewAppointmentCloseConfirmation_ButtonCancel'
      |'FS_Flows_CancelAppointmentCloseConfirmation_Title'
      |'FS_Flows_CancelAppointmentCloseConfirmation_Body'
      |'FS_Flows_CancelAppointmentCloseConfirmation_ButtonClose'
      |'FS_Flows_CancelAppointmentCloseConfirmation_ButtonCancel'
      |'FS_Flows_CancelAppointmentCloseConfirmation_Footer'
      |'FS_Flows_ModifyAppointmentCloseConfirmation_Title'
      |'FS_Flows_ModifyAppointmentCloseConfirmation_Body'
      |'FS_Flows_ModifyAppointmentCloseConfirmation_ButtonClose'
      |'FS_Flows_ModifyAppointmentCloseConfirmation_ButtonCancel'
      |'FS_Flows_ModifyAppointmentCloseConfirmation_Footer'
      |'FS_Scheduling_Base_HeaderText'
      |'FS_Scheduling_Base_RecommendedTab'
      |'FS_Scheduling_Base_ByDateTab'
      |'FS_Scheduling_Base_PreviousWeekAssistiveText'
      |'FS_Scheduling_Base_NextWeekAssistiveText'
      |'FS_Scheduling_Base_DatePickerAssistiveText'
      |'FS_Scheduling_Error_UnexpectedError'
      |'FS_Scheduling_Error_NoAvailableTimeslotsError'
      |'FS_Scheduling_Error_NoAvailableTimeslotsByDateError'
      |'FS_Welcome_Base_GreetingTitle'
      |'FS_Welcome_Base_NewAppointmentButton'
      |'FS_Welcome_Base_ExistingAppointmentsButton'
      |'FS_Confirmation_Base_DoneButton'
      |'FS_AppointmentList_Error_GenericErrorRequest'
      |'FS_AppointmentHome_Base_CancelAppointmentButton'
      |'FS_AppointmentHome_Base_ModifyAppointmentButton'
      |'FS_AppointmentHome_Base_ErrorTitle'
      |'FS_Scheduling_Base_TimePickerAssistiveText'
      |'FS_ResourceDetail_Base_Header'
      |'FS_AppointmentHome_Base_DefaultCardHeaderText'
      |'FS_Error_Dialog_Title'
      |'FS_Error_Dialog_Body'
      |'FS_Error_Dialog_Confirm_Button'
      |'CM_Container_Header_Primary_Greeting'
      |'CM_Container_Header_Secondary_Greeting'
      |'CM_Container_MenuItems_WebChatAvailable'
      |'CM_Container_MenuItems_WebChatUnavailable'
      |'CM_Container_MenuItems_WebChatLoading'
      |'CM_Container_MenuItems_ChannelLabel'
      |'CM_Container_Button_AssistiveText'
      |'CM_Container_MenuItems_AssistiveText'
      |'CM_Container_MenuItems_WebLinkNewTabAssistiveText'
      |'CM_Container_MenuItems_EmbeddedMessagingChatLoading'
      |'EM_Container_Base_DefaultHeaderText'
      |'EM_Container_Base_Minimize'
      |'EM_Container_Base_Close'
      |'EM_Container_Base_CloseConversation'
      |'EM_Container_Base_DefaultMinimizedText'
      |'EM_Container_Base_MinimizedButtonAssistiveText'
      |'EM_Container_Base_MinimizedNotifDismissButtonAssistiveText'
      |'EM_Container_Base_HeaderGreetingAnnouncement'
      |'EM_Container_Base_NinePlusUnseenMessageCount'
      |'EM_Container_Base_ZeroUnseenMessagesAssistiveText'
      |'EM_Container_Base_UnseenMessagesAssistiveText'
      |'EM_Container_Base_NinePlusUnseenMessagesAssistiveText'
      |'EM_Container_Base_InputFooterTextAreaPlaceHolder'
      |'EM_Container_Base_PrechatFirstName'
      |'EM_Container_Base_PrechatLastName'
      |'EM_Container_Base_PrechatSubject'
      |'EM_Container_Base_PrechatEmail'
      |'EM_Container_Base_BeforeUnloadWarningMessage'
      |'EM_Container_Base_StartBookendText'
      |'EM_Container_Base_EndBookendText'
      |'EM_Container_Base_ChatMessageMetadataAssistiveText'
      |'EM_Container_Base_ParticipantJoinText'
      |'EM_Container_Base_ParticipantLeaveText'
      |'EM_Container_Base_InputFooterTextAreaAssistiveText'
      |'EM_Container_Base_InputFooterSendButtonAssistiveText'
      |'EM_Container_Base_PrechatStateSubmitButton'
      |'EM_Container_Base_InvalidEmailFormFieldError'
      |'EM_Container_Base_RequiredFormFieldError'
      |'EM_Container_Base_NotificationDismissButtonText'
      |'EM_Container_Base_ConversationEndedMinimizedText'
      |'EM_Container_Base_ExpiredJWT'
      |'EM_Chat_FileTransfer_SelectNewFileText'
      |'EM_PreChat_Base_PrechatCustomFieldLabel'
      |'EM_Chat_FileTransfer_FileSendingText'
      |'EM_Chat_FileTransfer_DownloadFileButtonTitle'
      |'EM_Chat_FileTransfer_SelectFileAttachmentButtonTitle'
      |'EM_Chat_FileTransfer_CancelFileAttachmentButtonTitle'
      |'EM_Chat_FileTransfer_DownloadFileButtonAssistiveText'
      |'EM_Chat_FileTransfer_SelectFileAttachmentButtonAssistiveText'
      |'EM_Chat_FileTransfer_CancelFileAttachmentButtonAssistiveText'
      |'EM_Chat_ChatBody_Sent'
      |'EM_Chat_ChatBody_Delivered'
      |'EM_Chat_ChatBody_Read'
      |'EM_Chat_ChoicesMessage_MenuAssistiveText'
      |'EM_Chat_ChoicesSelectionResponse_PlaceholderText'
      |'EM_Chat_ChoicesMessage_ButtonsAssistiveText'
      |'EM_Container_Base_HeaderAnnouncementTransferRequestSuccess'
      |'EM_Container_Base_HeaderAnnouncementTransferRequestFailure'
      |'EM_Container_Base_SystemMessageTransferRequestSuccess'
      |'EM_Container_Base_SystemMessageTransferRequestFailure'
      |'EM_Container_Base_SystemMessageTransferRequestTryAgain'
      |'EM_Chat_ChatBody_AgentTypingIndicator'
      |'EM_Chat_ChatBody_ChatbotTypingIndicator'
      |'EM_Container_Base_InputFooterTextAreaPlaceholderOnlyParticipant'
      |'EM_Container_Base_AgentJoinAnnouncement'
      |'EM_Container_Base_AgentLeaveAnnouncement'
      |'EM_Container_Base_JWTExpiredAnnouncement'
      |'EM_Container_Base_ParticipantJoinedText'
      |'EM_Container_Base_ParticipantLeftText'
      |'EM_Container_Base_NewMessageText'
      |'EM_Container_Base_MultipleNewMessagesText'
      |'EM_Container_Base_JwtExpiredText'
      |'EM_Container_Base_TransferInitiatedText'
      |'EM_Container_Base_TransferFailedText'
      |'EM_Chat_ChatBody_NotSent'
      |'EM_Chat_ChatBody_SpinnerDefaultAssistiveText'
      |'EM_Chat_ChatBody_FetchMoreEntriesSpinnerAssistiveText'
      |'EM_Container_Base_MinimizeButtonAssistiveText'
      |'EM_Container_Base_CloseButtonAssistiveText'
      |'EM_Container_Base_ConfirmationDialogMenuItemAssistiveText'
      |'EM_Container_Base_MinimizedNotificationAssistiveText'
      |'EM_Container_Base_MinimizedStateAssistiveText'
      |'EM_Chat_ChatBody_NotRoutedToAgentRoutingResult'
      |'EM_Container_Base_TitleNotificationSenderDisplayName'
      |'EM_Container_Base_MessagingIframeTitle'
      |'EM_Container_Base_FilePreviewIframeTitle'
      |'EM_Container_Base_FilePreviewIframeCloseButtonTitle'
      |'EM_Chat_ChatBody_MessageResendButtonText'
      |'EM_Chat_ChatBody_EstimatedWaitTimeInMinute'
      |'EM_Chat_ChatBody_EstimatedWaitTimeInMinutes'
      |'EM_Container_Base_InputFooterEmojiButtonAssistiveText'
      |'EM_Container_Base_InputFooterEmojiKeyboardAssistiveText'
      |'EM_Container_Base_PostchatFrameTitle'
      |'EM_Container_Base_PostchatHeaderText'
      |'EM_Container_Base_PostchatHeaderBackButtonTitle'
      |'EM_Container_Base_PostchatHeaderBackButtonAssistiveText'
      |'EM_Container_Base_PostchatConfirmationDialogTitleText'
      |'EM_Container_Base_PostchatConfirmationDialogBodyText'
      |'EM_Container_Base_PostchatConfirmationDialogConfirmButton'
      |'EM_Container_Base_PostchatConfirmationDialogCancelButton'
      |'EM_Container_Base_JWTRetrievalFailureText'
      |'EM_Chat_FileTransfer_MaximumNumberOfFilesAllowedErrorText'
      |'EM_Chat_FileTransfer_UnsupportedFileTypeErrorText'
      |'EM_Chat_FileTransfer_FileExceededSizeLimitErrorText'
      |'EM_PreChat_ChoiceList_PrechatCustomFieldLabel'
      |'EM_Container_Base_PrechatChoiceListValueNone'
      |'EM_Container_Base_MenuButtonAssistiveText'
      |'EM_Container_Base_CloseMenuButtonAssistiveText'
      |'EM_Chat_ChatBody_Yesterday'
      |'EM_PreChat_TermsAndConditions'
      |'EM_Container_Base_ReconnectInProgress'
      |'EM_Container_Base_ReconnectInProgressAssistiveText'
      |'EM_Container_Base_MinimizedReconnectInProgress'
      |'EM_Container_Base_PrechatTermsAndConditionsAcknowledgement'
      |'EM_Container_Base_ChatWindowAssistiveText'
      |'EM_Chat_SecureForms_FormButtonInitialStateAssistiveText'
      |'EM_Chat_SecureForms_FormButtonInactiveStateAssistiveText'
      |'EM_Chat_SecureForms_FormButtonPendingStateTitle'
      |'EM_Chat_SecureForms_FormButtonErrorResponseStateTitle'
      |'EM_Chat_SecureForms_FormButtonSuccessResponseStateTitle'
      |'EM_Chat_SecureForms_OptionSelectInputSingleSelectInstruction'
      |'EM_Chat_SecureForms_OptionSelectInputMultipleSelectInstruction'
      |'EM_Chat_SecureForms_DatePickerInputSelectInstruction'
      |'EM_Chat_SecureForms_TextInputSelectInstruction'
      |'EM_Chat_SecureForms_RequiredInputMissing'
      |'EM_Chat_SecureForms_RegexPatternMismatch'
      |'EM_Chat_SecureForms_NextButtonLabel'
      |'EM_Chat_SecureForms_BackButtonLabel'
      |'EM_Chat_SecureForms_SubmitButtonLabel'
      |'EM_Chat_SecureForms_ProgressBarAssistiveText'
      |'EM_Chat_SecureForms_NextButtonDisabledAssistiveText'
      |'EM_Chat_SecureForms_BackButtonDisabledAssistiveText'
      |'EM_Chat_SecureForms_SubmitButtonDisabledAssistiveText'
      |'EM_Chat_SecureForms_CloseConfirmationDialogTitleText'
      |'EM_Chat_SecureForms_CloseConfirmationDialogBodyText'
      |'EM_Chat_SecureForms_CloseConfirmationConfirmButtonLabel'
      |'EM_Chat_SecureForms_CloseConfirmationCancelButtonLabel'
      |'EM_Chat_SecureForms_RequiredSelectInputMissing'
      |'EM_Chat_ChatBody_UnsupportedMessageTypeText'
      |'EM_Container_Base_PrechatLoading'
      |'EM_Container_Base_RequestTranscriptMenuOption'
      |'EM_Container_Base_DownloadInProgressNotification'
      |'EM_Container_Base_DownloadSuccessNotification'
      |'EM_Container_Base_DownloadErrorNotification'
      |'EM_Container_Base_CloseNotification'
      |'EM_Chat_Carousels_PreviousCardButtonAssistiveText'
      |'EM_Chat_Carousels_NextCardButtonAssistiveText'
      |'EM_Chat_Carousels_CarouselDescriptionAssistiveText'
      |'EM_Container_Base_InputFooterTextAreaPlaceHolderAwaitingResponse'
      |'EM_Chat_FileTransfer_AttachedFilesAssistiveText'
      |'EM_Chat_FileTransfer_RemoveAttachmentButton'
      |'EM_Container_Base_InputFooterSendButton'
      |'EM_Container_Base_InputFooterTextAreaAssistiveLabelText'
      |'EM_Chat_FileTransfer_SendFileAttachmentAssistiveText'
      |'EM_Fallback_FallbackMessage'
      |'EM_Container_Base_EndSession'
      |'EM_Container_Base_EndUserEndedChatText'
      |'EM_Container_Base_AgentEndedChatText'
      |'EM_Container_Base_ChatbotEndedChatText'
      |'EM_Container_Error_GenericError'

export type ClmCategoryUsageType = 'DisclosureCategory'
      |'ContractClauseCategory'

export type MappingOperation = 'Autofill'
      |'Overwrite'

export type CleanRuleStatus = 'Inactive'
      |'Active'

export type AuthType = 'SfdcXi'
      |'HttpBasic'
      |'MutualSsl'
      |'Hmac'
      |'C2c'
      |'C2cCloud'
      |'None'

export type CloudServiceProviderApiType = 'Licenses'
      |'Tenants'
      |'Management'
      |'Snapshots'
      |'LicenseDefinitions'
      |'TenantTrusts'
      |'Usage'
      |'Feature'
      |'DigitalWalletProvisioning'
      |'DigitalWalletConsumption'

export type ProvisioningAutomationType = 'Manual'
      |'EntitlementOnly'
      |'Auto'

export type ModelEntityType = 'QA'
      |'ARTICLE'
      |'CASE'

export type ModelStatus = 'PUBLISHED'
      |'DARK_LAUNCHED'
      |'REJECTED'
      |'PHASED_OUT'
      |'VERIFIED'
      |'NO_MODEL'

export type CommunityBaseTemplate = 'c'

export type CommunityTemplateBundleInfoType = 'Highlight'
      |'PreviewImage'

export type CommunityTemplateCategory = 'IT'
      |'Marketing'
      |'Sales'
      |'Service'
      |'Commerce'

export type CommunityThemeLayoutType = 'Login'
      |'Home'
      |'Inner'
      |'ServiceNotAvailable'

export type AccessMethod = 'Get'
      |'Post'

export type CanvasLocationOptions = 'None'
      |'Chatter'
      |'UserProfile'
      |'Visualforce'
      |'Aura'
      |'Publisher'
      |'ChatterFeed'
      |'ServiceDesk'
      |'OpenCTI'
      |'AppLauncher'
      |'MobileNav'
      |'PageLayout'

export type CanvasOptions = 'HideShare'
      |'HideHeader'
      |'PersonalEnabled'

export type SamlInitiationMethod = 'None'
      |'IdpInitiated'
      |'SpInitiated'

export type DevicePlatformType = 'ios'
      |'android'

export type DeviceType = 'phone'
      |'tablet'
      |'minitablet'

export type ConnectedAppOauthAccessScope = 'Basic'
      |'Api'
      |'Web'
      |'Full'
      |'Chatter'
      |'CustomApplications'
      |'RefreshToken'
      |'OpenID'
      |'Profile'
      |'Email'
      |'Address'
      |'Phone'
      |'OfflineAccess'
      |'CustomPermissions'
      |'Wave'
      |'Eclair'
      |'Pardot'
      |'Lightning'
      |'Content'
      |'CDPIngest'
      |'CDPProfile'
      |'CDPQuery'
      |'Chatbot'
      |'CDPSegment'
      |'CDPIdentityResolution'
      |'CDPCalculatedInsight'
      |'ForgotPassword'
      |'UserRegistration'
      |'SFAP'
      |'Interaction'
      |'CDP'
      |'EinsteinGPT'
      |'PwdlessLogin'

export type SamlEncryptionType = 'AES_128'
      |'AES_256'
      |'Triple_Des'

export type SamlIdpSLOBinding = 'RedirectBinding'
      |'PostBinding'

export type SamlNameIdFormatType = 'Unspecified'
      |'EmailAddress'
      |'Persistent'
      |'Transient'

export type SamlSigningAlgoType = 'SHA1'
      |'SHA256'

export type SamlSubjectType = 'Username'
      |'FederationId'
      |'UserId'
      |'SpokeId'
      |'CustomAttribute'
      |'PersistentId'

export type BannerFontFamily = 'Serif'
      |'SansSerif'
      |'Cursive'
      |'Fantasy'
      |'SystemUi'
      |'UiSerif'
      |'UiSansSerif'
      |'UiMonospace'
      |'UiRounded'
      |'Fangsong'

export type BannerPosition = 'Top'
      |'Bottom'

export type ContextMappingIntentType = 'hydration'
      |'association'
      |'persistence'
      |'translation'

export type ContextAttributeDataType = 'string'
      |'number'
      |'boolean'
      |'date'
      |'datetime'
      |'percent'
      |'picklist'
      |'currency'
      |'reference'
      |'selfreference'

export type ContextAttributeFieldType = 'input'
      |'output'
      |'inputoutput'
      |'aggregate'

export type ContextMappingType = 'Hydration'
      |'Persistence'

export type ContextUseCaseType = 'ContractCreationOrUpdation'
      |'ContractExtraction'

export type ContractConfigType = 'ContractDocumentDownloadOption'
      |'WordTrackChangesDisplayColor'
      |'InclWordTrackChgReconciliation'
      |'InclWordTrackChgSectionContent'
      |'CreateDocSectionsDocxTemplates'
      |'AutoGenDocOnContractCreation'
      |'AutoGenerateDocFileType'
      |'ContractSignedStatus'
      |'ContractSignatureDeclinedSts'
      |'NotifyDocTemplateVerChgStatus'
      |'DocuSignUseAccountDefaultNtfcn'
      |'DocuSignReminderEnabled'
      |'DocuSignReminderDelayinDays'
      |'DocuSignReminderFrequency'
      |'DocuSignExpireEnabled'
      |'DocuSignExpiresAfter'
      |'DocuSignExpireWarning'
      |'DocuSignAccountBrand'
      |'Append0ToAutoNbrEmbeddedSect'
      |'DocumentFileNameFormat'
      |'DefaultTemplateName'
      |'AutoGenDocOnContractUpdate'
      |'ContractSignatureVoidedStatus'
      |'ContractSignatureExpiredStatus'
      |'TrackContractRedlines'
      |'DocumentTemplateFilterClass'
      |'EmailNotificationOnDocumentGeneration'
      |'ImportTargetContractStatus'
      |'ActivateObligationsBasedOnContractStatus'
      |'ExternalReviewRequired'
      |'InternalReviewRequired'
      |'CompareContractVersionsEnabled'
      |'PrivateExternalReviewCompletionSite'
      |'CheckInDocFileType'

export type ContractUsageType = 'DocumentSetting'
      |'Reconciliation'
      |'SignatureSetting'
      |'Redlining'
      |'ObligationSetting'

export type ConvIntelligenceActionType = 'LaunchNBA'
      |'LaunchFlow'
      |'AlertSupervisor'
      |'AlertSupervisorAndAgent'

export type ConvParticipantRole = 'Agent'
      |'Customer'
      |'AgentOrCustomer'

export type ConvIntelligenceService = 'AmazonConnectContactLens'
      |'KeywordMatch'
      |'CXoneAgentAssistService'
      |'VonageConversationalInsights'
      |'EinsteinConversationIntelligenceSignals'

export type ConvIntelligenceOperator = 'Equals'
      |'NotEquals'
      |'LessThan'
      |'GreaterThan'
      |'In'

export type ConvIntelligenceType = 'Category'
      |'Keyword'
      |'AgentSentiment'
      |'CustomerSentiment'
      |'Intent'

export type RefreshFrequency = 'NO_REFRESH'
      |'MONTHLY'

export type ReportStatus = 'NEW'
      |'TRAINING'
      |'COMPLETED'
      |'ERROR'
      |'NOT_ENOUGH_DATA_AFTER_PARSING'
      |'NOT_ENOUGH_DATA_WITH_CONTACT_REASON'
      |'LOW_CLUSTER_QUALITY'

export type SegmentationType = 'NO_FILTER'
      |'SINGLE_OBJECT_FILTER'
      |'CROSS_OBJECT_FILTER'

export type CustomChannelConnectedAppType = 'Partner'
      |'Customer'

export type ConsentOwner = 'Salesforce'
      |'Partner'

export type RoutingOwner = 'Salesforce'
      |'Partner'

export type ConversationMessageConstantType = 'Title'
      |'Url'
      |'Image'
      |'Options'
      |'SubTitle'
      |'Custom'

export type ConversationMessageConstantValueType = 'Text'
      |'Url'
      |'ImageAsset'

export type ConversationMessageValueType = 'Text'
      |'Boolean'
      |'Integer'
      |'Double'
      |'Date'
      |'DateTime'
      |'Url'
      |'RecordId'
      |'ImageId'
      |'Composite'

export type ConversationMessageContentCategory = 'Response'
      |'Reminder'
      |'Feedback'
      |'OrderUpdate'
      |'AccountUpdate'
      |'PromotionalOutreach'
      |'Authentication'

export type ConversationMessageHandlerType = 'QuickAction'
      |'AuthProvider'
      |'PaymentProvider'
      |'Attachment'

export type ConvMsgExternalTemplateVersionStatus = 'Pending'
      |'Rejected'
      |'Approved'
      |'Paused'
      |'Disabled'
      |'InAppeal'

export type ConversationMessageFormatType = 'Text'
      |'Attachments'
      |'RichLink'
      |'Media'
      |'Buttons'
      |'Carousel'
      |'QuickReplies'
      |'ListPicker'
      |'TimePicker'
      |'EncryptedOAuthToken'
      |'Application'
      |'Inputs'
      |'WebView'
      |'Payment'
      |'ExternalTemplate'

export type ConversationMessageCollectionType = 'None'
      |'StaticList'
      |'DynamicList'

export type ConversationMessageMergeFieldType = 'ListTemplate'

export type ConversationMessageLayoutValueType = 'Literal'
      |'MediaAsset'
      |'CompositeType'
      |'SourceSobjectFieldValue'
      |'SourceSobjectFormula'
      |'SourcePrimitiveValue'
      |'SourceCompositeType'
      |'FormulaTemplate'
      |'SourceSobjectField'

export type ConversationMessageType = 'StaticContent'
      |'Choices'
      |'Form'
      |'AuthenticationRequest'
      |'PaymentRequest'

export type ConversationMessageOptionsParameterType = 'RecordIdOptions'
      |'TimeSlotOptions'
      |'CustomPrimitiveOptions'
      |'CustomCompositeOptions'

export type ConversationMessageParameterType = 'RecordIds'
      |'CustomPrimitive'
      |'CustomComposite'

export type ConversationMessageDefinitionType = 'RecordView'
      |'RecordPicker'
      |'Picklist'
      |'TimePicker'
      |'Link'
      |'CustomMessage'
      |'CustomPicker'
      |'LegacyPicker'
      |'AuthenticationRequest'
      |'Action'
      |'AutoResponse'
      |'PaymentRequest'
      |'Notification'

export type ClientAuthMode = 'SSO'
      |'Custom'
      |'Mixed'

export type ServerAuthMode = 'OAuth'
      |'None'

export type ConversationVendorType = 'ServiceCloudVoicePartner'
      |'Amazon_Connect'
      |'BringYourOwnChannelPartner'
      |'BringYourOwnContactCenter'

export type CspTrustedSiteContext = 'All'
      |'LEX'
      |'Communities'
      |'FieldServiceMobileExtension'
      |'VisualForce'

export type FormFactor = 'Small'
      |'Medium'
      |'Large'

export type ActionOverrideType = 'Default'
      |'Standard'
      |'Scontrol'
      |'Visualforce'
      |'Flexipage'
      |'LightningComponent'

export type NavType = 'Standard'
      |'Console'

export type UiType = 'Aloha'
      |'Lightning'

export type FieldType = 'AutoNumber'
      |'Lookup'
      |'MasterDetail'
      |'Checkbox'
      |'Currency'
      |'Date'
      |'DateTime'
      |'Email'
      |'Number'
      |'Percent'
      |'Phone'
      |'Picklist'
      |'MultiselectPicklist'
      |'Text'
      |'TextArea'
      |'LongTextArea'
      |'Html'
      |'Url'
      |'EncryptedText'
      |'Summary'
      |'Hierarchy'
      |'File'
      |'MetadataRelationship'
      |'Location'
      |'ExternalLookup'
      |'IndirectLookup'
      |'CustomDataType'
      |'Time'
      |'Address'
      |'Array'

export type FeedItemVisibility = 'AllUsers'
      |'InternalUsers'

export type DeleteConstraint = 'Cascade'
      |'Restrict'
      |'SetNull'

export type ElementType = 'Float'

export type EncryptionScheme = 'None'
      |'ProbabilisticEncryption'
      |'CaseSensitiveDeterministicEncryption'
      |'CaseInsensitiveDeterministicEncryption'

export type FieldManageability = 'DeveloperControlled'
      |'SubscriberControlled'
      |'Locked'

export type TreatBlanksAs = 'BlankAsBlank'
      |'BlankAsZero'

export type EncryptedFieldMaskChar = 'asterisk'
      |'X'

export type EncryptedFieldMaskType = 'all'
      |'creditCard'
      |'ssn'
      |'lastFour'
      |'sin'
      |'nino'

export type DefinitionCreationType = 'Standard'
      |'Custom'
      |'System'
      |'Derived'
      |'Bridge'
      |'Curated'
      |'Segment_Membership'
      |'Calculated_Insight'
      |'Ml_Prediction'
      |'Activation_Audience'
      |'CG_Audience'
      |'Ad_Audience_Insights'
      |'Transform'
      |'ADG'
      |'External'
      |'Vector_Embedding'
      |'Chunk'
      |'Directory_Table'
      |'Semantic'
      |'Problem_Records'

export type UsageTag = 'NONE'
      |'KEY_QUALIFIER'

export type InvalidMergeActionType = 'Drop'
      |'Keep'
      |'Override'

export type MktDataModelFieldUsageTag = 'None'
      |'KeyQualifier'

export type SummaryOperations = 'count'
      |'sum'
      |'min'
      |'max'

export type Channel = 'AllChannels'
      |'App'
      |'Pkb'
      |'Csp'
      |'Prm'

export type Template = 'Page'
      |'Tab'
      |'Toc'

export type CustomSettingsType = 'List'
      |'Hierarchy'

export type DeploymentStatus = 'InDevelopment'
      |'Deployed'

export type PlatformEventType = 'HighVolume'
      |'StandardVolume'
      |'ExternalEvent'

export type SharingModel = 'Private'
      |'Read'
      |'ReadSelect'
      |'ReadWrite'
      |'ReadWriteTransfer'
      |'FullAccess'
      |'ControlledByParent'
      |'ControlledByLeadOrContact'
      |'ControlledByCampaign'

export type Gender = 'Neuter'
      |'Masculine'
      |'Feminine'
      |'AnimateMasculine'
      |'ClassI'
      |'ClassIII'
      |'ClassV'
      |'ClassVII'
      |'ClassIX'
      |'ClassXI'
      |'ClassXIV'
      |'ClassXV'
      |'ClassXVI'
      |'ClassXVII'
      |'ClassXVIII'

export type PlatformEventPublishBehavior = 'PublishAfterCommit'
      |'PublishImmediately'

export type StartsWith = 'Consonant'
      |'Vowel'
      |'Special'

export type SetupObjectVisibility = 'PackageProtected'
      |'Protected'
      |'Public'

export type WebLinkAvailability = 'online'
      |'offline'

export type WebLinkDisplayType = 'link'
      |'button'
      |'massActionButton'

export type Encoding = 'UTF-8'
      |'ISO-8859-1'
      |'Shift_JIS'
      |'ISO-2022-JP'
      |'EUC-JP'
      |'ks_c_5601-1987'
      |'Big5'
      |'GB2312'
      |'Big5-HKSCS'
      |'x-SJIS_0213'

export type WebLinkType = 'url'
      |'sControl'
      |'javascript'
      |'page'
      |'flow'

export type WebLinkWindowType = 'newWindow'
      |'sidebar'
      |'noSidebar'
      |'replace'
      |'onClickJavaScript'

export type WebLinkPosition = 'fullScreen'
      |'none'
      |'topLeft'

export type Article = 'None'
      |'Indefinite'
      |'Definite'

export type CaseType = 'Nominative'
      |'Accusative'
      |'Genitive'
      |'Dative'
      |'Inessive'
      |'Elative'
      |'Illative'
      |'Adessive'
      |'Ablative'
      |'Allative'
      |'Essive'
      |'Translative'
      |'Partitive'
      |'Objective'
      |'Subjective'
      |'Instrumental'
      |'Prepositional'
      |'Locative'
      |'Vocative'
      |'Sublative'
      |'Superessive'
      |'Delative'
      |'Causalfinal'
      |'Essiveformal'
      |'Termanative'
      |'Distributive'
      |'Ergative'
      |'Adverbial'
      |'Abessive'
      |'Comitative'

export type Possessive = 'None'
      |'First'
      |'Second'

export type SiteClickjackProtectionLevel = 'AllowAllFraming'
      |'External'
      |'SameOriginOnly'
      |'NoFraming'

export type SiteRedirect = 'Permanent'
      |'Temporary'

export type SiteType = 'Siteforce'
      |'Visualforce'
      |'ChatterNetwork'
      |'ChatterNetworkPicasso'

export type ChartBackgroundDirection = 'TopToBottom'
      |'LeftToRight'
      |'Diagonal'

export type ChartTheme = 'light'
      |'dark'

export type ChartColorPalettes = 'Default'
      |'gray'
      |'colorSafe'
      |'unity'
      |'justice'
      |'nightfall'
      |'sunrise'
      |'bluegrass'
      |'tropic'
      |'heat'
      |'dusk'
      |'pond'
      |'watermelon'
      |'fire'
      |'water'
      |'earth'
      |'accessible'

export type DashboardFilterOperation = 'equals'
      |'notEqual'
      |'lessThan'
      |'greaterThan'
      |'lessOrEqual'
      |'greaterOrEqual'
      |'contains'
      |'notContain'
      |'startsWith'
      |'includes'
      |'excludes'
      |'between'

export type ChartRangeType = 'Auto'
      |'Manual'

export type ChartAxis = 'x'
      |'y'
      |'y2'
      |'r'

export type DashboardComponentType = 'Bar'
      |'BarGrouped'
      |'BarStacked'
      |'BarStacked100'
      |'Column'
      |'ColumnGrouped'
      |'ColumnStacked'
      |'ColumnStacked100'
      |'Line'
      |'LineGrouped'
      |'Pie'
      |'Table'
      |'Metric'
      |'Gauge'
      |'LineCumulative'
      |'LineGroupedCumulative'
      |'Scontrol'
      |'VisualforcePage'
      |'Donut'
      |'Funnel'
      |'ColumnLine'
      |'ColumnLineGrouped'
      |'ColumnLineStacked'
      |'ColumnLineStacked100'
      |'Scatter'
      |'ScatterGrouped'
      |'FlexTable'
      |'Image'
      |'RichText'

export type Fit = 'tile'
      |'stretch'
      |'original'
      |'fitwidth'
      |'fitheight'

export type HorizontalAlignment = 'left'
      |'center'
      |'right'

export type VerticalAlignment = 'top'
      |'center'
      |'bottom'

export type DashboardComponentFilter = 'RowLabelAscending'
      |'RowLabelDescending'
      |'RowValueAscending'
      |'RowValueDescending'

export type ChartUnits = 'Auto'
      |'Integer'
      |'Hundreds'
      |'Thousands'
      |'Millions'
      |'Billions'
      |'Trillions'

export type DashboardComponentColumnType = 'aggregate'
      |'detail'
      |'grouping'

export type ChartLegendPosition = 'Right'
      |'Bottom'
      |'OnChart'

export type DashboardType = 'SpecifiedUser'
      |'LoggedInUser'
      |'MyTeamUser'

export type DashboardComponentSize = 'Narrow'
      |'Medium'
      |'Wide'

export type CalculatedInsightCreationType = 'Custom'
      |'System'

export type CalculatedInsightDefinitionType = 'CALCULATED_METRIC'
      |'EXTERNAL_METRIC'
      |'STREAMING_METRIC'
      |'GRAPH_METRIC'
      |'HISTORY_METRIC'

export type DataModelType = 'Source'
      |'Transport'
      |'Landing'
      |'View'
      |'Reference'

export type AccelerationEnabled = 'YES'
      |'NO'

export type DataObjectType = 'Object'
      |'Table'
      |'Api'

export type StorageType = 'LOCAL'
      |'EXTERNAL'

export type DataImportDataExtractMethods = 'FULL_REFRESH'
      |'NUMERIC_CDC'
      |'BINARY_CDC'
      |'DATETIME_CDC'

export type DataImportRefreshFrequency = 'NONE'
      |'MINUTES_5'
      |'MINUTES_15'
      |'MINUTES_30'
      |'HOURLY'
      |'EVERY_4_HOURS'
      |'EVERY_12_HOURS'
      |'DAILY'
      |'WEEKLY'
      |'MONTHLY'
      |'NOT_APPLICABLE'
      |'BATCH'
      |'STREAMING'

export type DataImportRefreshMode = 'FULL_REFRESH'
      |'UPSERT'
      |'INCREMENTAL'
      |'PARTIAL_UPDATE'
      |'REPLACE'
      |'NEAR_REAL_TIME_INCREMENTAL'
      |'NOT_APPLICABLE'

export type StreamType = 'INGEST'
      |'DIRECT_ACCESS'
      |'DIRECT_ACCESS_ACCELERATED'

export type StreamingAppDataConnectorType = 'MobileApp'
      |'WebApp'

export type ExpsSetProcessType = 'Bre'
      |'TransactionJournal'
      |'TierProcessing'
      |'CustomLoyalty'
      |'TestProcess'
      |'AiAcceleratorSubscriberChurnPrediction'
      |'DefaultPricing'
      |'RecordAlert'
      |'ShipAndDebit'
      |'WarrantyClaim'
      |'ProductQualification'
      |'ProductCategoryQualification'
      |'EventOrchestration'
      |'ComplianceControl'
      |'FinancialServicesCloud'
      |'DefaultRating'
      |'LoopingProcessing'
      |'CreditPointsToMembers'
      |'DebitPointsFromMembers'
      |'UpdateMemberDetails'
      |'IssueVoucher'
      |'CancelVoucher'
      |'EnrollInPromotion'
      |'UnenrollMember'
      |'GetMemberPromotions'
      |'OptOutPromotion'
      |'PricingDiscovery'
      |'PriceProtection'
      |'Constraint'
      |'RatingDiscovery'
      |'PlanCostCalculation'
      |'GpaCalculation'
      |'Timesheet'
      |'FulfillmentCondition'
      |'StudentSuccess'

export type DecisionMatrixType = 'Standard'
      |'Grouped'

export type DecisionMatrixColumnType = 'Input'
      |'Output'

export type DecisionMatrixDataType = 'Text'
      |'Number'
      |'NumberRange'
      |'TextRange'
      |'Currency'
      |'Percent'
      |'Boolean'

export type DecisionMatrixDefStatus = 'Draft'
      |'Active'
      |'Inactive'
      |'InvalidDraft'
      |'Obsolete'

export type DecisionTableCollectOperator = 'None'
      |'Sum'
      |'Minimum'
      |'Maximum'
      |'Count'

export type DecisionTableConditionType = 'All'
      |'Any'
      |'Custom'

export type DecisionTableDataSourceType = 'SingleSobject'
      |'MultipleSobjects'
      |'CsvUpload'

export type DTParameterDataType = 'String'
      |'Number'
      |'Date'
      |'Boolean'
      |'Percent'
      |'Currency'
      |'DateTime'

export type DecisionTableOperator = 'Equals'
      |'NotEquals'
      |'LessThan'
      |'LessOrEqual'
      |'GreaterThan'
      |'GreaterOrEqual'
      |'Matches'
      |'ExistsIn'
      |'DoesNotExistIn'
      |'DoesNotMatch'
      |'Contains'

export type DecisionTableSortType = 'None'
      |'AscNullFirst'
      |'AscNullLast'
      |'DescNullFirst'
      |'DescNullLast'

export type DecisionTableParameterType = 'INPUT'
      |'OUTPUT'

export type DTSourceCriteriaOperator = 'Equals'
      |'NotEquals'
      |'GreaterThan'
      |'GreaterOrEqual'
      |'LessThan'
      |'LessOrEqual'
      |'Matches'
      |'ExistsIn'
      |'DoesNotExistIn'

export type DTSourceCriteriaValueType = 'Literal'
      |'Parameter'
      |'Picklist'
      |'Formula'
      |'Lookup'

export type DecisionTableExecutionType = 'Soql'
      |'Hbpo'
      |'Dmo'
      |'Solr'
      |'Hbase'

export type DecisionTableHitPolicy = 'UniqueValues'
      |'AnyValue'
      |'Priority'
      |'FirstMatch'
      |'CollectOperator'
      |'OutputOrder'
      |'RuleOrder'

export type DecisionTableRefreshStatus = 'Initiated'
      |'Failed'
      |'Completed'
      |'InProgress'

export type DecisionTableStatus = 'Draft'
      |'Inactive'
      |'Active'
      |'ActivationInProgress'

export type DecisionTableType = 'LowVolume'
      |'HighVolume'
      |'Advanced'
      |'MediumVolume'
      |'HighScaleExecution'

export type DecisionTableUploadStatus = 'UploadInProgress'
      |'Completed'
      |'CompletedWithErrors'
      |'Failed'

export type FTestTopLevelSelection = 'SelOne'
      |'SelTwo'
      |'SelThree'

export type SchedulingCategory = 'B'
      |'A'

export type SchedulingObjectiveType = 'AgentPreference'
      |'BalanceShifts'
      |'BalanceNonStandardShifts'

export type ObjectiveParameterKey = 'DaysBack'
      |'DaysAhead'

export type FTestOnOffSelection = 'On'
      |'Off'

export type FTestSeasonSelection = 'Spring'
      |'Summer'
      |'Autumn'
      |'Winter'

export type PipelineInspectionMetric = 'TotalPipeline'
      |'ClosedWon'
      |'Commit'
      |'MostLikely'
      |'BestCase'
      |'OpenPipeline'
      |'ClosedLost'
      |'MovedIn'
      |'MovedOut'

export type VirtualVisitComprehendServiceType = 'ComprehendService'
      |'ComprehendMedicalService'

export type VirtualVisitUsageType = 'CHIME'
      |'INTELLIGENT_FORM_READER'
      |'SENTIMENT_ANALYSIS'
      |'KEY_PHRASE_EXTRACTION'
      |'ENTITY_DETECTION'

export type VirtualVisitVisitRegion = 'us-east-1'
      |'us-east-2'
      |'us-west-1'
      |'us-west-2'
      |'af-south-1'
      |'ap-east-1'
      |'ap-south-1'
      |'ap-northeast-1'
      |'ap-northeast-2'
      |'ap-northeast-3'
      |'ap-southeast-1'
      |'ap-southeast-2'
      |'ca-central-1'
      |'eu-central-1'
      |'eu-west-1'
      |'eu-west-2'
      |'eu-west-3'
      |'eu-south-1'
      |'eu-north-1'
      |'me-south-1'
      |'sa-east-1'

export type MobileSecurityMobilePlatform = 'Android'
      |'iOS'

export type MobileSecurityPolicyRuleValueType = 'Boolean'
      |'Text'
      |'TextList'

export type MobileSecurityPolicySeverityLevel = 'Warn'
      |'Error'
      |'Critical'
      |'Info'

export type MobileSecurityPolicyType = 'JailbrokenDevice'
      |'MinimumOsVersion'
      |'MaximumOsVersion'
      |'MinimumSecurityPatchVersion'
      |'ManInMiddle'
      |'MinimumAppVersion'
      |'MininumAppVersion'
      |'MaximumAppVersion'
      |'DevicePasscode'
      |'BlockedDeviceList'
      |'BlockCustomKeyboard'
      |'BlockFileBackup'
      |'Block3dTouch'
      |'Screenshot'
      |'LogScreenshot'
      |'LogEmail'
      |'LogPhonecall'
      |'LogTextmessage'
      |'LogPolicyResult'
      |'BlockMicrophone'
      |'BlockCamera'
      |'MalwareDetection'
      |'DisableUrlCaching'
      |'MaxOffline'
      |'LogoutAfterRestart'
      |'LogoutOnBiometricChange'
      |'BlockOsSharing'
      |'BrowserUriScheme'
      |'CheckBiometric'
      |'BlockContacts'
      |'BlockCalendar'
      |'PhonecallUriScheme'
      |'AllowedDeviceList'
      |'LogCertPin'

export type LearningAchievementType = 'LearningCourse'
      |'LearningProgram'
      |'AchievementGroup'
      |'Skill'
      |'Custom'

export type RecordAlertDataSourceType = 'APEX'
      |'BusinessRulesEngine'

export type ExtensionPointName = 'Commerce_Domain_Cart_Calculate'
      |'Commerce_Domain_Tax_CartCalculator'
      |'Commerce_Domain_Inventory_CartCalculator'
      |'Commerce_Domain_Promotions_CartCalculator'
      |'Commerce_Domain_Promotions_ShippingCalculator'
      |'Commerce_Domain_Pricing_CartCalculator'
      |'Commerce_Domain_Shipping_CartCalculator'
      |'Commerce_Domain_Inventory_Service'
      |'Commerce_Domain_Pricing_Service'
      |'Commerce_Domain_Tax_Service'
      |'Commerce_Domain_Checkout_CreateOrder'
      |'Commerce_Domain_Checkout_PlaceOrder'
      |'Commerce_Domain_Shipping_SplitShipment'
      |'Product_Inventory_CheckInventory'
      |'CommerceDx_Pricing'
      |'CommerceDx_Inventory'
      |'CommerceDx_TicketProcessing'
      |'Commerce_Integration_B2CEOrderImport'
      |'Cart_Prices_Extension'
      |'Checkout_CartSummary_ComputePromotions'
      |'Checkout_CartSummary_PriceCart'
      |'Checkout_Update_CalcCartSummary'
      |'Checkout_CartSummary_Inventory'
      |'Commerce_Domain_OrderManagement_Product'
      |'CommerceDx_Endpoint_PricingSample_Service'
      |'CommerceDx_Endpoint_InventorySample_Service'
      |'Commerce_Endpoint_Account_Addresses'
      |'Commerce_Endpoint_Account_Address'
      |'Commerce_Endpoint_Catalog_Products'
      |'Commerce_Endpoint_Catalog_Product'
      |'Commerce_Endpoint_Search_Products'
      |'Commerce_Endpoint_Search_ProductSearch'
      |'Commerce_Endpoint_Search_ProductsByCategory'
      |'Commerce_Endpoint_Cart_ItemCollection'
      |'Commerce_Endpoint_Cart_Item'

export type RegistryProviderType = 'Price'
      |'Promotions'
      |'Inventory'
      |'Shipment'
      |'Tax'
      |'Extension'

export type CustomFieldDisplayType = 'Dropdown'
      |'ColorSwatch'
      |'Pill'

export type MappingBehaviorType = 'PointInTime'
      |'CurrentValue'

export type RRADJctObjFilterLogic = 'And'
      |'Or'
      |'Custom'

export type RelatedRecordAccessDefShareTo = 'Internal'
      |'External'
      |'All'

export type RRADSourceObjFilterLogic = 'And'
      |'Or'
      |'Custom'

export type RelatedRecordAccessDefStatus = 'Draft'
      |'Active'
      |'Inactive'

export type RRADTargetObjFilterLogic = 'And'
      |'Or'
      |'Custom'

export type RRAFObjectType = 'Source'
      |'Target'
      |'Junction'

export type RRAFOperator = 'Equal'
      |'Not_Equal'
      |'Starts_With'
      |'Contains'
      |'Does_Not_Contain'
      |'Less_Than'
      |'Greater_Than'
      |'Less_Or_Equal'
      |'Greater_Or_Equal'
      |'Include'
      |'Exclude'
      |'Within'

export type ObjectAccessLevel = 'Edit'
      |'Read'
      |'None'

export type MobileSecurityCertPinType = 'AuthServer'
      |'Resource'

export type ActionableListSourceType = 'CrmAnalytics'
      |'DataCloudPlatform'

export type ActionableListType = 'RetailStoreList'
      |'HealthcareProviderList'

export type DatasetColumnDataType = 'Dimensions'
      |'Dates'
      |'Measures'

export type DatatableDataType = 'Boolean'
      |'Currency'
      |'Date'
      |'DateTime'
      |'Email'
      |'Location'
      |'Number'
      |'Percent'
      |'Phone'
      |'Text'
      |'Url'

export type ProviderSearchObjectMapping = 'HealthcareProvider'
      |'HealthcarePractitionerFacility'

export type SourceSystemFieldRole = 'NotApplicable'
      |'Patient'
      |'ServiceProvider'
      |'RemoteMonitoringPatient'
      |'RemoteMonitoringDevice'

export type CareLimitTypeMetricType = 'Money'
      |'Percentage'
      |'Amount'
      |'Text'

export type AssessmentConfigurationOption = 'Send'

export type AssessmentType = 'DiscoveryFramework'

export type SchedulingRuleType = 'M'
      |'B'
      |'W'
      |'A'
      |'RestTimeMinutes'
      |'Q'
      |'C'
      |'LimitNonstandardShifts'

export type SchedulingParameterKey = 'L'
      |'R'
      |'W'
      |'T'
      |'C'
      |'ConsiderAbsence'
      |'ConsiderSTM'

export type CareProviderAfflType = 'HospitalAffiliation'

export type AssociationType = 'BranchManagement'

export type AssociationEventType = 'Create'
      |'Update'

export type AssociationStatusType = 'Draft'
      |'Active'
      |'Inactive'

export type ShiftSegmentTypeCategory = 'Work'
      |'Break'
      |'NonWork'

export type DgtAssetMgmtPrvdLghtCpntType = 'NONE'
      |'DIGITAL_ASSET_MANAGER'

export type ManagedContentSpaceModuleStatusEnum = 'ENABLED'
      |'DISABLED'
      |'ERROR'
      |'INVALID'
      |'STANDBY'
      |'NOT_INSTALLED'

export type ACPStatus = 'New'
      |'Pending'
      |'Deployed'

export type ApexCodeUnitStatus = 'Inactive'
      |'Active'
      |'Deleted'

export type ContentAssetFormat = 'Original'
      |'ZippedVersions'

export type ContentAssetAccess = 'VIEWER'
      |'COLLABORATOR'
      |'INFERRED'

export type DataPipelineType = 'Pig'

export type DiscoveryAlgorithmType = 'Glm'
      |'Gbm'
      |'Xgboost'
      |'Drf'
      |'Best'

export type DiscoveryModelFieldType = 'Text'
      |'Number'
      |'Date'

export type DiscoveryModelRuntimeType = 'Discovery'
      |'H2O'
      |'Py36Tensorflow244'
      |'Py37Tensorflow270'
      |'Py37Scikitlearn102'

export type DiscoveryPredictionType = 'Unknown'
      |'Regression'
      |'Classification'
      |'MulticlassClassification'

export type DiscoveryModelSourceType = 'Discovery'
      |'UserUpload'

export type DiscoveryAIModelStatus = 'Disabled'
      |'Uploading'
      |'UploadFailed'
      |'UploadCompleted'
      |'Validating'
      |'ValidationFailed'
      |'ValidationCompleted'
      |'Enabled'

export type DiscoveryAIModelTransformationType = 'TypographicClustering'
      |'SentimentAnalysis'
      |'FreeTextClustering'
      |'NumericalImputation'
      |'CategoricalImputation'
      |'TimeSeriesForecast'
      |'ExtractMonthOfYear'
      |'ExtractDayOfWeek'

export type DiscoveryStoryAutopilotStatus = 'Enabled'
      |'Disabled'

export type DiscoveryStoryOutcomeGoal = 'Minimize'
      |'Maximize'
      |'None'

export type DiscoveryStoryOutcomeType = 'Count'
      |'Text'
      |'Categorical'
      |'Number'

export type DiscoveryStorySourceType = 'AnalyticsDataset'
      |'Report'
      |'LiveDataset'

export type DocumentGenerationMechanism = 'ClientSide'
      |'ServerSide'

export type DocumentTemplateStatus = 'Draft'
      |'Active'
      |'Archived'

export type TargetTokenItemObject = 'OPPORTUNITY_LINE_ITEM'
      |'ORDER_LINE_ITEM'
      |'QUOTE_LINE_ITEM'

export type TargetTokenObject = 'CONTRACT'
      |'OPPORTUNITY'
      |'ORDER'
      |'QUOTE'

export type TokenMappingMethodType = 'OmniDataTransform'
      |'CustomClass'

export type TokenMappingType = 'JSON'
      |'SalesforceObject'

export type DocumentTemplateType = 'Web'
      |'MicrosoftWord'
      |'MicrosoftPowerpoint'
      |'Microsoft365Word'
      |'HTMLArchive'

export type DocumentTemplateUsageType = 'Contract_Lifecycle_Management'
      |'Tearsheets'
      |'Revenue_Lifecycle_Management'
      |'Invoice'

export type EmailTemplateStyle = 'none'
      |'freeForm'
      |'formalLetter'
      |'promotionRight'
      |'promotionLeft'
      |'newsletter'
      |'products'

export type EmailTemplateType = 'text'
      |'html'
      |'custom'
      |'visualforce'

export type EmailTemplateUiType = 'Aloha'
      |'SFX'
      |'SFX_Sample'

export class PlatformSchemaContentType {}

export type SControlContentSource = 'HTML'
      |'URL'
      |'Snippet'

export type StaticResourceCacheControl = 'Private'
      |'Public'

export type FlexiPageType = 'AppPage'
      |'ObjectPage'
      |'RecordPage'
      |'HomePage'
      |'ForecastingPage'
      |'MailAppAppPage'
      |'CommAppPage'
      |'CommForgotPasswordPage'
      |'CommLoginPage'
      |'CommObjectPage'
      |'CommQuickActionCreatePage'
      |'CommRecordPage'
      |'CommRelatedListPage'
      |'CommSearchResultPage'
      |'CommGlobalSearchResultPage'
      |'CommSelfRegisterPage'
      |'CommThemeLayoutPage'
      |'UtilityBar'
      |'RecordPreview'
      |'EmbeddedServicePage'
      |'CommCheckoutPage'
      |'CommOrderConfirmationPage'
      |'CommFlowPage'
      |'EmailTemplatePage'
      |'ApplicationLayout'
      |'CommNoSearchResultsPage'
      |'CommElectronicSignaturePage'
      |'CommContractDocumentsPage'
      |'CommContractDetailViewPage'
      |'EmailContentPage'
      |'ServiceDocument'
      |'LandingPage'
      |'CdpRecordPage'
      |'SlackAppHome'
      |'SlackMessage'
      |'SlackModal'
      |'SlackNotification'
      |'EasyHomePage'
      |'CardPage'
      |'VoiceExtension'
      |'ConfiguratorAppPage'
      |'OmniSupervisorPage'
      |'MobileAppPage'

export type ViewTargetType = 'slack'

export type AuthoringMode = 'OmniScriptForm'
      |'Microsoft365Word'
      |'OmniScriptAndMcrsft365Wrd'
      |'GoogleDocs'
      |'OmniscriptAndGoogleDocs'

export type DiscoveryFieldMapSourceType = 'SalesforceField'
      |'AnalyticsDatasetField'

export type DiscoveryFilterOperator = 'Equal'
      |'NotEqual'
      |'GreaterThan'
      |'GreaterThanOrEqual'
      |'LessThan'
      |'LessThanOrEqual'
      |'Between'
      |'NotBetween'
      |'InSet'
      |'NotIn'
      |'Contains'
      |'StartsWith'
      |'EndsWith'
      |'IsNull'
      |'IsNotNull'

export type DiscoveryFilterFieldType = 'Text'
      |'Number'
      |'Date'
      |'DateTime'
      |'Boolean'

export type DiscoveryFilterValueType = 'Constant'
      |'PlaceHolder'

export type DiscoveryOutcomeGoal = 'Minimize'
      |'Maximize'
      |'None'

export type DiscoveryPushbackType = 'AiRecordInsight'
      |'Direct'

export type GenerationMechanism = 'ClientSide'
      |'ServerSide'

export type PreviewType = 'PDF'
      |'Thumbnail'

export type DupeActionType = 'Allow'
      |'Block'

export type DupeSecurityOptionType = 'EnforceSharingRules'
      |'BypassSharingRules'

export type ConfigType = 'AnchorString'
      |'SignerRoles'
      |'SyncFileSizeLimit'
      |'CalloutTimeout'
      |'EnvelopesLastPollDate'
      |'CalloutNamedCredential'
      |'eSignVendorAccountId'
      |'RecipientsCustomClass'
      |'DocumentsCustomClass'

export type ConfigGroup = 'AnchorTabSetting'
      |'EnvelopeObjectLimits'
      |'CalloutConfigurationSetup'
      |'Envelope'
      |'eSignVendorAccount'
      |'CustomClassSetting'

export type Vendor = 'DocuSign'

export type EmailServicesAttOptions = 'None'
      |'TextOnly'
      |'BinaryOnly'
      |'All'
      |'NoContent'

export type EmailServicesErrorAction = 'UseSystemDefault'
      |'Bounce'
      |'Discard'
      |'Requeue'

export type EmbeddedServiceAuthMethod = 'CommunitiesLogin'
      |'CustomLogin'

export type EmbeddedServiceDeploymentFeature = 'None'
      |'EmbeddedMessaging'
      |'LiveAgent'
      |'Flows'
      |'FieldService'

export type EmbeddedServiceDeploymentType = 'Web'
      |'Mobile'
      |'API'
      |'InternalCopilot'

export type EmbeddedServiceComponentBundleType = 'AuraDefinitionBundle'
      |'LightningComponentBundle'

export type EmbeddedServiceCustomComponentType = 'LA_Prechat'
      |'LA_Minimized'
      |'LA_PlainTextChatMessage'
      |'LA_ChatHeader'
      |'MIAW_Prechat'
      |'MIAW_Header'
      |'MIAW_TextMessage'

export type EmbeddedServiceResourceType = 'SettingsFile'
      |'ChatInvitation'

export type EmbeddedServiceFlowType = 'FL_Flow'
      |'FS_NewAppointment'
      |'FS_ModifyAppointment'
      |'FS_CancelAppointment'
      |'LA_Survey'

export type EmbeddedServiceFormDisplayContext = 'None'
      |'Conversation'
      |'Session'

export type EmbeddedServiceFormFieldType = 'Text'
      |'Email'
      |'Phone'
      |'Number'
      |'Checkbox'
      |'ChoiceList'

export type MessagingChannelParameterType = 'Standard'
      |'Custom'

export type EmbeddedServiceLayoutType = 'FS_AppointmentHome'

export type EmbeddedServiceQuickActionType = 'Prechat'
      |'OfflineCase'

export type EmbeddedServiceFontSize = 'Small'
      |'Medium'
      |'Large'

export type EmbeddedServiceScenario = 'Sales'
      |'Service'
      |'Basic'

export type EmbeddedServiceChannelType = 'EmbeddedServiceConfig'
      |'MessagingChannel'
      |'Phone'
      |'CustomURL'
      |'EmbeddedMessaging'

export type EnablementAggregationType = 'Sum'
      |'Count'
      |'Average'

export type EnablementFilterOperator = 'Equals'
      |'DoesNotContain'
      |'DoesNotEqual'
      |'IsNull'
      |'In'
      |'NotIn'
      |'GreaterThan'
      |'GreaterThanOrEqual'
      |'LessThan'
      |'LessThanOrEqual'
      |'Contains'
      |'StartsWith'
      |'EndsWith'

export type EnblProgramMeasureStatus = 'Draft'
      |'Published'
      |'Archived'

export type ProgramExtContentDefProvider = 'Trailhead'

export type EnblCompositeMilestoneType = 'Addition'
      |'Division'
      |'Percentage'

export type ProgramTaskDefCategory = 'Exercise'
      |'Milestone'

export type MilestoneTimeUnits = 'Minutes'
      |'Hours'
      |'Days'

export type EventDeliveryType = 'StartFlow'
      |'ResumeFlow'

export type EventRelayAdminState = 'RUN'
      |'STOP'
      |'PAUSE'
      |'DELETE'

export type EventRelayUsageType = 'AMAZON_EVENTBRIDGE'
      |'INTERNAL_MANAGED_SUBSCRIPTIONS'
      |'INTERNAL_REPLICATION'

export type ExperienceContainerType = 'SFS'
      |'SAPP'
      |'TEST'
      |'LEX'
      |'SCMA'

export type ActionLogSchemaType = 'Other'
      |'ExpressionSet'

export type EASAppType = 'PublicSector'
      |'Loyalty'
      |'HealthCloud'
      |'IndustryServiceExcellence'
      |'IndustriesPricing'
      |'OmniAnalytics'
      |'ActionableEventOrch'
      |'IndustriesDroOrderProcess'
      |'Compliance'

export type EvaluationResult = 'Passed'
      |'Failed'
      |'NoResult'

export type ExpressionSetStepType = 'Calculation'
      |'Aggregation'
      |'MatrixLookup'
      |'ReferenceProcedure'
      |'Condition'
      |'DecisionTableLookup'
      |'Branch'
      |'BusinessElement'
      |'ListEnabledGroup'
      |'ListFilter'

export type ExpsSetExecutionScale = 'Low'
      |'High'

export type ExpsSetInterfaceSourceType = 'PricingProcedure'
      |'QualificationProcedure'
      |'Sample'
      |'EventOrchestration'
      |'RatingProcedure'
      |'DiscoveryProcedure'
      |'Constraint'
      |'RatingDiscoveryProcedure'
      |'GpaCalculationProcedure'

export type ExpsSetStatus = 'Draft'
      |'Active'
      |'Inactive'
      |'InvalidDraft'
      |'Obsolete'

export type BusinessKnowledgeModel = 'CreditPoints'
      |'DebitPoints'
      |'IssueVoucher'
      |'IncreaseUsageForCumulativePromotion'
      |'UpdateUsageForCumulativePromotion'
      |'AssignParameterValues'
      |'RunFlow'
      |'GetOutputsFromDecisionTable'
      |'UpdatePointBalance'
      |'GetMemberPointBalance'
      |'GetMemberTier'
      |'BreAggregator'
      |'GetOutputsFromDecisionMatrix'
      |'GetMemberAttributesValues'
      |'UpdateCurrentValueForMemberAttribute'
      |'BreAggregatorAssignment'
      |'Crud'
      |'AssignBadgeToMember'
      |'CheckMemberBadgeAssignment'
      |'ChangeMemberTier'
      |'RunProgramProcess'
      |'GetMemberPromotions'
      |'TestCustomElement'
      |'AiAcceleratorSubscriberChurnPrediction'
      |'RedeemVoucher'
      |'ListPrice'
      |'PriceAdjustmentMatrix'
      |'SendMail'
      |'VolumeDiscount'
      |'GetUserData'
      |'ListGroupCalculation'
      |'RecordAlert'
      |'AutomatedClaimsProcessingValidation'
      |'EvaluateQualification'
      |'EvaluateCategoryQualification'
      |'EvaluateCategoryDisqualification'
      |'SampleBusinessElementWithContext'
      |'EvaluateDisqualification'
      |'SampleDynamicCustomElement'
      |'AttributeDiscount'
      |'GroupingAndAggregatePricing'
      |'ManualDiscount'
      |'SubscriptionPricing'
      |'Proration'
      |'BundleDiscount'
      |'ListGroup'
      |'StopPricing'
      |'PromotionsDiscount'
      |'RoundingValues'
      |'VolumeTierDiscount'
      |'SampleCustomElementWithExpressionAndListFilter'
      |'PricingSettings'
      |'ApexAction'
      |'DerivedPricing'
      |'RecordAction'
      |'IntegrationOrchestration'
      |'FormulaBasedPricing'
      |'ComplianceCheck'
      |'DiscountDistributionService'
      |'RatingVolumeDiscount'
      |'BaseRate'
      |'RatingAttributeDiscount'
      |'RatingSetting'
      |'RuleFetch'
      |'MapProduct'
      |'AssetDiscovery'
      |'RatingTierDiscount'
      |'AssignmentElement'
      |'ComplianceControlLog'
      |'CommercePricing'
      |'MinimumPrice'
      |'FormulaBasedRating'
      |'GroupingAndAggregateRating'
      |'RatingRoundingValues'
      |'StopRating'
      |'ManualRatingDiscount'
      |'RateAdjustmentMatrix'
      |'RateAssignment'
      |'PriceGuidance'
      |'RateCardResolution'
      |'RateCardEntryResolution'
      |'RateAdjustmentByTierResolution'
      |'Constraint'
      |'RateAdjustmentByAttributeResolution'
      |'ApexListAction'
      |'TermGpaCalculation'
      |'TermGpaReporting'
      |'MultiRecipientProductQualification'
      |'NegotiatedRateCardEntryResolution'
      |'UpsertRecord'
      |'NegotiatedBaseRate'
      |'BreakdownLineMapping'
      |'NegotiatedTierAdjustment'
      |'NegotiatedVolumeAdjustment'
      |'DiscoverySettings'

export type ExpsSetConditionOperator = 'Equals'
      |'NotEquals'
      |'GreaterThan'
      |'GreaterThanOrEquals'
      |'LessThan'
      |'LessThanOrEquals'
      |'Contains'
      |'DoesNotContain'
      |'IsNull'
      |'IsNotNull'

export type ExpsSetValueType = 'Literal'
      |'Parameter'
      |'PickList'
      |'Formula'
      |'Lookup'

export type ExpsSetAggregationFunction = 'Sum'
      |'Avg'
      |'Min'
      |'Max'
      |'ListSum'
      |'ListAvg'
      |'ListSize'

export type ExpsSetStepType = 'Condition'
      |'AdvancedCondition'
      |'Branch'
      |'DefaultPath'
      |'SubExpression'
      |'BusinessKnowledgeModel'
      |'ListGroup'
      |'ListFilter'
      |'AdvancedListFilter'

export type ExpsSetDataType = 'Text'
      |'Numeric'
      |'Date'
      |'DateTime'
      |'Sobject'
      |'Boolean'
      |'Percent'
      |'Currency'
      |'ActionOutput'
      |'SubExpression'
      |'DecisionMatrix'
      |'DecisionTable'
      |'Context'
      |'ContextNode'
      |'Picklist'

export type ExpsSetVariableLookupType = 'SubExpression'
      |'DecisionMatrix'
      |'DecisionTable'

export type ExpsSetVariableType = 'Variable'
      |'Constant'
      |'Formula'
      |'ExecutableContextDefinitionTag'
      |'ContextDynamicAttributeTag'

export type ExpsSetObjectDataType = 'sObject'
      |'JSON'

export type ExternalBotType = 'Chatbot'

export type ApplicationSourceType = 'REPLY_RECOMMENDATION'
      |'ARTICLE_RECOMMENDATION'
      |'UTTERANCE_RECOMMENDATION'
      |'FAQ'
      |'EAR_FOR_CONVERSATION'
      |'USE_CASE_EXPLORER'
      |'EAR_FOR_VOICE'
      |'COPILOT_UTTERANCE_ANALYSIS'
      |'FTEST'

export type ExternalModelStatus = 'ENABLED'
      |'DISABLED'
      |'PAUSED'

export type IdentityProviderAuthFlow = 'AuthorizationCode'
      |'ClientCredentials'
      |'JwtBearer'
      |'SalesforceDefined'

export type IdentityProviderAuthProtocol = 'OAuth'
      |'SalesforceDefined'

export type ExtlIdentityProviderParmType = 'AuthorizeUrl'
      |'TokenUrl'
      |'UrlQueryParameter'
      |'HttpHeader'
      |'ClientCertificate'
      |'SigningCertificate'
      |'RequestBodyParameter'
      |'JwtBodyClaim'
      |'JwtHeaderClaim'
      |'CreatedByNamespace'
      |'UserInfoUrl'
      |'ClientAuthentication'
      |'IdentityProviderOptions'
      |'AuthorizeRequestQueryParameter'
      |'TokenRequestQueryParameter'
      |'TokenRequestBodyParameter'
      |'TokenRequestHttpHeader'
      |'RefreshRequestQueryParameter'
      |'RefreshRequestBodyParameter'
      |'RefreshRequestHttpHeader'
      |'StandardExternalIdentityProvider'

export type ExtlClntAppDistState = 'Local'
      |'Packaged'
      |'Managed'
      |'AutoInstalled'

export type ExtlClntAppManagedType = 'Local'
      |'Global'

export type AuthenticationProtocol = 'NoAuthentication'
      |'Certificate'
      |'Oauth'
      |'Password'
      |'NTLM'
      |'AwsSv4'
      |'Jwt'
      |'JwtExchange'
      |'C2c'
      |'ApiKey'
      |'Custom'
      |'InternalOAuth'
      |'OrgJwt'
      |'Basic'

export type ExternalCredentialParamType = 'ParameterGroup'
      |'ExternalAuthIdentityProvider'
      |'AuthProvider'
      |'AuthProviderUrl'
      |'AuthProviderUrlQueryParameter'
      |'SigningCertificate'
      |'FormulaVariable'
      |'AuthProviderAuthParameter'
      |'AuthParameter'
      |'NamedPrincipal'
      |'PerUserPrincipal'
      |'AwsStsPrincipal'
      |'GlobalNamedPrincipal'
      |'SystemUserPrincipal'
      |'AuthContext'
      |'AuthQueryParameter'
      |'AuthHeader'
      |'AuthProtocolVariant'
      |'JwtBodyClaim'
      |'JwtHeaderClaim'
      |'CreatedByNamespace'
      |'AdditionalRefreshStatusCode'

export type DataConnectionStatus = 'Connected'
      |'Failed'
      |'Disconnected'

export type DataConnectorType = 'SalesforceMarketingCloud'
      |'SalesforceCommerceCloud'
      |'StreamingApp'
      |'SalesforceDotCom'
      |'AmazonS3'
      |'SFTP'
      |'UPLOAD'
      |'IngestApi'
      |'SalesforceInteractionStudio'
      |'CuratedEntity'
      |'DataCloud'
      |'GoogleCloudStorage'
      |'AzureBlob'
      |'ExternalPlatform'
      |'ConversationStorage'
      |'Snowflake'
      |'BIGQUERY'
      |'REDSHIFT'
      |'S3Arn'
      |'ACCOUNTENGAGEMENT'

export type AvailabilityStatus = 'Available'
      |'In_Use'

export type ExternalDataSrcDescSubtype = 'SchemaTableQualifiers'
      |'SchemaTableMetadata'

export type ExternalDataSrcDescType = 'Schema'

export type ExternalPrincipalType = 'Anonymous'
      |'PerUser'
      |'NamedUser'
      |'UserWithImpersonation'

export type ExternalDataSourceType = 'AFPPAttribute'
      |'Alert'
      |'AmazonAthena'
      |'AmazonDynamoDb'
      |'ASPAttribute'
      |'AssetAttribute'
      |'bcpApp'
      |'bcpAppMember'
      |'bcpEntity'
      |'bcpEntityPermission'
      |'bcpEntityPermSet'
      |'bcpField'
      |'bcpFieldPermission'
      |'bcpMember'
      |'bcpParticipant'
      |'bcpParticipantAccess'
      |'bcpPermissionSet'
      |'bcpRecAccApproval'
      |'bcpRecordAccess'
      |'bcpRelParticipant'
      |'ContentHubAWSS3'
      |'ContentHubBox'
      |'ContentHubGDrive'
      |'contentHubItem'
      |'ContentHubMock'
      |'ContentHubOneDriveGraph'
      |'ContentHubPerf'
      |'ContentHubQuip'
      |'ContentHubSharepointOffice365'
      |'ContentHubSharepointOneDrive'
      |'CryptoTrEnvChgLogSnp'
      |'Datacloud'
      |'Datajourney'
      |'DataMapperDS'
      |'Engagement'
      |'ExternalEvent'
      |'FAAttribute'
      |'FLAttribute'
      |'FlexCardDS'
      |'Ftest'
      |'GraphQl'
      |'IAItemProdtAttr'
      |'Identity'
      |'InsPolicyAttribute'
      |'IntegrationProcdDS'
      |'IPAAttribute'
      |'IPCAttribute'
      |'IPCvrBnftAttribute'
      |'IPPAttribute'
      |'Jigsaw'
      |'MbrPromotionsViewDS'
      |'OData'
      |'OData4'
      |'OData401'
      |'OIAttribute'
      |'OmniScriptDS'
      |'OpenSearch'
      |'OtbdEngmtTmplDS'
      |'outgoingemail'
      |'PrivacyCenterOrArchiveDataStore'
      |'PromoRuleTempDS'
      |'QLIAttribute'
      |'Salesforce'
      |'SAPAttribute'
      |'SciApi'
      |'SelectableEmailAddressView'
      |'SfdcOrg'
      |'SimpleURL'
      |'Snowflake'
      |'TrailheadEditWithId'
      |'usermobileconfig'
      |'usrconnectionstatus'
      |'Wrapper'

export type StorageDriveType = 'MicrosoftOneDrive'
      |'GoogleDrive'

export type TargetObject = 'All'
      |'Contract'
      |'DocumentTemplate'
      |'Disclosure'
      |'InfoLibraryExternalDocument'

export type ExternalServiceRegistrationProviderType = 'MuleSoft'
      |'Custom'
      |'SchemaInferred'
      |'Standard'
      |'ExternalConnector'
      |'Heroku'
      |'Anypoint'
      |'ApexRest'

export type ExtlClntAppStartPage = 'None'
      |'Custom'
      |'OAuth'
      |'SAML'

export type ScreenLockTimeout = 'Never'
      |'One'
      |'Five'
      |'Ten'
      |'Thirty'
      |'Sixty'
      |'OneTwenty'
      |'OneEighty'
      |'TwoForty'

export type PermittedUsersPolicyType = 'AllSelfAuthorized'
      |'AdminApprovedPreAuthorized'

export type PolicyAction = 'Block'
      |'RaiseSessionLevel'

export type RefreshTokenPolicyType = 'Infinite'
      |'Zero'
      |'SpecificLifetime'
      |'SpecificInactivity'

export type SessionSecurityLevel = 'LOW'
      |'STANDARD'
      |'HIGH_ASSURANCE'

export type ApplePushEnvironmentType = 'Sandbox'
      |'Production'

export type PushServiceType = 'Apple'
      |'Android'

export type ExtlClntAppSamlEncryptType = 'AES_128'
      |'AES_256'

export type ExtlClntAppNameIdFormatType = 'Unspecified'
      |'EmailAddress'
      |'Persistent'
      |'Transient'

export type ExtlClntAppSamlSignAlgoType = 'SHA1'
      |'SHA256'

export type ExtlClntAppSamlBindingType = 'RedirectBinding'
      |'PostBinding'

export type ExtlClntAppSamlSubjectType = 'Username'
      |'FederationId'
      |'UserId'
      |'SpokeId'
      |'CustomAttribute'
      |'PersistentId'

export type FeatureParameterDataflowDirection = 'LmoToSubscriber'
      |'SubscriberToLmo'
      |'Provisioned'

export type FieldMappingConfigProcessType = 'GiftEntry'
      |'Incident'
      |'Problem'
      |'ChangeRequest'

export type ClassificationType = 'ComplianceCategory'
      |'FieldSet'

export type EnforcementType = 'Scoping'
      |'Restrict'
      |'FieldRestrict'
      |'D360_Restrict'

export type ApptAssistantRadiusUnit = 'Kilometer'
      |'Meter'
      |'Mile'
      |'Yard'

export type MappingType = 'WorkPlans_WorkPlanTemplate_WorkPlan'
      |'WorkPlans_WorkStepTemplate_WorkStep'
      |'WorkPlans_WorkPlanTemplateEntry_WorkStep'

export type WorkOrderDurationSource = 'WorkType'
      |'TotalFromWorkPlan'
      |'Custom'

export type FieldSrcTrgtRelationshipOwner = 'SObject'
      |'DataCloud'

export type RelationshipCardinality = 'OneToOne'
      |'ManyToOne'

export type FileDownloadBehavior = 'DOWNLOAD'
      |'EXECUTE_IN_BROWSER'
      |'HYBRID'

export type FileType = 'UNKNOWN'
      |'PDF'
      |'POWER_POINT'
      |'POWER_POINT_X'
      |'POWER_POINT_M'
      |'POWER_POINT_T'
      |'WORD'
      |'WORD_X'
      |'WORD_M'
      |'WORD_T'
      |'PPS'
      |'PPSX'
      |'EXCEL'
      |'EXCEL_X'
      |'EXCEL_M'
      |'EXCEL_T'
      |'GOOGLE_DOCUMENT'
      |'GOOGLE_PRESENTATION'
      |'GOOGLE_SPREADSHEET'
      |'GOOGLE_DRAWING'
      |'GOOGLE_FORM'
      |'GOOGLE_SCRIPT'
      |'LINK'
      |'SLIDE'
      |'AAC'
      |'ACGI'
      |'AI'
      |'AMR'
      |'AVI'
      |'BMP'
      |'BOXNOTE'
      |'CSV'
      |'EPS'
      |'EXE'
      |'FLASH'
      |'GIF'
      |'GZIP'
      |'HTM'
      |'HTML'
      |'HTX'
      |'JPEG'
      |'JPE'
      |'PJP'
      |'PJPEG'
      |'JFIF'
      |'JPG'
      |'JS'
      |'JSON'
      |'MHTM'
      |'MHTML'
      |'MP3'
      |'M4A'
      |'M4V'
      |'MP4'
      |'MPEG'
      |'MPG'
      |'MOV'
      |'MSG'
      |'ODP'
      |'ODS'
      |'ODT'
      |'OGG'
      |'OGV'
      |'PNG'
      |'PSD'
      |'RTF'
      |'QUIPDOC'
      |'QUIPSHEET'
      |'QUIPCHAT'
      |'QUIPSLIDES'
      |'QUIPTEMPLATE'
      |'SHTM'
      |'SHTML'
      |'SNOTE'
      |'MCONTENT'
      |'STYPI'
      |'SVG'
      |'SVGZ'
      |'JPGZ'
      |'TEXT'
      |'THTML'
      |'USDZ'
      |'VISIO'
      |'VTT'
      |'WMV'
      |'WRF'
      |'XML'
      |'ZIP'
      |'XZIP'
      |'WMA'
      |'XSN'
      |'INSIGHT'
      |'TRTF'
      |'TXML'
      |'WEBVIEW'
      |'RFC822'
      |'ASF'
      |'DWG'
      |'JAR'
      |'XJS'
      |'OPX'
      |'XPSD'
      |'TIF'
      |'TIFF'
      |'WAV'
      |'CSS'
      |'THUMB720BY480'
      |'THUMB240BY180'
      |'THUMB120BY90'
      |'ALLTHUMBS'
      |'PAGED_FLASH'
      |'XMOB'
      |'PACK'
      |'C'
      |'CPP'
      |'WORDT'
      |'INI'
      |'JAVA'
      |'LOG'
      |'POWER_POINTT'
      |'SQL'
      |'XHTML'
      |'EXCELT'
      |'WEBP'
      |'AVIF'
      |'ICS'
      |'CAF'
      |'V3GP'
      |'V3G2'

export type FlexipageEventSourceTypeEnum = 'Component'

export type FlexipageEventTargetTypeEnum = 'FlexipageServices'
      |'LwcServices'
      |'InvocableApexServices'
      |'InvocableExternalServices'
      |'ActionServices'
      |'ViewServices'

export type RegionFlagStatus = 'disabled'
      |'enabled'

export type ComponentInstancePropertyTypeEnum = 'decorator'

export type ComponentInstanceType = 'Component'
      |'Card'

export type FlexipageDataSourceModeEnum = 'Create'
      |'Edit'
      |'View'

export type FlexipageDataSourceTypeEnum = 'Record'
      |'User'
      |'Organization'
      |'Apex'

export type FlexiPageRegionMode = 'Append'
      |'Prepend'
      |'Replace'

export type FlexiPageRegionType = 'Region'
      |'Facet'
      |'Background'

export type PlatformActionListContext = 'ListView'
      |'RelatedList'
      |'ListViewRecord'
      |'RelatedListRecord'
      |'Record'
      |'FeedElement'
      |'Chatter'
      |'Global'
      |'Flexipage'
      |'MruList'
      |'MruRow'
      |'RecordEdit'
      |'Photo'
      |'BannerPhoto'
      |'ObjectHomeChart'
      |'ListViewDefinition'
      |'Dockable'
      |'Lookup'
      |'Assistant'
      |'ActionDefinition'

export type PlatformActionType = 'QuickAction'
      |'StandardButton'
      |'CustomButton'
      |'ProductivityAction'
      |'ActionLink'
      |'InvocableAction'

export type FlexipageSchemaPropType = 'boolean'
      |'integer'
      |'string'

export type FlowComplexValueType = 'JoinDefinition'
      |'ElementAndFieldReference'

export type FlowDataType = 'Currency'
      |'Date'
      |'Number'
      |'String'
      |'Boolean'
      |'SObject'
      |'DateTime'
      |'Picklist'
      |'Multipicklist'
      |'Apex'

export type FlowTransformValueActionType = 'Map'
      |'Count'
      |'Sum'
      |'GetItemByIndex'
      |'InnerJoin'

export type FlowAssignmentOperator = 'None'
      |'Assign'
      |'Add'
      |'Subtract'
      |'AddItem'
      |'RemoveFirst'
      |'RemoveBeforeFirst'
      |'RemoveAfterFirst'
      |'RemoveAll'
      |'AddAtStart'
      |'RemoveUncommon'
      |'AssignCount'
      |'RemovePosition'

export type FlowComparisonOperator = 'None'
      |'EqualTo'
      |'NotEqualTo'
      |'GreaterThan'
      |'LessThan'
      |'GreaterThanOrEqualTo'
      |'LessThanOrEqualTo'
      |'StartsWith'
      |'EndsWith'
      |'Contains'
      |'IsNull'
      |'IsChanged'
      |'WasSet'
      |'WasSelected'
      |'WasVisited'
      |'In'
      |'NotIn'
      |'IsBlank'
      |'IsEmpty'

export type FlowRecordFilterOperator = 'EqualTo'
      |'NotEqualTo'
      |'GreaterThan'
      |'LessThan'
      |'GreaterThanOrEqualTo'
      |'LessThanOrEqualTo'
      |'StartsWith'
      |'EndsWith'
      |'Contains'
      |'IsNull'
      |'IsChanged'
      |'In'
      |'NotIn'

export type FlowStageStepAssigneeType = 'User'
      |'Group'
      |'Queue'
      |'Invalid'

export type FlowScheduledPathOffsetUnit = 'Hours'
      |'Days'
      |'Minutes'
      |'Months'
      |'Weeks'

export type FlowScheduledPathType = 'AsyncAfterCommit'

export type FlowScheduledPathTimeSource = 'RecordTriggerEvent'
      |'RecordField'

export type InvocableActionType = 'apex'
      |'chatterPost'
      |'contentWorkspaceEnableFolders'
      |'emailAlert'
      |'emailSimple'
      |'emailSObject'
      |'externalService'
      |'externalConnector'
      |'externalEvent'
      |'salesforceAPIPlatform'
      |'flow'
      |'metricRefresh'
      |'processCreateWorkitem'
      |'processStartStep'
      |'processStopInstance'
      |'processStopStep'
      |'quickAction'
      |'submit'
      |'thanks'
      |'thunderResponse'
      |'createServiceReport'
      |'deployOrchestration'
      |'createResponseEventAction'
      |'sfdcOutputAction'
      |'invokeOrchOutputFlow'
      |'generateWorkOrders'
      |'deactivateSessionPermSet'
      |'activateSessionPermSet'
      |'aggregateValue'
      |'orchestrationTimer'
      |'orchestrationDebugLog'
      |'choosePricebook'
      |'component'
      |'lwcComponent'
      |'liveMessageNotification'
      |'scaleCacheAsyncRefresh'
      |'skillsBasedRouting'
      |'addSkillRequirements'
      |'addScreenPop'
      |'findMatchingIndividuals'
      |'routeWork'
      |'scvOutboundCall'
      |'checkAvailabilityForRouting'
      |'createCustomField'
      |'assignTrailheadBadge'
      |'insightFeedback'
      |'publishKnowledgeArticles'
      |'routingAddressVerification'
      |'assignTargetToSalesCadence'
      |'removeTargetFromSalesCadence'
      |'modifyCadenceTrackerAttributes'
      |'invocableApplyLeadAssignmentRules'
      |'salesCadenceListenerBranchStepTranslator'
      |'pauseSalesCadenceTracker'
      |'resumeSalesCadenceTracker'
      |'changeSalesCadenceTargetAssignee'
      |'sendSalesCadenceEvent'
      |'selectTemplateForSalesCadenceStepTracker'
      |'assignKnowledgeArticles'
      |'createDraftFromOnlineKnowledgeArticle'
      |'archiveKnowledgeArticles'
      |'restoreKnowledgeArticleVersion'
      |'customNotificationAction'
      |'broadcastRenderSlackMsgPreview'
      |'submitDigitalFormResponse'
      |'contactRequestAction'
      |'saveAppointment'
      |'saveAppointmentInvitationDetails'
      |'createWaitlist'
      |'getAvailableTime'
      |'saveServiceAppointmentAttendees'
      |'fetchAppointmentInfo'
      |'scheduleAppointment'
      |'getAppointmentDetails'
      |'getServiceAppointments'
      |'createApptPaymentLink'
      |'deleteKnowledgeArticles'
      |'submitKnowledgeArticleForTranslation'
      |'einsteinEPLitePredictionAction'
      |'cartToOrderAction'
      |'orderToCartAction'
      |'activateOrderAction'
      |'refreshActualsCalculation'
      |'cancelAppointment'
      |'recalculateForecast'
      |'getBenefitAndCalculateRebateAmount'
      |'upsertCustomRebatePayout'
      |'calculateRebateAmountAndUpsertPayout'
      |'processRebatesBatchCalculationJob'
      |'generateRebatePayoutPeriods'
      |'calculateAdvancedAccountForecast'
      |'processAccountForecasts'
      |'managedContentReleasePublish'
      |'editQuipDocument'
      |'attachQuipDocumentToRecord'
      |'createQuipDocument'
      |'createQuipFolder'
      |'addUsersToQuipDocument'
      |'removeUsersFromQuipDocument'
      |'copyQuipDocument'
      |'addMessageToQuipDocument'
      |'addQuipDocumentToFolder'
      |'removeQuipDocumentFromFolder'
      |'createQuipChat'
      |'addMessageToQuipChat'
      |'addUsersToQuipChat'
      |'removeUsersFromQuipChat'
      |'copyQuipContent'
      |'lockQuipDocument'
      |'lockQuipSection'
      |'quipLivePaste'
      |'exportQuipDocumentToPdf'
      |'priceCart'
      |'cartInitiateAsyncStep'
      |'cartCompleteAsyncStep'
      |'cancelCartAsyncOperation'
      |'createCart'
      |'addCartItem'
      |'getCartItems'
      |'getCartPromotions'
      |'deleteCart'
      |'cancelFulfillmentOrderItem'
      |'createFulfillmentOrder'
      |'createInvoiceFromFulfillmentOrder'
      |'createFulfillmentOrders'
      |'captureFunds'
      |'createOrderPaymentSummary'
      |'cancelOrderItemSummariesPreview'
      |'cancelOrderItemSummariesSubmit'
      |'createCreditMemoOrderSummary'
      |'ensureFundsOrderSummaryAsync'
      |'ensureRefundsOrderSummaryAsync'
      |'returnOrderItemSummariesPreview'
      |'returnOrderItemSummariesSubmit'
      |'createReturnOrder'
      |'createOrderSummary'
      |'adjustOrderItemSummariesPreview'
      |'adjustOrderItemSummariesSubmit'
      |'addOrderItemSummarySubmit'
      |'distributePickedQuantities'
      |'createOrderFromQuote'
      |'placeSalesTransaction'
      |'createOrUpdateAssetFromOrder'
      |'createBillingScheduleFromOrderItem'
      |'changeFinancePeriodStatus'
      |'applyPayment'
      |'unapplyPayment'
      |'paymentSale'
      |'automateRefund'
      |'createInvoiceFromOrder'
      |'createOrUpdateAssetFromOrderItem'
      |'createContract'
      |'ociTransferReservation'
      |'ociReleaseReservation'
      |'ociGetAvailability'
      |'ociFulfillReservation'
      |'ociCreateReservation'
      |'ociUpdateReservation'
      |'orderRoutingRankByAverageDistance'
      |'orderRoutingFindRoutesWithFewestSplits'
      |'orderRoutingFindRoutesWithFewestSplitsUsingOCI'
      |'holdFulfillmentOrderCapacity'
      |'releaseHeldFulfillmentOrderCapacity'
      |'confirmHeldFulfillmentOrderCapacity'
      |'getFulfillmentOrderCapacityValues'
      |'print'
      |'exportSurveyResponses'
      |'checkoutSessionAction'
      |'checkCartInventoryAction'
      |'calcCartTaxesAction'
      |'calcCartShipmentAction'
      |'calcCartPromotionsAction'
      |'sendSurveyInvitation'
      |'publishPardotContent'
      |'storeReplyRecommendationsFeedback'
      |'marketingEmail'
      |'updateCheckoutSessionStateAction'
      |'massUpdateAccountForecast'
      |'massUpdateSalesAgreement'
      |'buildWarrantyClaimContext'
      |'decisionTableAction'
      |'runDecisionMatrix'
      |'createFinancialRecords'
      |'addWorkPlans'
      |'addWorkSteps'
      |'generateWorkPlans'
      |'deleteWorkPlans'
      |'pardotGetListx'
      |'pardotAddToListMembership'
      |'getTier'
      |'changeTier'
      |'changeAllTierOrNone'
      |'getPointsBalance'
      |'updateAcctMgrTarget'
      |'creditPoints'
      |'debitPoints'
      |'batchJobAction'
      |'dataProcessingEngineAction'
      |'adjustPointsAction'
      |'cancelRedemption'
      |'cancelAccrual'
      |'addRebateMemberList'
      |'saveRecommendationDecision'
      |'outboundMessage'
      |'internalTestAction'
      |'internalTestAsyncAction'
      |'internalTestConnectApiAction'
      |'internalTestVersionedCustomAction'
      |'internalTestCustomAction'
      |'getDialerSoftphonePathSuffix'
      |'performMultiLevelRollups'
      |'rebatesProcessCSV'
      |'processMemberBenefitAction'
      |'assignMemberTierBenefits'
      |'dynamicSendSurveyInvitation'
      |'getIntelligentAccountSettingsToken'
      |'issueVoucher'
      |'setCheckoutDeliveryMethod'
      |'refreshDecisionTable'
      |'replaceAsset'
      |'relocateAsset'
      |'evaluationFlow'
      |'stepInteractive'
      |'stepBackground'
      |'stepMuleSoft'
      |'managedContentRoleStepInteractive'
      |'managedContentVariantSetLockStepBackground'
      |'managedContentVariantSetReadyStepBackground'
      |'managedContentVariantAutoPublishStepBackground'
      |'managedContentVariantAutoUnpublishStepBackground'
      |'stepApproval'
      |'generateKnowledgeLogData'
      |'submitFailedRecordsBatchJob'
      |'getEligibleProgramRebateTypes'
      |'returnReturnOrderItems'
      |'slackPostMessage'
      |'slackUpdateMessage'
      |'slackPinMessage'
      |'slackCreateChannel'
      |'slackInviteUsersToChannel'
      |'slackUserInChannel'
      |'slackUserInWorkspace'
      |'slackCheckUsersAreConnectedToSlack'
      |'slackArchiveChannel'
      |'slackInviteUserToWorkspace'
      |'slackGetConversationInfo'
      |'slackAgentCreateCanvas'
      |'slackAgentUpdateCanvas'
      |'slackAgentSearch'
      |'slackAgentGetUser'
      |'slackAgentSendDirectMessage'
      |'getLoyaltyPromotionBasedOnSalesforceCDP'
      |'transferMemberPointsToGroups'
      |'getLoyaltyPromotion'
      |'createServiceDocument'
      |'createArticleRecommendations'
      |'discoveryPredict'
      |'processProgramRebateTypeProducts'
      |'fetchCaseClassificationRecommendations'
      |'applyCaseClassificationRecommendations'
      |'updateProgressForCumulativePromotionUsage'
      |'updateAdvancedAccountForecastSetPartner'
      |'swarmingCollaborationToolSettings'
      |'getArticleSmartLinkUrl'
      |'performSurveySentimentAnalysis'
      |'pardotSlackCompletionActionNotification'
      |'createClosePlan'
      |'getProductPricing'
      |'findPastCollaborators'
      |'getDataRelatedToOpportunity'
      |'calculateProjectedRebateAmount'
      |'runProgramProcessForTransactionJournal'
      |'goalAchievedAction'
      |'buildIdentityVerification'
      |'getVerificationData'
      |'sendNotification'
      |'uploadBlockchainData'
      |'saveMemberVerificationSteps'
      |'limitRepetitions'
      |'slackSendMessageToLaunchFlow'
      |'manageRecurringSchedules'
      |'importRecordsFromCsvFile'
      |'authorizePayment'
      |'getMemberActiveSegments'
      |'getAvailableSwarmObject'
      |'runExpressionSet'
      |'mergeLoyaltyProgramMembership'
      |'unmergeLoyaltyProgramMembership'
      |'massUpdateAdvAccountForecast'
      |'runProgramProcess'
      |'getAssessmentResponseSummary'
      |'industriesSendApexAsyncRequest'
      |'slackJoinChannel'
      |'createInvoiceFromChangeOrders'
      |'generateInboxSchedulingLink'
      |'generateInboxMeetingTimes'
      |'confirmInboxMeetingTime'
      |'sendEmailMessage'
      |'goToCadenceStep'
      |'createBenefitDisbursement'
      |'createCareProgramEnrolleeWorkOrderStep'
      |'generateTransactionJournals'
      |'cdpRefreshDataStream'
      |'dataKitDeployComponentAction'
      |'dataKitGetComponentAction'
      |'generateMemberReferralCode'
      |'cdpPublishSegment'
      |'cdpValidateSegmentMember'
      |'industriesSendExtAsyncRequest'
      |'getDataCategoryDetails'
      |'getDataCategoryGroups'
      |'searchKnowledgeArticles'
      |'knowledgeSearch'
      |'answerQuestionsWithSalesforceDocumentation'
      |'cdpPublishCalculatedInsight'
      |'cdpRunBatchTransform'
      |'cdpGetMlPrediction'
      |'cdpMlPrediction'
      |'einsteinRagDetectLanguage'
      |'transformQueryForCase'
      |'transformQueryForEmail'
      |'transformQueryForConversation'
      |'getEinsteinRetrieverResults'
      |'cdpGetDataGraph'
      |'cdpTriggerModelPredJob'
      |'scheduleHomeVisit'
      |'scheduleRecurringHomeVisit'
      |'rescheduleRecurringHomeVisits'
      |'createQuoteForHomeVisits'
      |'generateAssessmentEnvelopeSignature'
      |'sendChannelMessage'
      |'createInvRsvForCart'
      |'deleteInvRsvForCart'
      |'initiateTextExtraction'
      |'fetchActiveOcrTemplates'
      |'fetchExtractedText'
      |'createMaterialLineForSalesItem'
      |'generateDisambiguationLogData'
      |'cdpRunIdentityResolution'
      |'handleResourceAbsence'
      |'fetchRebateClaimDetails'
      |'getNewProductPricingInfo'
      |'calcPriceProtectPayoutAmt'
      |'processGiftEntries'
      |'saveCustomFieldsInGiftEntry'
      |'processGiftCommitment'
      |'pauseGiftCommitmentSchedule'
      |'resumeGiftCommitmentSchedule'
      |'closeGiftCommitment'
      |'syncAccountAndContactPointAddr'
      |'manageCustomGiftCmtSchds'
      |'manageGiftDefaultDesignations'
      |'manageRcrGiftCmtSchd'
      |'updateProcessedGiftEntries'
      |'createEnrichedPrompt'
      |'manageFundraisingDefinitions'
      |'assignEnablementProgram'
      |'inviteToReorderPortal'
      |'runRecordAggrBatchProcDef'
      |'sendSmsMessage'
      |'creaContactsFromGrpCensMembers'
      |'creaPersAccountsFromGrpCensMbr'
      |'creaUsersFromGrpCensusMembers'
      |'enrollMembers'
      |'createProducerCommissions'
      |'findInsurancePolicy'
      |'initiateAmendQuantity'
      |'initiateAmendment'
      |'initiateRenewal'
      |'initiateCancellation'
      |'manageGiftTrxnDesignations'
      |'processReceivedDocument'
      |'getEffAccountsForStoreUser'
      |'getProductRecommendations'
      |'b2bD2cGetOrderSummaries'
      |'getB2cProductRecommendations'
      |'getB2cOrderDetails'
      |'generateOrderSummaryUrl'
      |'createBenefitDisbursementForServiceAppointment'
      |'getAssessments'
      |'getAcademicTerm'
      |'getIntrctnSumAndCarePlans'
      |'getCalcInsightsData'
      |'renewInsurancePolicy'
      |'enrollLearner'
      |'executeExprSetWithContext'
      |'buildContext'
      |'createClmContract'
      |'createReport'
      |'checkInContractDocumentVersion'
      |'performContractAction'
      |'sendContractForESignature'
      |'unlockContractDocumentVersion'
      |'getCntntDocDtlForCntrDocVer'
      |'createContractDocumentVersion'
      |'persistContextData'
      |'createReferral'
      |'createChatSession'
      |'addOrderToCart'
      |'generateUserInputs'
      |'rateProducts'
      |'getInsuranceQuoteDetails'
      |'repriceInsuranceProduct'
      |'createInsuranceQuote'
      |'updateCareGapStatus'
      |'sendConversationMessages'
      |'initiateNaturalLangProcessing'
      |'getRecordDetails'
      |'getConversationTranscripts'
      |'fetchBoostBuryRuleRecommendation'
      |'createSearchBoostBuryRule'
      |'captureUserFeedback'
      |'previewCartToExchangeOrder'
      |'submitCartToExchangeOrder'
      |'dispatchReminders'
      |'computeCleanEnergyApplnBen'
      |'identifyRecordByName'
      |'processReferralEvent'
      |'submitOrder'
      |'dataCloudIngestionApi'
      |'getPaynowWebstoreId'
      |'queryRecords'
      |'queryRecordsWithAggregate'
      |'registerGuestBuyer'
      |'identifyObject'
      |'scheduleGroupVisits'
      |'createSubscriptionRecords'
      |'generatePromptResponse'
      |'getRelatedList'
      |'webSearch'
      |'getSimilarRecords'
      |'einsteinGenerateMessages'
      |'draftOrReviseEmail'
      |'sendMeetingRequest'
      |'reviewMyDay'
      |'summarizeRecord'
      |'einsteinCopilotUpdateRecord'
      |'einsteinCopilotCreateRecord'
      |'runSalesforcePricing'
      |'processFirstPaymentBilling'
      |'runSalesforceHeadlessPricing'
      |'dstrEnergyAttrCertCredits'
      |'getRecordFieldsAndValues'
      |'createCommercePromotions'
      |'createIntegrationPlan'
      |'runIntegrationPlan'
      |'exploreConversation'
      |'draftServiceEmail'
      |'getActivitySummary'
      |'generateResearchStudyBlocks'
      |'processCriteriaMatchingResp'
      |'getForecastGuidance'
      |'getForecastContext'
      |'getForecastOpportunities'
      |'getRecPrioData'
      |'sendWhatsAppMessage'
      |'lockRecord'
      |'postDraftInvoiceBatchRun'
      |'assignCndtToResearchStudyGroup'
      |'postDraftInvoice'
      |'getConvTscpForRecord'
      |'recoverBillingSchedules'
      |'checkOutContractDocVersion'
      |'getContractDocumentVersions'
      |'updateClmContracts'
      |'draftAGiftProposal'
      |'processDataUsingGenAi'
      |'transformNlpActionResult'
      |'getSalesAgreementDetails'
      |'createConsent'
      |'exportExternalRecordShare'
      |'checkServiceCatalogItemEligibility'
      |'createOrUpdtSvcCatalogRequest'
      |'createCatalogItemRequest'
      |'answerQuestionWithReports'
      |'createEngagementsDetailsRep'
      |'createBillingSchedulesFromBillingTransaction'
      |'scheduleHomeVisitsManually'
      |'analyticsSendDigestAsSlackMsg'
      |'createUpdtPromUseAcruPromTmpl'
      |'generateLoyaltyPromotionEmail'
      |'getResourcesForMnlScheduling'
      |'summarizeMedicationDetailsForPatient'
      |'generateAnalyticsAssetsContent'
      |'quoteToSA'
      |'convertRecord'
      |'getEngagements'
      |'getFinclAccountsForAnAcct'
      |'getFeeTrxnFromFinclAcct'
      |'createCaseForFeeReversal'
      |'api'
      |'getDataForGrounding'
      |'getActivityDetails'
      |'pauseAds'
      |'getLowPerformingAds'
      |'getCampaignObjectives'
      |'getChannelTypes'
      |'getMetrics'
      |'getActivitiesTimeline'
      |'getBalancesFromFinancialAccounts'
      |'getFinancialTransactions'
      |'getCardDetailsForAccount'
      |'createCaseToBlockCard'
      |'createVisitForContextRecord'
      |'getFinancialAccountAddresses'
      |'createCaseForFinclAcctAddrUpdt'
      |'getAndExplainObjectPermissions'
      |'summarizeAppointmentNotes'
      |'serializePreWorkBriefRecords'
      |'summaryRefinement'
      |'generateBrief'
      |'saveBrief'
      |'generateCampaignFromBrief'
      |'saveCampaign'
      |'summarizeCampaign'
      |'generateOrRefineTextForProperty'
      |'createOrRefineSectionWithContent'
      |'summarizeMedicalHistoryForPatient'
      |'researchRecord'
      |'reviewBuyingCommittee'
      |'getCaseInfoToSummarize'
      |'getUsersFromEmailAddresses'
      |'discoverySearchAction'
      |'einsteinDecidePath'
      |'dplyCustExprcIntelDataKitCmpnt'
      |'generateCustomReportType'
      |'associateRecordsWithActivity'
      |'getAcctOpptyFromEmailAddr'
      |'trgrOnOrderPlacement'
      |'trgrOnWebCartAbandoned'
      |'processWebStoreUserRgstr'
      |'trgrOnSmsSubscription'
      |'trgrOnWhatsAppSubscription'
      |'trgrOnEmailSubscription'
      |'trgrOnEmailOpenEngagement'
      |'trgrOnEmailLinkClickEngagement'
      |'trgrOnEmailBounceEngagement'
      |'trgrOnSmsLinkClickEngagement'
      |'trgrOnSmsDeliveryFailureEngagement'
      |'trgrOnSmsResponseEngagement'
      |'trgrOnWhatsAppResponseEngmt'
      |'trgrOnWhatsAppReadEngagement'
      |'trgrOnWhatsAppDeliveredEngagement'
      |'trgrOnWhatsAppLinkClickEngmt'
      |'trgrOnWhatsAppDlvrFailureEngmt'
      |'explainFormula'
      |'modifyFormula'
      |'validateFormula'
      |'publishActionableOrchSrcEvent'
      |'createApptListFilter'
      |'summarizeSchedulingIssues'
      |'getAppointmentsToFillGaps'
      |'assignApptForServiceResourceForFieldService'
      |'scheduleServiceAppointment'
      |'computeProducerSplits'
      |'generateInvoiceDocuments'
      |'forwardToBotOrAgent'
      |'lookUpOrderSummary'
      |'getBusinessObjectives'
      |'formatInsightsForDisplay'
      |'contextDataProvider'
      |'prepareMeeting'
      |'getAssetParticipantDetails'
      |'recallApprovalSubmission'
      |'reassignApprovalWorkItem'
      |'reviewApprovalWorkItem'
      |'overrideApprovalWorkItem'
      |'cancelApprovalSubmission'
      |'getCommercePromotionTemplates'
      |'recommendFields'
      |'identifyObjectByName'
      |'getContcLeadsFromEmailAddr'
      |'trgrOnFormSubmission'
      |'trgrOnPaymentTransaction'
      |'invokeRatingService'
      |'recordTaxTransaction'
      |'recordTaxReversal'
      |'applyCredit'
      |'unapplyCredit'
      |'createFieldGnrnPromptTmplResp'
      |'validateTimesheet'
      |'applyUserDefinedLabel'
      |'createAToDo'
      |'createLabel'
      |'logACall'
      |'recommendComponents'
      |'draftCaseResponse'
      |'findSimilarCases'
      |'summarizeEngagement'
      |'getProductDetails'
      |'groundingDataGenerator'
      |'findProducts'
      |'getProducts'
      |'identifySObjectFieldProperties'
      |'configureAgents'
      |'scheduleEmail'
      |'getAppointmentBookingSlots'
      |'convertTimeZone'
      |'updateAppointmentTimes'
      |'getNewServiceAppointment'
      |'getAndExplainUserPermissions'
      |'computeConsumption'
      |'createConsumptionAlert'
      |'replenishInventoryUsingPolicy'
      |'issueInsurancePolicy'
      |'getCommerceStorefrontContext'
      |'getRecordSummarizationPrompt'
      |'findSimilarInteractions'
      |'summarizeProductReviews'
      |'getActiveApplicationReviewerIds'
      |'dataModelSMEGenerateRequirementSection'
      |'dataModelSMEGenerateDesignSection'
      |'dataModelSMEGenerateBacklogSection'
      |'dataModelSMECreateCustomMetadata'
      |'submitSalesTransaction'
      |'convertProspect'
      |'migrateConnectedApp'
      |'summarizeConnectedApp'
      |'evalCmplValidationProcedure'
      |'processConsumptionOverages'
      |'analyzeMetric'
      |'generateMetricInsights'
      |'refineSemanticSubMetric'
      |'analyzeSemanticDataModel'
      |'serializeHierarchicalContextData'
      |'getContextData'
      |'generateAiAgentResponse'
      |'freezeSalesTransaction'
      |'invokeRule'
      |'endorseInsurancePolicy'
      |'savePaymentConfig'
      |'unfreezeSalesTransaction'
      |'identifyFieldByName'
      |'getPersonalizationDecisions'
      |'cancelInsurancePolicy'
      |'getInsurancePolicy'
      |'queryContextTags'
      |'updateContextAttributes'
      |'deleteContextCache'
      |'getRecordAccessOfUser'
      |'getPointOfNoReturnDetails'
      |'rpa'
      |'startRpaFlow'
      |'scheduleSvcApptActnblEvntOrch'
      |'trgrOnVoucherStsChgOtbdEngmt'
      |'getGrndDataServiceRepliesEmail'
      |'createOrderServiceAccount'
      |'refreshUsageEntitlementBucket'
      |'getLeaveBalance'
      |'getGroupCensusMembers'
      |'validateGroupCensusMembers'
      |'saveGroupCensusMembersData'
      |'createServiceRequestCase'
      |'invokeSummaryCreationService'
      |'identifyUserPermissionsByName'
      |'getAgentConvTscp'
      |'parseConvoAnalysis'
      |'generateVerificationCode'
      |'verifyCustomerCode'
      |'getSvcProcessAttrData'
      |'convertDateToDateTime'
      |'createBulkRecords'
      |'enhanceProductDescription'
      |'flexipageRefineRequirements'
      |'flexipageRefineDesign'
      |'flexipageRefinePlan'
      |'flexipageExecutePlan'
      |'createUpdatePromUseSpendXTmpl'
      |'createUpdatePromUseBuyXTmpl'
      |'aslmHeadlessPricing'
      |'raiseFlag'
      |'apexRest'

export type FlowScreenFieldType = 'DisplayText'
      |'InputField'
      |'LargeTextArea'
      |'PasswordField'
      |'RadioButtons'
      |'DropdownBox'
      |'MultiSelectCheckboxes'
      |'MultiSelectPicklist'
      |'ComponentInstance'
      |'ComponentInput'
      |'ComponentChoice'
      |'ComponentMultiChoice'
      |'ComponentDisplay'
      |'Repeater'
      |'RegionContainer'
      |'Region'
      |'ObjectProvided'

export type FlowScreenFieldInputsRevisited = 'UseStoredValues'
      |'ResetValues'

export type FlowRegionContainerType = 'SectionWithHeader'
      |'SectionWithoutHeader'

export type FlowElementSubtype = 'SortCollectionProcessor'
      |'RecommendationMapCollectionProcessor'
      |'FilterCollectionProcessor'
      |'WaitDate'
      |'WaitUntilEvent'
      |'WaitAttribute'
      |'WaitDuration'
      |'InteractiveStep'
      |'BackgroundStep'
      |'MuleSoftStep'
      |'ManagedContentRoleInteractiveStep'
      |'ManagedContentVariantSetLockBackgroundStep'
      |'ManagedContentVariantSetReadyBackgroundStep'
      |'ManagedContentVariantAutoPublishBackgroundStep'
      |'ManagedContentVariantAutoUnpublishBackgroundStep'
      |'AddPromptInstructions'
      |'ApprovalStep'

export type FlowWaitInteractionType = 'SmsResponse'
      |'WhatsappResponse'

export type RecordTriggerType = 'Update'
      |'Create'
      |'CreateAndUpdate'
      |'Delete'
      |'None'

export type FlowCollectionProcessorType = 'SortCollectionProcessor'
      |'RecommendationMapCollectionProcessor'
      |'FilterCollectionProcessor'

export type FlowExperimentType = 'Random'
      |'Manual'
      |'Automatic'

export type IterationOrder = 'Asc'
      |'Desc'

export type FlowEntryType = 'Always'
      |'AfterCompletion'

export type FlowRunAsUser = 'TriggeringUser'
      |'DefaultWorkflowUser'

export type FlowStartFrequency = 'OnActivate'
      |'Once'
      |'Daily'
      |'Weekly'

export type FlowTriggerType = 'None'
      |'Scheduled'
      |'RecordBeforeSave'
      |'RecordBeforeDelete'
      |'RecordAfterSave'
      |'PlatformEvent'
      |'EventDrivenJourney'
      |'Segment'
      |'DataCloudDataChange'
      |'FormSubmissionEvent'
      |'Capability'
      |'AutomationEvent'
      |'ExternalSystemChange'
      |'DataGraphDataChange'

export type FlowTransactionModel = 'Automatic'
      |'NewTransaction'
      |'CurrentTransaction'

export type FlowEnvironment = 'Default'
      |'Slack'
      |'Offline'

export type FlowRunInMode = 'DefaultMode'
      |'SystemModeWithSharing'
      |'SystemModeWithoutSharing'

export type FlowVersionStatus = 'Active'
      |'Draft'
      |'Obsolete'
      |'InvalidDraft'

export type FlowTestParameterType = 'InputTriggeringRecordInitial'
      |'InputTriggeringRecordUpdated'
      |'ScheduledPath'

export type FolderAccessTypes = 'Shared'
      |'Public'
      |'Hidden'
      |'PublicInternal'

export type FolderShareAccessLevel = 'View'
      |'EditAllContents'
      |'Manage'

export type FolderSharedToType = 'Group'
      |'Role'
      |'RoleAndSubordinates'
      |'RoleAndSubordinatesInternal'
      |'Manager'
      |'ManagerAndSubordinatesInternal'
      |'Organization'
      |'Territory'
      |'TerritoryAndSubordinates'
      |'AllPrmUsers'
      |'User'
      |'PartnerUser'
      |'AllCspUsers'
      |'CustomerPortalUser'
      |'PortalRole'
      |'PortalRoleAndSubordinates'
      |'ChannelProgramGroup'

export type PublicFolderAccess = 'ReadOnly'
      |'ReadWrite'

export type ForecastingDateType = 'OpportunityCloseDate'
      |'ProductDate'
      |'ScheduleDate'
      |'OLIMeasureCloseDateOnly'
      |'ProductDateOnly'
      |'ScheduleDateOnly'
      |'OpportunityCustomDate'
      |'OLIMeasureOppCustomDateOnly'

export type DonorMatchingMethod = 'Duplicate_Management_Rules'
      |'No_Matching'

export type PlannerFunctionInvocableTargetType = 'apex'
      |'flow'
      |'standardInvocableAction'
      |'generatePromptResponse'
      |'externalService'
      |'quickAction'
      |'createCatalogItemRequest'
      |'api'
      |'apexRest'

export type PlannerAttrMappingType = 'input'
      |'output'

export type AttributeType = 'CustomPluginFunctionAttribute'
      |'StandardPluginFunctionInput'
      |'StandardPluginFunctionOutput'

export type AttributeMappingType = 'ActionAttribute'
      |'Constant'
      |'Variable'
      |'ContextVariable'

export type PluginType = 'Topic'

export type GenAiAgentVariableType = 'Variable'
      |'ContextVariable'
      |'Attribute'

export type GenAiRuleExpressionOperator = 'equal'
      |'greaterThan'
      |'greaterThanOrEqual'
      |'lessThan'
      |'lessThanOrEqual'
      |'notEqual'
      |'isEmpty'
      |'isNotEmpty'

export type ExpressionType = 'sel'
      |'handlebars'

export type PlannerType = 'AiCopilot__SequentialPlannerIntentClassifier'
      |'AiCopilot__ReAct'
      |'Atlas__SimpleReflective'
      |'Atlas__Reflective'
      |'Atlas__ConcurrentMultiAgentOrchestration'

export type GenAiPromptTemplateStatus = 'Published'
      |'Draft'

export type GenAiPromptTemplateVisibilityType = 'Locked'
      |'Internal'
      |'API'
      |'Global'

export type GenAiPromptTemplateActvAccessLevel = 'Allowed'
      |'Blocked'

export type PageComponentType = 'links'
      |'htmlArea'
      |'imageOrNote'
      |'visualforcePage'

export type PageComponentWidth = 'narrow'
      |'wide'

export type IPAddressFeature = 'EmailIpFiltering'

export type IPAddressUsageScope = 'Exclusion'
      |'Inclusion'

export type IconUsageType = 'PersonLifeEvent'
      |'InsurancePolicy'
      |'BusinessMilestone'
      |'Interaction'
      |'AssetMilestone'
      |'FinancialAccountMilestone'

export type IdentityVerificationDataSourceType = 'Salesforce'
      |'External'

export type IdentityVerificationProcFldDataSourceType = 'Salesforce'
      |'External'

export type IdentityVerificationProcFldFieldDataType = 'address'
      |'checkbox'
      |'currency'
      |'dateonly'
      |'datetime'
      |'email'
      |'number'
      |'percent'
      |'phone'
      |'picklist'
      |'reference'
      |'text'
      |'timeonly'
      |'url'
      |'other'

export type IdentityVerificationProcFldFieldType = 'requiredVerifier'
      |'optionalVerifier'
      |'searchField'
      |'resultField'
      |'additionalResultField'
      |'searchFilter'

export type IdentityVerificationSearchType = 'Text-Based'
      |'Object-Based'

export type IdentityVerificationSearchLayoutType = 'Tab'
      |'Stack'

export type IFrameWhitelistContext = 'VisualforcePages'
      |'Surveys'
      |'DCH_ADDIN_APP'

export type ExternalConnectionType = 'AwsPrivateLink'
      |'DataCloudPrivateConnection'

export type InboundConnPropertyName = 'LinkId'
      |'Region'
      |'AwsVpcEndpointId'
      |'SourceIpRanges'

export type ExternalConnectionStatus = 'Unprovisioned'
      |'Allocating'
      |'PendingAcceptance'
      |'PendingActivation'
      |'RejectedRemotely'
      |'DeletedRemotely'
      |'TeardownInProgress'
      |'Ready'

export type InsPolicyLifecycleProcess = 'Renew_Same_Carrier'
      |'Renew_Different_Carrier'
      |'Repurpose'
      |'Endorse'
      |'Cancel'

export type InsRatePlanCmsnConfigCalcType = 'Flat'
      |'Graded'

export type AttrDataType = 'String'
      |'Integer'
      |'Double'
      |'Date'
      |'DateTime'
      |'Percentage'
      |'Boolean'

export type DefinitionType = 'Apex'
      |'LowCode'
      |'Java'

export type KnowledgeCaseEditor = 'simple'
      |'standard'

export type KnowledgeLanguageLookupValueType = 'User'
      |'Queue'

export type FeedLayoutFilterPosition = 'CenterDropDown'
      |'LeftFixed'
      |'LeftFloat'

export type FeedLayoutFilterType = 'AllUpdates'
      |'FeedItemType'
      |'Custom'

export type FeedLayoutComponentType = 'HelpAndToolLinks'
      |'CustomButtons'
      |'Following'
      |'Followers'
      |'CustomLinks'
      |'Milestones'
      |'SimilarCases'
      |'CaseExperts'
      |'Topics'
      |'CaseUnifiedFiles'
      |'Visualforce'

export type LayoutHeader = 'PersonalTagging'
      |'PublicTagging'

export type UiBehavior = 'Edit'
      |'Required'
      |'Readonly'

export type ReportChartComponentSize = 'SMALL'
      |'MEDIUM'
      |'LARGE'

export type LayoutSectionStyle = 'TwoColumnsTopToBottom'
      |'TwoColumnsLeftToRight'
      |'OneColumn'
      |'CustomLinks'

export type SummaryLayoutStyle = 'Default'
      |'QuoteTemplate'
      |'DefaultQuoteTemplate'
      |'ServiceReportTemplate'
      |'ChildServiceReportTemplateStyle'
      |'DefaultServiceReportTemplate'
      |'CaseInteraction'
      |'QuickActionLayoutLeftRight'
      |'QuickActionLayoutTopDown'
      |'PathAssistant'

export type VisibleOrRequired = 'VisibleOptional'
      |'VisibleRequired'
      |'NotVisible'

export type LetterheadHorizontalAlignment = 'None'
      |'Left'
      |'Center'
      |'Right'

export type LetterheadVerticalAlignment = 'None'
      |'Top'
      |'Middle'
      |'Bottom'

export type LifeSciAssignmentLevel = 'Profile'
      |'User'

export type LifeSciConfigCategoryType = 'DbSchema'
      |'UISchema'
      |'BlacklistEntity'
      |'NavigationIcons'
      |'ApplicationSettings'
      |'SetupTestCategory'
      |'TerritoryManagement'
      |'ProfileBasedAppSettings'
      |'SyncTransactionConfig'
      |'LogSettings'
      |'AccountDynamicListConfiguration'
      |'AccountSearchSettings'
      |'AccountFilterConfig'

export type LifeSciConfigFieldDataType = 'TEXT'
      |'LONGTEXT'
      |'NUMBER'
      |'BOOLEAN'
      |'INTEGER'
      |'DATE'
      |'DATETIME'
      |'PHONE'
      |'PICKLIST'
      |'URL'
      |'OBJECT'
      |'FIELD'

export type LightningBoltCategory = 'Communications'
      |'Education'
      |'FinancialServices'
      |'Government'
      |'HealthcareLifeSciences'
      |'Manufacturing'
      |'Media'
      |'Nonprofits'
      |'ProfessionalServices'
      |'RealEstate'
      |'Retail'
      |'TravelTransportationHospitality'
      |'HighTech'
      |'GeneralBusiness'

export type LightningDesignSystemVersion = 'SLDS_v1'
      |'SLDS_v2'

export type SupervisorAgentStatusFilter = 'Online'
      |'Away'
      |'Offline'

export type LiveChatButtonPresentation = 'Slide'
      |'Fade'
      |'Appear'
      |'Custom'

export type LiveChatButtonInviteEndPosition = 'TopLeft'
      |'Top'
      |'TopRight'
      |'Left'
      |'Center'
      |'Right'
      |'BottomLeft'
      |'Bottom'
      |'BottomRight'

export type LiveChatButtonInviteStartPosition = 'TopLeft'
      |'TopLeftTop'
      |'Top'
      |'TopRightTop'
      |'TopRight'
      |'TopRightRight'
      |'Right'
      |'BottomRightRight'
      |'BottomRight'
      |'BottomRightBottom'
      |'Bottom'
      |'BottomLeftBottom'
      |'BottomLeft'
      |'BottomLeftLeft'
      |'Left'
      |'TopLeftLeft'

export type LiveChatButtonRoutingType = 'Choice'
      |'LeastActive'
      |'MostAvailable'

export type LiveChatButtonType = 'Standard'
      |'Invite'

export type SensitiveDataActionType = 'Remove'
      |'Replace'

export type SensitiveDataRuleProcessing = 'Persist'
      |'RealTime'

export type SensitiveDataRuleVersion = 'ONE'
      |'TWO'

export type LoyaltyPgmProcExecutionType = 'RealTime'
      |'Batch'
      |'BatchAndRealTime'

export type LoyaltyPgmProcCondOperator = 'Equals'
      |'NotEquals'
      |'GreaterThan'
      |'GreaterThanOrEquals'
      |'LessThan'
      |'LessThanOrEquals'
      |'Contains'
      |'DoesNotContain'
      |'IsNull'
      |'IsNotNull'

export type LoyaltyPgmProcCondType = 'Literal'
      |'Parameter'
      |'Formula'
      |'Lookup'

export type LoyaltyPgmProcRuleType = 'Condition'
      |'Action'
      |'ConditionGroup'
      |'DefaultPath'

export type LoyaltyPgmProcParmDataType = 'Text'
      |'Numeric'
      |'Date'
      |'DateTime'
      |'Sobject'
      |'Boolean'

export type LoyaltyPgmProcParmType = 'Variable'
      |'Constant'
      |'Formula'

export type LoyaltyPgmProcActParamOper = 'Equals'

export type LoyaltyPgmProcActParamType = 'Literal'
      |'Parameter'

export type LoyaltyPgmProcActionType = 'CreditPoints'
      |'DebitPoints'
      |'IssueVoucher'
      |'IncreaseUsageForCumulativePromotion'
      |'UpdateUsageForCumulativePromotion'
      |'AssignParameterValues'
      |'RunFlow'
      |'GetOutputsFromDecisionTable'
      |'UpdatePointBalance'
      |'GetMemberPointBalance'
      |'GetMemberTier'
      |'GetMemberAttributesValues'
      |'UpdateCurrentValueForMemberAttribute'
      |'RunProgramProcess'
      |'Crud'
      |'AssignBadgeToMember'
      |'CheckMemberBadgeAssignment'
      |'ChangeMemberTier'
      |'GetMemberPromotions'
      |'RedeemVoucher'
      |'SendMail'

export type LoyaltyPgmProcCrudActType = 'create'
      |'update'

export type LoyaltyPgmProcRuleStatus = 'Draft'
      |'Active'
      |'Inactive'

export type LoyaltyPgmProcStatus = 'Draft'
      |'Active'
      |'Inactive'

export type MLRelationType = 'Inner'
      |'Leftouter'
      |'Leftinner'
      |'Full'

export type MLFieldType = 'Prediction'
      |'Pushback'
      |'Included'
      |'Excluded'
      |'Join'
      |'Related'
      |'Expression'
      |'SegmentExpression'
      |'TrainingExpression'
      |'ScoringExpression'
      |'PositiveExpression'
      |'NegativeExpression'
      |'SourceDate'
      |'Retriever'

export type MLDataDefinitionType = 'Recipient'
      |'Candidate'
      |'Interaction'
      |'Prediction'
      |'Generative'

export type MLGenerativeDefinitionStatus = 'Enabled'
      |'Disabled'
      |'Draft'

export type MLGenerativeType = 'Standard'
      |'Grounded'

export type MLPredictionDefinitionStatus = 'Enabled'
      |'Disabled'
      |'Draft'

export type MLRecommendationDefinitionStatus = 'Enabled'
      |'Disabled'
      |'Draft'

export type MCNodeType = 'TEXT'
      |'MTEXT'
      |'RTE'
      |'IMG'
      |'NAMEFIELD'
      |'MEDIA'
      |'REFERENCE'
      |'URL'
      |'DATETIME'
      |'DATE'
      |'PHONE'
      |'EMAIL'
      |'ENCRYPTEDSTRING'
      |'BOOLEAN'
      |'CURRENCY'
      |'INT'
      |'DOUBLE'
      |'PERCENT'
      |'TIME'
      |'ADDRESS'
      |'LOCATION'

export type EventSubscriptionReplayPreset = 'EARLIEST'
      |'LATEST'

export type EventSubscriptionAdminState = 'RUN'
      |'STOP'
      |'PAUSE'

export type ContactPointType = 'Email'
      |'Phone'
      |'Web'
      |'Social'
      |'MailingAddress'
      |'InPerson'
      |'Video'

export type AudienceFieldType = 'Boolean'
      |'Text'
      |'Encrypted'
      |'Number'
      |'Double'
      |'Date'
      |'DateTime'
      |'Email'
      |'Phone'
      |'Time'
      |'URL'

export type MarketAudienceStatus = 'New'
      |'Counting'
      |'Activating'
      |'Activated'
      |'Disabled'
      |'Error'

export type MarketSegmentType = 'UI'
      |'DBT'
      |'Lookalike'
      |'EinsteinGptSegmentsUI'
      |'Waterfall'
      |'Realtime'

export type BlankValueBehavior = 'MatchBlanks'
      |'NullNotAllowed'

export type MatchingMethod = 'Exact'
      |'FirstName'
      |'LastName'
      |'CompanyName'
      |'Phone'
      |'City'
      |'Street'
      |'Zip'
      |'Title'

export type MatchingRuleStatus = 'Inactive'
      |'DeactivationFailed'
      |'Activating'
      |'Deactivating'
      |'Active'
      |'ActivationFailed'

export type AutoResponseContentType = 'TextResponse'
      |'MessageDefinition'

export type MessagingAutoResponseType = 'InitialResponse'
      |'AgentEngagedResponse'
      |'AgentEndEngagementResponse'
      |'OptInPrompt'
      |'DoubleOptInPrompt'
      |'EndUserInactiveResponse'
      |'EndUserIdleResponse'
      |'OptOutConfirmation'
      |'CustomResponse'
      |'HelpResponse'
      |'OptInConfirmation'

export type MessagingChannelConsentType = 'ImplicitOptIn'
      |'ExplicitOptIn'
      |'DoubleOptIn'

export type MessagingChannelUsageDeploymentType = 'DigitalEngagementConversation'
      |'UnifiedConversation'
      |'MessagingEngagement'
      |'MarketingJourneyBuilder'

export type MessagingChannelTargetLookupValueType = 'Queue'
      |'Intent'

export type EmbeddedServiceAuthModeType = 'Auth'
      |'UnAuth'

export type MessagingAuthorizationType = 'PublicKeyCertificateSet'
      |'AuthProvider'

export type MessagingChannelType = 'EmbeddedMessaging'
      |'InternalCopilot'
      |'Voice'
      |'Custom'
      |'Facebook'
      |'Line'
      |'WhatsApp'
      |'AppleMessagesForBusiness'

export type MessagingKeywordType = 'OptIn'
      |'DoubleOptIn'
      |'OptOut'
      |'Help'
      |'Custom'

export type MessagingSessionHandlerType = 'Queue'
      |'Flow'
      |'User'

export type MessagingChannelStandardParameterType = 'FirstName'
      |'LastName'
      |'Email'
      |'Subject'

export type MfgProgramTransformationType = 'BusinessTransformation'
      |'ForecastSetRelation'

export type MfgProgramTemplateStatus = 'Active'
      |'Inactive'
      |'Draft'

export type MilestoneTypeRecurrenceType = 'none'
      |'recursIndependently'
      |'recursChained'

export type MktDataConnectionMethod = 'Ingress'
      |'Egress'

export type MktDataConnectionStatus = 'PROCESSING'
      |'INACTIVE'
      |'TESTING'
      |'ACTIVE'
      |'ERROR'
      |'DELETING'
      |'SCHEMA_REQUIRED'

export type MlAIModelAlgorithmType = 'Unknown'
      |'Glm'
      |'Gbm'
      |'Xgboost'
      |'RandomForest'

export type MlModelConnectorType = 'SAGEMAKER_DEPLOYED'
      |'OPEN_AI'
      |'AZURE_OPEN_AI'
      |'GENERIC'
      |'DATABRICKS'
      |'VERTEX_AI'
      |'ANTHROPIC'
      |'BEDROCK'
      |'OPEN_CONNECTOR'
      |'SALESFORCE'

export type MlModelDeployStatus = 'DRAFT'
      |'REGISTERED'
      |'ACTIVATED'
      |'DEACTIVATED'
      |'FAILED'

export type MlGenerativeModelType = 'Text'

export type MlGenerativeModelCapability = 'Completion'
      |'ChatCompletion'
      |'Embedding'

export type MlModelCapability = 'Completion'
      |'ChatCompletion'
      |'Embedding'
      |'Regression'
      |'BinaryClassification'
      |'MulticlassClassification'
      |'Generic'

export type MlModelType = 'Predictive'
      |'Generative'
      |'Unknown'

export type MlParameterSubtype = 'Integer'
      |'Double'
      |'Picklist'

export type MlParameterType = 'Discrete'
      |'Continuous'

export type MlModelPredictionType = 'Regression'
      |'BinaryClassification'
      |'MulticlassClassification'
      |'Generic'

export type MlRuntimeType = 'External'
      |'Internal'

export type MlModelSourceType = 'ModelConnector'
      |'EdcNoCode'
      |'OutOfTheBox'
      |'FineTuned'

export type MlAIModelType = 'ModelArtifact'
      |'ConfiguredModel'

export type MlModelEndpointType = 'REAL_TIME_INFERENCE'
      |'BATCH_INFERENCE'

export type MlInferenceFormat = 'JSON_DENSE'
      |'CSV'
      |'JSON_INSTANCES'
      |'DATAFRAME_RECORDS'
      |'DATAFRAME_SPLIT'
      |'JSON'
      |'COLUMNAR'

export type ModerationRuleAction = 'Block'
      |'FreezeAndNotify'
      |'Review'
      |'Replace'
      |'Flag'

export type RateLimitTimePeriod = 'Short'
      |'Medium'

export type ModerationRuleType = 'Content'
      |'Rate'

export type OrgDomainShard = 'none'
      |'sandbox'
      |'develop'
      |'patch'
      |'trailblaze'
      |'scratch'
      |'demo'
      |'free'
      |'bt'
      |'sfdctest'
      |'sfdcdot'
      |'sfrestore'

export type OrgDomainRedirectOption = 'Undeployed'
      |'Redirect'
      |'WarnOnRedirect'
      |'NoRedirect'

export type OrgDomainProdSuffix = 'MySalesforceLimited'
      |'DatabaseLimited'
      |'CloudforceLimited'
      |'OrgLevelCertificateLimited'
      |'Restricted1'
      |'MySalesforce'
      |'Restricted2'
      |'OrgLevelCertificate'

export type CalloutStatus = 'Enabled'
      |'Disabled'

export type NamedCredentialParamType = 'Url'
      |'UrlQueryParameter'
      |'HttpHeader'
      |'HttpCookie'
      |'ClientCertificate'
      |'ServerCertificate'
      |'FormulaVariable'
      |'Authentication'
      |'OutboundNetworkConnection'
      |'AllowedManagedPackageNamespaces'
      |'CreatedByNamespace'
      |'CustomParameter'
      |'StandardNamedCredentialType'
      |'ManagedByFeature'
      |'ManagedByComponent'
      |'ConnectionStatus'

export type NamedCredentialType = 'Legacy'
      |'AnonymousEndpoint'
      |'SecuredEndpoint'
      |'PrivateEndpoint'
      |'Credentials'
      |'Standard'

export type NetworkPageOverrideSetting = 'Designer'
      |'VisualForce'
      |'Standard'
      |'Configurable'

export type AudienceCriteriaType = 'CustomList'
      |'MaxDaysInCommunity'

export type RecommendationChannel = 'DefaultChannel'
      |'CustomChannel1'
      |'CustomChannel2'
      |'CustomChannel3'
      |'CustomChannel4'
      |'CustomChannel5'

export type SitesArchiveStatus = 'TemporarilyArchived'
      |'Archived'
      |'NotArchived'

export type NetworkStatus = 'UnderConstruction'
      |'Live'
      |'DownForMaintenance'

export type ObjHierarchyMappingType = 'ParentToParent'
      |'ParentToChild'
      |'ChildToChild'
      |'Support'

export type MappingUsageType = 'ConvertToSalesAgreement'
      |'EligibleProgramRebateType'
      |'MapJournalToMemberAggregate'
      |'TransformationMapping'
      |'CLMFieldMapping'

export type OcrApplicationType = 'Industries'
      |'EinsteinDocumentReader'

export type ItemType = 'TABLE'

export type OcrMappingType = 'FormField'
      |'TableColumn'

export type OmniDataTransformInputType = 'JSON'
      |'XML'
      |'SObject'
      |'Custom'

export type ODTItemFilterDataType = 'ADDRESS'
      |'ANYTYPE'
      |'BASE64'
      |'BOOLEAN'
      |'COMBOBOX'
      |'CURRENCY'
      |'DATACATEGORY'
      |'GROUPREFERENCE'
      |'DATE'
      |'DATETIME'
      |'DOUBLE'
      |'EMAIL'
      |'ENCRYPTEDSTRING'
      |'ID'
      |'INTEGER'
      |'LONG'
      |'MULTIPICKLIST'
      |'PERCENT'
      |'PHONE'
      |'PICKLIST'
      |'REFERENCE'
      |'STRING'
      |'TEXTAREA'
      |'TIME'
      |'URL'

export type OmniAnalyticsComponentType = 'Omniscript'
      |'Flexcard'

export type ExternalTrackingVendor = 'Google'
      |'Mixpanel'

export type OmniProcessType = 'OmniScript'

export type OmniSupervisorActionName = 'ChangeQueues'
      |'ChangeSkills'
      |'AssignLearning'
      |'AWSDashboard'
      |'ManageQueues'
      |'CustomAction'
      |'ChangeGroups'

export type OmniSupervisorActionTab = 'AllAgents'
      |'AgentDetails'
      |'QueuesBacklog'
      |'QueueDetails'
      |'AssignedWork'
      |'AssignedWorkDetails'
      |'SkillsBacklog'
      |'SkillDetails'

export type OmniSupervisorTabType = 'Wallboard'
      |'Agents'
      |'QueuesBacklog'
      |'AssignedWork'
      |'SkillsBacklog'
      |'FlexipageType'

export type OmniSuperSkillVisibilityType = 'AllSkills'
      |'AnySkill'

export type OmniTrackingGroupType = 'Internal'
      |'External'

export type OmniUiCardType = 'Parent'
      |'Child'

export type OutboundConnPropertyName = 'LinkId'
      |'Region'
      |'AwsVpcEndpointId'
      |'AwsVpcEndpointServiceName'
      |'ProxyUrl'
      |'DataCloudPrivateNetworkUrl'
      |'DataCloudPrivateNetworkProvider'
      |'DataCloudPrivateNetworkFunctionalDomain'
      |'DataCloudPrivateNetworkFalconInstance'
      |'DataCloudPrivateNetworkCustomUrls'
      |'DataCloudPrivateNetworkAwsVpcEndpointId'
      |'DataCloudPrivateNetworkAwsVpcEndpointServiceName'
      |'DataCloudPrivateNetworkDefaultUrl'
      |'DataCloudPrivateNetworkStatusCode'

export type APIAccessLevel = 'Unrestricted'
      |'Restricted'

export type ParticipantRoleAccessLevel = 'None'
      |'Read'
      |'Edit'

export type IdempotencySupportStatus = 'No'
      |'Yes'

export type PermissionSetTabVisibility = 'None'
      |'Available'
      |'Visible'

export type LicenseExpirationPolicy = 'AllowNamespaceAccess'
      |'BlockNamespaceAccess'

export type PlatformCacheType = 'Session'
      |'Organization'

export type PlatformEventChannelType = 'event'
      |'data'

export type PlatformEventChannelEventType = 'custom'
      |'standard'
      |'monitoring'
      |'data'

export type Frequency = 'Daily'
      |'Weekly'
      |'Fortnightly'
      |'Monthly'
      |'Once'
      |'Quarterly'
      |'Yearly'

export type PortalRoles = 'Executive'
      |'Manager'
      |'Worker'
      |'PersonAccount'

export type PortalType = 'CustomerSuccess'
      |'Partner'
      |'Network'

export type ConditionLogic = 'All'

export type InputValueType = 'Variable'
      |'Expression'
      |'String'

export type TypeOfAction = 'Add'
      |'Edit'
      |'Delete'

export type AccumulateResultCondInputType = 'Variable'
      |'Expression'
      |'String'

export type AccumulateResultOperator = 'Any'
      |'Equals'
      |'NotEquals'
      |'LessThan'
      |'LessOrEqual'
      |'GreaterThan'
      |'GreaterOrEqual'

export type ConditionAggregationFunction = 'Sum'
      |'Average'
      |'Minimum'
      |'Maximum'
      |'Count'

export type TargetEntityMatchType = 'Equals'

export type ConditionFilterInputValueType = 'Variable'
      |'String'
      |'Expression'

export type ConditionFilterOperator = 'Equals'
      |'NotEquals'
      |'LessThan'
      |'LessOrEqual'
      |'GreaterThan'
      |'GreaterOrEqual'
      |'IsNull'
      |'NotNull'

export type ConditionType = 'SingleCriterion'
      |'Aggregation'

export type ExecutionStageOfPriceRule = 'PreCalculate'
      |'Completion'

export type RuleStatus = 'Draft'
      |'Activated'
      |'Deactivated'
      |'Verified'
      |'ActivationInProgress'
      |'DeactivationInProgress'

export type PriceSheetColumnType = 'Input'
      |'Output'

export type ProductFamilyUsageType = 'AccountForecasting'

export type CategoryGroupVisibility = 'ALL'
      |'NONE'
      |'CUSTOM'

export type LoginFlowType = 'UI'

export type UiLoginFlowType = 'VisualWorkflow'
      |'VisualForce'

export type TabVisibility = 'Hidden'
      |'DefaultOff'
      |'DefaultOn'

export type PromptDisplayPosition = 'TopLeft'
      |'TopCenter'
      |'TopRight'
      |'BottomLeft'
      |'BottomCenter'
      |'BottomRight'
      |'MiddleLeft'
      |'MiddleCenter'
      |'MiddleRight'

export type PromptDisplayType = 'DockedComposer'
      |'FloatingPanel'
      |'Walkthrough'
      |'Targeted'

export type PromptElementRelativePosition = 'TopLeft'
      |'TopCenter'
      |'TopRight'
      |'LeftTop'
      |'LeftCenter'
      |'LeftBottom'
      |'RightTop'
      |'RightCenter'
      |'RightBottom'
      |'BottomLeft'
      |'BottomCenter'
      |'BottomRight'

export type PromptExperience = 'Lightning'
      |'Site'

export type PromptImageLocation = 'Top'
      |'Bottom'
      |'Left'
      |'Right'

export type PromptThemeColor = 'Theme1'
      |'Theme2'
      |'Theme3'
      |'Theme4'

export type PromptThemeSaturation = 'Dark'
      |'Light'

export type PromptUserAccess = 'Everyone'
      |'SpecificPermissions'

export type PromptUserProfileAccess = 'Everyone'
      |'SpecificProfiles'

export type PublicKeyCertificateSetType = 'JWKS'
      |'JWKS_URL'

export type CapacityType = 'INHERITED'
      |'INTERRUPTIBLE'
      |'NOT_INTERRUPTIBLE'

export type RoutingModel = 'LEAST_ACTIVE'
      |'MOST_AVAILABLE'
      |'EXTERNAL_ROUTING'

export type ActionSubtype = 'ScreenAction'
      |'Action'

export type QuickActionParameterType = 'Input'
      |'Output'

export type QuickActionLabel = 'Custom'
      |'LogACall'
      |'LogANote'
      |'New'
      |'NewRecordType'
      |'Update'
      |'UpdateRecordType'
      |'NewChild'
      |'NewChildRecordType'
      |'CreateNew'
      |'CreateNewRecordType'
      |'SendEmail'
      |'QuickRecordType'
      |'Quick'
      |'EditDescription'
      |'Defer'
      |'ChangeDueDate'
      |'ChangePriority'
      |'ChangeStatus'
      |'SocialPost'
      |'Escalate'
      |'EscalateToRecord'
      |'OfferFeedback'
      |'RequestFeedback'
      |'AddRecord'
      |'AddMember'
      |'Reply'
      |'ReplyAll'
      |'Forward'
      |'ScheduleAppointment'
      |'EnrollInProgram'
      |'ModifyAppointment'
      |'PatientDetails'
      |'AcceptBroadcast'
      |'SelectCoverage'
      |'AssetHierarchy'
      |'PartReturnRequest'
      |'PerformCount'
      |'ViewCoverage'
      |'Quip'
      |'SendConversationMessage'
      |'NewQuote'
      |'LaunchDataCapture'
      |'RelocateAsset'
      |'ReplaceAsset'

export type QuickActionType = 'Create'
      |'VisualforcePage'
      |'Post'
      |'SendEmail'
      |'Email'
      |'LogACall'
      |'CaseComment'
      |'ChangeStatus'
      |'SocialPost'
      |'Canvas'
      |'Update'
      |'MobileSmartActions'
      |'MobileCreateFull'
      |'ChangePriority'
      |'ChangeDueDate'
      |'LightningComponent'
      |'LightningWebComponent'
      |'Flow'
      |'MobileExtension'
      |'Quip'
      |'SendConversationMessage'
      |'Copilot'

export type StrategyReactionType = 'Accepted'
      |'Rejected'

export type RecommendationConditionOperator = 'EQUALS'
      |'GREATER_THAN'
      |'GREATER_THAN_OR_EQUAL_TO'
      |'LESS_THAN'
      |'LESS_THAN_OR_EQUAL_TO'
      |'NOT_EQUALS'
      |'LIKE'
      |'STARTS_WITH'
      |'ENDS_WITH'
      |'CONTAINS'

export type RecommendationConditionValueType = 'TEXT'
      |'NUMBER'
      |'BOOLEAN'
      |'DATE'
      |'DATE_TIME'
      |'TIME'

export type ChannelSource = 'Other'
      |'Phone'
      |'Chat'

export type PinnedAction = 'None'
      |'Top'
      |'Bottom'

export type RecordActionType = 'Flow'
      |'QuickAction'
      |'Omniscript'
      |'LWC'
      |'WebLink'
      |'SvcCatalogItemDef'

export type ComponentName = 'ActionsAndRecommendations'
      |'ActionLauncher'
      |'BulkActionPanel'

export type RecordAggregationDefinitionAggregationType = 'Record'

export type RecordAggregationJoinConditionType = 'AggregateTo'
      |'Intermediate'
      |'AggregateFrom'

export type RecordAggregationObjectFilterOperator = 'Equals'
      |'NotEquals'
      |'LessThan'
      |'LessThanOrEquals'
      |'GreaterThan'
      |'GreaterThanOrEquals'
      |'Contains'
      |'In'
      |'NotIn'

export type RecordAggregationDefinitionStatus = 'Draft'
      |'Active'
      |'Inactive'

export type ReportAggregateDatatype = 'currency'
      |'percent'
      |'number'

export type ReportBucketFieldType = 'text'
      |'number'
      |'picklist'

export type ReportFormulaNullTreatment = 'n'
      |'z'

export type ChartType = 'None'
      |'Scatter'
      |'ScatterGrouped'
      |'Bubble'
      |'BubbleGrouped'
      |'HorizontalBar'
      |'HorizontalBarGrouped'
      |'HorizontalBarStacked'
      |'HorizontalBarStackedTo100'
      |'VerticalColumn'
      |'VerticalColumnGrouped'
      |'VerticalColumnStacked'
      |'VerticalColumnStackedTo100'
      |'Line'
      |'LineGrouped'
      |'LineCumulative'
      |'LineCumulativeGrouped'
      |'Pie'
      |'Donut'
      |'Funnel'
      |'VerticalColumnLine'
      |'VerticalColumnGroupedLine'
      |'VerticalColumnStackedLine'
      |'Plugin'

export type ChartPosition = 'CHART_TOP'
      |'CHART_BOTTOM'

export type ReportChartSize = 'Tiny'
      |'Small'
      |'Medium'
      |'Large'
      |'Huge'

export type ObjectFilterOperator = 'with'
      |'without'

export type CurrencyIsoCode = 'ADP'
      |'AED'
      |'AFA'
      |'AFN'
      |'ALL'
      |'AMD'
      |'ANG'
      |'AOA'
      |'ARS'
      |'ATS'
      |'AUD'
      |'XAV'
      |'AWG'
      |'AZM'
      |'AZN'
      |'BAM'
      |'BBD'
      |'BDT'
      |'BEF'
      |'BGL'
      |'BGN'
      |'BHD'
      |'BIF'
      |'BMD'
      |'BND'
      |'BOB'
      |'BOV'
      |'BRB'
      |'BRL'
      |'BSD'
      |'BTN'
      |'BWP'
      |'BYB'
      |'BYN'
      |'BYR'
      |'BZD'
      |'CAD'
      |'CDF'
      |'CHF'
      |'CLF'
      |'CLP'
      |'CNH'
      |'CNY'
      |'COP'
      |'CRC'
      |'CSD'
      |'CUC'
      |'CUP'
      |'CVE'
      |'CYP'
      |'CZK'
      |'DEM'
      |'DJF'
      |'DKK'
      |'DOP'
      |'DZD'
      |'ECS'
      |'EEK'
      |'EGP'
      |'ERN'
      |'ESP'
      |'ETB'
      |'EUR'
      |'FIM'
      |'FJD'
      |'FKP'
      |'XFL'
      |'FRF'
      |'GBP'
      |'GBT'
      |'GEL'
      |'GHC'
      |'GHS'
      |'GIP'
      |'GMD'
      |'GNF'
      |'GRD'
      |'GTQ'
      |'GWP'
      |'GYD'
      |'HKD'
      |'HNL'
      |'HRD'
      |'HRK'
      |'HTG'
      |'HUF'
      |'IDR'
      |'IEP'
      |'ILS'
      |'INR'
      |'IQD'
      |'IRR'
      |'ISK'
      |'ITL'
      |'JMD'
      |'JOD'
      |'JPY'
      |'KES'
      |'KGS'
      |'KHR'
      |'KMF'
      |'KPW'
      |'KRW'
      |'KWD'
      |'KYD'
      |'KZT'
      |'LAK'
      |'LBP'
      |'LKR'
      |'LRD'
      |'LSL'
      |'LTL'
      |'LUF'
      |'LVL'
      |'LYD'
      |'MAD'
      |'XMA'
      |'MDL'
      |'MGA'
      |'MGF'
      |'MKD'
      |'MMK'
      |'MNT'
      |'MOP'
      |'MRO'
      |'MRU'
      |'MTL'
      |'MUR'
      |'MVR'
      |'MWK'
      |'MXN'
      |'MXV'
      |'MYR'
      |'MZM'
      |'MZN'
      |'NAD'
      |'NGN'
      |'NIO'
      |'NLG'
      |'NOK'
      |'NPR'
      |'NZD'
      |'OMR'
      |'PAB'
      |'XPA'
      |'PEN'
      |'PGK'
      |'PHP'
      |'PKR'
      |'PLN'
      |'PTE'
      |'PYG'
      |'QAR'
      |'RMB'
      |'ROL'
      |'RON'
      |'RSD'
      |'RUB'
      |'RUR'
      |'RWF'
      |'SAR'
      |'SBD'
      |'SCR'
      |'SDD'
      |'SDG'
      |'SEK'
      |'SGD'
      |'SHP'
      |'SIT'
      |'SKK'
      |'SLE'
      |'SLL'
      |'XSO'
      |'SOS'
      |'SRD'
      |'SRG'
      |'SSP'
      |'STD'
      |'STN'
      |'SUR'
      |'SVC'
      |'SYP'
      |'SZL'
      |'THB'
      |'TJR'
      |'TJS'
      |'TMM'
      |'TMT'
      |'TND'
      |'TOP'
      |'TPE'
      |'TRL'
      |'TRY'
      |'TTD'
      |'TWD'
      |'TZS'
      |'UAH'
      |'UGX'
      |'USD'
      |'UYU'
      |'UZS'
      |'VEB'
      |'VEF'
      |'VES'
      |'VND'
      |'VUV'
      |'WST'
      |'XAF'
      |'XCD'
      |'XCG'
      |'XOF'
      |'XPF'
      |'YER'
      |'YUM'
      |'ZAR'
      |'ZMK'
      |'ZMW'
      |'ZWD'
      |'ZWG'
      |'ZWL'
      |'ZIG'

export type DataCategoryFilterOperation = 'above'
      |'below'
      |'at'
      |'aboveOrBelow'

export type ReportFormat = 'MultiBlock'
      |'Matrix'
      |'Summary'
      |'Tabular'

export type ReportAggrType = 'Sum'
      |'Average'
      |'Maximum'
      |'Minimum'
      |'Unique'
      |'RowCount'
      |'Median'
      |'Noop'

export type UserDateGranularity = 'None'
      |'Day'
      |'Week'
      |'Month'
      |'Quarter'
      |'Year'
      |'FiscalQuarter'
      |'FiscalYear'
      |'MonthInYear'
      |'DayInMonth'
      |'FiscalPeriod'
      |'FiscalWeek'

export type ReportSortType = 'Column'
      |'Aggregate'
      |'CustomSummaryFormula'

export type UserDateInterval = 'INTERVAL_CURRENT'
      |'INTERVAL_CURNEXT1'
      |'INTERVAL_CURPREV1'
      |'INTERVAL_NEXT1'
      |'INTERVAL_PREV1'
      |'INTERVAL_CURNEXT3'
      |'INTERVAL_CURFY'
      |'INTERVAL_PREVFY'
      |'INTERVAL_PREV2FY'
      |'INTERVAL_AGO2FY'
      |'INTERVAL_NEXTFY'
      |'INTERVAL_PREVCURFY'
      |'INTERVAL_PREVCUR2FY'
      |'INTERVAL_CURNEXTFY'
      |'INTERVAL_CUSTOM'
      |'INTERVAL_YESTERDAY'
      |'INTERVAL_TODAY'
      |'INTERVAL_TOMORROW'
      |'INTERVAL_LASTWEEK'
      |'INTERVAL_THISWEEK'
      |'INTERVAL_NEXTWEEK'
      |'INTERVAL_LASTMONTH'
      |'INTERVAL_THISMONTH'
      |'INTERVAL_NEXTMONTH'
      |'INTERVAL_LASTTHISMONTH'
      |'INTERVAL_THISNEXTMONTH'
      |'INTERVAL_CURRENTQ'
      |'INTERVAL_CURNEXTQ'
      |'INTERVAL_CURPREVQ'
      |'INTERVAL_NEXTQ'
      |'INTERVAL_PREVQ'
      |'INTERVAL_CURNEXT3Q'
      |'INTERVAL_CURY'
      |'INTERVAL_PREVY'
      |'INTERVAL_PREV2Y'
      |'INTERVAL_AGO2Y'
      |'INTERVAL_NEXTY'
      |'INTERVAL_PREVCURY'
      |'INTERVAL_PREVCUR2Y'
      |'INTERVAL_CURNEXTY'
      |'INTERVAL_LAST7'
      |'INTERVAL_LAST30'
      |'INTERVAL_LAST60'
      |'INTERVAL_LAST90'
      |'INTERVAL_LAST120'
      |'INTERVAL_NEXT7'
      |'INTERVAL_NEXT30'
      |'INTERVAL_NEXT60'
      |'INTERVAL_NEXT90'
      |'INTERVAL_NEXT120'
      |'LAST_FISCALWEEK'
      |'THIS_FISCALWEEK'
      |'NEXT_FISCALWEEK'
      |'LAST_FISCALPERIOD'
      |'THIS_FISCALPERIOD'
      |'NEXT_FISCALPERIOD'
      |'LASTTHIS_FISCALPERIOD'
      |'THISNEXT_FISCALPERIOD'
      |'CURRENT_ENTITLEMENT_PERIOD'
      |'PREVIOUS_ENTITLEMENT_PERIOD'
      |'PREVIOUS_TWO_ENTITLEMENT_PERIODS'
      |'TWO_ENTITLEMENT_PERIODS_AGO'
      |'CURRENT_AND_PREVIOUS_ENTITLEMENT_PERIOD'
      |'CURRENT_AND_PREVIOUS_TWO_ENTITLEMENT_PERIODS'

export type ReportTypeCategory = 'accounts'
      |'opportunities'
      |'forecasts'
      |'cases'
      |'leads'
      |'campaigns'
      |'activities'
      |'busop'
      |'products'
      |'admin'
      |'territory'
      |'other'
      |'content'
      |'usage_entitlement'
      |'wdc'
      |'calibration'
      |'territory2'
      |'quotes'
      |'individual'
      |'employee'
      |'data_cloud'
      |'commerce'
      |'flow'
      |'semantic_model'

export type ContextRuleStatus = 'Draft'
      |'Inactive'
      |'Active'
      |'DeploymentInProgress'
      |'DeploymentFailed'
      |'ValidationInProgress'
      |'ValidationFailed'
      |'ValidationSucceeded'
      |'ValidationInterrupted'
      |'Obsolete'

export type ExecutionType = 'Sequence'
      |'Priority'

export type VariableValueType = 'Literal'
      |'Expression'
      |'ReferenceRecord'
      |'RuleReferenceVariable'
      |'Path'
      |'FilteredTag'

export type RuleActionType = 'SetValue'
      |'Auto-Add'
      |'Auto-Remove'
      |'SetQuantity'
      |'SetAttribute'
      |'Message'
      |'SetDefaultProduct'
      |'SetDefaultAttributeValue'
      |'HideAttribute'
      |'HideAttributeValue'
      |'HideProduct'
      |'DisableProduct'
      |'DisableAttributeValue'

export type ConditionMatchType = 'Any'
      |'All'

export type RuleConditionOperator = 'Equals'
      |'NotEquals'
      |'LessThan'
      |'LessThanOrEquals'
      |'GreaterThan'
      |'GreaterThanOrEquals'
      |'Between'
      |'IsNotNull'
      |'IsNull'
      |'Contains'
      |'DoesNotContain'
      |'In'
      |'NotIn'
      |'StartsWith'
      |'EndsWith'
      |'PathContains'

export type RuleFilterCriteriaType = 'Aggregate'
      |'Branch'
      |'List'
      |'Eligibility'
      |'Boolean'
      |'Exists'
      |'NotExists'
      |'Loop'

export type RuleCondAggregateFunction = 'Sum'

export type RuleRefVariableDataType = 'Text'
      |'Numeric'
      |'Date'
      |'DateTime'
      |'Currency'
      |'Boolean'
      |'Percent'
      |'RecordId'
      |'Tuple'

export type RuleRefVariableType = 'Constant'
      |'Formula'
      |'Tag'
      |'Variable'
      |'Attribute'
      |'Accumulate'
      |'FilteredTag'

export type ContextRuleUsageType = 'UnifiedPromotions'
      |'Default'
      |'Configurator'
      |'Dfo'
      |'PriceGuidance'
      |'Underwriting'

export type ActualsCalculationMode = 'Manual'
      |'Orders'
      |'OrdersThroughContracts'
      |'DataProcessingEngine'

export type SamlIdentityLocationType = 'SubjectNameId'
      |'Attribute'

export type SamlIdentityType = 'Username'
      |'FederationId'
      |'UserId'

export type SamlType = 'SAML1_1'
      |'SAML2_0'

export type SamlSpSLOBinding = 'RedirectBinding'
      |'PostBinding'

export type DomainType = 'FTest'
      |'FTest2'

export type SearchCriteriaConfigurationConfigurationType = 'DefaultSearch'
      |'ClinicalTrialSearch'

export type SearchCriteriaConfigurationFilterType = 'GROUPING_AND_AGGREGATION'
      |'MULTIPLE_FIELDS'

export type SearchCriteriaConfigurationResultDisplayFormat = 'LIST'
      |'CARD'

export type SearchResultActionScope = 'Global'

export type SearchResultActionType = 'FlowDefinition'
      |'OmniScript'
      |'LightningWebComponent'

export type Complexity = 'NoRestriction'
      |'AlphaNumeric'
      |'SpecialCharacters'
      |'UpperLowerCaseNumeric'
      |'UpperLowerCaseNumericSpecialCharacters'
      |'Any3UpperLowerCaseNumericSpecialCharacters'

export type Expiration = 'ThirtyDays'
      |'SixtyDays'
      |'NinetyDays'
      |'SixMonths'
      |'OneYear'
      |'Never'

export type LockoutInterval = 'FifteenMinutes'
      |'ThirtyMinutes'
      |'SixtyMinutes'
      |'Forever'

export type MaxLoginAttempts = 'ThreeAttempts'
      |'FiveAttempts'
      |'TenAttempts'
      |'NoLimit'

export type QuestionRestriction = 'None'
      |'DoesNotContainPassword'

export type SessionTimeout = 'TwentyFourHours'
      |'TwelveHours'
      |'EightHours'
      |'FourHours'
      |'TwoHours'
      |'NinetyMinutes'
      |'SixtyMinutes'
      |'ThirtyMinutes'
      |'FifteenMinutes'

export type ServiceAISetupDefStatus = 'FIELDS_SELECTED'
      |'TRAINING'
      |'READY_TO_ACTIVATE'
      |'SERVING'
      |'RETIRED'
      |'ARCHIVED'
      |'READY_FOR_REVIEW'
      |'TRAINING_FAILURE'
      |'INVALID_TRAINING_FIELDS'

export type ServiceAISetupFieldType = 'CASE_DESC'
      |'CASE_SUBJ'
      |'ARTICLE_TITLE'
      |'ARTICLE_CONTENT'
      |'ARTICLE_SUMMARY'
      |'ARTICLE_ANSWER'
      |'ARTICLE_QUESTION'

export type SvcCtlgItemAttrAttributeType = 'Base'
      |'Extended'

export type SvcCatalogItemAttrDataType = 'Attachment'
      |'Checkbox'
      |'Currency'
      |'Date'
      |'Datetime'
      |'DisplayText'
      |'Email'
      |'IPAddress'
      |'Integer'
      |'Lookup'
      |'ListOfBoolean'
      |'ListOfDouble'
      |'ListOfInteger'
      |'ListOfMaps'
      |'ListOfString'
      |'MultilineText'
      |'Map'
      |'Number'
      |'NumericScale'
      |'Picklist'
      |'Percentage'
      |'Queue'
      |'SingleCheckbox'
      |'SinglelineText'
      |'Text'
      |'Toggle'
      |'URL'

export type SvcCtlgItemDpndProcType = 'RequestForm'
      |'FulfillmentFlow'
      |'IntegrationDefinition'
      |'Preprocessor'

export type SvcCatalogItemDependencyType = 'PreprocessorApexClass'
      |'FlowDefinition'
      |'IntegrationProviderDef'
      |'OmniScriptConfig'

export type SvcCatalogItemUsageType = 'Employee'
      |'CustomerService'
      |'Industry'
      |'FinancialServices'

export type SlackRecordLayoutViewMode = 'recordcrud'
      |'urlunfurling'

export type CaseSubjectOption = 'SocialPostSource'
      |'SocialPostContent'
      |'BuildCustom'

export type StageConditionOperator = 'Equals'
      |'GreaterThan'
      |'GreaterOrEqual'
      |'LessThan'
      |'LessOrEqual'
      |'Contains'
      |'NotEqualTo'
      |'DoesNotContain'
      |'StartsWith'

export type StageCriteriaType = 'AND'
      |'OR'
      |'CUSTOMLOGIC'

export type StageCriteriaExecType = 'CONDITION'
      |'FLOW'

export type StageUserPermission = 'ProcessOrder'
      |'ManageClinicalTrials'
      |'ParticipateClinicalTrials'
      |'CoordinateClinicalTrials'
      |'CoordinateClnclTrialExprcUsr'

export type StationaryAssetType = 'CommercialBuilding'
      |'DataCenter'

export type UnitType = 'Volume'
      |'Weight'
      |'Energy'
      |'Other'

export type CriterionOperator = 'Equal'
      |'NotEqual'
      |'GreaterThan'
      |'GreaterThanOrEqual'
      |'LessThan'
      |'LessThanOrEqual'
      |'Contains'
      |'StartsWith'
      |'Includes'
      |'NotIncludes'

export type CriteriaRelationshipType = 'AllConditionsAreMet'
      |'AnyConditionIsMet'

export type PropertyDisplayType = 'Lookup'
      |'Picklist'
      |'Text'
      |'Checkbox'
      |'Number'
      |'Queue'
      |'Date'
      |'DateTime'

export type SvcCatalogItemAttrType = 'FulfillmentInput'
      |'UserQuestion'

export type PublishStatusType = 'Draft'
      |'Published'
      |'PendingChanges'
      |'Deprecated'

export type TimeSheetFrequency = 'Daily'
      |'Weekly'
      |'EveryTwoWeeks'
      |'TwiceAMonth'
      |'Monthly'

export type DaysOfWeek = 'Sunday'
      |'Monday'
      |'Tuesday'
      |'Wednesday'
      |'Thursday'
      |'Friday'
      |'Saturday'

export type RuleEngine = 'StandardConfigurator'
      |'AdvancedConfigurator'

export type SaveType = 'Standard'

export type TransactionSecurityEventName = 'ReportEvent'
      |'ApiEvent'
      |'AdminSetupEvent'
      |'LoginEvent'
      |'ListViewEvent'
      |'CredentialStuffingEventStore'
      |'ReportAnomalyEventStore'
      |'SessionHijackingEventStore'
      |'ApiAnomalyEventStore'
      |'BulkApiResultEventStore'
      |'PermissionSetEventStore'
      |'FileEventStore'
      |'GuestUserAnomalyEventStore'
      |'LoginAsEvent'

export type MonitoredEvents = 'AuditTrail'
      |'Login'
      |'Entity'
      |'DataExport'
      |'AccessResource'

export type TxnSecurityPolicyType = 'CustomApexPolicy'
      |'CustomConditionBuilderPolicy'

export type ObjectRelationshipType = 'Direct'
      |'Indirect'
      |'Self'
      |'InverseDirect'

export type FormatType = 'ICON'

export type UserAccessPolicyStatus = 'Design'
      |'Testing'
      |'Migrate'
      |'Updating'
      |'Failed'
      |'Active'
      |'Completed'

export type UserAccessPolicyTriggerType = 'Create'
      |'Update'
      |'CreateAndUpdate'

export type UserAccessPolicyActionType = 'Grant'
      |'Revoke'

export type UserAccessPolicyActionTargetType = 'PermissionSet'
      |'PermissionSetGroup'
      |'PermissionSetLicense'
      |'PackageLicense'
      |'Group'
      |'Queue'

export type UserAccessPolicyFilterOperation = 'equals'
      |'equalsIgnoreCase'
      |'notEquals'
      |'in'
      |'includes'

export type UserAccessPolicyFilterTargetType = 'Group'
      |'Queue'
      |'PermissionSet'
      |'PermissionSetGroup'
      |'PermissionSetLicense'
      |'Profile'
      |'UserRole'
      |'PackageLicense'
      |'User'

export type NetworkUserType = 'Internal'
      |'Customer'
      |'Partner'

export type VehicleAssetType = 'FleetVehicle'
      |'PrivateJet'

export type VisualizationResourceType = 'js'
      |'css'

export type CountryIsoCode = 'AD'
      |'AE'
      |'AF'
      |'AG'
      |'AI'
      |'AL'
      |'AM'
      |'AO'
      |'AQ'
      |'AR'
      |'AT'
      |'AU'
      |'AW'
      |'AX'
      |'AZ'
      |'BA'
      |'BB'
      |'BD'
      |'BE'
      |'BF'
      |'BG'
      |'BH'
      |'BI'
      |'BJ'
      |'BL'
      |'BM'
      |'BN'
      |'BO'
      |'BQ'
      |'BR'
      |'BS'
      |'BT'
      |'BV'
      |'BW'
      |'BY'
      |'BZ'
      |'CA'
      |'CC'
      |'CD'
      |'CF'
      |'CG'
      |'CH'
      |'CI'
      |'CK'
      |'CL'
      |'CM'
      |'CN'
      |'CO'
      |'CR'
      |'CV'
      |'CW'
      |'CX'
      |'CY'
      |'CZ'
      |'DE'
      |'DJ'
      |'DK'
      |'DM'
      |'DO'
      |'DZ'
      |'EC'
      |'EE'
      |'EG'
      |'EH'
      |'ER'
      |'ES'
      |'ET'
      |'FI'
      |'FJ'
      |'FK'
      |'FO'
      |'FR'
      |'GA'
      |'GB'
      |'GD'
      |'GE'
      |'GF'
      |'GG'
      |'GH'
      |'GI'
      |'GL'
      |'GM'
      |'GN'
      |'GP'
      |'GQ'
      |'GR'
      |'GS'
      |'GT'
      |'GW'
      |'GY'
      |'HM'
      |'HN'
      |'HR'
      |'HT'
      |'HU'
      |'ID'
      |'IE'
      |'IL'
      |'IM'
      |'IN'
      |'IO'
      |'IQ'
      |'IS'
      |'IT'
      |'JE'
      |'JM'
      |'JO'
      |'JP'
      |'KE'
      |'KG'
      |'KH'
      |'KI'
      |'KM'
      |'KN'
      |'KR'
      |'KW'
      |'KY'
      |'KZ'
      |'LA'
      |'LB'
      |'LC'
      |'LI'
      |'LK'
      |'LR'
      |'LS'
      |'LT'
      |'LU'
      |'LV'
      |'LY'
      |'MA'
      |'MC'
      |'MD'
      |'ME'
      |'MF'
      |'MG'
      |'MK'
      |'ML'
      |'MM'
      |'MN'
      |'MO'
      |'MQ'
      |'MR'
      |'MS'
      |'MT'
      |'MU'
      |'MV'
      |'MW'
      |'MX'
      |'MY'
      |'MZ'
      |'NA'
      |'NC'
      |'NE'
      |'NF'
      |'NG'
      |'NI'
      |'NL'
      |'NO'
      |'NP'
      |'NR'
      |'NU'
      |'NZ'
      |'OM'
      |'PA'
      |'PE'
      |'PF'
      |'PG'
      |'PH'
      |'PK'
      |'PL'
      |'PM'
      |'PN'
      |'PS'
      |'PT'
      |'PY'
      |'QA'
      |'RE'
      |'RO'
      |'RS'
      |'RU'
      |'RW'
      |'SA'
      |'SB'
      |'SC'
      |'SE'
      |'SG'
      |'SH'
      |'SI'
      |'SJ'
      |'SK'
      |'SL'
      |'SM'
      |'SN'
      |'SO'
      |'SR'
      |'SS'
      |'ST'
      |'SV'
      |'SX'
      |'SZ'
      |'TC'
      |'TD'
      |'TF'
      |'TG'
      |'TH'
      |'TJ'
      |'TK'
      |'TL'
      |'TM'
      |'TN'
      |'TO'
      |'TR'
      |'TT'
      |'TV'
      |'TW'
      |'TZ'
      |'UA'
      |'UG'
      |'US'
      |'UY'
      |'UZ'
      |'VA'
      |'VC'
      |'VE'
      |'VG'
      |'VN'
      |'VU'
      |'WF'
      |'WS'
      |'XK'
      |'YE'
      |'YT'
      |'ZA'
      |'ZM'
      |'ZW'

export type TaxLocaleType = 'Net'
      |'Gross'
      |'Automatic'

export type OrderLifeCycleType = 'MANAGED'
      |'UNMANAGED'

export type PricingStrategy = 'LowestPrice'
      |'Priority'

export type ProductGrouping = 'BestMatch'
      |'VariationParent'
      |'NoGrouping'

export type WebStoreType = 'B2B'
      |'B2C'
      |'B2CE'

export type LookupValueType = 'User'
      |'Queue'
      |'RecordType'

export type FieldUpdateOperation = 'Formula'
      |'Literal'
      |'Null'
      |'NextValue'
      |'PreviousValue'
      |'LookupValue'

export type KnowledgeWorkflowAction = 'PublishAsNew'
      |'Publish'

export type SendAction = 'Send'

export type ActionTaskAssignedToTypes = 'user'
      |'role'
      |'opportunityTeam'
      |'accountTeam'
      |'owner'
      |'accountOwner'
      |'creator'
      |'accountCreator'
      |'partnerUser'
      |'portalRole'

export type ActionEmailRecipientTypes = 'group'
      |'role'
      |'user'
      |'opportunityTeam'
      |'accountTeam'
      |'roleSubordinates'
      |'owner'
      |'creator'
      |'partnerUser'
      |'accountOwner'
      |'customerPortalUser'
      |'portalRole'
      |'portalRoleSubordinates'
      |'contactLookup'
      |'userLookup'
      |'roleSubordinatesInternal'
      |'email'
      |'caseTeam'
      |'campaignMemberDerivedOwner'

export type ActionEmailSenderType = 'CurrentUser'
      |'OrgWideEmailAddress'
      |'DefaultWorkflowUser'

export type WorkflowTriggerTypes = 'onCreateOnly'
      |'onCreateOrTriggeringUpdate'
      |'onAllChanges'
      |'OnRecursiveUpdate'

export type WorkflowTimeUnits = 'Hours'
      |'Days'

export type ExtendedErrorCode = 'ACTIONCALLPATH_MISSING_NAME'
      |'ACTIONCALL_DUPLICATE_INPUT_PARAM'
      |'ACTIONCALL_DUPLICATE_OUTPUT_PARAM'
      |'ACTIONCALL_FEATURE_NOT_SUPPORTED'
      |'ACTIONCALL_INPUT_VALIDATION_FAILED'
      |'ACTIONCALL_INVALID_INPUT_PARAM_NAME'
      |'ACTIONCALL_INVALID_ISWAITUNTILCOMPLETED'
      |'ACTIONCALL_INVALID_OFFSET'
      |'ACTIONCALL_MISSING_EVENT_INFO'
      |'ACTIONCALL_MISSING_NAME'
      |'ACTIONCALL_MISSING_OFFSET'
      |'ACTIONCALL_MISSING_REQUIRED_PARAM'
      |'ACTIONCALL_MISSING_REQUIRED_TYPE'
      |'ACTIONCALL_NOT_FOUND_WITH_NAME_AND_TYPE'
      |'ACTIONCALL_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'ACTIONCALL_NOT_SUPPORTED_FOR_TRIGGERTYPE'
      |'ACTIONCALL_OFFSET_NOT_SUPPORTED'
      |'ACTIONCALL_TRANSACTION_MODEL_NOT_ALLOWED'
      |'ACTIONCALL_TRANSACTION_MODEL_NOT_SUPPORTED'
      |'ACTIONCALL_TRIGGERING_RECORD_MISMATCHED_OBJECTTYPE'
      |'ACTION_BUTTON_NOT_SUPPORTED_FOR_API_VERSION_AT_RUNTIME'
      |'ACTION_BUTTON_NOT_SUPPORTED_FOR_METADATA_API_VERSION'
      |'ACTION_CALL_INPUT_SETUPREFTYPE_REQUIRES_SETUPREFVALUE'
      |'ACTION_CALL_INVALID_ACTION_NAME_CONTENT'
      |'ACTION_CALL_INVALID_CONFIGURATION'
      |'ACTION_CALL_INVALID_INPUT_PARAM'
      |'ACTION_CALL_INVALID_OUTPUT_PARAM'
      |'ACTION_CALL_INVALID_VERSION'
      |'ACTION_CALL_MISSING_ELEMENT_DEPENDENCIES'
      |'ACTION_INPUT_PARAMETER_REQUIRES_ID_TYPE_FOR_SETUP_REFERENCE'
      |'ACTION_INPUT_PARAMETER_TYPE_AND_SETUP_REFERENCE_TYPE_DO_NOT_MATCH'
      |'ACTION_TYPE_REQUIRED_FOR_STEP'
      |'ADDING_ATTACHMENT_QUESTIONS_ADDITION_TO_EXISTING_SURVEY'
      |'ADVANCED_APPROVALS_LICENSE_REQUIRED_FOR_ACTIVATION'
      |'ADVANCED_APPROVALS_LICENSE_REQUIRED_FOR_EXECUTION'
      |'ADVANCED_APPROVALS_LICENSE_REQUIRED_FOR_SAVE'
      |'APEXCALLOUT_INPUT_DUPLICATE'
      |'APEXCALLOUT_INPUT_INCOMPATIBLE_DATATYPE'
      |'APEXCALLOUT_INVALID'
      |'APEXCALLOUT_MISSING_CLASSNAME'
      |'APEXCALLOUT_NOT_FOUND'
      |'APEXCALLOUT_OUTPUT_INCOMPATIBLE_DATATYPE'
      |'APEXCALLOUT_OUTPUT_INVALID'
      |'APEXCALLOUT_REQUIRED_INPUT_MISSING'
      |'APEXCLASS_MISSING_INTERFACE'
      |'APEX_CLASS_VARIABLE_NOT_FOUND'
      |'ASSIGNEE_AUTOPROC'
      |'ASSIGNEE_REQUIRED_WHEN_SPECIFYING_RUN_AS_USER'
      |'ASSIGNEE_USER_USERNAME'
      |'ASSIGNMENTITEM_ELEMENT_MISSING_DATATYPE'
      |'ASSIGNMENTITEM_ELEMENT_NOT_SUPPORTED'
      |'ASSIGNMENTITEM_FIELD_INVALID_DATATYPE'
      |'ASSIGNMENTITEM_FIELD_INVALID_DATATYPE_WITH_ELEMENT'
      |'ASSIGNMENTITEM_INCOMPATIBLE_DATATYPES'
      |'ASSIGNMENTITEM_INVALID_ASSIGNTOREFERENCE'
      |'ASSIGNMENTITEM_INVALID_COLLECTION'
      |'ASSIGNMENTITEM_INVALID_DATATYPE_IN_ELEMENT'
      |'ASSIGNMENTITEM_INVALID_ELEMENTREFERENCE'
      |'ASSIGNMENTITEM_INVALID_MERGE_FIELD'
      |'ASSIGNMENTITEM_INVALID_OPERATOR'
      |'ASSIGNMENTITEM_INVALID_REFERENCE'
      |'ASSIGNMENTITEM_INVALID_VALUE'
      |'ASSIGNMENTITEM_LEFT_DATATYPE_INVALID_FOR_OPERATOR'
      |'ASSIGNMENTITEM_MODIFIES_NONVARIABLE'
      |'ASSIGNMENTITEM_NONEXISTENT_REFERENCE'
      |'ASSIGNMENTITEM_REQUIRED'
      |'ASSIGNMENTITEM_RIGHT_DATATYPE_INVALID_FOR_OPERATOR'
      |'ASYNC_ACTION_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'AUTOLAUNCHED_CHOICELOOKUP_NOT_SUPPORTED'
      |'AUTOLAUNCHED_CHOICE_NOT_SUPPORTED'
      |'AUTOLAUNCHED_SCREEN_NOT_SUPPORTED'
      |'AUTOLAUNCHED_STEP_NOT_SUPPORTED'
      |'AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE'
      |'AUTOLAUNCHED_WAIT_NOT_SUPPORTED'
      |'AUTOMATION_EVENT_PATH_EXPERIMENT_MISSING_ELEMENT_DEPENDENCIES'
      |'BACKGROUND_STEPS_DETECT_ASYNC_PROCESSING'
      |'BEFORE_SAVE_FLOW_RECORD_UPDATE_CANNOT_HAVE_FAULT_CONNECTOR'
      |'BEFORE_SAVE_FLOW_RECORD_UPDATE_INVALID_REFERENCE'
      |'BEFORE_SAVE_FLOW_RECORD_UPDATE_RELATED_RECORD_REQUIRES_INPUTASSIGNMENTS'
      |'BEFORE_SAVE_FLOW_RECORD_UPDATE_REQUIRES_INPUTASSIGNMENTS'
      |'BOTH_START_NODE_AND_REFERENCE_FOUND'
      |'CHOICEFIELD_DEFAULT_CHOICE_NOT_FOUND'
      |'CHOICEFIELD_MISSING_CHOICE'
      |'CHOICELOOKUP_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD'
      |'CHOICE_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD'
      |'CHOICE_LOOKUP_COLLECTION_REFERENCE_NULL'
      |'CHOICE_LOOKUP_INVALID_COLLECTION_REFERENCE'
      |'CHOICE_NOT_SUPPORTED_FOR_SCREENFIELDTYPE'
      |'CHOICE_USED_MULTIPLE_TIMES_IN_SAME_FIELD'
      |'COLLECTION_PROCESSOR_DUPLICATE_MAPITEM'
      |'COLLECTION_PROCESSOR_INVALID_COLLECTION_REFERENCE'
      |'COLLECTION_PROCESSOR_INVALID_CONFIGURATION'
      |'COLLECTION_PROCESSOR_INVALID_OUTPUTSOBJECTTYPE'
      |'COLLECTION_PROCESSOR_MAX_SORT_FIELDS_LIMIT_EXCEEDED'
      |'COLLECTION_PROCESSOR_MISMATCHED_OBJECTTYPE'
      |'COLLECTION_PROCESSOR_MISSING_MAP'
      |'COLLECTION_PROCESSOR_MISSING_OUTPUTSOBJECTTYPE'
      |'COLLECTION_PROCESSOR_MISSING_PARAMETER'
      |'COLLECTION_PROCESSOR_MISSING_SORT'
      |'COLLECTION_PROCESSOR_NOT_SUPPORTED_FOR_API_VERSION'
      |'COLLECTION_PROCESSOR_REQUIRES_PERM'
      |'COLLECTION_PROCESSOR_SORT_FIELD_INVALID_FOR_OBJECT'
      |'COLLECTION_PROCESSOR_TYPE_NOT_SUPPORTED'
      |'COLLECTION_PROCESSOR_VARIABLE_NULL'
      |'CONDITIONAL_SCREENFIELD_VISIBILITY_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'CONDITIONAL_SCREEN_FIELD_VISIBILITY_NOT_SUPPORTED_FOR_SCREEN_FIELD'
      |'CONDITION_BUILDER_MISSING_FLOW_VARIABLE'
      |'CONDITION_BUILDER_MISSING_REQUIRED_PERMISSIONS'
      |'CONDITION_BUILDER_UNSUPPORTED_FLOW_VARIABLE'
      |'CONDITION_INVALID_LEFTOPERAND'
      |'CONDITION_LOGIC_EXCEEDS_LIMIT'
      |'CONDITION_LOGIC_INVALID'
      |'CONDITION_LOGIC_MISSING'
      |'CONDITION_MISSING_DATATYPE'
      |'CONDITION_MISSING_OPERATOR'
      |'CONDITION_OPERAND_DATATYPES_INCOMPATIBLE'
      |'CONDITION_OPERAND_INCOMPATIBLE_WITH_ELEMENT'
      |'CONDITION_OPERATOR_INCOMPATIBLE'
      |'CONDITION_REFERENCED_ELEMENT_NOT_FOUND'
      |'CONDITION_RIGHTOPERAND_NULL'
      |'CONDITION_TRAVERSAL_TOO_DEEP'
      |'CONNECTOR_MISSING_TARGET'
      |'CONSTANT_INCLUDES_REFERENCES'
      |'CONTENT_KEY_OR_ID_NOT_FOUND'
      |'CUSTOMEVENTS_NOT_ENABLED'
      |'CUSTOMEVENT_MISSING_PROCESSMETADATAVALUES'
      |'CUSTOMEVENT_OBJECTTYPE_NOT_FOUND'
      |'CUSTOMEVENT_OBJECTTYPE_NOT_SUPPORTED'
      |'CUSTOMEVENT_PROCESSMETADATAVALUES_MISSING_NAME'
      |'CUSTOMEVENT_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME'
      |'CUSTOM_PROPERTY_INVALID_KEY'
      |'CUSTOM_PROPERTY_INVALID_KEY_VALUE_PAIR'
      |'CUSTOM_PROPERTY_INVALID_NAME'
      |'CUSTOM_PROPERTY_INVALID_VALUE'
      |'CUSTOM_PROPERTY_INVALID_VALUE_FOR_KEY'
      |'CUSTOM_PROPERTY_NOT_SUPPORTED'
      |'CUSTOM_PROPERTY_REQUIRED_KEY_MISSING'
      |'DATATYPE_INVALID'
      |'DATATYPE_MAPPING_BOTH_APEXCLASS_AND_SOBJECT_NOT_SUPPORTED'
      |'DATATYPE_MISSING'
      |'DATA_GRAPH_DATA_CHANGE_DEFAULT_DATA_SPACE_NOT_USED'
      |'DATA_GRAPH_DATA_CHANGE_ROOT_DMO_MISMATCH'
      |'DATA_GRAPH_DATA_CHANGE_TRIGGERING_DATA_GRAPH_NULL'
      |'DATA_GRAPH_DATA_CHANGE_UNIFIED_INDIVIDUAL_NOT_USED'
      |'DATA_GRAPH_DATA_CHANGE_UNIFIED_INDIVIDUAL_NOT_USED_FOR_PATH_EXPERIMENT'
      |'DATA_TYPE_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'DATA_TYPE_NOT_SUPPORTED_IN_CONDITION'
      |'DECISION_DEFAULT_CONNECTOR_MISSING_LABEL'
      |'DECISION_MISSING_OUTCOME'
      |'DETERMINATION_FLOW_ACTION_TYPE_REQUIRED'
      |'DUPLICATE_CUSTOM_PROPERTY_NAME'
      |'DUPLICATE_QUESTION_NOT_ALLOWED'
      |'DYNAMIC_TYPE_MAPPING_MISSING'
      |'EITHER_CONDITIONS_OR_ACTION_NOT_SUPPORTED'
      |'ELEMENT_CONNECTS_TO_SELF'
      |'ELEMENT_COORDINATES_INVALID'
      |'ELEMENT_INVALID_CONNECTOR'
      |'ELEMENT_INVALID_REFERENCE'
      |'ELEMENT_INVALID_REFERENCE_FOR_CONFLICTING_FIELD_VALUE'
      |'ELEMENT_MISSING_CONNECTOR'
      |'ELEMENT_MISSING_LABEL'
      |'ELEMENT_MISSING_NAME'
      |'ELEMENT_MISSING_REFERENCE'
      |'ELEMENT_MORE_THAN_ONE_FIELD'
      |'ELEMENT_NAME_INVALID'
      |'ELEMENT_NEVER_USED'
      |'ELEMENT_NOT_SUPPORTED_IN_SUBFLOW_FOR_TRIGGER_TYPE'
      |'ELEMENT_REQUIRES_PERM'
      |'ELEMENT_SCALE_SMALLER_THAN_DEFAULTVALUE'
      |'ELEMENT_SUBTYPE_NOT_SUPPORTED_FOR_ELEMENTTYPE'
      |'ELEMENT_SUBTYPE_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'ELEMENT_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'ENTRY_CONDITION_CONFLICTING_FILTERS'
      |'ENVIRONMENTS_VALUE_CHANGED'
      |'ENVIRONMENT_PERMISSION_REQUIRED'
      |'EXTERNAL_OBJECTS_NOT_SUPPORTED'
      |'EXTERNAL_OBJECT_FIELDS_NOT_SUPPORTED'
      |'EXTERNAL_SYSTEM_FLOW_INVALID_POLLING_FREQUENCY'
      |'EX_AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE'
      |'FAULT_CONNECTOR_NOT_SUPPORTED_FOR_PROCESS_TYPE'
      |'FEATURE_DISABLED'
      |'FIELDASSIGNMENT_FIELD_INCOMPATIBLE_DATATYPE'
      |'FIELDASSIGNMENT_INVALID_DATATYPE'
      |'FIELDASSIGNMENT_INVALID_ELEMENT'
      |'FIELDASSIGNMENT_INVALID_REFERENCE'
      |'FIELDASSIGNMENT_MULTIPLE_REFERENCES_SAME_FIELD'
      |'FIELDASSIGNMENT_PICKLISTFIELD_INCOMPATIBLE_DATATYPE'
      |'FIELDASSIGNMENT_REFERENCED_ELEMENT_MISSING_DATATYPE'
      |'FIELDSERVICE_UNSUPPORTED_FIELD_TYPE'
      |'FIELD_INVALID_VALUE'
      |'FIELD_NOT_FOUND'
      |'FIELD_RELATIONSHIP_NOT_SUPPORTED'
      |'FIELD_REQUIRES_PERM'
      |'FIELD_TYPE_NOT_SUPPORTED_AS_CHILD_OF_SCREENFIELD_REGION_OR_REGIONCONTAINER'
      |'FIELD_TYPE_NOT_SUPPORTED_AS_PARENT'
      |'FIELD_TYPE_UNSUPPORTED'
      |'FIELD_VALUE_REQUIRES_PERM'
      |'FLEXIPAGE_COMPONENT_ATTRIBUTE_EXPRESSION_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_ATTRIBUTE_GENERIC_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_ATTRIBUTE_MISSING_REQUIRED'
      |'FLEXIPAGE_COMPONENT_ATTRIBUTE_TOO_LONG'
      |'FLEXIPAGE_COMPONENT_CUSTOM_VALIDATION_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_DESIGN_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_EVENT_DUPLICATE_TARGET_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_EVENT_EMPTY_TARGET_MAPPING_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_EVENT_INVALID_FORMFACTOR_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_EVENT_INVALID_SERVICE_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_EVENT_SOURCE_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_MAX_LIMIT_EXCEPTION'
      |'FLEXIPAGE_COMPONENT_RULE_VALIDATION_EXCEPTION'
      |'FLEXIPAGE_DUPLICATE_PROPERTY_COMPONENT_EXCEPTION'
      |'FLEXIPAGE_EVENT_ATTRIBUTE_GENERIC_EXCEPTION'
      |'FLEXIPAGE_INVALID_ITEM_INSTANCE_TYPE_EXCEPTION'
      |'FLEXIPAGE_INVALID_PROPERTY_TYPE_COMPONENT_EXCEPTION'
      |'FLEXIPAGE_INVALID_PROPERTY_TYPE_EVENT_TARGET_EXCEPTION'
      |'FLEXIPAGE_ITEM_INSTANCE_CUSTOM_VALIDATION_EXCEPTION'
      |'FLEXIPAGE_MAX_INTERACTIONS_EXCEPTION'
      |'FLEXIPAGE_PICKLIST_INVALID_VALUE_EXCEPTION'
      |'FLEXIPAGE_RENAMED_COMPONENT_VALIDATION_EXCEPTION'
      |'FLEXIPAGE_TEMPLATE_INVALID_SWITCH'
      |'FLOW_ALREADY_OVERRIDDEN'
      |'FLOW_CAPABILITY_INPUT_DATA_TYPE_INVALID'
      |'FLOW_CAPABILITY_INPUT_INVALID'
      |'FLOW_CAPABILITY_INPUT_MISSING'
      |'FLOW_CAPABILITY_INVALID'
      |'FLOW_CAPABILITY_MISSING'
      |'FLOW_COMPLEX_VALUE_COLLECTION_TYPE_EXPECTED'
      |'FLOW_COMPLEX_VALUE_INVALID'
      |'FLOW_COMPLEX_VALUE_INVALID_JSON'
      |'FLOW_COMPLEX_VALUE_INVALID_MERGE_FIELD'
      |'FLOW_COMPLEX_VALUE_NOT_SUPPORTED'
      |'FLOW_COMPLEX_VALUE_SCALAR_TYPE_EXPECTED'
      |'FLOW_COMPLEX_VALUE_TYPE_ELEMENT_REFERENCE_INVALID'
      |'FLOW_COMPLEX_VALUE_TYPE_ELEMENT_REFERENCE_MISSING'
      |'FLOW_COMPLEX_VALUE_TYPE_FIELD_REFERENCE_INVALID'
      |'FLOW_COMPLEX_VALUE_TYPE_FIELD_REFERENCE_MISSING'
      |'FLOW_CONDITION_INVALID_FIELD'
      |'FLOW_CONDITION_MISSING_FIELD'
      |'FLOW_CONDITION_NESTING_LIMIT_EXCEEDED'
      |'FLOW_CONTEXT_RECORD_ASSIGNMENT_VARIABLE_INVALID'
      |'FLOW_CUSTOM_ERROR_COMPOUND_FIELD_NOT_SUPPORTED'
      |'FLOW_CUSTOM_ERROR_EMPTY_MESSAGES_LIST'
      |'FLOW_CUSTOM_ERROR_INVALID_OR_INCOMPLETE_FIELD'
      |'FLOW_CUSTOM_ERROR_MULTIPLE_ERRORS_ON_FIELD'
      |'FLOW_CUSTOM_ERROR_MULTIPLE_PAGE_ERRORS_EXCEPTION'
      |'FLOW_CUSTOM_ERROR_NO_FIELD_SELECTION_FOR_FIELD_ERROR'
      |'FLOW_ELEMENT_SCALE_LESS_THAN_ZERO'
      |'FLOW_EXCEEDED_EXITRULE_MAX_COUNT'
      |'FLOW_EXITRULE_EXECUTION_DELAY_WARNING'
      |'FLOW_EXITRULE_WITH_NO_CONDITION'
      |'FLOW_EXPERIMENT_DATA_GRAPH_NAME_NOT_SET'
      |'FLOW_EXPERIMENT_DURATION_INVALID_VALUE'
      |'FLOW_EXPERIMENT_DURATION_UNIT_INVALID_VALUE'
      |'FLOW_EXPERIMENT_GO_TO_NOT_SUPPORTED'
      |'FLOW_EXPERIMENT_INVALID_TOTAL_PATH_PERCENTAGE'
      |'FLOW_EXPERIMENT_IS_NOT_ALLOWED_WITH_PENDING_DML'
      |'FLOW_EXPERIMENT_NESTING_IN_SUBFLOW_NOT_SUPPORTED'
      |'FLOW_EXPERIMENT_NESTING_NOT_SUPPORTED'
      |'FLOW_EXPERIMENT_PATHS_COUNT_ABOVE_MAXIMUM'
      |'FLOW_EXPERIMENT_PATHS_COUNT_BELOW_MINIMUM'
      |'FLOW_EXPERIMENT_PATH_PERCENTAGE_INVALID'
      |'FLOW_EXPERIMENT_PERSONALIZATION_SETUP_INCOMPLETE'
      |'FLOW_EXPERIMENT_TEST_GROUP_NOT_SUPPORTED'
      |'FLOW_EXPERIMENT_TEST_GROUP_PERCENTAGE_INVALID_VALUE'
      |'FLOW_FORMULA_FIELD_MISSING'
      |'FLOW_FORMULA_NOT_SUPPORTED'
      |'FLOW_IMMEDIATE_PATH_INCOMPATIBLE_WITH_EXTERNAL_CALLOUTS'
      |'FLOW_IMMEDIATE_PATH_INCOMPATIBLE_WITH_EXTERNAL_OBJECTS'
      |'FLOW_INCLUDES_STEP'
      |'FLOW_INLINE_TRANSFORM_API_VERSION_NOT_SUPPORTED'
      |'FLOW_INLINE_TRANSFORM_NOT_SUPPORTED'
      |'FLOW_INPUTPARAM_MISMATCHED_APEX_CLASS'
      |'FLOW_INTERVIEW_BULK_EXECUTION'
      |'FLOW_INTERVIEW_HANDLED_ERROR'
      |'FLOW_INTERVIEW_INPUT_VALIDATION'
      |'FLOW_INTERVIEW_INTERACTION_NOT_FOUND'
      |'FLOW_INTERVIEW_INVALID_CHOICE_USER_INPUT'
      |'FLOW_INTERVIEW_INVALID_FIELD_VALUE'
      |'FLOW_INTERVIEW_INVALID_START_REQUEST'
      |'FLOW_INTERVIEW_LIMIT_EXCEEDED'
      |'FLOW_INTERVIEW_MISSING_CHOICE_FOR_REQUIRED_CHOICE_FIELD'
      |'FLOW_INTERVIEW_MISSING_VALUE_FOR_REQUIRED_INPUT_FIELD'
      |'FLOW_INTERVIEW_NAVIGATE'
      |'FLOW_INTERVIEW_RANGE_VALIDATION'
      |'FLOW_INTERVIEW_RECOVERABLE_ERROR'
      |'FLOW_INTERVIEW_REGEX_VALIDATION'
      |'FLOW_INTERVIEW_RESUME_INTERVIEW'
      |'FLOW_INTERVIEW_SAVE_RESULT'
      |'FLOW_INTERVIEW_SET_CHOICE_SELECTED'
      |'FLOW_INTERVIEW_START_INTERVIEW'
      |'FLOW_INTERVIEW_TYPE_CONVERSION'
      |'FLOW_INVALID_EVENT_NAME'
      |'FLOW_INVALID_EVENT_TYPE'
      |'FLOW_INVALID_NAME'
      |'FLOW_METRICS_NOT_SUPPORTED'
      |'FLOW_NAME_USED_IN_OTHER_CLIENT'
      |'FLOW_ORCHESTRATOR_FREEMIUM_PRODUCT'
      |'FLOW_OVERRIDABLE_CANNOT_BE_OVERRIDE'
      |'FLOW_OVERRIDABLE_CANNOT_BE_TEMPLATE'
      |'FLOW_OVERRIDDEN_FLOW_INVALID_REFERENCE'
      |'FLOW_OVERRIDE_EXTRA_VARIABLE'
      |'FLOW_OVERRIDE_INCOMPATIBLE_PROCESS_TYPE'
      |'FLOW_OVERRIDE_INCOMPATIBLE_TYPE'
      |'FLOW_OVERRIDE_INCOMPATIBLE_VARIABLE'
      |'FLOW_RECORD_LOOKUP_LIMIT_NOT_SUPPORTED'
      |'FLOW_RECORD_LOOKUP_LIMIT_OUT_OF_RANGE'
      |'FLOW_RECORD_PRIOR_AUTOLAUNCH_UPDATE_ONLY'
      |'FLOW_RECORD_PRIOR_INVALID_IN_RECORD_CREATE'
      |'FLOW_RECORD_PRIOR_INVALID_IN_RECORD_DELETE'
      |'FLOW_RECORD_PRIOR_INVALID_IN_RECORD_UPDATE'
      |'FLOW_RECORD_PRIOR_READ_ONLY'
      |'FLOW_REFERENCES_APEX_CLASS_NOT_IN_SAME_PACKAGE'
      |'FLOW_RESOURCE_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'FLOW_RULE_REQUIRE_RECORD_CHANGED_NEVER_CHECKED_FOR_RECORD_PRIOR'
      |'FLOW_RUN_AS_SYSTEM_MODE_WITHOUT_CONTEXT_WARNING'
      |'FLOW_RUN_AS_SYSTEM_MODE_WITH_CONTEXT_WARNING'
      |'FLOW_SCHEDULED_PATH_ALLOWED_ONE_ASYNCAFTERCOMMIT_PATH'
      |'FLOW_SCHEDULED_PATH_ASYNCAFTERCOMMIT_REQUIRES_RECORD_CHANGED_OR_ISCHANGED'
      |'FLOW_SCHEDULED_PATH_CANNOT_USE_IS_CHANGED'
      |'FLOW_SCHEDULED_PATH_INCOMPATIBLE_TIME_SOURCE'
      |'FLOW_SCHEDULED_PATH_INCOMPATIBLE_WHEN_DECISION_REQUIRES_RECORD_CHANGED'
      |'FLOW_SCHEDULED_PATH_INCOMPATIBLE_WITH_FLOW_TRIGGER_TYPE'
      |'FLOW_SCHEDULED_PATH_INCOMPATIBLE_WITH_RECORD_PRIOR'
      |'FLOW_SCHEDULED_PATH_INVALID_BATCH_SIZE'
      |'FLOW_SCHEDULED_PATH_INVALID_OFFSET'
      |'FLOW_SCHEDULED_PATH_REQUIRED_FIELDS_MISSING'
      |'FLOW_SCHEDULED_PATH_REQUIRES_DEFAULT_WORKFLOW_USER'
      |'FLOW_SCHEDULED_PATH_REQUIRES_RECORD_CHANGED_TO_MEET_CRITERIA'
      |'FLOW_SCHEDULE_INFORMATION_INCOMPLETE'
      |'FLOW_SEGMENT_AND_DG_NOT_MATCH_ON_DMO'
      |'FLOW_SOBJECT_VARIABLE_NOT_PERSISTED'
      |'FLOW_SOURCE_TEMPLATE_INVALID_REFERENCE'
      |'FLOW_STAGE_INCLUDES_REFERENCES'
      |'FLOW_STAGE_ORDER_DUPLICATE'
      |'FLOW_STAGE_ORDER_OUT_OF_RANGE'
      |'FLOW_START_INPUT_INVALID_INPUT'
      |'FLOW_START_INPUT_INVALID_TYPE'
      |'FLOW_START_INPUT_NOT_ALLOWED'
      |'FLOW_START_INPUT_REQUIRED'
      |'FLOW_SYSTEM_VARIABLE_NOT_SUPPORTED_FOR_TRIGGERTYPE'
      |'FLOW_TEST_API_NAME_DUPLICATED'
      |'FLOW_TEST_ASSERTION_MISSING'
      |'FLOW_TEST_ASSERTION_NOT_SUPPORTED'
      |'FLOW_TEST_CONDITION_INCOMPATIBLE'
      |'FLOW_TEST_CONDITION_INVALID_DATATYPE_MAPPING'
      |'FLOW_TEST_CONDITION_LIMIT'
      |'FLOW_TEST_CONDITION_NOT_SUPPORTED'
      |'FLOW_TEST_DATATYPE_INVALID'
      |'FLOW_TEST_FLOW_INVALID'
      |'FLOW_TEST_IMMEDIATE_PATH_MISSING'
      |'FLOW_TEST_MERGE_FIELD_INVALID'
      |'FLOW_TEST_MERGE_FIELD_NOT_SUPPORTED'
      |'FLOW_TEST_OPERATOR_INVALID'
      |'FLOW_TEST_PARAMETER_DUPLICATED'
      |'FLOW_TEST_PARAMETER_INCOMPATIBLE'
      |'FLOW_TEST_PARAMETER_INVALID'
      |'FLOW_TEST_PARAMETER_LEFTVALUEREFERENCE_INVALID'
      |'FLOW_TEST_PARAMETER_MISSING'
      |'FLOW_TEST_PARAMETER_NOT_SUPPORTED'
      |'FLOW_TEST_PARAMETER_TYPE_INVALID'
      |'FLOW_TEST_PARAMETER_VALUE_INVALID'
      |'FLOW_TEST_PARAMETER_VALUE_MISSING'
      |'FLOW_TEST_PARAMS_REQUIRED'
      |'FLOW_TEST_POINTS_DUPLICATED'
      |'FLOW_TEST_POINT_MISSING'
      |'FLOW_TEST_POINT_NOT_SUPPORTED'
      |'FLOW_TEST_PROCESSTYPE_INVALID'
      |'FLOW_TEST_RIGHTVALUE_INVALID'
      |'FLOW_TRANSFORM_AGGR_COLL_NUM_OF_REF'
      |'FLOW_TRANSFORM_AGGR_SOURCE_INVALID'
      |'FLOW_TRANSFORM_APEX_CLASS_INCOMPATIBLE'
      |'FLOW_TRANSFORM_API_VERSION_NOT_SUPPORTED'
      |'FLOW_TRANSFORM_ASSIGN_TO_REFERENCE_UNSUPPORTED'
      |'FLOW_TRANSFORM_COLL_DEPTH_UP_TO_TWO'
      |'FLOW_TRANSFORM_COLL_INVALID'
      |'FLOW_TRANSFORM_COLL_UNAVAILABLE'
      |'FLOW_TRANSFORM_COMPOUND_FIELD_UNSUPPORTED'
      |'FLOW_TRANSFORM_ELEMENT_REFERENCE_INVALID'
      |'FLOW_TRANSFORM_ELEMENT_REFERENCE_TYPE_INCOMPATIBLE'
      |'FLOW_TRANSFORM_FIELD_INVALID'
      |'FLOW_TRANSFORM_FIELD_MISSING_INPUT_PARAMETER'
      |'FLOW_TRANSFORM_FMLAFOR_COLL_NOT_SUPP'
      |'FLOW_TRANSFORM_FMLA_COLL_MULT_RSRC'
      |'FLOW_TRANSFORM_GETITEMBYINDEX_INDEX_INVALID'
      |'FLOW_TRANSFORM_GETITEMBYINDEX_INDEX_MISSING'
      |'FLOW_TRANSFORM_INPUT_PARAM_DUPLICATED'
      |'FLOW_TRANSFORM_INPUT_PARAM_INVALID'
      |'FLOW_TRANSFORM_INPUT_PARAM_MISSING'
      |'FLOW_TRANSFORM_INVALID_INPUT_PARAMETER_VALUE'
      |'FLOW_TRANSFORM_INVALID_JOIN_KEYS'
      |'FLOW_TRANSFORM_INVALID_MULTIPLE_TRANSFORM_VALUE_ACTIONS'
      |'FLOW_TRANSFORM_INVALID_TARGET_FIELD'
      |'FLOW_TRANSFORM_JOIN_DUPLICATE_SELECTED_FIELD'
      |'FLOW_TRANSFORM_JOIN_INVALID_SELECTED_FIELD'
      |'FLOW_TRANSFORM_JOIN_KEY_UNSUPPORTED'
      |'FLOW_TRANSFORM_JOIN_MISSING_SELECTED_FIELDS'
      |'FLOW_TRANSFORM_JOIN_NOT_SUPPORTED'
      |'FLOW_TRANSFORM_MAP_COLL_MISSING'
      |'FLOW_TRANSFORM_MAP_COLL_MISSING_SOURCE'
      |'FLOW_TRANSFORM_MAP_COLL_MULT_SOURCE'
      |'FLOW_TRANSFORM_MAP_COLL_NUM_OF_REF'
      |'FLOW_TRANSFORM_MAP_COLL_RELA_RECORDS'
      |'FLOW_TRANSFORM_MAP_COL_PRIMITIVE_INCOMPA'
      |'FLOW_TRANSFORM_MAP_RSRC_TYPE_NOT_SUPPORTED'
      |'FLOW_TRANSFORM_MAP_STATIC_VAL_COLL_MISSING'
      |'FLOW_TRANSFORM_MISSING_JOIN_FIELD_MAPPING'
      |'FLOW_TRANSFORM_OUTPUT_FIELD_API_NAME_INVALID'
      |'FLOW_TRANSFORM_REQUIRES_AUTOMATIC_OUTPUT'
      |'FLOW_TRANSFORM_SPLIT_JOIN_FIELD_MAPPING'
      |'FLOW_TRANSFORM_SUM_SOURCE_TYPE_INVALID'
      |'FLOW_TRANSFORM_TYPE_NAME_DUPLICATED'
      |'FLOW_TRANSFORM_TYPE_NOT_SUPPORTED'
      |'FLOW_TRANSFORM_UNEXPECTED_AUTO_PARAMS'
      |'FLOW_TRANSFORM_VALUES_MISSING'
      |'FLOW_TRANSFORM_VALUE_INVALID'
      |'FLOW_TRANSFORM_VAL_NAME_NOT_SUPPORTED'
      |'FLOW_TRANSFORM_VAL_REF_NOT_SUPPORTED'
      |'FLOW_TRIGGER_DERIVED_FIELD_NOT_SUPPORTED'
      |'FLOW_TRIGGER_ORDER_OUT_OF_BOUNDS'
      |'FLOW_TRIGGER_TYPE_INCOMPATIBLE_WITH_RECORD_TRIGGER_TYPE'
      |'FLOW_UPSERT_EXTERNAL_ID_FIELD_INVALID'
      |'FLOW_UPSERT_EXTERNAL_ID_FIELD_NOT_UNIQUE'
      |'FLOW_UPSERT_STANDARD_FIELD_INVALID'
      |'FLOW_UPSERT_STANDARD_ID_FIELD_IDLOOKUP_FALSE'
      |'FLOW_UPSERT_UNIQUE_ID_CONFLICT'
      |'FORMULA_CMT_LIMIT_EXCEEDED'
      |'FORMULA_EXPRESSION_INVALID'
      |'FORM_ALREADY_IN_USE_BY_DRAFT_VERSION'
      |'FORM_ALREADY_IN_USE_BY_FLOW'
      |'FTEST_EXTENSION_CODE_FOR_TEST'
      |'GLOBAL_VARIABLE_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'GOTO_NOT_SUPPORTED_FOR_PROCESS_TYPE'
      |'HELP_TEXT_NOT_SUPPORTED_FOR_SCREEN_FIELD'
      |'HTTP_METHOD_NOT_SUPPORTED'
      |'INACCESSIBLE_EVENT_TYPE'
      |'INCONSISTENT_ACTION_VERSIONS'
      |'INCONSISTENT_DYNAMIC_TYPE_MAPPING'
      |'INCONSISTENT_VALUE_FOR_DYNAMIC_VALUE_FIELD'
      |'INDIVIDUAL_CONTACT_POINT_NOT_FOUND'
      |'INDIVIDUAL_NOT_FOUND'
      |'INPUTPARAM_CONFIGURATION_NOT_FOUND'
      |'INPUTPARAM_INCOMPATIBLE_CONFIGURATION_ONLY'
      |'INPUTPARAM_INCOMPATIBLE_DATATYPE'
      |'INPUTPARAM_INCOMPATIBLE_WITH_COLLECTION_VARIABLE'
      |'INPUTPARAM_INCOMPATIBLE_WITH_NONCOLLECTION_VARIABLE'
      |'INPUTPARAM_MISMATCHED_OBJECTTYPE'
      |'INPUTPARAM_VARIABLE_MISSING'
      |'INPUTVARIABLE_COLLECTION_NOT_SUPPORTED_FOR_DYNAMIC_ACTION'
      |'INPUTVARIABLE_COLLECTION_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'INPUTVARIABLE_DATATYPE_NOT_SUPPORTED_FOR_DYNAMIC_ACTION'
      |'INPUTVARIABLE_DATATYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'INSUFFICIENT_ACCESS_FOR_UPSERT'
      |'INVALID_ACTION_TYPE_FOR_STEP'
      |'INVALID_ASSIGNEE'
      |'INVALID_CONTENT_TYPE'
      |'INVALID_EMAIL_ADDRESS'
      |'INVALID_ENVIRONMENTS_VALUE'
      |'INVALID_FLOW'
      |'INVALID_FLOW_INTERVIEW'
      |'INVALID_ID'
      |'INVALID_INPUT'
      |'INVALID_OPERATION_TYPE'
      |'INVALID_ORCH_ASSIGNEE_TYPE_FOR_PACKAGE'
      |'INVALID_PROCESSTYPE_ENVIRONMENT_COMBINATION'
      |'INVALID_QUERY_LOCATOR_FORMAT'
      |'INVALID_REGEX_IN_SURVEY_QUESTIONS'
      |'INVALID_RUN_CONTEXT'
      |'INVALID_SEGMENT_STATUS_FOR_ACTIVATION'
      |'INVALID_SENDER_TYPE'
      |'INVALID_SETUP_REFERENCE_TYPE'
      |'INVALID_STAGE_REFERENCE'
      |'INVALID_STAGE_STEP_ASSIGNEE_TYPE'
      |'INVALID_SURVEY_VARIABLE_NAME_OR_TYPE'
      |'INVALID_TIME_ZONE'
      |'INVALID_TYPE'
      |'INVOCABLE_ACTION_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'LOCATOR_LOCATION_EXCEEDS_SIZE'
      |'LOOP_ASSIGNNEXTVALUETO_MISMATCHED_APEXCLASSTYPE'
      |'LOOP_ASSIGNNEXTVALUETO_MISMATCHED_DATATYPE'
      |'LOOP_ASSIGNNEXTVALUETO_MISMATCHED_OBJECTTYPE'
      |'LOOP_ASSIGNNEXTVALUETO_MISSING'
      |'LOOP_ASSIGNNEXTVALUETO_MISSING_VARIABLE'
      |'LOOP_ASSIGNNEXTVALUETO_REFERENCE_NOT_FOUND'
      |'LOOP_COLLECTION_ELEMENT_NOT_FOUND'
      |'LOOP_COLLECTION_NOT_FOUND'
      |'LOOP_COLLECTION_NOT_SUPPORTED_FOR_FIELD'
      |'LOOP_MISSING_COLLECTION'
      |'MANAGEDCONTENT_STATUS_INVALID'
      |'MANUAL_VARIABLE_ASSIGNMENT_NOT_SUPPORTED'
      |'MAX_CHILD_TYPES'
      |'MAX_EXTERNAL_REFERENCES_IN_QUERY'
      |'MAX_STATEMENT_SIZE'
      |'MERGE_FIELD_NOT_SUPPORTED_IN_ACTION'
      |'MESSAGING_API_ENTITLEMENT_REACHED'
      |'MESSAGING_INACTIVE_CHANNEL'
      |'MISSING_ASSIGNEE'
      |'MISSING_ASSIGNEE_TYPE'
      |'MISSING_EMAIL_RECIPIENTS'
      |'MISSING_FLOW_TRANSFORM_SUM_FIELD'
      |'MISSING_MULESOFT_STEP_ASSIGNEE'
      |'MULTIPLE_ASSIGNEES_NOT_ALLOWED'
      |'NON_EXPOSED_COMPONENT_IN_FLOW'
      |'NON_GLOBAL_COMPONENT_IN_EXPORTED_FLOW'
      |'NUMBER_OF_SCREENFIELD_REGIONS_EXCEEDS_LIMIT'
      |'OBJECTTYPE_INVALID'
      |'OBJECT_CANNOT_BE_CREATED'
      |'OBJECT_CANNOT_BE_DELETED'
      |'OBJECT_CANNOT_BE_QUERIED'
      |'OBJECT_CANNOT_BE_UPDATED'
      |'OBJECT_ENCRYPTED_FIELDS_NOT_SUPPORTED'
      |'OBJECT_NOT_FOUND'
      |'OBJECT_TYPE_DOES_NOT_EXIST'
      |'OBJECT_TYPE_NOT_CDC_ENABLED'
      |'ORCHESTRATION_CAN_ASSIGNEE_EDIT_NOT_SUPPORTED'
      |'ORCHESTRATION_REQUIRESASYNCPROCESSING_NOT_SUPPORTED'
      |'ORCHESTRATION_REQUIRESASYNCPROCESSING_REQUIRED'
      |'ORCHESTRATION_STEP_LOCK_RECORD_NOT_SUPPORTED'
      |'ORG_WIDE_EMAIL_INVALID'
      |'ORG_WIDE_EMAIL_NOT_USED'
      |'OUTPUTPARAM_ASSIGNTOREFERENCE_INVALID'
      |'OUTPUTPARAM_ASSIGNTOREFERENCE_NOTFOUND'
      |'OUTPUTPARAM_INCOMPATIBLE_DATATYPE'
      |'OUTPUTPARAM_MISMATCHED_OBJECTTYPE'
      |'OUTPUTPARAM_MISMATCHED_WITH_COLLECTION_VARIABLE'
      |'OUTPUTPARAM_MISSING_ASSIGNTOREFERENCE'
      |'OUTPUTPARAM_MISTMATCHED_WITH_NONCOLLECTION_VARIABLE'
      |'PARAM_DATATYPE_NOT_SUPPORTED'
      |'PAST_SCHEDULE_FLOW_WILL_NOT_RUN'
      |'PLATFORM_EVENT_TRIGGERED_FLOW_REQUIRES_DEFAULT_WORKFLOW_USER'
      |'PRICE_ADJUSTMENT_TIER_VALIDATION_ERROR'
      |'PROCESSMETADATAVALUES_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'PROCESSMETADATAVALUE_NONEXISTENT_ELEMENT'
      |'PROCESSTYPE_COMPONENTTYPE_NOT_SUPPORTED'
      |'PROCESSTYPE_ELEMENT_CONFIG_NOT_SUPPORTED'
      |'PROCESSTYPE_ELEMENT_NOT_SUPPORTED'
      |'PROCESSTYPE_EVALUATIONFLOW_REQUIRED'
      |'PROCESSTYPE_NOT_SUPPORTED'
      |'PROCESSTYPE_SCREEN_FIELDTYPE_NOT_SUPPORTED'
      |'PROCESS_TYPE_ELEMENT_ATTRIBUTE_REQUIRED'
      |'PROCESS_TYPE_INCOMPATIBLE'
      |'PROGRESS_INDICATOR_NOT_SUPPORTED'
      |'PROMPT_FLOW_CONTAINS_INVALID_VARIABLE'
      |'PROMPT_FLOW_INPUT_TYPE_CONFLICT'
      |'QUERY_LOCATOR_EXPIRED'
      |'QUERY_LOCATOR_NOT_FOUND'
      |'QUEUE_DOES_NOT_SUPPORT_ORCHESTRATION_WORK_ITEMS'
      |'RECOMMENDATION_STRATEGY_EXCEPTION'
      |'RECORDFILTER_ENCRYPTED_FIELDS_NOT_SUPPORTED'
      |'RECORDFILTER_GEOLOCATION_FIELDS_NOT_SUPPORTED'
      |'RECORDFILTER_INVALID_DATATYPE'
      |'RECORDFILTER_INVALID_ELEMENT'
      |'RECORDFILTER_INVALID_OPERATOR'
      |'RECORDFILTER_INVALID_REFERENCE'
      |'RECORDFILTER_MISSING_DATATYPE'
      |'RECORDFILTER_MULTIPLE_QUERIES_SAME_FIELD'
      |'RECORDFILTER_NON_PRIMITIVE'
      |'RECORDLOOKUP_IDASSIGNMENT_VARIABLE_INCOMPATIBLE_DATATYPE'
      |'RECORDLOOKUP_IDASSIGNMENT_VARIABLE_NOT_FOUND'
      |'RECORDUPDATE_MISSING_FILTERS'
      |'RECORD_CHANGE_LISTENER_CONDITIONS_NON_RECORD_GLOBAL_VARIABLE'
      |'RECORD_CHANGE_LISTENER_CONDITIONS_NOT_SUPPORTED'
      |'RECORD_CHANGE_LISTENER_CONDITIONS_THRESHOLD_BREACHED'
      |'RECORD_CREATE_MISSING_FILTERS'
      |'RECORD_PRIOR_VALUE_REMAIN_SAME_BEFORE_TRIGGER'
      |'REFERENCED_ELEMENT_NOT_FOUND'
      |'REFERENCE_NOT_SUPPORTED'
      |'REPEATER_API_VERSION_NOT_SUPPORTED'
      |'REPEATER_API_VERSION_UPGRADE'
      |'REPEATER_COMPONENT_CURRENTLY_NOT_SUPPORTED'
      |'REPEATER_DATA_SOURCE_INCOMPATIBLE_TYPE'
      |'REPEATER_REMOVED_FIELD_INVALID'
      |'REQUIRED_VARIABLE_INVALID'
      |'REQUIRED_VARIABLE_MISSING'
      |'RESOURCE_NOT_SUPPORTED'
      |'RPA_FLOW_ROBOT_POOL_INFORMATION_INCOMPLETE'
      |'RULE_MISSING_CONDITION'
      |'RULE_REQUIRE_RECORD_CHANGED_NEVER_CHECKED'
      |'RUN_AS_USER_NOT_SUPPORTED'
      |'RUN_AS_USER_REQUIRED_WHEN_SPECIFYING_ASSIGNEE'
      |'SCHEDULE_TRIGGERED_FLOW_REQUIRES_DEFAULT_WORKFLOW_USER'
      |'SCREENACTION_CALLS_FLOW_WITH_INSECURE_RUN_AS_MODE'
      |'SCREENACTION_INVALID_INPUT_PARAM'
      |'SCREENACTION_MISSING_REQUIRED_NAME'
      |'SCREENACTION_MISSING_REQUIRED_TYPE'
      |'SCREENACTION_NOT_SUPPORTED_IN_ORG'
      |'SCREENACTION_TRIGGER_EVENT_SOURCE_NOT_ON_SAME_SCREEN'
      |'SCREENACTION_TRIGGER_HANDLER_EXCEEDS_CONDITION_LIMIT'
      |'SCREENACTION_TRIGGER_HANDLER_NOT_VALID_SCREEN_ACTION'
      |'SCREENACTION_TYPE_NOT_SUPPORTED_IN_ORG'
      |'SCREENCOMPONENT_CONTAINS_VISIBILITY_RULE'
      |'SCREENFIELD_API_VERSION_NOT_SUPPORTED'
      |'SCREENFIELD_BOOLEAN_ISREQUIRED_IS_FALSE'
      |'SCREENFIELD_CANNOT_HAVE_BOTH_DEFAULTVALUE_AND_DEFAULTSELECTEDCHOICEREFERENCE'
      |'SCREENFIELD_DEFAULTVALUE_NOT_SUPPORTED'
      |'SCREENFIELD_EXTENSION_DUPLICATE_INPUT_PARAM'
      |'SCREENFIELD_EXTENSION_DUPLICATE_OUTPUT_PARAM'
      |'SCREENFIELD_EXTENSION_IMPLEMENTATION_INVALID'
      |'SCREENFIELD_EXTENSION_INPUT_ATTRIBUTE_INVALID'
      |'SCREENFIELD_EXTENSION_NAME_INVALID'
      |'SCREENFIELD_EXTENSION_NAME_MISSING'
      |'SCREENFIELD_EXTENSION_NAME_NOT_SUPPORTED'
      |'SCREENFIELD_EXTENSION_OUTPUT_ATTRIBUTE_INVALID'
      |'SCREENFIELD_EXTENSION_REQUIRED_INPUT_MISSING'
      |'SCREENFIELD_INPUTS_NOT_SUPPORTED'
      |'SCREENFIELD_INPUTS_ON_NEXT_NAV_TO_ASSOC_SCRN_NOT_SUPPORTED'
      |'SCREENFIELD_INVALID_DATATYPE'
      |'SCREENFIELD_MULTISELECTCHOICE_SEMICOLON_NOT_SUPPORTED'
      |'SCREENFIELD_OBJECTFIELDREFERENCE_INVALID_FORMAT'
      |'SCREENFIELD_OBJECTPROVIDED_CANNOT_HAVE_DEFAULTVALUE'
      |'SCREENFIELD_OBJECTPROVIDED_CANNOT_HAVE_HELPTEXT'
      |'SCREENFIELD_OBJECTPROVIDED_INVALID_DATATYPE'
      |'SCREENFIELD_OBJECTPROVIDED_ISREQUIRED_NOT_SUPPORTED'
      |'SCREENFIELD_OBJECTPROVIDED_LIGHTNING_RUNTIME_DISABLED'
      |'SCREENFIELD_OBJECTPROVIDED_MISSING_OBJECTFIELDREFERENCE'
      |'SCREENFIELD_OUTPUTS_NOT_SUPPORTED'
      |'SCREENFIELD_REGION_CONTAINS_DUPLICATE_INPUT_PARAMETER_VALUES'
      |'SCREENFIELD_REGION_INPUT_PARAMETER_NOT_SUPPORTED'
      |'SCREENFIELD_REGION_MISSING_REQUIRED_PERMISSIONS'
      |'SCREENFIELD_REGION_NOT_IN_CONTAINER'
      |'SCREENFIELD_REGION_REQUIRED_INPUT_PARAMETER_MISSING'
      |'SCREENFIELD_REGION_WIDTH_SUM_EXCEEDS_LIMIT'
      |'SCREENFIELD_REGION_WIDTH_VALUE_INVALID'
      |'SCREENFIELD_TYPE_NOT_SUPPORTED'
      |'SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_API_VERSION'
      |'SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'SCREENFIELD_USERINPUT_NOT_SUPPORTED_FOR_CHOICETYPE'
      |'SCREENFIELD_VALIDATIONRULE_NOT_SUPPORTED'
      |'SCREENFIELD_VALIDATION_RULES_NOT_SUPPORTED_FOR_ENVIRONMENT'
      |'SCREENFIELD_VALIDATION_RULES_NOT_SUPPORTED_FOR_EXTENSIONS_WITHOUT_OUTPUTS'
      |'SCREENFOOTER_MERGEFIELD_NOT_SUPPORTED'
      |'SCREENRULE_ACTION_INVALID_ATTRIBUTE'
      |'SCREENRULE_ACTION_INVALID_ATTRIBUTE_FOR_API_VERSION'
      |'SCREENRULE_ACTION_INVALID_VALUE'
      |'SCREENRULE_ACTION_MISSING_ATTRIBUTE'
      |'SCREENRULE_ACTION_MISSING_FIELDREFERENCE'
      |'SCREENRULE_ACTION_MISSING_VALUE'
      |'SCREENRULE_ATTRIBUTE_NOT_SUPPORTED_FOR_SCREENFIELD'
      |'SCREENRULE_FIELD_NOT_FOUND_ON_SCREEN'
      |'SCREENRULE_MISSING_ACTION'
      |'SCREENRULE_NOT_SUPPORTED_IN_ORG'
      |'SCREENRULE_SCREENFIELD_NOT_VISIBLE'
      |'SCREENRULE_VISIBILITY_NOT_SUPPORTED_IN_ORG'
      |'SCREEN_ACTION_NOT_FOUND_WITH_NAME_AND_TYPE'
      |'SCREEN_ALLOWBACK_ALLOWFINISH_BOTH_FALSE'
      |'SCREEN_CONTAINS_LIGHTNING_COMPONENT'
      |'SCREEN_CONTAINS_REGION_CONTAINER_COMPONENT'
      |'SCREEN_FIELD_REGION_CONTAINER_TYPE_INVALID_VALUE'
      |'SCREEN_FIELD_REGION_CONTAINER_TYPE_MISSING'
      |'SCREEN_FIELD_SECTION_HEADER_INVALID_VALUE'
      |'SCREEN_FIELD_SECTION_HEADER_MISSING'
      |'SCREEN_MISSING_FOOTER_AND_LIGHTNING_COMPONENT'
      |'SCREEN_MISSING_LABEL'
      |'SCREEN_MULTISELECTFIELD_DOESNT_SUPPORT_CHOICE_WITH_USERINPUT'
      |'SCREEN_PAUSEDTEXT_NOT_SHOWN_WHEN_ALLOWPAUSE_IS_FALSE'
      |'SEND_EMAIL_UNSUPPORTED'
      |'SETTING_FIELD_MAKES_OTHER_FIELD_REQUIRED'
      |'SETTING_FIELD_MAKES_OTHER_FIELD_UNSUPPORTED'
      |'SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_UNSUPPORTED'
      |'SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_VALUE_UNSUPPORTED'
      |'SETUP_REFERENCE_ALLOWED_ONLY_IN_ACTION_INPUT'
      |'SETUP_REFERENCE_TYPE_NOT_PACKAGEABLE'
      |'SETUP_REFERENCE_VALUE_REQUIRES_DEVELOPER_NAMES'
      |'SLACK_API_EXCEPTION_EXTENSION'
      |'SOBJECT_ELEMENT_INCOMPATIBLE_DATATYPE'
      |'SOBJECT_ELEMENT_MISMATCHED_OBJECTTYPE'
      |'SORT_ENCRYPTED_FIELDS_NOT_SUPPORTED'
      |'SORT_FIELD_MISSING'
      |'SORT_FIELD_NOT_SUPPORTED'
      |'SORT_GEOLOCATION_FIELDS_NOT_SUPPORTED'
      |'SORT_LIMIT_INVALID'
      |'SORT_ORDER_MISSING'
      |'SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_REQUIRED'
      |'SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_VALUE_REQUIRED'
      |'STAGE_NAME_NOT_FULLY_QUALIFIED'
      |'STAGE_STEP_ASSIGNEE_NOT_SUPPORTED'
      |'START_ELEMENT_MISSING'
      |'SUBFLOW_DESKTOP_DESIGNER_FLOWS_NOT_SUPPORTED'
      |'SUBFLOW_DIFFERENT_RUNMODE'
      |'SUBFLOW_INPUT_MISSING_NAME'
      |'SUBFLOW_INPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE'
      |'SUBFLOW_INPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE'
      |'SUBFLOW_INPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW'
      |'SUBFLOW_INPUT_VARIABLE_NO_INPUT_ACCESS'
      |'SUBFLOW_INVALID_NAME'
      |'SUBFLOW_INVALID_REFERENCE'
      |'SUBFLOW_MASTER_FLOW_TYPE_NOT_AUTOLAUNCHED'
      |'SUBFLOW_MISSING_NAME'
      |'SUBFLOW_NO_ACTIVE_VERSION'
      |'SUBFLOW_OUTPUT_INCOMPATIBLE_DATATYPES'
      |'SUBFLOW_OUTPUT_MISMATCHED_APEX_CLASS'
      |'SUBFLOW_OUTPUT_MISMATCHED_COLLECTIONTYPES'
      |'SUBFLOW_OUTPUT_MISMATCHED_OBJECTS'
      |'SUBFLOW_OUTPUT_MISSING_ASSIGNTOREFERENCE'
      |'SUBFLOW_OUTPUT_MISSING_NAME'
      |'SUBFLOW_OUTPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE'
      |'SUBFLOW_OUTPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE'
      |'SUBFLOW_OUTPUT_TARGET_DOES_NOT_EXIST_IN_MASTER_FLOW'
      |'SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_MASTERFLOW'
      |'SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW'
      |'SUBFLOW_OUTPUT_VARIABLE_NO_OUTPUT_ACCESS'
      |'SUBFLOW_PROCESSTYPE_NOT_SUPPORTED'
      |'SUBFLOW_PROCESS_TYPE_INCOMPATIBLE'
      |'SUBFLOW_REFERENCES_MASTERFLOW'
      |'SURVEY_ADVANCED_CONDITION_LOGIC_NOT_SUPPORTED'
      |'SURVEY_CHOICE_NOT_REFERENCED_BY_A_QUESTION'
      |'SURVEY_CHOICE_REFERENCED_BY_MULTIPLE_QUESTIONS'
      |'SURVEY_ELEMENT_NEVER_REACHED'
      |'SURVEY_ENRICH_INVALID_CONFIGURATION'
      |'SURVEY_INACTIVE_SUBFLOWS'
      |'SURVEY_INVALID_ATTACHMENT_QUESTION_CONFIGURATION'
      |'SURVEY_INVALID_CMT_CONFIGURED'
      |'SURVEY_INVALID_CUSTOM_THANK_YOU_CONFIGURATION'
      |'SURVEY_INVALID_LINK_TARGET_IN_QUESTION_LABEL'
      |'SURVEY_INVALID_MATRIX_QUESTION_CONFIGURATION'
      |'SURVEY_INVALID_MERGE_FIELD_CONFIGURATION'
      |'SURVEY_INVALID_OUTPUT_VARIABLE'
      |'SURVEY_MISSING_QUESTION_OR_SUBFLOW'
      |'SURVEY_MISSING_REQUIRED_VARIABLES'
      |'SURVEY_MULTIPLE_SCREENS_CANNOT_CONNECT_TO_SAME_DECISION'
      |'SURVEY_NESTED_SUBFLOWS'
      |'SURVEY_NONSURVEY_SUBFLOWS'
      |'SURVEY_PAGE_CAN_HAVE_ONLY_ONE_QUESTION'
      |'SURVEY_RULE_INVALID_LEFT_OPERAND'
      |'SURVEY_RULE_INVALID_RIGHT_OPERAND'
      |'SURVEY_SAVE_ERROR'
      |'SURVEY_SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_QUESTION'
      |'SURVEY_START_ELEMENT_INVALID'
      |'SURVEY_VARIABLE_ACCESS_INVALID'
      |'SYSTEM_MODE_NOT_ALLOWED'
      |'SYSTEM_VARIABLE_MISSING_FIELD_REFERENCE'
      |'TEMPLATED_PRVD_TYPE_INCOMPATIBLE_FLOW_TYPE'
      |'TEMPLATED_SCREENFIELD_INFO_MISSING'
      |'TEMPLATED_SCREENFIELD_INVALID'
      |'TEMPLATED_SCREENFIELD_NOT_SUPPORTED'
      |'TEMPLATED_SCREENFIELD_PROPERTIES_INVALID'
      |'TEMPLATED_SCREENFIELD_PROPERTIES_MISSING'
      |'TEMPLATED_SCREENFIELD_PRVD_TYPE_INVALID'
      |'TEMPLATED_SCREENFIELD_RNDR_LWC_INVALID'
      |'TEMPLATED_SCREEN_FIELD_REQUIRES_AUTOMATIC_OUTPUT'
      |'TEMPORARY_QUERY_MORE_FAILURE'
      |'TRIGGERED_FLOW_REDUNDANT_QUERY'
      |'TRIGGERING_RECORD_UPDATE_REQUIRES_INPUTASSIGNMENTS'
      |'TRIGGER_ORDER_NOT_SUPPORTED'
      |'TRIGGER_TYPE_CONTEXT_OBJECT_NOT_SUPPORTED'
      |'TRIGGER_TYPE_ELEMENT_NOT_SUPPORTED'
      |'TRIGGER_TYPE_INCOMPATIBLE_WITH_PROCESS_TYPE'
      |'TRIGGER_TYPE_NOT_ALLOWED_FOR_SUBFLOW'
      |'TYPE_MAPPING_DUPLICATED'
      |'TYPE_MAPPING_NAME_MISSING'
      |'TYPE_MAPPING_NOT_FOUND'
      |'TYPE_MAPPING_NOT_SUPPORTED'
      |'TYPE_MAPPING_NOT_SUPPORTED_FOR_API_VERSION'
      |'TYPE_MAPPING_NOT_SUPPORTED_FOR_PROCESS_TYPE'
      |'UNAUTHORIZED_USER_FOR_CURSOR'
      |'UNEXPECTED_ERROR'
      |'VALIDATION_EXCEPTION'
      |'VALUE_CHAR_LIMIT_EXCEEDED'
      |'VARIABLE_FIELD_IS_READ_ONLY'
      |'VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE'
      |'VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE_AND_COLLECTION'
      |'VARIABLE_FIELD_REQUIRED_FOR_DATATYPE'
      |'VARIABLE_NAME_IS_RESERVED_FOR_PROCESS_TYPE'
      |'VARIABLE_SCALE_EXCEEDS_LIMIT'
      |'VARIABLE_SCALE_NEGATIVE_INTEGER'
      |'VARIABLE_SCALE_NULL'
      |'VERSION_NOT_VALID'
      |'VISIBILITY_RULE_EXCEEDS_CONDITION_LIMIT'
      |'VISIBILITY_RULE_NOT_AVAILABLE_IN_ORG'
      |'VISIBILITY_RULE_NOT_SUPPORTED_FOR_API_VERSION'
      |'VISIBILITY_RULE_NOT_SUPPORTED_FOR_PROCESSTYPE'
      |'VISIBILITY_RULE_NO_CONDITIONS'
      |'WAITEVENT_BATCH_SIZE_NOT_SUPPORTED_FOR_EVENTTYPE'
      |'WAITEVENT_CHANNEL_ACTIONCALL_MISMATCH'
      |'WAITEVENT_DEFAULT_CONNECTOR_MISSING_LABEL'
      |'WAITEVENT_DUPLICATE_INPUT_PARAM'
      |'WAITEVENT_INPUT_NOT_SUPPORTED_FOR_EVENTTYPE'
      |'WAITEVENT_INPUT_REQUIRES_LITERAL_VALUE'
      |'WAITEVENT_INVALID_CONDITION_LOGIC'
      |'WAITEVENT_INVALID_VALUE'
      |'WAITEVENT_MISSING'
      |'WAITEVENT_MISSING_CONNECTOR'
      |'WAITEVENT_MISSING_EVENTTYPE'
      |'WAITEVENT_NOT_SUCCEEDING_ACTIONCALL'
      |'WAITEVENT_OBJECT_NOT_SUPPORTED_FOR_EVENTTYPE'
      |'WAITEVENT_OUTPUT_NOT_SUPPORTED_FOR_EVENTTYPE'
      |'WAITEVENT_RELATIVEALARM_INVALID_DATETIME_FIELD'
      |'WAITEVENT_RELATIVEALARM_INVALID_FIELD'
      |'WAITEVENT_RELATIVEALARM_INVALID_OBJECTTYPE'
      |'WAITEVENT_RELATIVEALARM_INVALID_OFFSETNUMBER'
      |'WAITEVENT_RELATIVEALARM_INVALID_OFFSETUNIT'
      |'WAITEVENT_REQUIRED_INPUT_MISSING'
      |'WAITEVENT_RESUME_DATE_IN_PAST'
      |'WAITEVENT_TYPE_INVALID_OR_NOT_SUPPORTED'
      |'WORKFLOW_MISSING_PROCESSMETADATAVALUES'
      |'WORKFLOW_OBJECTTYPE_NOT_FOUND'
      |'WORKFLOW_OBJECTTYPE_NOT_SUPPORTED'
      |'WORKFLOW_OBJECTVARIABLE_AND_OLDOBJECTVARIABLE_REFERENCE_SAME_SOBJECT_VARIABLE'
      |'WORKFLOW_OBJECTVARIABLE_DOESNT_SUPPORT_INPUT'
      |'WORKFLOW_OLDOBJECTVARIABLE_DOESNT_SUPPORT_INPUT'
      |'WORKFLOW_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME'
      |'WORKFLOW_PROCESS_METADATAVALUES_MISSING_NAME'
      |'WORKFLOW_RECURSIVECOUNTVARIABLE_DOESNT_SUPPORT_INPUT'
      |'WORKFLOW_RULE_NOT_DEACTIVATED'
      |'WORKFLOW_TRIGGERTYPE_INVALID_VALUE'

export type TestLevel = 'NoTestRun'
      |'RunSpecifiedTests'
      |'RunLocalTests'
      |'RunAllTestsInOrg'

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
      |'Data_access'
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

export type StatusCode = 'ALERT_NOTIFICATION_LIMIT_EXCEEDED'
      |'ALL_OR_NONE_OPERATION_ROLLED_BACK'
      |'ALREADY_APPLIED'
      |'ALREADY_IN_PROCESS'
      |'ALREADY_REDEEMED_VOUCHER'
      |'APEX_DATA_ACCESS_RESTRICTION'
      |'APEX_FAILED'
      |'API_TASK_INVALID_REQUEST'
      |'API_TASK_LIMIT_REACHED'
      |'APPLICATION_ALREADY_EXISTS'
      |'ASSIGNEE_TYPE_REQUIRED'
      |'ATTRIBUTE_DEFINITION_LIMIT_EXCEEDED'
      |'AURA_COMPILE_ERROR'
      |'AUTH_PROVIDER_NEEDS_AUTH'
      |'AUTH_PROVIDER_NOT_FOUND'
      |'B2B_SEARCH_ADMIN_ERROR'
      |'BAD_CUSTOM_ENTITY_PARENT_DOMAIN'
      |'BAD_GATEWAY'
      |'BAD_LIST_UNSUBSCRIBE_DATA'
      |'BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED'
      |'BLOCKED_EXCLUSIVE'
      |'CANNOT_CASCADE_PRODUCT_ACTIVE'
      |'CANNOT_CHANGE_FIELD_TYPE_OF_APEX_REFERENCED_FIELD'
      |'CANNOT_CHANGE_FIELD_TYPE_OF_REFERENCED_FIELD'
      |'CANNOT_CREATE_ANOTHER_MANAGED_PACKAGE'
      |'CANNOT_DEACTIVATE_DIVISION'
      |'CANNOT_DELETE_GLOBAL_ACTION_LIST'
      |'CANNOT_DELETE_LAST_DATED_CONVERSION_RATE'
      |'CANNOT_DELETE_MANAGED_OBJECT'
      |'CANNOT_DISABLE_LAST_ADMIN'
      |'CANNOT_ENABLE_IP_RESTRICT_REQUESTS'
      |'CANNOT_EXECUTE_FLOW_TRIGGER'
      |'CANNOT_FREEZE_SELF'
      |'CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY'
      |'CANNOT_MODIFY_MANAGED_OBJECT'
      |'CANNOT_PASSWORD_LOCKOUT'
      |'CANNOT_POST_TO_ARCHIVED_GROUP'
      |'CANNOT_RENAME_APEX_REFERENCED_FIELD'
      |'CANNOT_RENAME_APEX_REFERENCED_OBJECT'
      |'CANNOT_RENAME_REFERENCED_FIELD'
      |'CANNOT_RENAME_REFERENCED_OBJECT'
      |'CANNOT_REPARENT_RECORD'
      |'CANNOT_UPDATE_CONVERTED_LEAD'
      |'CANNOT_UPDATE_IS_THIRD_PARTY'
      |'CANNOT_UPDATE_PAYMENT_METHOD_SET'
      |'CANT_DISABLE_CORP_CURRENCY'
      |'CANT_UNSET_CORP_CURRENCY'
      |'CART_DELIVERY_GROUP_NOT_FOUND'
      |'CART_ITEM_LIMIT_EXCEEDED_FOR_COUPONS'
      |'CART_ITEM_NOT_FOUND'
      |'CART_NOT_FOUND'
      |'CDS_UNCOMMITTED_WORK'
      |'CHECKOUT_CONFLICT'
      |'CHECKOUT_EXPIRED'
      |'CHECKOUT_INVALIDATED'
      |'CHECKOUT_LOCKED'
      |'CHECKOUT_NOT_FOUND'
      |'CHECKOUT_UNAUTHORIZED'
      |'CHECKOUT_VALIDATION'
      |'CHILD_SHARE_FAILS_PARENT'
      |'CIRCULAR_DEPENDENCY'
      |'CLEAN_SERVICE_ERROR'
      |'CLM_INSUFFICIENT_ACCESS'
      |'CLM_RECORD_NOT_FOUND'
      |'CLONE_FIELD_INTEGRITY_EXCEPTION'
      |'CLONE_NOT_SUPPORTED'
      |'CMS_FOLDER_ITEM_MOVE_FAILED'
      |'COLLISION_DETECTED'
      |'COMMERCE_SEARCH_INDEXING_SYSTEM_ERROR'
      |'COMMERCE_SEARCH_INVALID_RESOURCE'
      |'COMMERCE_SEARCH_MQ_ERROR'
      |'COMMERCE_SEARCH_PROVIDER_LIMIT_EXCEEDED'
      |'COMMERCE_SEARCH_RESOURCE_NOT_FOUND'
      |'COMMERCE_SEARCH_UNSUPPORTED_LANGUAGE_ERROR'
      |'COMMERCIAL_CONTROL_ERROR'
      |'COMMUNITY_NOT_ACCESSIBLE'
      |'CONFLICT'
      |'CONFLICTING_ENVIRONMENT_HUB_MEMBER'
      |'CONFLICTING_SSO_USER_MAPPING'
      |'CONTENT_NOT_FOUND'
      |'CONTENT_SEARCH_NOT_ENABLED'
      |'CONTENT_TYPE_DISABLED_FOR_API'
      |'CONTENT_TYPE_NOT_FOUND'
      |'COPILOT_INACTIVE_CONFIG'
      |'COPILOT_SESSION_ENDED'
      |'COUPON_REDEMPTION_LIMIT_EXCEEDED'
      |'CT_DEPTH_LIMIT_EXCEEDED'
      |'CT_DEVELOPER_NAME_NOT_UPDATABLE'
      |'CT_ENTITY_DELETE_ERROR'
      |'CT_ENTITY_SAVE_ERROR'
      |'CT_INVALID_DEPTH'
      |'CT_INVALID_QUERY_WORD'
      |'CT_INVALID_TAXONOMY_ID'
      |'CT_INVALID_TERM_ID'
      |'CT_NONEMPTY_TERM_REFERENCE'
      |'CT_PARENT_TERM_CYCLE'
      |'CT_TERM_SEARCH_ERROR'
      |'CUSTOM_APEX_ERROR'
      |'CUSTOM_CLOB_FIELD_LIMIT_EXCEEDED'
      |'CUSTOM_ENTITY_OR_FIELD_LIMIT'
      |'CUSTOM_FIELD_INDEX_LIMIT_EXCEEDED'
      |'CUSTOM_INDEX_EXISTS'
      |'CUSTOM_LINK_LIMIT_EXCEEDED'
      |'CUSTOM_METADATA_LIMIT_EXCEEDED'
      |'CUSTOM_METADATA_REL_FIELD_MANAGEABILITY'
      |'CUSTOM_SETTINGS_LIMIT_EXCEEDED'
      |'CUSTOM_TAB_LIMIT_EXCEEDED'
      |'DATAASSESSMENT_CONFIG_ASSESSMENT_IN_PROGRESS_ERROR'
      |'DATAASSESSMENT_CONFIG_SERVICE_ERROR'
      |'DATACLOUDADDRESS_NO_RECORDS_FOUND'
      |'DATACLOUDADDRESS_PROCESSING_ERROR'
      |'DATACLOUDADDRESS_SERVER_ERROR'
      |'DATA_MAPPING_NOT_FOUND'
      |'DATA_MAPPING_SCHEMA_NOT_FOUND'
      |'DATA_TRANSFER_RECORD_LIMIT_EXCEEDED'
      |'DATA_TRANSLATION_TOGGLED_BEFORE_INCREMENTAL_INDEX'
      |'DATA_TYPE_NOT_SUPPORTED'
      |'DATE_OUT_OF_RANGE'
      |'DELETE_FAILED'
      |'DELETE_NOT_ALLOWED'
      |'DELETE_OPERATION_TOO_LARGE'
      |'DELETE_REQUIRED_ON_CASCADE'
      |'DEPENDENCY_EXISTS'
      |'DOCUMENT_VERSION_EXISTS'
      |'DUPLICATES_DETECTED'
      |'DUPLICATE_CASE_SOLUTION'
      |'DUPLICATE_COMM_NICKNAME'
      |'DUPLICATE_CUSTOM_ENTITY_DEFINITION'
      |'DUPLICATE_CUSTOM_TAB_MOTIF'
      |'DUPLICATE_DEVELOPER_NAME'
      |'DUPLICATE_EXTERNAL_ID'
      |'DUPLICATE_MASTER_LABEL'
      |'DUPLICATE_SENDER_DISPLAY_NAME'
      |'DUPLICATE_USERNAME'
      |'DUPLICATE_VALUE'
      |'EMAIL_ADDRESS_BOUNCED'
      |'EMAIL_EXTERNAL_TRANSPORT_CONNECTION_ERROR'
      |'EMAIL_EXTERNAL_TRANSPORT_PERMISSION_ERROR'
      |'EMAIL_EXTERNAL_TRANSPORT_TOKEN_ERROR'
      |'EMAIL_EXTERNAL_TRANSPORT_TOO_LARGE_ERROR'
      |'EMAIL_EXTERNAL_TRANSPORT_TOO_MANY_REQUESTS_ERROR'
      |'EMAIL_EXTERNAL_TRANSPORT_UNKNOWN_ERROR'
      |'EMAIL_NOT_PROCESSED_DUE_TO_PRIOR_ERROR'
      |'EMAIL_OPTED_OUT'
      |'EMAIL_TEMPLATE_FORMULA_ERROR'
      |'EMAIL_TEMPLATE_MERGEFIELD_ACCESS_ERROR'
      |'EMAIL_TEMPLATE_MERGEFIELD_ERROR'
      |'EMAIL_TEMPLATE_MERGEFIELD_VALUE_ERROR'
      |'EMAIL_TEMPLATE_PROCESSING_ERROR'
      |'EMPTY_CATALOG'
      |'EMPTY_INGESTION_JOB'
      |'EMPTY_SCONTROL_FILE_NAME'
      |'ENHANCED_EMAIL_TEMPLATE_COMPILATION_ERROR'
      |'ENTITY_FAILED_IFLASTMODIFIED_ON_UPDATE'
      |'ENTITY_IS_ARCHIVED'
      |'ENTITY_IS_DELETED'
      |'ENTITY_IS_LOCKED'
      |'ENTITY_SAVE_ERROR'
      |'ENTITY_SAVE_VALIDATION_ERROR'
      |'ENVIRONMENT_HUB_MEMBERSHIP_CONFLICT'
      |'ENVIRONMENT_HUB_MEMBERSHIP_ERROR_JOINING_HUB'
      |'ENVIRONMENT_HUB_MEMBERSHIP_USER_ALREADY_IN_HUB'
      |'ENVIRONMENT_HUB_MEMBERSHIP_USER_NOT_ORG_ADMIN'
      |'ERROR_CALCULATING_EXPIRY_DATE'
      |'ERROR_IN_MAILER'
      |'EXCEEDED_MAX_SEMIJOIN_SUBSELECTS_WRITE'
      |'EXCHANGE_WEB_SERVICES_URL_INVALID'
      |'EXTERNAL_RESOURCE_FORBIDDEN'
      |'FAILED_ACTIVATION'
      |'FAILED_DUE_TO_OTHER_INPUTS'
      |'FAILED_TO_RESOLVE_MAPPING'
      |'FAILED_TO_RESOLVE_SCHEMA_INFORMATION'
      |'FIELD_CUSTOM_VALIDATION_EXCEPTION'
      |'FIELD_FILTER_VALIDATION_EXCEPTION'
      |'FIELD_INTEGRITY_EXCEPTION'
      |'FIELD_KEYWORD_LIST_MATCH_LIMIT'
      |'FIELD_MAPPING_ERROR'
      |'FIELD_MODERATION_RULE_BLOCK'
      |'FIELD_NOT_UPDATABLE'
      |'FILE_EXTENSION_NOT_ALLOWED'
      |'FILE_SIZE_LIMIT_EXCEEDED'
      |'FILTERED_LOOKUP_LIMIT_EXCEEDED'
      |'FIND_DUPLICATES_ERROR'
      |'FLOW_EXCEPTION'
      |'FORBIDDEN_EXCEPTION'
      |'FUNCTIONALITY_NOT_ENABLED'
      |'GET_EINSTEIN_TENANT_ERROR'
      |'GUEST_INSUFFICIENT_ACCESS'
      |'HAS_PUBLIC_REFERENCES'
      |'HTML_FILE_UPLOAD_NOT_ALLOWED'
      |'IAS_AM_AUTH_BAD_REQUEST'
      |'IAS_AM_AUTH_UNAUTHORIZED'
      |'IAS_INVALID_AUTH'
      |'IAS_INVALID_REQUEST_PARAMETER'
      |'IAS_RECORD_DOES_NOT_EXIST'
      |'IAS_TENANT_NOT_PROVISIONED'
      |'IAS_UNCOMMITTED_WORK'
      |'IMAGE_TOO_LARGE'
      |'INACTIVE_CONTEXT_DEFINITION'
      |'INACTIVE_OWNER_OR_USER'
      |'INACTIVE_RULE_ERROR'
      |'INDEX_ITEM_LIMIT_EXCEEDED'
      |'INDEX_PAYLOAD_NOT_FOUND'
      |'INDEX_SINGLE_PAYLOAD_SIZE_LIMIT_EXCEEDED'
      |'INGESTION_JOB_RECORDS_LIMIT_EXCEEDED'
      |'INGESTION_TOTAL_FILE_SIZE_LIMIT_EXCEEDED'
      |'INPUTPARAM_INCOMPATIBLE_DATATYPE'
      |'INSERT_UPDATE_DELETE_NOT_ALLOWED_DURING_MAINTENANCE'
      |'INSUFFICIENT_ACCESS'
      |'INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY'
      |'INSUFFICIENT_ACCESS_OR_READONLY'
      |'INSUFFICIENT_ACCESS_TO_INSIGHTSEXTERNALDATA'
      |'INSUFFICIENT_BALANCE'
      |'INSUFFICIENT_BENEFIT_REMAINING'
      |'INSUFFICIENT_CREDITS'
      |'INTEGRATION_CANCELLED'
      |'INTERNAL_ERROR'
      |'INVALID_ACCESS_LEVEL'
      |'INVALID_ACCESS_TOKEN'
      |'INVALID_ACCOUNT'
      |'INVALID_ACTION_VERSION'
      |'INVALID_API_INPUT'
      |'INVALID_ARGUMENT_TYPE'
      |'INVALID_ASSIGNEE_TYPE'
      |'INVALID_ASSIGNMENT_RULE'
      |'INVALID_AUTH_HEADER'
      |'INVALID_BATCH_OPERATION'
      |'INVALID_BUSINESS_HOURS_NAME'
      |'INVALID_CATEGORY_NETWORK'
      |'INVALID_CHECKOUT_INPUT'
      |'INVALID_CONTACT'
      |'INVALID_CONTENT_TYPE'
      |'INVALID_CREDIT_CARD_INFO'
      |'INVALID_CROSS_REFERENCE_KEY'
      |'INVALID_CROSS_REFERENCE_TYPE_FOR_FIELD'
      |'INVALID_CURRENCY_CONV_RATE'
      |'INVALID_CURRENCY_CORP_RATE'
      |'INVALID_CURRENCY_ISO'
      |'INVALID_DATASET_REFERENCE_INPUT'
      |'INVALID_DATA_CATEGORY_GROUP_REFERENCE'
      |'INVALID_DATA_URI'
      |'INVALID_EBV_OPERATION'
      |'INVALID_EMAIL_ADDRESS'
      |'INVALID_EMPTY_KEY_OWNER'
      |'INVALID_ENTITY_FOR_MATCH_ENGINE_ERROR'
      |'INVALID_ENTITY_FOR_MATCH_OPERATION_ERROR'
      |'INVALID_ENTITY_FOR_UPSERT'
      |'INVALID_ENVIRONMENT_HUB_MEMBER'
      |'INVALID_EVENT_DELIVERY'
      |'INVALID_EVENT_INPUT'
      |'INVALID_EVENT_SUBSCRIPTION'
      |'INVALID_EXTENSION_ID'
      |'INVALID_EXTERNAL_ID_FIELD_NAME'
      |'INVALID_FIELD'
      |'INVALID_FIELD_FOR_INSERT_UPDATE'
      |'INVALID_FIELD_WHEN_USING_TEMPLATE'
      |'INVALID_FILTER_ACTION'
      |'INVALID_GOOGLE_DOCS_URL'
      |'INVALID_ID_FIELD'
      |'INVALID_INET_ADDRESS'
      |'INVALID_INPUT'
      |'INVALID_INPUT_FORMAT'
      |'INVALID_KEY_FIELD_INPUT'
      |'INVALID_LINEITEM_CLONE_STATE'
      |'INVALID_MARKUP'
      |'INVALID_MASTER_OR_TRANSLATED_SOLUTION'
      |'INVALID_MERCHANT_ACCOUNT_MODE'
      |'INVALID_MERCHANT_ACCOUNT_MODE_OR_STATUS'
      |'INVALID_MERGE_RECORD'
      |'INVALID_MESSAGE_ID_REFERENCE'
      |'INVALID_NAMESPACE_PREFIX'
      |'INVALID_OAUTH_URL'
      |'INVALID_OPERATION'
      |'INVALID_OPERATOR'
      |'INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST'
      |'INVALID_OWNER'
      |'INVALID_PACKAGE_LICENSE'
      |'INVALID_PACKAGE_VERSION'
      |'INVALID_PARTNER_NETWORK_STATUS'
      |'INVALID_PAYLOAD_VERSION'
      |'INVALID_PERSON_ACCOUNT_OPERATION'
      |'INVALID_PROFILE'
      |'INVALID_PROMOTION'
      |'INVALID_PROVIDER_TYPE'
      |'INVALID_QUERY_KEY'
      |'INVALID_QUERY_LOCATOR'
      |'INVALID_QUERY_VALUE'
      |'INVALID_READ_ONLY_USER_DML'
      |'INVALID_RECEIVEDDOCUMENTID_ATTACHMENT'
      |'INVALID_RECORD_ATTRIBUTE_VALUE'
      |'INVALID_RECORD_TYPE'
      |'INVALID_REFRESH_TOKEN'
      |'INVALID_REORDER_PORTAL_RECORD_ASSOCIATION'
      |'INVALID_REQUEST_STATE'
      |'INVALID_RUNTIME_VALUE'
      |'INVALID_SAVE_AS_ACTIVITY_FLAG'
      |'INVALID_SCS_INBOUND_USER'
      |'INVALID_SEARCH_PROVIDER_REQUEST'
      |'INVALID_SESSION_ID'
      |'INVALID_SETUP_OWNER'
      |'INVALID_SIGNUP_COUNTRY'
      |'INVALID_SIGNUP_OPTION'
      |'INVALID_SITE_DELETE_EXCEPTION'
      |'INVALID_SITE_FILE_IMPORTED_EXCEPTION'
      |'INVALID_SITE_FILE_TYPE_EXCEPTION'
      |'INVALID_SOURCE_OBJECT_ID'
      |'INVALID_SOURCE_OBJECT_NAME'
      |'INVALID_STATUS'
      |'INVALID_SUBDOMAIN'
      |'INVALID_TARGET_OBJECT_NAME'
      |'INVALID_TEXT_REPRESENTATION'
      |'INVALID_TYPE'
      |'INVALID_TYPE_FOR_OPERATION'
      |'INVALID_TYPE_ON_FIELD_IN_RECORD'
      |'INVALID_UNMERGE_RECORD'
      |'INVALID_USERID'
      |'INVALID_USER_OBJECT'
      |'IP_RANGE_LIMIT_EXCEEDED'
      |'ITEM_NOT_FOUND'
      |'JIGSAW_IMPORT_LIMIT_EXCEEDED'
      |'LICENSE_LIMIT_EXCEEDED'
      |'LIGHT_PORTAL_USER_EXCEPTION'
      |'LIMIT_EXCEEDED'
      |'LIST_PRICE_NOT_FOUND'
      |'MALFORMED_ID'
      |'MANAGER_NOT_DEFINED'
      |'MAPPING_TYPE_NOT_SUPPORTED'
      |'MASSMAIL_RETRY_LIMIT_EXCEEDED'
      |'MASS_MAIL_LIMIT_EXCEEDED'
      |'MATCH_DEFINITION_ERROR'
      |'MATCH_OPERATION_ERROR'
      |'MATCH_OPERATION_INVALID_ENGINE_ERROR'
      |'MATCH_OPERATION_INVALID_RULE_ERROR'
      |'MATCH_OPERATION_MISSING_ENGINE_ERROR'
      |'MATCH_OPERATION_MISSING_OBJECT_TYPE_ERROR'
      |'MATCH_OPERATION_MISSING_OPTIONS_ERROR'
      |'MATCH_OPERATION_MISSING_RULE_ERROR'
      |'MATCH_OPERATION_UNKNOWN_RULE_ERROR'
      |'MATCH_OPERATION_UNSUPPORTED_VERSION_ERROR'
      |'MATCH_PRECONDITION_FAILED'
      |'MATCH_PRECONDITION_REQUIRED'
      |'MATCH_RUNTIME_ERROR'
      |'MATCH_SERVICE_ERROR'
      |'MATCH_SERVICE_TIMED_OUT'
      |'MATCH_SERVICE_UNAVAILABLE_ERROR'
      |'MAXIMUM_CCEMAILS_EXCEEDED'
      |'MAXIMUM_DASHBOARD_COMPONENTS_EXCEEDED'
      |'MAXIMUM_HIERARCHY_CHILDREN_REACHED'
      |'MAXIMUM_HIERARCHY_LEVELS_REACHED'
      |'MAXIMUM_HIERARCHY_TREE_SIZE_REACHED'
      |'MAXIMUM_SIZE_OF_ATTACHMENT'
      |'MAXIMUM_SIZE_OF_DOCUMENT'
      |'MAX_ACTIONS_PER_RULE_EXCEEDED'
      |'MAX_ACTIVE_RULES_EXCEEDED'
      |'MAX_APPROVAL_STEPS_EXCEEDED'
      |'MAX_DEPTH_IN_FLOW_EXECUTION'
      |'MAX_FORMULAS_PER_RULE_EXCEEDED'
      |'MAX_LIMIT_EXCEEDED'
      |'MAX_LOCALES_EXCEEDED'
      |'MAX_RULES_EXCEEDED'
      |'MAX_RULE_ENTRIES_EXCEEDED'
      |'MAX_TASK_DESCRIPTION_EXCEEEDED'
      |'MAX_TM_RULES_EXCEEDED'
      |'MAX_TM_RULE_ITEMS_EXCEEDED'
      |'MAX_TRIGGERS_EXCEEDED'
      |'MCONTENT_TAXONOMY_GET_ERROR'
      |'MCONTENT_TAXONOMY_PUBLISH_ERROR'
      |'MCONTENT_TAXONOMY_UPDATE_ERROR'
      |'MERGE_FAILED'
      |'METADATA_FIELD_UPDATE_ERROR'
      |'METHOD_NOT_ALLOWED'
      |'MISMATCHING_TYPES'
      |'MISSING_ARGUMENT'
      |'MISSING_OMNI_PROCESS_ID'
      |'MISSING_PAYMENTS_DEPENDENCY'
      |'MISSING_PAY_NOW_SITE_URL_ORG_VALUE'
      |'MISSING_RECEIVEDDOCUMENTID_ATTACHMENT'
      |'MISSING_RECORD'
      |'MIXED_DML_OPERATION'
      |'MODEL_NOT_ACTIVE'
      |'MULTIPLE_CONTENT_FOUND'
      |'MULTIPLE_VOUCHERS'
      |'NONUNIQUE_SHIPPING_ADDRESS'
      |'NOT_FOUND'
      |'NOT_RECOVERABLE_SEARCH_PROVIDER_ERROR'
      |'NO_ACCESS_TOKEN'
      |'NO_ACCESS_TOKEN_FROM_REFRESH'
      |'NO_APPLICABLE_PROCESS'
      |'NO_ATTACHMENT_PERMISSION'
      |'NO_AUTH_PROVIDER'
      |'NO_BUSINESS_HOURS_FOUND'
      |'NO_INACTIVE_DIVISION_MEMBERS'
      |'NO_INDEXABLE_PRODUCTS'
      |'NO_INDEXABLE_PRODUCTS_IN_PARTIAL_BUILD'
      |'NO_MASS_MAIL_PERMISSION'
      |'NO_MESSAGE_TYPE_MESSAGES'
      |'NO_PARTNER_PERMISSION'
      |'NO_REFRESH_TOKEN'
      |'NO_SEARCHABLE_PRODUCTS'
      |'NO_SEARCH_ATTRIBUTES'
      |'NO_SINGLE_MAIL_PERMISSION'
      |'NO_SORT_PRICEBOOK_ASSOCIATED_ERROR'
      |'NO_SUCH_USER_EXISTS'
      |'NO_TOKEN_ENDPOINT'
      |'NUMBER_OUTSIDE_VALID_RANGE'
      |'NUM_HISTORY_FIELDS_BY_SOBJECT_EXCEEDED'
      |'OCR_INVALID_REQUEST'
      |'OPERATION_CONFLICT'
      |'OPERATION_ENQUEUED'
      |'OPERATION_WITH_CALLBACK_ENQUEUED'
      |'OPTED_OUT_OF_MASS_MAIL'
      |'OP_WITH_INVALID_USER_TYPE_EXCEPTION'
      |'ORCHESTRATION_INVALID'
      |'ORDER_MANAGEMENT_ACTION_NOT_ALLOWED'
      |'ORDER_MANAGEMENT_INVALID_RECORD'
      |'ORDER_MANAGEMENT_RECORD_EXISTS'
      |'ORDER_MANAGEMENT_RECORD_NOT_FOUND'
      |'ORG_SETTING_REQUIRED'
      |'PACKAGE_DISABLED'
      |'PACKAGE_LICENSE_REQUIRED'
      |'PACKAGING_API_INSTALL_FAILED'
      |'PACKAGING_API_UNINSTALL_FAILED'
      |'PALI_INVALID_ACTION_ID'
      |'PALI_INVALID_ACTION_NAME'
      |'PALI_INVALID_ACTION_TYPE'
      |'PAL_INVALID_ASSISTANT_RECOMMENDATION_TYPE_ID'
      |'PAL_INVALID_ENTITY_ID'
      |'PAL_INVALID_FLEXIPAGE_ID'
      |'PAL_INVALID_LAYOUT_ID'
      |'PAL_INVALID_PARAMETERS'
      |'PARAMETER_TOO_LARGE'
      |'PARTICIPANT_RELATIONSHIP_EXISTS'
      |'PAYLOAD_SIZE_EXCEEDED'
      |'PAYMENTS_TOO_MANY_REQUESTS_ERROR'
      |'PAYMENT_GATEWAY_EXCEPTION'
      |'PA_API_EXCEPTION'
      |'PA_AXIS_FAULT'
      |'PA_INVALID_ID_EXCEPTION'
      |'PA_NO_ACCESS_EXCEPTION'
      |'PA_NO_DATA_FOUND_EXCEPTION'
      |'PA_URI_SYNTAX_EXCEPTION'
      |'PA_VISIBLE_ACTIONS_FILTER_ORDERING_EXCEPTION'
      |'PENDING_COMMIT'
      |'PICKLIST_INACTIVE_VALUES_EXCEEDED'
      |'PLATFORM_EVENT_ENCRYPTION_ERROR'
      |'PLATFORM_EVENT_PUBLISHING_UNAVAILABLE'
      |'PLATFORM_EVENT_PUBLISH_FAILED'
      |'PORTAL_NO_ACCESS'
      |'PORTAL_USER_ALREADY_EXISTS_FOR_CONTACT'
      |'PORTAL_USER_CREATION_RESTRICTED_WITH_ENCRYPTION'
      |'PRICE_NOT_FOUND'
      |'PRIVATE_CONTACT_ON_ASSET'
      |'PROCESSING_HALTED'
      |'PROGRAM_PROGRESS_NOT_ACTIVE'
      |'PROMOTION_NOT_FOUND'
      |'QA_INVALID_CREATE_FEED_ITEM'
      |'QA_INVALID_SUCCESS_MESSAGE'
      |'QUERY_REFINEMENT_VALUE_LIMIT_EXCEEDED'
      |'QUERY_TIMEOUT'
      |'QUERY_TOKEN_COUNT_LIMIT_EXCEEDED'
      |'QUICK_ACTION_LIST_ITEM_NOT_ALLOWED'
      |'QUICK_ACTION_LIST_NOT_ALLOWED'
      |'RECORD_CREATION_FAILED'
      |'RECORD_IN_USE_BY_WORKFLOW'
      |'RECORD_LOCKED'
      |'RECORD_MISSING_REQUIRED_FIELD'
      |'RECORD_NOT_FOUND'
      |'RECORD_TYPE_LIMIT_EXCEEDED'
      |'RECORD_UPDATE_FAILED'
      |'RECOVERABLE_SEARCH_PROVIDER_ERROR'
      |'REFRESH_FAILED'
      |'RELATED_ENTITY_FILTER_VALIDATION_EXCEPTION'
      |'REL_FIELD_BAD_ACCESSIBILITY'
      |'REPUTATION_MINIMUM_NUMBER_NOT_REACHED'
      |'REQUEST_RUNNING_TOO_LONG'
      |'REQUIRED_FEATURE_MISSING'
      |'REQUIRED_FIELD_MISSING'
      |'REQUIRE_CONNECTED_APP_SCS'
      |'REQUIRE_CONNECTED_APP_SESSION_SCS'
      |'REQUIRE_RUNAS_USER'
      |'RESOURCE_NOT_AVAILABLE'
      |'RETRIEVE_EXCHANGE_ATTACHMENT_FAILED'
      |'RETRIEVE_EXCHANGE_EMAIL_FAILED'
      |'RETRIEVE_EXCHANGE_EVENT_FAILED'
      |'RETRIEVE_GOOGLE_EMAIL_FAILED'
      |'RETRIEVE_GOOGLE_EVENT_FAILED'
      |'RETRIEVE_USER_CONFIG_ERROR'
      |'ROUTES_EVALUATION_LIMIT_EXCEEDED'
      |'SALESFORCE_INBOX_TRANSPORT_CONNECTION_ERROR'
      |'SALESFORCE_INBOX_TRANSPORT_INVALID_INPUT_ERROR'
      |'SALESFORCE_INBOX_TRANSPORT_TOKEN_ERROR'
      |'SALESFORCE_INBOX_TRANSPORT_UNKNOWN_ERROR'
      |'SCHEMA_OBJECT_NOT_FOUND'
      |'SCREEN_POP_REQUIRED_INPUT_MISSING'
      |'SEARCH_INCLUDE_RULES_MAX_RULE_DEFINITION_LIMIT_EXCEEDED'
      |'SEARCH_INCLUDE_RULES_MIN_RULE_DEFINITION_NOT_MET'
      |'SEARCH_PROVIDER_PATH_LIMIT_EXCEEDED'
      |'SEARCH_PROVIDER_REQUEST_RATE_EXCEEDED'
      |'SEGMENT_COUNT_LIMIT_EXCEEDED'
      |'SELF_REFERENCE_FROM_FLOW'
      |'SELF_REFERENCE_FROM_TRIGGER'
      |'SERVICE_PLAN_INVALID_DATA'
      |'SERVICE_PLAN_MISSING_DATA'
      |'SERVICE_PLAN_UNKNOWN_EXCEPTION'
      |'SERVICE_UNAVAILABLE'
      |'SESSION_EXPIRED'
      |'SESSION_INVALIDATED'
      |'SHARE_NEEDED_FOR_CHILD_OWNER'
      |'SINGLE_EMAIL_LIMIT_EXCEEDED'
      |'SLACK_API_ERROR'
      |'SOCIAL_ACCOUNT_NOT_FOUND'
      |'SOCIAL_ACTION_INVALID'
      |'SOCIAL_PERSONA_NOT_FOUND'
      |'SOCIAL_POST_INVALID'
      |'SOCIAL_POST_NOT_FOUND'
      |'SPECIFICATION_GENERATION_EXCEPTION'
      |'STANDARD_PRICE_NOT_DEFINED'
      |'STORAGE_LIMIT_EXCEEDED'
      |'STOREFRONT_PST_NOT_ACCEPTED'
      |'STRING_TOO_LONG'
      |'STXN_FULFILLMENT_NOT_INFLIGHT'
      |'SUBDOMAIN_IN_USE'
      |'TABSET_LIMIT_EXCEEDED'
      |'TEMPLATE_NOT_ACTIVE'
      |'TEMPLATE_NOT_FOUND'
      |'TENANT_GROUP_NOT_FOUND'
      |'TERMS_OF_SERVICE_UNREAD'
      |'TERRITORY_REALIGN_IN_PROGRESS'
      |'TEXT_DATA_OUTSIDE_SUPPORTED_CHARSET'
      |'TEXT_TO_PICKLIST_VALUES_EXCEEDED'
      |'TOO_MANY_APEX_REQUESTS'
      |'TOO_MANY_ENUM_VALUE'
      |'TOO_MANY_JOBS'
      |'TOO_MANY_POSSIBLE_USERS_EXIST'
      |'TRANSFER_REQUIRES_READ'
      |'TXN_SECURITY_NO_ACCESS'
      |'UISF_ENTITY_QUERY_FAILED'
      |'UISF_NO_MAPPINGS_FOUND'
      |'UISF_TOKEN_NOT_FOUND'
      |'UISF_UNKNOWN_EXCEPTION'
      |'UISF_USER_MAPPING_FAILED'
      |'UNABLE_TO_LOCK_RECORD'
      |'UNABLE_TO_LOCK_ROW'
      |'UNABLE_TO_UNLOCK_RECORD'
      |'UNABLE_TO_UPDATE_RECORD_LOCK'
      |'UNAUTHORIZED_EXCEPTION'
      |'UNAUTHORIZED_SEARCH_PROVIDER_REQUEST'
      |'UNAVAILABLE_RECORDTYPE_EXCEPTION'
      |'UNAVAILABLE_REF'
      |'UNCOMMITTED_WORK'
      |'UNDEFINED_MAPPING_DEFINITION'
      |'UNDELETE_FAILED'
      |'UNKNOWN_EXCEPTION'
      |'UNKNOWN_TOKEN_ERROR'
      |'UNPROCESSABLE_REQUEST'
      |'UNQUALIFIED_CART'
      |'UNRESOLVABLE_PAY_NOW_WEBSTORE'
      |'UNSAFE_HTML_CONTENT'
      |'UNSPECIFIED_EMAIL_ADDRESS'
      |'UNSUPPORTED_APEX_TRIGGER_OPERATON'
      |'UNSUPPORTED_MODE'
      |'UNSUPPORTED_PAYMENT_GATEWAY_TYPE'
      |'UNSUPPORTED_PAYMENT_REQUEST_TYPE'
      |'UNSUPPORTED_SITE'
      |'UNSUPPORTED_SITE_FILE_IMPORTED_EXCEPTION'
      |'UNSUPPORTED_SOCIAL_PROVIDER'
      |'UNVERIFIED_SENDER_ADDRESS'
      |'UPDATE_GOOGLE_EMAIL_LABEL_FAILED'
      |'USER_OWNS_PORTAL_ACCOUNT_EXCEPTION'
      |'USER_WITHOUT_WEM_PERMISSION'
      |'USER_WITH_APEX_SHARES_EXCEPTION'
      |'VARIANT_NOT_FOUND'
      |'VF_COMPILE_ERROR'
      |'VOICE_CAPACITY_ERROR'
      |'WEBLINK_SIZE_LIMIT_EXCEEDED'
      |'WEBLINK_URL_INVALID'
      |'WEM_SEGMENTS_CAN_NOT_HAVE_NON_ACTIVE_SEGMENT_TYPE'
      |'WEM_SHIFT_SEGMENT_TIME_IS_OUTSIDE_OF_THE_SHIFT_DURATION'
      |'WEM_USER_NOT_ORG_ADMIN'
      |'WORKSPACE_NOT_FOUND'
      |'WRONG_CONTROLLER_TYPE'
      |'XCLEAN_DJ_MATCH_IGNORABLE_ERROR'
      |'XCLEAN_DJ_MATCH_INTERNAL_DJ_ERROR'
      |'XCLEAN_DJ_MATCH_NON_RETRIABLE_ERROR'
      |'XCLEAN_DJ_MATCH_RETRIABLE_ERROR'
      |'XCLEAN_DJ_MATCH_UNKNOWN_ERROR'
      |'XCLEAN_UNEXPECTED_ERROR'

export class AllOrNoneHeader {}

export class CallOptions {}

export class DebuggingHeader {}

export class DebuggingInfo {}

export class SessionHeader {}

export class cancelDeploy {}

export class cancelDeployResponse {}

export class checkDeployStatus {}

export class checkDeployStatusResponse {}

export class checkRetrieveStatus {}

export class checkRetrieveStatusResponse {}

export class checkStatus {}

export class checkStatusResponse {}

export class create {}

export class createResponse {}

export class createMetadata {}

export class createMetadataResponse {}

export class delete_ {}

export class deleteResponse {}

export class deleteMetadata {}

export class deleteMetadataResponse {}

export class deploy {}

export class deployResponse {}

export class deployRecentValidation {}

export class deployRecentValidationResponse {}

export class describeMetadata {}

export class describeMetadataResponse {}

export class describeValueType {}

export class describeValueTypeResponse {}

export class listMetadata {}

export class listMetadataResponse {}

export class readMetadata {}

export class readMetadataResponse {}

export class renameMetadata {}

export class renameMetadataResponse {}

export class retrieve {}

export class retrieveResponse {}

export class update {}

export class updateResponse {}

export class updateMetadata {}

export class updateMetadataResponse {}

export class upsertMetadata {}

export class upsertMetadataResponse {}

export class CancelDeployResult {
    done!: boolean;
    id!: ID;
}

export class DeployResult {
    canceledBy?: string;
    canceledByName?: string;
    checkOnly!: boolean;
    completedDate?: Date;
    createdBy!: string;
    createdByName!: string;
    createdDate!: Date;
    details!: DeployDetails;
    done!: boolean;
    errorMessage?: string;
    errorStatusCode?: StatusCode;
    id!: ID;
    ignoreWarnings!: boolean;
    lastModifiedDate?: Date;
    numberComponentErrors!: number;
    numberComponentsDeployed!: number;
    numberComponentsTotal!: number;
    numberTestErrors!: number;
    numberTestsCompleted!: number;
    numberTestsTotal!: number;
    rollbackOnError!: boolean;
    runTestsEnabled!: boolean;
    startDate?: Date;
    stateDetail?: string;
    status!: DeployStatus;
    success!: boolean;
}

export class DeployDetails {
    componentFailures!: DeployMessage[];
    componentSuccesses!: DeployMessage[];
    retrieveResult?: RetrieveResult;
    runTestResult?: RunTestsResult;
}

export class DeployMessage {
    changed!: boolean;
    columnNumber?: number;
    componentType?: string;
    created!: boolean;
    createdDate!: Date;
    deleted!: boolean;
    fileName!: string;
    fullName!: string;
    id?: string;
    lineNumber?: number;
    problem?: string;
    problemType?: DeployProblemType;
    success!: boolean;
}

export class RetrieveResult {
    done!: boolean;
    errorMessage?: string;
    errorStatusCode?: StatusCode;
    fileProperties!: FileProperties[];
    id!: string;
    messages!: RetrieveMessage[];
    status!: RetrieveStatus;
    success!: boolean;
    zipFile!: string;
}

export class FileProperties {
    createdById!: string;
    createdByName!: string;
    createdDate!: Date;
    fileName!: string;
    fullName!: string;
    id!: string;
    lastModifiedById!: string;
    lastModifiedByName!: string;
    lastModifiedDate!: Date;
    manageableState?: ManageableState;
    namespacePrefix?: string;
    type!: string;
}

export class RetrieveMessage {
    fileName!: string;
    problem!: string;
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
    dmlInfo!: CodeLocation[];
    id!: ID;
    locationsNotCovered!: CodeLocation[];
    methodInfo!: CodeLocation[];
    name!: string;
    namespace?: string;
    numLocations!: number;
    numLocationsNotCovered!: number;
    soqlInfo!: CodeLocation[];
    soslInfo!: CodeLocation[];
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
    packageName!: string;
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

export class AsyncResult {
    done!: boolean;
    id!: ID;
    message?: string;
    state!: AsyncRequestState;
    statusCode?: StatusCode;
}

export class Metadata {
    fullName?: string;
    module?: string;
}

export class AIPredictionDefinition {
    dataDefinitions!: AIDataDefinition[];
    description!: string;
    predictionTargets!: AIPredictionTarget[];
    status!: AIPredictionDefinitionStatus;
    type!: AIPredictionType;
}

export class AIDataDefinition {
    dataFilter?: AIFilterGroup;
    description?: string;
    fieldType?: AIManagedFieldType;
    managedFields!: AIManagedField[];
    modelDefinitions!: AIModelDefinition[];
}

export class AIFilterGroup {
    rootFilter!: AIFilter;
}

export class AIFilter {
    lhField?: AIPredictionField;
    lhFilter?: AIFilter;
    lhUnit?: AIFilterUnit;
    operation!: AIFilterOperation;
    rhField?: AIPredictionField;
    rhFilter?: AIFilter;
    rhUnit?: AIFilterUnit;
    sortOrder?: number;
    values!: AIFilterValue[];
}

export class AIPredictionField {
    entity!: string;
    field!: string;
    relatedPredictionField?: AIPredictionField;
}

export class AIFilterValue {
    side!: AISide;
    sortOrder?: number;
    type!: AIValueType;
    value!: string;
}

export class AIManagedField {
    field!: AIPredictionField;
}

export class AIModelDefinition {
    approvalType?: AIModelDefinitionApprovalType;
    externalId!: string;
    scoringFilter?: AIFilterGroup;
    status!: AIModelDefinitionStatus;
    trainSplitRatio?: string;
    trainingFilter?: AIFilterGroup;
    type?: AIModelType;
}

export class AIPredictionTarget {
    predictionExpressions!: AIPredictionExpression[];
    pushbackField?: AIPredictionField;
    strategy?: AIPredictionStrategy;
    targetField?: AIPredictionField;
}

export class AIPredictionExpression {
    expressionFilterGroup?: AIFilterGroup;
    predictionExpressionName?: string;
}

export class AIModelFactor {
    externalId?: string;
    factorComponents!: AIFactorComponent[];
    intensityType!: AIIntensityType;
    intensityValue!: number;
    lowerLimit!: number;
    type!: AIModelFactorType;
    upperLimit!: number;
}

export class AIFactorComponent {
    leftHandDerivedField?: string;
    leftHandField?: string;
    operator!: AIModelMetricOperation;
    rightHandDerivedField?: string;
    rightHandField?: string;
    sortOrder?: number;
    value!: string;
}

export class AIModelGraph {
    dataSetType!: AIDataSetType;
    graphPoints!: string;
    graphType!: AIModelGraphType;
    schemaVersion!: string;
}

export class AIModelMetric {
    classLabel1?: string;
    classLabel2?: string;
    iteration?: number;
    metricType!: AIMetricType;
    metricValue!: number;
}

export class AIScoringStep {
    aiModelConfigStep!: string;
    stepDetail?: string;
}

export class AIUsecaseFieldMapping {
    additionalFieldInformation?: string;
    customPredictionLabel?: string;
    developerName!: string;
    joinFieldInformation?: string;
    mappedFieldName!: string;
    mappedFieldType!: MappedFieldType;
    masterLabel!: string;
    responseFieldName!: string;
    responseObject!: string;
    sequenceNumber?: number;
}

export class AIUsecaseModel {
    aiFeatureExtractors!: AIFeatureExtractor[];
    arePredctGenInRealTime!: boolean;
    defaultFeatureExtractor?: AIFeatureExtractor;
    developerName!: string;
    masterLabel!: string;
    predictionDefinition!: string;
    predictionPlatform!: PredictionPlatform;
}

export class AIFeatureExtractor {
    batchInputSourceIdentifier?: string;
    batchInputSourceType?: BatchInputSourceType;
    className?: string;
    developerName!: string;
    extractorType!: ExtractorType;
    featureInputType!: FeatureInputType;
    inputContext?: string;
    masterLabel!: string;
}

export class AccountForecastFormula {
    endingPeriod!: number;
    formula!: string;
    formulaType!: FormulaType;
    startingPeriod!: number;
}

export class ObjectMapping {
    inputObject!: string;
    mappingFields!: ObjectMappingField[];
    outputObject!: string;
}

export class ObjectMappingField {
    inputField!: string;
    outputField!: string;
}

export class AccountPlanObjMeasCalcCond {
    fieldName!: string;
    operation!: string;
    value!: string;
}

export class ActionLinkTemplate {
    actionUrl!: string;
    headers?: string;
    isConfirmationRequired!: boolean;
    isGroupDefault!: boolean;
    label?: string;
    labelKey!: string;
    linkType!: ActionLinkType;
    method!: ActionLinkHttpMethod;
    position!: number;
    requestBody?: string;
    userAlias?: string;
    userVisibility!: ActionLinkUserVisibility;
}

export class ActionPlanTemplateItem {
    actionPlanTemplateItemValue!: ActionPlanTemplateItemValue[];
    displayOrder?: number;
    isRequired?: boolean;
    itemEntityType!: string;
    name!: string;
    uniqueName!: string;
}

export class ActionPlanTemplateItemValue {
    itemEntityType!: string;
    name!: string;
    valueFormula?: string;
    valueLiteral?: string;
}

export class ActionPlanTemplateItemDependency {
    creationType!: string;
    name!: string;
    previousTemplateItem!: ActionPlanTemplateItem;
    templateItem!: ActionPlanTemplateItem;
}

export class EventSubtype {
    apiName!: string;
    label!: string;
}

export class IncludedPlatformLicenseDefinition {
    fullName?: string;
    name!: string;
    quantity?: number;
}

export class IncludedUserLicenseDefinition {
    fullName?: string;
    name!: string;
    quantity?: number;
}

export class CountriesAndStates {
    countries!: Country[];
}

export class Country {
    active!: boolean;
    integrationValue!: string;
    isoCode!: string;
    label!: string;
    orgDefault!: boolean;
    standard!: boolean;
    states!: State[];
    visible!: boolean;
}

export class State {
    active!: boolean;
    integrationValue!: string;
    isoCode!: string;
    label!: string;
    standard!: boolean;
    visible!: boolean;
}

export class AdvAcctForecastDimension {
    advAcctForecastDimName!: string;
    dimensionFieldName!: string;
    dimensionSourceName?: string;
    hierarchySequenceNumber!: number;
}

export class AdvAcctFrcstDisplayGroup {
    advAcctFrcstDisplayGroupName!: string;
    displayGroupItems!: AdvAcctFrcstDplyGroupItem[];
    displayGroupType?: AdvAcctFrcstDisplayGroupType;
    isDefault?: boolean;
    userProfileName?: string;
}

export class AdvAcctFrcstDplyGroupItem {
    advAcctFrcstDplyGroupItemName!: string;
    displayOrder!: number;
    measureReferenceName?: string;
}

export class AdvAcctForecastAdjPeriod {
    adjustmentDayCount!: number;
    frequency!: PeriodTypes;
    profileName?: string;
    startDay!: number;
}

export class AdvAccountForecastFormula {
    endPeriod!: number;
    formulaExpression!: string;
    formulaType!: AdvAcctFcstFormulaType;
    startPeriod!: number;
}

export class AdvAcctForecastMeasureDef {
    advAcctForecastMeasureDefName!: string;
    aggregationType?: AdvAcctFcstAggregationType;
    computationMethod?: AdvAcctFcstComputationMethod;
    forecastDataMeasureName!: string;
    forecastMeasureName!: string;
    forecastMeasureType!: AdvAcctFcstMeasureType;
    isAdjustmentTracked?: boolean;
}

export class AdvAccountForecastPeriod {
    displayDuration!: number;
    sequenceNumber!: number;
    type!: PeriodTypes;
}

export class AdvancedFieldMapping {
    sourceField!: string;
    sourceObject!: string;
    targetField!: string;
    targetObject!: string;
}

export class AnalyticSnapshotMapping {
    aggregateType?: ReportSummaryType;
    sourceField!: string;
    sourceType!: ReportJobSourceTypes;
    targetField!: string;
}

export class AnalyticsDashboardLayout {
    analyticsDashboard!: string;
    columnCount?: string;
    label?: string;
    layoutName?: string;
    maxWidth?: string;
    pages!: AnalyticsDashboardPage[];
    rowHeight?: string;
    style?: string;
    version?: number;
}

export class AnalyticsDashboardPage {
    index?: number;
    label?: string;
    pageName?: string;
    pageWidgets!: AnalyticsDashPageWidget[];
}

export class AnalyticsDashPageWidget {
    analyticsDashboardWidget!: string;
    colspan?: string;
    column?: string;
    row?: string;
    rowspan?: string;
}

export class AnalyticsDashboardWidget {
    analyticsDashboard!: string;
    buttonWidgetDefs!: AnalyticsButtonWidgetDef[];
    containerWidgetDefs!: AnalyticsContainerWidgetDef[];
    filterWidgetDefs!: AnalyticsFilterWidgetDef[];
    label?: string;
    metricWidgetDefs!: AnalyticsMetricWidgetDef[];
    parameterWidgetDefs!: AnalyticsParamWidgetDef[];
    textWidgetDefs!: AnalyticsTextWidgetDef[];
    type!: AnalyticsWidgetType;
    vizWidgetDefs!: AnalyticsVizWidgetDef[];
    widgetActions!: AnalyticsAssetAction[];
    widgetName?: string;
}

export class AnalyticsButtonWidgetDef {
    parameters?: string;
}

export class AnalyticsFilterWidgetDef {
    initialValues?: string;
    parameters?: string;
    source?: string;
}

export class AnalyticsMetricWidgetDef {
    parameters?: string;
    source?: string;
    version?: number;
}

export class AnalyticsTextWidgetDef {
    parameters?: string;
}

export class AnalyticsVizWidgetDef {
    analyticsVisualization?: string;
    parameters?: string;
}

export class AnalyticsAssetAction {
    actionType!: AnalyticsActionType;
    eventType!: AnalyticsActionEventType;
    parameters?: string;
    version?: number;
}

export class ApexEmailNotification {
    email?: string;
    user?: string;
}

export class AppMenuItem {
    name!: string;
    type!: string;
}

export class ModuleRefs {
    moduleRef!: ModuleRef[];
}

export class ModuleRef {
    name!: string;
    namespacePrefix?: string;
    version?: string;
}

export class ApprovalSubmitter {
    submitter?: string;
    type!: ProcessSubmitterType;
}

export class ApprovalPageField {
    field!: string[];
}

export class ApprovalStep {
    allowDelegate?: boolean;
    approvalActions?: ApprovalAction;
    assignedApprover!: ApprovalStepApprover;
    description?: string;
    entryCriteria?: ApprovalEntryCriteria;
    ifCriteriaNotMet?: StepCriteriaNotMetType;
    label!: string;
    name!: string;
    rejectBehavior?: ApprovalStepRejectBehavior;
    rejectionActions?: ApprovalAction;
}

export class ApprovalAction {
    action!: WorkflowActionReference[];
}

export class WorkflowActionReference {
    name!: string;
    type!: WorkflowActionType;
}

export class ApprovalStepApprover {
    approver!: Approver[];
    whenMultipleApprovers?: RoutingType;
}

export class Approver {
    name?: string;
    type!: NextOwnerType;
}

export class ApprovalEntryCriteria {
    booleanFilter?: string;
    criteriaItems!: FilterItem[];
    formula?: string;
}

export class FilterItem {
    field!: string;
    operation!: FilterOperation;
    value?: string;
    valueField?: string;
}

export class ApprovalStepRejectBehavior {
    type!: StepRejectBehaviorType;
}

export class NextAutomatedApprover {
    useApproverFieldOfRecordOwner?: boolean;
    userHierarchyField!: string;
}

export class AssessmentQuestionVersion {
    additionalInformation?: string;
    description?: string;
    guidanceInformation?: string;
    helpText?: string;
    isActive!: boolean;
    name!: string;
    optionSourceResponseValue?: boolean;
    questionText!: string;
    responseValues?: string;
    status!: string;
    versionNumber!: number;
}

export class RuleEntry {
    assignedTo?: string;
    assignedToType?: AssignToLookupValueType;
    booleanFilter?: string;
    businessHours?: string;
    businessHoursSource?: BusinessHoursSourceType;
    criteriaItems!: FilterItem[];
    disableEscalationWhenModified?: boolean;
    escalationAction!: EscalationAction[];
    escalationStartTime?: EscalationStartTimeType;
    formula?: string;
    notifyCcRecipients?: boolean;
    overrideExistingTeams?: boolean;
    replyToEmail?: string;
    senderEmail?: string;
    senderName?: string;
    team!: string[];
    template?: string;
}

export class EscalationAction {
    assignedTo?: string;
    assignedToTemplate?: string;
    assignedToType?: AssignToLookupValueType;
    minutesToEscalation?: number;
    notifyCaseOwner?: boolean;
    notifyEmail!: string[];
    notifyTo?: string;
    notifyToTemplate?: string;
}

export class AssistantDefinitionProfile {
    profile?: string;
}

export class AssistantSkillQuickActionParam {
    description?: string;
    field?: string;
    index?: number;
    prompt?: string;
    referenceTarget?: string;
    slotClass?: string;
}

export class AssistantSkillSobjectParam {
    description?: string;
    field?: string;
    index?: number;
    prompt?: string;
    referenceTarget?: string;
    slotClass?: string;
}

export class AssistantSkill {
    assistantSkillIntents!: AssistantSkillIntent[];
    description?: string;
    externalModel?: string;
    index?: number;
    mlDomain?: string;
    skillType?: AssistantSkillType;
}

export class AssistantSkillIntent {
    action?: string;
    description?: string;
    field?: string;
    index?: number;
    intentName?: string;
    isPromptRequired?: boolean;
    isRequired?: boolean;
    mlIntent?: string;
    sobjectType?: string;
}

export class AssistantVersionAction {
    action?: string;
}

export class AudienceCriteria {
    criterion!: AudienceCriterion[];
}

export class AudienceCriterion {
    criteriaNumber?: number;
    criterionValue?: AudienceCriteriaValue;
    operator?: AudienceCriterionOperator;
    type!: AudienceCriterionType;
}

export class AudienceCriteriaValue {
    audienceDeveloperName?: string;
    city?: string;
    country?: string;
    domain?: string;
    entityField?: string;
    entityType?: string;
    fieldValue?: string;
    isEnabled?: string;
    permissionName?: string;
    permissionType?: string;
    profile?: string;
    subdivision?: string;
}

export class PersonalizationTargetInfos {
    target!: PersonalizationTargetInfo[];
}

export class PersonalizationTargetInfo {
    groupName!: string;
    priority?: number;
    targetType!: string;
    targetValue!: string;
}

export class AuraDefinitions {
    auraDefinition!: AuraDefinition[];
}

export class AuraDefinition {
    defType!: string;
    source!: string;
}

export class PackageVersion {
    majorNumber!: number;
    minorNumber!: number;
    namespace?: string;
    packageId?: string;
}

export class AuthProvParamFwdAllowlist {
    description?: string;
    param!: string;
}

export class DpeToRecipeTranslateAbstractMetadataValue {}

export class BatchCalcJobAtomicWritebackRelationship {
    childWritebackObjectField?: string;
    childWritebackObjectName?: string;
    parentWritebackObjectField?: string;
    parentWritebackObjectName!: string;
    sequenceNumber!: number;
}

export class BatchCalcJobCustomNodeParameter {
    name!: string;
    value?: string;
}

export class BatchCalcJobDatasourceField {
    alias?: string;
    dataType?: BatchCalcJobDataType;
    isPrimaryKey?: boolean;
    name!: string;
}

export class BatchCalcJobFilterCriteria {
    inputVariable?: string;
    operator!: BatchCalcJobFilterOperator;
    sequence!: number;
    sourceFieldName!: string;
    value?: string;
}

export class BtchCalcJobFrcstAggrFld {
    aggregateFunction!: BatchCalcJobAggregateFunction;
    aggregationResultLabel!: string;
    fieldName!: string;
}

export class BatchCalcJobFrcstGrpFld {
    fieldName!: string;
    groupBy?: string;
}

export class BatchCalcJobJoinResultField {
    alias!: string;
    sourceFieldName!: string;
    sourceName!: string;
}

export class BatchCalcJobJoinKey {
    primarySourceFieldName!: string;
    secondarySourceFieldName!: string;
}

export class BatchCalcJobTransformDroppedField {
    sourceFieldName!: string;
}

export class BatchCalcJobTransformAddedField {
    alias!: string;
    dataType!: BatchCalcJobDataType;
    decimalPlaces?: number;
    expression!: string;
    length?: number;
}

export class BatchCalcJobOrderByField {
    name!: string;
    orderType!: BatchCalcJobOrderType;
}

export class BatchCalcJobWritebackMapping {
    parentName?: string;
    relationshipName?: string;
    runtimeParameter?: boolean;
    sourceFieldName!: string;
    targetFieldName?: string;
}

export class BatchCalcJobAggregateField {
    aggregateFunction!: BatchCalcJobAggregateFunction;
    alias!: string;
    sourceFieldName!: string;
}

export class BatchDataSource {
    condition!: string;
    criteria?: string;
    filters!: BatchDataSrcFilterCriteria[];
    sourceObject!: string;
    sourceObjectField?: string;
}

export class BatchDataSrcFilterCriteria {
    dynamicValue!: boolean;
    dynamicValueType?: string;
    fieldName!: string;
    fieldValue!: string;
    operator!: string;
    sequenceNo!: number;
}

export class BenefitActionParameter {
    dataType!: BenefitActionDataType;
    masterLabel!: string;
    name?: string;
    objectName?: string;
    parameterValues!: BenefitActionParameterValue[];
    picklistName?: string;
}

export class BenefitActionParameterValue {
    parameterValue!: string;
}

export class LocalMlDomain {
    label!: string;
    mlIntents!: MlIntent[];
    mlSlotClasses!: MlSlotClass[];
    name!: string;
}

export class MlIntent {
    description?: string;
    developerName!: string;
    label!: string;
    mlIntentUtterances!: MlIntentUtterance[];
    relatedMlIntents!: MlRelatedIntent[];
}

export class MlIntentUtterance {
    language?: Language;
    utterance!: string;
}

export class MlRelatedIntent {
    relatedMlIntent!: string;
}

export class MlSlotClass {
    dataType!: MlSlotClassDataType;
    description?: string;
    developerName!: string;
    extractionRegex?: string;
    extractionType?: MlSlotClassExtractionType;
    label!: string;
    mlSlotClassValues!: MlSlotClassValue[];
}

export class MlSlotClassValue {
    synonymGroup?: SynonymGroup;
    synonymGroups!: SynonymGroup[];
    value!: string;
}

export class SynonymGroup {
    languages!: Language[];
    terms!: string[];
}

export class BotDialogGroup {
    description?: string;
    developerName!: string;
    label!: string;
}

export class BotDialog {
    botDialogGroup?: string;
    botSteps!: BotStep[];
    description?: string;
    developerName!: string;
    isPlaceholderDialog?: boolean;
    label!: string;
    mlIntent?: string;
    mlIntentTrainingEnabled?: boolean;
    showInFooterMenu?: boolean;
}

export class BotStep {
    booleanFilter?: string;
    botInvocation?: BotInvocation;
    botMessages!: BotMessage[];
    botNavigation?: BotNavigation;
    botStepConditions!: BotStepCondition[];
    botSteps!: BotStep[];
    botVariableOperation?: BotVariableOperation;
    conditionLogicType?: ConversationDefinitionLogicalOperatorType;
    conversationRecordLookup?: ConversationRecordLookup;
    conversationStepGoalMappings!: ConversationDefinitionStepGoalMapping[];
    conversationSystemMessage?: ConversationSystemMessage;
    messageDefinition?: ConversationDefinitionRichMessage;
    stepIdentifier?: string;
    type!: BotStepType;
}

export class BotInvocation {
    invocationActionName?: string;
    invocationActionType?: ConversationInvocableTargetType;
    invocationMappings!: BotInvocationMapping[];
}

export class BotInvocationMapping {
    parameterName!: string;
    recordName?: string;
    type!: BotInvocationMappingType;
    value?: string;
    variableName?: string;
    variableType?: ConversationVariableType;
}

export class BotMessage {
    message!: string;
    messageIdentifier?: string;
}

export class BotNavigation {
    botNavigationLinks!: BotNavigationLink[];
    type!: BotNavigationType;
}

export class BotNavigationLink {
    label?: string;
    targetBotDialog?: string;
    targetVariable?: string;
    targetVariableType?: ConversationVariableType;
}

export class BotStepCondition {
    leftOperandName!: string;
    leftOperandType!: ConversationVariableType;
    operatorType!: BotStepConditionOperatorType;
    rightOperandValue?: string;
}

export class BotVariableOperation {
    askCollectIfSet?: boolean;
    autoSelectIfSingleChoice?: boolean;
    botInvocation?: BotInvocation;
    botMessages!: BotMessage[];
    botQuickReplyOptions!: BotQuickReplyOption[];
    botVariableOperands!: BotVariableOperand[];
    ignoreIntentRecognition?: boolean;
    invalidInputBotNavigation?: BotNavigation;
    messageDefinition?: ConversationDefinitionRichMessage;
    optionalCollect?: boolean;
    quickReplyOptionTemplate?: string;
    quickReplyType?: BotQuickReplyType;
    quickReplyWidgetType?: BotWidgetType;
    retryMessages!: BotMessage[];
    sourceVariableName?: string;
    sourceVariableType?: ConversationVariableType;
    successMessages!: BotMessage[];
    type!: BotVariableOperationType;
    variableOperationIdentifier?: string;
}

export class BotQuickReplyOption {
    literalValue!: string;
    quickReplyOptionIdentifier?: string;
}

export class BotVariableOperand {
    disableAutoFill?: boolean;
    sourceName?: string;
    sourceType?: ConversationVariableOperandSourceType;
    sourceValue?: string;
    targetName!: string;
    targetType!: ConversationVariableType;
}

export class ConversationDefinitionRichMessage {
    executionType?: ConversationMessageExecutionType;
    messageDefinitionMappings!: BotInvocationMapping[];
    messageDefinitionName!: string;
}

export class ConversationRecordLookup {
    SObjectType!: string;
    conditions!: ConversationRecordLookupCondition[];
    filterLogic?: string;
    lookupFields!: ConversationRecordLookupField[];
    maxLookupResults!: number;
    sortFieldName?: string;
    sortOrder?: SortOrder;
    sourceVariableName?: string;
    sourceVariableType?: ConversationVariableType;
    targetVariableName!: string;
}

export class ConversationRecordLookupCondition {
    leftOperand!: string;
    operatorType!: string;
    rightOperandName?: string;
    rightOperandType?: ConversationVariableType;
    rightOperandValue?: string;
    sortOrder!: number;
}

export class ConversationRecordLookupField {
    fieldName!: string;
}

export class ConversationDefinitionStepGoalMapping {
    goalName!: string;
}

export class ConversationSystemMessage {
    systemMessageMappings!: ConversationSystemMessageMapping[];
    type!: ConversationSystemMessageType;
}

export class ConversationSystemMessageMapping {
    mappingType!: ConversationMappingType;
    parameterType!: ConversationSystemMessageParamType;
    variableName!: string;
}

export class ConversationDefinitionPlanner {
    genAiPlannerName!: string;
}

export class ConversationDefinitionGoal {
    developerName!: string;
    label!: string;
}

export class ConversationSystemDialog {
    dialog!: string;
    type!: ConversationSystemDialogType;
}

export class ConversationVariable {
    SObjectType?: string;
    collectionType?: ConversationVariableCollectionType;
    dataType!: ConversationDataType;
    description?: string;
    developerName!: string;
    includeInPrompt?: boolean;
    label!: string;
    visibility?: ConversationVariableVisibilityType;
}

export class ConversationDefinitionNlpProvider {
    language?: Language;
    nlpProviderName?: string;
    nlpProviderType!: ConversationDefinitionNlpProviderType;
}

export class ConversationContextVariable {
    SObjectType?: string;
    contextVariableMappings!: ConversationContextVariableMapping[];
    dataType!: ConversationDataType;
    description?: string;
    developerName!: string;
    includeInPrompt?: boolean;
    label!: string;
}

export class ConversationContextVariableMapping {
    SObjectType!: string;
    fieldName!: string;
    messageType!: MessageType;
}

export class ConversationDefinitionChannelProvider {
    agentRequired?: boolean;
    chatButtonName!: string;
}

export class PageContextVariable {
    SObjectType?: string;
    dataType!: ConversationDataType;
    description?: string;
    developerName!: string;
    label!: string;
}

export class BrandingSetProperty {
    propertyName!: string;
    propertyValue?: string;
}

export class BriefcaseRule {
    briefcaseRuleFilters!: BriefcaseRuleFilter[];
    filterLogic?: string;
    isAscendingOrder?: boolean;
    isRelatedFilesRule?: boolean;
    orderBy?: string;
    queryScope?: FilterScope;
    recordLimit?: number;
    relatedRules!: BriefcaseRule[];
    relationshipField?: string;
    relationshipType?: BriefcaseRuleRelationshipType;
    targetEntity!: string;
}

export class BriefcaseRuleFilter {
    filterOperator!: BriefcaseFilterOperator;
    filterSeqNumber!: number;
    filterValue?: string;
    targetEntityField!: string;
}

export class Holiday {
    activityDate?: Date;
    businessHours!: string[];
    description?: string;
    endTime?: Date;
    isRecurring?: boolean;
    name?: string;
    recurrenceDayOfMonth?: number;
    recurrenceDayOfWeek!: string[];
    recurrenceDayOfWeekMask?: number;
    recurrenceEndDate?: Date;
    recurrenceInstance?: string;
    recurrenceInterval?: number;
    recurrenceMonthOfYear?: string;
    recurrenceStartDate?: Date;
    recurrenceType?: string;
    startTime?: Date;
}

export class BusinessProcessDefinition {
    businessProcessFeedbacks!: BusinessProcessFeedback[];
    description?: string;
    developerName!: string;
    masterLabel!: string;
    sequenceNumber!: number;
}

export class BusinessProcessFeedback {
    actionName!: string;
    actionParam!: string;
    actionType!: ExpFeedbackCollType;
}

export class CMSConnectAsset {
    assetPath!: string;
    assetType!: string;
    sortOrder!: number;
}

export class CMSConnectLanguage {
    cmsLanguage!: string;
    language!: string;
}

export class CMSConnectPersonalization {
    connectorPage!: string;
    connectorPageAsset!: string;
}

export class CMSConnectResourceType {
    cmsConnectResourceDefinition!: CMSConnectResourceDefinition[];
    developerName!: string;
    masterLabel!: string;
    resourceType!: string;
}

export class CMSConnectResourceDefinition {
    developerName!: string;
    masterLabel!: string;
    options!: number;
    payloadType!: string;
    resourceIdPath?: string;
    resourceNamePath?: string;
    resourcePath!: string;
    rootNodePath?: string;
}

export class ContactCenterChannel {
    channel!: string;
    contactCenter!: string;
    voiceMailFallbackQueue?: string;
    voiceMailHandler?: string;
}

export class CallCenterSection {
    items!: CallCenterItem[];
    label!: string;
    name!: string;
}

export class CallCenterItem {
    label!: string;
    name!: string;
    value!: string;
}

export class VendorCallCenterStatusMap {
    externalStatus!: string;
    servicePresenceStatus!: string;
}

export class CareRequestRecords {
    careRequestRecord!: string;
}

export class FeedItemSettings {
    characterLimit?: number;
    displayFormat?: FeedItemDisplayFormat;
    feedItemType!: FeedItemType;
}

export class EmailToCaseSettings {
    enableE2CAttachmentAsFile?: boolean;
    enableE2CDeduplicateAttachments?: boolean;
    enableE2CExternalServer?: boolean;
    enableE2CSourceTracking?: boolean;
    enableEmailToCase?: boolean;
    enableHtmlEmail?: boolean;
    enableNewToReadTriggers?: boolean;
    enableOnDemandEmailToCase?: boolean;
    enableThreadIDInBody?: boolean;
    enableThreadIDInSubject?: boolean;
    enableThreadTokenInBody?: boolean;
    enableThreadTokenInSubject?: boolean;
    movingEmailEnabled?: boolean;
    notifyOwnerOnNewCaseEmail?: boolean;
    overEmailLimitAction?: EmailToCaseOnFailureActionType;
    preQuoteSignature?: boolean;
    replyWithNewContentOnly?: boolean;
    routingAddresses!: EmailToCaseRoutingAddress[];
    showServiceEmailOpenPrompt?: boolean;
    showWordCountInComposer?: boolean;
    unauthorizedSenderAction?: EmailToCaseOnFailureActionType;
    useEmailHeadersForThreading?: boolean;
}

export class EmailToCaseRoutingAddress {
    addressType?: EmailToCaseRoutingAddressType;
    authorizedSenders?: string;
    caseOrigin?: string;
    caseOwner?: string;
    caseOwnerType?: string;
    casePriority?: string;
    createTask?: boolean;
    emailAddress?: string;
    emailServicesAddress?: string;
    fallbackQueue?: string;
    isPermsetControlled?: boolean;
    isVerified?: boolean;
    routingFlow?: string;
    routingName?: string;
    saveEmailHeaders?: boolean;
    taskStatus?: string;
}

export class WebToCaseSettings {
    caseOrigin?: string;
    defaultResponseTemplate?: string;
    enableWebToCase?: boolean;
}

export class ChannelLayoutItem {
    field!: string;
}

export class ChoiceListValue {
    embeddedServiceCustomLabels!: EmbeddedServiceCustomLabel[];
    isDefaultValue!: boolean;
    order!: number;
    valueName!: string;
}

export class EmbeddedServiceCustomLabel {
    customLabel?: string;
    feature?: EmbeddedServiceFeature;
    labelKey?: EmbeddedServiceLabelKey;
}

export class CleanRule {
    bulkEnabled!: boolean;
    bypassTriggers!: boolean;
    bypassWorkflow!: boolean;
    description!: string;
    developerName!: string;
    fieldMappings!: FieldMapping[];
    masterLabel!: string;
    matchRule!: string;
    sourceSobjectType!: string;
    status!: CleanRuleStatus;
    targetSobjectType!: string;
}

export class FieldMapping {
    SObjectType!: string;
    developerName!: string;
    fieldMappingRows!: FieldMappingRow[];
    masterLabel!: string;
}

export class FieldMappingRow {
    SObjectType!: string;
    fieldMappingFields!: FieldMappingField[];
    fieldName!: string;
    mappingOperation!: MappingOperation;
}

export class FieldMappingField {
    dataServiceField!: string;
    dataServiceObjectName!: string;
    priority!: number;
}

export class CloudServiceProviderApi {
    cloudServiceProviderApiType!: CloudServiceProviderApiType;
    name!: string;
    version!: number;
}

export class CommandActionIntent {
    phrase!: string;
    responseTemplates!: CommandActionResponse[];
}

export class CommandActionResponse {
    template!: string;
}

export class CommandActionParam {
    defaultValue?: string;
    description?: string;
    name!: string;
    required?: boolean;
    type!: string;
}

export class ReputationLevels {
    chatterAnswersReputationLevels!: ChatterAnswersReputationLevel[];
    ideaReputationLevels!: IdeaReputationLevel[];
}

export class ChatterAnswersReputationLevel {
    name!: string;
    value!: number;
}

export class IdeaReputationLevel {
    name!: string;
    value!: number;
}

export class CommunityTemplateBundleInfo {
    description?: string;
    image?: string;
    order!: number;
    title!: string;
    type!: CommunityTemplateBundleInfoType;
}

export class NavigationLinkSet {
    navigationMenuItem!: NavigationMenuItem[];
}

export class NavigationMenuItem {
    defaultListViewId?: string;
    label!: string;
    menuItemBranding?: NavigationMenuItemBranding;
    position!: number;
    publiclyAvailable?: boolean;
    subMenu?: NavigationSubMenu;
    target?: string;
    targetPreference?: string;
    type!: string;
}

export class NavigationMenuItemBranding {
    tileImage?: string;
}

export class NavigationSubMenu {
    navigationMenuItem!: NavigationMenuItem[];
}

export class CommunityTemplatePageSetting {
    page!: string;
    themeLayout!: string;
}

export class CommunityCustomThemeLayoutType {
    description?: string;
    label!: string;
}

export class CommunityThemeRouteOverride {
    customThemeLayoutType?: string;
    pageAttributes!: string;
    pageType!: string;
    themeLayoutType?: CommunityThemeLayoutType;
}

export class CommunityThemeSetting {
    customThemeLayoutType?: string;
    themeLayout!: string;
    themeLayoutType?: CommunityThemeLayoutType;
}

export class FiscalYearSettings {
    fiscalYearNameBasedOn?: string;
    startMonth?: string;
}

export class ConnectedAppAttribute {
    formula!: string;
    key!: string;
}

export class ConnectedAppCanvasConfig {
    accessMethod!: AccessMethod;
    canvasUrl!: string;
    lifecycleClass?: string;
    locations!: CanvasLocationOptions[];
    options!: CanvasOptions[];
    samlInitiationMethod?: SamlInitiationMethod;
}

export class ConnectedAppIpRange {
    description?: string;
    end!: string;
    start!: string;
}

export class ConnectedAppMobileDetailConfig {
    applicationBinaryFile?: string;
    applicationBinaryFileName?: string;
    applicationBundleIdentifier?: string;
    applicationFileLength?: number;
    applicationIconFile?: string;
    applicationIconFileName?: string;
    applicationInstallUrl?: string;
    devicePlatform!: DevicePlatformType;
    deviceType?: DeviceType;
    minimumOsVersion?: string;
    privateApp?: boolean;
    version!: string;
}

export class ConnectedAppOauthConfig {
    assetTokenConfig?: ConnectedAppOauthAssetToken;
    callbackUrl!: string;
    certificate?: string;
    consumerKey?: string;
    consumerSecret?: string;
    idTokenConfig?: ConnectedAppOauthIdToken;
    isAdminApproved?: boolean;
    isClientCredentialEnabled?: boolean;
    isCodeCredentialEnabled?: boolean;
    isCodeCredentialPostOnly?: boolean;
    isConsumerSecretOptional?: boolean;
    isIntrospectAllTokens?: boolean;
    isNamedUserJwtEnabled?: boolean;
    isPkceRequired?: boolean;
    isRefreshTokenRotationEnabled?: boolean;
    isSecretRequiredForRefreshToken?: boolean;
    isSecretRequiredForTokenExchange?: boolean;
    isTokenExchangeEnabled?: boolean;
    oauthClientCredentialUser?: string;
    scopes!: ConnectedAppOauthAccessScope[];
    singleLogoutUrl?: string;
}

export class ConnectedAppOauthAssetToken {
    assetAudiences!: string;
    assetIncludeAttributes!: boolean;
    assetIncludeCustomPerms!: boolean;
    assetSigningCertId!: string;
    assetValidityPeriod!: number;
}

export class ConnectedAppOauthIdToken {
    idTokenAudience?: string;
    idTokenIncludeAttributes?: boolean;
    idTokenIncludeCustomPerms?: boolean;
    idTokenIncludeStandardClaims?: boolean;
    idTokenValidity?: number;
}

export class ConnectedAppOauthPolicy {
    ipRelaxation!: string;
    isTokenExchangeFlowEnabled?: boolean;
    refreshTokenPolicy!: string;
    singleLogoutUrl?: string;
}

export class ConnectedAppSamlConfig {
    acsUrl!: string;
    certificate?: string;
    encryptionCertificate?: string;
    encryptionType?: SamlEncryptionType;
    entityUrl!: string;
    issuer?: string;
    samlIdpSLOBindingEnum?: SamlIdpSLOBinding;
    samlNameIdFormat?: SamlNameIdFormatType;
    samlSigningAlgoType?: SamlSigningAlgoType;
    samlSloUrl?: string;
    samlSubjectCustomAttr?: string;
    samlSubjectType!: SamlSubjectType;
}

export class ConnectedAppSessionPolicy {
    policyAction?: string;
    sessionLevel?: string;
    sessionTimeout?: number;
}

export class ContextDefinitionReference {
    inheritedFrom?: string;
    referenceContextDefinition!: string;
}

export class ContextDefinitionVersion {
    contextMappings!: ContextMapping[];
    contextNodes!: ContextNode[];
    endDate?: string;
    isActive?: boolean;
    startDate!: string;
    versionNumber!: number;
}

export class ContextMapping {
    contextMappingIntents!: ContextMappingIntent[];
    contextNodeMappings!: ContextNodeMapping[];
    default?: boolean;
    description?: string;
    inheritedFrom?: string;
    title!: string;
}

export class ContextMappingIntent {
    mappingIntent!: ContextMappingIntentType;
}

export class ContextNodeMapping {
    contextAttributeMappings!: ContextAttributeMapping[];
    contextNode?: string;
    contextNodeAttrDictionaries!: ContextNodeAttrDictionary[];
    inheritedFrom?: string;
    mappedContextDefinition?: string;
    object?: string;
}

export class ContextAttributeMapping {
    contextAttrHydrationDetails!: ContextAttrHydrationDetail[];
    contextAttribute?: string;
    contextInputAttributeName!: string;
    ctxAttrHydrationCtxs!: CtxAttrHydrationCtx[];
    inheritedFrom?: string;
}

export class ContextAttrHydrationDetail {
    contextAttrHydrationDetails!: ContextAttrHydrationDetail[];
    inheritedFrom?: string;
    objectName!: string;
    queryAttribute!: string;
}

export class CtxAttrHydrationCtx {
    contextQueryAttribute!: string;
    inheritedFrom?: string;
}

export class ContextNodeAttrDictionary {
    contextAttrDictIdentifier!: string;
    contextNodeTagPrefix!: string;
}

export class ContextNode {
    canonicalNode?: string;
    contextAttributes!: ContextAttribute[];
    contextNodeAttrDictionaries!: ContextNodeAttrDictionary[];
    contextTags!: ContextTag[];
    displayName?: string;
    inheritedFrom?: string;
    title!: string;
    transposable?: boolean;
}

export class ContextAttribute {
    contextTags!: ContextTag[];
    dataType!: ContextAttributeDataType;
    description?: string;
    displayName?: string;
    domainSet?: string;
    fieldType!: ContextAttributeFieldType;
    inheritedFrom?: string;
    key?: boolean;
    title!: string;
    transient?: boolean;
    value?: boolean;
}

export class ContextTag {
    inheritedFrom?: string;
    title!: string;
}

export class ContractTypeConfig {
    configType!: ContractConfigType;
    configValue!: string;
    usageType?: ContractUsageType;
}

export class ConvIntelligenceSignalSubRule {
    operandValue!: string;
    operator!: ConvIntelligenceOperator;
    order!: number;
    type!: ConvIntelligenceType;
}

export class ConversationMessageConstant {
    compositeValues!: ConversationMessageConstantCompositeValue[];
    constantType!: ConversationMessageConstantType;
    label?: string;
    name?: string;
    primitiveValues!: ConversationMessageConstantPrimitiveValue[];
    valueType?: ConversationMessageValueType;
}

export class ConversationMessageConstantCompositeValue {
    constantItems!: ConversationMessageConstant[];
    identifier!: string;
}

export class ConversationMessageConstantPrimitiveValue {
    contentAssetName?: string;
    textValue?: string;
    type!: ConversationMessageConstantValueType;
    urlValue?: string;
}

export class ConversationMessageHandler {
    activeRequestDurationMinutes!: number;
    handlerName!: string;
    handlerType!: ConversationMessageHandlerType;
}

export class ConversationMessageLayout {
    externalTemplates!: ConvMsgExternalTemplateVersion[];
    formatType!: ConversationMessageFormatType;
    layoutItems!: ConversationMessageLayoutItem[];
    messageType!: ConversationMessageType;
}

export class ConvMsgExternalTemplateVersion {
    accountIdentifier!: string;
    accountName!: string;
    language!: string;
    status!: ConvMsgExternalTemplateVersionStatus;
    templateName!: string;
    templateVersionIdentifier!: string;
}

export class ConversationMessageLayoutItem {
    collectionType!: ConversationMessageCollectionType;
    compositeValues!: ConversationMessageLayoutCompositeValue[];
    name!: string;
    primitiveValues!: ConversationMessageLayoutPrimitiveValue[];
}

export class ConversationMessageLayoutCompositeValue {
    compositeTypeName!: string;
    layoutItems!: ConversationMessageLayoutItem[];
    valueSourceReference?: string;
}

export class ConversationMessageLayoutPrimitiveValue {
    contentAssetName?: string;
    fieldName?: string;
    formulaTemplate?: string;
    literalValue?: string;
    mergeFields!: ConversationMessageMergeField[];
    type!: ConversationMessageLayoutValueType;
    valueFormula?: string;
    valueSourceReference?: string;
}

export class ConversationMessageMergeField {
    formulaTemplate!: string;
    mergeFieldType!: ConversationMessageMergeFieldType;
    name!: string;
    valueSourceReference!: string;
}

export class ConversationMessageOptionsParameter {
    compositeTypeDetails?: ConversationMessageParameterCompositeDetails;
    optionsParameterType!: ConversationMessageOptionsParameterType;
    primitiveTypeDetails?: ConversationMessageParameterPrimitiveDetails;
}

export class ConversationMessageParameterCompositeDetails {
    compositeChildItems!: ConversationMessageParameterCompositeDetails[];
    isList?: boolean;
    isRequired?: boolean;
    label?: string;
    maxListItems?: number;
    name?: string;
    primitiveChildItems!: ConversationMessageParameterPrimitiveDetails[];
}

export class ConversationMessageParameterPrimitiveDetails {
    isList?: boolean;
    isRequired?: boolean;
    label?: string;
    maxListItems?: number;
    name?: string;
    sobjectType?: string;
    valueType?: ConversationMessageValueType;
}

export class ConversationMessageParameter {
    compositeTypeDetails?: ConversationMessageParameterCompositeDetails;
    parameterType!: ConversationMessageParameterType;
    primitiveTypeDetails?: ConversationMessageParameterPrimitiveDetails;
}

export class ActionOverride {
    actionName?: string;
    comment?: string;
    content?: string;
    formFactor?: FormFactor;
    skipRecordTypeSelect?: boolean;
    type?: ActionOverrideType;
}

export class AppBrand {
    footerColor?: string;
    headerColor?: string;
    logo?: string;
    logoVersion?: number;
    shouldOverrideOrgTheme?: boolean;
}

export class ServiceCloudConsoleConfig {
    componentList?: AppComponentList;
    detailPageRefreshMethod!: string;
    footerColor?: string;
    headerColor?: string;
    keyboardShortcuts!: KeyboardShortcuts;
    listPlacement!: ListPlacement;
    listRefreshMethod!: string;
    liveAgentConfig?: LiveAgentConfig;
    primaryTabColor?: string;
    pushNotifications!: PushNotification[];
    tabLimitConfig?: TabLimitConfig;
    whitelistedDomains!: string[];
}

export class AppComponentList {
    alignment!: string;
    components!: string[];
}

export class KeyboardShortcuts {
    customShortcuts!: CustomShortcut[];
    defaultShortcuts!: DefaultShortcut[];
}

export class DefaultShortcut {
    action!: string;
    active!: boolean;
    keyCommand!: string;
}

export class ListPlacement {
    height?: number;
    location!: string;
    units?: string;
    width?: number;
}

export class LiveAgentConfig {
    enableLiveChat?: boolean;
    openNewAccountSubtab?: boolean;
    openNewCaseSubtab?: boolean;
    openNewContactSubtab?: boolean;
    openNewLeadSubtab?: boolean;
    openNewVFPageSubtab?: boolean;
    pageNamesToOpen!: string[];
    showKnowledgeArticles?: boolean;
}

export class PushNotification {
    fieldNames!: string[];
    objectName!: string;
}

export class TabLimitConfig {
    maxNumberOfPrimaryTabs?: string;
    maxNumberOfSubTabs?: string;
}

export class AppPreferences {
    enableCustomizeMyTabs!: boolean;
    enableKeyboardShortcuts!: boolean;
    enableListViewHover!: boolean;
    enableListViewReskin!: boolean;
    enableMultiMonitorComponents!: boolean;
    enablePinTabs!: boolean;
    enableTabHover!: boolean;
    enableTabLimits!: boolean;
    saveUserSessions!: boolean;
}

export class ProfileActionOverride {
    actionName!: string;
    content?: string;
    formFactor!: FormFactor;
    pageOrSobjectType!: string;
    recordType?: string;
    type!: ActionOverrideType;
}

export class AppWorkspaceConfig {
    mappings!: WorkspaceMapping[];
}

export class WorkspaceMapping {
    fieldName?: string;
    tab!: string;
}

export class CustomDataTypeComponent {
    developerSuffix!: string;
    enforceFieldRequiredness?: boolean;
    label!: string;
    length?: number;
    precision?: number;
    scale?: number;
    sortOrder?: SortOrder;
    sortPriority?: number;
    type!: FieldType;
}

export class FeedFilterCriterion {
    feedItemType!: FeedItemType;
    feedItemVisibility?: FeedItemVisibility;
    relatedSObjectType?: string;
}

export class LookupFilter {
    active!: boolean;
    booleanFilter?: string;
    description?: string;
    errorMessage?: string;
    filterItems!: FilterItem[];
    infoMessage?: string;
    isOptional!: boolean;
}

export class MktDataLakeFieldAttributes {
    dateFormat?: string;
    definitionCreationType?: DefinitionCreationType;
    externalName?: string;
    isEventDate?: boolean;
    isInternalOrganization?: boolean;
    isRecordModified?: boolean;
    keyQualifierName?: string;
    mktDatalakeSrcKeyQualifier?: string;
    primaryIndexOrder?: number;
    usageTag?: UsageTag;
}

export class MktDataModelFieldAttributes {
    definitionCreationType?: DefinitionCreationType;
    invalidMergeActionType?: InvalidMergeActionType;
    isDynamicLookup?: boolean;
    keyQualifierName?: string;
    labelOverride?: string;
    masterLabel?: string;
    primaryIndexOrder?: number;
    refAttrDeveloperName?: string;
    usageTag?: MktDataModelFieldUsageTag;
}

export class Picklist {
    controllingField?: string;
    picklistValues!: PicklistValue[];
    restrictedPicklist?: boolean;
    sorted!: boolean;
}

export class ValueSet {
    controllingField?: string;
    restricted?: boolean;
    valueSetDefinition?: ValueSetValuesDefinition;
    valueSetName?: string;
    valueSettings!: ValueSettings[];
}

export class ValueSetValuesDefinition {
    sorted!: boolean;
    value!: CustomValue[];
}

export class ValueSettings {
    controllingFieldValue!: string[];
    valueName!: string;
}

export class CustomHelpMenuItem {
    linkUrl!: string;
    masterLabel!: string;
    sortOrder!: number;
}

export class CustomMetadataValue {
    field!: string;
    value?: any;
}

export class ArticleTypeChannelDisplay {
    articleTypeTemplates!: ArticleTypeTemplate[];
}

export class ArticleTypeTemplate {
    channel!: Channel;
    page?: string;
    template!: Template;
}

export class FieldSetItem {
    alternativeDisplayFormat?: string;
    field?: string;
    isFieldManaged?: boolean;
    isRequired?: boolean;
}

export class HistoryRetentionPolicy {
    archiveAfterMonths!: number;
    archiveRetentionYears!: number;
    description?: string;
    gracePeriodDays!: number;
}

export class IndexField {
    name!: string;
    sortDirection!: string;
}

export class ListViewFilter {
    field!: string;
    operation!: FilterOperation;
    value?: string;
}

export class SharedTo {
    allCustomerPortalUsers?: string;
    allInternalUsers?: string;
    allPartnerUsers?: string;
    channelProgramGroup!: string[];
    channelProgramGroups!: string[];
    group!: string[];
    groups!: string[];
    guestUser!: string[];
    managerSubordinates!: string[];
    managers!: string[];
    portalRole!: string[];
    portalRoleAndSubordinates!: string[];
    queue!: string[];
    role!: string[];
    roleAndSubordinates!: string[];
    roleAndSubordinatesInternal!: string[];
    roles!: string[];
    rolesAndSubordinates!: string[];
    territories!: string[];
    territoriesAndSubordinates!: string[];
    territory!: string[];
    territoryAndSubordinates!: string[];
}

export class MktDataLakeAttributes {
    creationType?: DefinitionCreationType;
    isEnabled?: boolean;
    objectCategory?: string;
}

export class MktDataModelAttributes {
    creationType?: DefinitionCreationType;
    dataModelTaxonomy?: string;
    dataSpaceName?: string;
    dataSpacePrefix?: string;
    description?: string;
    isEnabled?: boolean;
    isSegmentable?: boolean;
    isUsedForMetrics?: boolean;
    labelOverride?: string;
    masterLabel?: string;
    objectCategory?: string;
    referenceEntityGroup?: string;
    referenceEntityName?: string;
    referenceEntitySubjectArea?: string;
}

export class ProfileSearchLayouts {
    fields!: string[];
    profileName?: string;
}

export class RecordTypePicklistValue {
    picklist!: string;
    values!: PicklistValue[];
}

export class SearchLayouts {
    customTabListAdditionalFields!: string[];
    excludedStandardButtons!: string[];
    listViewButtons!: string[];
    lookupDialogsAdditionalFields!: string[];
    lookupFilterFields!: string[];
    lookupPhoneDialogsAdditionalFields!: string[];
    massQuickActions!: string[];
    searchFilterFields!: string[];
    searchResultsAdditionalFields!: string[];
    searchResultsCustomButtons!: string[];
}

export class SharingRecalculation {
    className!: string;
}

export class ObjectNameCaseValue {
    article?: Article;
    caseType?: CaseType;
    plural?: boolean;
    possessive?: Possessive;
    value!: string;
}

export class FieldSetTranslation {
    label!: string;
    name!: string;
}

export class CustomFieldTranslation {
    caseValues!: ObjectNameCaseValue[];
    gender?: Gender;
    help?: string;
    label?: string;
    lookupFilter?: LookupFilterTranslation;
    name!: string;
    picklistValues!: PicklistValueTranslation[];
    relationshipLabel?: string;
    startsWith?: StartsWith;
}

export class LookupFilterTranslation {
    errorMessage!: string;
    informationalMessage!: string;
}

export class PicklistValueTranslation {
    masterLabel!: string;
    translation?: string;
}

export class LayoutTranslation {
    layout!: string;
    layoutType?: string;
    sections!: LayoutSectionTranslation[];
}

export class LayoutSectionTranslation {
    label!: string;
    section!: string;
}

export class QuickActionTranslation {
    aspect?: string;
    label!: string;
    name!: string;
    quickActionParametersTranslation!: QuickActionParametersTranslation[];
}

export class QuickActionParametersTranslation {
    aspect?: string;
    name!: string;
    value!: string;
}

export class RecordTypeTranslation {
    description?: string;
    label!: string;
    name!: string;
}

export class SharingReasonTranslation {
    label!: string;
    name!: string;
}

export class StandardFieldTranslation {
    label?: string;
    name!: string;
}

export class ValidationRuleTranslation {
    errorMessage!: string;
    name!: string;
}

export class WebLinkTranslation {
    label!: string;
    name!: string;
}

export class WorkflowTaskTranslation {
    description?: string;
    name!: string;
    subject?: string;
}

export class CustomPermissionDependencyRequired {
    customPermission!: string;
    dependency!: boolean;
}

export class SiteWebAddress {
    certificate?: string;
    domainName!: string;
    primary!: boolean;
}

export class SiteIframeWhiteListUrl {
    url!: string;
}

export class SiteRedirectMapping {
    action!: SiteRedirect;
    isActive?: boolean;
    isDynamic?: boolean;
    source!: string;
    target!: string;
}

export class DashboardFilter {
    dashboardFilterOptions!: DashboardFilterOption[];
    name!: string;
}

export class DashboardFilterOption {
    operator!: DashboardFilterOperation;
    values!: string[];
}

export class DashboardGridLayout {
    dashboardGridComponents!: DashboardGridComponent[];
    numberOfColumns!: number;
    rowHeight!: number;
}

export class DashboardGridComponent {
    colSpan!: number;
    columnIndex!: number;
    dashboardComponent!: DashboardComponent;
    rowIndex!: number;
    rowSpan!: number;
}

export class DashboardComponent {
    autoselectColumnsFromReport?: boolean;
    chartAxisRange?: ChartRangeType;
    chartAxisRangeMax?: number;
    chartAxisRangeMin?: number;
    chartSummary!: ChartSummary[];
    componentChartTheme?: ChartTheme;
    componentType!: DashboardComponentType;
    dashboardComponentContents!: DashboardComponentContent[];
    dashboardDynamicValues!: DashboardDynamicValue[];
    dashboardFilterColumns!: DashboardFilterColumn[];
    dashboardTableColumn!: DashboardTableColumn[];
    decimalPrecision?: number;
    displayUnits?: ChartUnits;
    drillDownUrl?: string;
    drillEnabled?: boolean;
    drillToDetailEnabled?: boolean;
    enableHover?: boolean;
    expandOthers?: boolean;
    flexComponentProperties?: DashboardFlexTableComponentProperties;
    footer?: string;
    gaugeMax?: number;
    gaugeMin?: number;
    groupingColumn!: string[];
    groupingSortProperties?: DashboardComponentGroupingSortProperties;
    header?: string;
    indicatorBreakpoint1?: number;
    indicatorBreakpoint2?: number;
    indicatorHighColor?: string;
    indicatorLowColor?: string;
    indicatorMiddleColor?: string;
    legendPosition?: ChartLegendPosition;
    maxValuesDisplayed?: number;
    metricLabel?: string;
    page?: string;
    pageHeightInPixels?: number;
    report?: string;
    scontrol?: string;
    scontrolHeightInPixels?: number;
    showPercentage?: boolean;
    showPicturesOnCharts?: boolean;
    showPicturesOnTables?: boolean;
    showRange?: boolean;
    showTotal?: boolean;
    showValues?: boolean;
    sortBy?: DashboardComponentFilter;
    sortLegendValues?: boolean;
    title?: string;
    useReportChart?: boolean;
}

export class ChartSummary {
    aggregate?: ReportSummaryType;
    axisBinding?: ChartAxis;
    column!: string;
}

export class DashboardComponentContent {
    additionalInfo?: string;
    altText?: string;
    fileName?: string;
    fit?: Fit;
    horizontalAlignment?: HorizontalAlignment;
    richTextContent?: string;
    tooltip?: string;
    verticalAlignment?: VerticalAlignment;
}

export class DashboardDynamicValue {
    additionalInfo?: string;
    fieldName!: string;
    isDynamicUser?: boolean;
}

export class DashboardFilterColumn {
    column!: string;
}

export class DashboardTableColumn {
    aggregateType?: ReportSummaryType;
    calculatePercent?: boolean;
    column!: string;
    decimalPlaces?: number;
    showSubTotal?: boolean;
    showTotal?: boolean;
    sortBy?: DashboardComponentFilter;
}

export class DashboardFlexTableComponentProperties {
    decimalPrecision?: number;
    flexTableColumn!: DashboardComponentColumn[];
    flexTableSortInfo?: DashboardComponentSortInfo;
    hideChatterPhotos?: boolean;
}

export class DashboardComponentColumn {
    breakPoint1?: number;
    breakPoint2?: number;
    breakPointOrder?: number;
    highRangeColor?: number;
    lowRangeColor?: number;
    midRangeColor?: number;
    reportColumn!: string;
    showSubTotal?: boolean;
    showTotal?: boolean;
    type!: DashboardComponentColumnType;
}

export class DashboardComponentSortInfo {
    sortColumn?: string;
    sortOrder?: string;
}

export class DashboardComponentGroupingSortProperties {
    groupingSorts!: DashboardComponentGroupingSort[];
}

export class DashboardComponentGroupingSort {
    groupingLevel!: string;
    inheritedReportGroupingSort?: string;
    sortColumn?: string;
    sortOrder?: string;
}

export class DashboardComponentSection {
    columnSize!: DashboardComponentSize;
    components!: DashboardComponent[];
}

export class DataCategory {
    dataCategory!: DataCategory[];
    label!: string;
    name!: string;
}

export class ObjectUsage {
    object!: string[];
}

export class DataPlatDataSetBundle {
    bundleType?: string;
    dataPlatformDataSets!: DataPlatformDataSet[];
    description?: string;
    iconUri?: string;
    sortOrder?: number;
}

export class DataPlatformDataSet {
    dataSetType?: string;
    description?: string;
    iconUri?: string;
    sortOrder?: number;
}

export class DataspaceScopeSchemaAccess {
    metadataGroup!: string;
}

export class DecisionMatrixDefinitionVersionColumn {
    columnType!: DecisionMatrixColumnType;
    dataType!: DecisionMatrixDataType;
    displaySequence!: number;
    isWildcardColumn!: boolean;
    name!: string;
    rangeValue?: string;
    wildcardValue?: string;
}

export class DecisionTableParameter {
    dataType?: DTParameterDataType;
    decimalScale?: number;
    domainObject?: string;
    fieldName!: string;
    fieldPath?: string;
    isGroupByField?: boolean;
    isPriorityField?: boolean;
    isRequired?: boolean;
    length?: number;
    operator?: DecisionTableOperator;
    sequence?: number;
    sortType?: DecisionTableSortType;
    usage!: DecisionTableParameterType;
}

export class DecisionTableSourceCriteria {
    operator!: DTSourceCriteriaOperator;
    sequenceNumber!: number;
    sourceFieldName!: string;
    value?: string;
    valueType!: DTSourceCriteriaValueType;
}

export class DecisionTblDatasetParameter {
    datasetFieldName!: string;
    datasetSourceObject!: string;
    fieldName!: string;
}

export class FtestDetailWithDeclMd1 {
    bitVectorFieldBlooper?: boolean;
    bitVectorFieldRound?: boolean;
    bitVectorFieldSquare?: boolean;
    bitVectorFieldTriangle?: boolean;
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    enumOrIdField?: string;
    integerField!: number;
    staticEnumField?: FTestTopLevelSelection;
    subItems!: FtestSubDetailWithDeclMd[];
}

export class FtestSubDetailWithDeclMd {
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    integerField!: number;
    staticEnumField?: FTestTopLevelSelection;
}

export class FtestDetailWithDeclMd2 {
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    integerField!: number;
    staticEnumField?: FTestTopLevelSelection;
}

export class SchedulingObjectiveParameter {
    parameterKey!: ObjectiveParameterKey;
    value?: string;
}

export class EmployeeDataSyncField {
    description?: string;
    isActive!: boolean;
    isDefault!: boolean;
    isRequired!: boolean;
    sourceField!: string;
    targetField!: string;
}

export class RelatedRecordAccessFltr {
    field!: string;
    objectType!: RRAFObjectType;
    operator!: RRAFOperator;
    sequenceNumber!: number;
    value!: string;
}

export class RelatedRecordAccessMap {
    sourceObjAccessLevel!: ObjectAccessLevel;
    sourceObjParticipantRole?: string;
    targetObjAccessLevel!: ObjectAccessLevel;
    targetObjParticipantRole?: string;
}

export class ActionableListDatasetColumn {
    dataDomain?: DatasetColumnDataType;
    dataType?: DatatableDataType;
    displayOrder?: number;
    isDefault?: boolean;
    isGroupedByListDefObj?: boolean;
    isTypeAheadSearchEnabled?: boolean;
    objectName?: string;
    sourceColumnApiName?: string;
    sourceFieldName?: string;
}

export class ActionableListMemberStatus {
    iconName?: string;
    status?: string;
}

export class SchedulingRuleParameter {
    schedulingParameterKey!: SchedulingParameterKey;
    value?: string;
}

export class DigitalExperienceFolderShares {
    digitalExperienceFolderShare!: DigitalExperienceFolderShare[];
}

export class DigitalExperienceFolderShare {
    folderPath!: string;
    sharedWith!: SharedWith[];
}

export class SharedWith {
    fullyQualifiedName!: string;
}

export class DigitalExperienceModuleCollection {
    module!: DigitalExperienceModule[];
}

export class DigitalExperienceModule {
    fullyQualifiedName!: string;
    status!: ManagedContentSpaceModuleStatusEnum;
}

export class ContentAssetRelationships {
    emailTemplate!: ContentAssetLink[];
    insightsApplication!: ContentAssetLink[];
    network!: ContentAssetLink[];
    organization?: ContentAssetLink;
    workspace!: ContentAssetLink[];
}

export class ContentAssetLink {
    access!: ContentAssetAccess;
    isManagingWorkspace?: boolean;
    name?: string;
}

export class ContentAssetVersions {
    version!: ContentAssetVersion[];
}

export class ContentAssetVersion {
    number!: string;
    pathOnClient!: string;
    zipEntry?: string;
}

export class DiscoveryModelField {
    isDisparateImpact?: boolean;
    isSensitive?: boolean;
    label!: string;
    name!: string;
    type!: DiscoveryModelFieldType;
    values!: string[];
}

export class DiscoveryModelTransform {
    config?: string;
    sourceFieldNames!: string[];
    targetFieldNames!: string[];
    type!: DiscoveryAIModelTransformationType;
}

export class DiscoveryStoryOutcome {
    failureValue?: string;
    field!: string;
    goal!: DiscoveryStoryOutcomeGoal;
    label!: string;
    successValue?: string;
    type!: DiscoveryStoryOutcomeType;
}

export class EclairMap {
    boundingBoxBottom?: number;
    boundingBoxLeft?: number;
    boundingBoxRight?: number;
    boundingBoxTop?: number;
    mapLabel?: string;
    mapName!: string;
    projection!: string;
}

export class Attachment {
    content!: string;
    name!: string;
}

export class Site {
    urlPathPrefix?: string;
}

export class DiscoveryDeployedModel {
    active!: boolean;
    aiModel!: string;
    classificationThreshold?: number;
    fieldMappings!: DiscoveryFieldMap[];
    filters!: DiscoveryFilter[];
    label!: string;
    name!: string;
    prescribableFields!: DiscoveryPrescribableField[];
}

export class DiscoveryFieldMap {
    mappedField!: string;
    modelField!: string;
    sobjectFieldJoinKey?: string;
    source?: string;
    sourceFieldJoinKey?: string;
    sourceType!: DiscoveryFieldMapSourceType;
}

export class DiscoveryFilter {
    field!: string;
    operator!: DiscoveryFilterOperator;
    type?: DiscoveryFilterFieldType;
    values!: DiscoveryFilterValue[];
}

export class DiscoveryFilterValue {
    type!: DiscoveryFilterValueType;
    value!: string;
}

export class DiscoveryPrescribableField {
    customDefinitions!: DiscoveryCustomPrescribableFieldDefinition[];
    name!: string;
}

export class DiscoveryCustomPrescribableFieldDefinition {
    filters!: DiscoveryFilter[];
    template?: string;
}

export class DiscoveryModelCard {
    contactEmail?: string;
    contactName?: string;
    label?: string;
    sections?: string;
}

export class DiscoveryGoalOutcome {
    field!: string;
    fieldLabel!: string;
    goal!: DiscoveryOutcomeGoal;
    mappedField?: string;
}

export class DuplicateRuleFilter {
    booleanFilter?: string;
    duplicateRuleFilterItems!: DuplicateRuleFilterItem[];
}

export class DuplicateRuleMatchRule {
    matchRuleSObjectType!: string;
    matchingRule!: string;
    objectMapping?: ObjectMapping;
}

export class EmailServicesAddress {
    authorizedSenders?: string;
    developerName!: string;
    isActive?: boolean;
    localPart!: string;
    runAsUser!: string;
}

export class EmbeddedServiceAppointmentSettings {
    appointmentConfirmImg?: string;
    enabled!: boolean;
    homeImg?: string;
    logoImg?: string;
    shouldShowExistingAppointment?: boolean;
    shouldShowNewAppointment?: boolean;
}

export class EmbeddedServiceCustomComponent {
    componentBundleType?: EmbeddedServiceComponentBundleType;
    customComponent?: string;
    customComponentType?: EmbeddedServiceCustomComponentType;
}

export class EmbeddedServiceCustomization {
    customizationName!: string;
    description?: string;
    embeddedServiceResources!: EmbeddedServiceResource[];
}

export class EmbeddedServiceResource {
    resource!: string;
    resourceType!: EmbeddedServiceResourceType;
}

export class EmbeddedServiceFlow {
    flow!: string;
    flowType!: EmbeddedServiceFlowType;
    isAuthenticationRequired!: boolean;
}

export class EmbeddedServiceForm {
    displayContext!: EmbeddedServiceFormDisplayContext;
    embeddedServiceFormFields!: EmbeddedServiceFormField[];
    isActive?: boolean;
}

export class EmbeddedServiceFormField {
    choiceList?: string;
    displayOrder!: number;
    embeddedServiceCustomLabels!: EmbeddedServiceCustomLabel[];
    formField!: string;
    formFieldType!: EmbeddedServiceFormFieldType;
    isHidden?: boolean;
    isRequired?: boolean;
    messagingChannelParameterType!: MessagingChannelParameterType;
}

export class EmbeddedServiceLayout {
    embeddedServiceLayoutRules!: EmbeddedServiceLayoutRule[];
    layout!: string;
    layoutType?: EmbeddedServiceLayoutType;
}

export class EmbeddedServiceLayoutRule {
    appointmentStatus!: string;
}

export class EmbeddedServiceMessagingChannel {
    businessHours?: string;
    isEnabled!: boolean;
    messagingChannel!: string;
    shouldShowDeliveryReceipts!: boolean;
    shouldShowEmojiSelection!: boolean;
    shouldShowReadReceipts!: boolean;
    shouldShowTypingIndicators!: boolean;
    shouldStartNewLineOnEnter!: boolean;
}

export class EmbeddedServiceQuickAction {
    embeddedServiceLiveAgent!: string;
    order!: number;
    quickActionDefinition!: string;
    quickActionType?: EmbeddedServiceQuickActionType;
}

export class EmbeddedServiceMenuItem {
    channel?: string;
    channelType?: EmbeddedServiceChannelType;
    customUrl?: string;
    displayOrder?: number;
    embeddedServiceCustomLabels!: EmbeddedServiceCustomLabel[];
    iconUrl?: string;
    isDisplayedOnPageLoad!: boolean;
    itemName!: string;
    osOptionsHideInIOS?: boolean;
    osOptionsHideInLinuxOS?: boolean;
    osOptionsHideInMacOS?: boolean;
    osOptionsHideInOtherOS?: boolean;
    osOptionsHideInWindowsOS?: boolean;
    phoneNumber?: string;
    shouldOpenUrlInSameTab?: boolean;
}

export class EnablementMeasureSourceObjectDefinition {
    aggregateFieldApiName?: string;
    aggregateFunction!: EnablementAggregationType;
    dateFieldApiName!: string;
    displayFieldApiName!: string;
    filterLogic?: string;
    filters!: EnablementMeasureFilterDefinition[];
    objectApiName!: string;
    relatedMeasureObjects!: EnablementMeasureRelatedObjectDefinition[];
    userFieldApiName!: string;
}

export class EnablementMeasureFilterDefinition {
    fieldApiName!: string;
    fieldValue!: string;
    operator!: EnablementFilterOperator;
    sequenceNumber!: number;
}

export class EnablementMeasureRelatedObjectDefinition {
    filterLogic?: string;
    filters!: EnablementMeasureFilterDefinition[];
    idFieldApiName!: string;
    objectApiName!: string;
}

export class EnablementProgramSection {
    developerName!: string;
    name!: string;
    sequenceNumber!: number;
    tasks!: EnablementProgramTask[];
}

export class EnablementProgramTask {
    customSubCategoryName?: string;
    day!: number;
    description!: string;
    developerName!: string;
    exercise?: EnablementProgramTaskExercise;
    milestone?: EnablementProgramTaskMilestone;
    name!: string;
    sequenceNumber!: number;
    taskCategory!: ProgramTaskDefCategory;
    taskSubCategory!: string;
}

export class EnablementProgramTaskExercise {
    cmsContent?: EnablementProgramTaskCmsContent;
    customContent?: EnablementProgramTaskCustomContent;
    externalContent?: EnablementProgramTaskExternalContent;
    feedbackContent?: EnablementProgramTaskFeedbackContent;
}

export class EnablementProgramTaskCmsContent {
    apiName!: string;
    contentKey?: string;
}

export class EnablementProgramTaskCustomContent {
    content?: string;
}

export class EnablementProgramTaskExternalContent {
    externalId!: string;
    providerType!: ProgramExtContentDefProvider;
}

export class EnablementProgramTaskFeedbackContent {
    inviteeCount?: number;
    promptTemplate?: string;
    surveyDeveloperName?: string;
    type!: string;
}

export class EnablementProgramTaskMilestone {
    compositeMilestoneType?: EnblCompositeMilestoneType;
    isMilestoneAnOutcome!: boolean;
    milestoneMeasures!: EnablementProgramTaskMilestoneMeasure[];
    milestoneTarget?: number;
    minimumSampleSize?: number;
    startDay?: number;
}

export class EnablementProgramTaskMilestoneMeasure {
    measureDefinitionDeveloperName!: string;
    sequenceNumber?: number;
}

export class EntitlementProcessMilestoneItem {
    businessHours?: string;
    criteriaBooleanFilter?: string;
    milestoneCompletionCriteria?: MilestoneCompletionCriteria;
    milestoneCriteriaFilterItems!: FilterItem[];
    milestoneCriteriaFormula?: string;
    milestoneName?: string;
    minutesCustomClass?: string;
    minutesToComplete?: number;
    successActions!: WorkflowActionReference[];
    timeTriggers!: EntitlementProcessMilestoneTimeTrigger[];
    useCriteriaStartTime?: boolean;
}

export class MilestoneCompletionCriteria {
    criteriaObjectName?: string;
    criteriaObjectType?: string;
}

export class EntitlementProcessMilestoneTimeTrigger {
    actions!: WorkflowActionReference[];
    timeLength?: number;
    workflowTimeTriggerUnit!: MilestoneTimeUnits;
}

export class EventParameterMap {
    parameterName!: string;
    parameterValue?: string;
}

export class EventLogObject {
    eventLogName!: string;
    isEnabled!: boolean;
}

export class ExperienceResources {
    experienceResource!: ExperienceResource[];
}

export class ExperienceResource {
    fileName!: string;
    format!: string;
    source?: string;
    type!: string;
}

export class ExperiencePropertyTypeBundleResource {
    fileName!: string;
    filePath!: string;
    source!: string;
}

export class ExpressionSetStep {
    actionType?: BusinessKnowledgeModel;
    advancedCondition?: ExpressionSetAdvancedCondition;
    aggregation?: ExpressionSetAggregation;
    assignment?: ExpressionSetAssignment;
    conditionExpression?: ExpressionSetConditionExpression;
    customElement?: ExpressionSetCustomElement;
    decisionTable?: ExpressionSetDecisionTable;
    description?: string;
    failedExplainerTemplate?: string;
    failedMessageTokenMappings!: ExplainabilityMessageTemplateTokenMapping[];
    label!: string;
    name!: string;
    noResultExplainerTemplate?: string;
    noResultMessageTokenMappings!: ExplainabilityMessageTemplateTokenMapping[];
    parentStep?: string;
    passedExplainerTemplate?: string;
    passedMessageTokenMappings!: ExplainabilityMessageTemplateTokenMapping[];
    resultIncluded?: boolean;
    sequenceNumber!: number;
    shouldExposExecPathMsgOnly?: boolean;
    shouldExposeConditionDetails?: boolean;
    shouldShowExplExternally?: boolean;
    stepType!: ExpsSetStepType;
    subExpression?: ExpressionSetSubExpression;
}

export class ExpressionSetAdvancedCondition {
    conditionLogic!: string;
    criteria!: ExpressionSetConditionCriteria[];
    errorMessage?: string;
    resultParameter?: string;
    successMessage?: string;
}

export class ExpressionSetConditionCriteria {
    operator!: ExpsSetConditionOperator;
    sequenceNumber!: number;
    sourceFieldName!: string;
    value?: string;
    valueType?: ExpsSetValueType;
}

export class ExpressionSetAggregation {
    aggergatedParameter!: string;
    aggregateFunction!: ExpsSetAggregationFunction;
    expression!: string;
}

export class ExpressionSetAssignment {
    assignedParameter!: string;
    expression!: string;
}

export class ExpressionSetConditionExpression {
    errorMessage?: string;
    expression!: string;
    resultParameter?: string;
    successMessage?: string;
}

export class ExpressionSetCustomElement {
    parameters!: ExpressionSetElementParameter[];
}

export class ExpressionSetElementParameter {
    input!: boolean;
    name!: string;
    output!: boolean;
    type?: ExpsSetValueType;
    value!: string;
}

export class ExpressionSetDecisionTable {
    decisionTableName!: string;
    mappings!: ExpressionSetElementParameter[];
    type!: string;
}

export class ExplainabilityMessageTemplateTokenMapping {
    expressionSetMessageToken!: string;
    resourceReference!: string;
}

export class ExpressionSetSubExpression {
    expressionSet!: string;
    mappings!: ExpressionSetElementParameter[];
}

export class ExpressionSetVariable {
    collection?: boolean;
    dataType!: ExpsSetDataType;
    decimalPlaces?: number;
    description?: string;
    fields!: ExpressionSetVariableField[];
    input?: boolean;
    lookupName?: string;
    lookupType?: ExpsSetVariableLookupType;
    name!: string;
    objectName?: string;
    output?: boolean;
    resultStep?: string;
    type!: ExpsSetVariableType;
    value?: string;
}

export class ExpressionSetVariableField {
    dataType!: ExpsSetDataType;
    decimalPlaces?: number;
    fields!: ExpressionSetVariableField[];
    lookupName?: string;
    lookupType?: ExpsSetVariableLookupType;
    name!: string;
    objectName?: string;
}

export class ExpressionSetObjectAliasField {
    dataType?: ExpsSetDataType;
    decimalScale?: number;
    fieldAlias!: string;
    sourceFieldName!: string;
}

export class ExternalConversationBotDef {
    displayName?: string;
    externalId!: string;
    isActive?: boolean;
    type?: ExternalBotType;
}

export class ExternalAuthIdentityProviderParameter {
    description?: string;
    parameterName!: string;
    parameterType!: ExtlIdentityProviderParmType;
    parameterValue?: string;
    sequenceNumber?: number;
}

export class ExternalCredentialParameter {
    authProvider?: string;
    certificate?: string;
    description?: string;
    externalAuthIdentityProvider?: string;
    parameterGroup?: string;
    parameterName!: string;
    parameterType!: ExternalCredentialParamType;
    parameterValue?: string;
    sequenceNumber?: number;
}

export class CustomHttpHeader {
    description?: string;
    headerFieldName!: string;
    headerFieldValue!: string;
    isActive?: boolean;
}

export class ExternalServiceOperation {
    active!: boolean;
    name!: string;
}

export class ExternalAppIdTokenConfig {
    idTokenAudience?: string;
    idTokenIncludeAttributes?: boolean;
    idTokenIncludeCustomPermissions?: boolean;
    idTokenIncludeStandardClaims?: boolean;
    idTokenValidityInMinutes?: number;
}

export class ExtlClntAppNotificationType {
    notificationType!: string;
    pushByDefault?: boolean;
}

export class ExtlClntAppOauthPoliciesAttribute {
    formula!: string;
    key!: string;
}

export class ExtlClntAppOauthSettingsAttribute {
    formula!: string;
    key!: string;
}

export class ExtlClntAppOauthIpRange {
    description?: string;
    endIpAddress!: string;
    startIpAddress!: string;
}

export class ExtlClntAppAndroidPushConfig {
    fcmProject!: string;
    serviceAccount!: string;
}

export class ExtlClntAppApplePushConfig {
    applicationBundle?: string;
    certificate?: string;
    environment!: ApplePushEnvironmentType;
    keyIdentifier?: string;
    password?: string;
    signingKey?: string;
    teamIdentifier?: string;
}

export class ExtlClntAppSamlConfigurablePoliciesAttribute {
    formula!: string;
    key!: string;
}

export class FieldMappingConfigItem {
    destinationFieldId?: string;
    destinationObjectId?: string;
    sequence?: number;
    sourceFieldId?: string;
}

export class ObjectMappingItem {
    mappingType!: MappingType;
    objectMapping!: ObjectMapping;
}

export class FileTypeDispositionAssignmentBean {
    behavior!: FileDownloadBehavior;
    fileType!: FileType;
    securityRiskFileType!: boolean;
}

export class FlexiPageEvent {
    sourceName!: string;
    sourceProperties!: FlexiPageEventSourceProperty[];
    sourceType!: FlexipageEventSourceTypeEnum;
    targets!: FlexiPageEventTarget[];
}

export class FlexiPageEventSourceProperty {
    name!: string;
    value!: string;
}

export class FlexiPageEventTarget {
    mappings!: FlexiPageEventPropertyMapping[];
    method!: string;
    name!: string;
    properties!: FlexiPageEventTargetProperty[];
    type!: FlexipageEventTargetTypeEnum;
}

export class FlexiPageEventPropertyMapping {
    name!: string;
    value?: string;
}

export class FlexiPageEventTargetProperty {
    name!: string;
    value!: string;
}

export class FlexiPageRegion {
    appendable?: RegionFlagStatus;
    itemInstances!: ItemInstance[];
    mode?: FlexiPageRegionMode;
    name!: string;
    prependable?: RegionFlagStatus;
    replaceable?: RegionFlagStatus;
    type!: FlexiPageRegionType;
}

export class ItemInstance {
    componentInstance?: ComponentInstance;
    fieldInstance?: FieldInstance;
}

export class ComponentInstance {
    componentInstanceProperties!: ComponentInstanceProperty[];
    componentName!: string;
    componentType?: ComponentInstanceType;
    flexipageDataSources!: FlexipageDataSource[];
    identifier?: string;
    visibilityRule?: UiFormulaRule;
}

export class ComponentInstanceProperty {
    name?: string;
    type?: ComponentInstancePropertyTypeEnum;
    value?: string;
    valueList?: ComponentInstancePropertyList;
}

export class ComponentInstancePropertyList {
    valueListItems!: ComponentInstancePropertyListItem[];
}

export class ComponentInstancePropertyListItem {
    value?: string;
    visibilityRule?: UiFormulaRule;
}

export class UiFormulaRule {
    booleanFilter?: string;
    criteria!: UiFormulaCriterion[];
}

export class UiFormulaCriterion {
    leftValue!: string;
    operator!: string;
    rightValue?: string;
}

export class FlexipageDataSource {
    definition?: string;
    mode?: FlexipageDataSourceModeEnum;
    name!: string;
    properties?: string;
    type!: FlexipageDataSourceTypeEnum;
}

export class FieldInstance {
    fieldInstanceProperties!: FieldInstanceProperty[];
    fieldItem!: string;
    identifier?: string;
    visibilityRule?: UiFormulaRule;
}

export class FieldInstanceProperty {
    name?: string;
    value?: string;
}

export class PlatformActionList {
    actionListContext!: PlatformActionListContext;
    platformActionListItems!: PlatformActionListItem[];
    relatedSourceEntity?: string;
}

export class PlatformActionListItem {
    actionName!: string;
    actionType!: PlatformActionType;
    sortOrder!: number;
    subtype?: string;
}

export class QuickActionList {
    quickActionListItems!: QuickActionListItem[];
}

export class QuickActionListItem {
    quickActionName!: string;
}

export class FlexiPageTemplateInstance {
    componentType?: ComponentInstanceType;
    flexipageDataSources!: FlexipageDataSource[];
    identifier?: string;
    name!: string;
    properties!: ComponentInstanceProperty[];
    schemaProperties!: FlexiPageCompSchemaPropertyDef[];
}

export class FlexiPageCompSchemaPropertyDef {
    description?: string;
    isRequired?: boolean;
    label?: string;
    name!: string;
    type!: FlexipageSchemaPropType;
}

export class FlowBaseElement {
    processMetadataValues!: FlowMetadataValue[];
}

export class FlowMetadataValue {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowElementReferenceOrValue {
    apexValue?: string;
    booleanValue?: boolean;
    complexValue?: string;
    complexValueType?: FlowComplexValueType;
    dateTimeValue?: Date;
    dateValue?: Date;
    elementReference?: string;
    formulaDataType?: FlowDataType;
    formulaExpression?: string;
    numberValue?: number;
    setupReference?: string;
    setupReferenceType?: string;
    sobjectValue?: string;
    stringValue?: string;
    transform?: FlowInlineTransform;
    transformValueReference?: string;
}

export class FlowInputValidationRule {
    errorMessage!: string;
    formulaExpression!: string;
}

export class FlowSchedule {
    frequency?: FlowStartFrequency;
    startDate?: Date;
    startTime?: Date;
}

export class FlowCustomProperty {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowCategoryItems {
    flow!: string;
}

export class FlowTestPoint {
    assertions!: FlowTestAssertion[];
    elementApiName!: string;
    parameters!: FlowTestParameter[];
}

export class FlowTestAssertion {
    conditions!: FlowTestCondition[];
    errorMessage?: string;
}

export class FlowTestCondition {
    leftValueReference!: string;
    operator!: FlowComparisonOperator;
    rightValue?: FlowTestReferenceOrValue;
}

export class FlowTestReferenceOrValue {
    booleanValue?: boolean;
    dateTimeValue?: Date;
    dateValue?: Date;
    numberValue?: number;
    sobjectValue?: string;
    stringValue?: string;
}

export class FlowTestParameter {
    leftValueReference!: string;
    type!: FlowTestParameterType;
    value!: FlowTestReferenceOrValue;
}

export class FolderShare {
    accessLevel!: FolderShareAccessLevel;
    sharedTo!: string;
    sharedToType!: FolderSharedToType;
}

export class ForecastingGroupItem {
    displayPosition!: number;
    sourceApiValue?: string;
}

export class ForecastingTypeObjectListSettings {
    forecastingObjectListLabelMappings!: ForecastingObjectListLabelMapping[];
    forecastingObjectListSelectedSettings!: ForecastingObjectListSelectedSettings;
    forecastingObjectListUnselectedSettings!: ForecastingObjectListUnselectedSettings;
    forecastingTypeDeveloperName!: string;
}

export class ForecastingObjectListLabelMapping {
    field!: string;
    label!: string;
}

export class ForecastingObjectListSelectedSettings {
    field!: string[];
}

export class ForecastingObjectListUnselectedSettings {
    field!: string[];
}

export class ForecastingCategoryMapping {
    forecastingItemCategoryApiName!: string;
    weightedSourceCategories!: WeightedSourceCategory[];
}

export class WeightedSourceCategory {
    sourceCategoryApiName!: string;
    weight!: number;
}

export class ForecastingDisplayedFamilySettings {
    productFamily?: string;
}

export class ForecastingSubmissionSettings {
    allowForecastingSubmissions!: boolean;
}

export class ForecastingTypeSettings {
    active!: boolean;
    displayedCategoryApiNames!: string[];
    forecastedCategoryApiNames!: string[];
    forecastingDateType!: ForecastingDateType;
    hasProductFamily!: boolean;
    isAmount!: boolean;
    isAvailable!: boolean;
    isQuantity!: boolean;
    managerAdjustableCategoryApiNames!: string[];
    masterLabel!: string;
    name!: string;
    opportunityListFieldsLabelMappings!: OpportunityListFieldsLabelMapping[];
    opportunityListFieldsSelectedSettings!: OpportunityListFieldsSelectedSettings;
    opportunityListFieldsUnselectedSettings!: OpportunityListFieldsUnselectedSettings;
    opportunitySplitName?: string;
    ownerAdjustableCategoryApiNames!: string[];
    territory2ModelName?: string;
}

export class OpportunityListFieldsLabelMapping {
    field!: string;
    label!: string;
}

export class OpportunityListFieldsSelectedSettings {
    field!: string[];
}

export class OpportunityListFieldsUnselectedSettings {
    field!: string[];
}

export class AdjustmentsSettings {
    allowExpandedColumns!: boolean;
    enableAdjustments!: boolean;
    enableOwnerAdjustments!: boolean;
}

export class ForecastRangeSettings {
    beginning!: number;
    displaying!: number;
    periodType!: PeriodTypes;
}

export class QuotasSettings {
    showQuotas!: boolean;
}

export class GenAiPlannerAttr {
    description?: string;
    label!: string;
    name!: string;
    parameterName!: string;
    parameterType!: PlannerAttrMappingType;
}

export class GenAiPlannerAttrMapping {
    attributeName!: string;
    attributeType!: AttributeType;
    constantValue?: string;
    mappingTargetName?: string;
    mappingType!: AttributeMappingType;
}

export class GenAiPlannerFunctionDef {
    genAiCustomizedPlugin?: GenAiLocalPlugin;
    genAiFunctionName?: string;
    genAiPluginName?: string;
}

export class GenAiLocalPlugin {
    aiPluginUtterances!: AiPluginUtteranceDef[];
    description!: string;
    genAiFunctions!: GenAiPluginFunctionDef[];
    genAiPluginInstructions!: GenAiPluginInstructionDef[];
    language!: string;
    masterLabel!: string;
    name!: string;
    pluginType!: PluginType;
    scope?: string;
}

export class GenAiPluginFunctionDef {
    functionName!: string;
}

export class GenAiPlannerRuleExpr {
    conditions!: GenAiPlannerRuleExprCondition[];
    expression?: string;
    expressionLabel!: string;
    expressionName!: string;
    expressionType?: ExpressionType;
}

export class GenAiPlannerRuleExprCondition {
    leftOperand!: string;
    leftOperandType!: GenAiAgentVariableType;
    operator!: GenAiRuleExpressionOperator;
    rightOperandValue?: string;
}

export class GenAiPlannerRuleExprAsgn {
    ruleExpressionName!: string;
    targetName!: string;
    targetType!: string;
}

export class GenAiPlannerRuleExprDef {
    conditions!: GenAiPlannerRuleExprCondition[];
    expression?: string;
    expressionLabel!: string;
    expressionName!: string;
    expressionType?: ExpressionType;
}

export class GenAiPromptTemplateVersion {
    classification?: string;
    content?: string;
    defaultLanguageScope?: string;
    description?: string;
    inputs!: GenAiPromptTemplateInput[];
    keywords?: string;
    primaryModel?: string;
    status?: GenAiPromptTemplateStatus;
    templateDataProviders!: GenAiPromptTemplateDataProvider[];
    versionIdentifier?: string;
    versionNumber?: number;
}

export class GenAiPromptTemplateInput {
    apiName!: string;
    definition!: string;
    description?: string;
    masterLabel?: string;
    referenceName!: string;
    required!: boolean;
}

export class GenAiPromptTemplateDataProvider {
    definition!: string;
    parameters!: GenAiPromptTemplateDataProviderParam[];
    referenceName!: string;
}

export class GenAiPromptTemplateDataProviderParam {
    definition!: string;
    isRequired?: boolean;
    parameterName!: string;
    valueExpression?: string;
}

export class ValueTranslation {
    masterLabel!: string;
    translation?: string;
}

export class IframeWhiteListUrl {
    context!: IFrameWhitelistContext;
    url?: string;
}

export class InboundNetworkConnProperty {
    propertyName!: InboundConnPropertyName;
    propertyValue!: string;
}

export class IntegrationProviderAttr {
    dataType!: AttrDataType;
    dateTimeValue?: Date;
    dateValue?: Date;
    description?: string;
    developerName!: string;
    doubleValue?: number;
    integerValue?: number;
    label!: string;
    percentageValue?: number;
    required!: boolean;
    stringValue?: string;
    trueOrFalseValue?: boolean;
}

export class Keyword {
    keyword!: string;
}

export class KnowledgeAnswerSettings {
    assignTo?: string;
    defaultArticleType?: string;
    enableArticleCreation?: boolean;
}

export class KnowledgeCaseSettings {
    articlePDFCreationProfile?: string;
    articlePublicSharingCommunities?: KnowledgeCommunitiesSettings;
    articlePublicSharingSites?: KnowledgeSitesSettings;
    articlePublicSharingSitesChatterAnswers?: KnowledgeSitesSettings;
    assignTo?: string;
    customizationClass?: string;
    defaultContributionArticleType?: string;
    editor?: KnowledgeCaseEditor;
    enableArticleCreation?: boolean;
    enableArticlePublicSharingSites?: boolean;
    enableCaseDataCategoryMapping?: boolean;
    useProfileForPDFCreation?: boolean;
}

export class KnowledgeCommunitiesSettings {
    community!: string[];
}

export class KnowledgeSitesSettings {
    site!: string[];
}

export class KnowledgeLanguageSettings {
    language!: KnowledgeLanguage[];
}

export class KnowledgeLanguage {
    active?: boolean;
    defaultAssignee?: string;
    defaultAssigneeType?: KnowledgeLanguageLookupValueType;
    defaultReviewer?: string;
    defaultReviewerType?: KnowledgeLanguageLookupValueType;
    name!: string;
}

export class KnowledgeSuggestedArticlesSettings {
    caseFields?: KnowledgeCaseFieldsSettings;
    useSuggestedArticlesForCase?: boolean;
    workOrderFields?: KnowledgeWorkOrderFieldsSettings;
    workOrderLineItemFields?: KnowledgeWorkOrderLineItemFieldsSettings;
}

export class KnowledgeCaseFieldsSettings {
    field!: KnowledgeCaseField[];
}

export class KnowledgeCaseField {
    name?: string;
}

export class KnowledgeWorkOrderFieldsSettings {
    field!: KnowledgeWorkOrderField[];
}

export class KnowledgeWorkOrderField {
    name?: string;
}

export class KnowledgeWorkOrderLineItemFieldsSettings {
    field!: KnowledgeWorkOrderLineItemField[];
}

export class KnowledgeWorkOrderLineItemField {
    name?: string;
}

export class CustomConsoleComponents {
    primaryTabComponents?: PrimaryTabComponents;
    subtabComponents?: SubtabComponents;
}

export class PrimaryTabComponents {
    containers!: Container[];
}

export class Container {
    height?: number;
    isContainerAutoSizeEnabled!: boolean;
    region!: string;
    sidebarComponents!: SidebarComponent[];
    style!: string;
    unit!: string;
    width?: number;
}

export class SidebarComponent {
    componentType!: string;
    createAction?: string;
    enableLinking?: boolean;
    height?: number;
    label?: string;
    lookup?: string;
    page?: string;
    relatedLists!: RelatedList[];
    unit?: string;
    updateAction?: string;
    width?: number;
}

export class RelatedList {
    hideOnDetail!: boolean;
    name!: string;
}

export class SubtabComponents {
    containers!: Container[];
}

export class FeedLayout {
    autocollapsePublisher?: boolean;
    compactFeed?: boolean;
    feedFilterPosition?: FeedLayoutFilterPosition;
    feedFilters!: FeedLayoutFilter[];
    fullWidthFeed?: boolean;
    hideSidebar?: boolean;
    highlightExternalFeedItems?: boolean;
    leftComponents!: FeedLayoutComponent[];
    rightComponents!: FeedLayoutComponent[];
    useInlineFiltersInConsole?: boolean;
}

export class FeedLayoutFilter {
    feedFilterName?: string;
    feedFilterType!: FeedLayoutFilterType;
    feedItemType?: FeedItemType;
}

export class FeedLayoutComponent {
    componentType!: FeedLayoutComponentType;
    height?: number;
    page?: string;
}

export class LayoutSection {
    customLabel?: boolean;
    detailHeading?: boolean;
    editHeading?: boolean;
    label?: string;
    layoutColumns!: LayoutColumn[];
    style!: LayoutSectionStyle;
}

export class LayoutColumn {
    layoutItems!: LayoutItem[];
    reserved?: string;
}

export class LayoutItem {
    analyticsCloudComponent?: AnalyticsCloudComponentLayoutItem;
    behavior?: UiBehavior;
    canvas?: string;
    component?: string;
    customLink?: string;
    emptySpace?: boolean;
    field?: string;
    height?: number;
    page?: string;
    reportChartComponent?: ReportChartComponentLayoutItem;
    scontrol?: string;
    showLabel?: boolean;
    showScrollbars?: boolean;
    width?: string;
}

export class AnalyticsCloudComponentLayoutItem {
    assetType!: string;
    devName!: string;
    error?: string;
    filter?: string;
    height?: number;
    hideOnError?: boolean;
    showHeader?: boolean;
    showSharing?: boolean;
    showTitle?: boolean;
    width?: string;
}

export class ReportChartComponentLayoutItem {
    cacheData?: boolean;
    contextFilterableField?: string;
    error?: string;
    hideOnError?: boolean;
    includeContext?: boolean;
    reportName!: string;
    showTitle?: boolean;
    size?: ReportChartComponentSize;
}

export class MiniLayout {
    fields!: string[];
    relatedLists!: RelatedListItem[];
}

export class RelatedListItem {
    customButtons!: string[];
    excludeButtons!: string[];
    fields!: string[];
    quickActions!: string[];
    relatedList!: string;
    sortField?: string;
    sortOrder?: SortOrder;
}

export class RelatedContent {
    relatedContentItems!: RelatedContentItem[];
}

export class RelatedContentItem {
    layoutItem!: LayoutItem;
}

export class SummaryLayout {
    masterLabel!: string;
    sizeX!: number;
    sizeY?: number;
    sizeZ?: number;
    summaryLayoutItems!: SummaryLayoutItem[];
    summaryLayoutStyle!: SummaryLayoutStyle;
}

export class SummaryLayoutItem {
    customLink?: string;
    field?: string;
    posX!: number;
    posY?: number;
    posZ?: number;
}

export class LetterheadLine {
    color!: string;
    height!: number;
}

export class LetterheadHeaderFooter {
    backgroundColor!: string;
    height!: number;
    horizontalAlignment?: LetterheadHorizontalAlignment;
    logo?: string;
    verticalAlignment?: LetterheadVerticalAlignment;
}

export class LicensedCustomPermissions {
    customPermission!: string;
    licenseDefinition!: string;
}

export class LifeSciConfigAssignment {
    assignedTo!: string;
    assignmentLevel!: LifeSciAssignmentLevel;
}

export class LifeSciConfigFieldValue {
    dataType!: LifeSciConfigFieldDataType;
    dateTimeValue?: Date;
    dateValue?: Date;
    fieldName!: string;
    fieldValue?: string;
    hasBooleanValue?: boolean;
    integerValue?: number;
    longTextValue?: string;
    numberValue?: number;
    objectValue?: string;
    phoneValue?: string;
    picklistValue?: string;
    textValue?: string;
    urlValue?: string;
}

export class LightningBoltFeatures {
    description?: string;
    order!: number;
    title!: string;
}

export class LightningBoltImages {
    image!: string;
    order!: number;
}

export class LightningBoltItems {
    name!: string;
    type!: string;
}

export class Capabilities {
    capability!: string[];
}

export class LwcResources {
    lwcResource!: LwcResource[];
}

export class LwcResource {
    filePath!: string;
    source!: string;
}

export class Targets {
    target!: string[];
}

export class LightningMessageField {
    description?: string;
    fieldName!: string;
}

export class LightningTypeBundleResource {
    fileName!: string;
    filePath!: string;
    fileType!: string;
    source!: string;
}

export class AgentConfigAssignments {
    profiles?: AgentConfigProfileAssignments;
    users?: AgentConfigUserAssignments;
}

export class AgentConfigProfileAssignments {
    profile!: string[];
}

export class AgentConfigUserAssignments {
    user!: string[];
}

export class SupervisorAgentConfigSkills {
    skill!: string[];
}

export class AgentConfigButtons {
    button!: string[];
}

export class AgentConfigSkills {
    skill!: string[];
}

export class LiveChatButtonDeployments {
    deployment!: string[];
}

export class LiveChatButtonSkills {
    skill!: string[];
}

export class LiveChatDeploymentDomainWhitelist {
    domain!: string[];
}

export class LoyaltyProgramProcess {
    description?: string;
    executionType?: LoyaltyPgmProcExecutionType;
    journalSubType?: string;
    journalType?: string;
    loyaltyTierGroup?: string;
    parameters!: LoyaltyProgramProcessParameter[];
    processName!: string;
    processType!: string;
    rules!: LoyaltyProgramProcessRule[];
    status?: LoyaltyPgmProcStatus;
}

export class LoyaltyProgramProcessParameter {
    condition?: LoyaltyProgramProcessCondition;
    dataType?: LoyaltyPgmProcParmDataType;
    decimalPlaces?: number;
    description?: string;
    isCollection?: boolean;
    isInput?: boolean;
    isOutput?: boolean;
    objectName?: string;
    parameterName!: string;
    parameterType?: LoyaltyPgmProcParmType;
    value?: string;
}

export class LoyaltyProgramProcessCondition {
    conditionCriteria?: string;
    conditionFilterCriteria!: LoyaltyProgramProcessConditionFilterCriteria[];
    conditionName!: string;
    conditionType?: LoyaltyPgmProcRuleType;
}

export class LoyaltyProgramProcessConditionFilterCriteria {
    operator!: LoyaltyPgmProcCondOperator;
    sequence!: number;
    sourceFieldName!: string;
    value?: string;
    valueType!: LoyaltyPgmProcCondType;
}

export class LoyaltyProgramProcessRule {
    actions!: LoyaltyProgramProcessAction[];
    conditions!: LoyaltyProgramProcessCondition[];
    description?: string;
    endDate?: Date;
    isProcessEligibilityRule?: boolean;
    previousRule?: string;
    promotion?: string;
    ruleName!: string;
    startDate?: Date;
    status?: LoyaltyPgmProcRuleStatus;
    stepMappings!: LoyaltyProgramProcessRuleStepMapping[];
}

export class LoyaltyProgramProcessAction {
    actionName!: string;
    actionParameters!: LoyaltyProgramProcessActionParameter[];
    actionType!: LoyaltyPgmProcActionType;
    crudActionType?: LoyaltyPgmProcCrudActType;
    decisionTable?: string;
    decisionTableDatasetLink?: string;
    entityApiName?: string;
    flowDefinition?: string;
    loyaltyProgramProcess?: string;
}

export class LoyaltyProgramProcessActionParameter {
    operator?: LoyaltyPgmProcActParamOper;
    parameterName!: string;
    sequenceNumber?: number;
    value!: string;
    valueType?: LoyaltyPgmProcActParamType;
}

export class LoyaltyProgramProcessRuleStepMapping {
    associatedStep!: string;
    parentStep?: string;
    sequence!: number;
}

export class MLField {
    entity?: string;
    entityName?: string;
    field?: string;
    fieldName?: string;
    relatedField?: MLField;
    relationType?: MLRelationType;
    type!: MLFieldType;
}

export class MLFilter {
    filterName!: string;
    lhFilter?: MLFilter;
    lhPredictionField?: string;
    lhType?: AIValueType;
    lhUnit?: AIFilterUnit;
    lhValue?: string;
    operation!: AIFilterOperation;
    rhFilter?: MLFilter;
    rhPredictionField?: string;
    rhType?: AIValueType;
    rhUnit?: AIFilterUnit;
    rhValue?: string;
    sortOrder?: number;
}

export class ManagedContentNodeType {
    helpText?: string;
    isLocalizable?: boolean;
    isRequired?: boolean;
    nodeLabel!: string;
    nodeName!: string;
    nodeType!: MCNodeType;
    placeholderText?: string;
}

export class AudienceContactPoint {
    audienceDefinition!: string;
    audienceVersion?: number;
    contactPointType!: ContactPointType;
    slotName!: string;
}

export class MarketAudienceField {
    audienceDefinition!: string;
    audienceVersion!: number;
    fieldDataType!: AudienceFieldType;
    fieldDescription?: string;
    fieldName!: string;
    slotName!: string;
}

export class MarketingAppExtAction {
    actionName!: string;
    actionParams?: string;
    actionSchema?: string;
    actionSelector!: string;
    apiName!: string;
    description?: string;
    isActive?: boolean;
    marketingAppExtension!: string;
}

export class MatchingRuleItem {
    blankValueBehavior?: BlankValueBehavior;
    fieldName!: string;
    matchingMethod!: MatchingMethod;
}

export class MessagingAutoResponse {
    autoResponseContentType!: AutoResponseContentType;
    language?: string;
    messageDefinitionName?: string;
    response?: string;
    responseTimeoutInMins?: number;
    type!: MessagingAutoResponseType;
}

export class MessagingChannelUsage {
    channelConsentType?: MessagingChannelConsentType;
    deploymentType!: MessagingChannelUsageDeploymentType;
}

export class MessagingChannelCustomParameter {
    actionParameterMappings!: MessagingChannelActionParameterMapping[];
    externalParameterName!: string;
    masterLabel!: string;
    maxLength?: number;
    name!: string;
    parameterDataType!: FlowDataType;
    parameterValueMappings!: MessagingChannelParameterValueMapping[];
}

export class MessagingChannelActionParameterMapping {
    actionParameterName!: string;
}

export class MessagingChannelParameterValueMapping {
    lookupValue!: string;
    lookupValueType!: MessagingChannelTargetLookupValueType;
    parameterValue!: string;
}

export class EmbeddedMessagingChannel {
    anonymousUserJwtExpirationTime?: number;
    authMode!: EmbeddedServiceAuthModeType;
    connectedApp?: string;
    isAttachmentUploadEnabled?: boolean;
    isEstimatedWaitTimeEnabled?: boolean;
    isFallbackMessageEnabled?: boolean;
    isSaveTranscriptEnabled?: boolean;
    messagingAuthorizations!: MessagingAuthorization[];
    verifiedUserJwtExpirationTime?: number;
}

export class MessagingAuthorization {
    authIdentifier!: string;
    authProviderName?: string;
    authorizationType!: MessagingAuthorizationType;
    enabled?: boolean;
    publicKeyCertificateSetName?: string;
}

export class MessagingKeyword {
    keyword!: string[];
    keywordType!: MessagingKeywordType;
    language!: string;
}

export class MessagingChannelStandardParameter {
    actionParameterMappings!: MessagingChannelActionParameterMapping[];
    parameterType!: MessagingChannelStandardParameterType;
    parameterValueMappings!: MessagingChannelParameterValueMapping[];
}

export class MfgProgramTemplateItem {
    advAccountForecastSet?: string;
    description?: string;
    templateItemName!: string;
    transformationDisplayOrder!: number;
    transformationType!: MfgProgramTransformationType;
}

export class MlModelInput {
    isDisparateImpact?: boolean;
    isSegmentField?: boolean;
    isSensitive?: boolean;
    label!: string;
    name!: string;
    position?: number;
    type!: string;
    values!: string[];
}

export class MlModelOutput {
    label!: string;
    name!: string;
    type!: string;
}

export class MlParameterOverride {
    continuousValue?: number;
    discreteValue?: string;
    parameter!: string;
}

export class MlParameterDefinition {
    continuousDefault?: number;
    continuousMaximum?: number;
    continuousMinimum?: number;
    description?: string;
    discreteDefault?: string;
    discreteValues!: string[];
    modelCapabilities!: MlGenerativeModelCapability[];
    name!: string;
    subtype?: MlParameterSubtype;
    type!: MlParameterType;
}

export class MlModelEndpoint {
    inputSchema?: string;
    label!: string;
    name!: string;
    outputSchema?: string;
    outputs!: MlModelOutputEndpoint[];
    type?: MlModelEndpointType;
    url!: string;
}

export class MlModelOutputEndpoint {
    jsonPath?: string;
    label!: string;
    name!: string;
    outputFeature!: string;
    position!: number;
}

export class DashboardMobileSettings {
    enableDashboardIPadApp?: boolean;
}

export class ModeratedEntityField {
    entityName!: string;
    fieldName?: string;
    keywordList?: string;
}

export class ModuleDependencies {
    moduleRef!: ModuleRef[];
}

export class PackageTypeMembers {
    members!: string[];
    name!: string;
}

export class NamedCredentialParameter {
    certificate?: string;
    description?: string;
    externalCredential?: string;
    globalNamedPrincipalCredential?: boolean;
    managedFeatureEnabledCallout?: boolean;
    outboundNetworkConnection?: string;
    parameterName!: string;
    parameterType!: NamedCredentialParamType;
    parameterValue?: string;
    readOnlyNamedCredential?: boolean;
    sequenceNumber?: number;
    systemUserNamedCredential?: boolean;
}

export class Branding {
    loginFooterText?: string;
    loginLogo?: string;
    pageFooter?: string;
    pageHeader?: string;
    primaryColor!: string;
    primaryComplementColor!: string;
    quaternaryColor!: string;
    quaternaryComplementColor!: string;
    secondaryColor!: string;
    tertiaryColor!: string;
    tertiaryComplementColor!: string;
    zeronaryColor!: string;
    zeronaryComplementColor!: string;
}

export class CommunityRoles {
    customerUserRole?: string;
    employeeUserRole?: string;
    partnerUserRole?: string;
}

export class NetworkAuthApiSettings {
    doesForgotPasswordRequireAuth?: boolean;
    doesPasswordLoginRequireAuth?: boolean;
    doesPwdlessLoginRequireAuth?: boolean;
    doesRegistrationRequireAuth?: boolean;
    emailTmplsAllowlist!: NetworkEmailTmplAllowlist[];
    headlessDiscoveryExecutionUser?: string;
    headlessDiscoveryHandler?: string;
    isFirstPartyAppsAllowed?: boolean;
    isForgotPwdAllowed?: boolean;
    isForgotPwdEmailTemplateAllowlistingEnabled?: boolean;
    isHeadlessUserRegistrationAllowed?: boolean;
    isPwdlessLoginAllowed?: boolean;
    isRecaptchaRequiredForgotPwd?: boolean;
    isRecaptchaRequiredPwdlessLogin?: boolean;
    isRecaptchaRequiredRgstr?: boolean;
    isUniversalClientRgstrAllowed?: boolean;
    isUserDisambiguationAllowedForgotPwd?: boolean;
    isUserDisambiguationAllowedUsernamePwd?: boolean;
    maxPasswordResetAttempts?: number;
    recaptchaScoreThreshold?: number;
    recaptchaSecretKey?: string;
    registrationExecutionUser?: string;
    registrationHandler?: string;
    registrationUserDefaultProfile?: string;
}

export class NetworkEmailTmplAllowlist {
    emailTemplate!: string;
}

export class NetworkMemberGroup {
    permissionSet!: string[];
    profile!: string[];
}

export class NetworkPageOverride {
    changePasswordPageOverrideSetting?: NetworkPageOverrideSetting;
    forgotPasswordPageOverrideSetting?: NetworkPageOverrideSetting;
    homePageOverrideSetting?: NetworkPageOverrideSetting;
    loginPageOverrideSetting?: NetworkPageOverrideSetting;
    selfRegProfilePageOverrideSetting?: NetworkPageOverrideSetting;
}

export class RecommendationAudience {
    recommendationAudienceDetails!: RecommendationAudienceDetail[];
}

export class RecommendationAudienceDetail {
    audienceCriteriaType?: AudienceCriteriaType;
    audienceCriteriaValue?: string;
    setupName?: string;
}

export class RecommendationDefinition {
    recommendationDefinitionDetails!: RecommendationDefinitionDetail[];
}

export class RecommendationDefinitionDetail {
    actionUrl?: string;
    description?: string;
    linkText?: string;
    scheduledRecommendations?: ScheduledRecommendation;
    setupName?: string;
    title?: string;
}

export class ScheduledRecommendation {
    scheduledRecommendationDetails!: ScheduledRecommendationDetail[];
}

export class ScheduledRecommendationDetail {
    channel?: RecommendationChannel;
    enabled?: boolean;
    rank?: number;
    recommendationAudience?: string;
}

export class ReputationLevelDefinitions {
    level!: ReputationLevel[];
}

export class ReputationLevel {
    branding?: ReputationBranding;
    label?: string;
    lowerThreshold!: number;
}

export class ReputationBranding {
    smallImage?: string;
}

export class ReputationPointsRules {
    pointsRule!: ReputationPointsRule[];
}

export class ReputationPointsRule {
    eventType!: string;
    points!: number;
}

export class NetworkTabSet {
    customTab!: string[];
    defaultTab!: string;
    standardTab!: string[];
}

export class NotificationTypeSettings {
    appSettings!: AppSettings[];
    notificationChannels?: NotificationChannels;
    notificationType!: string;
}

export class AppSettings {
    connectedAppName!: string;
    enabled?: boolean;
}

export class NotificationChannels {
    desktopEnabled?: boolean;
    mobileEnabled?: boolean;
    slackEnabled?: boolean;
}

export class OauthCustomScopeApp {
    connectedApp!: string;
}

export class OauthTokenExchHandlerApp {
    apexExecutionUser!: string;
    connectedApp?: string;
    externalClientApp?: string;
    isDefault!: boolean;
}

export class FieldSourceTargetMap {
    creationType?: DefinitionCreationType;
    filterApplied?: boolean;
    filterOperationType?: string;
    filterValue?: string;
    isSourceFormula?: boolean;
    sourceField!: string;
    sourceFormula?: string;
    targetField!: string;
}

export class OcrSampleDocumentField {
    cellColumnNumber?: number;
    cellColumnSpanValue?: number;
    cellRowNumber?: number;
    cellRowSpanValue?: number;
    fieldLabelMaxX?: number;
    fieldLabelMaxY?: number;
    fieldLabelMinX?: number;
    fieldLabelMinY?: number;
    fieldValueName?: string;
    isAutoExtractedValue?: boolean;
    keyContent?: string;
    ocrSampleDocument!: string;
    ocrSampleDocumentPage?: string;
    ocrSampleDocumentPageItem?: OcrSampleDocumentPageItem;
}

export class OcrSampleDocumentPageItem {
    hasHeader?: boolean;
    sequenceNumber!: number;
    title?: string;
    type!: ItemType;
}

export class OcrSampleDocumentPage {
    ocrSampleDocument!: string;
    ocrSampleDocumentPageItems!: OcrSampleDocumentPageItem[];
    pageHeight?: number;
    pageNumber!: number;
}

export class OcrTargetObject {
    ocrTargetObjFieldMappings!: OcrTargetObjFieldMapping[];
    targetObject!: string;
    targetObjectRecordType?: string;
}

export class OcrTargetObjFieldMapping {
    ocrSampleDocField?: OcrSampleDocumentField;
    targetField!: string;
    type!: OcrMappingType;
}

export class OcrTemplateSampleDocument {
    ocrSampleDocument?: string;
}

export class OmniDataTransformItem {
    defaultValue?: string;
    disabled?: boolean;
    filterDataType?: ODTItemFilterDataType;
    filterGroup?: number;
    filterOperator?: string;
    filterValue?: string;
    formulaConverted?: string;
    formulaExpression?: string;
    formulaResultPath?: string;
    formulaSequence?: number;
    globalKey?: string;
    inputFieldName?: string;
    inputObjectName?: string;
    inputObjectQuerySequence?: number;
    linkedFieldName?: string;
    linkedObjectSequence?: number;
    lookupByFieldName?: string;
    lookupObjectName?: string;
    lookupReturnedFieldName?: string;
    migrationAttribute?: string;
    migrationCategory?: string;
    migrationGroup?: string;
    migrationKey?: string;
    migrationPattern?: string;
    migrationProcess?: string;
    migrationType?: string;
    migrationValue?: string;
    name!: string;
    omniDataTransformation?: string;
    omniDataTransformationId?: string;
    outputCreationSequence?: number;
    outputFieldFormat?: string;
    outputFieldName?: string;
    outputObjectName?: string;
    requiredForUpsert?: boolean;
    transformValuesMappings?: string;
    upsertKey?: boolean;
}

export class OmniProcessElement {
    childElements!: OmniProcessElement[];
    description?: string;
    designerCustomizationType?: string;
    discoveryFrameworkUsageType?: string;
    embeddedOmniScriptKey?: string;
    isActive?: boolean;
    isOmniScriptEmbeddable?: boolean;
    level?: number;
    name!: string;
    omniProcessVersionNumber?: number;
    parentElementName?: string;
    parentElementType?: string;
    propertySetConfig?: string;
    sequenceNumber?: number;
    type?: string;
    uniqueIndex?: string;
}

export class AssessmentDefinitionMetadata {
    approvalDateTime?: Date;
    displayType?: string;
    effectiveFromDate?: Date;
    effectiveToDate?: Date;
    lastRevisedDateTime?: Date;
    performerType?: string;
    purpose?: string;
}

export class OmniAssessmentTaskMetadata {
    name!: string;
    status!: string;
    uniqueName!: string;
}

export class OmniSupervisorConfigAction {
    actionName!: OmniSupervisorActionName;
    actionTab!: OmniSupervisorActionTab;
    customActionFlow?: string;
    displayOrder!: number;
}

export class OmniSupervisorConfigGroup {
    group!: string;
}

export class OmniSupervisorConfigProfile {
    profile!: string;
}

export class OmniSupervisorConfigQueue {
    queue!: string;
}

export class OmniSupervisorConfigSkill {
    skill!: string;
}

export class OmniSupervisorConfigTab {
    displayOrder!: number;
    flexiPage?: string;
    tabType!: OmniSupervisorTabType;
}

export class FindSimilarOppFilter {
    similarOpportunitiesDisplayColumns!: string[];
    similarOpportunitiesMatchFields!: string[];
}

export class OrchestrationContextDataset {
    datasetType!: string;
    orchestrationDataset!: string;
}

export class OrchestrationContextEvent {
    eventType!: string;
    orchestrationEvent!: string;
    platformEvent!: string;
    platformEventPrimaryKey!: string;
}

export class OutboundNetworkConnProperty {
    propertyName!: OutboundConnPropertyName;
    propertyValue!: string;
}

export class ProfileObjectPermissions {
    allowCreate?: boolean;
    allowDelete?: boolean;
    allowEdit?: boolean;
    allowRead?: boolean;
    customizeSetup?: boolean;
    deleteSetup?: boolean;
    modifyAllRecords?: boolean;
    object!: string;
    viewAllFields?: boolean;
    viewAllRecords?: boolean;
    viewSetup?: boolean;
}

export class PathAssistantStep {
    fieldNames!: string[];
    info?: string;
    picklistValueName!: string;
}

export class PermissionSetApplicationVisibility {
    application!: string;
    visible!: boolean;
}

export class PermissionSetApexClassAccess {
    apexClass!: string;
    enabled!: boolean;
}

export class PermissionSetCustomMetadataTypeAccess {
    enabled!: boolean;
    name!: string;
}

export class PermissionSetCustomPermissions {
    enabled!: boolean;
    name!: string;
}

export class PermissionSetCustomSettingAccess {
    enabled!: boolean;
    name!: string;
}

export class DataspaceScopeAccess {
    customizeActivationDefinitions?: boolean;
    customizeAllDefinitions?: boolean;
    customizeCalculatedInsightDefinitions?: boolean;
    customizeDataActionDefinitions?: boolean;
    customizeDataApplicationDefinitions!: boolean;
    customizeDataShareDefinitions!: boolean;
    customizeFTestDataspaceScopedDefinition!: boolean;
    customizeIdentityResolutionDefinitions?: boolean;
    customizeMLPredictionDefinitions!: boolean;
    customizeSegmentationDefinitions?: boolean;
    customizeSemanticSearchDefinitions!: boolean;
    dataAccessLevel?: string;
    dataspaceScope!: string;
    viewActivationDefinitions?: boolean;
    viewCalculatedInsightDefinitions?: boolean;
    viewDataActionDefinitions?: boolean;
    viewDataApplicationDefinitions!: boolean;
    viewDataShareDefinitions!: boolean;
    viewFTestDataspaceScopedDefinition!: boolean;
    viewIdentityResolutionDefinitions?: boolean;
    viewMLPredictionDefinitions!: boolean;
    viewSegmentationDefinitions?: boolean;
    viewSemanticSearchDefinitions!: boolean;
}

export class PermissionSetEmailRoutingAddressAccess {
    enabled!: boolean;
    name!: string;
}

export class PermissionSetExternalCredentialPrincipalAccess {
    enabled!: boolean;
    externalCredentialPrincipal!: string;
}

export class PermissionSetExternalDataSourceAccess {
    enabled!: boolean;
    externalDataSource!: string;
}

export class PermissionSetFieldPermissions {
    editable!: boolean;
    field!: string;
    readable?: boolean;
}

export class PermissionSetFlowAccess {
    enabled!: boolean;
    flow!: string;
}

export class PermissionSetObjectPermissions {
    allowCreate!: boolean;
    allowDelete!: boolean;
    allowEdit!: boolean;
    allowRead!: boolean;
    customizeSetup?: boolean;
    deleteSetup?: boolean;
    modifyAllRecords!: boolean;
    object!: string;
    viewAllFields?: boolean;
    viewAllRecords!: boolean;
    viewSetup?: boolean;
}

export class PermissionSetApexPageAccess {
    apexPage!: string;
    enabled!: boolean;
}

export class PermissionSetRecordTypeVisibility {
    recordType!: string;
    visible!: boolean;
}

export class PermissionSetTabSetting {
    tab!: string;
    visibility!: PermissionSetTabVisibility;
}

export class PermissionSetUserPermission {
    enabled!: boolean;
    name!: string;
}

export class PermissionSetLicenseDefinitionCustomPermission {
    name!: string;
}

export class PlatformCachePartitionType {
    allocatedCapacity!: number;
    allocatedPartnerCapacity!: number;
    allocatedPurchasedCapacity!: number;
    allocatedTrialCapacity!: number;
    cacheType!: PlatformCacheType;
}

export class EnrichedField {
    name!: string;
}

export class IncludedFeature {
    name!: string;
    settingOverrides!: SettingOverride[];
}

export class SettingOverride {
    settingId!: string;
    value!: string;
}

export class SettingItem {
    durableId!: string;
    editable?: boolean;
    ignoreQuantity?: boolean;
    namespace?: string;
    value!: string;
}

export class SettingUsageDefinition {
    frequencyDefault!: Frequency;
    hasRolloverDefault?: boolean;
    isPersistentResource!: boolean;
    overageGraceDefault?: number;
    setting!: string;
}

export class PresenceConfigAssignments {
    profiles?: PresenceConfigProfileAssignments;
    users?: PresenceConfigUserAssignments;
}

export class PresenceConfigProfileAssignments {
    profile!: string[];
}

export class PresenceConfigUserAssignments {
    user!: string[];
}

export class PriceRuleAction {
    conditionVariable?: string;
    priceRuleActionItems!: PriceRuleActionItem[];
    sequence!: number;
    targetObject?: string;
    type!: TypeOfAction;
}

export class PriceRuleActionItem {
    field!: string;
    fieldValue!: string;
    fieldValueType!: InputValueType;
    sequence!: number;
}

export class PriceRuleCondition {
    accumulateResultCondInput?: string;
    accumulateResultCondInputType?: AccumulateResultCondInputType;
    accumulateResultOperator?: AccumulateResultOperator;
    aggregatedConditionVariable?: string;
    aggregationType?: ConditionAggregationFunction;
    conditionVariable?: string;
    matchType!: TargetEntityMatchType;
    priceRuleConditionFilters!: PriceRuleConditionFilter[];
    scope!: ConditionType;
    sequence!: number;
    targetObject!: string;
}

export class PriceRuleConditionFilter {
    field!: string;
    fieldValue?: string;
    fieldValueType?: ConditionFilterInputValueType;
    operator!: ConditionFilterOperator;
    sequence!: number;
    variable?: string;
}

export class PriceRuleExecutionStage {
    stage!: ExecutionStageOfPriceRule;
}

export class PrcShtAttrDefinition {
    columnLabel?: string;
    columnName!: string;
    columnType!: PriceSheetColumnType;
    isRangeColumn!: boolean;
}

export class PricingRecipeTableMapping {
    fileBasedDecisionTableName?: string;
    isInternal?: boolean;
    lookupTable?: Metadata;
    lookupTableDeveloperName?: string;
    pricingComponentType?: string;
    pricingProcedureOutputMapList!: PricingProcedureOutputMap[];
    pricingRecipe!: string;
}

export class PricingProcedureOutputMap {
    fieldName?: string;
    isPricingRecipeActive?: boolean;
    outputFieldName?: string;
    outputFieldNameString?: string;
    outputType?: string;
}

export class ProductAttributeSetItem {
    field!: string;
    sequence!: number;
}

export class ProfileApplicationVisibility {
    application!: string;
    default!: boolean;
    visible!: boolean;
}

export class ProfileCategoryGroupVisibility {
    dataCategories!: string[];
    dataCategoryGroup!: string;
    visibility!: CategoryGroupVisibility;
}

export class ProfileApexClassAccess {
    apexClass!: string;
    enabled!: boolean;
}

export class ProfileCustomMetadataTypeAccess {
    enabled!: boolean;
    name!: string;
}

export class ProfileCustomPermissions {
    enabled!: boolean;
    name!: string;
}

export class ProfileCustomSettingAccess {
    enabled!: boolean;
    name!: string;
}

export class ProfileExternalDataSourceAccess {
    enabled!: boolean;
    externalDataSource!: string;
}

export class ProfileFieldLevelSecurity {
    editable!: boolean;
    field!: string;
    readable?: boolean;
}

export class ProfileFlowAccess {
    enabled!: boolean;
    flow!: string;
}

export class ProfileLayoutAssignment {
    layout!: string;
    recordType?: string;
}

export class LoginFlow {
    flow?: string;
    flowType!: LoginFlowType;
    friendlyName!: string;
    uiLoginFlowType!: UiLoginFlowType;
    useLightningRuntime?: boolean;
    vfFlowPage?: string;
    vfFlowPageTitle?: string;
}

export class ProfileLoginHours {
    fridayEnd?: string;
    fridayStart?: string;
    mondayEnd?: string;
    mondayStart?: string;
    saturdayEnd?: string;
    saturdayStart?: string;
    sundayEnd?: string;
    sundayStart?: string;
    thursdayEnd?: string;
    thursdayStart?: string;
    tuesdayEnd?: string;
    tuesdayStart?: string;
    wednesdayEnd?: string;
    wednesdayStart?: string;
}

export class ProfileLoginIpRange {
    description?: string;
    endAddress!: string;
    startAddress!: string;
}

export class ProfileApexPageAccess {
    apexPage!: string;
    enabled!: boolean;
}

export class ProfileRecordTypeVisibility {
    default!: boolean;
    personAccountDefault?: boolean;
    recordType!: string;
    visible!: boolean;
}

export class ProfileTabVisibility {
    tab!: string;
    visibility!: TabVisibility;
}

export class ProfileUserPermission {
    enabled!: boolean;
    name!: string;
}

export class PromptVersion {
    actionButtonLabel?: string;
    actionButtonLink?: string;
    body!: string;
    customApplication?: string;
    delayDays?: number;
    description?: string;
    dismissButtonLabel?: string;
    displayPosition?: PromptDisplayPosition;
    displayType!: PromptDisplayType;
    elementRelativePosition?: PromptElementRelativePosition;
    endDate?: Date;
    experience?: PromptExperience;
    experienceContext?: string;
    header?: string;
    icon?: string;
    image?: string;
    imageAltText?: string;
    imageLink?: string;
    imageLocation?: PromptImageLocation;
    indexWithIsPublished?: string;
    indexWithoutIsPublished?: string;
    isPublished?: boolean;
    masterLabel!: string;
    publishedByUser?: string;
    publishedDate?: Date;
    referenceElementContext?: string;
    shouldDisplayActionButton?: boolean;
    shouldIgnoreGlobalDelay?: boolean;
    startDate?: Date;
    stepNumber?: number;
    targetAppDeveloperName?: string;
    targetAppNamespacePrefix?: string;
    targetPageKey1?: string;
    targetPageKey2?: string;
    targetPageKey3?: string;
    targetPageKey4?: string;
    targetPageType?: string;
    targetRecordType?: string;
    themeColor?: PromptThemeColor;
    themeSaturation?: PromptThemeSaturation;
    timesToDisplay?: number;
    title!: string;
    uiFormulaRule?: UiFormulaRule;
    userAccess?: PromptUserAccess;
    userProfileAccess?: PromptUserProfileAccess;
    versionNumber!: number;
    videoLink?: string;
}

export class PublicKeyCertificateSetKey {
    publicKeyCertificate!: string;
}

export class QueueMembers {
    publicGroups?: PublicGroups;
    roleAndSubordinates?: RoleAndSubordinates;
    roleAndSubordinatesInternal?: RoleAndSubordinatesInternal;
    roles?: Roles;
    users?: Users;
}

export class PublicGroups {
    publicGroup!: string[];
}

export class RoleAndSubordinates {
    roleAndSubordinate!: string[];
}

export class RoleAndSubordinatesInternal {
    roleAndSubordinateInternal!: string[];
}

export class Roles {
    role!: string[];
}

export class Users {
    user!: string[];
}

export class QueueSobject {
    sobjectType!: string;
}

export class QueueRoutingConfigSkill {
    skill?: string;
}

export class FieldOverride {
    field!: string;
    formula?: string;
    literalValue?: string;
}

export class QuickActionLayout {
    layoutSectionStyle!: LayoutSectionStyle;
    quickActionLayoutColumns!: QuickActionLayoutColumn[];
}

export class QuickActionLayoutColumn {
    quickActionLayoutItems!: QuickActionLayoutItem[];
}

export class QuickActionLayoutItem {
    emptySpace?: boolean;
    field?: string;
    uiBehavior?: UiBehavior;
}

export class QuickActionParameters {
    name!: string;
    type!: QuickActionParameterType;
    value?: string;
}

export class QuickActionSendEmailOptions {
    defaultEmailTemplateName?: string;
    ignoreDefaultEmailTemplateSubject!: boolean;
}

export class RealTimeEvent {
    entityName!: string;
    isEnabled!: boolean;
}

export class StrategyAction {
    action!: string;
    argument!: StrategyActionArg[];
    description?: string;
    label?: string;
    name!: string;
    type!: InvocableActionType;
}

export class StrategyActionArg {
    name!: string;
    value!: string;
}

export class StrategyNodeBase {
    childNode!: string[];
    description?: string;
    label?: string;
    name!: string;
}

export class IfExpression {
    childName!: string;
    expression!: string;
}

export class StrategyNodeInvocableActionArg {
    name!: string;
    value!: string;
}

export class MapExpression {
    expression!: string;
    name!: string;
    type?: string;
}

export class RecommendationLoadCondition {
    field!: string;
    operator!: RecommendationConditionOperator;
    value!: RecommendationConditionValue;
}

export class RecommendationConditionValue {
    type!: RecommendationConditionValueType;
    value?: string;
}

export class StrategyNodeSortField {
    name!: string;
    nullsFirst?: boolean;
    order?: SortOrder;
}

export class RecordActionDeploymentChannel {
    channel!: ChannelSource;
    channelItems!: RecordActionDefaultItem[];
    isAutopopEnabled?: boolean;
}

export class RecordActionDefaultItem {
    action!: string;
    isMandatory?: boolean;
    isUiRemoveHidden?: boolean;
    pinned!: PinnedAction;
    position!: number;
    type!: RecordActionType;
}

export class RecordActionDeploymentContext {
    entityName!: string;
    recommendationStrategy?: string;
}

export class RecordActionRecommendation {
    defaultStrategy?: string;
    hasDescription!: boolean;
    hasImage!: boolean;
    hasRealtimeRecommendations?: boolean;
    hasRejectAction!: boolean;
    hasTitle!: boolean;
    maxDisplayRecommendations!: number;
    shouldLaunchActionOnReject!: boolean;
}

export class RecordActionSelectableItem {
    action!: string;
    frequentActionSequenceNbr?: number;
    isFrequentAction?: boolean;
    type!: RecordActionType;
}

export class RecordAggregationObject {
    associatedObject!: string;
    developerName?: string;
    filterLogic?: string;
    masterLabel!: string;
    recordAggregationJoinCondition!: RecordAggregationJoinCondition[];
    recordAggregationObjectFilter!: RecordAggregationObjectFilter[];
}

export class RecordAggregationJoinCondition {
    joinField!: string;
    navigationSequenceNumber!: number;
    relatedJoinField!: string;
    relatedRecordAggregationObject!: string;
    type!: RecordAggregationJoinConditionType;
}

export class RecordAggregationObjectFilter {
    associatedObjectField!: string;
    operator!: RecordAggregationObjectFilterOperator;
    sequenceNumber!: number;
    value!: string;
}

export class RelationshipGraphDefVersion {
    graphDefinition!: string;
    graphType!: string;
}

export class ReportAggregateFilter {
    aggregate!: string;
    operator!: string;
    value!: string;
}

export class ReportAggregate {
    acrossGroupingContext?: string;
    calculatedFormula!: string;
    datatype!: ReportAggregateDatatype;
    description?: string;
    developerName!: string;
    downGroupingContext?: string;
    isActive!: boolean;
    isCrossBlock?: boolean;
    masterLabel!: string;
    reportType?: string;
    scale?: number;
}

export class ReportBlockInfo {
    aggregateReferences!: ReportAggregateReference[];
    blockId!: string;
    joinTable!: string;
}

export class ReportAggregateReference {
    aggregate!: string;
}

export class ReportBucketField {
    bucketType!: ReportBucketFieldType;
    developerName!: string;
    masterLabel!: string;
    nullTreatment?: ReportFormulaNullTreatment;
    otherBucketLabel?: string;
    sourceColumnName!: string;
    useOther?: boolean;
    values!: ReportBucketFieldValue[];
}

export class ReportBucketFieldValue {
    sourceValues!: ReportBucketFieldSourceValue[];
    value!: string;
}

export class ReportBucketFieldSourceValue {
    from?: string;
    sourceValue?: string;
    to?: string;
}

export class ReportChart {
    backgroundColor1?: string;
    backgroundColor2?: string;
    backgroundFadeDir?: ChartBackgroundDirection;
    chartSummaries!: ChartSummary[];
    chartType!: ChartType;
    enableHoverLabels?: boolean;
    expandOthers?: boolean;
    groupingColumn?: string;
    legendPosition?: ChartLegendPosition;
    location?: ChartPosition;
    secondaryGroupingColumn?: string;
    showAxisLabels?: boolean;
    showPercentage?: boolean;
    showTotal?: boolean;
    showValues?: boolean;
    size?: ReportChartSize;
    sortLegendValues?: boolean;
    sortReportCharts?: boolean;
    summaryAxisManualRangeEnd?: number;
    summaryAxisManualRangeStart?: number;
    summaryAxisRange?: ChartRangeType;
    textColor?: string;
    textSize?: number;
    title?: string;
    titleColor?: string;
    titleSize?: number;
}

export class ReportColorRange {
    aggregate?: ReportSummaryType;
    columnName!: string;
    highBreakpoint?: number;
    highColor!: string;
    lowBreakpoint?: number;
    lowColor!: string;
    midColor!: string;
}

export class ReportColumn {
    aggregateTypes!: ReportSummaryType[];
    field!: string;
    reverseColors?: boolean;
    showChanges?: boolean;
}

export class ReportCrossFilter {
    criteriaItems!: ReportFilterItem[];
    operation!: ObjectFilterOperator;
    primaryTableColumn!: string;
    relatedTable!: string;
    relatedTableJoinColumn!: string;
}

export class ReportFilterItem {
    column!: string;
    columnToColumn?: boolean;
    isUnlocked?: boolean;
    operator!: FilterOperation;
    snapshot?: string;
    value?: string;
}

export class ReportCustomDetailFormula {
    calculatedFormula!: string;
    dataType!: string;
    description?: string;
    developerName!: string;
    label!: string;
    scale!: number;
}

export class ReportDataCategoryFilter {
    dataCategory!: string;
    dataCategoryGroup!: string;
    operator!: DataCategoryFilterOperation;
}

export class ReportFilter {
    booleanFilter?: string;
    criteriaItems!: ReportFilterItem[];
    language?: Language;
}

export class ReportFormattingRule {
    aggregate?: ReportSummaryType;
    columnName!: string;
    values!: ReportFormattingRuleValue[];
}

export class ReportFormattingRuleValue {
    backgroundColor?: string;
    rangeUpperBound?: number;
}

export class ReportGrouping {
    aggregateType?: ReportAggrType;
    dateGranularity?: UserDateGranularity;
    field!: string;
    sortByName?: string;
    sortOrder!: SortOrder;
    sortType?: ReportSortType;
}

export class ReportHistoricalSelector {
    snapshot!: string[];
}

export class ReportParam {
    name!: string;
    value!: string;
}

export class ReportTimeFrameFilter {
    dateColumn!: string;
    endDate?: Date;
    interval!: UserDateInterval;
    startDate?: Date;
}

export class ObjectRelationship {
    join?: ObjectRelationship;
    outerJoin!: boolean;
    relationship!: string;
}

export class ReportLayoutSection {
    columns!: ReportTypeColumn[];
    masterLabel!: string;
}

export class ReportTypeColumn {
    checkedByDefault!: boolean;
    displayNameOverride?: string;
    field!: string;
    table!: string;
}

export class RetrievalSummaryDefField {
    field!: string;
    sequenceNumber!: number;
}

export class RetrievalSummaryDefObject {
    recordAggregationDefinition!: string;
    retrievalSummaryDefFields!: RetrievalSummaryDefField[];
    sequenceNumber!: number;
}

export class RuleLibraryContextTag {
    hashableContextTag!: string;
    mappingName!: string;
    usageSubType!: string;
}

export class RulesetDefinition {
    apiName!: string;
    endDate?: Date;
    executionType!: ExecutionType;
    label!: string;
    ruleDefinitions!: RuleDefinition[];
    startDate?: Date;
    status!: ContextRuleStatus;
    usageType!: string;
}

export class RuleDefinition {
    actions!: RuleAction[];
    apiName!: string;
    criteria!: RuleFilterCriteria[];
    description?: string;
    endDate?: Date;
    label!: string;
    ruleStatus!: ContextRuleStatus;
    sequenceNumber?: number;
    startDate!: Date;
    usageSubType?: string;
    usageType!: string;
    variables!: RuleReferenceVariable[];
}

export class RuleAction {
    actionParameters!: RuleActionParameter[];
    actionType!: RuleActionType;
    name!: string;
    sequenceNumber!: number;
}

export class RuleActionParameter {
    name!: string;
    sequenceNumber!: number;
    sourceCriteriName?: string;
    value!: string;
    valueType!: VariableValueType;
}

export class RuleFilterCriteria {
    actions!: RuleAction[];
    conditionLogic!: string;
    conditions!: RuleCondition[];
    executionSequence!: number;
    name!: string;
    parentFilterCriteria?: string;
    type!: RuleFilterCriteriaType;
}

export class RuleCondition {
    matchType?: ConditionMatchType;
    name?: string;
    operator!: RuleConditionOperator;
    sequenceNumber!: number;
    value!: string[];
    valueType!: VariableValueType;
    variable!: string;
}

export class RuleReferenceVariable {
    aggregateFunction?: RuleCondAggregateFunction;
    attributeId?: string;
    contextTag?: string;
    dataType!: RuleRefVariableDataType;
    decimalPlaces?: number;
    filterCriteriaName?: string;
    groupByTag?: string;
    name!: string;
    type!: RuleRefVariableType;
    value?: string;
}

export class ScoreCategoryCalcInsight {
    insightDateFieldName!: string;
    insightName!: string;
    insightScoreFieldName!: string;
    insightSubjectFieldName!: string;
}

export class ScoreRangeClassification {
    classificationName!: string;
    colorHexadecimalCode!: string;
    rangeEndValue!: number;
    rangeStartValue!: number;
}

export class SearchCustomizationObjectOverride {
    explicitFilter!: SearchCustomizationExplicitFilter[];
    fieldOverride!: SearchCustomizationFieldOverride[];
    objectApiName!: string;
    rule!: SearchCustomizationRule[];
    searchable?: boolean;
}

export class SearchCustomizationExplicitFilter {
    fieldPath?: string;
    type!: string;
}

export class SearchCustomizationFieldOverride {
    fieldApiName!: string;
    searchable!: boolean;
}

export class SearchCustomizationRule {
    fieldApiName!: string;
    operator!: string;
    ruleValue!: SearchCustomizationRuleValue[];
}

export class SearchCustomizationRuleValue {
    targetObjectApiName?: string;
    value!: string;
}

export class SearchOrgWideFieldConfig {
    fieldReference!: string;
    isSearchable?: boolean;
    isSecure?: boolean;
}

export class SearchSettingsByObject {
    searchSettingsByObject!: ObjectSearchSetting[];
}

export class ObjectSearchSetting {
    enhancedLookupEnabled!: boolean;
    lookupAutoCompleteEnabled!: boolean;
    name!: string;
    resultsPerPageCount!: number;
}

export class NetworkAccess {
    ipRanges!: IpRange[];
}

export class IpRange {
    description?: string;
    end?: string;
    start?: string;
}

export class PasswordPolicies {
    apiOnlyUserHomePageURL?: string;
    complexity?: Complexity;
    expiration?: Expiration;
    historyRestriction?: string;
    lockoutInterval?: LockoutInterval;
    maxLoginAttempts?: MaxLoginAttempts;
    minimumPasswordLength?: string;
    minimumPasswordLifetime?: boolean;
    obscureSecretAnswer?: boolean;
    passwordAssistanceMessage?: string;
    passwordAssistanceURL?: string;
    questionRestriction?: QuestionRestriction;
}

export class SessionSettings {
    allowUserAuthenticationByCertificate?: boolean;
    allowUserCertBasedAuthenticationWithOcspValidation?: boolean;
    canConfirmEmailChangeInLightningCommunities?: boolean;
    canConfirmIdentityBySmsOnly?: boolean;
    disableTimeoutWarning?: boolean;
    enableBuiltInAuthenticator?: boolean;
    enableCSPOnEmail?: boolean;
    enableCSRFOnGet?: boolean;
    enableCSRFOnPost?: boolean;
    enableCacheAndAutocomplete?: boolean;
    enableClickjackNonsetupSFDC?: boolean;
    enableClickjackNonsetupUser?: boolean;
    enableClickjackNonsetupUserHeaderless?: boolean;
    enableClickjackSetup?: boolean;
    enableCoepHeader?: boolean;
    enableContentSniffingProtection?: boolean;
    enableCoopHeader?: boolean;
    enableLightningLogin?: boolean;
    enableLightningLoginOnlyWithUserPerm?: boolean;
    enableMFADirectUILoginOptIn?: boolean;
    enableOauthCorsPolicy?: boolean;
    enablePermissionsPolicy?: boolean;
    enablePostForSessions?: boolean;
    enableSMSIdentity?: boolean;
    enableU2F?: boolean;
    enforceIpRangesEveryRequest?: boolean;
    enforceUserDeviceRevoked?: boolean;
    forceLogoutOnSessionTimeout?: boolean;
    forceRelogin?: boolean;
    grantCameraAccess?: string;
    grantMicrophoneAccess?: string;
    hasRetainedLoginHints?: boolean;
    hasUserSwitching?: boolean;
    hstsOnForcecomSites?: boolean;
    identityConfirmationOnEmailChange?: boolean;
    identityConfirmationOnTwoFactorRegistrationEnabled?: boolean;
    lockSessionsToDomain?: boolean;
    lockSessionsToIp?: boolean;
    lockerServiceAPIVersion?: string;
    lockerServiceCSP?: boolean;
    lockerServiceNext?: boolean;
    lockerServiceNextControl?: boolean;
    logoutURL?: string;
    redirectBlockModeEnabled?: boolean;
    redirectionWarning?: boolean;
    referrerPolicy?: boolean;
    referrerPolicyDirective?: string;
    requireHttpOnly?: boolean;
    sendCspForUncommonClients?: boolean;
    sessionTimeout?: SessionTimeout;
    sidToken3rdPartyAuraApp?: boolean;
    skipSFAWhenMFADirectUILogin?: boolean;
    terminateUserSessionsWhenAdminResetsPassword?: boolean;
    useEAPIRateLimitForConnectAPI?: boolean;
    useLocalStorageForLogoutUrl?: boolean;
    welcomeEmailTemplateId?: string;
}

export class SingleSignOnSettings {
    enableCaseInsensitiveFederationID?: boolean;
    enableForceDelegatedCallout?: boolean;
    enableMultipleSamlConfigs?: boolean;
    enableSamlJitProvisioning?: boolean;
    enableSamlLogin?: boolean;
    isLoginWithSalesforceCredentialsDisabled?: boolean;
}

export class ServiceChannelFieldPriority {
    priority!: number;
    value!: string;
}

export class ServiceChannelStatus {
    channel!: string[];
}

export class ServiceProcessAttribute {
    attributeType?: SvcCtlgItemAttrAttributeType;
    baseObjectApiName?: string;
    dataType?: SvcCatalogItemAttrDataType;
    description?: string;
    developerName!: string;
    fieldIdentifier?: string;
    groupApiName!: string;
    inputVariableValue?: string;
    isAttrValueDerivAtRuntime?: boolean;
    isRequired?: boolean;
    label!: string;
    parentAttribute?: string;
    referenceObjectApiName?: string;
    sortOrder?: number;
}

export class ServiceProcessDependency {
    dependencyReference!: string;
    processStepName?: SvcCtlgItemDpndProcType;
    type!: SvcCatalogItemDependencyType;
}

export class ServiceProcessItemGroup {
    apiName!: string;
    groupName!: string;
    sortOrder!: number;
}

export class AccountSharingRuleSettings {
    caseAccessLevel!: string;
    contactAccessLevel!: string;
    opportunityAccessLevel!: string;
}

export class AccessMapping {
    accessLevel!: string;
    object!: string;
    objectField!: string;
    userField!: string;
}

export class SkillAssignments {
    profiles?: SkillProfileAssignments;
    users?: SkillUserAssignments;
}

export class SkillProfileAssignments {
    profile!: string[];
}

export class SkillUserAssignments {
    user!: string[];
}

export class StageTransition {
    criteria!: StageCriteria[];
    customPermission?: string;
    fromStageValue!: string;
    stepGroup!: StgFulfillmentStepDefGrp[];
    toStageValue!: string;
    userPermission?: StageUserPermission;
}

export class StageCriteria {
    condition!: StageCondition[];
    criteriaType?: StageCriteriaType;
    executionType!: StageCriteriaExecType;
    flowDefinitionName?: string;
    isChildObject?: boolean;
    logicalExpression?: string;
    targetFieldName?: string;
    targetObject?: string;
}

export class StageCondition {
    operator!: StageConditionOperator;
    sequenceNumber!: number;
    sourceField!: string;
    value!: string;
}

export class StgFulfillmentStepDefGrp {
    name!: string;
    step!: StgFulfillmentStepDef[];
}

export class StgFulfillmentStepDef {
    apiName!: string;
    assignedToQueue?: string;
    assignedToUser?: string;
    dependency!: StgFulfillmentStepDpndDef[];
    executeOnRule?: string;
    flowDefinitionName?: string;
    integrationDefinitionName?: string;
    name!: string;
    omniscriptName?: string;
    runAsUser?: string;
    stepType!: string;
}

export class StgFulfillmentStepDpndDef {
    step!: string;
}

export class StageValue {
    criteria!: StageCriteria[];
    stepGroup!: StgFulfillmentStepDefGrp[];
    value!: string;
}

export class SvcCatalogFilterCondition {
    index!: number;
    operator!: CriterionOperator;
    source!: string;
    value!: string;
}

export class SvcCatalogFulfillFlowItem {
    catalogInputVariable!: string;
    displayType?: PropertyDisplayType;
    fieldDefinition?: string;
    fieldLookupDomain?: string;
    isAdditionalQuestionsInputVariable?: boolean;
    isRequired?: boolean;
    lookupDomainFieldType?: string;
    masterLabel!: string;
    objectLookupDomain?: string;
}

export class SvcCatalogItemDefFiltrCrit {
    svcCatalogFilterCriteria!: string;
}

export class SvcCatalogCategoryItem {
    isPrimaryCategory?: boolean;
    sortOrder?: number;
    svcCatalogCategory!: string;
}

export class SvcCatalogItemDefDataCategorySelection {
    category!: string;
    categoryGroup!: string;
}

export class SvcCatalogItemAttribute {
    field?: string;
    inputType!: SvcCatalogItemAttrDataType;
    inputVariable?: string;
    isRequired!: boolean;
    label!: string;
    maxValue?: number;
    minValue?: number;
    name!: string;
    object?: string;
    options!: SvcCatalogItemAttrDetail[];
    type!: SvcCatalogItemAttrType;
    value?: string;
}

export class SvcCatalogItemAttrDetail {
    isDefault!: boolean;
    label!: string;
    value!: string;
}

export class FieldValue {
    name!: string;
    value?: any;
}

export class Territory2AccessLevel {
    accessLevel!: string;
    objectType!: string;
}

export class Territory2RuleAssociation {
    inherited!: boolean;
    ruleName!: string;
}

export class Territory2RuleItem {
    field!: string;
    operation!: FilterOperation;
    value?: string;
}

export class Territory2SettingsOpportunityFilter {
    apexClassName?: string;
    enableFilter!: boolean;
    runMultiThreaded!: boolean;
    runOnCreate!: boolean;
}

export class Territory2SupportedObject {
    defaultAccessLevel!: string;
    objectType!: string;
    state!: string;
}

export class TimeSheetTemplateAssignment {
    assignedTo?: string;
}

export class TransactionSecurityAction {
    block!: boolean;
    endSession!: boolean;
    freezeUser!: boolean;
    notifications!: TransactionSecurityNotification[];
    twoFactorAuthentication!: boolean;
}

export class TransactionSecurityNotification {
    inApp!: boolean;
    sendEmail!: boolean;
    user!: string;
}

export class BotBlockTranslation {
    botBlockVersions!: BotBlockVersionTranslation[];
    fullName!: string;
}

export class BotBlockVersionTranslation {
    botDialogs!: BotDialogTranslation[];
    fullName!: string;
}

export class BotDialogTranslation {
    botSteps!: BotStepTranslation[];
    developerName!: string;
    label?: string;
}

export class BotStepTranslation {
    botMessages!: BotMessageTranslation[];
    botSteps!: BotStepTranslation[];
    botVariableOperation?: BotVariableOperationTranslation;
    stepIdentifier!: string;
    type!: BotStepType;
}

export class BotMessageTranslation {
    message?: string;
    messageIdentifier!: string;
}

export class BotVariableOperationTranslation {
    botMessages!: BotMessageTranslation[];
    botQuickReplyOptions!: BotQuickReplyOptionTranslation[];
    quickReplyOptionTemplate?: string;
    retryMessages!: BotMessageTranslation[];
    successMessages!: BotMessageTranslation[];
    type!: BotVariableOperationType;
    variableOperationIdentifier!: string;
}

export class BotQuickReplyOptionTranslation {
    literalValue?: string;
    quickReplyOptionIdentifier!: string;
}

export class BotTemplateTranslation {
    botDialogs!: BotDialogTranslation[];
    fullName!: string;
}

export class BotTranslation {
    botVersions!: BotVersionTranslation[];
    fullName!: string;
}

export class BotVersionTranslation {
    botDialogs!: BotDialogTranslation[];
    fullName!: string;
}

export class ConversationMessageDefinitionTranslation {
    constantValueTranslations!: ConversationMessageConstantValueTranslation[];
    label!: string;
    name!: string;
}

export class ConversationMessageConstantValueTranslation {
    name!: string;
    value!: string;
}

export class CustomApplicationTranslation {
    description?: string;
    label?: string;
    name!: string;
}

export class CustomLabelTranslation {
    label!: string;
    name!: string;
}

export class CustomPageWebLinkTranslation {
    label!: string;
    name!: string;
}

export class CustomTabTranslation {
    label!: string;
    name!: string;
}

export class ExplainabilityMsgTemplateFieldTranslation {
    description?: string;
    label?: string;
    name!: string;
    templateMessage?: string;
}

export class FlowDefinitionTranslation {
    flows!: FlowTranslation[];
    fullName!: string;
    label?: string;
}

export class FlowTranslation {
    choices!: FlowChoiceTranslation[];
    customErrorMessages!: FlowCustomErrorMessageTranslation[];
    fullName?: string;
    label?: string;
    orchestrationSteps!: FlowOrchestrationStepTranslation[];
    screens!: FlowScreenTranslation[];
    stages!: FlowStageTranslation[];
    textTemplates!: FlowTextTemplateTranslation[];
}

export class FlowChoiceTranslation {
    choiceText?: string;
    name!: string;
    userInput?: FlowChoiceUserInputTranslation;
}

export class FlowChoiceUserInputTranslation {
    promptText?: string;
    validationRule?: FlowInputValidationRuleTranslation;
}

export class FlowInputValidationRuleTranslation {
    errorMessage?: string;
}

export class FlowCustomErrorMessageTranslation {
    developerName!: string;
    errorMessage?: string;
    field?: string;
}

export class FlowOrchestrationStepTranslation {
    name!: string;
    stepLabel?: string;
}

export class FlowScreenTranslation {
    backButtonLabel?: string;
    fields!: FlowScreenFieldTranslation[];
    helpText?: string;
    name!: string;
    nextOrFinishButtonLabel?: string;
    pauseButtonLabel?: string;
    pausedText?: string;
}

export class FlowScreenFieldTranslation {
    fieldText?: string;
    helpText?: string;
    inputParameters!: FlowInputParameterTranslation[];
    name!: string;
    validationRule?: FlowInputValidationRuleTranslation;
}

export class FlowInputParameterTranslation {
    name!: string;
    value!: FlowFerovTranslation;
}

export class FlowFerovTranslation {
    complexValues!: FlowComplexLiteralTranslation[];
    stringValue?: string;
}

export class FlowComplexLiteralTranslation {
    customAspectKey?: string;
    value?: string;
}

export class FlowStageTranslation {
    label?: string;
    name!: string;
}

export class FlowTextTemplateTranslation {
    name!: string;
    text?: string;
}

export class IdentityVerificationFieldTranslation {
    customFieldLabel?: string;
    description?: string;
    label?: string;
    name!: string;
}

export class PipelineInspMetricConfigTranslation {
    label!: string;
    name!: string;
}

export class PromptTranslation {
    description?: string;
    label?: string;
    name!: string;
    promptVersions!: PromptVersionTranslation[];
}

export class PromptVersionTranslation {
    actionButtonLabel?: string;
    actionButtonLink?: string;
    body?: string;
    description?: string;
    dismissButtonLabel?: string;
    header?: string;
    imageAltText?: string;
    imageLink?: string;
    label?: string;
    name!: string;
    stepNumber?: number;
    title?: string;
    videoLink?: string;
}

export class GlobalQuickActionTranslation {
    aspect?: string;
    label!: string;
    name!: string;
}

export class ReportTypeTranslation {
    description?: string;
    label?: string;
    name!: string;
    sections!: ReportTypeSectionTranslation[];
}

export class ReportTypeSectionTranslation {
    columns!: ReportTypeColumnTranslation[];
    label?: string;
    name!: string;
}

export class ReportTypeColumnTranslation {
    label!: string;
    name!: string;
}

export class ScontrolTranslation {
    label!: string;
    name!: string;
}

export class UIObjectRelationFieldConfig {
    displayLabel!: string;
    queryText!: string;
    rowOrder!: number;
}

export class UiFormatSpecification {
    formatProperties!: string;
    formatType!: FormatType;
    order!: number;
    visibilityRule?: UiFormulaRule;
}

export class UnifiedApplicationMember {
    name!: string;
    type!: string;
}

export class UserAccessPolicyAction {
    action!: UserAccessPolicyActionType;
    target!: string;
    type!: UserAccessPolicyActionTargetType;
}

export class UserAccessPolicyFilter {
    columnName?: string;
    operation!: UserAccessPolicyFilterOperation;
    sortOrder!: number;
    target!: string;
    type!: UserAccessPolicyFilterTargetType;
    value?: string;
}

export class StandardPermissionSet {
    developerName!: string;
    isSessionBased?: boolean;
    namespace?: string;
    profileKey?: string;
    requiredAccessCheck?: string;
    settingValues!: SettingValue[];
}

export class SettingValue {
    durableId!: string;
    value!: string;
}

export class VisualizationResource {
    description?: string;
    file!: string;
    rank?: number;
    type!: VisualizationResourceType;
}

export class VisualizationType {
    description?: string;
    developerName!: string;
    icon!: string;
    masterLabel!: string;
    scriptBootstrapMethod?: string;
}

export class WaveAnalyticAssetCollectionItem {
    asset?: string;
    assetType?: string;
    sortOrder?: number;
}

export class WaveXmdDate {
    alias!: string;
    compact?: boolean;
    dateFieldDay?: string;
    dateFieldEpochDay?: string;
    dateFieldEpochSecond?: string;
    dateFieldFiscalMonth?: string;
    dateFieldFiscalQuarter?: string;
    dateFieldFiscalWeek?: string;
    dateFieldFiscalYear?: string;
    dateFieldFullYear?: string;
    dateFieldHour?: string;
    dateFieldMinute?: string;
    dateFieldMonth?: string;
    dateFieldQuarter?: string;
    dateFieldSecond?: string;
    dateFieldWeek?: string;
    dateFieldYear?: string;
    description?: string;
    firstDayOfWeek!: number;
    fiscalMonthOffset!: number;
    isYearEndFiscalYear?: boolean;
    label?: string;
    showInExplorer?: boolean;
    sortIndex!: number;
    type!: string;
}

export class WaveXmdDimension {
    conditionalFormatting!: WaveXmdFormattingProperty[];
    customActions!: WaveXmdDimensionCustomAction[];
    customActionsEnabled?: boolean;
    dateFormat?: string;
    defaultAction?: string;
    description?: string;
    field!: string;
    fullyQualifiedName?: string;
    imageTemplate?: string;
    isDerived!: boolean;
    isMultiValue?: boolean;
    label?: string;
    linkTemplate?: string;
    linkTemplateEnabled?: boolean;
    linkTooltip?: string;
    members!: WaveXmdDimensionMember[];
    origin?: string;
    recordDisplayFields!: WaveXmdRecordDisplayLookup[];
    recordIdField?: string;
    recordOrganizationIdField?: string;
    salesforceActions!: WaveXmdDimensionSalesforceAction[];
    salesforceActionsEnabled?: boolean;
    showDetailsDefaultFieldIndex?: number;
    showInExplorer?: boolean;
    sortIndex!: number;
}

export class WaveXmdFormattingProperty {
    formattingBins!: WaveXmdFormattingBin[];
    formattingPredicates!: WaveXmdFormattingPredicate[];
    property!: string;
    referenceField!: string;
    sortIndex!: number;
    type!: string;
}

export class WaveXmdFormattingBin {
    bin!: string;
    formatValue!: string;
    label!: string;
    sortIndex!: number;
}

export class WaveXmdFormattingPredicate {
    formatValue!: string;
    operator!: string;
    sortIndex!: number;
    value!: string;
}

export class WaveXmdDimensionCustomAction {
    customActionName!: string;
    enabled!: boolean;
    icon?: string;
    method?: string;
    sortIndex!: number;
    target?: string;
    tooltip?: string;
    url?: string;
}

export class WaveXmdDimensionMember {
    color?: string;
    label?: string;
    member!: string;
    sortIndex!: number;
}

export class WaveXmdRecordDisplayLookup {
    recordDisplayField!: string;
    sortIndex!: number;
}

export class WaveXmdDimensionSalesforceAction {
    enabled!: boolean;
    salesforceActionName!: string;
    sortIndex!: number;
}

export class WaveXmdMeasure {
    conditionalFormatting!: WaveXmdFormattingProperty[];
    currencies!: WaveXmdMeasure[];
    currencyCode?: string;
    dateFormat?: string;
    description?: string;
    field!: string;
    formatCustomFormat?: string;
    formatDecimalDigits?: number;
    formatDecimalSeparator?: string;
    formatIsNegativeParens?: boolean;
    formatPrefix?: string;
    formatSuffix?: string;
    formatThousandsSeparator?: string;
    formatUnit?: string;
    formatUnitMultiplier?: number;
    fullyQualifiedName?: string;
    isDerived!: boolean;
    isMultiCurrency?: boolean;
    label?: string;
    origin?: string;
    showDetailsDefaultFieldIndex?: number;
    showInExplorer?: boolean;
    sortIndex!: number;
}

export class WaveXmdOrganization {
    instanceUrl!: string;
    label!: string;
    organizationIdentifier!: string;
    sortIndex!: number;
}

export class WorkSkillRoutingAttribute {
    field!: string;
    isAdditionalSkill?: boolean;
    skill!: string;
    skillLevel?: number;
    skillPriority?: number;
    value?: string;
}

export class WorkflowFlowActionParameter {
    name!: string;
    value?: string;
}

export class WorkflowEmailRecipient {
    field?: string;
    recipient?: string;
    type!: ActionEmailRecipientTypes;
}

export class WorkflowTimeTrigger {
    actions!: WorkflowActionReference[];
    offsetFromField?: string;
    timeLength?: string;
    workflowTimeTriggerUnit!: WorkflowTimeUnits;
}

export class SaveResult {
    errors!: Error[];
    fullName!: string;
    success!: boolean;
}

export class Error {
    extendedErrorDetails!: ExtendedErrorDetails[];
    fields!: string[];
    message!: string;
    statusCode!: StatusCode;
}

export class ExtendedErrorDetails {
    extendedErrorCode!: ExtendedErrorCode;
}

export class DeleteResult {
    errors!: Error[];
    fullName!: string;
    success!: boolean;
}

export class DeployOptions {
    allowMissingFiles!: boolean;
    autoUpdatePackage!: boolean;
    checkOnly!: boolean;
    ignoreWarnings!: boolean;
    performRetrieve!: boolean;
    purgeOnDelete!: boolean;
    rollbackOnError!: boolean;
    runTests!: string[];
    singlePackage!: boolean;
    testLevel!: TestLevel;
}

export class DescribeMetadataResult {
    metadataObjects!: DescribeMetadataObject[];
    organizationNamespace!: string;
    partialSaveAllowed!: boolean;
    testRequired!: boolean;
}

export class DescribeMetadataObject {
    childXmlNames!: string[];
    directoryName!: string;
    inFolder!: boolean;
    metaFile!: boolean;
    suffix?: string;
    xmlName!: string;
}

export class DescribeValueTypeResult {
    apiCreatable!: boolean;
    apiDeletable!: boolean;
    apiReadable!: boolean;
    apiUpdatable!: boolean;
    parentField?: ValueTypeField;
    valueTypeFields!: ValueTypeField[];
}

export class ValueTypeField {
    fields!: ValueTypeField[];
    foreignKeyDomain!: string[];
    isForeignKey!: boolean;
    isNameField!: boolean;
    minOccurs!: number;
    name!: string;
    picklistValues!: PicklistEntry[];
    soapType!: string;
    valueRequired!: boolean;
}

export class PicklistEntry {
    active!: boolean;
    defaultValue!: boolean;
    label!: string;
    validFor?: string;
    value!: string;
}

export class ListMetadataQuery {
    folder?: string;
    type!: string;
}

export class ReadResult {
    records!: Metadata[];
}

export class RetrieveRequest {
    apiVersion!: number;
    packageNames!: string[];
    singlePackage!: boolean;
    specificFiles!: string[];
    unpackaged?: Package;
}

export class UpdateMetadata {
    currentName!: string;
    metadata!: Metadata;
}

export class UpsertResult {
    created!: boolean;
    errors!: Error[];
    fullName!: string;
    success!: boolean;
}

export class LogInfo {
    category!: LogCategory;
    level!: LogCategoryLevel;
}

export class AnalyticsParamWidgetDef {
    initialValues?: string;
    parameters?: string;
    source?: string;
}

export class AnalyticsContainerWidgetDef {
    parameters?: string;
}

export class AIApplication extends Metadata {
    developerName!: string;
    masterLabel?: string;
    predictionDefinitions!: AIPredictionDefinition[];
    status!: AIApplicationStatus;
    type!: AIApplicationType;
}

export class AIApplicationConfig extends Metadata {
    aiApplicationDeveloperName!: string;
    applicationId?: string;
    developerName!: string;
    insightReasonEnabled?: boolean;
    masterLabel?: string;
    rank?: number;
    scoringMode?: AIScoringMode;
}

export class AIConvSummarizationConfig extends Metadata {
    fieldName!: string;
    lookUpRelatedRecordField?: string;
    name!: string;
    objectName!: string;
    recommendationOutputFieldName!: RecsOutputFieldName;
    relatedEntity?: string;
    status!: ConfigStatus;
}

export class AIModel extends Metadata {
    approvalStatus!: AIModelApproval;
    contentVersion?: string;
    dataset?: string;
    externalId?: string;
    failureReasonCode?: string;
    modelContent?: string;
    modelDef!: string;
    modelFactors!: AIModelFactor[];
    modelGraphs!: AIModelGraph[];
    modelMetrics!: AIModelMetric[];
    priority?: number;
    scoringStatus!: AIScoringStatus;
    trainingEndTime!: Date;
    trainingStartTime!: Date;
    type!: AIModelType;
}

export class AIReplyRecommendationsSettings extends Metadata {
    enableAIReplyRecommendations?: boolean;
    enableGenReplyRecommendations?: boolean;
    enableServiceEinsteinGPTGrounding?: boolean;
}

export class AIScoringModelDefVersion extends Metadata {
    aiScoringModelDefinition!: string;
    aiScoringSteps!: AIScoringStep[];
    developerName!: string;
    masterLabel!: string;
    modelMode!: AIScoringModelDefVersionMode;
}

export class AIScoringModelDefinition extends Metadata {
    aiModelConfig!: string;
    aiScoringModelDefVersions!: AIScoringModelDefVersion[];
    description?: string;
    masterLabel!: string;
}

export class AIUsecaseDefinition extends Metadata {
    aiUsecaseFieldMappings!: AIUsecaseFieldMapping[];
    aiUsecaseModels!: AIUsecaseModel[];
    creatorType!: CreatorType;
    masterLabel!: string;
    maximumInsightCount?: number;
    maximumRecommendationCount?: number;
    maximumSuggestionCount?: number;
    primaryResponseObject?: string;
    recommendationResponseObject?: string;
    recommendationSource?: RcmdSourceType;
    secondaryResponseObject?: string;
    shouldSaveFeatures?: boolean;
    shouldSaveInsights?: boolean;
    shouldSaveRecommendation?: boolean;
    shouldSaveRequestResponse?: boolean;
    shouldSaveScore?: boolean;
    shouldSaveSuggestions?: boolean;
    suggestionImpactMinimumPct?: number;
    usecaseName!: string;
}

export class AccountForecastSettings extends Metadata {
    accountFilterId?: string;
    accountForecastFormulas!: AccountForecastFormula[];
    acctPrdctPrdFrcstVolCnt?: number;
    calculationFrequency!: CalculationFrequency;
    displayDuration!: number;
    displayedForecastMetrics!: string;
    displayedRevenueMetrics!: string;
    editableAtStartOfPeriod!: boolean;
    editsAllowedFor!: number;
    forecastFrequency!: ForecastFrequency;
    objectMapping?: ObjectMapping;
    opportunityItemScheduleEnabled?: boolean;
    opportunityProbabilityEnabled?: boolean;
    primaryNotifEmailAddress?: string;
    productFilterId?: string;
    recalculateAllFrcstCnt?: number;
    regenerateForecastCnt?: number;
    salesAgreementFilterId?: string;
    secondaryNotifEmailAddress?: string;
    startingPeriod!: number;
}

export class AccountIntelligenceSettings extends Metadata {
    enableAccountLogos?: boolean;
    enableAutomatedAccountFields?: boolean;
    enableNewsStories?: boolean;
}

export class AccountPlanObjMeasCalcDef extends Metadata {
    conditions!: AccountPlanObjMeasCalcCond[];
    description?: string;
    developerName!: string;
    masterLabel!: string;
    rollupType!: string;
    status!: string;
    targetField?: string;
    targetObject!: string;
}

export class AccountRelationshipShareRule extends Metadata {
    accessLevel!: string;
    accountToCriteriaField!: string;
    description?: string;
    entityType!: string;
    masterLabel!: string;
    staticFormulaCriteria?: string;
    type!: string;
}

export class AccountSettings extends Metadata {
    enableAccountDiscovery?: boolean;
    enableAccountHistoryTracking?: boolean;
    enableAccountInsightsInMobile?: boolean;
    enableAccountOwnerReport?: boolean;
    enableAccountTeams?: boolean;
    enableContactHistoryTracking?: boolean;
    enableRelateContactToMultipleAccounts?: boolean;
    enableReportsToOnPersonAccount?: boolean;
    showViewHierarchyLink?: boolean;
}

export class AccountingModelConfig extends Metadata {
    accountingType!: AccountingType;
    defaultAccrualAccountCode?: string;
    defaultWriteOffAccountCode?: string;
    earliestCreatedDate!: Date;
    expectedCashFlowGrouping?: ExpectedCashFlowGrouping;
    financeBook?: string;
    internalMappingDetails!: string;
    isActive!: boolean;
    isGroupedByFundAccount?: boolean;
    isUsed!: boolean;
    jobFilterCriteria?: string;
    masterLabel!: string;
    paidCashFlowGrouping?: PaidCashFlowGrouping;
    recordTypeFilter?: string;
    runOrder?: number;
}

export class AcctMgrTargetSettings extends Metadata {
    acctMgrPeriodicTargetDstrCnt?: number;
    periodType!: PeriodTypes;
    pricebookId?: string;
    teamMemberHierarchyType!: TeamMemberHierarchyType;
}

export class ActionLauncherItemDef extends Metadata {
    identifier!: string;
    itemActionType!: ItemActionType;
    itemCategory!: ItemCategory;
    itemLanguage!: string;
    masterLabel!: string;
    subType!: string;
    type!: string;
    versionNumber?: string;
}

export class ActionLinkGroupTemplate extends Metadata {
    actionLinkTemplates!: ActionLinkTemplate[];
    category!: PlatformActionGroupCategory;
    executionsAllowed!: ActionLinkExecutionsAllowed;
    hoursUntilExpiration?: number;
    isPublished!: boolean;
    name!: string;
}

export class ActionPlanTemplate extends Metadata {
    actionPlanTemplateItem!: ActionPlanTemplateItem[];
    actionPlanTemplateItemDependencies!: ActionPlanTemplateItemDependency[];
    actionPlanType?: ActionPlanTemplateType;
    description?: string;
    isAdHocItemCreationEnabled!: boolean;
    name!: string;
    targetEntityType!: string;
    uniqueName!: string;
}

export class ActionableEventOrchDef extends Metadata {
    actionableEventUsageType?: string;
    apiName!: string;
    contextDefinitionDeveloperName?: string;
    contextMappingTitle?: string;
    eventCategory?: string;
    eventSubtypeApiName?: string;
    eventTypeApiName!: string;
    executionProcedureAPIName?: string;
    executionProcedureType?: string;
    isActive!: boolean;
    isTemplate!: boolean;
    label!: string;
}

export class ActionableEventTypeDef extends Metadata {
    apiName!: string;
    eventSubtypes!: EventSubtype[];
    label!: string;
}

export class ActionsSettings extends Metadata {
    enableDefaultQuickActionsOn?: boolean;
    enableMdpEnabled?: boolean;
    enableOfflineWebLinks?: boolean;
    enableThirdPartyActions?: boolean;
}

export class ActivationPlatform extends Metadata {
    activationFlowType?: ActivationFlowType;
    activationPlatformAdditionalMetadata?: string;
    activationPlatformConnectorType?: ActivationPlatformConnectorType;
    dataConnector?: string;
    description!: string;
    enabled!: boolean;
    includeSegmentNames?: boolean;
    logoUrl?: string;
    masterLabel!: string;
    notes?: string;
    outputFormat!: ActivationPlatformFileOutputFormat;
    outputGrouping!: ActivationPlatformFileOutputGrouping;
    periodicRefreshFrequecy?: ActivationPlatformPeriodicFullRefresh;
    platformProcessingType?: ActivationPlatformProcessingType;
    platformType!: ActivationPlatformType;
    refreshFrequency!: ActivationPlatformRefreshFrequency;
    refreshMode!: ActivationPlatformRefreshMode;
}

export class ActivationPlatformActvAttr extends Metadata {
    activationPlatform!: string;
    actvPlatformAdncIdentifier?: string;
    destinationName?: string;
    fieldName?: string;
    isFromSourceObject?: boolean;
    isRequired!: boolean;
    masterLabel!: string;
    objectName?: string;
}

export class ActivationPlatformField extends Metadata {
    activationPlatform!: string;
    helpText?: string;
    isHidden!: boolean;
    isRequired!: boolean;
    masterLabel!: string;
    type?: ActivationPlatformFieldDataType;
}

export class ActivitiesSettings extends Metadata {
    allowUsersToRelateMultipleContactsToTasksAndEvents?: boolean;
    autoRelateEventAttendees?: boolean;
    enableActivityReminders?: boolean;
    enableCalendarHomeLWC?: boolean;
    enableClickCreateEvents?: boolean;
    enableDragAndDropScheduling?: boolean;
    enableEmailTracking?: boolean;
    enableFlowTaskNotifsViaApex?: boolean;
    enableGroupTasks?: boolean;
    enableHideChildEventsPreference?: boolean;
    enableListViewScheduling?: boolean;
    enableLogNote?: boolean;
    enableMLSingleClientProfile?: boolean;
    enableMultidayEvents?: boolean;
    enableRecurringEvents?: boolean;
    enableRecurringTasks?: boolean;
    enableRollUpActivToContactsAcct?: boolean;
    enableSidebarCalendarShortcut?: boolean;
    enableSimpleTaskCreateUI?: boolean;
    enableTimelineCompDateSort?: boolean;
    enableUNSTaskDelegatedToNotifications?: boolean;
    enableUserListViewCalendars?: boolean;
    meetingRequestsLogo?: string;
    showCustomLogoMeetingRequests?: boolean;
    showEventDetailsMultiUserCalendar?: boolean;
    showHomePageHoverLinksForEvents?: boolean;
    showMyTasksHoverLinks?: boolean;
}

export class ActnblListKeyPrfmIndDef extends Metadata {
    aggregateOperationName!: ActionableListKPIAggType;
    description?: string;
    fieldName!: string;
    filterExpression?: string;
    masterLabel!: string;
    objectName!: string;
    status!: ActionableListKPIStType;
}

export class ActvPfrmDataConnectorS3 extends Metadata {
    bucketName!: string;
    exportDirectory!: string;
    masterLabel!: string;
}

export class ActvPlatformAdncIdentifier extends Metadata {
    activationPlatform!: string;
    identifierHashMethod?: ActivationPlatformIdentifierHashMethod;
    identifierType!: ActivationPlatformIdentifierType;
    masterLabel!: string;
}

export class ActvPlatformFieldValue extends Metadata {
    activationPlatformField!: string;
    isDefault!: boolean;
    masterLabel!: string;
    value?: string;
}

export class ActvPlatformOAuthConnector extends Metadata {
    masterLabel!: string;
    oauthProvider!: OAuthProviderType;
    oauthUrl!: string;
}

export class AddOnDefinition extends Metadata {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: DefaultLicenseStatus;
    description?: string;
    includedPlatformLicenseDefinitions!: IncludedPlatformLicenseDefinition[];
    includedUserLicenseDefinitions!: IncludedUserLicenseDefinition[];
    licenseOwner?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    name!: string;
}

export class AddressSettings extends Metadata {
    countriesAndStates!: CountriesAndStates;
}

export class AdvAccountForecastSet extends Metadata {
    accountFieldName?: string;
    calculationFrequency?: AdvAcctFcstCalcFrequency;
    description?: string;
    dimensions!: AdvAcctForecastDimension[];
    displayGroups!: AdvAcctFrcstDisplayGroup[];
    forecastAdjPeriods!: AdvAcctForecastAdjPeriod[];
    forecastFactObjectName!: string;
    forecastFormulas!: AdvAccountForecastFormula[];
    forecastPeriodGroupName!: string;
    forecastQuantityFieldName?: string;
    forecastRevenueFieldName?: string;
    forecastSetFieldName?: string;
    forecastSetName!: string;
    forecastStatusFieldName?: string;
    generationDpeDefName?: string;
    measureDefinitions!: AdvAcctForecastMeasureDef[];
    periodFieldName?: string;
    recalculateDpeDefName?: string;
    regenerationDpeDefName?: string;
    rolloverDpeDefName?: string;
    rolloverFrequency?: AdvAcctFcstCalcFrequency;
    status!: AdvAccForecastSetStatus;
}

export class AdvAcctForecastDimSource extends Metadata {
    advAcctForecastDimSrcName!: string;
    sourceObjectName!: string;
}

export class AdvAcctForecastPeriodGroup extends Metadata {
    forecastPeriodGroupName!: string;
    forecastPeriods!: AdvAccountForecastPeriod[];
    startPeriod!: number;
    status!: ForecastPeriodGroupStatus;
}

export class AdvancedObjectMapping extends Metadata {
    client!: FieldMappingClient;
    description?: string;
    label!: string;
    rows!: AdvancedFieldMapping[];
    sourceObject?: string;
    targetObject?: string;
}

export class AffinityScoreDefinition extends Metadata {
    affinityScoreDefinitionDesc?: string;
    affinityScoreDefinitionName?: string;
    affinityScoreType?: AffinityScoreType;
    masterLabel?: string;
    numberOfMonths?: number;
    numberOfRanges?: number;
    scoreRangeList?: string;
    sourceFieldApiNameList?: string;
    sourceObjectApiNameList?: string;
    targetFieldApiNameList?: string;
    targetObjectApiName?: string;
}

export class Ai4mSettings extends Metadata {
    enableEinsteinMCDesiger?: boolean;
    enableStoEmailPooledModel?: boolean;
    enableUmaEef?: boolean;
    enableUmaEefWhatsappSetting?: boolean;
    enableUmaEes?: boolean;
    enableUmaEesSmsSetting?: boolean;
    enableUmaEesWhatsappSetting?: boolean;
    enableUmaGlobalModel?: boolean;
    enableUmaSto?: boolean;
}

export class AiPluginUtteranceDef extends Metadata {
    developerName!: string;
    language!: string;
    masterLabel!: string;
    utterance!: string;
}

export class AnalyticSnapshot extends Metadata {
    description?: string;
    groupColumn?: string;
    mappings!: AnalyticSnapshotMapping[];
    name!: string;
    runningUser?: string;
    sourceReport!: string;
    targetObject!: string;
}

export class AnalyticsWorkspace extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class AnalyticsDashboard extends Metadata {
    description?: string;
    layouts!: AnalyticsDashboardLayout[];
    masterLabel!: string;
    style?: string;
    templateAssetSourceName?: string;
    templateSource?: string;
    version?: number;
    widgets!: AnalyticsDashboardWidget[];
}

export class AnalyticsSettings extends Metadata {
    alwaysGenPreviews?: boolean;
    analyticsAdoptionMetadata?: boolean;
    autoInstallApps?: boolean;
    bundleCachingOptOut?: boolean;
    canAccessAnalyticsViaAPI?: boolean;
    canAnnotateDashboards?: boolean;
    canEnableSavedView?: boolean;
    canExploreDataConversationally?: boolean;
    canShareAppsWithCommunities?: boolean;
    canViewThumbnailAssets?: boolean;
    concurrencyLimitSharing?: boolean;
    enableAmazonRedshiftOutputConnector?: boolean;
    enableAnalyticsEncryption?: boolean;
    enableAnalyticsSharingEnable?: boolean;
    enableAutoCompleteCombo?: boolean;
    enableAutonomousExperience?: boolean;
    enableAzureDLGen2OutputConnector?: boolean;
    enableC360GlobalProfileData?: boolean;
    enableCreateLegacyDataflows?: boolean;
    enableCrmaDataCloudIntegration?: boolean;
    enableCrtSetupLightningUiPref?: boolean;
    enableDashboardCmpRefreshPref?: boolean;
    enableDashboardComponentSnapshot?: boolean;
    enableDashboardFlexiTable?: boolean;
    enableDashboardToPDFEnable?: boolean;
    enableDataCloudReportingPref?: boolean;
    enableEmailReportsToPortalUsers?: boolean;
    enableFirebirdEditor?: boolean;
    enableFloatingReportHeaders?: boolean;
    enableIncludeDisclaimerMessage?: boolean;
    enableInsights?: boolean;
    enableInsightsHCMode?: boolean;
    enableLightningReportBuilder?: boolean;
    enableLotusNotesImages?: boolean;
    enableMassEnableReportBuilder?: boolean;
    enableNewChartsEngine?: boolean;
    enableNullDimension?: boolean;
    enableOrgCanSeeLivePreviews?: boolean;
    enableOrgCanViewTableau?: boolean;
    enableOrgCanViewThumbnailForOA?: boolean;
    enableOrgHasMobileOfflineEnabled?: boolean;
    enableOrgHasWatchlistEnabled?: boolean;
    enableQueryLiveConnectors?: boolean;
    enableRemoveFooterForRepDisplay?: boolean;
    enableRemoveFooterFromRepExp?: boolean;
    enableReportCdnPref?: boolean;
    enableReportHideXlsExportPref?: boolean;
    enableReportInlineEditPref?: boolean;
    enableReportNotificationsEnable?: boolean;
    enableReportSubOrgEmailPref?: boolean;
    enableReportingOnSDMPref?: boolean;
    enableRequestPrioritySchdl?: boolean;
    enableS1AnalyticsEclairEnable?: boolean;
    enableS3OutputConnector?: boolean;
    enableSFXJoinedReportsEnable?: boolean;
    enableSalesforceOutputConnector?: boolean;
    enableSecureImageSharing?: boolean;
    enableShowHighContrastChart?: boolean;
    enableSnowflakeOutputConnector?: boolean;
    enableSummaryFilterOrgPref?: boolean;
    enableTableauHyperOutputConnector?: boolean;
    enableUseOldChartsLookAndFeel?: boolean;
    enableWaveAssetsNewDateVersion?: boolean;
    enableWaveCustomFiscal?: boolean;
    enableWaveIndexMVDim?: boolean;
    enableWaveIndexMVDimV2?: boolean;
    enableWaveMultiCurrency?: boolean;
    enableWaveRecordNavigation?: boolean;
    enableWaveReplication?: boolean;
    enableWaveSharingInheritance?: boolean;
    enableWaveSqlCFIndexing?: boolean;
    enableWaveTrendedDatasetCleanup?: boolean;
    enableWriteToDataCloud?: boolean;
    etlOrchestrationPref?: boolean;
    isDiscoveryOptimizationEnabled?: boolean;
    isHighVolumePushbackEnabled?: boolean;
    maxHoursAppInProgress?: number;
    queryCachingOptOut?: boolean;
    recipeDirectDataPref?: boolean;
    recipeFiscalPref?: boolean;
    recipePreCachingOptOut?: boolean;
    recipeStagedDataPref?: boolean;
    replaceBlankMeasuresWithNulls?: boolean;
    setWaveIsYearEndFiscalYear?: boolean;
    sonicEnabled?: boolean;
    turnOnTimeZones?: boolean;
}

export class AndroidPushApplicationSetup extends Metadata {
    fcmProject?: string;
    serverKey?: string;
    serviceAccount?: string;
}

export class AnimationRule extends Metadata {
    animationFrequency!: string;
    developerName!: string;
    isActive!: boolean;
    masterLabel!: string;
    recordTypeContext!: string;
    recordTypeName?: string;
    sobjectType!: string;
    targetField!: string;
    targetFieldChangeToValues!: string;
}

export class ApexEmailNotifications extends Metadata {
    apexEmailNotification!: ApexEmailNotification[];
}

export class ApexSettings extends Metadata {
    defaultQueueableDelay?: number;
    enableAggregateCodeCoverageOnly?: boolean;
    enableApexAccessRightsPref?: boolean;
    enableApexApprovalLockUnlock?: boolean;
    enableApexCtrlImplicitWithSharingPref?: boolean;
    enableApexPropertyGetterPref?: boolean;
    enableAuraApexCtrlAuthUserAccessCheckPref?: boolean;
    enableAuraApexCtrlGuestUserAccessCheckPref?: boolean;
    enableCompileOnDeploy?: boolean;
    enableDisableParallelApexTesting?: boolean;
    enableGaplessTestAutoNum?: boolean;
    enableMngdCtrlActionAccessPref?: boolean;
    enableNonCertifiedApexMdCrud?: boolean;
    enableRestrictCommunityExecAnon?: boolean;
    enableSecureNoArgConstructorPref?: boolean;
    enableTestSetupSkipTestResults?: boolean;
}

export class ApexTestSuite extends Metadata {
    testClassName!: string[];
}

export class AppExperienceSettings extends Metadata {
    doesHideAllAppsInAppLauncher?: boolean;
}

export class AppFrameworkTemplateBundle extends Metadata {
    assetVersion?: number;
    description?: string;
    label!: string;
    maxAppCount?: number;
    templateBadgeIcon?: string;
    templateType!: string;
}

export class AppMenu extends Metadata {
    appMenuItems!: AppMenuItem[];
}

export class AppNotificationType extends Metadata {
    notificationType!: string;
    pushByDefault!: boolean;
    subscribed!: boolean;
}

export class ApplePushApplicationSetup extends Metadata {
    applicationBundle?: string;
    certificate?: string;
    environment!: string;
    keyIdentifier?: string;
    password?: string;
    signingKey?: string;
    teamIdentifier?: string;
}

export class Application extends Metadata {
    contactEmail?: string;
    contactPhone?: string;
    description?: string;
    developerName!: string;
    iconUrl?: string;
    infoUrl?: string;
    label!: string;
    logoUrl?: string;
    moduleRefs!: ModuleRefs;
    version?: string;
}

export class ApplicationRecordTypeConfig extends Metadata {
    applicationObjectName!: ApplicationObjectName;
    applicationUsageType!: ApplicationUsageType;
    recordTypeName!: string;
}

export class ApplicationSubtypeDefinition extends Metadata {
    applicationUsageType!: AppDomainUsageType;
    description?: string;
    masterLabel!: string;
}

export class AppointmentAssignmentPolicy extends Metadata {
    masterLabel!: string;
    policyApplicableDuration!: PolicyApplicableDuration;
    policyType!: AssignmentPolicyType;
    utilizationFactor!: UtilizationFactor;
}

export class AppointmentSchedulingPolicy extends Metadata {
    appointmentAssignmentPolicy?: string;
    appointmentStartTimeInterval!: string;
    extCalEventHandler?: string;
    isSvcTerrOpHoursWithShiftsUsed?: boolean;
    isSvcTerritoryMemberShiftUsed?: boolean;
    masterLabel!: string;
    shouldCheckExternalCalendar!: boolean;
    shouldConsiderCalendarEvents!: boolean;
    shouldEnforceExcludedResource!: boolean;
    shouldEnforceRequiredResource!: boolean;
    shouldMatchSkill!: boolean;
    shouldMatchSkillLevel!: boolean;
    shouldRespectVisitingHours!: boolean;
    shouldUsePrimaryMembers!: boolean;
    shouldUseSecondaryMembers!: boolean;
}

export class ApprovalProcess extends Metadata {
    active!: boolean;
    allowRecall?: boolean;
    allowedSubmitters!: ApprovalSubmitter[];
    approvalPageFields?: ApprovalPageField;
    approvalStep!: ApprovalStep[];
    description?: string;
    emailTemplate?: string;
    enableMobileDeviceAccess?: boolean;
    entryCriteria?: ApprovalEntryCriteria;
    finalApprovalActions?: ApprovalAction;
    finalApprovalRecordLock?: boolean;
    finalRejectionActions?: ApprovalAction;
    finalRejectionRecordLock?: boolean;
    initialSubmissionActions?: ApprovalAction;
    label!: string;
    nextAutomatedApprover?: NextAutomatedApprover;
    postTemplate?: string;
    processOrder?: number;
    recallActions?: ApprovalAction;
    recordEditability!: RecordEditabilityType;
    showApprovalHistory?: boolean;
}

export class DuplicateRuleFilterItem extends FilterItem {
    sortOrder!: number;
    table!: string;
}

export class AssessmentQuestion extends Metadata {
    assessmentQuestionVersion?: AssessmentQuestionVersion;
    dataType!: string;
    developerName!: string;
    displayTextCategory?: string;
    formulaResponseDataType?: string;
    name!: string;
    questionCategory!: string;
    relatedQuestion?: string;
}

export class AssessmentQuestionSet extends Metadata {
    assessmentQuestionDeveloperNames!: string[];
    developerName!: string;
    name!: string;
}

export class AssignmentRule extends Metadata {
    active?: boolean;
    ruleEntry!: RuleEntry[];
}

export class AssignmentRules extends Metadata {
    assignmentRule!: AssignmentRule[];
}

export class AssistantContextItem extends Metadata {
    assistantVersionId!: string;
    description?: string;
    developerName!: string;
    index?: number;
    masterLabel?: string;
    parentContextItem?: string;
    parentRelationField?: string;
    searchType?: string;
    slotClass?: string;
    sobjectType?: string;
    whereClause?: string;
}

export class AssistantDefinition extends Metadata {
    appVersionNumber?: number;
    assistantDefinitionProfiles!: AssistantDefinitionProfile[];
    description?: string;
    developerName!: string;
    masterLabel?: string;
    status?: AssistantDefinitionStatus;
}

export class AssistantSkillQuickAction extends Metadata {
    assistantSkillQuickActionParams!: AssistantSkillQuickActionParam[];
    description?: string;
    developerName!: string;
    masterLabel?: string;
    prompt?: string;
    quickAction?: string;
}

export class AssistantSkillSobjectAction extends Metadata {
    assistantSkillSobjectParams!: AssistantSkillSobjectParam[];
    description?: string;
    developerName!: string;
    masterLabel?: string;
    prompt?: string;
    recordType?: string;
    sobjectType?: string;
    target?: string;
    type!: AssistantSkillSobjectActionType;
}

export class AssistantVersion extends Metadata {
    assistantDefinitionId!: string;
    assistantSkills!: AssistantSkill[];
    assistantVersionActions!: AssistantVersionAction[];
    description?: string;
    developerName!: string;
    masterLabel?: string;
    versionNumber?: number;
}

export class Audience extends Metadata {
    audienceName!: string;
    container!: string;
    criteria!: AudienceCriteria;
    description?: string;
    formula?: string;
    formulaFilterType?: FormulaFilterType;
    isDefaultAudience?: boolean;
    targets?: PersonalizationTargetInfos;
}

export class AuraDefinitionBundle extends Metadata {
    SVGContent?: string;
    apiVersion?: number;
    auraDefinitions?: AuraDefinitions;
    controllerContent?: string;
    description?: string;
    designContent?: string;
    documentationContent?: string;
    helperContent?: string;
    markup?: string;
    modelContent?: string;
    packageVersions!: PackageVersion[];
    rendererContent?: string;
    styleContent?: string;
    testsuiteContent?: string;
    type?: AuraBundleType;
}

export class AuthProvider extends Metadata {
    appleTeam?: string;
    authorizeUrl?: string;
    consumerKey?: string;
    consumerSecret?: string;
    controlPlane?: MuleSoftControlPlane;
    customMetadataTypeRecord?: string;
    defaultScopes?: string;
    ecKey?: string;
    errorUrl?: string;
    executionUser?: string;
    friendlyName!: string;
    iconUrl?: string;
    idTokenIssuer?: string;
    includeOrgIdInIdentifier?: boolean;
    isPkceEnabled?: boolean;
    linkKickoffUrl?: string;
    logoutUrl?: string;
    oauthKickoffUrl?: string;
    paramForwardAllowlist?: AuthProvParamFwdAllowlist[];
    plugin?: string;
    portal?: string;
    providerType!: AuthProviderType;
    registrationHandler?: string;
    requireMfa?: boolean;
    sendAccessTokenInHeader?: boolean;
    sendClientCredentialsInHeader?: boolean;
    sendSecretInApis?: boolean;
    ssoKickoffUrl?: string;
    tokenUrl?: string;
    userInfoUrl?: string;
}

export class AutoResponseRule extends Metadata {
    active?: boolean;
    ruleEntry!: RuleEntry[];
}

export class AutoResponseRules extends Metadata {
    autoResponseRule!: AutoResponseRule[];
}

export class AutomatedContactsSettings extends Metadata {
    enableAddContactAutomatically?: boolean;
    enableAddContactRoleAutomatically?: boolean;
    enableAddContactRoleWithSuggestion?: boolean;
    enableAddContactWithSuggestion?: boolean;
}

export class BatchCalcJobDefinition extends Metadata {
    aggregates!: BatchCalcJobAggregate[];
    appends!: BatchCalcJobUnion[];
    atomicWritebacks!: BatchCalcJobAtomicWriteback[];
    customNodes!: BatchCalcJobCustomNode[];
    dataSpaceApiName?: string;
    datasources!: BatchCalcJobDatasource[];
    definitionRunMode?: BatchCalcJobDefRunMode;
    description?: string;
    executionPlatformType?: ExecutionPlatformType;
    filters!: BatchCalcJobFilter[];
    forecasts!: BatchCalcJobForecast[];
    hierarchyPaths!: BatchCalcJobHierarchyPath[];
    isTemplate?: boolean;
    joins!: BatchCalcJobSourceJoin[];
    label?: string;
    parameters!: BatchCalcJobParameter[];
    processType?: BatchCalcProcessType;
    status!: BatchJobDefinitionStatus;
    transforms!: BatchCalcJobTransform[];
    writebacks!: BatchCalcJobWritebackObject[];
}

export class BatchCalcJobAbstractMetadataValue {}

export class BatchCalcJobAtomicWriteback extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    label!: string;
    name!: string;
    writebackObjectRelationships!: BatchCalcJobAtomicWritebackRelationship[];
    writebackSequence?: number;
}

export class BatchCalcJobCustomNode extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    extensionName!: string;
    extensionNamespace!: string;
    label!: string;
    name!: string;
    parameters!: BatchCalcJobCustomNodeParameter[];
    sources!: string[];
}

export class BatchCalcJobDatasource extends BatchCalcJobAbstractMetadataValue {
    CSVDelimiter?: BatchCalcJobCSVDelimiter;
    description?: string;
    fields!: BatchCalcJobDatasourceField[];
    fileIdentifier?: string;
    filePath?: string;
    fileSource?: BatchCalcJobFileSource;
    label!: string;
    name!: string;
    sourceName!: string;
    type!: BatchCalcJobDatasourceType;
}

export class BatchCalcJobFilter extends BatchCalcJobAbstractMetadataValue {
    criteria!: BatchCalcJobFilterCriteria[];
    description?: string;
    filterCondition?: string;
    filterParameterName?: string;
    isDynamicFilter?: boolean;
    label!: string;
    name!: string;
    sourceName!: string;
}

export class BatchCalcJobForecast extends BatchCalcJobAbstractMetadataValue {
    accuracyPercent?: BatchCalcJobFrcstAccuracy;
    aggregationFields!: BtchCalcJobFrcstAggrFld[];
    dateFieldName!: string;
    description?: string;
    forecastModelType?: BatchCalcJobFrcstModel;
    forecastPeriodCount?: number;
    forecastPeriodType!: BatchCalcJobFrcstPeriodType;
    groupFields!: BatchCalcJobFrcstGrpFld[];
    label!: string;
    name!: string;
    periodStartDateName!: string;
    seasonality?: BatchCalcJobFrcstSeasonality;
    shouldExcludeLastPeriod?: boolean;
    sourceName!: string;
}

export class BatchCalcJobHierarchyPath extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    hierarchyFieldName!: string;
    isSelfFieldValueIncluded?: boolean;
    label!: string;
    name!: string;
    parentFieldName!: string;
    selfFieldName!: string;
    sourceName!: string;
}

export class BatchCalcJobParameter extends BatchCalcJobAbstractMetadataValue {
    dataType!: BatchCalcJobParameterDataType;
    defaultValue?: string;
    description?: string;
    isMultiValue!: boolean;
    label!: string;
    name!: string;
}

export class BatchCalcJobSourceJoin extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    fields!: BatchCalcJobJoinResultField[];
    joinKeys!: BatchCalcJobJoinKey[];
    label!: string;
    name!: string;
    primarySourceName!: string;
    secondarySourceName!: string;
    type!: BatchCalcJobSourceJoinType;
}

export class BatchCalcJobTransform extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    droppedFields!: BatchCalcJobTransformDroppedField[];
    expressionFields!: BatchCalcJobTransformAddedField[];
    label!: string;
    name!: string;
    orderBy!: BatchCalcJobOrderByField[];
    partitionBy!: string[];
    sourceName!: string;
    transformationType!: BatchCalcJobTransformType;
}

export class BatchCalcJobUnion extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    isDisjointedSchema?: boolean;
    label!: string;
    name!: string;
    sources!: string[];
}

export class BatchCalcJobWritebackObject extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    externalIdFieldName?: string;
    fields!: BatchCalcJobWritebackMapping[];
    filterCondition?: string;
    folderName?: string;
    isChangedRow?: boolean;
    isExistingDataset?: boolean;
    label!: string;
    name!: string;
    operationType?: BatchCalcJobWritebackOpn;
    sharingInheritanceObjectName?: string;
    sourceName!: string;
    storageType?: BatchCalcJobWritebackType;
    targetObjectName!: string;
    writebackRecordMaxLimit?: number;
    writebackSequence?: number;
    writebackUser?: string;
}

export class BatchProcessJobDefinition extends Metadata {
    batchSize!: number;
    dataSource!: BatchDataSource;
    description?: string;
    executionProcessApiName?: string;
    flowApiName?: string;
    flowInputVariable?: string;
    masterLabel!: string;
    processGroup!: string;
    retryCount!: number;
    retryInterval!: number;
    status?: string;
    type?: string;
}

export class BenefitAction extends Metadata {
    benefitActionParameters!: BenefitActionParameter[];
    description?: string;
    flowDefinition?: string;
    isActive!: boolean;
    isBenefitExpirationAllowed?: boolean;
    isBenefitUpdateAllowed?: boolean;
    masterLabel!: string;
    memberBenefitVariableName?: string;
    processType!: string;
    type!: string;
}

export class BillingSettings extends Metadata {
    enableBillingSetup?: boolean;
    enableCrMemoApplicationToPostedInvoices?: boolean;
    enableInvoiceEmailDelivery?: boolean;
    enableInvoicePdfGeneration?: boolean;
    enableNegInvoiceLnConversionToCrMemoLn?: boolean;
    enablePaymentScheduleAutomation?: boolean;
    enableTransactionJournalCreation?: boolean;
    enableTransactionsApplicationToInvoices?: boolean;
    enableTrxnAmountsStorageInCorpCurrency?: boolean;
}

export class BlacklistedConsumer extends Metadata {
    blockedByApiWhitelisting!: boolean;
    consumerKey!: string;
    consumerName!: string;
    masterLabel!: string;
}

export class BldgEnrgyIntensityCnfg extends Metadata {
    buildingEnergyIntensityType!: BuildingEnergyIntensityType;
    recordType!: string;
}

export class BlockchainSettings extends Metadata {
    enableBcp?: boolean;
    enableEtpNft?: boolean;
}

export class Bot extends Metadata {
    agentType?: GenAiAgentType;
    botMlDomain?: LocalMlDomain;
    botUser?: string;
    botVersions!: BotVersion[];
    contextVariables!: ConversationContextVariable[];
    conversationChannelProviders!: ConversationDefinitionChannelProvider[];
    defaultOutboundFlow?: string;
    description?: string;
    iconUrl?: string;
    label?: string;
    logPrivateConversationData?: boolean;
    pageContextVariables!: PageContextVariable[];
    richContentEnabled?: boolean;
    sessionTimeout?: number;
    type?: BotType;
}

export class BotVersion extends Metadata {
    articleAnswersGPTEnabled?: boolean;
    botDialogGroups!: BotDialogGroup[];
    botDialogs!: BotDialog[];
    citationsEnabled?: boolean;
    company?: string;
    conversationDefinitionPlanners!: ConversationDefinitionPlanner[];
    conversationGoals!: ConversationDefinitionGoal[];
    conversationSystemDialogs!: ConversationSystemDialog[];
    conversationVariables!: ConversationVariable[];
    copilotPrimaryLanguage?: Language;
    copilotSecondaryLanguages?: string;
    entryDialog!: string;
    initialIntentDetectionEnabled?: boolean;
    intentDisambiguationEnabled?: boolean;
    intentThreshold?: number;
    intentV3Enabled?: boolean;
    knowledgeActionEnabled?: boolean;
    knowledgeFallbackEnabled?: boolean;
    mainMenuDialog?: string;
    nlpProviders!: ConversationDefinitionNlpProvider[];
    responseDelayMilliseconds?: number;
    role?: string;
    smallTalkEnabled?: boolean;
    toneType?: GenAiBotToneType;
}

export class BotBlock extends Metadata {
    botBlockVersions!: BotBlockVersion[];
    description?: string;
    icon?: string;
    masterLabel!: string;
    richContentEnabled?: boolean;
}

export class BotBlockVersion extends Metadata {
    botDialogs!: BotDialog[];
    conversationGoals!: ConversationDefinitionGoal[];
    conversationLanguages!: string;
    conversationVariables!: ConversationVariable[];
    description?: string;
    mlDomain!: LocalMlDomain;
    permissionSet?: string;
    status!: ConvDefBlockVersionStatus;
}

export class BotSettings extends Metadata {
    enableBots?: boolean;
}

export class BotTemplate extends Metadata {
    botDialogGroups!: BotDialogGroup[];
    botDialogs!: BotDialog[];
    contextVariables!: ConversationContextVariable[];
    conversationGoals!: ConversationDefinitionGoal[];
    conversationLanguages!: string;
    conversationSystemDialogs!: ConversationSystemDialog[];
    conversationVariables!: ConversationVariable[];
    description?: string;
    entryDialog?: string;
    icon?: string;
    mainMenuDialog?: string;
    masterLabel!: string;
    mlDomain?: LocalMlDomain;
    permissionSet?: string;
    richContentEnabled?: boolean;
    type?: BotType;
}

export class BrandingSet extends Metadata {
    brandingSetProperty!: BrandingSetProperty[];
    description?: string;
    masterLabel!: string;
    type?: string;
}

export class BriefcaseDefinition extends Metadata {
    briefcaseRules!: BriefcaseRule[];
    description?: string;
    isActive!: boolean;
    masterLabel!: string;
    type?: BriefcaseType;
}

export class BusinessHoursEntry extends Metadata {
    active?: boolean;
    default!: boolean;
    fridayEndTime?: Date;
    fridayStartTime?: Date;
    mondayEndTime?: Date;
    mondayStartTime?: Date;
    name?: string;
    saturdayEndTime?: Date;
    saturdayStartTime?: Date;
    sundayEndTime?: Date;
    sundayStartTime?: Date;
    thursdayEndTime?: Date;
    thursdayStartTime?: Date;
    timeZoneId?: string;
    tuesdayEndTime?: Date;
    tuesdayStartTime?: Date;
    wednesdayEndTime?: Date;
    wednesdayStartTime?: Date;
}

export class BusinessHoursSettings extends Metadata {
    businessHours!: BusinessHoursEntry[];
    holidays!: Holiday[];
}

export class BusinessProcess extends Metadata {
    description?: string;
    isActive?: boolean;
    values!: PicklistValue[];
}

export class PicklistValue extends Metadata {
    color?: string;
    default!: boolean;
    description?: string;
    isActive?: boolean;
    allowEmail?: boolean;
    closed?: boolean;
    controllingFieldValues!: string[];
    converted?: boolean;
    cssExposed?: boolean;
    forecastCategory?: ForecastCategories;
    highPriority?: boolean;
    probability?: number;
    reverseRole?: string;
    reviewed?: boolean;
    won?: boolean;
}

export class GlobalPicklistValue extends Metadata {
    color?: string;
    default!: boolean;
    description?: string;
    isActive?: boolean;
}

export class BusinessProcessGroup extends Metadata {
    businessProcessDefinitions!: BusinessProcessDefinition[];
    customerSatisfactionMetric!: SurveyQuestionType;
    description?: string;
    masterLabel!: string;
}

export class BusinessProcessTypeDefinition extends Metadata {
    applicationUsageType!: AppDomainUsageType;
    description?: string;
    masterLabel!: string;
}

export class CMSConnectSource extends Metadata {
    cmsConnectAsset!: CMSConnectAsset[];
    cmsConnectLanguage!: CMSConnectLanguage[];
    cmsConnectPersonalization?: CMSConnectPersonalization;
    cmsConnectResourceType!: CMSConnectResourceType[];
    connectionType!: CMSSourceConnectionType;
    cssScope?: string;
    developerName!: string;
    languageEnabled?: string;
    masterLabel!: string;
    namedCredential?: string;
    personalizationEnabled?: string;
    rootPath?: string;
    sortOrder!: number;
    status!: CMSConnectionStatus;
    type!: CMSConnectionSourceType;
    websiteUrl?: string;
}

export class CallCenter extends Metadata {
    adapterUrl?: string;
    contactCenterChannels!: ContactCenterChannel[];
    customSettings?: string;
    displayName!: string;
    displayNameLabel!: string;
    internalNameLabel!: string;
    sections!: CallCenterSection[];
    vendorCallCenterStatusMaps!: VendorCallCenterStatusMap[];
    version?: string;
}

export class CallCenterRoutingMap extends Metadata {
    callCenter!: string;
    developerName!: string;
    externalId!: string;
    masterLabel!: string;
    quickConnect?: string;
    referenceRecord!: string;
}

export class CallCoachingMediaProvider extends Metadata {
    isActive!: boolean;
    providerDescription!: string;
    providerName!: string;
}

export class CallCtrAgentFavTrfrDest extends Metadata {
    agent!: string;
    callCenter!: string;
    name!: string;
    transferDestination!: string;
}

export class CampaignInfluenceModel extends Metadata {
    isActive?: boolean;
    isDefaultModel!: boolean;
    isModelLocked!: boolean;
    modelDescription?: string;
    name!: string;
    recordPreference?: string;
}

export class CampaignSettings extends Metadata {
    aiAttributionTimeframe?: number;
    enableAIAttribution?: boolean;
    enableAccountsAsCM?: boolean;
    enableAutoCampInfluenceDisabled?: boolean;
    enableB2bmaCampaignInfluence2?: boolean;
    enableCampaignHistoryTrackEnabled?: boolean;
    enableCampaignInfluence2?: boolean;
    enableCampaignMemberTWCF?: boolean;
    enableEKAI?: boolean;
    enableOpportunityInfluence?: boolean;
    enableSuppressNoValueCI2?: boolean;
}

export class CampaignTemplateDefinition extends Metadata {
    description!: string;
    developerName!: string;
    masterLabel!: string;
}

export class CanvasMetadata extends Metadata {
    accessMethod!: string;
    canvasOptions?: string;
    canvasUrl!: string;
    lifecycleClass?: string;
    locationOptions?: string;
    samlInitiationMethod?: string;
}

export class CareBenefitVerifySettings extends Metadata {
    codeSetType?: string;
    defaultNpi?: string;
    generalPlanServiceTypeCode?: string;
    isDefault?: boolean;
    masterLabel!: string;
    organizationName?: string;
    serviceApexClass?: string;
    serviceNamedCredential?: string;
    serviceTypeSourceSystem?: string;
    uriPath?: string;
}

export class CareRequestConfiguration extends Metadata {
    careRequestRecordType!: string;
    careRequestRecords!: CareRequestRecords[];
    careRequestType!: string;
    isActive?: boolean;
    isDefaultRecordType?: boolean;
    masterLabel!: string;
}

export class CaseSettings extends Metadata {
    caseAssignNotificationTemplate?: string;
    caseAutoProcUser?: boolean;
    caseCloseNotificationTemplate?: string;
    caseCommentNotificationTemplate?: string;
    caseCreateNotificationTemplate?: string;
    caseFeedItemSettings!: FeedItemSettings[];
    caseFeedReadUnreadLtng?: boolean;
    caseMergeInLightning?: boolean;
    closeCaseThroughStatusChange?: boolean;
    defaultCaseFeedLayoutOn?: boolean;
    defaultCaseOwner?: string;
    defaultCaseOwnerType?: string;
    defaultCaseUser?: string;
    emailActionDefaultsHandlerClass?: string;
    emailToCase?: EmailToCaseSettings;
    enableCaseFeed?: boolean;
    enableCaseSwarming?: boolean;
    enableCollapseEmailThread?: boolean;
    enableDraftEmails?: boolean;
    enableEarlyEscalationRuleTriggers?: boolean;
    enableEmailActionDefaultsHandler?: boolean;
    enableEmailContactOnCasePost?: boolean;
    enableEscalateQfiToCaseInternal?: boolean;
    enableEscalateQfiToCaseNetworks?: boolean;
    enableExtNetworksCaseFeedEnabled?: boolean;
    enableMultiLangSolnSrchCSS?: boolean;
    enableMultiLangSolnSrchPKB?: boolean;
    enableMultiLangSolution?: boolean;
    enableSolutionCategory?: boolean;
    enableSolutionInlineCategory?: boolean;
    enableSolutionShortSummary?: boolean;
    enableSuggestedArticlesApplication?: boolean;
    enableSuggestedArticlesCustomerPortal?: boolean;
    enableSuggestedArticlesPartnerPortal?: boolean;
    enableSuggestedSolutions?: boolean;
    escalateCaseBefore?: boolean;
    genericMessageEnabled?: boolean;
    keepCaseMergeRecords?: boolean;
    keepRecordTypeOnAssignmentRule?: boolean;
    notifyContactOnCaseComment?: boolean;
    notifyDefaultCaseOwner?: boolean;
    notifyOwnerOnCaseComment?: boolean;
    notifyOwnerOnCaseOwnerChange?: boolean;
    predictiveSupportEnabled?: boolean;
    rtaCaseComment?: boolean;
    showEmailAttachmentsInCaseAttachmentsRL?: boolean;
    showFewerCloseActions?: boolean;
    systemUserEmail?: string;
    useSystemEmailAddress?: boolean;
    useSystemUserAsDefaultCaseUser?: boolean;
    visibleInCssCheckbox?: boolean;
    webToCase?: WebToCaseSettings;
}

export class CaseSubjectParticle extends Metadata {
    index!: number;
    textField?: string;
    type!: CaseSubjectParticleType;
}

export class ChannelLayout extends Metadata {
    doesExcludeFieldLabels?: boolean;
    doesExcludeFiles?: boolean;
    enabledChannels!: string[];
    label!: string;
    layoutItems!: ChannelLayoutItem[];
    recordType?: string;
}

export class ChannelObjectLinkingRule extends Metadata {
    actionForNoRecordFound!: ActionForNoRecordFound;
    actionForSingleRecordFound!: ActionForSingleRecordFound;
    channelType!: ChannelType;
    description?: string;
    isLinkedRecordOpenedAsSubTab!: boolean;
    isRuleActive!: boolean;
    masterLabel!: string;
    objectToLink!: ObjectToLink;
    ruleName!: string;
}

export class ChannelRevMgmtSettings extends Metadata {
    enableDesignRegistration?: boolean;
    enablePriceProtection?: boolean;
}

export class ChatterAnswersSettings extends Metadata {
    emailFollowersOnBestAnswer?: boolean;
    emailFollowersOnReply?: boolean;
    emailOwnerOnPrivateReply?: boolean;
    emailOwnerOnReply?: boolean;
    enableAnswerViaEmail?: boolean;
    enableChatterAnswers!: boolean;
    enableFacebookSSO?: boolean;
    enableInlinePublisher?: boolean;
    enableReputation?: boolean;
    enableRichTextEditor?: boolean;
    facebookAuthProvider?: string;
    showInPortals?: boolean;
}

export class ChatterEmailsMDSettings extends Metadata {
    enableChatterDigestEmailsApiOnly?: boolean;
    enableChatterEmailAttachment?: boolean;
    enableCollaborationEmail?: boolean;
    enableDisplayAppDownloadBadges?: boolean;
    enableEmailReplyToChatter?: boolean;
    enableEmailToChatter?: boolean;
    noQnOwnNotifyOnCaseCmt?: boolean;
    noQnOwnNotifyOnRep?: boolean;
    noQnSubNotifyOnBestR?: boolean;
    noQnSubNotifyOnRep?: boolean;
}

export class ChatterExtension extends Metadata {
    compositionComponent!: string;
    description!: string;
    extensionName!: string;
    headerText?: string;
    hoverText?: string;
    icon!: string;
    isProtected?: boolean;
    masterLabel!: string;
    renderComponent!: string;
    type!: ChatterExtensionType;
}

export class ChatterSettings extends Metadata {
    allowChatterGroupArchiving?: boolean;
    allowRecordsInChatterGroup?: boolean;
    enableApprovalRequest?: boolean;
    enableCaseFeedRelativeTimestamps?: boolean;
    enableChatter?: boolean;
    enableChatterEmoticons?: boolean;
    enableFeedEdit?: boolean;
    enableFeedPinning?: boolean;
    enableFeedsDraftPosts?: boolean;
    enableFeedsRichText?: boolean;
    enableInviteCsnUsers?: boolean;
    enableOutOfOfficeEnabledPref?: boolean;
    enableRichLinkPreviewsInFeed?: boolean;
    enableTodayRecsInFeed?: boolean;
    unlistedGroupsEnabled?: boolean;
}

export class ChoiceList extends Metadata {
    choiceListValue!: ChoiceListValue[];
    description?: string;
    masterLabel!: string;
}

export class ClaimFinancialSettings extends Metadata {
    claimCovPendingAuthStatus!: string;
    claimPendingAuthorityStatus!: string;
    clmCovPymtDtlPendAuthSts!: string;
    masterLabel!: string;
}

export class ClauseCatgConfiguration extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    usageType!: ClmCategoryUsageType;
}

export class CleanDataService extends Metadata {
    cleanRules!: CleanRule[];
    description!: string;
    masterLabel!: string;
    matchEngine!: string;
}

export class CloudServiceProvider extends Metadata {
    authParams!: string;
    authType!: AuthType;
    baseApiUrl!: string;
    cloudServiceProviderApis!: CloudServiceProviderApi[];
    externalId!: string;
    name!: string;
    provisioningAutomationType?: ProvisioningAutomationType;
    sendAggregatedLicenseInfo?: boolean;
    sendAggregatedLicenses?: boolean;
    sendLicenseInfo?: boolean;
    sendTenantChange?: boolean;
    sendTenantUsage?: boolean;
    shouldIncludeOrderItems?: boolean;
    usageAggregateServiceUser?: string;
}

export class CmsnStmtLineItemConfig extends Metadata {
    failureStatus!: string;
    insPolicyMatchingCriteria!: string;
    masterLabel!: string;
    reprocessingEligibility!: string;
    successStatus!: string;
}

export class CmsnStmtLineItemTypConfig extends Metadata {
    brkrRevSpltArngLnItmTyp?: string;
    commissionStmtLineItemType!: string;
    masterLabel!: string;
    prodSplitArngLineItemType?: string;
}

export class CommandAction extends Metadata {
    actionType!: string;
    description?: string;
    intents!: CommandActionIntent[];
    label!: string;
    parameters!: CommandActionParam[];
    responseTemplates!: CommandActionResponse[];
    target?: string;
}

export class CommerceSettings extends Metadata {
    commerceAnalyticsEnabled?: boolean;
    commerceAppEnabled?: boolean;
    commerceConciergeEnabled?: boolean;
    commerceCopilotEcomEnabled?: boolean;
    commerceDCSegmentEnabled?: boolean;
    commerceDiscoveryExpansion?: boolean;
    commerceEnabled?: boolean;
    commerceNGPEnabled?: boolean;
    commerceRLMSubs?: boolean;
    convCommShopCopilotEnabled?: boolean;
    lowestUnitPriceTracking?: boolean;
    messagingEngagementDataKit?: boolean;
}

export class CommissionStatementConfig extends Metadata {
    cmsnProcBatchPrcJobDef?: string;
    failureStatus!: string;
    inProgressStatus!: string;
    invalidProducerCmsnStatus?: string;
    masterLabel!: string;
    partialSuccessStatus!: string;
    stdCmsnProcBtchPrcJobDef?: string;
    successStatus!: string;
}

export class CommsServiceConsoleSettings extends Metadata {
    enableCommsServiceConsole?: boolean;
}

export class CommunicationChannelType extends Metadata {
    channelName!: string;
    masterLabel!: string;
}

export class CommunitiesSettings extends Metadata {
    applyLoginPageTypeToEmbeddedLogin?: boolean;
    blockEmbeddedLoginUnknownURLRedirect?: boolean;
    canModerateAllFeedPosts?: boolean;
    canModerateInternalFeedPosts?: boolean;
    embeddedVisualforcePages?: boolean;
    enableCommunityWorkspaces?: boolean;
    enableCspContactVisibilityPref?: boolean;
    enableCspNotesOnAccConPref?: boolean;
    enableEnablePRM?: boolean;
    enableExternalAccHierPref?: boolean;
    enableGuestPermDisOptOutCruc?: boolean;
    enableGuestSecurityOptOutCruc?: boolean;
    enableGuvSecurityOptOutPref?: boolean;
    enableInviteChatterGuestEnabled?: boolean;
    enableNameFieldsUserPIIEnabled?: boolean;
    enableNetPortalUserReportOpts?: boolean;
    enableNetworksEnabled?: boolean;
    enableOotbProfExtUserOpsEnable?: boolean;
    enablePRMAccRelPref?: boolean;
    enablePowerCustomerCaseStatus?: boolean;
    enablePreventBadgeGuestAccess?: boolean;
    enableRelaxPartnerAccountFieldPref?: boolean;
    enableUnsupportedBrowserModalPref?: boolean;
    enableUsernameUniqForOrgPref?: boolean;
}

export class Community extends Metadata {
    active?: boolean;
    chatterAnswersFacebookSsoUrl?: string;
    communityFeedPage?: string;
    dataCategoryName?: string;
    description?: string;
    emailFooterDocument?: string;
    emailHeaderDocument?: string;
    emailNotificationUrl?: string;
    enableChatterAnswers?: boolean;
    enablePrivateQuestions?: boolean;
    expertsGroup?: string;
    portal?: string;
    reputationLevels?: ReputationLevels;
    showInPortal?: boolean;
    site?: string;
}

export class CommunityAIModelMapping extends Metadata {
    modelContent!: string;
    modelEntityType!: ModelEntityType;
    modelStatus!: ModelStatus;
    name!: string;
    networkId?: string;
    setupDefinition?: string;
}

export class CommunityTemplateDefinition extends Metadata {
    baseTemplate?: CommunityBaseTemplate;
    bundlesInfo!: CommunityTemplateBundleInfo[];
    category!: CommunityTemplateCategory;
    defaultBrandingSet?: string;
    defaultThemeDefinition!: string;
    description?: string;
    enableExtendedCleanUpOnDelete?: boolean;
    masterLabel!: string;
    navigationLinkSet!: NavigationLinkSet[];
    pageSetting!: CommunityTemplatePageSetting[];
    publisher?: string;
}

export class CommunityThemeBundleInfo {}

export class CommunityThemeDefinition extends Metadata {
    bundlesInfo!: CommunityThemeBundleInfo[];
    customThemeLayoutType!: CommunityCustomThemeLayoutType[];
    defaultBrandingSet?: string;
    description?: string;
    enableExtendedCleanUpOnDelete?: boolean;
    masterLabel!: string;
    publisher?: string;
    themeRouteOverride!: CommunityThemeRouteOverride[];
    themeSetting!: CommunityThemeSetting[];
}

export class CompactLayout extends Metadata {
    fields!: string[];
    label!: string;
}

export class CompanySettings extends Metadata {
    enableCustomFiscalYear!: boolean;
    fiscalYear?: FiscalYearSettings;
}

export class ConnectedApp extends Metadata {
    attributes!: ConnectedAppAttribute[];
    canvas?: CanvasMetadata;
    canvasConfig?: ConnectedAppCanvasConfig;
    contactEmail!: string;
    contactPhone?: string;
    description?: string;
    iconUrl?: string;
    infoUrl?: string;
    ipRanges!: ConnectedAppIpRange[];
    label!: string;
    logoUrl?: string;
    mobileAppConfig?: ConnectedAppMobileDetailConfig;
    mobileStartUrl?: string;
    oauthConfig?: ConnectedAppOauthConfig;
    oauthPolicy?: ConnectedAppOauthPolicy;
    permissionSetName!: string[];
    plugin?: string;
    pluginExecutionUser?: string;
    profileName!: string[];
    samlConfig?: ConnectedAppSamlConfig;
    sessionPolicy?: ConnectedAppSessionPolicy;
    startUrl?: string;
}

export class ConnectedAppSettings extends Metadata {
    enableAdminApprovedAppsOnly?: boolean;
    enableAdminApprovedAppsOnlyForExternalUser?: boolean;
    enableSkipUserProvisioningWizardWelcomePage?: boolean;
}

export class ConnectivityDevConfigMetadata extends Metadata {
    allowNonSubscribedNotifTypes?: boolean;
    isOauth?: boolean;
    issuer?: string;
    mobileStartUrl?: string;
    nameIdFormat?: string;
    samlAscUrl?: string;
    samlCertificate?: string;
    samlEncryptionCertificate?: string;
    samlEncryptionType?: string;
    samlEntityUrl?: string;
    samlIdpSLOBinding?: string;
    samlSigningAlgoType?: string;
    samlSubjectType?: string;
    singleLogoutUrl?: string;
    startUrl?: string;
    subjectCustomAttr?: string;
}

export class ConsentBannerSettings extends Metadata {
    allowButtonColor!: string;
    allowButtonTextColor!: string;
    bannerColor!: string;
    bannerFontFamily!: BannerFontFamily;
    bannerMessage!: string;
    bannerPosition!: BannerPosition;
    bannerTextColor!: string;
    declineButtonColor!: string;
    declineButtonTextColor!: string;
    infoText?: string;
    infoUrl?: string;
    privacyPolicyText?: string;
    privacyPolicyUrl?: string;
}

export class ContentSettings extends Metadata {
    enableCMSC2CConnections?: boolean;
    enableChatterFileLink?: boolean;
    enableContent?: boolean;
    enableContentAutoAssign?: boolean;
    enableContentDistForPortalUsers?: boolean;
    enableContentDistPwOptionsBit1?: boolean;
    enableContentDistPwOptionsBit2?: boolean;
    enableContentDistribution?: boolean;
    enableContentSupportMultiLanguage?: boolean;
    enableContentWorkspaceAccess?: boolean;
    enableDeleteFileInContentPacks?: boolean;
    enableFileIngestToDataCloud?: boolean;
    enableFileShareSetByRecord?: boolean;
    enableFilesUsrShareNetRestricted?: boolean;
    enableJPGPreviews?: boolean;
    enableLWCFileUpload?: boolean;
    enableLibraryManagedFiles?: boolean;
    enableShowChatterFilesInContent?: boolean;
    enableSiteGuestUserToUploadFiles?: boolean;
    enableUploadFilesOnAttachments?: boolean;
    setValidContentTypeForAtchDocDownload?: boolean;
    skipContentAssetTriggers?: boolean;
    skipContentAssetTriggersOnDeploy?: boolean;
}

export class ContextDefinition extends Metadata {
    canBeReferenceDefinition?: boolean;
    clonedFrom?: string;
    contextDefinitionReferences!: ContextDefinitionReference[];
    contextDefinitionVersions!: ContextDefinitionVersion[];
    contextTtl?: number;
    description?: string;
    displayName?: string;
    hasSystemTags?: boolean;
    inheritedFrom?: string;
    inheritedFromVersion?: string;
    isProtected?: boolean;
    masterLabel!: string;
    title!: string;
}

export class ContextUseCaseMapping extends Metadata {
    contextDefinitionName!: string;
    mappingName!: string;
    mappingType!: ContextMappingType;
    masterLabel!: string;
    referenceObjectName?: string;
    referenceObjectRecordType?: string;
    targetObjectCustomFieldName?: string;
    targetObjectName?: string;
    targetObjectRecordType?: string;
    useCaseType!: ContextUseCaseType;
}

export class ContractSettings extends Metadata {
    autoCalculateEndDate?: boolean;
    autoExpirationDelay?: string;
    autoExpirationRecipient?: string;
    autoExpireContracts?: boolean;
    enableContractHistoryTracking?: boolean;
    notifyOwnersOnContractExpiration?: boolean;
}

export class ContractType extends Metadata {
    contractTypeConfigs!: ContractTypeConfig[];
    isDefault?: boolean;
    masterLabel!: string;
    subTypes?: string;
}

export class ConvIntelligenceSignalRule extends Metadata {
    actionType!: ConvIntelligenceActionType;
    actionValue?: string;
    active!: boolean;
    channelAddressIdentifier!: string;
    channelType!: string;
    criteria!: string;
    developerName!: string;
    participantRole?: ConvParticipantRole;
    ruleName!: string;
    service!: ConvIntelligenceService;
    subrule!: ConvIntelligenceSignalSubRule[];
}

export class ConvReasonReportDefinition extends Metadata {
    endDate!: Date;
    externalModelIdentifier?: string;
    name!: string;
    pipelineRunIdentifier?: string;
    refreshFrequency!: RefreshFrequency;
    reportLanguage?: string;
    startDate!: Date;
    status!: ReportStatus;
}

export class ConvReasonReportSegmentDef extends Metadata {
    convReasonReportDefinition!: string;
    conversationChannel?: string;
    filterCriteria?: string;
    filterCriteriaAsJson?: string;
    name!: string;
    segmentObject?: string;
    segmentType!: SegmentationType;
    targetField?: string;
    targetObject!: string;
}

export class ConversationChannelDefinition extends Metadata {
    connectedAppOauthLink?: string;
    connectedAppType?: CustomChannelConnectedAppType;
    consentOwner?: ConsentOwner;
    conversationVendorInfo?: string;
    customEventPayloadField!: string;
    customEventTypeField?: string;
    customIcon?: string;
    customPlatformEvent!: string;
    customerConnectedAppOauthLink?: string;
    developerName!: string;
    isInboundReceiptsEnabled?: boolean;
    isTypingIndicatorDisabled?: boolean;
    masterLabel!: string;
    routingOwner?: RoutingOwner;
    supportsCustomChannelParameters?: boolean;
    supportsDoubleOptInConsent?: boolean;
    supportsExplicitConsent?: boolean;
    supportsImplicitConsent?: boolean;
    supportsIsoCountryCode?: boolean;
    supportsKeywords?: boolean;
}

export class ConversationMessageDefinition extends Metadata {
    constants!: ConversationMessageConstant[];
    contentCategory?: ConversationMessageContentCategory;
    description?: string;
    label!: string;
    language?: string;
    messageHandlers!: ConversationMessageHandler[];
    messageLayouts!: ConversationMessageLayout[];
    optionsParameter?: ConversationMessageOptionsParameter;
    parameters!: ConversationMessageParameter[];
    type!: ConversationMessageDefinitionType;
}

export class ConversationVendorInfo extends Metadata {
    agentSSOSupported?: boolean;
    awsAccountKey?: string;
    awsRootEmail?: string;
    awsTenantVersion?: number;
    bridgeComponent?: string;
    clientAuthMode?: ClientAuthMode;
    connectorUrl?: string;
    customConfig?: string;
    customIcon?: string;
    customLoginUrl?: string;
    developerName!: string;
    einsteinConversationInsightsSupported?: boolean;
    integrationClass?: string;
    integrationClassName?: string;
    intelligenceSupported?: boolean;
    isTaxCompliant?: boolean;
    keyProvisioningSupported?: boolean;
    masterLabel!: string;
    namedCredential?: string;
    namedCredentialSupported?: boolean;
    partnerContactCenterListSupported?: boolean;
    partnerPhoneNumbersSupported?: boolean;
    partnerTransferDestinationsSupported?: boolean;
    queueManagementSupported?: boolean;
    serverAuthMode?: ServerAuthMode;
    telephonySettingsComponent?: string;
    unifiedRoutingSupported?: boolean;
    universalCallRecordingAccessSupported?: boolean;
    userSyncingSupported?: boolean;
    vendorType?: ConversationVendorType;
}

export class ConversationalIntelligenceSettings extends Metadata {
    enableCallCoaching?: boolean;
    enableCallCoachingZoom?: boolean;
    enableCallExplorer?: boolean;
    enableCallSummarization?: boolean;
    enableConversationMining?: boolean;
    enableDiarizationPref?: boolean;
    enableGenerativeConvInsights?: boolean;
    enableManualUpload?: boolean;
    enableOpptyMatching?: boolean;
    enableRealtimeInsights?: boolean;
    enableUnifiedActivities?: boolean;
}

export class CorsWhitelistOrigin extends Metadata {
    urlPattern!: string;
}

export class CspTrustedSite extends Metadata {
    canAccessCamera?: boolean;
    canAccessMicrophone?: boolean;
    context?: CspTrustedSiteContext;
    description?: string;
    endpointUrl!: string;
    isActive!: boolean;
    isApplicableToConnectSrc?: boolean;
    isApplicableToFontSrc?: boolean;
    isApplicableToFrameSrc?: boolean;
    isApplicableToImgSrc?: boolean;
    isApplicableToMediaSrc?: boolean;
    isApplicableToStyleSrc?: boolean;
    mobileExtension?: string;
}

export class CurrencySettings extends Metadata {
    enableCurrencyEffectiveDates?: boolean;
    enableCurrencySymbolWithMultiCurrency?: boolean;
    enableMultiCurrency?: boolean;
    isMultiCurrencyActivationAllowed?: boolean;
    isParenCurrencyConvDisabled?: boolean;
}

export class CustomAddressFieldSettings extends Metadata {
    enableCustomAddressField?: boolean;
}

export class CustomApplication extends Metadata {
    actionOverrides!: AppActionOverride[];
    brand?: AppBrand;
    consoleConfig?: ServiceCloudConsoleConfig;
    defaultLandingTab?: string;
    description?: string;
    formFactors!: FormFactor[];
    isNavAutoTempTabsDisabled?: boolean;
    isNavPersonalizationDisabled?: boolean;
    isNavTabPersistenceDisabled?: boolean;
    isOmniPinnedViewEnabled?: boolean;
    isServiceCloudConsole?: boolean;
    label?: string;
    logo?: string;
    navType?: NavType;
    preferences?: AppPreferences;
    profileActionOverrides!: AppProfileActionOverride[];
    setupExperience?: string;
    subscriberTabs!: string[];
    tabSetType?: string;
    tabs!: string[];
    uiType?: UiType;
    utilityBar?: string;
    workspaceConfig?: AppWorkspaceConfig;
}

export class AppActionOverride extends ActionOverride {
    pageOrSobjectType!: string;
}

export class CustomShortcut extends DefaultShortcut {
    description?: string;
    eventName!: string;
}

export class AppProfileActionOverride extends ProfileActionOverride {
    profile!: string;
}

export class CustomApplicationComponent extends Metadata {
    buttonIconUrl?: string;
    buttonStyle?: string;
    buttonText?: string;
    buttonWidth?: number;
    height?: number;
    isHeightFixed!: boolean;
    isHidden!: boolean;
    isWidthFixed!: boolean;
    visualforcePage!: string;
    width?: number;
}

export class CustomDataType extends Metadata {
    customDataTypeComponents!: CustomDataTypeComponent[];
    description?: string;
    displayFormula?: string;
    editComponentsOnSeparateLines?: boolean;
    label!: string;
    rightAligned?: boolean;
    supportComponentsInReports?: boolean;
}

export class CustomFeedFilter extends Metadata {
    criteria!: FeedFilterCriterion[];
    description?: string;
    isProtected?: boolean;
    label!: string;
}

export class CustomField extends Metadata {
    businessOwnerGroup?: string;
    businessOwnerUser?: string;
    businessStatus?: string;
    caseSensitive?: boolean;
    complianceGroup?: string;
    customDataType?: string;
    defaultValue?: string;
    deleteConstraint?: DeleteConstraint;
    deprecated?: boolean;
    description?: string;
    displayFormat?: string;
    displayLocationInDecimal?: boolean;
    elementType?: ElementType;
    encryptionScheme?: EncryptionScheme;
    escapeMarkup?: boolean;
    externalDeveloperName?: string;
    externalId?: boolean;
    fieldManageability?: FieldManageability;
    formula?: string;
    formulaTreatBlanksAs?: TreatBlanksAs;
    inlineHelpText?: string;
    isAIPredictionField?: boolean;
    isConvertLeadDisabled?: boolean;
    isFilteringDisabled?: boolean;
    isNameField?: boolean;
    isSortingDisabled?: boolean;
    label?: string;
    length?: number;
    lookupFilter?: LookupFilter;
    maskChar?: EncryptedFieldMaskChar;
    maskType?: EncryptedFieldMaskType;
    metadataRelationshipControllingField?: string;
    mktDataLakeFieldAttributes?: MktDataLakeFieldAttributes;
    mktDataModelFieldAttributes?: MktDataModelFieldAttributes;
    picklist?: Picklist;
    populateExistingRows?: boolean;
    precision?: number;
    readOnlyProxy?: boolean;
    referenceTargetField?: string;
    referenceTo?: string;
    relationshipLabel?: string;
    relationshipName?: string;
    relationshipOrder?: number;
    reparentableMasterDetail?: boolean;
    required?: boolean;
    restrictedAdminField?: boolean;
    scale?: number;
    securityClassification?: string;
    startingNumber?: number;
    stripMarkup?: boolean;
    summarizedField?: string;
    summaryFilterItems!: FilterItem[];
    summaryForeignKey?: string;
    summaryOperation?: SummaryOperations;
    trackFeedHistory?: boolean;
    trackHistory?: boolean;
    trackTrending?: boolean;
    translateData?: boolean;
    type?: FieldType;
    unique?: boolean;
    valueSet?: ValueSet;
    visibleLines?: number;
    writeRequiresMasterRead?: boolean;
}

export class CustomValue extends Metadata {
    color?: string;
    default!: boolean;
    description?: string;
    isActive?: boolean;
    label?: string;
}

export class StandardValue extends CustomValue {
    allowEmail?: boolean;
    closed?: boolean;
    converted?: boolean;
    cssExposed?: boolean;
    forecastCategory?: ForecastCategories;
    groupingString?: string;
    highPriority?: boolean;
    probability?: number;
    reverseRole?: string;
    reviewed?: boolean;
    won?: boolean;
}

export class CustomHelpMenuSection extends Metadata {
    customHelpMenuItems!: CustomHelpMenuItem[];
    masterLabel!: string;
}

export class CustomIndex extends Metadata {
    allowNullValues?: boolean;
    booleanIndexedValue?: boolean;
}

export class CustomLabel extends Metadata {
    categories?: string;
    language!: string;
    protected!: boolean;
    shortDescription!: string;
    value!: string;
}

export class CustomLabels extends Metadata {
    labels!: CustomLabel[];
}

export class CustomMetadata extends Metadata {
    description?: string;
    label?: string;
    protected?: boolean;
    values!: CustomMetadataValue[];
}

export class CustomNotificationType extends Metadata {
    customNotifTypeName!: string;
    description?: string;
    desktop!: boolean;
    masterLabel!: string;
    mobile!: boolean;
    slack?: boolean;
}

export class CustomObject extends Metadata {
    actionOverrides!: ActionOverride[];
    allowInChatterGroups?: boolean;
    articleTypeChannelDisplay?: ArticleTypeChannelDisplay;
    businessProcesses!: BusinessProcess[];
    compactLayoutAssignment?: string;
    compactLayouts!: CompactLayout[];
    customHelp?: string;
    customHelpPage?: string;
    customSettingsType?: CustomSettingsType;
    deploymentStatus?: DeploymentStatus;
    deprecated?: boolean;
    description?: string;
    enableActivities?: boolean;
    enableBulkApi?: boolean;
    enableDataTranslation?: boolean;
    enableDivisions?: boolean;
    enableEnhancedLookup?: boolean;
    enableFeeds?: boolean;
    enableHistory?: boolean;
    enableLicensing?: boolean;
    enablePublishStatusTracking?: boolean;
    enableReports?: boolean;
    enableSearch?: boolean;
    enableSharing?: boolean;
    enableStreamingApi?: boolean;
    eventType?: PlatformEventType;
    externalDataSource?: string;
    externalIndexAvailable?: boolean;
    externalName?: string;
    externalRepository?: string;
    externalSharingModel?: SharingModel;
    fieldSets!: FieldSet[];
    fields!: CustomField[];
    gender?: Gender;
    historyRetentionPolicy?: HistoryRetentionPolicy;
    household?: boolean;
    indexes!: Index[];
    label?: string;
    listViews!: ListView[];
    mktDataLakeAttributes?: MktDataLakeAttributes;
    mktDataModelAttributes?: MktDataModelAttributes;
    nameField?: CustomField;
    pluralLabel?: string;
    profileSearchLayouts!: ProfileSearchLayouts[];
    publishBehavior?: PlatformEventPublishBehavior;
    recordTypeTrackFeedHistory?: boolean;
    recordTypeTrackHistory?: boolean;
    recordTypes!: RecordType[];
    searchLayouts?: SearchLayouts;
    sharingModel?: SharingModel;
    sharingReasons!: SharingReason[];
    sharingRecalculations!: SharingRecalculation[];
    startsWith?: StartsWith;
    validationRules!: ValidationRule[];
    visibility?: SetupObjectVisibility;
    webLinks!: WebLink[];
}

export class FieldSet extends Metadata {
    availableFields!: FieldSetItem[];
    description!: string;
    displayedFields!: FieldSetItem[];
    label!: string;
}

export class Index extends Metadata {
    fields!: IndexField[];
    label!: string;
    minNumRequiredIndexedFields?: number;
    type?: string;
}

export class ListView extends Metadata {
    booleanFilter?: string;
    columns!: string[];
    division?: string;
    filterScope!: FilterScope;
    filters!: ListViewFilter[];
    label!: string;
    language?: Language;
    queue?: string;
    sharedTo?: SharedTo;
}

export class RecordType extends Metadata {
    active!: boolean;
    businessProcess?: string;
    compactLayoutAssignment?: string;
    description?: string;
    label!: string;
    picklistValues!: RecordTypePicklistValue[];
}

export class SharingReason extends Metadata {
    label!: string;
}

export class ValidationRule extends Metadata {
    active!: boolean;
    description?: string;
    errorConditionFormula!: string;
    errorDisplayField?: string;
    errorMessage!: string;
    shouldEvaluateOnClient?: boolean;
}

export class WebLink extends Metadata {
    availability!: WebLinkAvailability;
    description?: string;
    displayType!: WebLinkDisplayType;
    encodingKey?: Encoding;
    hasMenubar?: boolean;
    hasScrollbars?: boolean;
    hasToolbar?: boolean;
    height?: number;
    isResizable?: boolean;
    linkType!: WebLinkType;
    masterLabel?: string;
    openType!: WebLinkWindowType;
    page?: string;
    position?: WebLinkPosition;
    protected!: boolean;
    requireRowSelection?: boolean;
    scontrol?: string;
    showsLocation?: boolean;
    showsStatus?: boolean;
    url?: string;
    width?: number;
}

export class CustomObjectTranslation extends Metadata {
    caseValues!: ObjectNameCaseValue[];
    fieldSets!: FieldSetTranslation[];
    fields!: CustomFieldTranslation[];
    gender?: Gender;
    layouts!: LayoutTranslation[];
    nameFieldLabel?: string;
    quickActions!: QuickActionTranslation[];
    recordTypes!: RecordTypeTranslation[];
    sharingReasons!: SharingReasonTranslation[];
    standardFields!: StandardFieldTranslation[];
    startsWith?: StartsWith;
    validationRules!: ValidationRuleTranslation[];
    webLinks!: WebLinkTranslation[];
    workflowTasks!: WorkflowTaskTranslation[];
}

export class CustomPageWebLink extends Metadata {
    availability!: WebLinkAvailability;
    description?: string;
    displayType!: WebLinkDisplayType;
    encodingKey?: Encoding;
    hasMenubar?: boolean;
    hasScrollbars?: boolean;
    hasToolbar?: boolean;
    height?: number;
    isResizable?: boolean;
    linkType!: WebLinkType;
    masterLabel?: string;
    openType!: WebLinkWindowType;
    page?: string;
    position?: WebLinkPosition;
    protected!: boolean;
    requireRowSelection?: boolean;
    scontrol?: string;
    showsLocation?: boolean;
    showsStatus?: boolean;
    url?: string;
    width?: number;
}

export class CustomPermission extends Metadata {
    connectedApp?: string;
    description?: string;
    externalClientApplication?: string;
    isLicensed!: boolean;
    label!: string;
    requiredPermission!: CustomPermissionDependencyRequired[];
}

export class CustomSite extends Metadata {
    active!: boolean;
    allowGuestPaymentsApi?: boolean;
    allowHomePage!: boolean;
    allowStandardAnswersPages?: boolean;
    allowStandardIdeasPages!: boolean;
    allowStandardLookups!: boolean;
    allowStandardPortalPages!: boolean;
    allowStandardSearch!: boolean;
    analyticsTrackingCode?: string;
    authorizationRequiredPage?: string;
    bandwidthExceededPage?: string;
    browserXssProtection!: boolean;
    cachePublicVisualforcePagesInProxyServers?: boolean;
    changePasswordPage?: string;
    chatterAnswersForgotPasswordConfirmPage?: string;
    chatterAnswersForgotPasswordPage?: string;
    chatterAnswersHelpPage?: string;
    chatterAnswersLoginPage?: string;
    chatterAnswersRegistrationPage?: string;
    clickjackProtectionLevel!: SiteClickjackProtectionLevel;
    contentSniffingProtection!: boolean;
    customWebAddresses!: SiteWebAddress[];
    description?: string;
    enableAuraRequests?: boolean;
    favoriteIcon?: string;
    fileNotFoundPage?: string;
    forgotPasswordPage?: string;
    genericErrorPage?: string;
    guestProfile?: string;
    inMaintenancePage?: string;
    inactiveIndexPage?: string;
    indexPage!: string;
    masterLabel!: string;
    myProfilePage?: string;
    portal?: string;
    redirectToCustomDomain?: boolean;
    referrerPolicyOriginWhenCrossOrigin!: boolean;
    robotsTxtPage?: string;
    selfRegPage?: string;
    serverIsDown?: string;
    siteAdmin?: string;
    siteGuestRecordDefaultOwner?: string;
    siteIframeWhiteListUrls!: SiteIframeWhiteListUrl[];
    siteRedirectMappings!: SiteRedirectMapping[];
    siteTemplate?: string;
    siteType!: SiteType;
    subdomain?: string;
    urlPathPrefix?: string;
}

export class CustomTab extends Metadata {
    actionOverrides!: ActionOverride[];
    auraComponent?: string;
    customObject?: boolean;
    description?: string;
    flexiPage?: string;
    frameHeight?: number;
    hasSidebar?: boolean;
    icon?: string;
    label?: string;
    lwcComponent?: string;
    motif?: string;
    page?: string;
    scontrol?: string;
    splashPageLink?: string;
    url?: string;
    urlEncodingKey?: Encoding;
}

export class CustomerDataPlatformSettings extends Metadata {
    enableCustomerDataPlatform?: boolean;
}

export class CustomizablePropensityScoringSettings extends Metadata {
    enableCpsPref?: boolean;
}

export class Dashboard extends Metadata {
    backgroundEndColor!: string;
    backgroundFadeDirection!: ChartBackgroundDirection;
    backgroundStartColor!: string;
    chartTheme?: ChartTheme;
    colorPalette?: ChartColorPalettes;
    dashboardChartTheme?: ChartTheme;
    dashboardColorPalette?: ChartColorPalettes;
    dashboardFilters!: DashboardFilter[];
    dashboardGridLayout?: DashboardGridLayout;
    dashboardResultRefreshedDate?: string;
    dashboardResultRunningUser?: string;
    dashboardType?: DashboardType;
    description?: string;
    folderName?: string;
    isGridLayout?: boolean;
    leftSection?: DashboardComponentSection;
    middleSection?: DashboardComponentSection;
    numSubscriptions?: number;
    owner?: string;
    rightSection?: DashboardComponentSection;
    runningUser?: string;
    textColor!: string;
    title!: string;
    titleColor!: string;
    titleSize!: number;
}

export class DataCalcInsightTemplate extends Metadata {
    builderExpression!: string;
    creationType?: CalculatedInsightCreationType;
    dataspaceName!: string;
    dataspacePrefix!: string;
    definitionType!: CalculatedInsightDefinitionType;
    description!: string;
    developerName!: string;
    expression!: string;
    masterLabel!: string;
    scheduleEndDate?: Date;
    scheduleInterval?: string;
    scheduleStartDateTime?: Date;
    sourceObjectDevName?: string;
    templateVersion?: number;
}

export class DataCategoryGroup extends Metadata {
    active!: boolean;
    dataCategory!: DataCategory;
    description?: string;
    label!: string;
    objectUsage?: ObjectUsage;
}

export class DataConnectionParamTmpl extends Metadata {
    paramName!: string;
    value!: string;
}

export class DataConnectorIngestApi extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
    sourceName!: string;
}

export class DataConnectorS3 extends Metadata {
    delimiter?: string;
    fileNameWildcard?: string;
    fileType?: string;
    importFromDirectory?: string;
    masterLabel!: string;
    s3AccessKey?: string;
    s3BucketName!: string;
    s3SecretKey?: string;
}

export class DataDotComSettings extends Metadata {
    enableAccountExportButtonOff?: boolean;
    enableAccountImportButtonOff?: boolean;
    enableAllowDupeContactFromLead?: boolean;
    enableAllowDupeLeadFromContact?: boolean;
    enableContactExportButtonOff?: boolean;
    enableContactImportButtonOff?: boolean;
    enableDDCSocialKeyEnabled?: boolean;
    enableDataDotComCleanEnabled?: boolean;
    enableDataDotComOptOutsEnabled?: boolean;
    enableDatacloudAPIEnabled?: boolean;
}

export class DataKitObjectDependency extends Metadata {
    dataPackageKitDef!: string;
    developerName!: string;
    masterLabel!: string;
    sourceObject!: string;
    sourceObjectType!: string;
    targetObject!: string;
}

export class DataKitObjectTemplate extends Metadata {
    developerName!: string;
    entityPayload?: string;
    masterLabel!: string;
    parentDataPackageKitDefinitionName!: string;
    sourceObject?: string;
    sourceObjectType!: string;
    templateVersion?: number;
}

export class DataModelTaxonomy extends Metadata {
    creationType?: DefinitionCreationType;
    dataModelType!: DataModelType;
    dataObjectCategories!: DataObjectCategory[];
    isProtected?: boolean;
    masterLabel!: string;
    supplier!: string;
    updateDate!: Date;
    versionNbr!: number;
}

export class DataObjectCategory extends Metadata {
    definitionCreationType?: DefinitionCreationType;
    masterLabel!: string;
}

export class DataObjectSearchIndexConf extends Metadata {
    application!: string;
    channel?: string;
    masterLabel!: string;
    nameFieldReference!: string;
    objectReference!: string;
    retriever?: string;
    searchIndex!: string;
}

export class DataPackageKitDefinition extends Metadata {
    dataKitSource?: string;
    dataKitType?: string;
    dataSpaceDefinitionDevName?: string;
    deploymentOrder?: string;
    description?: string;
    developerName!: string;
    isDeployed?: boolean;
    isEnabled?: boolean;
    masterLabel!: string;
    versionNumber?: number;
}

export class DataPackageKitObject extends Metadata {
    masterLabel!: string;
    parentDataPackageKitDefinitionName!: string;
    referenceObjectName!: string;
    referenceObjectType!: string;
}

export class DataPlatform extends Metadata {
    dataConnectorType!: string;
    dataPlatDataSetBundles!: DataPlatDataSetBundle[];
    description?: string;
    forExportIntOrgName?: string;
    forImportIntOrgName?: string;
    isConfiguredByAdmin?: boolean;
    isProtected?: boolean;
    largeIconUri?: string;
    masterLabel!: string;
    smallIconUri?: string;
}

export class DataSource extends Metadata {
    masterLabel!: string;
    prefix!: string;
}

export class DataSourceBundleDefinition extends Metadata {
    bundleVersion?: number;
    dataPlatform!: string;
    description?: string;
    icon?: string;
    isMultiDeploymentSupported?: boolean;
    masterLabel!: string;
}

export class DataSourceField extends Metadata {
    datatype!: string;
    dateFormat?: string;
    definitionCreationType?: DefinitionCreationType;
    externalDataType?: string;
    externalName!: string;
    fieldFormula?: string;
    isDataRequired?: boolean;
    isEventDate?: boolean;
    isFormula?: boolean;
    isRecordModified?: boolean;
    keyQualifierName?: string;
    length?: number;
    masterLabel!: string;
    precision?: number;
    primaryIndexOrder?: number;
    scale?: number;
    sequence!: number;
    srcKeyQualifier?: string;
    usageTag?: UsageTag;
    versionNumber!: number;
}

export class DataSourceObject extends Metadata {
    accelerationEnabled?: AccelerationEnabled;
    additionalDLOInfoJson?: string;
    creationType?: string;
    dataConnection?: string;
    dataSource!: string;
    dataSourceFields!: DataSourceField[];
    dmoDeveloperName?: string;
    dmoLabel?: string;
    externalDatabaseName?: string;
    externalObjectName?: string;
    externalRecordIdentifier?: string;
    externalSchemaName?: string;
    masterLabel!: string;
    objectCategory?: string;
    objectType?: DataObjectType;
    sourceObject?: string;
    storageType?: StorageType;
    templateVersion?: number;
}

export class DataSourceTenant extends Metadata {
    externalRecordId!: string;
    masterLabel!: string;
}

export class DataSrcDataModelFieldMap extends Metadata {
    filterApplied?: boolean;
    filterOperationType?: string;
    filterValue?: string;
    masterLabel!: string;
    sourceField!: string;
    targetField!: string;
    templateVersion?: number;
    versionNumber!: number;
}

export class DataStreamDefinition extends Metadata {
    areHeadersIncludedInFile?: boolean;
    bulkIngest?: boolean;
    creationType!: DefinitionCreationType;
    dataConnector!: string;
    dataConnectorType?: string;
    dataExtensionIdentifier?: string;
    dataExtractField?: string;
    dataExtractMethods?: DataImportDataExtractMethods;
    dataPlatDataSetBundle?: string;
    dataPlatformDataSetItemName?: string;
    dataSource!: string;
    description?: string;
    fileNameWildcard?: string;
    internalOrganization?: string;
    isLimitedToNewFiles?: boolean;
    isMissingFileFailure?: boolean;
    masterLabel!: string;
    mktDataLakeObject!: string;
    mktDataTranObject?: string;
    parameters!: MktDataConnectionSrcParam[];
}

export class MktDataConnectionSrcParam extends Metadata {
    paramName!: string;
    value!: string;
}

export class DataStreamTemplate extends Metadata {
    dataConnectionSourceParameters!: DataConnectionParamTmpl[];
    dataSourceBundleDefinition!: string;
    dataSourceObject!: string;
    filterCriteria?: string;
    masterLabel!: string;
    objectCategory!: string;
    refreshDayOfMonth?: number;
    refreshDayOfWeek?: number;
    refreshFrequency?: DataImportRefreshFrequency;
    refreshHours?: string;
    refreshMode?: DataImportRefreshMode;
    refreshStartDate?: Date;
    sourceObjectName?: string;
    streamType?: StreamType;
    streamingAppDataConnectorType?: StreamingAppDataConnectorType;
    templateVersion?: number;
}

export class DataspaceScope extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    metadataGroups!: DataspaceScopeSchemaAccess[];
}

export class DecisionMatrixDefinition extends Metadata {
    description?: string;
    groupKey?: string;
    label!: string;
    processType?: ExpsSetProcessType;
    subGroupKey?: string;
    type?: DecisionMatrixType;
    versions!: DecisionMatrixDefinitionVersion[];
}

export class DecisionMatrixDefinitionVersion extends Metadata {
    columns!: DecisionMatrixDefinitionVersionColumn[];
    decisionMatrixDefinition?: string;
    endDate?: Date;
    groupKeyValue?: string;
    label!: string;
    startDate!: Date;
    status!: DecisionMatrixDefStatus;
    subGroupKeyValue?: string;
    versionNumber!: number;
}

export class DecisionTable extends Metadata {
    collectOperator?: DecisionTableCollectOperator;
    conditionCriteria?: string;
    conditionType?: DecisionTableConditionType;
    dataSourceType?: DecisionTableDataSourceType;
    decisionTableParameters!: DecisionTableParameter[];
    decisionTableSourceCriterias!: DecisionTableSourceCriteria[];
    description?: string;
    doesConsiderNullValue?: boolean;
    executionType?: DecisionTableExecutionType;
    filterResultBy?: DecisionTableHitPolicy;
    hasIncrementalSyncFailed?: boolean;
    isIncrementalSyncEnabled?: boolean;
    lastIncrementalSyncDate?: string;
    lastSyncDate?: string;
    refreshFailureReason?: string;
    refreshStatus?: DecisionTableRefreshStatus;
    setupName!: string;
    sourceConditionLogic?: string;
    sourceObject!: string;
    status!: DecisionTableStatus;
    type?: DecisionTableType;
    uploadStatus?: DecisionTableUploadStatus;
    usageType?: ExpsSetProcessType;
}

export class DecisionTableDatasetLink extends Metadata {
    decisionTableName!: string;
    decisionTblDatasetParameters!: DecisionTblDatasetParameter[];
    description?: string;
    isDefault?: boolean;
    setupName!: string;
    sourceObject?: string;
}

export class PlatformEventSubscriberConfig extends Metadata {
    batchSize?: number;
    isProtected?: boolean;
    masterLabel!: string;
    numPartitions?: number;
    partitionKey?: string;
    platformEventConsumer!: string;
    user?: string;
}

export class FtestTopLevelWithDeclMd1 extends Metadata {
    bitVectorFieldRound?: boolean;
    bitVectorFieldSquare?: boolean;
    bitVectorFieldTriangle?: boolean;
    booleanField?: boolean;
    dateField?: Date;
    dateTimeField?: Date;
    doubleField?: number;
    emailField?: string;
    ftestDetailWithDeclMd2!: FtestDetailWithDeclMd2[];
    integerField!: number;
    isProtected?: boolean;
    masterLabel!: string;
    overriddenFieldName?: string;
    staticEnumField?: FTestTopLevelSelection;
    typeOneItems!: FtestDetailWithDeclMd1[];
}

export class FtestTopLevelWithDeclMd3 extends Metadata {
    isProtected?: boolean;
    lookupThatCameBefore?: string;
    masterLabel!: string;
}

export class FtestTopLevelWithCrud extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
    textField?: string;
}

export class SchedulingObjective extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
    schedulingCategory!: SchedulingCategory;
    schedulingObjectiveParameters!: SchedulingObjectiveParameter[];
    schedulingObjectiveType!: SchedulingObjectiveType;
}

export class FtestTopLevelWithDeclMd2 extends Metadata {
    enumOrIdField?: string;
    isProtected?: boolean;
    lookupField?: string;
    masterLabel!: string;
    onOrOffField!: FTestOnOffSelection;
    season?: FTestSeasonSelection;
    someUser?: string;
    staticResourceLookup?: string;
    stripEnumOrIdSuffix?: string;
    textField?: string;
    urlField?: string;
}

export class PipelineInspMetricConfig extends Metadata {
    isCumulative!: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    metric!: PipelineInspectionMetric;
}

export class VirtualVisitConfig extends Metadata {
    comprehendServiceType?: VirtualVisitComprehendServiceType;
    experienceCloudSiteUrl?: string;
    externalMsgServiceIdentifier?: string;
    externalRoleIdentifier?: string;
    externalUserIdentifier?: string;
    isProtected?: boolean;
    masterLabel!: string;
    messagingRegion?: string;
    namedCredential?: string;
    storageBucketName?: string;
    usageType?: VirtualVisitUsageType;
    videoCallApptTypeValue?: string;
    videoControlRegion?: string;
    visitRegion?: VirtualVisitVisitRegion;
}

export class MobileSecurityAssignment extends Metadata {
    connectedApplication?: string;
    isProtected?: boolean;
    masterLabel!: string;
    profile?: string;
}

export class MobileSecurityPolicy extends Metadata {
    effectiveDate?: Date;
    isEnabled!: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    mobilePlatform?: MobileSecurityMobilePlatform;
    mobileSecurityAssignment?: string;
    ruleValue!: string;
    ruleValueType!: MobileSecurityPolicyRuleValueType;
    severityLevel!: MobileSecurityPolicySeverityLevel;
    type!: MobileSecurityPolicyType;
}

export class LearningAchievementConfig extends Metadata {
    description?: string;
    iconName?: string;
    isProtected?: boolean;
    learningAchievementType!: LearningAchievementType;
    learningAchvRecordType!: string;
    masterLabel!: string;
}

export class RecordAlertDataSource extends Metadata {
    apexClass?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    type!: RecordAlertDataSourceType;
}

export class DocumentCategory extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class RecAlrtDataSrcExpSetDef extends Metadata {
    expressionSetDefinition!: string;
    expressionSetObject!: string;
    isActive!: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    recordAlertDataSource!: string;
}

export class EmployeeDataSyncProfile extends Metadata {
    description?: string;
    employeeDataSyncField!: EmployeeDataSyncField[];
    isActive!: boolean;
    isProtected?: boolean;
    masterLabel!: string;
}

export class RegisteredExternalService extends Metadata {
    configUrl?: string;
    description?: string;
    documentationUrl?: string;
    extensionPointName?: ExtensionPointName;
    externalServiceProvider!: string;
    externalServiceProviderType!: RegistryProviderType;
    iconUri?: string;
    isApplication?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
}

export class CustomFieldDisplay extends Metadata {
    displayType!: CustomFieldDisplayType;
    fieldApiName!: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class AccountingFieldMapping extends Metadata {
    accountingModelConfig!: string;
    isForAllocationType?: boolean;
    isForPaymentType?: boolean;
    isForTransactionType?: boolean;
    isProtected?: boolean;
    mappingBehavior!: MappingBehaviorType;
    masterLabel!: string;
    sourceField?: string;
    targetField!: string;
}

export class RecordAlertTemplate extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    recordAlertCategory?: string;
    subject?: string;
}

export class RelatedRecordAccessDef extends Metadata {
    description?: string;
    isProtected?: boolean;
    jctObjectCstmFilterExps?: string;
    jctObjectFilterLogic?: RRADJctObjFilterLogic;
    junctionObject?: string;
    masterLabel!: string;
    relatedRecordAccessFltr!: RelatedRecordAccessFltr[];
    relatedRecordAccessMap!: RelatedRecordAccessMap[];
    shareTo?: RelatedRecordAccessDefShareTo;
    sourceObject!: string;
    sourceObjectCstmFilterExps?: string;
    sourceObjectFilterLogic?: RRADSourceObjFilterLogic;
    status!: RelatedRecordAccessDefStatus;
    targetObject!: string;
    targetObjectCstmFilterExps?: string;
    targetObjectFilterLogic?: RRADTargetObjFilterLogic;
}

export class MobSecurityCertPinConfig extends Metadata {
    certificateHash!: string;
    domainName!: string;
    isEnabled!: boolean;
    isProtected?: boolean;
    isSubdomainIncluded!: boolean;
    masterLabel!: string;
    mobilePlatform?: MobileSecurityMobilePlatform;
    mobileSecurityAssignment?: string;
    severityLevel!: MobileSecurityPolicySeverityLevel;
    type!: MobileSecurityCertPinType;
}

export class SlackFeatureSettings extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
}

export class ActionableListDefinition extends Metadata {
    actionableListDatasetColumns!: ActionableListDatasetColumn[];
    actionableListMemberStatuses!: ActionableListMemberStatus[];
    batchCalcJobDefinition?: string;
    datasetName?: string;
    edgeMart?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    objectName!: string;
    sourceType?: ActionableListSourceType;
    type?: ActionableListType;
}

export class CareProviderSearchConfig extends Metadata {
    isActive?: boolean;
    isProtected?: boolean;
    mappedObject!: ProviderSearchObjectMapping;
    masterLabel!: string;
    sourceField?: string;
    targetField?: string;
}

export class CareSystemFieldMapping extends Metadata {
    externalIdField?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    role!: SourceSystemFieldRole;
    sourceSystem?: string;
    targetObject?: string;
}

export class CareLimitType extends Metadata {
    isProtected?: boolean;
    limitType?: string;
    masterLabel!: string;
    metricType?: CareLimitTypeMetricType;
}

export class AssessmentConfiguration extends Metadata {
    configuration!: AssessmentConfigurationOption;
    isProtected?: boolean;
    masterLabel!: string;
    resolution!: string;
    type!: AssessmentType;
}

export class SchedulingRule extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
    schedulingCategory!: SchedulingCategory;
    schedulingRuleParameters!: SchedulingRuleParameter[];
    schedulingRuleType!: SchedulingRuleType;
}

export class CareProviderAfflRoleConfig extends Metadata {
    affiliationType?: CareProviderAfflType;
    isProtected?: boolean;
    masterLabel!: string;
    providerRole?: string;
}

export class OpptStageDescription extends Metadata {
    description!: string;
    isProtected?: boolean;
    masterLabel!: string;
    opportunityStageIdentifier!: string;
}

export class DatasetImportRequest extends Metadata {
    asyncApiJob?: string;
    dataConnector?: string;
    dataFile?: string;
    dataPrepRecipe?: string;
    isProtected?: boolean;
    masterLabel!: string;
    user!: string;
}

export class PortalDelegablePermissionSet extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
    permissionSet!: string;
    profile!: string;
}

export class RelatedRecordAssocCriteria extends Metadata {
    associationHandlerApexClass?: string;
    associationType!: AssociationType;
    description?: string;
    eventType!: AssociationEventType;
    isProtected?: boolean;
    masterLabel!: string;
    preCondition!: string;
    referenceObject!: string;
    selectedOwnerField?: string;
    status!: AssociationStatusType;
}

export class DocumentCategoryDocumentType extends Metadata {
    documentCategory!: string;
    documentType!: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class ShiftSegmentType extends Metadata {
    adherenceThreshold!: number;
    category!: ShiftSegmentTypeCategory;
    color?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    servicePresenceStatus?: string;
}

export class ProductConfiguratorSettings extends Metadata {
    enableProductConfigurator?: boolean;
}

export class DataImportManagementSettings extends Metadata {
    enableDataConnectorHubspot?: boolean;
    enableEasyImport?: boolean;
}

export class WorkforceEngagementSettings extends Metadata {
    enableHistoricalAdherence?: boolean;
    enableIndividualAdherence?: boolean;
    enableIntradayManagement?: boolean;
    enableMachineLearningForecasting?: boolean;
    enableRealTimeAdherence?: boolean;
    enableWorkforceEngagement?: boolean;
    enableWorkforceEngagementConfiguration?: boolean;
}

export class ClaimMgmtFoundationEnabledSettings extends Metadata {
    enableWarrantyClaimMgmt?: boolean;
}

export class EinsteinCopilotSettings extends Metadata {
    enableEinsteinGptCopilot?: boolean;
}

export class FTestSettings extends Metadata {
    enableTestPref?: boolean;
}

export class MediaAdSalesSettings extends Metadata {
    enableMediaAdSales?: boolean;
}

export class IndustriesPricingSettings extends Metadata {
    enableDebugPriceLogs?: boolean;
    enableHighAvailability?: boolean;
    enableLowestPriceCompliance?: boolean;
    enablePricingWaterfall?: boolean;
    enablePricingWaterfallPersistence?: boolean;
    enableSalesforcePricing?: boolean;
}

export class BranchManagementSettings extends Metadata {
    associateAccountWithBranch?: boolean;
}

export class DynamicFormsSettings extends Metadata {
    enableFormsOnMobile?: boolean;
}

export class CodeBuilderSettings extends Metadata {
    enableCodeBuilder?: boolean;
}

export class IndustriesContextSettings extends Metadata {
    enableContextDefinitions?: boolean;
}

export class IndustriesLsCommercialSettings extends Metadata {
    enableLsPtntSuptPgmGenAIPref?: boolean;
}

export class IncludeEstTaxInQuoteCPQSettings extends Metadata {
    enableQuoteEstimatedTaxCPQ?: boolean;
}

export class ConversationServiceIntegrationSettings extends Metadata {
    enableConvoCatchUpForAgents?: boolean;
    enableConvoCatchUpForSupervisors?: boolean;
}

export class EinsteinAISettings extends Metadata {
    enableAIFeedbackWithDC?: boolean;
    enableAITrustInputToxicityDetection?: boolean;
    enableAITrustPromptInjectionDetection?: boolean;
    enablePBHideScopedNotif?: boolean;
    enablePBPromptPerformanceMetrics?: boolean;
    enableTrustPIIMasking?: boolean;
}

export class IndustriesGamificationSettings extends Metadata {
    enableGamification?: boolean;
}

export class PlatformEventSettings extends Metadata {
    enableEnhancedUsageMetrics?: boolean;
}

export class AssociationEngineSettings extends Metadata {
    enableAssociationEngine?: boolean;
}

export class IndustriesUsageSettings extends Metadata {
    enableUsage?: boolean;
}

export class OrgSettings extends Metadata {
    enableCustomerSuccessPortal?: boolean;
    enableIncludeContractStatus?: boolean;
    enableMakeDeploymentsMandatory?: boolean;
    enableManageSelfServiceUsers?: boolean;
    enableOrgFeedSentimentAnalysis?: boolean;
    enableRADeploymentAttributeOnly?: boolean;
    enableResetDivisionOnLogin?: boolean;
}

export class AgentforceForDevelopersSettings extends Metadata {
    agentforceForDevelopersOptOut?: boolean;
}

export class IncludeEstTaxInQuoteSettings extends Metadata {
    enableQuoteEstimatedTax?: boolean;
}

export class ReferralMarketingSettings extends Metadata {
    enableMarketingCloudIntegration?: boolean;
}

export class AccountPlanSettings extends Metadata {
    enableAccountPlan?: boolean;
}

export class PaymentsManagementEnabledSettings extends Metadata {
    paymentsManagementEnabled?: boolean;
}

export class EinsteinGptSettings extends Metadata {
    enableAIProviderAWSBedrock?: boolean;
    enableAIProviderAzureOpenAI?: boolean;
    enableAIProviderGoogleVertex?: boolean;
    enableAIProviderOpenAI?: boolean;
    enableEinsteinGPTDeployPromptTemplatesAsActive?: boolean;
    enableEinsteinGptGlobalLangSupport?: boolean;
    enableEinsteinGptPlatform?: boolean;
}

export class PlatformSlackSettings extends Metadata {
    enableSlackService?: boolean;
    enableSlackServiceAlerts?: boolean;
    slackCapabilitiesEnabled?: boolean;
}

export class RevenueManagementSettings extends Metadata {
    enableAutoAddDerivedAsset?: boolean;
    enableCoreCPQ?: boolean;
    enableDeltaPricing?: boolean;
    enableRampDeal?: boolean;
    enableTransactionProcessor?: boolean;
    groupsEnabled?: boolean;
}

export class KnowledgeGenerationSettings extends Metadata {
    enableKSUsingHybridSearch?: boolean;
    enableKnowledgeGeneration?: boolean;
}

export class DynamicFulfillmentOrchestratorSettings extends Metadata {
    enableDFOFallout?: boolean;
    enableDFOJeopardy?: boolean;
    enableDFOPref?: boolean;
    enableDROFutureDatedTasks?: boolean;
    enableDROInflightRequest?: boolean;
    enableDROTaskSource?: boolean;
}

export class MailMergeSettings extends Metadata {
    enableExtendedMailMerge?: boolean;
    saveMailMergeDocsAsSalesforceDocs?: boolean;
}

export class AccountingSettings extends Metadata {
    enableAccountingSubledger?: boolean;
    enableFinancePeriod?: boolean;
    enablePaymentMethodAdjust?: boolean;
    enableScheduledJob?: boolean;
    enableSkipReversalLogic?: boolean;
}

export class CollectionsDashboardSettings extends Metadata {
    enableCollectionsDashboard?: boolean;
}

export class InvLatePymntRiskCalcSettings extends Metadata {
    enableInvLatePymntRiskCalc?: boolean;
}

export class FTestAccessSettings extends Metadata {
    enableTestPref?: boolean;
}

export class SceGlobalModelOptOutSettings extends Metadata {
    sceGlobalModelOptOut?: boolean;
}

export class SandboxSettings extends Metadata {
    disableSandboxExpirationEmails?: boolean;
}

export class InterestTaggingSettings extends Metadata {
    enableInterestTagging?: boolean;
}

export class IndustriesRatingSettings extends Metadata {
    enableRating?: boolean;
    enableRatingWaterfall?: boolean;
    enableRatingWaterfallPersistence?: boolean;
}

export class EvfSettings extends Metadata {
    enableCopilotAnalytics?: boolean;
}

export class SourceTrackingSettings extends Metadata {
    enableSourceTrackingSandboxes?: boolean;
}

export class DevHubSettings extends Metadata {
    enableDevOpsCenter?: boolean;
    enableDevOpsCenterGA?: boolean;
    enablePackaging2?: boolean;
    enableScratchOrgManagementPref?: boolean;
    enableScratchOrgSnapshotPref?: boolean;
    enableShapeExportPref?: boolean;
}

export class IndustriesLoyaltySettings extends Metadata {
    enableAutomaticMemberTierAssessmentSelection?: boolean;
    enableAutomaticVoucherCodeGeneration?: boolean;
    enableFixedTypeNQPAggregation?: boolean;
    enableLoyaltyApiAccessForExternalSiteUsers?: boolean;
    enableLoyaltyGenerativeAi?: boolean;
    enableLoyaltyRedeemedPointsExpirationInfoPref?: boolean;
    enableLoyaltyRulesVerifyCdpMemberSegment?: boolean;
    enableLoyaltyServiceExcellence?: boolean;
    enableNQPRealTimePointBalance?: boolean;
    enableNegativePointBalance?: boolean;
    enableNonQualifyingPointsConsolidation?: boolean;
    enablePointsLifecycleTracking?: boolean;
    enablePromSetupProcRuleStatusInheritDplymt?: boolean;
    enableQPRealTimePointBalance?: boolean;
    enableSegmentQueryByDataGraph?: boolean;
}

export class Web3Settings extends Metadata {
    enableMultisig?: boolean;
}

export class IndustriesUnifiedPromotionsSettings extends Metadata {
    enableGlobalPromotionsProductCatalogManagement?: boolean;
    enableUnifiedPromotions?: boolean;
}

export class AppAnalyticsSettings extends Metadata {
    enableAppAnalyticsOptOut?: boolean;
    enableSimulationMode?: boolean;
}

export class MapsAndLocationSettings extends Metadata {
    enableAddressAutoComplete?: boolean;
    enableMapsAndLocation?: boolean;
}

export class LargeQuotesandOrdersForRlmSettings extends Metadata {
    enableLargeQuotesandOrdersForRlm?: boolean;
}

export class OnlineSalesSettings extends Metadata {
    enableSubscriptionAppEnrolled?: boolean;
}

export class DelegateGroup extends Metadata {
    customObjects!: string[];
    groups!: string[];
    label!: string;
    loginAccess!: boolean;
    permissionSetGroups!: string[];
    permissionSets!: string[];
    profiles!: string[];
    roles!: string[];
}

export class DeploymentSettings extends Metadata {
    doesSkipAsyncApexValidation?: boolean;
}

export class DgtAssetMgmtProvider extends Metadata {
    icon!: string;
    label!: string;
    masterLabel!: string;
}

export class DgtAssetMgmtPrvdLghtCpnt extends Metadata {
    dgtAssetMgmtProvider!: string;
    lightningComponentBundle?: string;
    masterLabel!: string;
    type!: DgtAssetMgmtPrvdLghtCpntType;
}

export class DigitalExperienceBundle extends Metadata {
    description?: string;
    digitalExperienceFolderShares?: DigitalExperienceFolderShares;
    label!: string;
    modules?: DigitalExperienceModuleCollection;
    spaceResources!: DigitalExperience[];
}

export class MetadataWithContent extends Metadata {
    content?: string;
}

export class AccessControlPolicy extends MetadataWithContent {
    active!: boolean;
    deploymentStatus!: ACPStatus;
    description?: string;
    masterLabel!: string;
    targetEntity!: string;
    version!: number;
}

export class ApexClass extends MetadataWithContent {
    apiVersion!: number;
    packageVersions!: PackageVersion[];
    status!: ApexCodeUnitStatus;
}

export class ApexComponent extends MetadataWithContent {
    apiVersion?: number;
    description?: string;
    label!: string;
    packageVersions!: PackageVersion[];
}

export class ApexPage extends MetadataWithContent {
    apiVersion!: number;
    availableInTouch?: boolean;
    confirmationTokenRequired?: boolean;
    description?: string;
    label!: string;
    packageVersions!: PackageVersion[];
}

export class ApexTrigger extends MetadataWithContent {
    apiVersion!: number;
    packageVersions!: PackageVersion[];
    status!: ApexCodeUnitStatus;
}

export class Certificate extends MetadataWithContent {
    caSigned!: boolean;
    encryptedWithPlatformEncryption?: boolean;
    expirationDate?: Date;
    keySize?: number;
    masterLabel!: string;
    privateKeyExportable?: boolean;
}

export class CodeBundle extends MetadataWithContent {
    apiVersion!: number;
    description?: string;
}

export class ContentAsset extends MetadataWithContent {
    format?: ContentAssetFormat;
    isVisibleByExternalUsers?: boolean;
    language!: string;
    masterLabel!: string;
    originNetwork?: string;
    relationships?: ContentAssetRelationships;
    versions!: ContentAssetVersions;
}

export class DataPipeline extends MetadataWithContent {
    apiVersion!: number;
    label!: string;
    scriptType!: DataPipelineType;
}

export class DataWeaveResource extends MetadataWithContent {
    apiVersion!: number;
    isGlobal?: boolean;
    isProtected?: boolean;
}

export class DiscoveryAIModel extends MetadataWithContent {
    algorithmType!: DiscoveryAlgorithmType;
    classificationThreshold?: number;
    description?: string;
    label!: string;
    modelFields!: DiscoveryModelField[];
    modelRuntimeType!: DiscoveryModelRuntimeType;
    predictedField!: string;
    predictionType!: DiscoveryPredictionType;
    sourceType!: DiscoveryModelSourceType;
    status!: DiscoveryAIModelStatus;
    trainingMetrics?: string;
    transformations!: DiscoveryModelTransform[];
}

export class DiscoveryStory extends MetadataWithContent {
    application!: string;
    autopilot?: DiscoveryStoryAutopilotStatus;
    classificationThreshold?: number;
    label!: string;
    outcome!: DiscoveryStoryOutcome;
    sourceContainer!: string;
    sourceType!: DiscoveryStorySourceType;
    validationContainer?: string;
}

export class Document extends MetadataWithContent {
    description?: string;
    internalUseOnly!: boolean;
    keywords?: string;
    name?: string;
    public!: boolean;
}

export class DocumentTemplate extends MetadataWithContent {
    customClassName?: string;
    defaultFontStyle?: string;
    documentConversionResourceName?: string;
    documentGenerationMechanism?: DocumentGenerationMechanism;
    extractOmniDataTransformName?: string;
    fileExtension?: string;
    hasBatchableSection?: boolean;
    isActive?: boolean;
    isSectionProcessed?: boolean;
    lastEmbeddedTmplSectionKey?: string;
    mapperOmniDataTransformName?: string;
    masterLabel?: string;
    name?: string;
    namespace?: string;
    sectionHeaderFontStyle?: string;
    sectionHeaderFontStyleValue?: string;
    shouldDisplayUnmappedToken?: boolean;
    shouldExtractEmbeddedTmplToken?: boolean;
    status?: DocumentTemplateStatus;
    targetTokenItemObject?: TargetTokenItemObject;
    targetTokenObject?: TargetTokenObject;
    tokenList?: string;
    tokenMappingMethodType?: TokenMappingMethodType;
    tokenMappingType!: TokenMappingType;
    type!: DocumentTemplateType;
    uniqueName?: string;
    usageType?: DocumentTemplateUsageType;
    versionNumber?: string;
    xmlRelationshipMetadata?: string;
}

export class EclairGeoData extends MetadataWithContent {
    maps!: EclairMap[];
    masterLabel!: string;
}

export class EmailTemplate extends MetadataWithContent {
    apiVersion?: number;
    attachedDocuments!: string[];
    attachments!: Attachment[];
    available!: boolean;
    description?: string;
    encodingKey!: Encoding;
    letterhead?: string;
    name!: string;
    packageVersions!: PackageVersion[];
    pageDevName?: string;
    relatedEntityType?: string;
    style!: EmailTemplateStyle;
    subject?: string;
    textOnly?: string;
    type!: EmailTemplateType;
    uiType?: EmailTemplateUiType;
}

export class FieldServiceMobileExtension extends MetadataWithContent {
    description?: string;
    developerName!: string;
    fileName!: string;
    masterLabel?: string;
    size?: number;
    version?: number;
}

export class InboundCertificate extends MetadataWithContent {
    expirationDate!: Date;
    issuer!: string;
    masterLabel!: string;
    serialId!: string;
}

export class NetworkBranding extends MetadataWithContent {
    loginBackgroundImageUrl?: string;
    loginFooterText?: string;
    loginLogo?: string;
    loginLogoName?: string;
    loginPrimaryColor?: string;
    loginQuaternaryColor?: string;
    loginRightFrameUrl?: string;
    network?: string;
    pageFooter?: string;
    pageHeader?: string;
    primaryColor!: string;
    primaryComplementColor!: string;
    quaternaryColor!: string;
    quaternaryComplementColor!: string;
    secondaryColor!: string;
    staticLogoImageUrl?: string;
    tertiaryColor!: string;
    tertiaryComplementColor!: string;
    zeronaryColor!: string;
    zeronaryComplementColor!: string;
}

export class Orchestration extends MetadataWithContent {
    context!: string;
    masterLabel!: string;
}

export class Schema extends MetadataWithContent {
    description?: string;
    schemaContentType!: PlatformSchemaContentType;
    sequenceNumber!: number;
}

export class Scontrol extends MetadataWithContent {
    contentSource!: SControlContentSource;
    description?: string;
    encodingKey!: Encoding;
    fileContent?: string;
    fileName?: string;
    name!: string;
    supportsCaching!: boolean;
}

export class SiteDotCom extends MetadataWithContent {
    label!: string;
    siteType!: SiteType;
}

export class SlackApp extends MetadataWithContent {
    apiVersion?: number;
    appKey!: string;
    appToken!: string;
    botScopes?: string;
    clientKey!: string;
    clientSecret!: string;
    isProtected?: boolean;
    masterLabel!: string;
    signingSecret!: string;
    userScopes?: string;
}

export class StaticResource extends MetadataWithContent {
    cacheControl!: StaticResourceCacheControl;
    contentType!: string;
    description?: string;
}

export class UiPlugin extends MetadataWithContent {
    description?: string;
    extensionPointIdentifier!: string;
    isEnabled!: boolean;
    language!: string;
    masterLabel!: string;
}

export class UiViewDefinition extends MetadataWithContent {
    type!: FlexiPageType;
}

export class UserAuthCertificate extends MetadataWithContent {
    developerName!: string;
    expirationDate?: Date;
    masterLabel!: string;
    serialNumber!: string;
    user!: string;
}

export class ViewDefinition extends MetadataWithContent {
    apiVersion?: number;
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    targetType!: ViewTargetType;
}

export class WaveDashboard extends MetadataWithContent {
    application!: string;
    dateVersion?: number;
    description?: string;
    masterLabel!: string;
    templateAssetSourceName?: string;
}

export class WaveComponent {}

export class WaveDataflow extends MetadataWithContent {
    application?: string;
    dataflowType?: string;
    description?: string;
    masterLabel!: string;
}

export class WaveLens extends MetadataWithContent {
    application!: string;
    datasets!: string[];
    dateVersion?: number;
    description?: string;
    masterLabel!: string;
    templateAssetSourceName?: string;
    visualizationType!: string;
}

export class WaveRecipe extends MetadataWithContent {
    application?: string;
    dataflow!: string;
    format?: string;
    masterLabel!: string;
    securityPredicate?: string;
    targetDatasetAlias?: string;
    templateAssetSourceName?: string;
}

export class DigitalExperienceConfig extends Metadata {
    label!: string;
    site!: Site;
    space!: string;
}

export class DisclosureDefinition extends Metadata {
    description?: string;
    disclosureType!: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class DisclosureDefinitionVersion extends Metadata {
    authoringMode?: AuthoringMode;
    description?: string;
    disclosureDefCurrVer?: string;
    disclosureDefinition!: string;
    documentTemplateGlobalKey?: string;
    isActive?: boolean;
    isCurrentVersion?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    omniScriptCnfgApiName?: string;
    omniScriptConfiguration?: string;
    versionNumber!: string;
}

export class DisclosureType extends Metadata {
    description?: string;
    disclosureBodyLogo?: string;
    disclosureBodyUrl?: string;
    disclosureCategory!: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class DiscoveryGoal extends Metadata {
    active!: boolean;
    deployedModels!: DiscoveryDeployedModel[];
    label!: string;
    modelCards!: DiscoveryModelCard[];
    outcome!: DiscoveryGoalOutcome;
    predictionType!: DiscoveryPredictionType;
    pushbackField?: string;
    pushbackType?: DiscoveryPushbackType;
    subscribedEntity?: string;
    terminalStateFilters!: DiscoveryFilter[];
}

export class DiscoverySettings extends Metadata {
    einsteinAR4ConvOnDmndRecs?: boolean;
    einsteinARForConvo?: boolean;
    enableEinsteinAnswersPref?: boolean;
    enableEinsteinArticleRecommendations?: boolean;
}

export class DocumentChecklistSettings extends Metadata {
    dciCustomSharing?: boolean;
    deleteDCIWithFiles?: boolean;
}

export class DocumentGenerationSetting extends Metadata {
    batchDocGnrnPctLimitPerHour?: number;
    documentTemplateLibraryName!: string;
    generationMechanism?: GenerationMechanism;
    guestAccessNamedCredential?: string;
    inProgDocGenRqstTmot?: number;
    isBatchDocGnrnEnabled?: boolean;
    isInProgRqstTmotEnab?: boolean;
    isServerSideDocGenEnabled?: boolean;
    masterLabel!: string;
    previewType?: PreviewType;
}

export class DocumentType extends Metadata {
    description?: string;
    isActive!: boolean;
    masterLabel!: string;
}

export class DuplicateRule extends Metadata {
    actionOnInsert!: DupeActionType;
    actionOnUpdate!: DupeActionType;
    alertText?: string;
    description?: string;
    duplicateRuleFilter?: DuplicateRuleFilter;
    duplicateRuleMatchRules?: DuplicateRuleMatchRule[];
    isActive!: boolean;
    masterLabel!: string;
    operationsOnInsert!: string[];
    operationsOnUpdate!: string[];
    securityOption!: DupeSecurityOptionType;
    sortOrder!: number;
}

export class EACSettings extends Metadata {
    addRcCompToFlexiPages?: boolean;
    autoContactCreationPref?: boolean;
    autoContactEnrichmentPref?: boolean;
    autoPopulateGoogleMeetLinks?: boolean;
    automatedEmailFilter?: boolean;
    dSThresholdNotification?: boolean;
    enableActivityAnalyticsPref?: boolean;
    enableActivityCapture?: boolean;
    enableActivityMetrics?: boolean;
    enableActivitySyncEngine?: boolean;
    enableEACForEveryonePref?: boolean;
    enableEnforceEacSharingPref?: boolean;
    enableInboxActivitySharing?: boolean;
    enableInsightsInTimeline?: boolean;
    enableInsightsInTimelineEacStd?: boolean;
    enableUnifiedActivitiesPref?: boolean;
    provisionProductivityFeatures?: boolean;
    relationshipGraphPref?: boolean;
    s2XSvcAccEmail?: boolean;
    salesforceEventsOnlyPref?: boolean;
    sensitiveEmailFilter?: boolean;
    showEACCalendarPref?: boolean;
    syncEmailToCoreActivity?: boolean;
    syncInternalEvents?: boolean;
}

export class ESignatureConfig extends Metadata {
    configType?: ConfigType;
    configValue?: string;
    description?: string;
    groupType?: ConfigGroup;
    masterLabel!: string;
    vendor!: Vendor;
}

export class ESignatureEnvelopeConfig extends Metadata {
    expirationPeriod?: number;
    expirationWarningPeriod?: number;
    firstReminderPeriod?: number;
    isExpirationEnabled?: boolean;
    isReminderEnabled?: boolean;
    isVendorDefaultNtfcnEnabled?: boolean;
    masterLabel!: string;
    reminderIntervalPeriod?: number;
    targetObjectName!: string;
    vendor!: Vendor;
    vendorAccountIdentifier?: string;
}

export class EditionDefinition extends Metadata {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: DefaultLicenseStatus;
    description?: string;
    includedPlatformLicenseDefinitions!: IncludedPlatformLicenseDefinition[];
    includedUserLicenseDefinitions!: IncludedUserLicenseDefinition[];
    licenseOwner?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    name!: string;
}

export class EinsteinAgentSettings extends Metadata {
    einsteinAgentRecommendations?: boolean;
    reRunAttributeBasedRules?: boolean;
    runAssignmentRules?: boolean;
    summarizationCopilot?: boolean;
    summarizationRecs?: boolean;
    voiceWrapUpRecs?: boolean;
}

export class EinsteinAssistantSettings extends Metadata {
    enableEinsteinAssistantDataExtractionEnabled?: boolean;
    enableEinsteinAssistantEnabled?: boolean;
    enableEinsteinEnableVoiceLogging?: boolean;
}

export class EinsteinDealInsightsSettings extends Metadata {
    enableUnlikelyToCloseThisMonth?: boolean;
}

export class EinsteinDocumentCaptureSettings extends Metadata {
    enableEinsteinDocumentReader?: boolean;
}

export class EmailAdministrationSettings extends Metadata {
    enableComplianceBcc?: boolean;
    enableEmailConsentManagement?: boolean;
    enableEmailSenderIdCompliance?: boolean;
    enableEmailSpfCompliance?: boolean;
    enableEmailToSalesforce?: boolean;
    enableEmailTrackingIPBlocklist?: boolean;
    enableEmailWorkflowApproval?: boolean;
    enableEnhancedEmailEnabled?: boolean;
    enableHandleBouncedEmails?: boolean;
    enableHtmlEmail?: boolean;
    enableInternationalEmailAddresses?: boolean;
    enableListEmailLogActivities?: boolean;
    enableResendBouncedEmails?: boolean;
    enableRestrictTlsToDomains?: boolean;
    enableSendThroughGmailPref?: boolean;
    enableSendViaExchangePref?: boolean;
    enableSendViaGmailPref?: boolean;
    enableTinyMceSalesEmailEnabled?: boolean;
    enableUseOrgFootersForExtTrans?: boolean;
    enableVerifyEmailDomainByDkim?: boolean;
    sendEmailsEvenWhenAutomationUpdatesSameRecord?: boolean;
    sendMassEmailNotification?: boolean;
    sendTextOnlySystemEmails?: boolean;
}

export class EmailIntegrationSettings extends Metadata {
    doesEmailLogAsEmailMessageInOutlook?: boolean;
    doesGmailStayConnectedToSalesforce?: boolean;
    enableContactAndEventSync?: boolean;
    enableContextualEverywhere?: boolean;
    enableEmailTrackingInMobile?: boolean;
    enableEngageForOutlook?: boolean;
    enableExtensionHostUnrestricted?: boolean;
    enableGmailIntegration?: boolean;
    enableInboxInternalEmailTracking?: boolean;
    enableInboxMobileIntune?: boolean;
    enableOutlookIntegration?: boolean;
    enableOutlookMobileIntegration?: boolean;
    enableProductivityFeatures?: boolean;
    enableSupplementalContactInfoInMobile?: boolean;
    isLayoutCustomizationAllowed?: boolean;
    orgIsSyncingEventsOutbound?: boolean;
    shouldUseTrustedDomainsList?: boolean;
}

export class EmailServicesFunction extends Metadata {
    apexClass!: string;
    attachmentOption!: EmailServicesAttOptions;
    authenticationFailureAction!: EmailServicesErrorAction;
    authorizationFailureAction!: EmailServicesErrorAction;
    authorizedSenders?: string;
    emailServicesAddresses!: EmailServicesAddress[];
    errorRoutingAddress?: string;
    functionInactiveAction!: EmailServicesErrorAction;
    functionName!: string;
    isActive?: boolean;
    isAuthenticationRequired?: boolean;
    isErrorRoutingEnabled?: boolean;
    isTextAttachmentsAsBinary?: boolean;
    isTlsRequired?: boolean;
    overLimitAction!: EmailServicesErrorAction;
}

export class EmailTemplateSettings extends Metadata {
    enableTemplateEnhancedFolderPref?: boolean;
}

export class EmbeddedServiceBranding extends Metadata {
    contrastInvertedColor?: string;
    contrastPrimaryColor?: string;
    embeddedServiceConfig!: string;
    font?: string;
    height?: number;
    masterLabel!: string;
    navBarColor?: string;
    navBarTextColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    secondaryNavBarColor?: string;
    width?: number;
}

export class EmbeddedServiceConfig extends Metadata {
    areGuestUsersAllowed?: boolean;
    authMethod?: EmbeddedServiceAuthMethod;
    branding?: string;
    deploymentFeature!: EmbeddedServiceDeploymentFeature;
    deploymentType!: EmbeddedServiceDeploymentType;
    embeddedServiceAppointmentSettings?: EmbeddedServiceAppointmentSettings;
    embeddedServiceCustomComponents!: EmbeddedServiceCustomComponent[];
    embeddedServiceCustomLabels!: EmbeddedServiceCustomLabel[];
    embeddedServiceCustomizations!: EmbeddedServiceCustomization[];
    embeddedServiceFlowConfig?: EmbeddedServiceFlowConfig;
    embeddedServiceFlows!: EmbeddedServiceFlow[];
    embeddedServiceForms!: EmbeddedServiceForm[];
    embeddedServiceLayouts!: EmbeddedServiceLayout[];
    embeddedServiceMessagingChannel?: EmbeddedServiceMessagingChannel;
    isEnabled?: boolean;
    isTermsAndConditionsEnabled?: boolean;
    isTermsAndConditionsRequired?: boolean;
    masterLabel!: string;
    shouldHideAuthDialog?: boolean;
    site?: string;
}

export class EmbeddedServiceFlowConfig extends Metadata {
    enabled!: boolean;
}

export class EmbeddedServiceFieldService extends Metadata {
    embeddedServiceConfig!: string;
    enabled!: boolean;
    fieldServiceConfirmCardImg?: string;
    fieldServiceHomeImg?: string;
    fieldServiceLogoImg?: string;
    masterLabel!: string;
    shouldShowExistingAppointment?: boolean;
    shouldShowNewAppointment?: boolean;
}

export class EmbeddedServiceLiveAgent extends Metadata {
    avatarImg?: string;
    embeddedServiceConfig!: string;
    embeddedServiceQuickActions!: EmbeddedServiceQuickAction[];
    enabled!: boolean;
    fontSize!: EmbeddedServiceFontSize;
    isOfflineCaseEnabled?: boolean;
    isQueuePositionEnabled?: boolean;
    liveAgentChatUrl?: string;
    liveAgentContentUrl?: string;
    liveChatButton!: string;
    liveChatDeployment!: string;
    masterLabel!: string;
    offlineCaseBackgroundImg?: string;
    prechatBackgroundImg?: string;
    prechatEnabled!: boolean;
    prechatJson?: string;
    scenario!: EmbeddedServiceScenario;
    smallCompanyLogoImg?: string;
    waitingStateBackgroundImg?: string;
}

export class EmbeddedServiceMenuSettings extends Metadata {
    branding?: string;
    embeddedServiceCustomLabels!: EmbeddedServiceCustomLabel[];
    embeddedServiceCustomizations!: EmbeddedServiceCustomization[];
    embeddedServiceMenuItems!: EmbeddedServiceMenuItem[];
    isEnabled?: boolean;
    masterLabel?: string;
    site?: string;
}

export class EmployeeFieldAccessSettings extends Metadata {
    enableEmployeeFieldMaskDefaults?: boolean;
    enableEmployeeFieldMasking?: boolean;
}

export class EmployeeUserSettings extends Metadata {
    emailEncoding!: string;
    enableEmployeeAutoCreateUser?: boolean;
    enableEmployeeIsSourceOfTruth?: boolean;
    permset?: string;
    profile!: string;
    usernameSuffix?: string;
}

export class EnablementMeasureDefinition extends Metadata {
    description?: string;
    developerName!: string;
    masterLabel!: string;
    sourceMeasureObject!: EnablementMeasureSourceObjectDefinition;
    status!: EnblProgramMeasureStatus;
}

export class EnablementProgramDefinition extends Metadata {
    description!: string;
    developerName!: string;
    doesAllowSelfEnrollment?: boolean;
    masterLabel!: string;
    name!: string;
    network?: string;
    sections!: EnablementProgramSection[];
    tasks!: EnablementProgramTask[];
    type!: string;
}

export class EnblProgramTaskSubCategory extends Metadata {
    developerName!: string;
    icon!: string;
    learningItemType!: string;
    masterLabel!: string;
}

export class EncryptionKeySettings extends Metadata {
    canOptOutOfDerivationWithBYOK?: boolean;
    dataCloudEncryption?: boolean;
    enableBringYourOwnkms?: boolean;
    enableCacheOnlyKeys?: boolean;
    enableReplayDetection?: boolean;
    tenantLevelEncryption?: boolean;
}

export class EnhancedNotesSettings extends Metadata {
    enableEnhancedNotes?: boolean;
    enableTasksOnEnhancedNotes?: boolean;
}

export class EntitlementProcess extends Metadata {
    SObjectType?: string;
    active?: boolean;
    businessHours?: string;
    description?: string;
    entryStartDateField?: string;
    exitCriteriaBooleanFilter?: string;
    exitCriteriaFilterItems!: FilterItem[];
    exitCriteriaFormula?: string;
    isRecordTypeApplied?: boolean;
    isVersionDefault?: boolean;
    milestones!: EntitlementProcessMilestoneItem[];
    name?: string;
    recordType?: string;
    versionMaster?: string;
    versionNotes?: string;
    versionNumber?: number;
}

export class EntitlementSettings extends Metadata {
    assetLookupLimitedToActiveEntitlementsOnAccount?: boolean;
    assetLookupLimitedToActiveEntitlementsOnContact?: boolean;
    assetLookupLimitedToSameAccount?: boolean;
    assetLookupLimitedToSameContact?: boolean;
    enableEntitlementVersioning!: boolean;
    enableEntitlements!: boolean;
    enableMilestoneFeedItem?: boolean;
    enableMilestoneStoppedTime?: boolean;
    entitlementLookupLimitedToActiveStatus?: boolean;
    entitlementLookupLimitedToSameAccount?: boolean;
    entitlementLookupLimitedToSameAsset?: boolean;
    entitlementLookupLimitedToSameContact?: boolean;
    ignoreMilestoneBusinessHours?: boolean;
}

export class EntitlementTemplate extends Metadata {
    businessHours?: string;
    casesPerEntitlement?: number;
    entitlementProcess?: string;
    isPerIncident?: boolean;
    term?: number;
    type?: string;
}

export class EscalationRule extends Metadata {
    active?: boolean;
    ruleEntry!: RuleEntry[];
}

export class EscalationRules extends Metadata {
    escalationRule!: EscalationRule[];
}

export class EssentialsSettings extends Metadata {
    emailConnectorEnabled?: boolean;
}

export class EventDelivery extends Metadata {
    eventParameters!: EventParameterMap[];
    eventSubscription!: string;
    referenceData?: string;
    type!: EventDeliveryType;
}

export class EventLogObjectSettings extends Metadata {
    eventLogObjects!: EventLogObject[];
}

export class EventRelayConfig extends Metadata {
    destinationResourceName!: string;
    eventChannel!: string;
    label?: string;
    relayOption?: string;
    state?: EventRelayAdminState;
    usageType?: EventRelayUsageType;
}

export class EventSettings extends Metadata {
    bypassMeteringBlock?: boolean;
    enableApexLimitEvents?: boolean;
    enableDeleteMonitoringData?: boolean;
    enableDynamicStreamingChannel?: boolean;
    enableEventLogGeneration?: boolean;
    enableEventLogObjectFeature?: boolean;
    enableEventLogWaveIntegration?: boolean;
    enableLightningLoggerEvents?: boolean;
    enableLoginForensics?: boolean;
    enableStreamingApi?: boolean;
    enableTransactionSecurityPolicies?: boolean;
    eventLogRetentionDuration?: number;
}

export class EventSubscription extends Metadata {
    active?: boolean;
    eventParameters!: EventParameterMap[];
    eventType!: string;
    referenceData!: string;
}

export class ExperienceBundle extends Metadata {
    experienceResources?: ExperienceResources;
    label!: string;
    type!: SiteType;
    urlPathPrefix?: string;
}

export class ExperienceBundleSettings extends Metadata {
    enableExperienceBundleMetadata?: boolean;
}

export class ExperienceContainer extends Metadata {
    masterLabel!: string;
    space!: string;
    type!: ExperienceContainerType;
}

export class ExperiencePropertyTypeBundle extends Metadata {
    description?: string;
    masterLabel!: string;
    resources!: ExperiencePropertyTypeBundleResource[];
}

export class ExplainabilityActionDefinition extends Metadata {
    actionLogSchemaType!: ActionLogSchemaType;
    applicationSubtype!: string;
    applicationType!: EASAppType;
    description?: string;
    internal!: boolean;
    masterLabel!: string;
    processType!: string;
}

export class ExplainabilityActionVersion extends Metadata {
    actionLogMessageTemplate?: string;
    actionSpecification!: string;
    active!: boolean;
    definitionVersion!: number;
    description?: string;
    explainabilityActionDef!: string;
    masterLabel!: string;
}

export class ExplainabilityMsgTemplate extends Metadata {
    evaluationResult!: EvaluationResult;
    expressionSetStepType!: ExpressionSetStepType;
    expsSetProcessType!: ExpsSetProcessType;
    isDefault?: boolean;
    masterLabel!: string;
    message!: string;
}

export class ExpressionSetDefinition extends Metadata {
    contextDefinitions!: string[];
    description?: string;
    executionScale?: ExpsSetExecutionScale;
    interfaceSourceType?: ExpsSetInterfaceSourceType;
    label!: string;
    processType?: ExpsSetProcessType;
    template?: boolean;
    versions!: ExpressionSetDefinitionVersion[];
}

export class ExpressionSetDefinitionVersion extends Metadata {
    description?: string;
    endDate?: Date;
    expressionSetDefinition?: string;
    label!: string;
    rank?: number;
    shouldShowExplExternally?: boolean;
    startDate!: Date;
    status!: ExpsSetStatus;
    steps!: ExpressionSetStep[];
    uiTier?: boolean;
    variables!: ExpressionSetVariable[];
    versionNumber!: number;
}

export class ExpressionSetMessageToken extends Metadata {
    description?: string;
    developerName!: string;
    masterLabel!: string;
}

export class ExpressionSetObjectAlias extends Metadata {
    dataType!: ExpsSetObjectDataType;
    mappings!: ExpressionSetObjectAliasField[];
    objectApiName!: string;
    usageType!: ExpsSetProcessType;
}

export class ExtConvParticipantIntegDef extends Metadata {
    connectedAppOauthLink?: string;
    conversationVendorInfo?: string;
    customEventPayloadField!: string;
    customEventTypeField?: string;
    customPlatformEvent!: string;
    developerName!: string;
    externalConversationBotDefs!: ExternalConversationBotDef[];
    masterLabel!: string;
}

export class ExtDataTranFieldTemplate extends Metadata {
    dataSourceField!: string;
    externalDataTranField?: string;
    externalName?: string;
    isDataRequired?: boolean;
    masterLabel!: string;
    sourceFieldName?: string;
}

export class ExtDataTranObjectTemplate extends Metadata {
    dataSourceObject!: string;
    extDataTranFieldTemplates!: ExtDataTranFieldTemplate[];
    externalDataTranObject?: string;
    externalName?: string;
    masterLabel!: string;
    sourceObjectName?: string;
    templateVersion?: number;
}

export class ExternalAIModel extends Metadata {
    applicationSourceType!: ApplicationSourceType;
    externalModelKey!: string;
    externalModelStatus!: ExternalModelStatus;
    name!: string;
    threshold?: number;
    trainingJobName?: string;
}

export class ExternalAuthIdentityProvider extends Metadata {
    authenticationFlow!: IdentityProviderAuthFlow;
    authenticationProtocol!: IdentityProviderAuthProtocol;
    description?: string;
    externalAuthIdentityProviderParameters!: ExternalAuthIdentityProviderParameter[];
    label!: string;
}

export class ExternalClientAppSettings extends Metadata {
    enableClientSecretInRestApiAccess?: boolean;
    enableConsumerSecretApiAccess?: boolean;
    enablePackageEcaOauthFromDevOrg?: boolean;
}

export class ExternalClientApplication extends Metadata {
    contactEmail?: string;
    contactPhone?: string;
    description?: string;
    distributionState?: ExtlClntAppDistState;
    iconUrl?: string;
    infoUrl?: string;
    isProtected?: boolean;
    label?: string;
    logoUrl?: string;
    managedType?: ExtlClntAppManagedType;
    orgScopedExternalApp?: string;
}

export class ExternalCredential extends Metadata {
    authenticationProtocol!: AuthenticationProtocol;
    description?: string;
    externalCredentialParameters!: ExternalCredentialParameter[];
    label!: string;
}

export class ExternalDataConnector extends Metadata {
    dataConnectionStatus!: DataConnectionStatus;
    dataConnectorConfiguration!: string;
    dataConnectorType!: DataConnectorType;
    dataPlatform!: string;
    externalDataTranObjects!: ExternalDataTranObject[];
    masterLabel!: string;
}

export class ExternalDataTranObject extends Metadata {
    availabilityStatus!: AvailabilityStatus;
    creationType!: DefinitionCreationType;
    extDataTranObjectTemplate?: string;
    externalDataTranFields!: ExternalDataTranField[];
    masterLabel!: string;
    mktDataTranObject?: string;
    objectCategory!: string;
}

export class ExternalDataTranField extends Metadata {
    creationType?: DefinitionCreationType;
    datatype!: string;
    dateFormat?: string;
    extDataTranFieldTemplate?: string;
    externalName?: string;
    isCurrencyIsoCode?: boolean;
    isDataRequired?: boolean;
    length?: number;
    masterLabel!: string;
    mktDataTranField?: string;
    precision?: number;
    primaryIndexOrder?: number;
    scale?: number;
    sequence?: number;
}

export class ExternalDataSource extends Metadata {
    authProvider?: string;
    certificate?: string;
    customConfiguration?: string;
    customHttpHeaders!: CustomHttpHeader[];
    endpoint?: string;
    externalDataSrcDescriptors!: ExternalDataSrcDescriptor[];
    isWritable?: boolean;
    label!: string;
    namedCredential?: string;
    oauthRefreshToken?: string;
    oauthScope?: string;
    oauthToken?: string;
    password?: string;
    principalType!: ExternalPrincipalType;
    protocol!: AuthenticationProtocol;
    repository?: string;
    type!: ExternalDataSourceType;
    username?: string;
    version?: string;
}

export class ExternalDataSrcDescriptor extends Metadata {
    customObject?: string;
    descriptor!: string;
    descriptorVersion?: string;
    developerName!: string;
    externalDataSource!: string;
    subtype!: ExternalDataSrcDescSubtype;
    systemVersion!: number;
    type!: ExternalDataSrcDescType;
}

export class ExternalDocStorageConfig extends Metadata {
    documentPath!: string;
    externalDocStorageIdentifier!: string;
    masterLabel!: string;
    namedCredential!: string;
    recordType?: string;
    storageDriveType!: StorageDriveType;
    targetObject!: TargetObject;
}

export class ExternalServiceRegistration extends Metadata {
    description?: string;
    label!: string;
    namedCredential?: string;
    namedCredentialReference?: string;
    operations!: ExternalServiceOperation[];
    providerAssetEndpoint?: string;
    registrationProvider?: string;
    registrationProviderType?: ExternalServiceRegistrationProviderType;
    schema?: string;
    schemaAbsoluteUrl?: string;
    schemaType?: string;
    schemaUploadFileExtension?: string;
    schemaUploadFileName?: string;
    schemaUrl?: string;
    serviceBinding?: string;
    serviceDescriptor?: string;
    serviceName?: string;
    status!: string;
    systemVersion?: number;
}

export class ExtlClntAppConfigurablePolicies extends Metadata {
    externalClientApplication!: string;
    isEnabled!: boolean;
    isMobilePluginEnabled?: boolean;
    isNotificationPluginEnabled?: boolean;
    isOauthPluginEnabled?: boolean;
    isPushPluginEnabled?: boolean;
    isSamlPluginEnabled?: boolean;
    label?: string;
    startPage?: ExtlClntAppStartPage;
    startUrl?: string;
}

export class ExtlClntAppGlobalOauthSettings extends Metadata {
    callbackUrl?: string;
    certificate?: string;
    consumerKey?: string;
    consumerSecret?: string;
    externalClientApplication!: string;
    idTokenConfig?: ExternalAppIdTokenConfig;
    isClientCredentialsFlowEnabled?: boolean;
    isCodeCredFlowEnabled?: boolean;
    isCodeCredPostOnly?: boolean;
    isConsumerSecretOptional?: boolean;
    isDeviceFlowEnabled?: boolean;
    isIntrospectAllTokens?: boolean;
    isNamedUserJwtEnabled?: boolean;
    isPkceRequired?: boolean;
    isRefreshTokenRotationEnabled?: boolean;
    isSecretRequiredForRefreshToken?: boolean;
    isSecretRequiredForTokenExchange?: boolean;
    isTokenExchangeEnabled?: boolean;
    label?: string;
    shouldRotateConsumerKey?: boolean;
    shouldRotateConsumerSecret?: boolean;
}

export class ExtlClntAppMobileConfigurablePolicies extends Metadata {
    externalClientApplication!: string;
    label?: string;
    screenLockTimeout!: ScreenLockTimeout;
}

export class ExtlClntAppMobileSettings extends Metadata {
    externalClientApplication!: string;
    isScreenLockEnabled!: boolean;
    label?: string;
}

export class ExtlClntAppNotificationSettings extends Metadata {
    externalClientApplication!: string;
    label?: string;
    notificationTypes!: ExtlClntAppNotificationType[];
}

export class ExtlClntAppOauthConfigurablePolicies extends Metadata {
    apexHandler?: string;
    clientCredentialsFlowUser?: string;
    commaSeparatedCustomScopes?: string;
    commaSeparatedPermissionSet?: string;
    commaSeparatedProfile?: string;
    customAttributes!: ExtlClntAppOauthPoliciesAttribute[];
    executeHandlerAs?: string;
    externalClientApplication!: string;
    guestJwtTimeout?: number;
    ipRelaxationPolicyType?: string;
    isClientCredentialsFlowEnabled?: boolean;
    isGuestCodeCredFlowEnabled?: boolean;
    isNamedUserJwtEnabled?: boolean;
    isTokenExchangeFlowEnabled?: boolean;
    label?: string;
    namedUserJwtTimeout?: number;
    permittedUsersPolicyType?: PermittedUsersPolicyType;
    policyAction?: PolicyAction;
    refreshTokenPolicyType?: RefreshTokenPolicyType;
    refreshTokenValidityPeriod?: number;
    refreshTokenValidityUnit?: string;
    requiredSessionLevel?: SessionSecurityLevel;
    sessionTimeoutInMinutes?: number;
    singleLogoutUrl?: string;
    startUrl?: string;
}

export class ExtlClntAppOauthSettings extends Metadata {
    areAttributesIncludedInAssetToken?: boolean;
    areCustomPermsIncludedInAssetToken?: boolean;
    assetTokenAudiences?: string;
    assetTokenSigningCertificate?: string;
    assetTokenValidity?: number;
    clientAssertionCertificate?: string;
    commaSeparatedCustomScopes?: string;
    commaSeparatedOauthScopes?: string;
    customAttributes!: ExtlClntAppOauthSettingsAttribute[];
    externalClientApplication!: string;
    isFirstPartyAppEnabled?: boolean;
    label?: string;
    oauthLink?: string;
    singleLogoutUrl?: string;
    trustedIpRanges!: ExtlClntAppOauthIpRange[];
}

export class ExtlClntAppPushConfigurablePolicies extends Metadata {
    externalClientApplication!: string;
    isFullContent!: boolean;
    label?: string;
}

export class ExtlClntAppPushSettings extends Metadata {
    androidPushConfig?: ExtlClntAppAndroidPushConfig;
    applePushConfig?: ExtlClntAppApplePushConfig;
    externalClientApplication!: string;
    label?: string;
    pushConfigLink?: string;
    pushServiceType!: PushServiceType;
}

export class ExtlClntAppSamlConfigurablePolicies extends Metadata {
    acsUrl!: string;
    certificate?: string;
    commaSeparatedPermissionSet?: string;
    commaSeparatedProfile?: string;
    customAttributes!: ExtlClntAppSamlConfigurablePoliciesAttribute[];
    encryptionCertificate?: string;
    encryptionType?: ExtlClntAppSamlEncryptType;
    entityUrl!: string;
    externalClientApplication!: string;
    issuer?: string;
    label?: string;
    nameIdFormat?: ExtlClntAppNameIdFormatType;
    signingAlgorithmType?: ExtlClntAppSamlSignAlgoType;
    singleLogoutBindingType?: ExtlClntAppSamlBindingType;
    singleLogoutUrl?: string;
    startUrl?: string;
    subjectCustomAttribute?: string;
    subjectType?: ExtlClntAppSamlSubjectType;
}

export class ExtlClntAppSampleConfigurablePolicies extends Metadata {
    adminOnlyPolicy?: string;
    externalClientApplication!: string;
    label!: string;
    policy1?: string;
    policy2?: string;
}

export class ExtlClntAppSampleSettings extends Metadata {
    devicePlatform!: DevicePlatformType;
    deviceType!: DeviceType;
    externalClientApplication!: string;
    label!: string;
    minimumOsVersion?: string;
    policy1?: string;
    policy1DevManaged?: boolean;
    policy2?: string;
    policy2DevManaged?: boolean;
    version?: string;
}

export class FTestFieldMappingMd extends Metadata {
    label!: string;
}

export class FTestToolingFLU extends Metadata {
    int!: number;
    stringWithDifferentName!: string;
    text2?: string;
}

export class FeatureParameterBoolean extends Metadata {
    dataflowDirection!: FeatureParameterDataflowDirection;
    masterLabel!: string;
    value!: boolean;
}

export class FeatureParameterDate extends Metadata {
    dataflowDirection!: FeatureParameterDataflowDirection;
    masterLabel!: string;
    value!: Date;
}

export class FeatureParameterInteger extends Metadata {
    dataflowDirection!: FeatureParameterDataflowDirection;
    masterLabel!: string;
    value!: number;
}

export class FieldMappingConfig extends Metadata {
    description?: string;
    fieldMappingConfigItems!: FieldMappingConfigItem[];
    masterLabel?: string;
    processType?: FieldMappingConfigProcessType;
    sourceObjectId?: string;
}

export class FieldRestrictionRule extends Metadata {
    active!: boolean;
    classification!: string[];
    classificationType?: ClassificationType;
    description?: string;
    enforcementType!: EnforcementType;
    masterLabel!: string;
    recordFilter!: string;
    targetEntity!: string;
    userCriteria!: string;
    version!: number;
}

export class FieldServiceSettings extends Metadata {
    apptAssistantExpiration?: number;
    apptAssistantInfoUrl?: string;
    apptAssistantRadiusUnitValue?: ApptAssistantRadiusUnit;
    apptAssistantRadiusValue?: number;
    apptAssistantStatus?: string;
    canPopulateGoogleAddress?: boolean;
    canSendAppCenterCrashReports?: boolean;
    canStoreMobileAnalytics?: boolean;
    deepLinkPublicSecurityKey?: string;
    doesAllowEditSaForCrew?: boolean;
    doesAvlCalcInclOvertime?: boolean;
    doesAvlCalcInclPrimOnly?: boolean;
    doesShareSaParentWoWithAr?: boolean;
    doesShareSaWithAr?: boolean;
    enableBatchWindow?: boolean;
    enableDocumentBuilder?: boolean;
    enableFloatingWorkOrder?: boolean;
    enableLsdkMode?: boolean;
    enablePopulateWorkOrderAddress?: boolean;
    enableStandbyMode?: boolean;
    enableWorkOrders?: boolean;
    enableWorkPlansAutoGeneration?: boolean;
    enableWorkStepManualStatusUpdate?: boolean;
    enrouteStatus?: string;
    fieldServiceNotificationsOrgPref?: boolean;
    fieldServiceOrgPref?: boolean;
    isGeoCodeSyncEnabled?: boolean;
    isLocationHistoryEnabled?: boolean;
    mobileFeedbackEmails?: string;
    o2EngineEnabled?: boolean;
    objectMappingItem!: ObjectMappingItem[];
    optimizationServiceAccess?: boolean;
    overrideDefaultLwcStyling?: boolean;
    serviceAppointmentsDueDateOffsetOrgValue?: number;
    workOrderDurationSource?: WorkOrderDurationSource;
    workOrderLineItemSearchFields!: string[];
    workOrderSearchFields!: string[];
}

export class FieldSrcTrgtRelationship extends Metadata {
    definitionCreationType!: DefinitionCreationType;
    lookupFieldName?: string;
    masterLabel!: string;
    owner!: FieldSrcTrgtRelationshipOwner;
    relationshipCardinality!: RelationshipCardinality;
    sourceFieldName!: string;
    targetEntity!: string;
    targetFieldName!: string;
}

export class FileUploadAndDownloadSecuritySettings extends Metadata {
    dispositions!: FileTypeDispositionAssignmentBean[];
    noHtmlUploadAsAttachment!: boolean;
}

export class FilesConnectSettings extends Metadata {
    enableContentHubAllowed?: boolean;
    enableContentHubCvtLinksAllowed?: boolean;
    enableContentHubEOSearchLayout?: boolean;
}

export class FlexiPage extends Metadata {
    description?: string;
    events!: FlexiPageEvent[];
    flexiPageRegions!: FlexiPageRegion[];
    masterLabel!: string;
    parentFlexiPage?: string;
    platformActionlist?: PlatformActionList;
    quickActionList?: QuickActionList;
    sobjectType?: string;
    template!: FlexiPageTemplateInstance;
    type!: FlexiPageType;
}

export class Flow extends Metadata {
    actionCalls!: FlowActionCall[];
    apexPluginCalls!: FlowApexPluginCall[];
    apiVersion?: number;
    areMetricsLoggedToDataCloud?: boolean;
    assignments!: FlowAssignment[];
    choices!: FlowChoice[];
    collectionProcessors!: FlowCollectionProcessor[];
    constants!: FlowConstant[];
    customErrors!: FlowCustomError[];
    customProperties!: FlowCustomProperty[];
    decisions!: FlowDecision[];
    description?: string;
    dynamicChoiceSets!: FlowDynamicChoiceSet[];
    environments!: FlowEnvironment[];
    exitRules!: FlowExitRule[];
    experiments!: FlowExperiment[];
    formulas!: FlowFormula[];
    interviewLabel?: string;
    isAdditionalPermissionRequiredToRun?: boolean;
    isOverridable?: boolean;
    isTemplate?: boolean;
    label!: string;
    loops!: FlowLoop[];
    migratedFromWorkflowRuleName?: string;
    orchestratedStages!: FlowOrchestratedStage[];
    overriddenFlow?: string;
    processMetadataValues!: FlowMetadataValue[];
    processType?: FlowProcessType;
    recordCreates!: FlowRecordCreate[];
    recordDeletes!: FlowRecordDelete[];
    recordLookups!: FlowRecordLookup[];
    recordRollbacks!: FlowRecordRollback[];
    recordUpdates!: FlowRecordUpdate[];
    runInMode?: FlowRunInMode;
    screens!: FlowScreen[];
    sourceTemplate?: string;
    stages!: FlowStage[];
    start?: FlowStart;
    startElementReference?: string;
    status?: FlowVersionStatus;
    steps!: FlowStep[];
    subflows!: FlowSubflow[];
    textTemplates!: FlowTextTemplate[];
    timeZoneSidKey?: string;
    transforms!: FlowTransform[];
    triggerOrder?: number;
    variables!: FlowVariable[];
    waits!: FlowWait[];
}

export class FlowElement extends FlowBaseElement {
    description?: string;
    name?: string;
}

export class FlowInlineTransform extends FlowBaseElement {
    apexClass?: string;
    dataType?: FlowDataType;
    isCollection?: boolean;
    objectType?: string;
    transformValues!: FlowTransformValue[];
}

export class FlowTransformValue extends FlowBaseElement {
    transformValueActions!: FlowTransformValueAction[];
    transformValueDescription?: string;
    transformValueLabel?: string;
    transformValueName?: string;
}

export class FlowTransformValueAction extends FlowBaseElement {
    assignToReference?: string;
    inputParameters!: FlowTransformValueActionInputParameter[];
    name?: string;
    outputFieldApiName?: string;
    transformType!: FlowTransformValueActionType;
    value?: FlowElementReferenceOrValue;
}

export class FlowTransformValueActionInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowActionCallInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowActionCallOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowActionCallPath extends FlowBaseElement {
    connector!: FlowConnector;
    pathName!: string;
}

export class FlowConnector extends FlowBaseElement {
    isGoTo?: boolean;
    targetReference!: string;
}

export class FlowApexPluginCallInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowApexPluginCallOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowAssignmentItem extends FlowBaseElement {
    assignToReference?: string;
    operator?: FlowAssignmentOperator;
    value?: FlowElementReferenceOrValue;
}

export class FlowChoiceUserInput extends FlowBaseElement {
    isRequired?: boolean;
    promptText?: string;
    validationRule?: FlowInputValidationRule;
}

export class FlowCollectionMapItem extends FlowBaseElement {
    assignToFieldReference!: string;
    operator!: FlowAssignmentOperator;
    value!: FlowElementReferenceOrValue;
}

export class FlowCollectionSortOption extends FlowBaseElement {
    doesPutEmptyStringAndNullFirst!: boolean;
    sortField?: string;
    sortOrder!: SortOrder;
}

export class FlowCondition extends FlowBaseElement {
    aggregationOperator?: string;
    conditionLogic?: string;
    conditionType?: string;
    conditions!: FlowCondition[];
    leftValueReference?: string;
    operator!: FlowComparisonOperator;
    rightValue?: FlowElementReferenceOrValue;
}

export class FlowCustomErrorMessage extends FlowBaseElement {
    errorMessage!: string;
    fieldSelection?: string;
    isFieldError!: boolean;
}

export class FlowDataTypeMapping extends FlowBaseElement {
    apexClass?: string;
    typeName!: string;
    typeValue?: string;
}

export class FlowInputFieldAssignment extends FlowBaseElement {
    field?: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowOutputFieldAssignment extends FlowBaseElement {
    assignToReference!: string;
    field!: string;
}

export class FlowRecordFilter extends FlowBaseElement {
    field?: string;
    operator?: FlowRecordFilterOperator;
    value?: FlowElementReferenceOrValue;
}

export class FlowScreenActionInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowScreenFieldInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowScreenFieldOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowScreenRule extends FlowBaseElement {
    conditionLogic?: string;
    conditions!: FlowCondition[];
    label!: string;
    ruleActions!: FlowScreenRuleAction[];
}

export class FlowScreenRuleAction extends FlowBaseElement {
    attribute!: string;
    fieldReference!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowScreenTrigger extends FlowBaseElement {
    eventName!: string;
    eventSource!: string;
    handlers!: FlowScreenTriggerHandler[];
}

export class FlowScreenTriggerHandler extends FlowBaseElement {
    conditionLogic?: string;
    conditions!: FlowCondition[];
    screenActionName!: string;
}

export class FlowStageStepAssignee extends FlowBaseElement {
    assignee?: FlowElementReferenceOrValue;
    assigneeType!: FlowStageStepAssigneeType;
}

export class FlowStageStepEntryActionInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowStageStepEntryActionOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowStageStepExitActionInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowStageStepExitActionOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowStageStepInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowStageStepOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowStartInputParameter extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowSubflowInputAssignment extends FlowBaseElement {
    name!: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowSubflowOutputAssignment extends FlowBaseElement {
    assignToReference?: string;
    name!: string;
}

export class FlowVisibilityRule extends FlowBaseElement {
    conditionLogic?: string;
    conditions!: FlowCondition[];
}

export class FlowWaitEventInputParameter extends FlowBaseElement {
    name?: string;
    value?: FlowElementReferenceOrValue;
}

export class FlowWaitEventOutputParameter extends FlowBaseElement {
    assignToReference!: string;
    name!: string;
}

export class FlowCapability extends FlowElement {
    capabilityName!: string;
    inputs!: FlowCapabilityInput[];
}

export class FlowCapabilityInput extends FlowElement {
    capabilityInputName!: string;
    dataType?: string;
    isCollection!: boolean;
}

export class FlowChoice extends FlowElement {
    choiceText!: string;
    dataType!: FlowDataType;
    userInput?: FlowChoiceUserInput;
    value?: FlowElementReferenceOrValue;
}

export class FlowConstant extends FlowElement {
    dataType!: FlowDataType;
    value?: FlowElementReferenceOrValue;
}

export class FlowDynamicChoiceSet extends FlowElement {
    collectionReference?: string;
    dataType!: FlowDataType;
    displayField!: string;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    limit?: number;
    object!: string;
    outputAssignments!: FlowOutputFieldAssignment[];
    picklistField?: string;
    picklistObject?: string;
    sortField?: string;
    sortOrder?: SortOrder;
    valueField?: string;
}

export class FlowExitRule extends FlowElement {
    conditions!: FlowCondition[];
    label!: string;
    logicalOperator!: string;
    ruleOrder!: number;
}

export class FlowExperimentPath extends FlowElement {
    connector?: FlowConnector;
    label!: string;
    percentage!: number;
}

export class FlowFormula extends FlowElement {
    dataType?: FlowDataType;
    expression!: string;
    scale?: number;
}

export class FlowRule extends FlowElement {
    conditionLogic!: string;
    conditions!: FlowCondition[];
    connector?: FlowConnector;
    doesRequireRecordChangedToMeetCriteria?: boolean;
    label!: string;
}

export class FlowScheduledPath extends FlowElement {
    connector?: FlowConnector;
    label?: string;
    maxBatchSize?: number;
    offsetNumber?: number;
    offsetUnit?: FlowScheduledPathOffsetUnit;
    pathType?: FlowScheduledPathType;
    recordField?: string;
    timeSource?: FlowScheduledPathTimeSource;
}

export class FlowScreenAction extends FlowElement {
    actionName?: string;
    actionType?: InvocableActionType;
    inputParameters!: FlowScreenActionInputParameter[];
    label!: string;
    nameSegment?: string;
    versionSegment?: number;
    versionString?: string;
}

export class FlowScreenField extends FlowElement {
    choiceReferences!: string[];
    dataType?: FlowDataType;
    dataTypeMappings!: FlowDataTypeMapping[];
    defaultSelectedChoiceReference?: string;
    defaultValue?: FlowElementReferenceOrValue;
    extensionName?: string;
    fieldText?: string;
    fieldType!: FlowScreenFieldType;
    fields!: FlowScreenField[];
    helpText?: string;
    inputParameters!: FlowScreenFieldInputParameter[];
    inputsOnNextNavToAssocScrn?: FlowScreenFieldInputsRevisited;
    isDisabled?: FlowElementReferenceOrValue;
    isReadOnly?: FlowElementReferenceOrValue;
    isRequired?: boolean;
    isVisible?: boolean;
    objectFieldReference?: string;
    outputParameters!: FlowScreenFieldOutputParameter[];
    regionContainerType?: FlowRegionContainerType;
    scale?: number;
    sourceTemplateApiName?: string;
    sourceTemplateProviderType?: string;
    storeOutputAutomatically?: boolean;
    validationRule?: FlowInputValidationRule;
    visibilityRule?: FlowVisibilityRule;
}

export class FlowStage extends FlowElement {
    isActive!: boolean;
    label!: string;
    stageOrder!: number;
}

export class FlowStageStep extends FlowElement {
    actionName?: string;
    actionType?: InvocableActionType;
    assignees!: FlowStageStepAssignee[];
    canAssigneeEdit?: boolean;
    entryActionInputParameters!: FlowStageStepEntryActionInputParameter[];
    entryActionName?: string;
    entryActionOutputParameters!: FlowStageStepEntryActionOutputParameter[];
    entryActionType?: InvocableActionType;
    entryConditionLogic!: string;
    entryConditions!: FlowCondition[];
    exitActionInputParameters!: FlowStageStepExitActionInputParameter[];
    exitActionName?: string;
    exitActionOutputParameters!: FlowStageStepExitActionOutputParameter[];
    exitActionType?: InvocableActionType;
    exitConditionLogic?: string;
    exitConditions!: FlowCondition[];
    inputParameters!: FlowStageStepInputParameter[];
    label!: string;
    outputParameters!: FlowStageStepOutputParameter[];
    requiresAsyncProcessing?: boolean;
    runAsUser?: boolean;
    shouldLock?: boolean;
    stepSubtype?: FlowElementSubtype;
}

export class FlowTextTemplate extends FlowElement {
    isViewedAsPlainText?: boolean;
    text!: string;
}

export class FlowVariable extends FlowElement {
    apexClass?: string;
    dataType!: FlowDataType;
    isCollection?: boolean;
    isInput?: boolean;
    isOutput?: boolean;
    objectType?: string;
    scale?: number;
    value?: FlowElementReferenceOrValue;
}

export class FlowWaitEvent extends FlowElement {
    associatedElement?: string;
    automationEventName?: string;
    automationEventType?: InvocableActionType;
    conditionLogic?: string;
    conditions!: FlowCondition[];
    connector?: FlowConnector;
    eventType?: string;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    inputParameters!: FlowWaitEventInputParameter[];
    interactionType?: FlowWaitInteractionType;
    label!: string;
    maxBatchSize?: number;
    object?: string;
    offset?: number;
    offsetUnit?: FlowScheduledPathOffsetUnit;
    outputParameters!: FlowWaitEventOutputParameter[];
    recordTriggerType?: RecordTriggerType;
    resumeDate?: Date;
    resumeDateReference?: string;
    resumeTime?: Date;
}

export class FlowCategory extends Metadata {
    description?: string;
    flowCategoryItems!: FlowCategoryItems[];
    masterLabel!: string;
}

export class FlowDefinition extends Metadata {
    activeVersionNumber?: number;
    description?: string;
    masterLabel?: string;
}

export class FlowSettings extends Metadata {
    canDebugFlowAsAnotherUser?: boolean;
    doesEnforceApexCpuTimeLimit?: boolean;
    doesFormulaEnforceDataAccess?: boolean;
    doesFormulaGenerateHtmlOutput?: boolean;
    enableEmailSimpleRespectProfiles?: boolean;
    enableEmailsimpleSecureProfiles?: boolean;
    enableFlowBREncodedFixEnabled?: boolean;
    enableFlowCustomPropertyEditor?: boolean;
    enableFlowDeployAsActiveEnabled?: boolean;
    enableFlowFieldFilterEnabled?: boolean;
    enableFlowFormulasFixEnabled?: boolean;
    enableFlowInterviewSharingEnabled?: boolean;
    enableFlowNullPreviousValueFix?: boolean;
    enableFlowPauseEnabled?: boolean;
    enableFlowReactiveChoiceOptions?: boolean;
    enableFlowReactiveScreens?: boolean;
    enableFlowUseApexExceptionEmail?: boolean;
    enableFlowViaRestUsesUserCtxt?: boolean;
    enableLightningRuntimeEnabled?: boolean;
    isApexPluginAccessModifierRespected?: boolean;
    isEnhancedFlowListViewVisible?: boolean;
    isFlowBlockAccessToSessionIDEnabled?: boolean;
    isManageFlowRequiredForAutomationCharts?: boolean;
    isSupportRollbackOnErrorForApexInvocableActionsEnabled?: boolean;
}

export class FlowTest extends Metadata {
    description?: string;
    flowApiName!: string;
    label!: string;
    testPoints!: FlowTestPoint[];
}

export class Folder extends Metadata {
    accessType?: FolderAccessTypes;
    folderShares!: FolderShare[];
    name!: string;
    publicFolderAccess?: PublicFolderAccess;
    sharedTo?: SharedTo;
}

export class DashboardFolder {}

export class DocumentFolder {}

export class EmailFolder {}

export class EmailTemplateFolder {}

export class ReportFolder {}

export class ForecastingFilter extends Metadata {
    filterLogic?: string;
    forecastingCustomCategory?: string;
    forecastingType!: string;
    forecastingTypeSource!: string;
    forecastingTypeSourceCategory?: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class ForecastingFilterCondition extends Metadata {
    colName?: string;
    fieldName!: string;
    forecastingFilter!: string;
    forecastingSourceDefinition?: string;
    isProtected?: boolean;
    masterLabel!: string;
    operation!: FilterOperation;
    sortOrder!: number;
    value?: string;
}

export class ForecastingGroup extends Metadata {
    developerName!: string;
    forecastingGroupItems!: ForecastingGroupItem[];
    groupField!: string;
    masterLabel!: string;
    sourceObject!: string;
}

export class ForecastingObjectListSettings extends Metadata {
    forecastingTypeObjectListSettings!: ForecastingTypeObjectListSettings[];
}

export class ForecastingSettings extends Metadata {
    defaultToPersonalCurrency?: boolean;
    enableForecasts?: boolean;
    forecastingCategoryMappings!: ForecastingCategoryMapping[];
    forecastingDisplayedFamilySettings!: ForecastingDisplayedFamilySettings[];
    forecastingSubmissionSettings!: ForecastingSubmissionSettings;
    forecastingTypeSettings!: ForecastingTypeSettings[];
    globalAdjustmentsSettings!: AdjustmentsSettings;
    globalForecastRangeSettings!: ForecastRangeSettings;
    globalQuotasSettings!: QuotasSettings;
}

export class ForecastingSourceDefinition extends Metadata {
    categoryField?: string;
    cdpDataspace?: string;
    dateField?: string;
    externalSourceObject?: string;
    familyField?: string;
    isProtected?: boolean;
    masterLabel!: string;
    measureField?: string;
    sourceObject?: string;
    territory2Field?: string;
    userField?: string;
}

export class ForecastingType extends Metadata {
    active!: boolean;
    amount!: boolean;
    dateType!: string;
    developerName!: string;
    forecastingGroupDeveloperName?: string;
    hasCustomGroup?: boolean;
    hasProductFamily!: boolean;
    masterLabel!: string;
    opportunitySplitType?: string;
    opptyLineItemSplitType?: string;
    quantity!: boolean;
    roleType!: string;
    territory2Model?: string;
}

export class ForecastingTypeSource extends Metadata {
    forecastingSourceDefinition!: string;
    forecastingType!: string;
    isProtected?: boolean;
    masterLabel!: string;
    parentSourceDefinition?: string;
    relationField?: string;
    sourceGroup!: number;
}

export class FormulaSettings extends Metadata {
    enableDSTAwareDatevalue?: boolean;
}

export class FtestFirstTopLevel extends Metadata {
    content!: number;
    isProtected?: boolean;
    longUrl?: string;
    longUrlNewSlot?: string;
    masterLabel!: string;
}

export class FtestSecondTopLevel extends Metadata {
    content!: number;
    isProtected?: boolean;
    masterLabel!: string;
    user?: string;
}

export class FuelType extends Metadata {
    description?: string;
    isActive?: boolean;
    isProtected?: boolean;
    isStationaryAssetFuel?: boolean;
    isVehicleAssetFuel?: boolean;
    masterLabel!: string;
}

export class FuelTypeSustnUom extends Metadata {
    fuelType!: string;
    isProtected?: boolean;
    masterLabel?: string;
    unitOfMeasure!: string;
}

export class FulfillmentStepType extends Metadata {
    developerName!: string;
    handler!: string;
    isActive!: boolean;
    masterLabel!: string;
}

export class FunctionReference extends Metadata {
    access?: string;
    description?: string;
    imageReference?: string;
    label?: string;
    permissionSet?: string;
}

export class FundraisingConfig extends Metadata {
    donorExternalIdField?: string;
    donorMatchingMethod?: DonorMatchingMethod;
    failedTransactionCount?: number;
    householdSoftCreditRole?: string;
    installmentExtDayCount?: number;
    isHshldSoftCrAutoCrea?: boolean;
    lapsedUnpaidTrxnCount?: number;
    masterLabel?: string;
    outreachSourceCodeGenFmla?: string;
    shouldClosePaidRcrCmt?: boolean;
    shouldCreateRcrSchdTrxn?: boolean;
    utmCampaignSrcObj?: string;
    utmCampaignSrcObjField?: string;
    utmMediumSrcObj?: string;
    utmMediumSrcObjField?: string;
    utmSourceSrcObj?: string;
    utmSourceSrcObjField?: string;
}

export class GatewayProviderPaymentMethodType extends Metadata {
    comments?: string;
    gtwyProviderPaymentMethodType?: string;
    masterLabel!: string;
    paymentGatewayProvider?: string;
    paymentMethodType?: string;
    recordType?: string;
}

export class GenAiFunction extends Metadata {
    description?: string;
    invocationTarget!: string;
    invocationTargetType!: PlannerFunctionInvocableTargetType;
    isConfirmationRequired?: boolean;
    isIncludeInProgressIndicator?: boolean;
    mappingAttributes!: GenAiPlannerAttr[];
    masterLabel!: string;
    progressIndicatorMessage?: string;
}

export class GenAiPlanner extends Metadata {
    attributeMappings!: GenAiPlannerAttrMapping[];
    capabilities?: string;
    description?: string;
    genAiFunctions!: GenAiPlannerFunctionDef[];
    genAiPlannerRuleExpressions!: GenAiPlannerRuleExpr[];
    genAiPlugins!: GenAiPlannerFunctionDef[];
    masterLabel!: string;
    plannerType!: PlannerType;
    ruleExpressionAssignments!: GenAiPlannerRuleExprAsgn[];
    ruleExpressions!: GenAiPlannerRuleExprDef[];
}

export class GenAiPluginInstructionDef extends Metadata {
    description!: string;
    developerName!: string;
    language!: string;
    masterLabel!: string;
}

export class GenAiPlugin extends Metadata {
    aiPluginUtterances!: AiPluginUtteranceDef[];
    canEscalate?: boolean;
    description?: string;
    developerName!: string;
    genAiFunctions!: GenAiPluginFunctionDef[];
    genAiPluginInstructions!: GenAiPluginInstructionDef[];
    language!: string;
    masterLabel!: string;
    pluginType!: PluginType;
    scope?: string;
}

export class GenAiPromptTemplate extends Metadata {
    activeVersion?: string;
    createdInVersion?: number;
    description?: string;
    developerName?: string;
    masterLabel?: string;
    overrideSource?: string;
    relatedEntity?: string;
    relatedField?: string;
    templateVersions!: GenAiPromptTemplateVersion[];
    type?: string;
    visibility?: GenAiPromptTemplateVisibilityType;
}

export class GenAiPromptTemplateActv extends Metadata {
    accessLevel!: GenAiPromptTemplateActvAccessLevel;
    developerName!: string;
    masterLabel?: string;
    templateDeveloperName!: string;
}

export class GlobalPicklist extends Metadata {
    description?: string;
    globalPicklistValues!: GlobalPicklistValue[];
    masterLabel!: string;
    sorted!: boolean;
}

export class GlobalValueSet extends Metadata {
    customValue!: CustomValue[];
    description?: string;
    masterLabel!: string;
    sorted!: boolean;
}

export class GlobalValueSetTranslation extends Metadata {
    valueTranslation!: ValueTranslation[];
}

export class GoogleAppsSettings extends Metadata {
    enableGmailButtons?: boolean;
    enableGmailButtonsAndLinks?: boolean;
    enableGmailLinks?: boolean;
    enableGoogleDocs?: boolean;
    enableGoogleDocsTab?: boolean;
    enableGoogleTalk?: boolean;
    googleAppsDomain?: string;
    googleAppsDomainLinked?: boolean;
    googleAppsDomainValidated?: boolean;
}

export class Group extends Metadata {
    description?: string;
    doesIncludeBosses?: boolean;
    name!: string;
}

export class HerokuIntegrationSettings extends Metadata {
    enableHerokuIntegration?: boolean;
}

export class HighVelocitySalesSettings extends Metadata {
    enableACAutoSendEmail?: boolean;
    enableACChangeTargetAssignee?: boolean;
    enableACSkipWeekends?: boolean;
    enableAutoBdrEmailPref?: boolean;
    enableAutoBdrVoicePref?: boolean;
    enableBusinessHours?: boolean;
    enableCadenceVariantTestingPref?: boolean;
    enableChgTgtAssigneeUsrPermPref?: boolean;
    enableDispositionCategory?: boolean;
    enableEinsteinSdrEmailPref?: boolean;
    enableEngagementWaveAnalyticsPref?: boolean;
    enableHighVelocitySales?: boolean;
    enableHighVelocitySalesSetup?: boolean;
    enableInvoiceAttributionPref?: boolean;
    enableLogACallForCTIPref?: boolean;
    enableLogTasksForLinkedInPref?: boolean;
    enableMultipleCadencesPref?: boolean;
    enableOpportunityAttributionPermPref?: boolean;
    enableProspectingCenterPref?: boolean;
    enableQuickCadenceAutoSendEmail?: boolean;
    enableTaskLoggingPref?: boolean;
}

export class HomePageComponent extends Metadata {
    body?: string;
    height?: number;
    links!: string[];
    page?: string;
    pageComponentType!: PageComponentType;
    showLabel?: boolean;
    showScrollbars?: boolean;
    width?: PageComponentWidth;
}

export class HomePageLayout extends Metadata {
    narrowComponents!: string[];
    wideComponents!: string[];
}

export class IPAddressRange extends Metadata {
    description?: string;
    endIpAddress!: string;
    ipAddressFeature!: IPAddressFeature;
    ipAddressUsageScope!: IPAddressUsageScope;
    isProtected?: boolean;
    masterLabel!: string;
    startIpAddress!: string;
}

export class Icon extends Metadata {
    image!: string;
    key!: string;
    usageType!: IconUsageType;
}

export class IdeasSettings extends Metadata {
    enableChatterProfile?: boolean;
    enableHtmlIdea?: boolean;
    enableIdeaMultipleCategory?: boolean;
    enableIdeaThemes?: boolean;
    enableIdeas?: boolean;
    enableIdeasControllerExtensions?: boolean;
    enableIdeasReputation?: boolean;
    halfLife?: number;
    ideasProfilePage?: string;
}

export class IdentityProviderSettings extends Metadata {
    certificateName!: string;
    enableIdentityProvider!: boolean;
}

export class IdentityVerificationProcDef extends Metadata {
    identityVerificationProcDtls!: IdentityVerificationProcDtl[];
    masterLabel!: string;
    searchLayoutType!: IdentityVerificationSearchLayoutType;
}

export class IdentityVerificationProcDtl extends Metadata {
    apexClass?: string;
    dataSourceType!: IdentityVerificationDataSourceType;
    developerName!: string;
    displayRecordFieldName?: string;
    identityVerificationProcFlds!: IdentityVerificationProcFld[];
    isActive?: boolean;
    isRetryAllowedAfterLimit?: boolean;
    linkedIdVerfProcessDet?: string;
    masterLabel!: string;
    objectName?: string;
    optionalVerifiersMinVerfCount?: number;
    retryLimit?: number;
    searchFilter?: string;
    searchRecordUniqueIdField?: string;
    searchResultSortBy?: string;
    searchSequenceNumber!: number;
    searchType!: IdentityVerificationSearchType;
}

export class IdentityVerificationProcFld extends Metadata {
    customFieldLabel?: string;
    dataSourceType!: IdentityVerificationProcFldDataSourceType;
    developerName!: string;
    fieldDataType?: IdentityVerificationProcFldFieldDataType;
    fieldName!: string;
    fieldType!: IdentityVerificationProcFldFieldType;
    fieldValueFormula?: string;
    isActive?: boolean;
    isManualInput?: boolean;
    masterLabel!: string;
    sequenceNumber!: number;
}

export class IframeWhiteListUrlSettings extends Metadata {
    iframeWhiteListUrls!: IframeWhiteListUrl[];
}

export class InboundNetworkConnection extends Metadata {
    connectionType!: ExternalConnectionType;
    description!: string;
    inboundNetworkConnProperties!: InboundNetworkConnProperty[];
    isActive!: boolean;
    label!: string;
    status!: ExternalConnectionStatus;
}

export class IncidentMgmtSettings extends Metadata {
    enableAlertBroadcastType?: boolean;
    enableEmailBroadcastType?: boolean;
    enableITSMChangeMgmt?: boolean;
    enableITSMIncidentMgmt?: boolean;
    enableITSMProblemMgmt?: boolean;
    enableIncidentMgmt?: boolean;
    enableSiteBannerBroadcastType?: boolean;
    enableSlackBroadcastType?: boolean;
}

export class IndustriesAutomotiveSettings extends Metadata {
    enableAutomotiveAppraisals?: boolean;
    enableAutomotiveCloud?: boolean;
    enableAutomotiveScheduler?: boolean;
    enableAutomotiveServiceExcellence?: boolean;
    enableConnectedVehSrvcsCmpnt?: boolean;
    enableDealerEssntlsAutomotive?: boolean;
}

export class IndustriesChannelPartnerInventorySettings extends Metadata {
    enableChannelPartnerInventoryTracking?: boolean;
}

export class IndustriesEinsteinFeatureSettings extends Metadata {
    documentReaderConfidenceOrgValue!: number;
}

export class IndustriesEventOrchSettings extends Metadata {
    enableEventOrchDecisionTable?: boolean;
}

export class IndustriesFieldServiceSettings extends Metadata {
    enableIndustriesFieldService?: boolean;
}

export class IndustriesManufacturingSettings extends Metadata {
    enableConnectedAssetSrvcsCmpnt?: boolean;
    enableFleetManagement?: boolean;
    enableIndManufacturing?: boolean;
    enableIndustriesMfgAccountForecast?: boolean;
    enableIndustriesMfgAdvForecast?: boolean;
    enableIndustriesMfgIAS?: boolean;
    enableIndustriesMfgProgram?: boolean;
    enableIndustriesMfgTargets?: boolean;
    enablePartnerLeadManagement?: boolean;
    enablePartnerPerformanceManagement?: boolean;
    enablePartnerVisitManagement?: boolean;
    enablePtnrLeadMgmtMappings?: boolean;
    enableRevMgmtForSlsAgr?: boolean;
    enableVehAndAstLending?: boolean;
    enableVehAssetFinAddtnlCmpnts?: boolean;
    enableVehicleAndAssetFinance?: boolean;
}

export class IndustriesSettings extends Metadata {
    allowMultipleProducersToWorkOnSamePolicy?: boolean;
    appointmentDistributionOrgPref?: boolean;
    captureResourceUtilizationOrgPref?: boolean;
    createCustomerPropertyFromLAProperty?: boolean;
    createFSCAssetFromLAAsset?: boolean;
    createFSCAssetFromLAProperty?: boolean;
    createFSCLiabilityFromLAFinancial?: boolean;
    createFSCLiabilityFromLALiability?: boolean;
    createFinancialAccountFromLAAsset?: boolean;
    createFinancialAccountFromLALiability?: boolean;
    createFinancialAccountsFromLAFinancials?: boolean;
    createFinancialAccountsFromLAProperty?: boolean;
    enableAIAccelerator?: boolean;
    enableAWSTextractAnalyzeIDPref?: boolean;
    enableAWSTextractQueriesPref?: boolean;
    enableAWSTextractTablesPref?: boolean;
    enableAcademicInsightsAI?: boolean;
    enableAcademicOperations?: boolean;
    enableAccessToMasterListOfCoverageTypes?: boolean;
    enableAccountScoreEnabled?: boolean;
    enableActionableList?: boolean;
    enableActionableListOrgPref?: boolean;
    enableAdvancedScheduling?: boolean;
    enableAdverseEvents?: boolean;
    enableAdvisingSummaryAI?: boolean;
    enableAlumniRelations?: boolean;
    enableAnyResourceTypeOrgPref?: boolean;
    enableAppFrmAnywhereOrgPref?: boolean;
    enableAppInviteOrgPref?: boolean;
    enableApplnDecStdSharing?: boolean;
    enableAutoComplaintSummaryPref?: boolean;
    enableB2B?: boolean;
    enableB2BAccountPlan?: boolean;
    enableB2BEinstein?: boolean;
    enableBehavioralHealthAppPref?: boolean;
    enableBenefitAndGoalSharingPref?: boolean;
    enableBenefitManagementPreference?: boolean;
    enableBlockResourceAvailabilityOrgPref?: boolean;
    enableBusinessMessenger?: boolean;
    enableCSRDReportingOrgPref?: boolean;
    enableCalculationDetail?: boolean;
    enableCalculationUsingParentPolicyOnly?: boolean;
    enableCallReportAdminContextPref?: boolean;
    enableCandidateMatching?: boolean;
    enableCapacitySchedulingPref?: boolean;
    enableCareGapPrefSetting?: boolean;
    enableCareMgmtSlackAccess?: boolean;
    enableCarePlansPreference?: boolean;
    enableCareTaskSharingSetting?: boolean;
    enableCaseReferralPref?: boolean;
    enableCdpSalesExcellence?: boolean;
    enableCdsAppFormProdSiteUsers?: boolean;
    enableCdsAppFormSiteUsers?: boolean;
    enableCdsApplicationForm?: boolean;
    enableCdsApplicationFormProduct?: boolean;
    enableCdsPartyProfile?: boolean;
    enableCdsPartyProfileSiteUsers?: boolean;
    enableChurnPredictionRT?: boolean;
    enableClaimMgmt?: boolean;
    enableClinicalDataModel?: boolean;
    enableCollectionFLowOps?: boolean;
    enableCollectionRiskScoringCFE?: boolean;
    enableCollectionTimeline?: boolean;
    enableComparisonViewAI?: boolean;
    enableCompliantDataSharingForAccount?: boolean;
    enableCompliantDataSharingForBudget?: boolean;
    enableCompliantDataSharingForBudgetSiteUsers?: boolean;
    enableCompliantDataSharingForCustomObjects?: boolean;
    enableCompliantDataSharingForFinancialDeal?: boolean;
    enableCompliantDataSharingForFundingAward?: boolean;
    enableCompliantDataSharingForFundingAwardSiteUsers?: boolean;
    enableCompliantDataSharingForFundingOpportunity?: boolean;
    enableCompliantDataSharingForFundingOpportunitySiteUsers?: boolean;
    enableCompliantDataSharingForIndividualApplication?: boolean;
    enableCompliantDataSharingForIndividualApplicationSiteUsers?: boolean;
    enableCompliantDataSharingForIndividualApplicationTask?: boolean;
    enableCompliantDataSharingForIndividualApplicationTaskSiteUsers?: boolean;
    enableCompliantDataSharingForInteraction?: boolean;
    enableCompliantDataSharingForInteractionSummary?: boolean;
    enableCompliantDataSharingForOpportunity?: boolean;
    enableCompliantDataSharingForPreliminaryApplicationRef?: boolean;
    enableCompliantDataSharingForPreliminaryApplicationRefSiteUsers?: boolean;
    enableComprehendMedical?: boolean;
    enableContactCenterAccess?: boolean;
    enableContractMgmtPref?: boolean;
    enableContractSearchPref?: boolean;
    enableContractsAIPref?: boolean;
    enableCreateMultiAttendeeEventOrgPref?: boolean;
    enableCrisisCenterAccess?: boolean;
    enableCriteriaBasedSearchAndFilter?: boolean;
    enableCustomFlowsOnCycleCount?: boolean;
    enableCustomFlowsOnExpiryPage?: boolean;
    enableDCHEnGpt?: boolean;
    enableDCHEnGptAccuracy?: boolean;
    enableDCHEnGptFirstDraft?: boolean;
    enableDCHEnGptIL?: boolean;
    enableDCHEnGptSearch?: boolean;
    enableDCHGoogleAddOn?: boolean;
    enableDCHMSO365AddIn?: boolean;
    enableDFDataCapture?: boolean;
    enableDataCloudEventsOnTimeline?: boolean;
    enableDealManagement?: boolean;
    enableDeleteCustomObjectParticipantRecordCompliantDataSharing?: boolean;
    enableDepriveSoqlAccessGuestUserOrgPref?: boolean;
    enableDepriveSoqlAccessOrgPref?: boolean;
    enableDigitalLendingPref?: boolean;
    enableDigitalLendingReadOnlyOrgPref?: boolean;
    enableDiscoveryFrameworkMetadata?: boolean;
    enableDiscoveryFrwrkSampleTemplate?: boolean;
    enableDisplaySummaryOnTimeline?: boolean;
    enableDontSharePartyprofWPortalOrgPref?: boolean;
    enableDpeProviderSearchSettingsOrgPref?: boolean;
    enableDropInAppointmentsOrgPref?: boolean;
    enableDropInFallbackMechOrgPref?: boolean;
    enableDropInSkillMatchingOrgPref?: boolean;
    enableEDCSkillsGenerator?: boolean;
    enableEGPTInsuranceCmpntPref?: boolean;
    enableESGReportingOrgPref?: boolean;
    enableEUCoreAI?: boolean;
    enableEUCoreServiceAppOn?: boolean;
    enableEducationCloud?: boolean;
    enableEinsteinDocReader?: boolean;
    enableEinsteinVisits?: boolean;
    enableEngagementVisualsAI?: boolean;
    enableEnhancedQuestionCreation?: boolean;
    enableEnhancedUIForISPref?: boolean;
    enableEpcDeleteAccess?: boolean;
    enableEventManagementOrgPref?: boolean;
    enableEventWriteOrgPref?: boolean;
    enableExistingHealthCloudOrg?: boolean;
    enableFSCInsuranceReport?: boolean;
    enableFSCInsuranceServiceConsole?: boolean;
    enableFinSummaryRollupMgmt?: boolean;
    enableFinancialAccountMgmt?: boolean;
    enableFinancialDealCallReportCmpPref?: boolean;
    enableFinancialDealCallReportPref?: boolean;
    enableFinancialDealRoleHierarchy?: boolean;
    enableFormFramework?: boolean;
    enableFundraising?: boolean;
    enableGenAIAssessmentQuestions?: boolean;
    enableGnrcDisclsFrmwrk?: boolean;
    enableGrantmaking?: boolean;
    enableGroupMembershipPref?: boolean;
    enableHCReferralScoring?: boolean;
    enableHcCorePatientConsole?: boolean;
    enableHcStdRelationshipJunctions?: boolean;
    enableHighScaleRuleProcessingPref?: boolean;
    enableHomeHealth?: boolean;
    enableHomeHlthRschdFlowRcntVer?: boolean;
    enableIAMPatchModifyPref?: boolean;
    enableIESentimentAnalysis?: boolean;
    enableIndCrossObjChangelog?: boolean;
    enableIndustriesAssessment?: boolean;
    enableIndustriesAssessmentGuestOrgPref?: boolean;
    enableIndustriesAssessmentPrefill?: boolean;
    enableIndustriesCaptchaVerification?: boolean;
    enableIndustriesIntegrationOrchestratorPref?: boolean;
    enableIndustriesKYC?: boolean;
    enableIndustriesLPIPreference?: boolean;
    enableIndustriesOnboarding?: boolean;
    enableIndustriesRebates?: boolean;
    enableIndustriesShipAndDebit?: boolean;
    enableIndustriesStageManagementPref?: boolean;
    enableInformationLibrary?: boolean;
    enableIntegratedCareManagementSetting?: boolean;
    enableInteractionCstmSharingPref?: boolean;
    enableInteractionRoleHierarchy?: boolean;
    enableInteractionSummaryPref?: boolean;
    enableInteractionSummaryRoleHierarchy?: boolean;
    enableLSC4CEContractLifecycleManagement?: boolean;
    enableLSC4CEDocumentManagement?: boolean;
    enableLSC4CEEmailAndTemplate?: boolean;
    enableLSC4CEKeyAccountManagement?: boolean;
    enableLSC4CEMedInsights?: boolean;
    enableLSC4CERemoteEngagement?: boolean;
    enableLSC4CEVisits?: boolean;
    enableLifeSciInquiry?: boolean;
    enableLifeSciencesClinialTrailManagement?: boolean;
    enableLifeSciencesConsent?: boolean;
    enableLifeSciencesCustomerEngagementBase?: boolean;
    enableLifeSciencesMergeManagement?: boolean;
    enableLifeSciencesProviderEngagementCompliance?: boolean;
    enableLifeSciencesSiteManagement?: boolean;
    enableManyToManyRelationships?: boolean;
    enableMaterialityAssessment?: boolean;
    enableMcgSetting?: boolean;
    enableMedRecSetting?: boolean;
    enableMedicalDeviceEnabled?: boolean;
    enableMedicationManagementEnabled?: boolean;
    enableMentoring?: boolean;
    enableMicrosoftWordAddInEnabled?: boolean;
    enableMortgageRlaTotalsOrgPref?: boolean;
    enableMulesoftFhirR4Apis?: boolean;
    enableMultiResourceOrgPref?: boolean;
    enableMultipleCareProgramEnrolleeOrgPref?: boolean;
    enableMultipleTopicsForShiftsOrgPref?: boolean;
    enableNZCENCarbonAccounting?: boolean;
    enableNZCENGPTDCHIL?: boolean;
    enableNZCENScope3ProcHub?: boolean;
    enableNZCMngEnrgyAttrCr?: boolean;
    enableNZCMngEsgPgm?: boolean;
    enableNZCWithEinstein?: boolean;
    enableNewTimelineSetupFlow?: boolean;
    enableNextBestAction?: boolean;
    enableNextBestCustomer?: boolean;
    enableNextBestMessage?: boolean;
    enableObjectDetection?: boolean;
    enableOutcomes?: boolean;
    enableOverbookingOrgPref?: boolean;
    enableOverbookingWithGroupOrgPref?: boolean;
    enablePCMConfigRules?: boolean;
    enablePartyProfileParentSharingOrgPref?: boolean;
    enablePartyprofParentMultiSharingOrgPref?: boolean;
    enablePatientAppointmentSchedulingOrgPref?: boolean;
    enablePatientServicesOrchestration?: boolean;
    enablePersonAcctAddrSync?: boolean;
    enablePolicyAdministration?: boolean;
    enablePreBookedFallbackMechOrgPref?: boolean;
    enableProgramCohorts?: boolean;
    enableProviderSearchForGuestUser?: boolean;
    enableProviderSearchPreciseMatch?: boolean;
    enableProviderSearchSyncOrgPref?: boolean;
    enablePulseChecks?: boolean;
    enableRBLUsingCalcService?: boolean;
    enableRecordRollup?: boolean;
    enableReferralManagementApp?: boolean;
    enableReferralScoring?: boolean;
    enableReminders?: boolean;
    enableRosterFileFeatureOrgPreference?: boolean;
    enableSCAllocScorEmssnSpentAmt?: boolean;
    enableSCAssignFootprint?: boolean;
    enableSCBEIEnabled?: boolean;
    enableSCCarbonAccounting?: boolean;
    enableSCCarbonCreditAlloc?: boolean;
    enableSCCreateFootprint?: boolean;
    enableSCDGF?: boolean;
    enableSCEmssnsForecasting?: boolean;
    enableSCExpansionUseCase?: boolean;
    enableSCExternalEngMgmt?: boolean;
    enableSCGenrateCnsmpRcd?: boolean;
    enableSCSNGManagement?: boolean;
    enableSCScope3HubEnabled?: boolean;
    enableSCSnGAffiliates?: boolean;
    enableSCSplitCnsmpRcd?: boolean;
    enableSCTargetSetting?: boolean;
    enableSCWasteManagement?: boolean;
    enableSCWaterManagement?: boolean;
    enableSaveForLaterForDiscoveryFramework?: boolean;
    enableSchedulerPaymentsPref?: boolean;
    enableScoringFrameworkCRMAPref?: boolean;
    enableScoringFrameworkOrgPref?: boolean;
    enableSentimentAnalysis?: boolean;
    enableShareSaWithArOrgPref?: boolean;
    enableSlackForCib?: boolean;
    enableSmartTags?: boolean;
    enableSourceCodeGeneration?: boolean;
    enableStudentManagement?: boolean;
    enableStudentSuccess?: boolean;
    enableSustainabilityCloud?: boolean;
    enableSyncInteractionsPref?: boolean;
    enableTearSheetPref?: boolean;
    enableTextExtract?: boolean;
    enableTimelinePref?: boolean;
    enableTopicOrTemplate?: boolean;
    enableTopicTimeSlot?: boolean;
    enableTrialManagementRandomization?: boolean;
    enableTurnOffDsclsReprtPbsrName?: boolean;
    enableUMPayerAppAccessOrgPreference?: boolean;
    enableVideoVisitsOrgPref?: boolean;
    enableVisitCalendarSync?: boolean;
    enableVisitInventoryEnabled?: boolean;
    enableWealthManagementAIPref?: boolean;
    isCustomDpeTxObsProviderSearchEnabled?: boolean;
    loanApplicantAddressAutoCreation?: boolean;
    loanApplicantAutoCreation?: boolean;
    mortgageSalesforceSharing?: boolean;
    nonProfitCloudEmbeddedAI?: boolean;
    partyProfMultiShrPrtnrsOrgPref?: boolean;
    rlaEditIfAccHasEdit?: boolean;
    showCollectionContactAndAccount?: boolean;
    transformRBLtoDPE?: boolean;
}

export class InsPlcyCoverageSpecConfig extends Metadata {
    coverageSpecification!: string;
    isNetworkTierApplicable!: boolean;
    masterLabel!: string;
}

export class InsPlcyLineOfBusConfig extends Metadata {
    lineOfBusiness!: string;
    masterLabel!: string;
    termName!: string;
}

export class InsPolicyLifecycleConfig extends Metadata {
    customContextDefinition?: string;
    customContextMapping?: string;
    displayFields!: string;
    policyProcessType!: InsPolicyLifecycleProcess;
    standardContextDefinition?: string;
    standardContextMapping?: string;
}

export class InsPolicyManagementConfig extends Metadata {
    expectedRevExpsSetDef?: string;
    label!: string;
    premiumCalcExpsSetDef?: string;
    stdExpectedRevExpsSetDef?: string;
    stdPremiumCalcExpsSetDef?: string;
}

export class InsRatePlanCmsnConfig extends Metadata {
    calculationType!: InsRatePlanCmsnConfigCalcType;
    displayFields!: string;
    ratePlanCommissionType!: string;
}

export class InsRatePlanTypeConfig extends Metadata {
    displayFields!: string;
    ratePlanCommissionTypes!: string;
    ratePlanType!: string;
}

export class InstalledPackage extends Metadata {
    activateRSS!: boolean;
    password?: string;
    securityType?: string;
    versionNumber!: string;
}

export class IntegrationProviderDef extends Metadata {
    active?: boolean;
    apexClass?: string;
    description?: string;
    developerName!: string;
    externalServiceOperationName?: string;
    externalServiceRegistration?: string;
    fileBasedApexClass?: string;
    inputDataProcessor?: string;
    integrationProviderAttributes!: IntegrationProviderAttr[];
    javaClassName?: string;
    outputDataProcessor?: string;
    providerLabel!: string;
    type!: DefinitionType;
}

export class InternalDataConnector extends Metadata {
    alias!: string;
    dataConnectionStatus!: DataConnectionStatus;
    dataConnectorType!: DataConnectorType;
    dataPlatform!: string;
    dataSourceTenant!: string;
    dataSpace!: string;
    externalRecordId!: string;
    isMetadataSync!: boolean;
    masterLabel!: string;
}

export class InternalOrganization extends Metadata {
    isForDataExport!: boolean;
    isForDataImport!: boolean;
    masterLabel!: string;
}

export class InventoryReplenishmentSettings extends Metadata {
    enableInventoryReplenishment?: boolean;
}

export class InventorySettings extends Metadata {
    enableOCIB2CIntegration?: boolean;
    enableOmniChannelInventory?: boolean;
}

export class InvocableActionSettings extends Metadata {
    isPartialSaveAllowed?: boolean;
}

export class IoTSettings extends Metadata {
    enableIoT?: boolean;
    enableIoTInsightsPilot?: boolean;
    enableIoTUsageEmail?: boolean;
}

export class KeywordList extends Metadata {
    description?: string;
    keywords!: Keyword[];
    masterLabel!: string;
}

export class KnowledgeSettings extends Metadata {
    answers?: KnowledgeAnswerSettings;
    cases?: KnowledgeCaseSettings;
    defaultLanguage?: string;
    enableChatterQuestionKBDeflection?: boolean;
    enableCreateEditOnArticlesTab?: boolean;
    enableExternalMediaContent?: boolean;
    enableKbStandardSharing?: boolean;
    enableKnowledge?: boolean;
    enableKnowledgeAgentContribution?: boolean;
    enableKnowledgeAnswersPromotion?: boolean;
    enableKnowledgeArticleTextHighlights?: boolean;
    enableKnowledgeCaseRL?: boolean;
    enableKnowledgeKeywordAutoComplete?: boolean;
    enableKnowledgeTitleAutoComplete?: boolean;
    enableLightningKbAutoLoadRichTextField?: boolean;
    enableLightningKnowledge?: boolean;
    languages?: KnowledgeLanguageSettings;
    showArticleSummariesCustomerPortal?: boolean;
    showArticleSummariesInternalApp?: boolean;
    showArticleSummariesPartnerPortal?: boolean;
    showValidationStatusField?: boolean;
    suggestedArticles?: KnowledgeSuggestedArticlesSettings;
    votingEnabled?: boolean;
}

export class LaborCostOptimizationSettings extends Metadata {
    canShowVehicle?: boolean;
    canShowVehicleDefinition?: boolean;
    enableTimeSheetsAndLaborCostOptimization?: boolean;
    endTimeOffset?: number;
    startTimeOffset?: number;
}

export class LanguageSettings extends Metadata {
    enableCanadaIcuFormat?: boolean;
    enableDataTranslation?: boolean;
    enableEndUserLanguages?: boolean;
    enableICULocaleDateFormat?: boolean;
    enableLanguageExtensionPackage?: boolean;
    enableLocalNamesForStdObjects?: boolean;
    enableLocaleInsensitiveFiltering?: boolean;
    enablePlatformLanguages?: boolean;
    enableTranslationWorkbench?: boolean;
    useLanguageFallback?: boolean;
}

export class Layout extends Metadata {
    customButtons!: string[];
    customConsoleComponents?: CustomConsoleComponents;
    emailDefault?: boolean;
    excludeButtons!: string[];
    feedLayout?: FeedLayout;
    headers!: LayoutHeader[];
    layoutSections!: LayoutSection[];
    miniLayout?: MiniLayout;
    multilineLayoutFields!: string[];
    platformActionList?: PlatformActionList;
    quickActionList?: QuickActionList;
    relatedContent?: RelatedContent;
    relatedLists!: RelatedListItem[];
    relatedObjects!: string[];
    runAssignmentRulesDefault?: boolean;
    showEmailCheckbox?: boolean;
    showHighlightsPanel?: boolean;
    showInteractionLogPanel?: boolean;
    showKnowledgeComponent?: boolean;
    showRunAssignmentRulesCheckbox?: boolean;
    showSolutionSection?: boolean;
    showSubmitAndAttachButton?: boolean;
    summaryLayout?: SummaryLayout;
}

export class LeadConfigSettings extends Metadata {
    doesEnableLeadConvertDefaultSubjectBlankTaskCreation?: boolean;
    doesHideOpportunityInConvertLeadWindow?: boolean;
    doesPreserveLeadStatus?: boolean;
    doesSelectNoOpportunityOnConvertLead?: boolean;
    doesTrackHistory?: boolean;
    enableConversionsOnMobile?: boolean;
    enableOrgWideMergeAndDelete?: boolean;
    shouldLeadConvertRequireValidation?: boolean;
    shouldSendNotificationEmailWhenLeadOwnerUpdatesViaApexInLEX?: boolean;
}

export class LeadConvertSettings extends Metadata {
    allowOwnerChange?: boolean;
    objectMapping!: ObjectMapping[];
    opportunityCreationOptions?: VisibleOrRequired;
}

export class LearningItemType extends Metadata {
    apexEvaluationHandler?: string;
    apexSerializerDeserializer?: string;
    customField!: string;
    customObject!: string;
    developerName!: string;
    icon!: string;
    lightningComponentDefinition!: string;
    masterLabel!: string;
}

export class Letterhead extends Metadata {
    available!: boolean;
    backgroundColor!: string;
    bodyColor!: string;
    bottomLine!: LetterheadLine;
    description?: string;
    footer!: LetterheadHeaderFooter;
    header!: LetterheadHeaderFooter;
    middleLine!: LetterheadLine;
    name!: string;
    topLine!: LetterheadLine;
}

export class LicenseDefinition extends Metadata {
    aggregationGroup!: string;
    description?: string;
    isPublished!: boolean;
    label!: string;
    licensedCustomPermissions!: LicensedCustomPermissions[];
    licensingAuthority!: string;
    licensingAuthorityProvider!: string;
    minPlatformVersion!: number;
    origin!: string;
    revision!: number;
    trialLicenseDuration!: number;
    trialLicenseQuantity!: number;
}

export class LicensingSettings extends Metadata {
    enableAutoCreateLicenseDefinition?: boolean;
    enableOnDemandProvisioning?: boolean;
}

export class LifeSciConfigCategory extends Metadata {
    category!: LifeSciConfigCategoryType;
    categoryLabel?: string;
    isProtected?: boolean;
    masterLabel!: string;
}

export class LifeSciConfigRecord extends Metadata {
    assignments!: LifeSciConfigAssignment[];
    fieldValues!: LifeSciConfigFieldValue[];
    isActive?: boolean;
    isOrgLevel?: boolean;
    isProtected?: boolean;
    lifeSciConfigCategory!: string;
    masterLabel!: string;
    parentConfigRecord?: string;
    type?: string;
}

export class LightningBolt extends Metadata {
    category!: LightningBoltCategory;
    lightningBoltFeatures!: LightningBoltFeatures[];
    lightningBoltImages!: LightningBoltImages[];
    lightningBoltItems!: LightningBoltItems[];
    masterLabel!: string;
    publisher!: string;
    summary!: string;
}

export class LightningComponentBundle extends Metadata {
    apiVersion?: number;
    capabilities?: Capabilities;
    description?: string;
    isExplicitImport?: boolean;
    isExposed?: boolean;
    lwcResources?: LwcResources;
    masterLabel?: string;
    runtimeNamespace?: string;
    targetConfigs?: string;
    targets?: Targets;
}

export class LightningExperienceSettings extends Metadata {
    activeThemeName?: string;
    enableAccessCheckCrucPref?: boolean;
    enableApiUserLtngOutAccessPref?: boolean;
    enableAuraCDNPref?: boolean;
    enableAuraSecStaticResCRUCPref?: boolean;
    enableDeferRenderingWorkspacePage?: boolean;
    enableErrorExperienceEnabled?: boolean;
    enableFeedbackInMobile?: boolean;
    enableGoogleSheetsForSfdcEnabled?: boolean;
    enableHideOpenInQuip?: boolean;
    enableIE11DeprecationMsgHidden?: boolean;
    enableIE11LEXCrucPref?: boolean;
    enableInAppLearning?: boolean;
    enableInAppTooltips?: boolean;
    enableLEXExtensionComponentCustomization?: boolean;
    enableLEXExtensionDarkMode?: boolean;
    enableLEXExtensionInlineEditModifier?: boolean;
    enableLEXExtensionLinkGrabber?: boolean;
    enableLEXExtensionRelatedLists?: boolean;
    enableLEXExtensionRequiredFields?: boolean;
    enableLEXExtensionTrailhead?: boolean;
    enableLEXOnIpadEnabled?: boolean;
    enableLexEndUsersNoSwitching?: boolean;
    enableLightningPreviewPref?: boolean;
    enableNavPersonalizationOptOut?: boolean;
    enableNoBackgroundNavigations?: boolean;
    enableQuip?: boolean;
    enableRemoveThemeBrandBanner?: boolean;
    enableS1BannerPref?: boolean;
    enableS1BrowserEnabled?: boolean;
    enableS1DesktopEnabled?: boolean;
    enableS1UiLoggingEnabled?: boolean;
    enableSalesforceNext?: boolean;
    enableSidToken3rdPartyAuraApp?: boolean;
    enableSkypeChatEnabled?: boolean;
    enableSparkAllUsers?: boolean;
    enableSparkConversationEnabled?: boolean;
    enableStackedModalManagerEnabled?: boolean;
    enableTryLightningOptOut?: boolean;
    enableUseS1AlohaDesktop?: boolean;
    enableUsersAreLightningOnly?: boolean;
    enableWebExEnabled?: boolean;
    enableWebexAllUsers?: boolean;
    isLEXExtensionComponentCustomizationOff?: boolean;
    isLEXExtensionDarkModeOff?: boolean;
    isLEXExtensionLinkGrabberOff?: boolean;
    isLEXExtensionOff?: boolean;
}

export class LightningExperienceTheme extends Metadata {
    defaultBrandingSet!: string;
    description?: string;
    designSystemVersion?: LightningDesignSystemVersion;
    masterLabel!: string;
    shouldOverrideLoadingImage?: boolean;
}

export class LightningMessageChannel extends Metadata {
    description?: string;
    isExposed?: boolean;
    lightningMessageFields!: LightningMessageField[];
    masterLabel!: string;
}

export class LightningOnboardingConfig extends Metadata {
    collaborationGroup?: string;
    customQuestion?: string;
    feedbackFormDaysFrequency?: number;
    isCustom!: boolean;
    masterLabel!: string;
    promptDelayTime?: number;
    sendFeedbackToSalesforce!: boolean;
}

export class LightningTypeBundle extends Metadata {
    description?: string;
    masterLabel!: string;
    resources!: LightningTypeBundleResource[];
}

export class LiveAgentSettings extends Metadata {
    enableChatFindOrCreateEnable?: boolean;
    enableLiveAgent?: boolean;
    enableQuickTextEnabled?: boolean;
}

export class LiveChatAgentConfig extends Metadata {
    assignments?: AgentConfigAssignments;
    autoGreeting?: string;
    capacity?: number;
    criticalWaitTime?: number;
    customAgentName?: string;
    disableTransferConferenceGreeting?: boolean;
    enableAgentFileTransfer?: boolean;
    enableAgentSneakPeek?: boolean;
    enableAssistanceFlag?: boolean;
    enableAutoAwayOnDecline?: boolean;
    enableAutoAwayOnPushTimeout?: boolean;
    enableChatConferencing?: boolean;
    enableChatMonitoring?: boolean;
    enableChatTransferToAgent?: boolean;
    enableChatTransferToButton?: boolean;
    enableChatTransferToSkill?: boolean;
    enableLogoutSound?: boolean;
    enableNotifications?: boolean;
    enableRequestSound?: boolean;
    enableSneakPeek?: boolean;
    enableVisitorBlocking?: boolean;
    enableWhisperMessage?: boolean;
    label!: string;
    supervisorDefaultAgentStatusFilter?: SupervisorAgentStatusFilter;
    supervisorDefaultButtonFilter?: string;
    supervisorDefaultSkillFilter?: string;
    supervisorSkills?: SupervisorAgentConfigSkills;
    transferableButtons?: AgentConfigButtons;
    transferableSkills?: AgentConfigSkills;
}

export class LiveChatButton extends Metadata {
    animation?: LiveChatButtonPresentation;
    autoGreeting?: string;
    chasitorIdleTimeout?: number;
    chasitorIdleTimeoutWarning?: number;
    chatPage?: string;
    customAgentName?: string;
    deployments?: LiveChatButtonDeployments;
    enableQueue?: boolean;
    inviteEndPosition?: LiveChatButtonInviteEndPosition;
    inviteImage?: string;
    inviteStartPosition?: LiveChatButtonInviteStartPosition;
    isActive?: boolean;
    label!: string;
    numberOfReroutingAttempts?: number;
    offlineImage?: string;
    onlineImage?: string;
    optionsCustomRoutingIsEnabled?: boolean;
    optionsHasChasitorIdleTimeout!: boolean;
    optionsHasInviteAfterAccept?: boolean;
    optionsHasInviteAfterReject?: boolean;
    optionsHasRerouteDeclinedRequest?: boolean;
    optionsIsAutoAccept?: boolean;
    optionsIsInviteAutoRemove?: boolean;
    overallQueueLength?: number;
    perAgentQueueLength?: number;
    postChatPage?: string;
    postChatUrl?: string;
    preChatFormPage?: string;
    preChatFormUrl?: string;
    pushTimeOut?: number;
    routingType!: LiveChatButtonRoutingType;
    site?: string;
    skills?: LiveChatButtonSkills;
    timeToRemoveInvite?: number;
    type!: LiveChatButtonType;
    windowLanguage?: Language;
}

export class LiveChatDeployment extends Metadata {
    brandingImage?: string;
    connectionTimeoutDuration?: number;
    connectionWarningDuration?: number;
    displayQueuePosition?: boolean;
    domainWhiteList?: LiveChatDeploymentDomainWhitelist;
    enablePrechatApi?: boolean;
    enableTranscriptSave?: boolean;
    label!: string;
    mobileBrandingImage?: string;
    site?: string;
    windowTitle!: string;
}

export class LiveChatSensitiveDataRule extends Metadata {
    actionType!: SensitiveDataActionType;
    description?: string;
    enforceOn!: number;
    isEnabled!: boolean;
    pattern!: string;
    priority!: number;
    processingType!: SensitiveDataRuleProcessing;
    replacement?: string;
    version!: SensitiveDataRuleVersion;
}

export class LiveMessageSettings extends Metadata {
    enableCheckCEUserPerm?: boolean;
    enableLiveMessage?: boolean;
}

export class LocationUse extends Metadata {
    isBookable?: boolean;
    isProtected?: boolean;
    locationType!: string;
    masterLabel!: string;
    use?: string;
}

export class LoyaltyProgramSetup extends Metadata {
    label?: string;
    programProcesses!: LoyaltyProgramProcess[];
}

export class MLDataDefinition extends Metadata {
    developerName!: string;
    entityDeveloperName!: string;
    excludedFields!: string[];
    includedFields!: string[];
    joinFields!: MLField[];
    parentDefinitionDevName!: string;
    scoringFilter?: MLFilter;
    segmentFilter?: MLFilter;
    trainingFilter?: MLFilter;
    type!: MLDataDefinitionType;
}

export class MLGenerativeDefinition extends Metadata {
    aiApplicationDeveloperName!: string;
    description?: string;
    developerName!: string;
    masterLabel?: string;
    status!: MLGenerativeDefinitionStatus;
    type!: MLGenerativeType;
}

export class MLPredictionDefinition extends Metadata {
    aiApplicationDeveloperName!: string;
    description?: string;
    developerName!: string;
    masterLabel?: string;
    negativeExpression?: MLFilter;
    positiveExpression?: MLFilter;
    predictionField?: string;
    priority?: number;
    pushbackField?: string;
    status!: MLPredictionDefinitionStatus;
    type!: AIPredictionType;
}

export class MLRecommendationDefinition extends Metadata {
    aiApplicationDeveloperName!: string;
    description?: string;
    developerName!: string;
    externalId?: string;
    interactionDateTimeField?: string;
    masterLabel!: string;
    negativeExpression?: MLFilter;
    positiveExpression?: MLFilter;
    status!: MLRecommendationDefinitionStatus;
}

export class MacroSettings extends Metadata {
    contextualMacroFiltering?: boolean;
    enableAdvancedSearch?: boolean;
    macrosInFolders?: boolean;
}

export class ManagedContentType extends Metadata {
    description?: string;
    developerName!: string;
    isMetadataContent?: boolean;
    managedContentNodeTypes!: ManagedContentNodeType[];
    masterLabel!: string;
}

export class ManagedContentTypeBundle extends Metadata {
    description?: string;
    developerName!: string;
    masterLabel!: string;
    schemaBody!: string;
}

export class ManagedEventSubscription extends Metadata {
    defaultReplay?: EventSubscriptionReplayPreset;
    errorRecoveryReplay?: EventSubscriptionReplayPreset;
    label?: string;
    state?: EventSubscriptionAdminState;
    topicName?: string;
    version?: string;
}

export class ManagedTopic extends Metadata {
    managedTopicType!: string;
    name!: string;
    parentName!: string;
    position!: number;
    topicDescription!: string;
}

export class ManagedTopics extends Metadata {
    managedTopic!: ManagedTopic[];
}

export class MarketAudienceDefinition extends Metadata {
    audienceContactPoints!: AudienceContactPoint[];
    audiencePackageOwner?: string;
    channels?: string;
    description?: string;
    externalKey?: string;
    isProtected?: boolean;
    lastAudienceExcludedCount?: number;
    lastAudienceMemberCount?: number;
    marketAudienceFields!: MarketAudienceField[];
    masterLabel!: string;
    status!: MarketAudienceStatus;
}

export class MarketSegmentDefinition extends Metadata {
    additionalMetadata?: string;
    excludeCriteria?: string;
    includeCriteria?: string;
    masterLabel!: string;
    segmentOn?: string;
    segmentType!: MarketSegmentType;
}

export class MarketingAppExtActivity extends Metadata {
    description?: string;
    endpointUrl?: string;
    isActive?: boolean;
    isProtected?: boolean;
    marketingAppExtension!: string;
    masterLabel!: string;
}

export class MarketingAppExtension extends Metadata {
    description?: string;
    isActive?: boolean;
    isProtected?: boolean;
    marketingAppExtActions!: MarketingAppExtAction[];
    marketingAppExtActivities!: MarketingAppExtActivity[];
    masterLabel!: string;
}

export class MatchingRule extends Metadata {
    booleanFilter?: string;
    description?: string;
    label!: string;
    matchingRuleItems!: MatchingRuleItem[];
    ruleStatus!: MatchingRuleStatus;
}

export class MatchingRules extends Metadata {
    matchingRules!: MatchingRule[];
}

export class MeetingsSettings extends Metadata {
    enableSalesforceMeetings?: boolean;
    enableSalesforceMeetingsSyncCheck?: boolean;
    enableZoomVideoConference?: boolean;
}

export class MessagingChannel extends Metadata {
    automatedResponses!: MessagingAutoResponse[];
    channelUsages!: MessagingChannelUsage[];
    countryCode?: string;
    customParameters!: MessagingChannelCustomParameter[];
    description?: string;
    embeddedConfig?: EmbeddedMessagingChannel;
    externalAccountId?: string;
    masterLabel!: string;
    messagingChannelType!: MessagingChannelType;
    messagingKeywords!: MessagingKeyword[];
    platformKey?: string;
    queueRoutingConfig?: string;
    sessionHandlerFlow?: string;
    sessionHandlerQueue?: string;
    sessionHandlerType!: MessagingSessionHandlerType;
    sessionHandlerUser?: string;
    standardParameters!: MessagingChannelStandardParameter[];
}

export class MetadataGroup extends Metadata {
    description?: string;
    mappings!: string[];
}

export class MfgProgramTemplate extends Metadata {
    description?: string;
    programTemplateItems!: MfgProgramTemplateItem[];
    programTemplateName!: string;
    status!: MfgProgramTemplateStatus;
}

export class MfgServiceConsoleSettings extends Metadata {
    enableMfgServiceConsole?: boolean;
}

export class MilestoneType extends Metadata {
    description?: string;
    recurrenceType?: MilestoneTypeRecurrenceType;
}

export class MktCalcInsightObjectDef extends Metadata {
    builderExpression?: string;
    creationType!: CalculatedInsightCreationType;
    description?: string;
    expression?: string;
    masterLabel!: string;
}

export class MktDataConnection extends Metadata {
    connectionMethod!: MktDataConnectionMethod;
    connectionStatus?: MktDataConnectionStatus;
    connectorName!: string;
    credentials!: MktDataConnectionCred[];
    externalRecordIdentifier?: string;
    masterLabel!: string;
    parameters!: MktDataConnectionParam[];
}

export class MktDataConnectionCred extends Metadata {
    credentialName!: string;
    value!: string;
}

export class MktDataConnectionParam extends Metadata {
    paramName!: string;
    value!: string;
}

export class MktDataTranField extends Metadata {
    creationType!: DefinitionCreationType;
    datatype!: string;
    dateFormat?: string;
    externalName!: string;
    isDataRequired?: boolean;
    length?: number;
    masterLabel!: string;
    precision?: number;
    primaryIndexOrder?: number;
    scale?: number;
    sequence!: number;
}

export class MktDataTranObject extends Metadata {
    connector!: string;
    creationType!: DefinitionCreationType;
    dataSource!: string;
    dataSourceObject!: string;
    masterLabel!: string;
    mktDataTranFields!: MktDataTranField[];
    objectCategory!: string;
}

export class MktDatalakeSrcKeyQualifier extends Metadata {
    description?: string;
    masterLabel!: string;
}

export class MlDomain extends Metadata {
    description?: string;
    label!: string;
    mlIntents!: MlIntent[];
    mlSlotClasses!: MlSlotClass[];
}

export class MlModelArtifact extends Metadata {
    algorithmType?: MlAIModelAlgorithmType;
    connectorType?: MlModelConnectorType;
    deployStatus?: MlModelDeployStatus;
    description?: string;
    generativeModelType?: MlGenerativeModelType;
    inputFeatures!: MlModelInput[];
    label!: string;
    modelCapabilities!: MlGenerativeModelCapability[];
    modelCapability?: MlModelCapability;
    modelType?: MlModelType;
    outputFeatures!: MlModelOutput[];
    parameterOverrides!: MlParameterOverride[];
    parameters!: MlParameterDefinition[];
    parentModel?: string;
    predictionType?: MlModelPredictionType;
    runtimeType?: MlRuntimeType;
    source?: string;
    sourceContainer?: string;
    sourceType?: MlModelSourceType;
    trainingMetrics?: string;
    type!: MlAIModelType;
}

export class MlModelConnection extends Metadata {
    deployStatus?: MlModelDeployStatus;
    endpoints!: MlModelEndpoint[];
    externalSystemRegistry?: string;
    foundationalModelName?: string;
    label!: string;
    outputFeatures!: MlModelOutput[];
    registeredModelApiName?: string;
    type!: MlModelConnectorType;
}

export class MlModelSchema extends Metadata {
    format?: MlInferenceFormat;
    isMultiRowPrediction?: boolean;
    label!: string;
    multiRowPredictionKey?: string;
    multiRowResultKey?: string;
    schema!: string;
}

export class MobileApplicationDetail extends Metadata {
    applicationBinaryFile?: string;
    applicationBinaryFileName?: string;
    applicationBundleIdentifier?: string;
    applicationFileLength?: number;
    applicationIconFile?: string;
    applicationIconFileName?: string;
    applicationInstallUrl?: string;
    devicePlatform!: DevicePlatformType;
    deviceType?: string;
    minimumOsVersion?: string;
    privateApp?: boolean;
    version!: string;
}

export class MobileSettings extends Metadata {
    dashboardMobile?: DashboardMobileSettings;
    enableImportContactFromDevice?: boolean;
    enableOfflineDraftsEnabled?: boolean;
    enablePopulateNameManuallyInToday?: boolean;
    enableS1EncryptedStoragePref2?: boolean;
    enableS1OfflinePref?: boolean;
}

export class ModerationRule extends Metadata {
    action!: ModerationRuleAction;
    actionLimit?: number;
    active!: boolean;
    description?: string;
    entitiesAndFields!: ModeratedEntityField[];
    masterLabel!: string;
    notifyLimit?: number;
    timePeriod?: RateLimitTimePeriod;
    type?: ModerationRuleType;
    userCriteria!: string[];
    userMessage?: string;
}

export class Module extends Metadata {
    description?: string;
    label!: string;
    moduleDependencies?: ModuleDependencies;
    moduleType!: string;
    name!: string;
    types!: PackageTypeMembers[];
    version?: string;
}

export class MyDomainDiscoverableLogin extends Metadata {
    apexHandler!: string;
    executeApexHandlerAs?: string;
    usernameLabel?: string;
}

export class MyDomainSettings extends Metadata {
    areLegacyRedirectsMaintained?: boolean;
    canOnlyLoginWithMyDomainUrl?: boolean;
    doesApiLoginRequireOrgDomain?: boolean;
    doesWarnOnForceComRedirect?: boolean;
    doesWarnOnRedirect?: boolean;
    domainPartition?: OrgDomainShard;
    enableCrossDomainPreviewCookies?: boolean;
    enableEdgeDuringRollout?: boolean;
    enableExtendedRedirections?: boolean;
    enableLegacyRedirections?: boolean;
    enableNativeBrowserForAuthOnAndroid?: boolean;
    enableNativeBrowserForAuthOnIos?: boolean;
    enableShareBrowserSessionAndroidForAuth?: boolean;
    enableShareBrowserSessionIOSForAuth?: boolean;
    instancedUrlRedirectHandling?: OrgDomainRedirectOption;
    isFirstPartyCookieUseRequired?: boolean;
    logRedirections?: boolean;
    myDomainName?: string;
    myDomainSuffix?: OrgDomainProdSuffix;
    onboardCustomerSpecificSuffix?: boolean;
    redirectForceComSiteUrls?: boolean;
    redirectPriorMyDomain?: boolean;
    use3rdPartyCookieBlockingCompatibleHostnames?: boolean;
    useEdge?: boolean;
    useEnhancedDomainsInSandbox?: boolean;
    useStabilizedMyDomainHostnames?: boolean;
    useStabilizedSandboxMyDomainHostnames?: boolean;
}

export class NameSettings extends Metadata {
    enableInformalName?: boolean;
    enableMiddleName?: boolean;
    enableNameSuffix?: boolean;
}

export class NamedCredential extends Metadata {
    allowMergeFieldsInBody?: boolean;
    allowMergeFieldsInHeader?: boolean;
    authProvider?: string;
    authTokenEndpointUrl?: string;
    awsAccessKey?: string;
    awsAccessSecret?: string;
    awsRegion?: string;
    awsService?: string;
    calloutStatus?: CalloutStatus;
    certificate?: string;
    endpoint?: string;
    generateAuthorizationHeader?: boolean;
    jwtAudience?: string;
    jwtFormulaSubject?: string;
    jwtIssuer?: string;
    jwtSigningCertificate?: string;
    jwtTextSubject?: string;
    jwtValidityPeriodSeconds?: number;
    label!: string;
    namedCredentialParameters!: NamedCredentialParameter[];
    namedCredentialType?: NamedCredentialType;
    oauthRefreshToken?: string;
    oauthScope?: string;
    oauthToken?: string;
    outboundNetworkConnection?: string;
    password?: string;
    principalType?: ExternalPrincipalType;
    protocol?: AuthenticationProtocol;
    username?: string;
}

export class NavigationMenu extends Metadata {
    container!: string;
    containerType!: string;
    label!: string;
    navigationMenuItem!: NavigationMenuItem[];
}

export class Network extends Metadata {
    allowInternalUserLogin?: boolean;
    allowMembersToFlag?: boolean;
    allowedExtensions?: string;
    branding?: Branding;
    caseCommentEmailTemplate?: string;
    changePasswordTemplate!: string;
    chgEmailVerNewTemplate?: string;
    chgEmailVerOldTemplate?: string;
    communityRoles?: CommunityRoles;
    description?: string;
    deviceActEmailTemplate?: string;
    disableReputationRecordConversations?: boolean;
    emailFooterLogo?: string;
    emailFooterText?: string;
    emailSenderAddress!: string;
    emailSenderName!: string;
    embeddedLoginEnabled?: boolean;
    enableApexCDNCaching?: boolean;
    enableCustomVFErrorPageOverrides?: boolean;
    enableDirectMessages?: boolean;
    enableExpFriendlyUrlsAsDefault?: boolean;
    enableExperienceBundleBasedSnaOverrideEnabled?: boolean;
    enableGuestChatter?: boolean;
    enableGuestFileAccess?: boolean;
    enableGuestMemberVisibility?: boolean;
    enableImageOptimizationCDN?: boolean;
    enableInvitation?: boolean;
    enableKnowledgeable?: boolean;
    enableLWRExperienceConnectedApp?: boolean;
    enableMemberVisibility?: boolean;
    enableNicknameDisplay?: boolean;
    enablePrivateMessages?: boolean;
    enableReputation?: boolean;
    enableShowAllNetworkSettings?: boolean;
    enableSiteAsContainer?: boolean;
    enableTalkingAboutStats?: boolean;
    enableTopicAssignmentRules?: boolean;
    enableTopicSuggestions?: boolean;
    enableUpDownVote?: boolean;
    feedChannel?: string;
    forgotPasswordTemplate!: string;
    gatherCustomerSentimentData?: boolean;
    headlessForgotPasswordTemplate?: string;
    headlessRegistrationTemplate?: string;
    lockoutTemplate?: string;
    logoutUrl?: string;
    maxFileSizeKb?: number;
    navigationLinkSet?: NavigationLinkSet;
    networkAuthApiSettings?: NetworkAuthApiSettings;
    networkMemberGroups?: NetworkMemberGroup;
    networkPageOverrides?: NetworkPageOverride;
    newSenderAddress?: string;
    picassoSite?: string;
    pwdlessRegEmailTemplate?: string;
    recommendationAudience?: RecommendationAudience;
    recommendationDefinition?: RecommendationDefinition;
    reputationLevels?: ReputationLevelDefinitions;
    reputationPointsRules?: ReputationPointsRules;
    selfRegMicroBatchSubErrorEmailTemplate?: string;
    selfRegProfile?: string;
    selfRegistration?: boolean;
    sendWelcomeEmail?: boolean;
    site!: string;
    siteArchiveStatus?: SitesArchiveStatus;
    status!: NetworkStatus;
    tabs!: NetworkTabSet;
    urlPathPrefix?: string;
    verificationTemplate?: string;
    welcomeTemplate!: string;
}

export class NotificationTypeConfig extends Metadata {
    notificationTypeSettings!: NotificationTypeSettings[];
}

export class NotificationsSettings extends Metadata {
    enableActvityReminderBrowserNotifs?: boolean;
    enableMobileAppPushNotifications?: boolean;
    enableNotifications?: boolean;
}

export class OauthCustomScope extends Metadata {
    assignedTo!: OauthCustomScopeApp[];
    description!: string;
    developerName!: string;
    isProtected?: boolean;
    isPublic?: boolean;
    masterLabel!: string;
}

export class OauthOidcSettings extends Metadata {
    blockOAuthUnPwFlow?: boolean;
    blockOAuthUsrAgtFlow?: boolean;
    isPkceRequired?: boolean;
    oAuthCdCrdtFlowEnable?: boolean;
}

export class OauthTokenExchangeHandler extends Metadata {
    description!: string;
    developerName!: string;
    enablements!: OauthTokenExchHandlerApp[];
    isAccessTokenSupported!: boolean;
    isEnabled!: boolean;
    isIdTokenSupported!: boolean;
    isJwtSupported!: boolean;
    isProtected?: boolean;
    isRefreshTokenSupported!: boolean;
    isSaml2Supported!: boolean;
    isUserCreationAllowed!: boolean;
    masterLabel!: string;
    tokenHandlerApex!: string;
}

export class ObjectHierarchyRelationship extends Metadata {
    childObjectMapping?: ObjectMapping;
    childObjectMappingId?: string;
    inputObjRecordsGrpFieldName?: string;
    mappingType?: ObjHierarchyMappingType;
    masterLabel?: string;
    outputPntRelationshipFieldName?: string;
    parentObjectMapping!: ObjectMapping;
    parentObjectMappingId?: string;
    parentRecord?: string;
    parentRelationshipFieldName?: string;
    sourceReferenceRelaFieldName?: string;
    usageType!: MappingUsageType;
}

export class ObjectLinkingSettings extends Metadata {
    enableObjectLinking?: boolean;
}

export class ObjectSourceTargetMap extends Metadata {
    creationType?: DefinitionCreationType;
    fieldSourceTargetMaps!: FieldSourceTargetMap[];
    masterLabel!: string;
    sequenceNbr?: number;
    sourceObjectName!: string;
    targetObjectName!: string;
}

export class OcrSampleDocument extends Metadata {
    applicationType?: OcrApplicationType;
    contentAsset?: string;
    documentHeight?: number;
    documentType!: string;
    masterLabel!: string;
    ocrSampleDocumentFields!: OcrSampleDocumentField[];
    ocrSampleDocumentPages!: OcrSampleDocumentPage[];
}

export class OcrTemplate extends Metadata {
    active?: boolean;
    description?: string;
    documentType!: string;
    masterLabel!: string;
    ocrTargetObjects!: OcrTargetObject[];
    ocrTemplateSampleDocuments!: OcrTemplateSampleDocument[];
    pageCount?: number;
    templateName!: string;
}

export class OmniChannelPricingSettings extends Metadata {
    enableOmniChannelPricing?: boolean;
}

export class OmniChannelSettings extends Metadata {
    enableOmniAutoLoginPrompt?: boolean;
    enableOmniChannel?: boolean;
    enableOmniSecondaryRoutingPriority?: boolean;
    enableOmniSkillsRouting?: boolean;
}

export class OmniDataTransform extends Metadata {
    active?: boolean;
    assignmentRulesUsed?: boolean;
    deletedOnSuccess?: boolean;
    description?: string;
    errorIgnored?: boolean;
    expectedInputJson?: string;
    expectedInputOtherData?: string;
    expectedInputXml?: string;
    expectedOutputJson?: string;
    expectedOutputOtherData?: string;
    expectedOutputXml?: string;
    fieldLevelSecurityEnabled?: boolean;
    inputParsingClass?: string;
    inputType?: OmniDataTransformInputType;
    name!: string;
    namespace?: string;
    nullInputsIncludedInOutput?: boolean;
    omniDataTransformItem!: OmniDataTransformItem[];
    outputParsingClass?: string;
    outputType?: string;
    overrideKey?: string;
    preprocessorClassName?: string;
    previewJsonData?: string;
    previewOtherData?: string;
    previewSourceObjectData?: string;
    previewXmlData?: string;
    processSuperBulk?: boolean;
    requiredPermission?: string;
    responseCacheTtlMinutes?: number;
    responseCacheType?: string;
    rollbackOnError?: boolean;
    sourceObject?: string;
    sourceObjectDefault?: boolean;
    synchronousProcessThreshold?: number;
    targetOutputDocumentIdentifier?: string;
    targetOutputFileName?: string;
    type!: string;
    uniqueName?: string;
    versionNumber?: number;
    xmlDeclarationRemoved?: boolean;
    xmlOutputTagsOrder?: string;
}

export class OmniExtTrackingDef extends Metadata {
    description?: string;
    developerName!: string;
    isActive!: boolean;
    masterLabel!: string;
    omniExtTrackingDefKey?: string;
    omniExtTrackingEventDefs!: OmniExtTrackingEventDef[];
    trackingFrameworkInformation!: string;
    trackingServiceProvider!: ExternalTrackingVendor;
}

export class OmniExtTrackingEventDef extends Metadata {
    componentType!: OmniAnalyticsComponentType;
    description?: string;
    developerName!: string;
    inclusionRule!: string;
    masterLabel!: string;
    omniExtTrackingDef?: string;
    omniExtTrackingEventDefKey?: string;
    payloadTemplate!: string;
}

export class OmniIntegrationProcedure extends Metadata {
    customHtmlTemplates?: string;
    customJavaScript?: string;
    description?: string;
    designerCustomizationType?: string;
    elementTypeComponentMapping?: string;
    isActive?: boolean;
    isIntegrationProcedure?: boolean;
    isMetadataCacheDisabled?: boolean;
    isOmniScriptEmbeddable?: boolean;
    isTestProcedure?: boolean;
    isWebCompEnabled?: boolean;
    language!: string;
    lastPreviewPage?: string;
    name!: string;
    nameSpace?: string;
    omniProcessElements!: OmniProcessElement[];
    omniProcessKey?: string;
    omniProcessType!: OmniProcessType;
    overrideKey?: string;
    propertySetConfig?: string;
    requiredPermission?: string;
    responseCacheType?: string;
    subType!: string;
    type!: string;
    uniqueName!: string;
    versionNumber!: number;
    webComponentKey?: string;
}

export class OmniInteractionAccessConfig extends Metadata {
    configName?: string;
    isAsyncCardCachingEnabled!: boolean;
    isCardApexRemoteDisabled!: boolean;
    isCardCacheDisabled!: boolean;
    isCardDataTfrmDisabled!: boolean;
    isCardIntegrationProcDisabled!: boolean;
    isCardRestApiDisabled!: boolean;
    isCardSoqlDisabled!: boolean;
    isCardSoslDisabled!: boolean;
    isCardStreamingApiDisabled!: boolean;
    isDataTfrmEncrpFieldsDisabled!: boolean;
    masterLabel!: string;
    setupOwner?: string;
}

export class OmniInteractionConfig extends Metadata {
    masterLabel!: string;
    value!: string;
}

export class OmniScript extends Metadata {
    assessmentDefinitionMetadata!: AssessmentDefinitionMetadata[];
    customHtmlTemplates?: string;
    customJavaScript?: string;
    description?: string;
    designerCustomizationType?: string;
    discoveryFrameworkUsageType?: string;
    elementTypeComponentMapping?: string;
    isActive?: boolean;
    isIntegrationProcedure?: boolean;
    isMetadataCacheDisabled?: boolean;
    isOmniScriptEmbeddable?: boolean;
    isTestProcedure?: boolean;
    isWebCompEnabled?: boolean;
    language!: string;
    lastPreviewPage?: string;
    name!: string;
    nameSpace?: string;
    omniAssessmentTasks!: OmniAssessmentTaskMetadata[];
    omniProcessElements!: OmniProcessElement[];
    omniProcessKey?: string;
    omniProcessType!: OmniProcessType;
    overrideKey?: string;
    propertySetConfig?: string;
    requiredPermission?: string;
    responseCacheType?: string;
    subType!: string;
    type!: string;
    uniqueName!: string;
    versionNumber!: number;
    webComponentKey?: string;
}

export class OmniStudioSettings extends Metadata {
    enableOmniStudioMetadata?: boolean;
}

export class OmniSupervisorConfig extends Metadata {
    isTimelineHidden!: boolean;
    masterLabel!: string;
    omniSupervisorConfigAction!: OmniSupervisorConfigAction[];
    omniSupervisorConfigGroup!: OmniSupervisorConfigGroup[];
    omniSupervisorConfigProfile!: OmniSupervisorConfigProfile[];
    omniSupervisorConfigQueue!: OmniSupervisorConfigQueue[];
    omniSupervisorConfigSkill!: OmniSupervisorConfigSkill[];
    omniSupervisorConfigTab!: OmniSupervisorConfigTab[];
    skillVisibility?: OmniSuperSkillVisibilityType;
}

export class OmniTrackingComponentDef extends Metadata {
    componentType!: OmniAnalyticsComponentType;
    componentVersion!: number;
    developerName!: string;
    masterLabel!: string;
    omniTrackingComponentDefKey?: string;
    omniTrackingGroup?: string;
}

export class OmniTrackingGroup extends Metadata {
    description?: string;
    developerName!: string;
    endDate?: Date;
    groupType!: OmniTrackingGroupType;
    isActive!: boolean;
    masterLabel!: string;
    maxAgeInDays?: number;
    omniExtTrackingDef?: string;
    omniTrackingComponentDefs!: OmniTrackingComponentDef[];
    omniTrackingGroupKey?: string;
    startDate?: Date;
}

export class OmniUiCard extends Metadata {
    authorName!: string;
    clonedFromOmniUiCardKey?: string;
    dataSourceConfig!: string;
    description?: string;
    isActive!: boolean;
    name!: string;
    omniUiCardType!: OmniUiCardType;
    overrideKey?: string;
    propertySetConfig!: string;
    sampleDataSourceResponse?: string;
    stylingConfiguration?: string;
    versionNumber!: string;
}

export class OpportunityScoreSettings extends Metadata {
    enableOpportunityScoring?: boolean;
}

export class OpportunitySettings extends Metadata {
    autoActivateNewReminders?: boolean;
    customizableProductSchedulesEnabled?: boolean;
    doesEnforceStandardOpportunitySaveLogic?: boolean;
    enableExpandedPipelineInspectionSetup?: boolean;
    enableFindSimilarOpportunities?: boolean;
    enableForecastCategoryMetrics?: boolean;
    enableOpportunityFieldHistoryTracking?: boolean;
    enableOpportunityInsightsInMobile?: boolean;
    enableOpportunityTeam?: boolean;
    enablePipelineChangesMetrics?: boolean;
    enablePipelineInspection?: boolean;
    enablePipelineInspectionFlow?: boolean;
    enablePipelineInspectionSingleCategoryRollup?: boolean;
    enableRevenueInsights?: boolean;
    enableServiceCaseInsights?: boolean;
    enableUpdateReminders?: boolean;
    findSimilarOppFilter?: FindSimilarOppFilter;
    oppAmountDealMotionEnabled?: boolean;
    oppCloseDateDealMotionEnabled?: boolean;
    promptToAddProducts?: boolean;
    pushCountEnabled?: boolean;
    simpleOppCreateFromContact?: boolean;
    simpleOppCreateFromEvent?: boolean;
}

export class OrchestrationContext extends Metadata {
    datasets!: OrchestrationContextDataset[];
    description?: string;
    events!: OrchestrationContextEvent[];
    imageFile!: string;
    imageScale!: number;
    masterLabel!: string;
    runtimeType!: string;
    salesforceObject?: string;
    salesforceObjectPrimaryKey?: string;
}

export class OrderManagementSettings extends Metadata {
    deliveryEstimationEnabled?: boolean;
    enableB2CHighScaleOrders?: boolean;
    enableB2CIntegration?: boolean;
    enableDuplicateManagement?: boolean;
    enableHighScaleOrders?: boolean;
    enableIndividualOrderItemTaxAdjustments?: boolean;
    enableOMAutomation?: boolean;
    enableOrderManagement?: boolean;
    enablePersonAccountsForShoppers?: boolean;
    initOMAutomation?: boolean;
}

export class OrderSettings extends Metadata {
    enableEnhancedCommerceOrders?: boolean;
    enableNegativeQuantity?: boolean;
    enableOptionalPricebook?: boolean;
    enableOrderEvents?: boolean;
    enableOrderWithMultiplePriceBooks?: boolean;
    enableOrders!: boolean;
    enableReductionOrders?: boolean;
    enableZeroQuantity?: boolean;
}

export class OutboundNetworkConnection extends Metadata {
    connectionType!: ExternalConnectionType;
    description?: string;
    isActive!: boolean;
    label!: string;
    outboundNetworkConnProperties!: OutboundNetworkConnProperty[];
    status!: ExternalConnectionStatus;
}

export class Package extends Metadata {
    apiAccessLevel?: APIAccessLevel;
    description?: string;
    namespacePrefix?: string;
    objectPermissions!: ProfileObjectPermissions[];
    packageType?: string;
    postInstallClass?: string;
    setupWeblink?: string;
    types!: PackageTypeMembers[];
    uninstallClass?: string;
    version!: string;
}

export class PardotEinsteinSettings extends Metadata {
    enableCampaignInsight?: boolean;
    enableEngagementScore?: boolean;
}

export class PardotSettings extends Metadata {
    enableAIEinsteinEngageFreq?: boolean;
    enableAIOptimizedSendTime?: boolean;
    enableAeDataConnector?: boolean;
    enableB2bmaAppEnabled?: boolean;
    enableEngagementHistoryDashboards?: boolean;
    enableEnhancedProspectCustomFieldsSync?: boolean;
    enablePardotAppV1Enabled?: boolean;
    enablePardotEnabled?: boolean;
    enablePardotObjectSync?: boolean;
    enableProspectActivityDataset?: boolean;
}

export class ParticipantRole extends Metadata {
    defaultAccessLevel!: ParticipantRoleAccessLevel;
    isActive?: boolean;
    masterLabel!: string;
    parentObject!: string;
}

export class PartyDataModelSettings extends Metadata {
    enableAutoSelectIndividualOnMerge?: boolean;
    enableConsentManagement?: boolean;
    enableIndividualAutoCreate?: boolean;
}

export class PathAssistant extends Metadata {
    active!: boolean;
    entityName!: string;
    fieldName!: string;
    masterLabel!: string;
    pathAssistantSteps!: PathAssistantStep[];
    recordTypeName!: string;
}

export class PathAssistantSettings extends Metadata {
    canOverrideAutoPathCollapseWithUserPref?: boolean;
    pathAssistantEnabled?: boolean;
}

export class PaymentGatewayProvider extends Metadata {
    apexAdapter?: string;
    comments?: string;
    idempotencySupported!: IdempotencySupportStatus;
    masterLabel!: string;
}

export class PaymentsSettings extends Metadata {
    enablePayments?: boolean;
}

export class PermissionSet extends Metadata {
    applicationVisibilities!: PermissionSetApplicationVisibility[];
    classAccesses!: PermissionSetApexClassAccess[];
    customMetadataTypeAccesses!: PermissionSetCustomMetadataTypeAccess[];
    customPermissions!: PermissionSetCustomPermissions[];
    customSettingAccesses!: PermissionSetCustomSettingAccess[];
    dataspaceScopes!: DataspaceScopeAccess[];
    description?: string;
    emailRoutingAddressAccesses!: PermissionSetEmailRoutingAddressAccess[];
    externalCredentialPrincipalAccesses!: PermissionSetExternalCredentialPrincipalAccess[];
    externalDataSourceAccesses!: PermissionSetExternalDataSourceAccess[];
    fieldPermissions!: PermissionSetFieldPermissions[];
    flowAccesses!: PermissionSetFlowAccess[];
    hasActivationRequired?: boolean;
    label!: string;
    license?: string;
    objectPermissions!: PermissionSetObjectPermissions[];
    pageAccesses!: PermissionSetApexPageAccess[];
    recordTypeVisibilities!: PermissionSetRecordTypeVisibility[];
    tabSettings!: PermissionSetTabSetting[];
    userPermissions!: PermissionSetUserPermission[];
}

export class MutingPermissionSet extends PermissionSet {
    label!: string;
}

export class PermissionSetGroup extends Metadata {
    description?: string;
    hasActivationRequired?: boolean;
    label!: string;
    mutingPermissionSets!: string[];
    permissionSets!: string[];
    status?: string;
}

export class PermissionSetLicenseDefinition extends Metadata {
    customPermissions!: PermissionSetLicenseDefinitionCustomPermission[];
    isSupplementLicense?: boolean;
    label!: string;
    licenseExpirationPolicy!: LicenseExpirationPolicy;
    userLicenseRestrictions?: string;
}

export class PersonAccountOwnerPowerUser extends Metadata {
    developerName!: string;
    masterLabel!: string;
    portalType!: string;
    user!: string;
}

export class PicklistSettings extends Metadata {
    isPicklistApiNameEditDisabled?: boolean;
}

export class PlatformCachePartition extends Metadata {
    description?: string;
    isDefaultPartition!: boolean;
    masterLabel!: string;
    platformCachePartitionTypes!: PlatformCachePartitionType[];
}

export class PlatformEncryptionSettings extends Metadata {
    canEncryptManagedPackageFields?: boolean;
    enableDeterministicEncryption?: boolean;
    enableEncryptFieldHistory?: boolean;
    enableEncryptionSearchEnabled?: boolean;
    enableEventBusEncryption?: boolean;
    isMEKForEncryptionRequired?: boolean;
    isUseHighAssuranceKeysRequired?: boolean;
}

export class PlatformEventChannel extends Metadata {
    channelType!: PlatformEventChannelType;
    eventType?: PlatformEventChannelEventType;
    label!: string;
}

export class PlatformEventChannelMember extends Metadata {
    enrichedFields!: EnrichedField[];
    eventChannel!: string;
    filterExpression?: string;
    selectedEntity!: string;
}

export class PlatformLicenseDefinition extends Metadata {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: DefaultLicenseStatus;
    description?: string;
    hasDynamicResourceGroupKey?: boolean;
    includedFeatures!: IncludedFeature[];
    licenseOwner?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    minPlatformVersion?: number;
    name!: string;
    settingItems!: SettingItem[];
    settingUsageDefinitions!: SettingUsageDefinition[];
}

export class Portal extends Metadata {
    active!: boolean;
    admin?: string;
    defaultLanguage?: string;
    description?: string;
    emailSenderAddress!: string;
    emailSenderName!: string;
    enableSelfCloseCase?: boolean;
    footerDocument?: string;
    forgotPassTemplate?: string;
    headerDocument?: string;
    isSelfRegistrationActivated?: boolean;
    loginHeaderDocument?: string;
    logoDocument?: string;
    logoutUrl?: string;
    newCommentTemplate?: string;
    newPassTemplate?: string;
    newUserTemplate?: string;
    ownerNotifyTemplate?: string;
    selfRegNewUserUrl?: string;
    selfRegUserDefaultProfile?: string;
    selfRegUserDefaultRole?: PortalRoles;
    selfRegUserTemplate?: string;
    showActionConfirmation?: boolean;
    stylesheetDocument?: string;
    type!: PortalType;
}

export class PortalsSettings extends Metadata {
    clickjackSSPLoginPage?: boolean;
    redirectPortalLoginToHttps?: boolean;
}

export class PostTemplate extends Metadata {
    default?: boolean;
    description?: string;
    fields!: string[];
    label!: string;
}

export class PredictionBuilderSettings extends Metadata {
    enablePredictionBuilder?: boolean;
    isPredictionBuilderStarted?: boolean;
}

export class PresenceDeclineReason extends Metadata {
    label!: string;
}

export class PresenceUserConfig extends Metadata {
    assignments?: PresenceConfigAssignments;
    capacity!: number;
    declineReasons!: string[];
    enableAutoAccept?: boolean;
    enableDecline?: boolean;
    enableDeclineReason?: boolean;
    enableDisconnectSound?: boolean;
    enableRequestSound?: boolean;
    interruptibleCapacity?: number;
    label!: string;
    presenceStatusOnDecline?: string;
    presenceStatusOnPushTimeout?: string;
    userDisplayName?: string;
}

export class PriceRule extends Metadata {
    conditionLogic!: ConditionLogic;
    description?: string;
    effectiveDate?: Date;
    expirationDate?: Date;
    masterLabel!: string;
    priceRuleActions!: PriceRuleAction[];
    priceRuleConditions!: PriceRuleCondition[];
    priceRuleExecutionStages!: PriceRuleExecutionStage[];
    sequence!: number;
    status!: RuleStatus;
}

export class PriceSheetDefinition extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    prcShtAttrDefinitions!: PrcShtAttrDefinition[];
    priceSheetEntity!: string;
}

export class PricingActionParameters extends Metadata {
    contextDefinition!: string;
    contextMapping!: string;
    developerName!: string;
    effectiveFrom!: Date;
    effectiveTo?: Date;
    masterLabel!: string;
    objectName?: string;
    pricingProcedure?: string;
}

export class PricingRecipe extends Metadata {
    defaultPricingProcedure?: ExpressionSetDefinition;
    defaultPricingProcedureDeveloperName?: string;
    defaultPricingProcedureId?: string;
    developerName?: string;
    isActive?: boolean;
    isInternal?: boolean;
    masterLabel!: string;
    pricingRecipeTableMapping!: PricingRecipeTableMapping[];
}

export class PrivacySettings extends Metadata {
    authorizationCaptureBrowser?: boolean;
    authorizationCaptureEmail?: boolean;
    authorizationCaptureIp?: boolean;
    authorizationCaptureLocation?: boolean;
    authorizationCustomSharing?: boolean;
    authorizationCustomSharingPCU?: boolean;
    authorizationLockingAndVersioning?: boolean;
    enableConfigurableUserPIIActive?: boolean;
    enableConsentAuditTrail?: boolean;
    enableConsentEventStream?: boolean;
    enableDefaultMetadataValues?: boolean;
    enableSalesforceArchive?: boolean;
    useUmaDefaultConsentRecs?: boolean;
}

export class ProcedureOutputResolution extends Metadata {
    developerName!: string;
    formula!: string;
    isActive!: boolean;
    isInternal?: boolean;
    masterLabel!: string;
    pricingElement!: string;
}

export class ProcessFlowMigration extends Metadata {
    destinationFlowDefinition!: string;
    destinationFlowVersion!: string;
    developerName!: string;
    masterLabel!: string;
    migratedCriteriaLabel?: string;
    migratedCriteriaName?: string;
    processVersion!: string;
}

export class ProductAttrDisplayConfig extends Metadata {
    dataType!: string;
    displayType!: string;
    masterLabel!: string;
    status!: string;
}

export class ProductAttributeSet extends Metadata {
    description?: string;
    developerName!: string;
    masterLabel!: string;
    productAttributeSetItems!: ProductAttributeSetItem[];
}

export class ProductDiscoverySettings extends Metadata {
    discoverProductsFlowNameOrgValue?: string;
    enableGuidedSelling?: boolean;
    prodDiscBrowseContextDefOrgValue?: string;
    prodDiscPricingEnabledOrgValue?: string;
    prodDiscProcedureOrgValue?: string;
    prodDiscQualEnabledOrgValue?: string;
    prodDiscQualificationOrgValue?: string;
}

export class ProductFamilyUsage extends Metadata {
    productFamilyUsageType!: ProductFamilyUsageType;
}

export class ProductSettings extends Metadata {
    enableCascadeActivateToRelatedPrices?: boolean;
    enableMySettings?: boolean;
    enableQuantitySchedule?: boolean;
    enableRevenueSchedule?: boolean;
}

export class ProductSpecificationRecType extends Metadata {
    isCommercial!: boolean;
    masterLabel!: string;
    productSpecificationType!: string;
    recordType!: string;
}

export class ProductSpecificationType extends Metadata {
    description?: string;
    masterLabel!: string;
}

export class Profile extends Metadata {
    applicationVisibilities!: ProfileApplicationVisibility[];
    categoryGroupVisibilities!: ProfileCategoryGroupVisibility[];
    classAccesses!: ProfileApexClassAccess[];
    custom?: boolean;
    customMetadataTypeAccesses!: ProfileCustomMetadataTypeAccess[];
    customPermissions!: ProfileCustomPermissions[];
    customSettingAccesses!: ProfileCustomSettingAccess[];
    description?: string;
    externalDataSourceAccesses!: ProfileExternalDataSourceAccess[];
    fieldPermissions!: ProfileFieldLevelSecurity[];
    flowAccesses!: ProfileFlowAccess[];
    layoutAssignments!: ProfileLayoutAssignment[];
    loginFlows!: LoginFlow[];
    loginHours?: ProfileLoginHours;
    loginIpRanges!: ProfileLoginIpRange[];
    objectPermissions!: ProfileObjectPermissions[];
    pageAccesses!: ProfileApexPageAccess[];
    profileActionOverrides!: ProfileActionOverride[];
    recordTypeVisibilities!: ProfileRecordTypeVisibility[];
    tabVisibilities!: ProfileTabVisibility[];
    userLicense?: string;
    userPermissions!: ProfileUserPermission[];
}

export class ProfilePasswordPolicy extends Metadata {
    forgotPasswordRedirect?: boolean;
    lockoutInterval!: number;
    maxLoginAttempts!: number;
    minimumPasswordLength!: number;
    minimumPasswordLifetime?: boolean;
    obscure?: boolean;
    passwordComplexity!: number;
    passwordExpiration!: number;
    passwordHistory!: number;
    passwordQuestion!: number;
    profile!: string;
}

export class ProfileSessionSetting extends Metadata {
    externalCommunityUserIdentityVerif!: boolean;
    forceLogout!: boolean;
    profile!: string;
    requiredSessionLevel?: SessionSecurityLevel;
    sessionPersistence!: boolean;
    sessionTimeout!: number;
    sessionTimeoutWarning!: boolean;
}

export class Prompt extends Metadata {
    masterLabel!: string;
    promptVersions!: PromptVersion[];
}

export class PublicKeyCertificate extends Metadata {
    description?: string;
    isActive?: boolean;
    jsonWebKey?: string;
    masterLabel!: string;
}

export class PublicKeyCertificateSet extends Metadata {
    description?: string;
    jwksEndPoint?: string;
    jwtIssuer?: string;
    masterLabel!: string;
    publicKeyCertificateSetKeys!: PublicKeyCertificateSetKey[];
    type!: PublicKeyCertificateSetType;
}

export class Queue extends Metadata {
    description?: string;
    doesSendEmailToMembers?: boolean;
    email?: string;
    name!: string;
    queueMembers?: QueueMembers;
    queueRoutingConfig?: string;
    queueSobject!: QueueSobject[];
}

export class QueueRoutingConfig extends Metadata {
    capacityPercentage?: number;
    capacityType?: CapacityType;
    capacityWeight?: number;
    dropAdditionalSkillsTimeout?: number;
    isAttributeBased?: boolean;
    label!: string;
    pushTimeout?: number;
    queueOverflowAssignee?: string;
    routingModel!: RoutingModel;
    routingPriority!: number;
    skills!: QueueRoutingConfigSkill[];
    userOverflowAssignee?: string;
}

export class QuickAction extends Metadata {
    actionSubtype?: ActionSubtype;
    canvas?: string;
    description?: string;
    fieldOverrides!: FieldOverride[];
    flowDefinition?: string;
    height?: number;
    icon?: string;
    isProtected?: boolean;
    label?: string;
    lightningComponent?: string;
    lightningWebComponent?: string;
    optionsCreateFeedItem!: boolean;
    page?: string;
    quickActionLayout?: QuickActionLayout;
    quickActionParameters!: QuickActionParameters[];
    quickActionSendEmailOptions?: QuickActionSendEmailOptions;
    standardLabel?: QuickActionLabel;
    successMessage?: string;
    targetObject?: string;
    targetParentField?: string;
    targetRecordType?: string;
    type!: QuickActionType;
    width?: number;
}

export class QuickTextSettings extends Metadata {
    hideQuickTextUiInLtng?: boolean;
    lightningQuickTextEnabled?: boolean;
    quickTextsInFolders?: boolean;
}

export class QuoteSettings extends Metadata {
    enableQuote!: boolean;
    enableQuotesWithoutOppEnabled?: boolean;
}

export class RealTimeEventSettings extends Metadata {
    realTimeEvents!: RealTimeEvent[];
}

export class RecommendationBuilderSettings extends Metadata {
    enableErbEnabledPref?: boolean;
    enableErbStartedPref?: boolean;
}

export class RecommendationStrategy extends Metadata {
    actionContext!: StrategyAction[];
    aiLoad!: StrategyNodeAiLoad[];
    aiSort!: StrategyNodeAiSort[];
    contextRecordType?: string;
    description?: string;
    filter!: StrategyNodeFilter[];
    if!: StrategyNodeIf[];
    invocableAction!: StrategyNodeInvocableAction[];
    isTemplate?: boolean;
    label!: string;
    map!: StrategyNodeMap[];
    mutuallyExclusive!: StrategyNodeExclusive[];
    onBehalfOfExpression?: string;
    recommendationLimit!: StrategyNodeRecommendationLimit[];
    recommendationLoad!: StrategyNodeRecommendationLoad[];
    sort!: StrategyNodeSort[];
    union!: StrategyNodeUnion[];
}

export class StrategyNodeUnionBase extends StrategyNodeBase {
    limit?: number;
}

export class StrategyNodeAiSort {}

export class StrategyNodeExclusive {}

export class StrategyNodeFilter extends StrategyNodeUnionBase {
    expression!: string;
}

export class StrategyNodeIf extends StrategyNodeUnionBase {
    childNodeExpression!: IfExpression[];
    onlyFirstMatch?: boolean;
}

export class StrategyNodeInvocableAction extends StrategyNodeUnionBase {
    action!: string;
    argument!: StrategyNodeInvocableActionArg[];
    isGenerator!: boolean;
    type!: InvocableActionType;
}

export class StrategyNodeMap extends StrategyNodeUnionBase {
    mapExpression!: MapExpression[];
}

export class StrategyNodeRecommendationLimit extends StrategyNodeUnionBase {
    filterMode!: StrategyReactionType[];
    lookbackDuration?: number;
    maxRecommendationCount?: number;
}

export class StrategyNodeRecommendationLoad extends StrategyNodeUnionBase {
    condition!: RecommendationLoadCondition[];
    conditionLogic?: string;
    object!: string;
    sortField!: StrategyNodeSortField[];
}

export class StrategyNodeSort extends StrategyNodeUnionBase {
    field!: StrategyNodeSortField[];
}

export class StrategyNodeUnion {}

export class RecordActionDeployment extends Metadata {
    channelConfigurations!: RecordActionDeploymentChannel[];
    componentName?: ComponentName;
    deploymentContexts!: RecordActionDeploymentContext[];
    hasComponents?: boolean;
    hasGuidedActions?: boolean;
    hasOmniscripts?: boolean;
    hasRecommendations?: boolean;
    masterLabel!: string;
    recommendation?: RecordActionRecommendation;
    selectableItems!: RecordActionSelectableItem[];
}

export class RecordAggregationDefinition extends Metadata {
    aggregateFromObject!: string;
    aggregateToObject!: string;
    aggregationType!: RecordAggregationDefinitionAggregationType;
    batchProcessingDefinition?: string;
    description?: string;
    displayName!: string;
    recordAggregationObject!: RecordAggregationObject[];
    status!: RecordAggregationDefinitionStatus;
}

export class RecordAlertCategory extends Metadata {
    description?: string;
    masterLabel!: string;
    severity?: string;
}

export class RecordPageSettings extends Metadata {
    enableActivityRelatedList?: boolean;
    enableFullRecordView?: boolean;
}

export class RedirectWhitelistUrl extends Metadata {
    url!: string;
}

export class ReferencedDashboard extends Metadata {
    application!: string;
    description?: string;
    embedUrl!: string;
    masterLabel!: string;
    templateAssetSourceName?: string;
    visibility!: string;
}

export class RelationshipGraphDefinition extends Metadata {
    isActive!: boolean;
    isTemplate!: boolean;
    masterLabel!: string;
    relationshipGraphDefVersions!: RelationshipGraphDefVersion[];
}

export class RemoteSiteSetting extends Metadata {
    description?: string;
    disableProtocolSecurity!: boolean;
    isActive!: boolean;
    url!: string;
}

export class Report extends Metadata {
    aggregateFilters!: ReportAggregateFilter[];
    aggregates!: ReportAggregate[];
    block!: Report[];
    blockInfo?: ReportBlockInfo;
    buckets!: ReportBucketField[];
    chart?: ReportChart;
    colorRanges!: ReportColorRange[];
    columns!: ReportColumn[];
    crossFilters!: ReportCrossFilter[];
    currency?: CurrencyIsoCode;
    customDetailFormulas!: ReportCustomDetailFormula[];
    dataCategoryFilters!: ReportDataCategoryFilter[];
    description?: string;
    division?: string;
    filter?: ReportFilter;
    folderName?: string;
    format!: ReportFormat;
    formattingRules!: ReportFormattingRule[];
    groupingsAcross!: ReportGrouping[];
    groupingsDown!: ReportGrouping[];
    historicalSelector?: ReportHistoricalSelector;
    isSmartTotalDisabled?: boolean;
    name!: string;
    numSubscriptions?: number;
    params!: ReportParam[];
    reportType!: string;
    reportTypeApiName?: string;
    roleHierarchyFilter?: string;
    rowLimit?: number;
    scope?: string;
    showCurrentDate?: boolean;
    showDetails?: boolean;
    showGrandTotal?: boolean;
    showSubTotals?: boolean;
    sortColumn?: string;
    sortOrder?: SortOrder;
    territoryHierarchyFilter?: string;
    timeFrameFilter?: ReportTimeFrameFilter;
    userFilter?: string;
}

export class ReportType extends Metadata {
    autogenerated?: boolean;
    baseObject!: string;
    category?: ReportTypeCategory;
    deployed!: boolean;
    description?: string;
    join?: ObjectRelationship;
    label!: string;
    sections!: ReportLayoutSection[];
}

export class RestrictionRule extends Metadata {
    active!: boolean;
    dataspaceScope?: string;
    description?: string;
    enforcementType!: EnforcementType;
    masterLabel!: string;
    recordFilter!: string;
    targetEntity!: string;
    userCriteria?: string;
    version!: number;
}

export class RetailExecutionSettings extends Metadata {
    enableProductHierarchy?: boolean;
    enableRetailExecution?: boolean;
    enableVisitSharing?: boolean;
}

export class RetrievalSummaryDefinition extends Metadata {
    masterLabel!: string;
    retrievalSummaryDefFields!: RetrievalSummaryDefField[];
    retrievalSummaryDefObjects!: RetrievalSummaryDefObject[];
    rootObject!: string;
}

export class RoleOrTerritory extends Metadata {
    caseAccessLevel?: string;
    contactAccessLevel?: string;
    description?: string;
    mayForecastManagerShare?: boolean;
    name!: string;
    opportunityAccessLevel?: string;
}

export class Role extends RoleOrTerritory {
    parentRole?: string;
}

export class Territory extends RoleOrTerritory {
    accountAccessLevel?: string;
    parentTerritory?: string;
}

export class RuleLibraryDefinition extends Metadata {
    contextDefinition!: string;
    contextRuleStatus!: ContextRuleStatus;
    description?: string;
    label!: string;
    ruleLibraryContextTags!: RuleLibraryContextTag[];
    rulesetDefinitions!: RulesetDefinition[];
    usageType!: ContextRuleUsageType;
}

export class SalesAgreementSettings extends Metadata {
    actualsCalculationMode!: ActualsCalculationMode;
    decimalScale?: number;
    displayGroups!: AdvAcctFrcstDisplayGroup[];
    displayedAgreementTermsMetrics!: string;
    futureActCalcSchedules?: number;
    isOnlyApprovalProcessUsed!: boolean;
    measureDefinitions!: AdvAcctForecastMeasureDef[];
    objectMapping?: ObjectMapping;
    primaryNotifEmailAddress?: string;
    renewalPeriodDayCount?: number;
    secondaryNotifEmailAddress?: string;
}

export class SalesWorkQueueSettings extends Metadata {
    featureName!: string;
    targetEntity!: string;
    targetField!: string;
}

export class SamlSsoConfig extends Metadata {
    attributeName?: string;
    attributeNameIdFormat?: string;
    decryptionCertificate?: string;
    errorUrl?: string;
    executionUserId?: string;
    identityLocation!: SamlIdentityLocationType;
    identityMapping!: SamlIdentityType;
    issuer!: string;
    loginUrl?: string;
    logoutUrl?: string;
    name!: string;
    oauthTokenEndpoint?: string;
    redirectBinding?: boolean;
    requestSignatureMethod?: string;
    requestSigningCertId?: string;
    salesforceLoginUrl?: string;
    samlEntityId!: string;
    samlJitHandlerId?: string;
    samlVersion!: SamlType;
    singleLogoutBinding?: SamlSpSLOBinding;
    singleLogoutUrl?: string;
    useConfigRequestMethod?: boolean;
    useSameDigestAlgoForSigning?: boolean;
    userProvisioning?: boolean;
    validationCert!: string;
}

export class SchemaDefinition extends Metadata {
    description?: string;
    domainType!: DomainType;
    schemas!: Schema[];
}

export class SchemaSettings extends Metadata {
    enableAdvancedCMTSecurity?: boolean;
    enableAdvancedCSSecurity?: boolean;
    enableListCustomSettingCreation?: boolean;
    enableSOSLOnCustomSettings?: boolean;
}

export class ScoreCategory extends Metadata {
    categoryName!: string;
    description!: string;
    developerName!: string;
    iconUrl!: string;
    masterLabel!: string;
    parentCategoryId?: string;
    scoreCategoryCalcInsights!: ScoreCategoryCalcInsight[];
    scoreRangeClassifications!: ScoreRangeClassification[];
}

export class SearchCriteriaConfiguration extends Metadata {
    actionList?: string;
    additionalSearchCriteria?: string;
    aggrCriteriaFieldset?: FieldSet;
    configurationType?: SearchCriteriaConfigurationConfigurationType;
    description?: string;
    distanceCriteria?: string;
    filterType?: SearchCriteriaConfigurationFilterType;
    isActive?: boolean;
    isSingleFieldSort?: boolean;
    masterLabel!: string;
    resultDisplayFormat?: SearchCriteriaConfigurationResultDisplayFormat;
    resultFieldset?: FieldSet;
    resultFlexCard?: string;
    searchCriteriaFieldset?: FieldSet;
    searchableObjDataSyncInfo?: string;
    searchableObject!: string;
    sortingCriteriaFieldset?: FieldSet;
}

export class SearchCustomization extends Metadata {
    channel!: string;
    masterLabel!: string;
    objectOverride!: SearchCustomizationObjectOverride[];
    objectToAlwaysSearch!: string[];
    selectedObject!: string[];
    selectedProfile!: string[];
}

export class SearchOrgWideObjectConfig extends Metadata {
    masterLabel!: string;
    objectReference!: string;
    searchOrgWideFieldConfig!: SearchOrgWideFieldConfig[];
}

export class SearchResultActionConfig extends Metadata {
    actionReference!: string;
    actionScope!: SearchResultActionScope;
    actionType!: SearchResultActionType;
    description?: string;
    masterLabel!: string;
}

export class SearchSettings extends Metadata {
    documentContentSearchEnabled!: boolean;
    enableAdvancedSearchInAlohaSidebar?: boolean;
    enableEinsteinSearchAnswersGPT?: boolean;
    enableEinsteinSearchAssistantDialog?: boolean;
    enableEinsteinSearchEs4kPilot?: boolean;
    enableEinsteinSearchNLSFilters?: boolean;
    enableEinsteinSearchNaturalLanguage?: boolean;
    enableEinsteinSearchPersonalization?: boolean;
    enableEinsteinSearchQA?: boolean;
    enablePersonalTagging?: boolean;
    enablePublicTagging?: boolean;
    enableQuerySuggestionPigOn?: boolean;
    enableSalesforceGeneratedSynonyms?: boolean;
    enableSearchTermHistory?: boolean;
    enableSetupSearch?: boolean;
    enableSuggestArticlesLinksOnly?: boolean;
    enableUseDefaultSearchEntity?: boolean;
    optimizeSearchForCJKEnabled!: boolean;
    recentlyViewedUsersForBlankLookupEnabled!: boolean;
    searchSettingsByObject!: SearchSettingsByObject;
    sidebarAutoCompleteEnabled!: boolean;
    sidebarDropDownListEnabled!: boolean;
    sidebarLimitToItemsIOwnCheckboxEnabled!: boolean;
    singleSearchResultShortcutEnabled!: boolean;
    spellCorrectKnowledgeSearchEnabled!: boolean;
}

export class SearchableObjDataSyncInfo extends Metadata {
    dataSyncActive?: boolean;
    dataSyncJob?: string;
    description?: string;
    displayFieldSet?: FieldSet;
    lastDataSyncRunDate?: string;
    lookupMappings?: ObjectMapping;
    masterLabel!: string;
    parsingFieldSet?: FieldSet;
    picklistMappings!: ObjectMapping[];
    scheduleFrequencyInHours?: string;
    searchableObject!: string;
    typeAheadMappings!: ObjectMapping[];
}

export class SecuritySettings extends Metadata {
    canUsersGrantLoginAccess?: boolean;
    enableAdminLoginAsAnyUser?: boolean;
    enableAuditFieldsInactiveOwner?: boolean;
    enableAuraSecureEvalPref?: boolean;
    enableCoepHeader?: boolean;
    enableCoopHeader?: boolean;
    enableCrossOrgRedirects?: boolean;
    enablePermissionsPolicy?: boolean;
    enableRequireHttpsConnection?: boolean;
    networkAccess?: NetworkAccess;
    passwordPolicies?: PasswordPolicies;
    redirectBlockModeEnabled?: boolean;
    sendCspForUncommonClients?: boolean;
    sessionSettings?: SessionSettings;
    singleSignOnSettings?: SingleSignOnSettings;
}

export class ServiceAISetupDefinition extends Metadata {
    appSourceType!: ApplicationSourceType;
    name!: string;
    setupStatus!: ServiceAISetupDefStatus;
    supportedLanguages?: string;
}

export class ServiceAISetupField extends Metadata {
    entity!: string;
    field!: string;
    fieldMappingType!: ServiceAISetupFieldType;
    fieldPosition!: number;
    name!: string;
    setupDefinition!: string;
}

export class ServiceChannel extends Metadata {
    acwExtensionDuration?: number;
    afterConvoWorkMaxTime?: number;
    doesMinimizeWidgetOnAccept?: boolean;
    hasAcwExtensionEnabled?: boolean;
    hasAfterConvoWorkTimer?: boolean;
    hasAutoAcceptEnabled?: boolean;
    interactionComponent?: string;
    isInterruptible?: boolean;
    label!: string;
    maxExtensions?: string;
    relatedEntityType!: string;
    secondaryRoutingPriorityField?: string;
    serviceChannelFieldPriorities!: ServiceChannelFieldPriority[];
}

export class ServiceCloudVoiceSettings extends Metadata {
    disableSCVTaskCreationForHVS?: boolean;
    enableAmazonQueueManagement?: boolean;
    enableDefaultChannelForSCV?: boolean;
    enableDigitalVoiceWhatsapp?: boolean;
    enableEndUserForSCV?: boolean;
    enableOmniCapacityForSCV?: boolean;
    enablePTQueueManagement?: boolean;
    enablePhoneNumberMaskingForSCV?: boolean;
    enableRZoneCloudVoiceOptIn?: boolean;
    enableSCVBYOT?: boolean;
    enableSCVExternalTelephony?: boolean;
    enableSCVOpenVCAsNewTabHVS?: boolean;
    enableSCVSupportBannerDisplayed?: boolean;
    enableServiceCloudVoice?: boolean;
}

export class ServicePresenceStatus extends Metadata {
    channels?: ServiceChannelStatus;
    label!: string;
}

export class ServiceProcess extends Metadata {
    description?: string;
    processLabel!: string;
    serviceProcessAttributes!: ServiceProcessAttribute[];
    serviceProcessDependencies!: ServiceProcessDependency[];
    serviceProcessItemGroups!: ServiceProcessItemGroup[];
    shortDescription?: string;
    usageType!: SvcCatalogItemUsageType;
}

export class ServiceSetupAssistantSettings extends Metadata {
    enableServiceSetupAssistant?: boolean;
}

export class SharingBaseRule extends Metadata {
    accessLevel!: string;
    accountSettings?: AccountSharingRuleSettings;
    description?: string;
    label!: string;
    sharedTo!: SharedTo;
}

export class SharingCriteriaRule extends SharingBaseRule {
    booleanFilter?: string;
    criteriaItems!: FilterItem[];
    includeRecordsOwnedByAll!: boolean;
}

export class SharingGuestRule extends SharingBaseRule {
    booleanFilter?: string;
    criteriaItems!: FilterItem[];
    includeHVUOwnedRecords!: boolean;
}

export class SharingOwnerRule extends SharingBaseRule {
    sharedFrom!: SharedTo;
}

export class SharingTerritoryRule {}

export class SharingRules extends Metadata {
    sharingCriteriaRules!: SharingCriteriaRule[];
    sharingGuestRules!: SharingGuestRule[];
    sharingOwnerRules!: SharingOwnerRule[];
    sharingTerritoryRules!: SharingTerritoryRule[];
}

export class SharingSet extends Metadata {
    accessMappings!: AccessMapping[];
    description?: string;
    name!: string;
    profiles!: string[];
}

export class SharingSettings extends Metadata {
    deferGroupMembership?: boolean;
    deferSharingRules?: boolean;
    enableAccountRoleOptimization?: boolean;
    enableAssetSharing?: boolean;
    enableCommunityUserVisibility?: boolean;
    enableExternalSharingModel?: boolean;
    enableManagerGroups?: boolean;
    enableManualUserRecordSharing?: boolean;
    enablePartnerSuperUserAccess?: boolean;
    enablePortalUserCaseSharing?: boolean;
    enablePortalUserVisibility?: boolean;
    enableRemoveTMGroupMembership?: boolean;
    enableRestrictAccessLookupRecords?: boolean;
    enableSecureGuestAccess?: boolean;
    enableShareObjectReportTypes?: boolean;
    enableStandardReportVisibility?: boolean;
    enableTerritoryForecastManager?: boolean;
}

export class SiteSettings extends Metadata {
    enableProxyLoginICHeader?: boolean;
    enableTopicsInSites?: boolean;
}

export class Skill extends Metadata {
    assignments?: SkillAssignments;
    description?: string;
    label!: string;
    skillType?: string;
}

export class SkillType extends Metadata {
    masterLabel!: string;
}

export class SlackRecordLayout extends Metadata {
    isProtected?: boolean;
    masterLabel!: string;
    sobjectType!: string;
    viewMode!: SlackRecordLayoutViewMode;
}

export class SocialCustomerServiceSettings extends Metadata {
    caseSubjectOption!: CaseSubjectOption;
    enableAllFBResponseAccounts?: boolean;
    enableInboundProcessingConcurrency?: boolean;
    enableSocialApprovals?: boolean;
    enableSocialCaseAssignmentRules?: boolean;
    enableSocialCustomerService?: boolean;
    enableSocialPersonaHistoryTracking?: boolean;
    enableSocialPostHistoryTracking?: boolean;
    enableSocialReceiveParentPost?: boolean;
}

export class StageDefinition extends Metadata {
    active!: boolean;
    description?: string;
    masterLabel!: string;
    referenceObject!: string;
    referenceObjectField!: string;
    referenceObjectRecordType?: string;
    stageTransition!: StageTransition[];
    stageValue!: StageValue[];
}

export class StandardValueSet extends Metadata {
    groupingStringEnum?: string;
    sorted!: boolean;
    standardValue!: StandardValue[];
}

export class StandardValueSetTranslation extends Metadata {
    valueTranslation!: ValueTranslation[];
}

export class StnryAssetEnvSrcCnfg extends Metadata {
    recordType!: string;
    stationaryAssetType!: StationaryAssetType;
}

export class StreamingAppDataConnector extends Metadata {
    appIdentifier!: string;
    dataConnectorType!: DataConnectorType;
    isProtected?: boolean;
    masterLabel!: string;
    streamingAppDataConnectorType!: StreamingAppDataConnectorType;
}

export class SubscriptionManagementSettings extends Metadata {
    enableConvertNegativeInvoiceLinesToCreditMemoAndApply?: boolean;
    enablePaymentScheduleAutomation?: boolean;
    enableRefundAutomation?: boolean;
    enableRevSubMgmtBlngOptOut?: boolean;
    enableSubscriptionManagement?: boolean;
}

export class SurveySettings extends Metadata {
    enableGenerativeAISurveys?: boolean;
    enableIndustriesCxmEnabled?: boolean;
    enableSurvey?: boolean;
    enableSurveyOwnerCanManageResponse?: boolean;
}

export class SustainabilityUom extends Metadata {
    description?: string;
    isProductUom?: boolean;
    isProtected?: boolean;
    isStationaryAssetUom?: boolean;
    isVehicleAssetUom?: boolean;
    masterLabel!: string;
    unitType!: UnitType;
}

export class SustnUomConversion extends Metadata {
    conversionFactor!: number;
    fuelType?: string;
    isProtected?: boolean;
    masterLabel?: string;
    sourceUom!: string;
    targetUom!: string;
    uomsKey?: string;
}

export class SvcCatalogCategory extends Metadata {
    image?: string;
    isActive?: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    parentCategory?: string;
    sortOrder?: number;
}

export class SvcCatalogFilterCriteria extends Metadata {
    conditions!: SvcCatalogFilterCondition[];
    criteriaRelation!: CriteriaRelationshipType;
    description?: string;
    isActive?: boolean;
    mainLabel!: string;
}

export class SvcCatalogFulfillmentFlow extends Metadata {
    description!: string;
    flow!: string;
    icon?: string;
    isProtected?: boolean;
    items!: SvcCatalogFulfillFlowItem[];
    masterLabel!: string;
}

export class SvcCatalogItemDef extends Metadata {
    apiVersion?: number;
    catalogFilterCriteria!: SvcCatalogItemDefFiltrCrit[];
    categories!: SvcCatalogCategoryItem[];
    dataCategories!: SvcCatalogItemDefDataCategorySelection[];
    description?: string;
    fulfillmentFlow?: string;
    image?: string;
    inputs!: SvcCatalogItemAttribute[];
    internalNotes?: string;
    isAvailableToAllCustomers!: boolean;
    isFeatured?: boolean;
    isGuestAccessible!: boolean;
    isProtected?: boolean;
    masterLabel!: string;
    sharedTo?: SharedTo;
    status!: PublishStatusType;
}

export class SynonymDictionary extends Metadata {
    groups!: SynonymGroup[];
    isProtected?: boolean;
    label!: string;
}

export class SystemNotificationSettings extends Metadata {
    disableDowntimeNotifications?: boolean;
    disableMaintenanceNotifications?: boolean;
}

export class Territory2 extends Metadata {
    accountAccessLevel?: string;
    caseAccessLevel?: string;
    contactAccessLevel?: string;
    customFields!: FieldValue[];
    description?: string;
    name!: string;
    objectAccessLevels!: Territory2AccessLevel[];
    opportunityAccessLevel?: string;
    parentTerritory?: string;
    ruleAssociations!: Territory2RuleAssociation[];
    territory2Type!: string;
}

export class Territory2Model extends Metadata {
    customFields!: FieldValue[];
    description?: string;
    name!: string;
}

export class Territory2Rule extends Metadata {
    active!: boolean;
    booleanFilter?: string;
    name!: string;
    objectType!: string;
    ruleItems!: Territory2RuleItem[];
}

export class Territory2Settings extends Metadata {
    defaultAccountAccessLevel?: string;
    defaultCaseAccessLevel?: string;
    defaultContactAccessLevel?: string;
    defaultOpportunityAccessLevel?: string;
    enableTerritoryManagement2?: boolean;
    opportunityFilterSettings?: Territory2SettingsOpportunityFilter;
    showTM2EnabledBanner?: boolean;
    supportedObjects!: Territory2SupportedObject[];
    t2ForecastAccessLevel?: string;
    tm2BypassRealignAccInsert?: boolean;
    tm2EnableUserAssignmentLog?: boolean;
}

export class Territory2Type extends Metadata {
    description?: string;
    name!: string;
    priority!: number;
}

export class TimeSheetTemplate extends Metadata {
    active!: boolean;
    description?: string;
    frequency!: TimeSheetFrequency;
    masterLabel!: string;
    startDate!: Date;
    timeSheetTemplateAssignments!: TimeSheetTemplateAssignment[];
    workWeekEndDay!: DaysOfWeek;
    workWeekStartDay!: DaysOfWeek;
}

export class TimelineObjectDefinition extends Metadata {
    baseObject!: string;
    definition!: string;
    isActive?: boolean;
    masterLabel!: string;
}

export class TopicsForObjects extends Metadata {
    enableTopics!: boolean;
    entityApiName!: string;
}

export class TrailheadSettings extends Metadata {
    enableConfettiEffect?: boolean;
    enableMyTrailheadPref?: boolean;
    enableTrailheadInLexTerms?: boolean;
}

export class TransactionProcessingType extends Metadata {
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    ruleEngine?: RuleEngine;
    saveType!: SaveType;
}

export class TransactionSecurityPolicy extends Metadata {
    action!: TransactionSecurityAction;
    active!: boolean;
    apexClass?: string;
    blockMessage?: string;
    customEmailContent?: string;
    description?: string;
    developerName?: string;
    eventName?: TransactionSecurityEventName;
    eventType?: MonitoredEvents;
    executionUser?: string;
    flow?: string;
    masterLabel?: string;
    resourceName?: string;
    type?: TxnSecurityPolicyType;
}

export class Translations extends Metadata {
    botBlocks!: BotBlockTranslation[];
    botTemplates!: BotTemplateTranslation[];
    bots!: BotTranslation[];
    conversationMessageDefinitions!: ConversationMessageDefinitionTranslation[];
    customApplications!: CustomApplicationTranslation[];
    customLabels!: CustomLabelTranslation[];
    customPageWebLinks!: CustomPageWebLinkTranslation[];
    customTabs!: CustomTabTranslation[];
    desFieldTemplateMessages!: ExplainabilityMsgTemplateFieldTranslation[];
    flowDefinitions!: FlowDefinitionTranslation[];
    identityVerificationCustomFieldLabels!: IdentityVerificationFieldTranslation[];
    pipelineInspMetricConfigs!: PipelineInspMetricConfigTranslation[];
    prompts!: PromptTranslation[];
    quickActions!: GlobalQuickActionTranslation[];
    reportTypes!: ReportTypeTranslation[];
    scontrols!: ScontrolTranslation[];
}

export class TrialOrgSettings extends Metadata {
    enableSampleDataDeleted?: boolean;
}

export class UIObjectRelationConfig extends Metadata {
    UIObjectRelationFieldConfigs!: UIObjectRelationFieldConfig[];
    contextObject!: string;
    contextObjectRecordType?: string;
    directRelationshipField?: string;
    indirectObjectContextField?: string;
    indirectObjectRelatedField?: string;
    indirectRelationshipObject?: string;
    isActive?: boolean;
    masterLabel!: string;
    relatedObject!: string;
    relatedObjectRecordType?: string;
    relationshipType!: ObjectRelationshipType;
}

export class UiFormatSpecificationSet extends Metadata {
    field!: string;
    formatType!: FormatType;
    masterLabel!: string;
    sobjectType!: string;
    uiFormatSpecifications!: UiFormatSpecification[];
}

export class UnifiedApplication extends Metadata {
    description?: string;
    label!: string;
    unifiedApplicationMember!: UnifiedApplicationMember[];
}

export class UserAccessPolicy extends Metadata {
    booleanFilter!: string;
    description?: string;
    isProtected?: boolean;
    masterLabel!: string;
    order?: number;
    status!: UserAccessPolicyStatus;
    triggerType?: UserAccessPolicyTriggerType;
    userAccessPolicyActions!: UserAccessPolicyAction[];
    userAccessPolicyFilters!: UserAccessPolicyFilter[];
}

export class UserCriteria extends Metadata {
    creationAgeInSeconds?: number;
    description?: string;
    lastChatterActivityAgeInSeconds?: number;
    masterLabel!: string;
    profiles!: string[];
    userTypes!: NetworkUserType[];
}

export class UserEngagementSettings extends Metadata {
    canUseAdoptionApps?: boolean;
    doesScheduledSwitcherRunDaily?: boolean;
    enableCustomHelpGlobalSection?: boolean;
    enableHelpMenuShowFeedback?: boolean;
    enableHelpMenuShowHelp?: boolean;
    enableHelpMenuShowNewUser?: boolean;
    enableHelpMenuShowSearch?: boolean;
    enableHelpMenuShowSfdcContent?: boolean;
    enableHelpMenuShowShortcut?: boolean;
    enableHelpMenuShowSupport?: boolean;
    enableHelpMenuShowTrailhead?: boolean;
    enableIBILOptOutDashboards?: boolean;
    enableIBILOptOutEvents?: boolean;
    enableIBILOptOutReports?: boolean;
    enableIBILOptOutTasks?: boolean;
    enableLexToClassicFeedbackEnable?: boolean;
    enableOrchestrationInSandbox?: boolean;
    enableOrgUserAssistEnabled?: boolean;
    enableScheduledSwitcher?: boolean;
    enableSfdcProductFeedbackSurvey?: boolean;
    enableShowSalesforceUserAssist?: boolean;
    isAutoTransitionDelayed?: boolean;
    isCrucNotificationDisabled?: boolean;
    isCustomProfileAutoTransitionDelayed?: boolean;
    isLEXWelcomeMatDisabled?: boolean;
    isMeetTheAssistantDisabledInClassic?: boolean;
    isMeetTheAssistantDisabledInLightning?: boolean;
    isSmartNudgesDisabled?: boolean;
    optimizerAppEnabled?: boolean;
    suggestedForYou?: boolean;
}

export class UserInterfaceSettings extends Metadata {
    alternateAlohaListView?: boolean;
    dynamicMruActionsOff?: boolean;
    enableAsyncRelatedLists?: boolean;
    enableClickjackUserPageHeaderless?: boolean;
    enableCollapsibleSections?: boolean;
    enableCollapsibleSideBar?: boolean;
    enableCustomObjectTruncate?: boolean;
    enableCustomeSideBarOnAllPages?: boolean;
    enableDeleteFieldHistory?: boolean;
    enableExternalObjectAsyncRelatedLists?: boolean;
    enableHoverDetails?: boolean;
    enableInlineEdit?: boolean;
    enableLightningVerticalNav?: boolean;
    enableNewPageLayoutEditor?: boolean;
    enablePersonalCanvas?: boolean;
    enablePrintableListViews?: boolean;
    enableProfileCustomTabsets?: boolean;
    enableQuickCreate?: boolean;
    enableQuickSetupPanel?: boolean;
    enableRelatedListHovers?: boolean;
    enableSldsV2?: boolean;
    enableSpotlight?: boolean;
    enableTabOrganizer?: boolean;
    enableVertNavThemedIconsEnabled?: boolean;
    enableVerticalNavSeamlessSwitching?: boolean;
    multiColumnSort?: boolean;
    multiColumnSortLv?: boolean;
    multiColumnSortRl?: boolean;
}

export class UserLicenseDefinition extends Metadata {
    cloudServiceProvider?: string;
    defaultLicenseDuration?: number;
    defaultStatus?: DefaultLicenseStatus;
    description?: string;
    hasDynamicResourceGroupKey?: boolean;
    includedFeatures!: IncludedFeature[];
    isPermissionSetLicense?: boolean;
    licenseKey?: string;
    licenseOwner?: string;
    licensingAuthority?: string;
    managementServiceProvider?: string;
    managementTenantId?: string;
    minPlatformVersion?: number;
    name!: string;
    settingItems!: SettingItem[];
    settingUsageDefinitions!: SettingUsageDefinition[];
    standardPermissionSets!: StandardPermissionSet[];
}

export class UserManagementSettings extends Metadata {
    enableCanAnswerContainUsername?: boolean;
    enableConcealPersonalInfo?: boolean;
    enableContactlessExternalIdentityUsers?: boolean;
    enableEnhancedConcealPersonalInfo?: boolean;
    enableEnhancedPermsetMgmt?: boolean;
    enableEnhancedProfileMgmt?: boolean;
    enableEnhcUiUserAccessPolicies?: boolean;
    enableNewProfileUI?: boolean;
    enableProfileFiltering?: boolean;
    enableRestrictEmailDomains?: boolean;
    enableScrambleUserData?: boolean;
    enableUserSelfDeactivate?: boolean;
    enhancedPermSetList?: boolean;
    enhancedUserListView?: boolean;
    enhancedUserRoleListView?: boolean;
    groupSummaryUIEnhancement?: boolean;
    permsetsInFieldCreation?: boolean;
    psaExpirationUIEnabled?: boolean;
    restrictedProfileCloning?: boolean;
    userAccessPoliciesEnabled?: boolean;
}

export class UserProvisioningConfig extends Metadata {
    approvalRequired?: string;
    connectedApp!: string;
    enabled?: boolean;
    enabledOperations?: string;
    flow?: string;
    masterLabel!: string;
    namedCredential?: string;
    notes?: string;
    onUpdateAttributes?: string;
    reconFilter?: string;
    userAccountMapping?: string;
}

export class VehicleAssetEmssnSrcCnfg extends Metadata {
    recordType!: string;
    vehicleAssetType!: VehicleAssetType;
}

export class VisualizationPlugin extends Metadata {
    description?: string;
    developerName!: string;
    icon!: string;
    masterLabel!: string;
    visualizationResources!: VisualizationResource[];
    visualizationTypes!: VisualizationType[];
}

export class VoiceSettings extends Metadata {
    enableCallDisposition?: boolean;
    enableConsentReminder?: boolean;
    enableDefaultRecording?: boolean;
    enableVoiceCallList?: boolean;
    enableVoiceCallRecording?: boolean;
    enableVoiceCoaching?: boolean;
    enableVoiceConferencing?: boolean;
    enableVoiceLocalPresence?: boolean;
    enableVoiceMail?: boolean;
    enableVoiceMailDrop?: boolean;
}

export class WarrantyLifecycleMgmtSettings extends Metadata {
    enableWarrantyLCMgmt?: boolean;
}

export class WaveAnalyticAssetCollection extends Metadata {
    collectionType!: string;
    color!: string;
    description?: string;
    folder?: string;
    items!: WaveAnalyticAssetCollectionItem[];
    label!: string;
    masterLabel!: string;
    shares!: FolderShare[];
}

export class WaveApplication extends Metadata {
    assetIcon?: string;
    description?: string;
    folder!: string;
    masterLabel!: string;
    shares!: FolderShare[];
    templateOrigin?: string;
    templateVersion?: string;
}

export class WaveDataset extends Metadata {
    application!: string;
    description?: string;
    masterLabel!: string;
    templateAssetSourceName?: string;
    type?: string;
}

export class WaveTemplateBundle extends Metadata {
    assetIcon?: string;
    assetVersion?: number;
    description?: string;
    label!: string;
    templateType!: string;
}

export class WaveTemplateDetailsMetadata {}

export class WaveTemplateExternalDataMetadata extends Metadata {
    edgemartLabel!: string;
    format!: string;
    label!: string;
    simulatedRowCount?: number;
}

export class WaveTemplateLensDashboardMetadata {}

export class WaveXmd extends Metadata {
    application?: string;
    dataset!: string;
    datasetConnector?: string;
    datasetFullyQualifiedName?: string;
    dates!: WaveXmdDate[];
    dimensions!: WaveXmdDimension[];
    measures!: WaveXmdMeasure[];
    organizations!: WaveXmdOrganization[];
    origin?: string;
    type?: string;
    waveVisualization?: string;
}

export class WebStoreBundle extends Metadata {
    autoFacetingEnabled?: boolean;
    cartToOrderAutoCustomFieldMapping?: boolean;
    commerceEinsteinActivitiesTracked?: boolean;
    commerceEinsteinDeployed?: boolean;
    country?: CountryIsoCode;
    defaultCurrency?: string;
    defaultLanguage?: string;
    defaultTaxLocaleType!: TaxLocaleType;
    description?: string;
    guestBrowsingEnabled?: boolean;
    guestCartTimeToLive?: number;
    label!: string;
    orderLifeCycleType?: OrderLifeCycleType;
    pricingStrategy!: PricingStrategy;
    productGrouping?: ProductGrouping;
    skipAdditionalEntitlementCheckForSearch?: boolean;
    skuDetectionEnabled?: boolean;
    storeName?: string;
    supportedCurrencies?: string;
    supportedLanguages?: string;
    supportedShipToCountries?: string;
    type!: WebStoreType;
}

export class WebStoreTemplate extends Metadata {
    autoFacetingEnabled?: boolean;
    cartAsyncProcessingEnabled?: boolean;
    cartCalculateEnabled?: boolean;
    cartToOrderAutoCustomFieldMapping?: boolean;
    checkoutTimeToLive?: number;
    checkoutValidAfterDate?: Date;
    commerceEinsteinActivitiesTracked?: boolean;
    commerceEinsteinDeployed?: boolean;
    country?: CountryIsoCode;
    defaultCurrency?: string;
    defaultLanguage!: string;
    defaultTaxLocaleType!: TaxLocaleType;
    description?: string;
    duplicateCartItemsEnabled?: boolean;
    guestBrowsingEnabled?: boolean;
    guestCartEnabled!: boolean;
    guestCartTimeToLive?: number;
    guestCheckoutEnabled!: boolean;
    masterLabel!: string;
    maxValuesPerFacet?: number;
    orderActivationStatus?: string;
    orderLifeCycleType?: OrderLifeCycleType;
    paginationSize?: number;
    preserveGuestCartEnabled!: boolean;
    pricingStrategy!: PricingStrategy;
    productGrouping?: ProductGrouping;
    skipAdditionalEntitlementCheckForSearch?: boolean;
    skuDetectionEnabled?: boolean;
    splitShipmentEnabled!: boolean;
    supportedCurrencies?: string;
    supportedLanguages!: string;
    supportedShipToCountries?: string;
    type!: WebStoreType;
}

export class WebToXSettings extends Metadata {
    shouldHideRecordInfoInEmail?: boolean;
    webToCaseSpamFilter?: boolean;
    webToLeadSpamFilter?: boolean;
}

export class WindowsPushApplicationSetup extends Metadata {
    packageSecurityIdentifier!: string;
    secretKey!: string;
}

export class WorkDotComSettings extends Metadata {
    enableCoachingManagerGroupAccess?: boolean;
    enableGoalManagerGroupAccess?: boolean;
    enableProfileSkills?: boolean;
    enableProfileSkillsAddFeedPost?: boolean;
    enableProfileSkillsAutoSuggest?: boolean;
    enableProfileSkillsUsePlatform?: boolean;
    enableWorkBadgeDefRestrictPref?: boolean;
    enableWorkCalibration?: boolean;
    enableWorkCanvasPref?: boolean;
    enableWorkCertification?: boolean;
    enableWorkCertificationNotification?: boolean;
    enableWorkRewardsPref?: boolean;
    enableWorkThanksPref?: boolean;
    enableWorkUseObjectivesForGoals?: boolean;
}

export class WorkSkillRouting extends Metadata {
    isActive!: boolean;
    masterLabel!: string;
    relatedEntity!: string;
    workSkillRoutingAttributes!: WorkSkillRoutingAttribute[];
}

export class Workflow extends Metadata {
    alerts!: WorkflowAlert[];
    fieldUpdates!: WorkflowFieldUpdate[];
    flowActions!: WorkflowFlowAction[];
    flowAutomation!: WorkflowFlowAutomation[];
    knowledgePublishes!: WorkflowKnowledgePublish[];
    outboundMessages!: WorkflowOutboundMessage[];
    rules!: WorkflowRule[];
    send!: WorkflowSend[];
    tasks!: WorkflowTask[];
}

export class WorkflowAction {}

export class WorkflowFieldUpdate extends WorkflowAction {
    description?: string;
    field!: string;
    formula?: string;
    literalValue?: string;
    lookupValue?: string;
    lookupValueType?: LookupValueType;
    name!: string;
    notifyAssignee!: boolean;
    operation!: FieldUpdateOperation;
    protected!: boolean;
    reevaluateOnChange?: boolean;
    targetObject?: string;
}

export class WorkflowFlowAction extends WorkflowAction {
    description?: string;
    flow!: string;
    flowInputs!: WorkflowFlowActionParameter[];
    label!: string;
    language?: string;
    protected!: boolean;
}

export class WorkflowFlowAutomation extends WorkflowAction {
    activeOrLastInactiveVersion?: string;
    activeOrLatestVersion?: string;
    activeVersion?: string;
    fireflyGuid?: string;
    isFlowAccessEnabled?: boolean;
    latestVersion?: string;
    masterLabel?: string;
    migratedFrom?: string;
    objectType?: string;
}

export class WorkflowKnowledgePublish extends WorkflowAction {
    action!: KnowledgeWorkflowAction;
    description?: string;
    label!: string;
    language?: string;
    protected!: boolean;
}

export class WorkflowOutboundMessage extends WorkflowAction {
    apiVersion!: number;
    description?: string;
    endpointUrl!: string;
    fields!: string[];
    includeSessionId!: boolean;
    integrationUser!: string;
    name!: string;
    protected!: boolean;
    useDeadLetterQueue?: boolean;
}

export class WorkflowSend extends WorkflowAction {
    action!: SendAction;
    description?: string;
    label!: string;
    language?: string;
    protected!: boolean;
}

export class WorkflowTask extends WorkflowAction {
    assignedTo?: string;
    assignedToType!: ActionTaskAssignedToTypes;
    description?: string;
    dueDateOffset!: number;
    notifyAssignee!: boolean;
    offsetFromField?: string;
    priority!: string;
    protected!: boolean;
    status!: string;
    subject!: string;
}

export class WorkflowRule extends Metadata {
    actions!: WorkflowActionReference[];
    active!: boolean;
    booleanFilter?: string;
    criteriaItems!: FilterItem[];
    description?: string;
    failedMigrationToolVersion?: string;
    formula?: string;
    triggerType!: WorkflowTriggerTypes;
    workflowTimeTriggers!: WorkflowTimeTrigger[];
}

export class BatchCalcJobAggregate extends BatchCalcJobAbstractMetadataValue {
    description?: string;
    fields!: BatchCalcJobAggregateField[];
    groupBy!: string[];
    label!: string;
    name!: string;
    sourceName!: string;
}

export class DigitalExperience extends MetadataWithContent {
    fileName!: string;
    filePath?: string;
    format!: string;
}

export class FlowNode extends FlowElement {
    elementSubtype?: FlowElementSubtype;
    label?: string;
    locationX!: number;
    locationY!: number;
}

export class FlowApexPluginCall extends FlowNode {
    apexClass!: string;
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    inputParameters!: FlowApexPluginCallInputParameter[];
    outputParameters!: FlowApexPluginCallOutputParameter[];
}

export class FlowAssignment extends FlowNode {
    assignmentItems!: FlowAssignmentItem[];
    connector?: FlowConnector;
}

export class FlowCollectionProcessor extends FlowNode {
    assignNextValueToReference?: string;
    collectionProcessorType!: FlowCollectionProcessorType;
    collectionReference!: string;
    conditionLogic?: string;
    conditions!: FlowCondition[];
    connector?: FlowConnector;
    formula?: string;
    limit?: number;
    mapItems!: FlowCollectionMapItem[];
    outputSObjectType?: string;
    sortOptions!: FlowCollectionSortOption[];
}

export class FlowCustomError extends FlowNode {
    description?: string;
    connector?: FlowConnector;
    customErrorMessages!: FlowCustomErrorMessage[];
}

export class FlowDecision extends FlowNode {
    defaultConnector?: FlowConnector;
    defaultConnectorLabel?: string;
    rules!: FlowRule[];
}

export class FlowExperiment extends FlowNode {
    duration?: number;
    durationUnit?: FlowScheduledPathOffsetUnit;
    paths!: FlowExperimentPath[];
    testGroupPercentage?: number;
    type!: FlowExperimentType;
}

export class FlowLoop extends FlowNode {
    assignNextValueToReference?: string;
    collectionReference?: string;
    iterationOrder?: IterationOrder;
    nextValueConnector?: FlowConnector;
    noMoreValuesConnector?: FlowConnector;
}

export class FlowOrchestratedStage extends FlowNode {
    connector?: FlowConnector;
    exitActionInputParameters!: FlowStageStepExitActionInputParameter[];
    exitActionName?: string;
    exitActionOutputParameters!: FlowStageStepExitActionOutputParameter[];
    exitActionType?: InvocableActionType;
    exitConditionLogic?: string;
    exitConditions!: FlowCondition[];
    faultConnector?: FlowConnector;
    stageSteps!: FlowStageStep[];
}

export class FlowRecordCreate extends FlowNode {
    assignRecordIdToReference?: string;
    connector?: FlowConnector;
    doesUpsert?: boolean;
    doesUpsertAllOrNone?: boolean;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    inputAssignments!: FlowInputFieldAssignment[];
    inputReference?: string;
    object?: string;
    operationMultMatchingRecords?: string;
    operationOneMatchingRecord?: string;
    operationZeroMatchingRecords?: string;
    storeOutputAutomatically?: boolean;
    upsertExternalIdField?: string;
    upsertStandardIdField?: string;
}

export class FlowRecordDelete extends FlowNode {
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    inputReference?: string;
    object?: string;
}

export class FlowRecordLookup extends FlowNode {
    assignNullValuesIfNoRecordsFound?: boolean;
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    getFirstRecordOnly?: boolean;
    limit?: FlowElementReferenceOrValue;
    object?: string;
    outputAssignments!: FlowOutputFieldAssignment[];
    outputReference?: string;
    queriedFields!: string[];
    sortField?: string;
    sortOrder?: SortOrder;
    storeOutputAutomatically?: boolean;
}

export class FlowRecordRollback extends FlowNode {
    connector?: FlowConnector;
}

export class FlowRecordUpdate extends FlowNode {
    connector?: FlowConnector;
    faultConnector?: FlowConnector;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    inputAssignments!: FlowInputFieldAssignment[];
    inputReference?: string;
    object?: string;
}

export class FlowScreen extends FlowNode {
    actions!: FlowScreenAction[];
    allowBack?: boolean;
    allowFinish?: boolean;
    allowPause?: boolean;
    backButtonLabel?: string;
    connector?: FlowConnector;
    fields!: FlowScreenField[];
    helpText?: string;
    nextOrFinishButtonLabel?: string;
    pauseButtonLabel?: string;
    pausedText?: string;
    rules!: FlowScreenRule[];
    showFooter?: boolean;
    showHeader?: boolean;
    stageReference?: FlowElementReferenceOrValue;
    triggers!: FlowScreenTrigger[];
}

export class FlowStart extends FlowNode {
    capabilityTypes!: FlowCapability[];
    connector?: FlowConnector;
    dataGraph?: string;
    dataTypeMappings!: FlowDataTypeMapping[];
    doesRequireRecordChangedToMeetCriteria?: boolean;
    entryType?: FlowEntryType;
    eventName?: string;
    eventType?: InvocableActionType;
    filterFormula?: string;
    filterLogic?: string;
    filters!: FlowRecordFilter[];
    flowRunAsUser?: FlowRunAsUser;
    form?: string;
    inputs!: FlowStartInputParameter[];
    object?: string;
    objectContainer?: string;
    publishSegment?: boolean;
    recordTriggerType?: RecordTriggerType;
    schedule?: FlowSchedule;
    scheduledPaths!: FlowScheduledPath[];
    segment?: string;
    triggerType?: FlowTriggerType;
    triggeringDataGraph?: string;
    triggeringDataModelObjectPath?: string;
}

export class FlowStep extends FlowNode {
    connectors!: FlowConnector[];
}

export class FlowSubflow extends FlowNode {
    connector?: FlowConnector;
    flowName?: string;
    inputAssignments!: FlowSubflowInputAssignment[];
    outputAssignments!: FlowSubflowOutputAssignment[];
    storeOutputAutomatically?: boolean;
}

export class FlowTransform extends FlowNode {
    apexClass?: string;
    connector?: FlowConnector;
    dataType?: FlowDataType;
    isCollection?: boolean;
    objectType?: string;
    scale?: number;
    storeOutputAutomatically?: boolean;
    transformValues!: FlowTransformValue[];
}

export class FlowWait extends FlowNode {
    defaultConnector?: FlowConnector;
    defaultConnectorLabel!: string;
    faultConnector?: FlowConnector;
    timeZoneId?: string;
    waitEvents!: FlowWaitEvent[];
}

export class StrategyNodeAiLoad extends StrategyNodeUnionBase {
    acceptanceLabel!: string;
    actionReference!: string;
    descriptionField!: string;
    recommendationDefinitionDevName!: string;
    rejectionLabel?: string;
    titleField!: string;
}

export class WorkflowAlert extends WorkflowAction {
    ccEmails!: string[];
    description!: string;
    protected!: boolean;
    recipients!: WorkflowEmailRecipient[];
    senderAddress?: string;
    senderType?: ActionEmailSenderType;
    template!: string;
}

export class FlowActionCall extends FlowNode {
    actionCallPaths!: FlowActionCallPath[];
    actionName?: string;
    actionType?: InvocableActionType;
    connector?: FlowConnector;
    dataTypeMappings!: FlowDataTypeMapping[];
    faultConnector?: FlowConnector;
    flowTransactionModel?: FlowTransactionModel;
    inputParameters!: FlowActionCallInputParameter[];
    isWaitUntilCompleted?: boolean;
    nameSegment?: string;
    offset?: number;
    offsetUnit?: FlowScheduledPathOffsetUnit;
    outputParameters!: FlowActionCallOutputParameter[];
    storeOutputAutomatically?: boolean;
    timeoutConnector?: FlowConnector;
    versionSegment?: number;
    versionString?: string;
}

export type ApiSchemaTypes = {
	DeployProblemType: DeployProblemType;
	ManageableState: ManageableState;
	RetrieveStatus: RetrieveStatus;
	FlowProcessType: FlowProcessType;
	DeployStatus: DeployStatus;
	AsyncRequestState: AsyncRequestState;
	AIFilterUnit: AIFilterUnit;
	AIFilterOperation: AIFilterOperation;
	AISide: AISide;
	AIValueType: AIValueType;
	AIManagedFieldType: AIManagedFieldType;
	AIModelDefinitionApprovalType: AIModelDefinitionApprovalType;
	AIModelDefinitionStatus: AIModelDefinitionStatus;
	AIModelType: AIModelType;
	AIPredictionStrategy: AIPredictionStrategy;
	AIPredictionDefinitionStatus: AIPredictionDefinitionStatus;
	AIPredictionType: AIPredictionType;
	AIApplicationStatus: AIApplicationStatus;
	AIApplicationType: AIApplicationType;
	AIScoringMode: AIScoringMode;
	RecsOutputFieldName: RecsOutputFieldName;
	ConfigStatus: ConfigStatus;
	AIModelApproval: AIModelApproval;
	AIModelMetricOperation: AIModelMetricOperation;
	AIIntensityType: AIIntensityType;
	AIModelFactorType: AIModelFactorType;
	AIDataSetType: AIDataSetType;
	AIModelGraphType: AIModelGraphType;
	AIMetricType: AIMetricType;
	AIScoringStatus: AIScoringStatus;
	AIScoringModelDefVersionMode: AIScoringModelDefVersionMode;
	MappedFieldType: MappedFieldType;
	BatchInputSourceType: BatchInputSourceType;
	ExtractorType: ExtractorType;
	FeatureInputType: FeatureInputType;
	PredictionPlatform: PredictionPlatform;
	CreatorType: CreatorType;
	RcmdSourceType: RcmdSourceType;
	FormulaType: FormulaType;
	CalculationFrequency: CalculationFrequency;
	ForecastFrequency: ForecastFrequency;
	AccountingType: AccountingType;
	ExpectedCashFlowGrouping: ExpectedCashFlowGrouping;
	PaidCashFlowGrouping: PaidCashFlowGrouping;
	PeriodTypes: PeriodTypes;
	TeamMemberHierarchyType: TeamMemberHierarchyType;
	ItemActionType: ItemActionType;
	ItemCategory: ItemCategory;
	ActionLinkType: ActionLinkType;
	ActionLinkHttpMethod: ActionLinkHttpMethod;
	ActionLinkUserVisibility: ActionLinkUserVisibility;
	PlatformActionGroupCategory: PlatformActionGroupCategory;
	ActionLinkExecutionsAllowed: ActionLinkExecutionsAllowed;
	ActionPlanTemplateType: ActionPlanTemplateType;
	ActivationFlowType: ActivationFlowType;
	ActivationPlatformConnectorType: ActivationPlatformConnectorType;
	ActivationPlatformFileOutputFormat: ActivationPlatformFileOutputFormat;
	ActivationPlatformFileOutputGrouping: ActivationPlatformFileOutputGrouping;
	ActivationPlatformPeriodicFullRefresh: ActivationPlatformPeriodicFullRefresh;
	ActivationPlatformProcessingType: ActivationPlatformProcessingType;
	ActivationPlatformType: ActivationPlatformType;
	ActivationPlatformRefreshFrequency: ActivationPlatformRefreshFrequency;
	ActivationPlatformRefreshMode: ActivationPlatformRefreshMode;
	ActivationPlatformFieldDataType: ActivationPlatformFieldDataType;
	ActionableListKPIAggType: ActionableListKPIAggType;
	ActionableListKPIStType: ActionableListKPIStType;
	ActivationPlatformIdentifierHashMethod: ActivationPlatformIdentifierHashMethod;
	ActivationPlatformIdentifierType: ActivationPlatformIdentifierType;
	OAuthProviderType: OAuthProviderType;
	DefaultLicenseStatus: DefaultLicenseStatus;
	AdvAcctFcstCalcFrequency: AdvAcctFcstCalcFrequency;
	AdvAcctFrcstDisplayGroupType: AdvAcctFrcstDisplayGroupType;
	AdvAcctFcstFormulaType: AdvAcctFcstFormulaType;
	AdvAcctFcstAggregationType: AdvAcctFcstAggregationType;
	AdvAcctFcstComputationMethod: AdvAcctFcstComputationMethod;
	AdvAcctFcstMeasureType: AdvAcctFcstMeasureType;
	AdvAccForecastSetStatus: AdvAccForecastSetStatus;
	ForecastPeriodGroupStatus: ForecastPeriodGroupStatus;
	FieldMappingClient: FieldMappingClient;
	AffinityScoreType: AffinityScoreType;
	ReportSummaryType: ReportSummaryType;
	ReportJobSourceTypes: ReportJobSourceTypes;
	AnalyticsWidgetType: AnalyticsWidgetType;
	AnalyticsActionType: AnalyticsActionType;
	AnalyticsActionEventType: AnalyticsActionEventType;
	ApplicationObjectName: ApplicationObjectName;
	ApplicationUsageType: ApplicationUsageType;
	AppDomainUsageType: AppDomainUsageType;
	PolicyApplicableDuration: PolicyApplicableDuration;
	AssignmentPolicyType: AssignmentPolicyType;
	UtilizationFactor: UtilizationFactor;
	ProcessSubmitterType: ProcessSubmitterType;
	WorkflowActionType: WorkflowActionType;
	NextOwnerType: NextOwnerType;
	RoutingType: RoutingType;
	FilterOperation: FilterOperation;
	StepCriteriaNotMetType: StepCriteriaNotMetType;
	StepRejectBehaviorType: StepRejectBehaviorType;
	RuleExprObjTargetType: RuleExprObjTargetType;
	ExpressionCondition: ExpressionCondition;
	RecordEditabilityType: RecordEditabilityType;
	AssignToLookupValueType: AssignToLookupValueType;
	BusinessHoursSourceType: BusinessHoursSourceType;
	EscalationStartTimeType: EscalationStartTimeType;
	AssistantDefinitionStatus: AssistantDefinitionStatus;
	AssistantSkillSobjectActionType: AssistantSkillSobjectActionType;
	AssistantSkillType: AssistantSkillType;
	AudienceCriterionOperator: AudienceCriterionOperator;
	AudienceCriterionType: AudienceCriterionType;
	FormulaFilterType: FormulaFilterType;
	AuraBundleType: AuraBundleType;
	MuleSoftControlPlane: MuleSoftControlPlane;
	AuthProviderType: AuthProviderType;
	BatchCalcJobCSVDelimiter: BatchCalcJobCSVDelimiter;
	BatchCalcJobDataType: BatchCalcJobDataType;
	BatchCalcJobFileSource: BatchCalcJobFileSource;
	BatchCalcJobDatasourceType: BatchCalcJobDatasourceType;
	BatchCalcJobFilterOperator: BatchCalcJobFilterOperator;
	BatchCalcJobFrcstAccuracy: BatchCalcJobFrcstAccuracy;
	BatchCalcJobAggregateFunction: BatchCalcJobAggregateFunction;
	BatchCalcJobFrcstModel: BatchCalcJobFrcstModel;
	BatchCalcJobFrcstPeriodType: BatchCalcJobFrcstPeriodType;
	BatchCalcJobFrcstSeasonality: BatchCalcJobFrcstSeasonality;
	BatchCalcJobParameterDataType: BatchCalcJobParameterDataType;
	BatchCalcJobSourceJoinType: BatchCalcJobSourceJoinType;
	BatchCalcJobOrderType: BatchCalcJobOrderType;
	BatchCalcJobTransformType: BatchCalcJobTransformType;
	BatchCalcJobWritebackOpn: BatchCalcJobWritebackOpn;
	BatchCalcJobWritebackType: BatchCalcJobWritebackType;
	BatchCalcJobDefRunMode: BatchCalcJobDefRunMode;
	ExecutionPlatformType: ExecutionPlatformType;
	BatchCalcProcessType: BatchCalcProcessType;
	BatchJobDefinitionStatus: BatchJobDefinitionStatus;
	BenefitActionDataType: BenefitActionDataType;
	BuildingEnergyIntensityType: BuildingEnergyIntensityType;
	GenAiAgentType: GenAiAgentType;
	Language: Language;
	MlSlotClassDataType: MlSlotClassDataType;
	MlSlotClassExtractionType: MlSlotClassExtractionType;
	ConversationInvocableTargetType: ConversationInvocableTargetType;
	BotInvocationMappingType: BotInvocationMappingType;
	ConversationVariableType: ConversationVariableType;
	BotNavigationType: BotNavigationType;
	BotStepConditionOperatorType: BotStepConditionOperatorType;
	ConversationVariableOperandSourceType: ConversationVariableOperandSourceType;
	ConversationMessageExecutionType: ConversationMessageExecutionType;
	BotQuickReplyType: BotQuickReplyType;
	BotWidgetType: BotWidgetType;
	BotVariableOperationType: BotVariableOperationType;
	ConversationDefinitionLogicalOperatorType: ConversationDefinitionLogicalOperatorType;
	SortOrder: SortOrder;
	ConversationMappingType: ConversationMappingType;
	ConversationSystemMessageParamType: ConversationSystemMessageParamType;
	ConversationSystemMessageType: ConversationSystemMessageType;
	BotStepType: BotStepType;
	ConversationSystemDialogType: ConversationSystemDialogType;
	ConversationVariableCollectionType: ConversationVariableCollectionType;
	ConversationDataType: ConversationDataType;
	ConversationVariableVisibilityType: ConversationVariableVisibilityType;
	ConversationDefinitionNlpProviderType: ConversationDefinitionNlpProviderType;
	GenAiBotToneType: GenAiBotToneType;
	MessageType: MessageType;
	BotType: BotType;
	ConvDefBlockVersionStatus: ConvDefBlockVersionStatus;
	BriefcaseFilterOperator: BriefcaseFilterOperator;
	FilterScope: FilterScope;
	BriefcaseRuleRelationshipType: BriefcaseRuleRelationshipType;
	BriefcaseType: BriefcaseType;
	ForecastCategories: ForecastCategories;
	ExpFeedbackCollType: ExpFeedbackCollType;
	SurveyQuestionType: SurveyQuestionType;
	CMSSourceConnectionType: CMSSourceConnectionType;
	CMSConnectionStatus: CMSConnectionStatus;
	CMSConnectionSourceType: CMSConnectionSourceType;
	FeedItemDisplayFormat: FeedItemDisplayFormat;
	FeedItemType: FeedItemType;
	EmailToCaseOnFailureActionType: EmailToCaseOnFailureActionType;
	EmailToCaseRoutingAddressType: EmailToCaseRoutingAddressType;
	CaseSubjectParticleType: CaseSubjectParticleType;
	ActionForNoRecordFound: ActionForNoRecordFound;
	ActionForSingleRecordFound: ActionForSingleRecordFound;
	ChannelType: ChannelType;
	ObjectToLink: ObjectToLink;
	ChatterExtensionType: ChatterExtensionType;
	EmbeddedServiceFeature: EmbeddedServiceFeature;
	EmbeddedServiceLabelKey: EmbeddedServiceLabelKey;
	ClmCategoryUsageType: ClmCategoryUsageType;
	MappingOperation: MappingOperation;
	CleanRuleStatus: CleanRuleStatus;
	AuthType: AuthType;
	CloudServiceProviderApiType: CloudServiceProviderApiType;
	ProvisioningAutomationType: ProvisioningAutomationType;
	ModelEntityType: ModelEntityType;
	ModelStatus: ModelStatus;
	CommunityBaseTemplate: CommunityBaseTemplate;
	CommunityTemplateBundleInfoType: CommunityTemplateBundleInfoType;
	CommunityTemplateCategory: CommunityTemplateCategory;
	CommunityThemeLayoutType: CommunityThemeLayoutType;
	AccessMethod: AccessMethod;
	CanvasLocationOptions: CanvasLocationOptions;
	CanvasOptions: CanvasOptions;
	SamlInitiationMethod: SamlInitiationMethod;
	DevicePlatformType: DevicePlatformType;
	DeviceType: DeviceType;
	ConnectedAppOauthAccessScope: ConnectedAppOauthAccessScope;
	SamlEncryptionType: SamlEncryptionType;
	SamlIdpSLOBinding: SamlIdpSLOBinding;
	SamlNameIdFormatType: SamlNameIdFormatType;
	SamlSigningAlgoType: SamlSigningAlgoType;
	SamlSubjectType: SamlSubjectType;
	BannerFontFamily: BannerFontFamily;
	BannerPosition: BannerPosition;
	ContextMappingIntentType: ContextMappingIntentType;
	ContextAttributeDataType: ContextAttributeDataType;
	ContextAttributeFieldType: ContextAttributeFieldType;
	ContextMappingType: ContextMappingType;
	ContextUseCaseType: ContextUseCaseType;
	ContractConfigType: ContractConfigType;
	ContractUsageType: ContractUsageType;
	ConvIntelligenceActionType: ConvIntelligenceActionType;
	ConvParticipantRole: ConvParticipantRole;
	ConvIntelligenceService: ConvIntelligenceService;
	ConvIntelligenceOperator: ConvIntelligenceOperator;
	ConvIntelligenceType: ConvIntelligenceType;
	RefreshFrequency: RefreshFrequency;
	ReportStatus: ReportStatus;
	SegmentationType: SegmentationType;
	CustomChannelConnectedAppType: CustomChannelConnectedAppType;
	ConsentOwner: ConsentOwner;
	RoutingOwner: RoutingOwner;
	ConversationMessageConstantType: ConversationMessageConstantType;
	ConversationMessageConstantValueType: ConversationMessageConstantValueType;
	ConversationMessageValueType: ConversationMessageValueType;
	ConversationMessageContentCategory: ConversationMessageContentCategory;
	ConversationMessageHandlerType: ConversationMessageHandlerType;
	ConvMsgExternalTemplateVersionStatus: ConvMsgExternalTemplateVersionStatus;
	ConversationMessageFormatType: ConversationMessageFormatType;
	ConversationMessageCollectionType: ConversationMessageCollectionType;
	ConversationMessageMergeFieldType: ConversationMessageMergeFieldType;
	ConversationMessageLayoutValueType: ConversationMessageLayoutValueType;
	ConversationMessageType: ConversationMessageType;
	ConversationMessageOptionsParameterType: ConversationMessageOptionsParameterType;
	ConversationMessageParameterType: ConversationMessageParameterType;
	ConversationMessageDefinitionType: ConversationMessageDefinitionType;
	ClientAuthMode: ClientAuthMode;
	ServerAuthMode: ServerAuthMode;
	ConversationVendorType: ConversationVendorType;
	CspTrustedSiteContext: CspTrustedSiteContext;
	FormFactor: FormFactor;
	ActionOverrideType: ActionOverrideType;
	NavType: NavType;
	UiType: UiType;
	FieldType: FieldType;
	FeedItemVisibility: FeedItemVisibility;
	DeleteConstraint: DeleteConstraint;
	ElementType: ElementType;
	EncryptionScheme: EncryptionScheme;
	FieldManageability: FieldManageability;
	TreatBlanksAs: TreatBlanksAs;
	EncryptedFieldMaskChar: EncryptedFieldMaskChar;
	EncryptedFieldMaskType: EncryptedFieldMaskType;
	DefinitionCreationType: DefinitionCreationType;
	UsageTag: UsageTag;
	InvalidMergeActionType: InvalidMergeActionType;
	MktDataModelFieldUsageTag: MktDataModelFieldUsageTag;
	SummaryOperations: SummaryOperations;
	Channel: Channel;
	Template: Template;
	CustomSettingsType: CustomSettingsType;
	DeploymentStatus: DeploymentStatus;
	PlatformEventType: PlatformEventType;
	SharingModel: SharingModel;
	Gender: Gender;
	PlatformEventPublishBehavior: PlatformEventPublishBehavior;
	StartsWith: StartsWith;
	SetupObjectVisibility: SetupObjectVisibility;
	WebLinkAvailability: WebLinkAvailability;
	WebLinkDisplayType: WebLinkDisplayType;
	Encoding: Encoding;
	WebLinkType: WebLinkType;
	WebLinkWindowType: WebLinkWindowType;
	WebLinkPosition: WebLinkPosition;
	Article: Article;
	CaseType: CaseType;
	Possessive: Possessive;
	SiteClickjackProtectionLevel: SiteClickjackProtectionLevel;
	SiteRedirect: SiteRedirect;
	SiteType: SiteType;
	ChartBackgroundDirection: ChartBackgroundDirection;
	ChartTheme: ChartTheme;
	ChartColorPalettes: ChartColorPalettes;
	DashboardFilterOperation: DashboardFilterOperation;
	ChartRangeType: ChartRangeType;
	ChartAxis: ChartAxis;
	DashboardComponentType: DashboardComponentType;
	Fit: Fit;
	HorizontalAlignment: HorizontalAlignment;
	VerticalAlignment: VerticalAlignment;
	DashboardComponentFilter: DashboardComponentFilter;
	ChartUnits: ChartUnits;
	DashboardComponentColumnType: DashboardComponentColumnType;
	ChartLegendPosition: ChartLegendPosition;
	DashboardType: DashboardType;
	DashboardComponentSize: DashboardComponentSize;
	CalculatedInsightCreationType: CalculatedInsightCreationType;
	CalculatedInsightDefinitionType: CalculatedInsightDefinitionType;
	DataModelType: DataModelType;
	AccelerationEnabled: AccelerationEnabled;
	DataObjectType: DataObjectType;
	StorageType: StorageType;
	DataImportDataExtractMethods: DataImportDataExtractMethods;
	DataImportRefreshFrequency: DataImportRefreshFrequency;
	DataImportRefreshMode: DataImportRefreshMode;
	StreamType: StreamType;
	StreamingAppDataConnectorType: StreamingAppDataConnectorType;
	ExpsSetProcessType: ExpsSetProcessType;
	DecisionMatrixType: DecisionMatrixType;
	DecisionMatrixColumnType: DecisionMatrixColumnType;
	DecisionMatrixDataType: DecisionMatrixDataType;
	DecisionMatrixDefStatus: DecisionMatrixDefStatus;
	DecisionTableCollectOperator: DecisionTableCollectOperator;
	DecisionTableConditionType: DecisionTableConditionType;
	DecisionTableDataSourceType: DecisionTableDataSourceType;
	DTParameterDataType: DTParameterDataType;
	DecisionTableOperator: DecisionTableOperator;
	DecisionTableSortType: DecisionTableSortType;
	DecisionTableParameterType: DecisionTableParameterType;
	DTSourceCriteriaOperator: DTSourceCriteriaOperator;
	DTSourceCriteriaValueType: DTSourceCriteriaValueType;
	DecisionTableExecutionType: DecisionTableExecutionType;
	DecisionTableHitPolicy: DecisionTableHitPolicy;
	DecisionTableRefreshStatus: DecisionTableRefreshStatus;
	DecisionTableStatus: DecisionTableStatus;
	DecisionTableType: DecisionTableType;
	DecisionTableUploadStatus: DecisionTableUploadStatus;
	FTestTopLevelSelection: FTestTopLevelSelection;
	SchedulingCategory: SchedulingCategory;
	SchedulingObjectiveType: SchedulingObjectiveType;
	ObjectiveParameterKey: ObjectiveParameterKey;
	FTestOnOffSelection: FTestOnOffSelection;
	FTestSeasonSelection: FTestSeasonSelection;
	PipelineInspectionMetric: PipelineInspectionMetric;
	VirtualVisitComprehendServiceType: VirtualVisitComprehendServiceType;
	VirtualVisitUsageType: VirtualVisitUsageType;
	VirtualVisitVisitRegion: VirtualVisitVisitRegion;
	MobileSecurityMobilePlatform: MobileSecurityMobilePlatform;
	MobileSecurityPolicyRuleValueType: MobileSecurityPolicyRuleValueType;
	MobileSecurityPolicySeverityLevel: MobileSecurityPolicySeverityLevel;
	MobileSecurityPolicyType: MobileSecurityPolicyType;
	LearningAchievementType: LearningAchievementType;
	RecordAlertDataSourceType: RecordAlertDataSourceType;
	ExtensionPointName: ExtensionPointName;
	RegistryProviderType: RegistryProviderType;
	CustomFieldDisplayType: CustomFieldDisplayType;
	MappingBehaviorType: MappingBehaviorType;
	RRADJctObjFilterLogic: RRADJctObjFilterLogic;
	RelatedRecordAccessDefShareTo: RelatedRecordAccessDefShareTo;
	RRADSourceObjFilterLogic: RRADSourceObjFilterLogic;
	RelatedRecordAccessDefStatus: RelatedRecordAccessDefStatus;
	RRADTargetObjFilterLogic: RRADTargetObjFilterLogic;
	RRAFObjectType: RRAFObjectType;
	RRAFOperator: RRAFOperator;
	ObjectAccessLevel: ObjectAccessLevel;
	MobileSecurityCertPinType: MobileSecurityCertPinType;
	ActionableListSourceType: ActionableListSourceType;
	ActionableListType: ActionableListType;
	DatasetColumnDataType: DatasetColumnDataType;
	DatatableDataType: DatatableDataType;
	ProviderSearchObjectMapping: ProviderSearchObjectMapping;
	SourceSystemFieldRole: SourceSystemFieldRole;
	CareLimitTypeMetricType: CareLimitTypeMetricType;
	AssessmentConfigurationOption: AssessmentConfigurationOption;
	AssessmentType: AssessmentType;
	SchedulingRuleType: SchedulingRuleType;
	SchedulingParameterKey: SchedulingParameterKey;
	CareProviderAfflType: CareProviderAfflType;
	AssociationType: AssociationType;
	AssociationEventType: AssociationEventType;
	AssociationStatusType: AssociationStatusType;
	ShiftSegmentTypeCategory: ShiftSegmentTypeCategory;
	DgtAssetMgmtPrvdLghtCpntType: DgtAssetMgmtPrvdLghtCpntType;
	ManagedContentSpaceModuleStatusEnum: ManagedContentSpaceModuleStatusEnum;
	ACPStatus: ACPStatus;
	ApexCodeUnitStatus: ApexCodeUnitStatus;
	ContentAssetFormat: ContentAssetFormat;
	ContentAssetAccess: ContentAssetAccess;
	DataPipelineType: DataPipelineType;
	DiscoveryAlgorithmType: DiscoveryAlgorithmType;
	DiscoveryModelFieldType: DiscoveryModelFieldType;
	DiscoveryModelRuntimeType: DiscoveryModelRuntimeType;
	DiscoveryPredictionType: DiscoveryPredictionType;
	DiscoveryModelSourceType: DiscoveryModelSourceType;
	DiscoveryAIModelStatus: DiscoveryAIModelStatus;
	DiscoveryAIModelTransformationType: DiscoveryAIModelTransformationType;
	DiscoveryStoryAutopilotStatus: DiscoveryStoryAutopilotStatus;
	DiscoveryStoryOutcomeGoal: DiscoveryStoryOutcomeGoal;
	DiscoveryStoryOutcomeType: DiscoveryStoryOutcomeType;
	DiscoveryStorySourceType: DiscoveryStorySourceType;
	DocumentGenerationMechanism: DocumentGenerationMechanism;
	DocumentTemplateStatus: DocumentTemplateStatus;
	TargetTokenItemObject: TargetTokenItemObject;
	TargetTokenObject: TargetTokenObject;
	TokenMappingMethodType: TokenMappingMethodType;
	TokenMappingType: TokenMappingType;
	DocumentTemplateType: DocumentTemplateType;
	DocumentTemplateUsageType: DocumentTemplateUsageType;
	EmailTemplateStyle: EmailTemplateStyle;
	EmailTemplateType: EmailTemplateType;
	EmailTemplateUiType: EmailTemplateUiType;
	PlatformSchemaContentType: PlatformSchemaContentType;
	SControlContentSource: SControlContentSource;
	StaticResourceCacheControl: StaticResourceCacheControl;
	FlexiPageType: FlexiPageType;
	ViewTargetType: ViewTargetType;
	AuthoringMode: AuthoringMode;
	DiscoveryFieldMapSourceType: DiscoveryFieldMapSourceType;
	DiscoveryFilterOperator: DiscoveryFilterOperator;
	DiscoveryFilterFieldType: DiscoveryFilterFieldType;
	DiscoveryFilterValueType: DiscoveryFilterValueType;
	DiscoveryOutcomeGoal: DiscoveryOutcomeGoal;
	DiscoveryPushbackType: DiscoveryPushbackType;
	GenerationMechanism: GenerationMechanism;
	PreviewType: PreviewType;
	DupeActionType: DupeActionType;
	DupeSecurityOptionType: DupeSecurityOptionType;
	ConfigType: ConfigType;
	ConfigGroup: ConfigGroup;
	Vendor: Vendor;
	EmailServicesAttOptions: EmailServicesAttOptions;
	EmailServicesErrorAction: EmailServicesErrorAction;
	EmbeddedServiceAuthMethod: EmbeddedServiceAuthMethod;
	EmbeddedServiceDeploymentFeature: EmbeddedServiceDeploymentFeature;
	EmbeddedServiceDeploymentType: EmbeddedServiceDeploymentType;
	EmbeddedServiceComponentBundleType: EmbeddedServiceComponentBundleType;
	EmbeddedServiceCustomComponentType: EmbeddedServiceCustomComponentType;
	EmbeddedServiceResourceType: EmbeddedServiceResourceType;
	EmbeddedServiceFlowType: EmbeddedServiceFlowType;
	EmbeddedServiceFormDisplayContext: EmbeddedServiceFormDisplayContext;
	EmbeddedServiceFormFieldType: EmbeddedServiceFormFieldType;
	MessagingChannelParameterType: MessagingChannelParameterType;
	EmbeddedServiceLayoutType: EmbeddedServiceLayoutType;
	EmbeddedServiceQuickActionType: EmbeddedServiceQuickActionType;
	EmbeddedServiceFontSize: EmbeddedServiceFontSize;
	EmbeddedServiceScenario: EmbeddedServiceScenario;
	EmbeddedServiceChannelType: EmbeddedServiceChannelType;
	EnablementAggregationType: EnablementAggregationType;
	EnablementFilterOperator: EnablementFilterOperator;
	EnblProgramMeasureStatus: EnblProgramMeasureStatus;
	ProgramExtContentDefProvider: ProgramExtContentDefProvider;
	EnblCompositeMilestoneType: EnblCompositeMilestoneType;
	ProgramTaskDefCategory: ProgramTaskDefCategory;
	MilestoneTimeUnits: MilestoneTimeUnits;
	EventDeliveryType: EventDeliveryType;
	EventRelayAdminState: EventRelayAdminState;
	EventRelayUsageType: EventRelayUsageType;
	ExperienceContainerType: ExperienceContainerType;
	ActionLogSchemaType: ActionLogSchemaType;
	EASAppType: EASAppType;
	EvaluationResult: EvaluationResult;
	ExpressionSetStepType: ExpressionSetStepType;
	ExpsSetExecutionScale: ExpsSetExecutionScale;
	ExpsSetInterfaceSourceType: ExpsSetInterfaceSourceType;
	ExpsSetStatus: ExpsSetStatus;
	BusinessKnowledgeModel: BusinessKnowledgeModel;
	ExpsSetConditionOperator: ExpsSetConditionOperator;
	ExpsSetValueType: ExpsSetValueType;
	ExpsSetAggregationFunction: ExpsSetAggregationFunction;
	ExpsSetStepType: ExpsSetStepType;
	ExpsSetDataType: ExpsSetDataType;
	ExpsSetVariableLookupType: ExpsSetVariableLookupType;
	ExpsSetVariableType: ExpsSetVariableType;
	ExpsSetObjectDataType: ExpsSetObjectDataType;
	ExternalBotType: ExternalBotType;
	ApplicationSourceType: ApplicationSourceType;
	ExternalModelStatus: ExternalModelStatus;
	IdentityProviderAuthFlow: IdentityProviderAuthFlow;
	IdentityProviderAuthProtocol: IdentityProviderAuthProtocol;
	ExtlIdentityProviderParmType: ExtlIdentityProviderParmType;
	ExtlClntAppDistState: ExtlClntAppDistState;
	ExtlClntAppManagedType: ExtlClntAppManagedType;
	AuthenticationProtocol: AuthenticationProtocol;
	ExternalCredentialParamType: ExternalCredentialParamType;
	DataConnectionStatus: DataConnectionStatus;
	DataConnectorType: DataConnectorType;
	AvailabilityStatus: AvailabilityStatus;
	ExternalDataSrcDescSubtype: ExternalDataSrcDescSubtype;
	ExternalDataSrcDescType: ExternalDataSrcDescType;
	ExternalPrincipalType: ExternalPrincipalType;
	ExternalDataSourceType: ExternalDataSourceType;
	StorageDriveType: StorageDriveType;
	TargetObject: TargetObject;
	ExternalServiceRegistrationProviderType: ExternalServiceRegistrationProviderType;
	ExtlClntAppStartPage: ExtlClntAppStartPage;
	ScreenLockTimeout: ScreenLockTimeout;
	PermittedUsersPolicyType: PermittedUsersPolicyType;
	PolicyAction: PolicyAction;
	RefreshTokenPolicyType: RefreshTokenPolicyType;
	SessionSecurityLevel: SessionSecurityLevel;
	ApplePushEnvironmentType: ApplePushEnvironmentType;
	PushServiceType: PushServiceType;
	ExtlClntAppSamlEncryptType: ExtlClntAppSamlEncryptType;
	ExtlClntAppNameIdFormatType: ExtlClntAppNameIdFormatType;
	ExtlClntAppSamlSignAlgoType: ExtlClntAppSamlSignAlgoType;
	ExtlClntAppSamlBindingType: ExtlClntAppSamlBindingType;
	ExtlClntAppSamlSubjectType: ExtlClntAppSamlSubjectType;
	FeatureParameterDataflowDirection: FeatureParameterDataflowDirection;
	FieldMappingConfigProcessType: FieldMappingConfigProcessType;
	ClassificationType: ClassificationType;
	EnforcementType: EnforcementType;
	ApptAssistantRadiusUnit: ApptAssistantRadiusUnit;
	MappingType: MappingType;
	WorkOrderDurationSource: WorkOrderDurationSource;
	FieldSrcTrgtRelationshipOwner: FieldSrcTrgtRelationshipOwner;
	RelationshipCardinality: RelationshipCardinality;
	FileDownloadBehavior: FileDownloadBehavior;
	FileType: FileType;
	FlexipageEventSourceTypeEnum: FlexipageEventSourceTypeEnum;
	FlexipageEventTargetTypeEnum: FlexipageEventTargetTypeEnum;
	RegionFlagStatus: RegionFlagStatus;
	ComponentInstancePropertyTypeEnum: ComponentInstancePropertyTypeEnum;
	ComponentInstanceType: ComponentInstanceType;
	FlexipageDataSourceModeEnum: FlexipageDataSourceModeEnum;
	FlexipageDataSourceTypeEnum: FlexipageDataSourceTypeEnum;
	FlexiPageRegionMode: FlexiPageRegionMode;
	FlexiPageRegionType: FlexiPageRegionType;
	PlatformActionListContext: PlatformActionListContext;
	PlatformActionType: PlatformActionType;
	FlexipageSchemaPropType: FlexipageSchemaPropType;
	FlowComplexValueType: FlowComplexValueType;
	FlowDataType: FlowDataType;
	FlowTransformValueActionType: FlowTransformValueActionType;
	FlowAssignmentOperator: FlowAssignmentOperator;
	FlowComparisonOperator: FlowComparisonOperator;
	FlowRecordFilterOperator: FlowRecordFilterOperator;
	FlowStageStepAssigneeType: FlowStageStepAssigneeType;
	FlowScheduledPathOffsetUnit: FlowScheduledPathOffsetUnit;
	FlowScheduledPathType: FlowScheduledPathType;
	FlowScheduledPathTimeSource: FlowScheduledPathTimeSource;
	InvocableActionType: InvocableActionType;
	FlowScreenFieldType: FlowScreenFieldType;
	FlowScreenFieldInputsRevisited: FlowScreenFieldInputsRevisited;
	FlowRegionContainerType: FlowRegionContainerType;
	FlowElementSubtype: FlowElementSubtype;
	FlowWaitInteractionType: FlowWaitInteractionType;
	RecordTriggerType: RecordTriggerType;
	FlowCollectionProcessorType: FlowCollectionProcessorType;
	FlowExperimentType: FlowExperimentType;
	IterationOrder: IterationOrder;
	FlowEntryType: FlowEntryType;
	FlowRunAsUser: FlowRunAsUser;
	FlowStartFrequency: FlowStartFrequency;
	FlowTriggerType: FlowTriggerType;
	FlowTransactionModel: FlowTransactionModel;
	FlowEnvironment: FlowEnvironment;
	FlowRunInMode: FlowRunInMode;
	FlowVersionStatus: FlowVersionStatus;
	FlowTestParameterType: FlowTestParameterType;
	FolderAccessTypes: FolderAccessTypes;
	FolderShareAccessLevel: FolderShareAccessLevel;
	FolderSharedToType: FolderSharedToType;
	PublicFolderAccess: PublicFolderAccess;
	ForecastingDateType: ForecastingDateType;
	DonorMatchingMethod: DonorMatchingMethod;
	PlannerFunctionInvocableTargetType: PlannerFunctionInvocableTargetType;
	PlannerAttrMappingType: PlannerAttrMappingType;
	AttributeType: AttributeType;
	AttributeMappingType: AttributeMappingType;
	PluginType: PluginType;
	GenAiAgentVariableType: GenAiAgentVariableType;
	GenAiRuleExpressionOperator: GenAiRuleExpressionOperator;
	ExpressionType: ExpressionType;
	PlannerType: PlannerType;
	GenAiPromptTemplateStatus: GenAiPromptTemplateStatus;
	GenAiPromptTemplateVisibilityType: GenAiPromptTemplateVisibilityType;
	GenAiPromptTemplateActvAccessLevel: GenAiPromptTemplateActvAccessLevel;
	PageComponentType: PageComponentType;
	PageComponentWidth: PageComponentWidth;
	IPAddressFeature: IPAddressFeature;
	IPAddressUsageScope: IPAddressUsageScope;
	IconUsageType: IconUsageType;
	IdentityVerificationDataSourceType: IdentityVerificationDataSourceType;
	IdentityVerificationProcFldDataSourceType: IdentityVerificationProcFldDataSourceType;
	IdentityVerificationProcFldFieldDataType: IdentityVerificationProcFldFieldDataType;
	IdentityVerificationProcFldFieldType: IdentityVerificationProcFldFieldType;
	IdentityVerificationSearchType: IdentityVerificationSearchType;
	IdentityVerificationSearchLayoutType: IdentityVerificationSearchLayoutType;
	IFrameWhitelistContext: IFrameWhitelistContext;
	ExternalConnectionType: ExternalConnectionType;
	InboundConnPropertyName: InboundConnPropertyName;
	ExternalConnectionStatus: ExternalConnectionStatus;
	InsPolicyLifecycleProcess: InsPolicyLifecycleProcess;
	InsRatePlanCmsnConfigCalcType: InsRatePlanCmsnConfigCalcType;
	AttrDataType: AttrDataType;
	DefinitionType: DefinitionType;
	KnowledgeCaseEditor: KnowledgeCaseEditor;
	KnowledgeLanguageLookupValueType: KnowledgeLanguageLookupValueType;
	FeedLayoutFilterPosition: FeedLayoutFilterPosition;
	FeedLayoutFilterType: FeedLayoutFilterType;
	FeedLayoutComponentType: FeedLayoutComponentType;
	LayoutHeader: LayoutHeader;
	UiBehavior: UiBehavior;
	ReportChartComponentSize: ReportChartComponentSize;
	LayoutSectionStyle: LayoutSectionStyle;
	SummaryLayoutStyle: SummaryLayoutStyle;
	VisibleOrRequired: VisibleOrRequired;
	LetterheadHorizontalAlignment: LetterheadHorizontalAlignment;
	LetterheadVerticalAlignment: LetterheadVerticalAlignment;
	LifeSciAssignmentLevel: LifeSciAssignmentLevel;
	LifeSciConfigCategoryType: LifeSciConfigCategoryType;
	LifeSciConfigFieldDataType: LifeSciConfigFieldDataType;
	LightningBoltCategory: LightningBoltCategory;
	LightningDesignSystemVersion: LightningDesignSystemVersion;
	SupervisorAgentStatusFilter: SupervisorAgentStatusFilter;
	LiveChatButtonPresentation: LiveChatButtonPresentation;
	LiveChatButtonInviteEndPosition: LiveChatButtonInviteEndPosition;
	LiveChatButtonInviteStartPosition: LiveChatButtonInviteStartPosition;
	LiveChatButtonRoutingType: LiveChatButtonRoutingType;
	LiveChatButtonType: LiveChatButtonType;
	SensitiveDataActionType: SensitiveDataActionType;
	SensitiveDataRuleProcessing: SensitiveDataRuleProcessing;
	SensitiveDataRuleVersion: SensitiveDataRuleVersion;
	LoyaltyPgmProcExecutionType: LoyaltyPgmProcExecutionType;
	LoyaltyPgmProcCondOperator: LoyaltyPgmProcCondOperator;
	LoyaltyPgmProcCondType: LoyaltyPgmProcCondType;
	LoyaltyPgmProcRuleType: LoyaltyPgmProcRuleType;
	LoyaltyPgmProcParmDataType: LoyaltyPgmProcParmDataType;
	LoyaltyPgmProcParmType: LoyaltyPgmProcParmType;
	LoyaltyPgmProcActParamOper: LoyaltyPgmProcActParamOper;
	LoyaltyPgmProcActParamType: LoyaltyPgmProcActParamType;
	LoyaltyPgmProcActionType: LoyaltyPgmProcActionType;
	LoyaltyPgmProcCrudActType: LoyaltyPgmProcCrudActType;
	LoyaltyPgmProcRuleStatus: LoyaltyPgmProcRuleStatus;
	LoyaltyPgmProcStatus: LoyaltyPgmProcStatus;
	MLRelationType: MLRelationType;
	MLFieldType: MLFieldType;
	MLDataDefinitionType: MLDataDefinitionType;
	MLGenerativeDefinitionStatus: MLGenerativeDefinitionStatus;
	MLGenerativeType: MLGenerativeType;
	MLPredictionDefinitionStatus: MLPredictionDefinitionStatus;
	MLRecommendationDefinitionStatus: MLRecommendationDefinitionStatus;
	MCNodeType: MCNodeType;
	EventSubscriptionReplayPreset: EventSubscriptionReplayPreset;
	EventSubscriptionAdminState: EventSubscriptionAdminState;
	ContactPointType: ContactPointType;
	AudienceFieldType: AudienceFieldType;
	MarketAudienceStatus: MarketAudienceStatus;
	MarketSegmentType: MarketSegmentType;
	BlankValueBehavior: BlankValueBehavior;
	MatchingMethod: MatchingMethod;
	MatchingRuleStatus: MatchingRuleStatus;
	AutoResponseContentType: AutoResponseContentType;
	MessagingAutoResponseType: MessagingAutoResponseType;
	MessagingChannelConsentType: MessagingChannelConsentType;
	MessagingChannelUsageDeploymentType: MessagingChannelUsageDeploymentType;
	MessagingChannelTargetLookupValueType: MessagingChannelTargetLookupValueType;
	EmbeddedServiceAuthModeType: EmbeddedServiceAuthModeType;
	MessagingAuthorizationType: MessagingAuthorizationType;
	MessagingChannelType: MessagingChannelType;
	MessagingKeywordType: MessagingKeywordType;
	MessagingSessionHandlerType: MessagingSessionHandlerType;
	MessagingChannelStandardParameterType: MessagingChannelStandardParameterType;
	MfgProgramTransformationType: MfgProgramTransformationType;
	MfgProgramTemplateStatus: MfgProgramTemplateStatus;
	MilestoneTypeRecurrenceType: MilestoneTypeRecurrenceType;
	MktDataConnectionMethod: MktDataConnectionMethod;
	MktDataConnectionStatus: MktDataConnectionStatus;
	MlAIModelAlgorithmType: MlAIModelAlgorithmType;
	MlModelConnectorType: MlModelConnectorType;
	MlModelDeployStatus: MlModelDeployStatus;
	MlGenerativeModelType: MlGenerativeModelType;
	MlGenerativeModelCapability: MlGenerativeModelCapability;
	MlModelCapability: MlModelCapability;
	MlModelType: MlModelType;
	MlParameterSubtype: MlParameterSubtype;
	MlParameterType: MlParameterType;
	MlModelPredictionType: MlModelPredictionType;
	MlRuntimeType: MlRuntimeType;
	MlModelSourceType: MlModelSourceType;
	MlAIModelType: MlAIModelType;
	MlModelEndpointType: MlModelEndpointType;
	MlInferenceFormat: MlInferenceFormat;
	ModerationRuleAction: ModerationRuleAction;
	RateLimitTimePeriod: RateLimitTimePeriod;
	ModerationRuleType: ModerationRuleType;
	OrgDomainShard: OrgDomainShard;
	OrgDomainRedirectOption: OrgDomainRedirectOption;
	OrgDomainProdSuffix: OrgDomainProdSuffix;
	CalloutStatus: CalloutStatus;
	NamedCredentialParamType: NamedCredentialParamType;
	NamedCredentialType: NamedCredentialType;
	NetworkPageOverrideSetting: NetworkPageOverrideSetting;
	AudienceCriteriaType: AudienceCriteriaType;
	RecommendationChannel: RecommendationChannel;
	SitesArchiveStatus: SitesArchiveStatus;
	NetworkStatus: NetworkStatus;
	ObjHierarchyMappingType: ObjHierarchyMappingType;
	MappingUsageType: MappingUsageType;
	OcrApplicationType: OcrApplicationType;
	ItemType: ItemType;
	OcrMappingType: OcrMappingType;
	OmniDataTransformInputType: OmniDataTransformInputType;
	ODTItemFilterDataType: ODTItemFilterDataType;
	OmniAnalyticsComponentType: OmniAnalyticsComponentType;
	ExternalTrackingVendor: ExternalTrackingVendor;
	OmniProcessType: OmniProcessType;
	OmniSupervisorActionName: OmniSupervisorActionName;
	OmniSupervisorActionTab: OmniSupervisorActionTab;
	OmniSupervisorTabType: OmniSupervisorTabType;
	OmniSuperSkillVisibilityType: OmniSuperSkillVisibilityType;
	OmniTrackingGroupType: OmniTrackingGroupType;
	OmniUiCardType: OmniUiCardType;
	OutboundConnPropertyName: OutboundConnPropertyName;
	APIAccessLevel: APIAccessLevel;
	ParticipantRoleAccessLevel: ParticipantRoleAccessLevel;
	IdempotencySupportStatus: IdempotencySupportStatus;
	PermissionSetTabVisibility: PermissionSetTabVisibility;
	LicenseExpirationPolicy: LicenseExpirationPolicy;
	PlatformCacheType: PlatformCacheType;
	PlatformEventChannelType: PlatformEventChannelType;
	PlatformEventChannelEventType: PlatformEventChannelEventType;
	Frequency: Frequency;
	PortalRoles: PortalRoles;
	PortalType: PortalType;
	ConditionLogic: ConditionLogic;
	InputValueType: InputValueType;
	TypeOfAction: TypeOfAction;
	AccumulateResultCondInputType: AccumulateResultCondInputType;
	AccumulateResultOperator: AccumulateResultOperator;
	ConditionAggregationFunction: ConditionAggregationFunction;
	TargetEntityMatchType: TargetEntityMatchType;
	ConditionFilterInputValueType: ConditionFilterInputValueType;
	ConditionFilterOperator: ConditionFilterOperator;
	ConditionType: ConditionType;
	ExecutionStageOfPriceRule: ExecutionStageOfPriceRule;
	RuleStatus: RuleStatus;
	PriceSheetColumnType: PriceSheetColumnType;
	ProductFamilyUsageType: ProductFamilyUsageType;
	CategoryGroupVisibility: CategoryGroupVisibility;
	LoginFlowType: LoginFlowType;
	UiLoginFlowType: UiLoginFlowType;
	TabVisibility: TabVisibility;
	PromptDisplayPosition: PromptDisplayPosition;
	PromptDisplayType: PromptDisplayType;
	PromptElementRelativePosition: PromptElementRelativePosition;
	PromptExperience: PromptExperience;
	PromptImageLocation: PromptImageLocation;
	PromptThemeColor: PromptThemeColor;
	PromptThemeSaturation: PromptThemeSaturation;
	PromptUserAccess: PromptUserAccess;
	PromptUserProfileAccess: PromptUserProfileAccess;
	PublicKeyCertificateSetType: PublicKeyCertificateSetType;
	CapacityType: CapacityType;
	RoutingModel: RoutingModel;
	ActionSubtype: ActionSubtype;
	QuickActionParameterType: QuickActionParameterType;
	QuickActionLabel: QuickActionLabel;
	QuickActionType: QuickActionType;
	StrategyReactionType: StrategyReactionType;
	RecommendationConditionOperator: RecommendationConditionOperator;
	RecommendationConditionValueType: RecommendationConditionValueType;
	ChannelSource: ChannelSource;
	PinnedAction: PinnedAction;
	RecordActionType: RecordActionType;
	ComponentName: ComponentName;
	RecordAggregationDefinitionAggregationType: RecordAggregationDefinitionAggregationType;
	RecordAggregationJoinConditionType: RecordAggregationJoinConditionType;
	RecordAggregationObjectFilterOperator: RecordAggregationObjectFilterOperator;
	RecordAggregationDefinitionStatus: RecordAggregationDefinitionStatus;
	ReportAggregateDatatype: ReportAggregateDatatype;
	ReportBucketFieldType: ReportBucketFieldType;
	ReportFormulaNullTreatment: ReportFormulaNullTreatment;
	ChartType: ChartType;
	ChartPosition: ChartPosition;
	ReportChartSize: ReportChartSize;
	ObjectFilterOperator: ObjectFilterOperator;
	CurrencyIsoCode: CurrencyIsoCode;
	DataCategoryFilterOperation: DataCategoryFilterOperation;
	ReportFormat: ReportFormat;
	ReportAggrType: ReportAggrType;
	UserDateGranularity: UserDateGranularity;
	ReportSortType: ReportSortType;
	UserDateInterval: UserDateInterval;
	ReportTypeCategory: ReportTypeCategory;
	ContextRuleStatus: ContextRuleStatus;
	ExecutionType: ExecutionType;
	VariableValueType: VariableValueType;
	RuleActionType: RuleActionType;
	ConditionMatchType: ConditionMatchType;
	RuleConditionOperator: RuleConditionOperator;
	RuleFilterCriteriaType: RuleFilterCriteriaType;
	RuleCondAggregateFunction: RuleCondAggregateFunction;
	RuleRefVariableDataType: RuleRefVariableDataType;
	RuleRefVariableType: RuleRefVariableType;
	ContextRuleUsageType: ContextRuleUsageType;
	ActualsCalculationMode: ActualsCalculationMode;
	SamlIdentityLocationType: SamlIdentityLocationType;
	SamlIdentityType: SamlIdentityType;
	SamlType: SamlType;
	SamlSpSLOBinding: SamlSpSLOBinding;
	DomainType: DomainType;
	SearchCriteriaConfigurationConfigurationType: SearchCriteriaConfigurationConfigurationType;
	SearchCriteriaConfigurationFilterType: SearchCriteriaConfigurationFilterType;
	SearchCriteriaConfigurationResultDisplayFormat: SearchCriteriaConfigurationResultDisplayFormat;
	SearchResultActionScope: SearchResultActionScope;
	SearchResultActionType: SearchResultActionType;
	Complexity: Complexity;
	Expiration: Expiration;
	LockoutInterval: LockoutInterval;
	MaxLoginAttempts: MaxLoginAttempts;
	QuestionRestriction: QuestionRestriction;
	SessionTimeout: SessionTimeout;
	ServiceAISetupDefStatus: ServiceAISetupDefStatus;
	ServiceAISetupFieldType: ServiceAISetupFieldType;
	SvcCtlgItemAttrAttributeType: SvcCtlgItemAttrAttributeType;
	SvcCatalogItemAttrDataType: SvcCatalogItemAttrDataType;
	SvcCtlgItemDpndProcType: SvcCtlgItemDpndProcType;
	SvcCatalogItemDependencyType: SvcCatalogItemDependencyType;
	SvcCatalogItemUsageType: SvcCatalogItemUsageType;
	SlackRecordLayoutViewMode: SlackRecordLayoutViewMode;
	CaseSubjectOption: CaseSubjectOption;
	StageConditionOperator: StageConditionOperator;
	StageCriteriaType: StageCriteriaType;
	StageCriteriaExecType: StageCriteriaExecType;
	StageUserPermission: StageUserPermission;
	StationaryAssetType: StationaryAssetType;
	UnitType: UnitType;
	CriterionOperator: CriterionOperator;
	CriteriaRelationshipType: CriteriaRelationshipType;
	PropertyDisplayType: PropertyDisplayType;
	SvcCatalogItemAttrType: SvcCatalogItemAttrType;
	PublishStatusType: PublishStatusType;
	TimeSheetFrequency: TimeSheetFrequency;
	DaysOfWeek: DaysOfWeek;
	RuleEngine: RuleEngine;
	SaveType: SaveType;
	TransactionSecurityEventName: TransactionSecurityEventName;
	MonitoredEvents: MonitoredEvents;
	TxnSecurityPolicyType: TxnSecurityPolicyType;
	ObjectRelationshipType: ObjectRelationshipType;
	FormatType: FormatType;
	UserAccessPolicyStatus: UserAccessPolicyStatus;
	UserAccessPolicyTriggerType: UserAccessPolicyTriggerType;
	UserAccessPolicyActionType: UserAccessPolicyActionType;
	UserAccessPolicyActionTargetType: UserAccessPolicyActionTargetType;
	UserAccessPolicyFilterOperation: UserAccessPolicyFilterOperation;
	UserAccessPolicyFilterTargetType: UserAccessPolicyFilterTargetType;
	NetworkUserType: NetworkUserType;
	VehicleAssetType: VehicleAssetType;
	VisualizationResourceType: VisualizationResourceType;
	CountryIsoCode: CountryIsoCode;
	TaxLocaleType: TaxLocaleType;
	OrderLifeCycleType: OrderLifeCycleType;
	PricingStrategy: PricingStrategy;
	ProductGrouping: ProductGrouping;
	WebStoreType: WebStoreType;
	LookupValueType: LookupValueType;
	FieldUpdateOperation: FieldUpdateOperation;
	KnowledgeWorkflowAction: KnowledgeWorkflowAction;
	SendAction: SendAction;
	ActionTaskAssignedToTypes: ActionTaskAssignedToTypes;
	ActionEmailRecipientTypes: ActionEmailRecipientTypes;
	ActionEmailSenderType: ActionEmailSenderType;
	WorkflowTriggerTypes: WorkflowTriggerTypes;
	WorkflowTimeUnits: WorkflowTimeUnits;
	ExtendedErrorCode: ExtendedErrorCode;
	TestLevel: TestLevel;
	PerfOption: PerfOption;
	LogCategory: LogCategory;
	LogCategoryLevel: LogCategoryLevel;
	LogType: LogType;
	ID: ID;
	StatusCode: StatusCode;
	AllOrNoneHeader: AllOrNoneHeader;
	CallOptions: CallOptions;
	DebuggingHeader: DebuggingHeader;
	DebuggingInfo: DebuggingInfo;
	SessionHeader: SessionHeader;
	cancelDeploy: cancelDeploy;
	cancelDeployResponse: cancelDeployResponse;
	checkDeployStatus: checkDeployStatus;
	checkDeployStatusResponse: checkDeployStatusResponse;
	checkRetrieveStatus: checkRetrieveStatus;
	checkRetrieveStatusResponse: checkRetrieveStatusResponse;
	checkStatus: checkStatus;
	checkStatusResponse: checkStatusResponse;
	create: create;
	createResponse: createResponse;
	createMetadata: createMetadata;
	createMetadataResponse: createMetadataResponse;
	delete_: delete_;
	deleteResponse: deleteResponse;
	deleteMetadata: deleteMetadata;
	deleteMetadataResponse: deleteMetadataResponse;
	deploy: deploy;
	deployResponse: deployResponse;
	deployRecentValidation: deployRecentValidation;
	deployRecentValidationResponse: deployRecentValidationResponse;
	describeMetadata: describeMetadata;
	describeMetadataResponse: describeMetadataResponse;
	describeValueType: describeValueType;
	describeValueTypeResponse: describeValueTypeResponse;
	listMetadata: listMetadata;
	listMetadataResponse: listMetadataResponse;
	readMetadata: readMetadata;
	readMetadataResponse: readMetadataResponse;
	renameMetadata: renameMetadata;
	renameMetadataResponse: renameMetadataResponse;
	retrieve: retrieve;
	retrieveResponse: retrieveResponse;
	update: update;
	updateResponse: updateResponse;
	updateMetadata: updateMetadata;
	updateMetadataResponse: updateMetadataResponse;
	upsertMetadata: upsertMetadata;
	upsertMetadataResponse: upsertMetadataResponse;
	CancelDeployResult: CancelDeployResult;
	DeployResult: DeployResult;
	DeployDetails: DeployDetails;
	DeployMessage: DeployMessage;
	RetrieveResult: RetrieveResult;
	FileProperties: FileProperties;
	RetrieveMessage: RetrieveMessage;
	RunTestsResult: RunTestsResult;
	CodeCoverageResult: CodeCoverageResult;
	CodeLocation: CodeLocation;
	CodeCoverageWarning: CodeCoverageWarning;
	RunTestFailure: RunTestFailure;
	FlowCoverageResult: FlowCoverageResult;
	FlowCoverageWarning: FlowCoverageWarning;
	RunTestSuccess: RunTestSuccess;
	AsyncResult: AsyncResult;
	Metadata: Metadata;
	AIPredictionDefinition: AIPredictionDefinition;
	AIDataDefinition: AIDataDefinition;
	AIFilterGroup: AIFilterGroup;
	AIFilter: AIFilter;
	AIPredictionField: AIPredictionField;
	AIFilterValue: AIFilterValue;
	AIManagedField: AIManagedField;
	AIModelDefinition: AIModelDefinition;
	AIPredictionTarget: AIPredictionTarget;
	AIPredictionExpression: AIPredictionExpression;
	AIModelFactor: AIModelFactor;
	AIFactorComponent: AIFactorComponent;
	AIModelGraph: AIModelGraph;
	AIModelMetric: AIModelMetric;
	AIScoringStep: AIScoringStep;
	AIUsecaseFieldMapping: AIUsecaseFieldMapping;
	AIUsecaseModel: AIUsecaseModel;
	AIFeatureExtractor: AIFeatureExtractor;
	AccountForecastFormula: AccountForecastFormula;
	ObjectMapping: ObjectMapping;
	ObjectMappingField: ObjectMappingField;
	AccountPlanObjMeasCalcCond: AccountPlanObjMeasCalcCond;
	ActionLinkTemplate: ActionLinkTemplate;
	ActionPlanTemplateItem: ActionPlanTemplateItem;
	ActionPlanTemplateItemValue: ActionPlanTemplateItemValue;
	ActionPlanTemplateItemDependency: ActionPlanTemplateItemDependency;
	EventSubtype: EventSubtype;
	IncludedPlatformLicenseDefinition: IncludedPlatformLicenseDefinition;
	IncludedUserLicenseDefinition: IncludedUserLicenseDefinition;
	CountriesAndStates: CountriesAndStates;
	Country: Country;
	State: State;
	AdvAcctForecastDimension: AdvAcctForecastDimension;
	AdvAcctFrcstDisplayGroup: AdvAcctFrcstDisplayGroup;
	AdvAcctFrcstDplyGroupItem: AdvAcctFrcstDplyGroupItem;
	AdvAcctForecastAdjPeriod: AdvAcctForecastAdjPeriod;
	AdvAccountForecastFormula: AdvAccountForecastFormula;
	AdvAcctForecastMeasureDef: AdvAcctForecastMeasureDef;
	AdvAccountForecastPeriod: AdvAccountForecastPeriod;
	AdvancedFieldMapping: AdvancedFieldMapping;
	AnalyticSnapshotMapping: AnalyticSnapshotMapping;
	AnalyticsDashboardLayout: AnalyticsDashboardLayout;
	AnalyticsDashboardPage: AnalyticsDashboardPage;
	AnalyticsDashPageWidget: AnalyticsDashPageWidget;
	AnalyticsDashboardWidget: AnalyticsDashboardWidget;
	AnalyticsButtonWidgetDef: AnalyticsButtonWidgetDef;
	AnalyticsFilterWidgetDef: AnalyticsFilterWidgetDef;
	AnalyticsMetricWidgetDef: AnalyticsMetricWidgetDef;
	AnalyticsTextWidgetDef: AnalyticsTextWidgetDef;
	AnalyticsVizWidgetDef: AnalyticsVizWidgetDef;
	AnalyticsAssetAction: AnalyticsAssetAction;
	ApexEmailNotification: ApexEmailNotification;
	AppMenuItem: AppMenuItem;
	ModuleRefs: ModuleRefs;
	ModuleRef: ModuleRef;
	ApprovalSubmitter: ApprovalSubmitter;
	ApprovalPageField: ApprovalPageField;
	ApprovalStep: ApprovalStep;
	ApprovalAction: ApprovalAction;
	WorkflowActionReference: WorkflowActionReference;
	ApprovalStepApprover: ApprovalStepApprover;
	Approver: Approver;
	ApprovalEntryCriteria: ApprovalEntryCriteria;
	FilterItem: FilterItem;
	ApprovalStepRejectBehavior: ApprovalStepRejectBehavior;
	NextAutomatedApprover: NextAutomatedApprover;
	AssessmentQuestionVersion: AssessmentQuestionVersion;
	RuleEntry: RuleEntry;
	EscalationAction: EscalationAction;
	AssistantDefinitionProfile: AssistantDefinitionProfile;
	AssistantSkillQuickActionParam: AssistantSkillQuickActionParam;
	AssistantSkillSobjectParam: AssistantSkillSobjectParam;
	AssistantSkill: AssistantSkill;
	AssistantSkillIntent: AssistantSkillIntent;
	AssistantVersionAction: AssistantVersionAction;
	AudienceCriteria: AudienceCriteria;
	AudienceCriterion: AudienceCriterion;
	AudienceCriteriaValue: AudienceCriteriaValue;
	PersonalizationTargetInfos: PersonalizationTargetInfos;
	PersonalizationTargetInfo: PersonalizationTargetInfo;
	AuraDefinitions: AuraDefinitions;
	AuraDefinition: AuraDefinition;
	PackageVersion: PackageVersion;
	AuthProvParamFwdAllowlist: AuthProvParamFwdAllowlist;
	DpeToRecipeTranslateAbstractMetadataValue: DpeToRecipeTranslateAbstractMetadataValue;
	BatchCalcJobAtomicWritebackRelationship: BatchCalcJobAtomicWritebackRelationship;
	BatchCalcJobCustomNodeParameter: BatchCalcJobCustomNodeParameter;
	BatchCalcJobDatasourceField: BatchCalcJobDatasourceField;
	BatchCalcJobFilterCriteria: BatchCalcJobFilterCriteria;
	BtchCalcJobFrcstAggrFld: BtchCalcJobFrcstAggrFld;
	BatchCalcJobFrcstGrpFld: BatchCalcJobFrcstGrpFld;
	BatchCalcJobJoinResultField: BatchCalcJobJoinResultField;
	BatchCalcJobJoinKey: BatchCalcJobJoinKey;
	BatchCalcJobTransformDroppedField: BatchCalcJobTransformDroppedField;
	BatchCalcJobTransformAddedField: BatchCalcJobTransformAddedField;
	BatchCalcJobOrderByField: BatchCalcJobOrderByField;
	BatchCalcJobWritebackMapping: BatchCalcJobWritebackMapping;
	BatchCalcJobAggregateField: BatchCalcJobAggregateField;
	BatchDataSource: BatchDataSource;
	BatchDataSrcFilterCriteria: BatchDataSrcFilterCriteria;
	BenefitActionParameter: BenefitActionParameter;
	BenefitActionParameterValue: BenefitActionParameterValue;
	LocalMlDomain: LocalMlDomain;
	MlIntent: MlIntent;
	MlIntentUtterance: MlIntentUtterance;
	MlRelatedIntent: MlRelatedIntent;
	MlSlotClass: MlSlotClass;
	MlSlotClassValue: MlSlotClassValue;
	SynonymGroup: SynonymGroup;
	BotDialogGroup: BotDialogGroup;
	BotDialog: BotDialog;
	BotStep: BotStep;
	BotInvocation: BotInvocation;
	BotInvocationMapping: BotInvocationMapping;
	BotMessage: BotMessage;
	BotNavigation: BotNavigation;
	BotNavigationLink: BotNavigationLink;
	BotStepCondition: BotStepCondition;
	BotVariableOperation: BotVariableOperation;
	BotQuickReplyOption: BotQuickReplyOption;
	BotVariableOperand: BotVariableOperand;
	ConversationDefinitionRichMessage: ConversationDefinitionRichMessage;
	ConversationRecordLookup: ConversationRecordLookup;
	ConversationRecordLookupCondition: ConversationRecordLookupCondition;
	ConversationRecordLookupField: ConversationRecordLookupField;
	ConversationDefinitionStepGoalMapping: ConversationDefinitionStepGoalMapping;
	ConversationSystemMessage: ConversationSystemMessage;
	ConversationSystemMessageMapping: ConversationSystemMessageMapping;
	ConversationDefinitionPlanner: ConversationDefinitionPlanner;
	ConversationDefinitionGoal: ConversationDefinitionGoal;
	ConversationSystemDialog: ConversationSystemDialog;
	ConversationVariable: ConversationVariable;
	ConversationDefinitionNlpProvider: ConversationDefinitionNlpProvider;
	ConversationContextVariable: ConversationContextVariable;
	ConversationContextVariableMapping: ConversationContextVariableMapping;
	ConversationDefinitionChannelProvider: ConversationDefinitionChannelProvider;
	PageContextVariable: PageContextVariable;
	BrandingSetProperty: BrandingSetProperty;
	BriefcaseRule: BriefcaseRule;
	BriefcaseRuleFilter: BriefcaseRuleFilter;
	Holiday: Holiday;
	BusinessProcessDefinition: BusinessProcessDefinition;
	BusinessProcessFeedback: BusinessProcessFeedback;
	CMSConnectAsset: CMSConnectAsset;
	CMSConnectLanguage: CMSConnectLanguage;
	CMSConnectPersonalization: CMSConnectPersonalization;
	CMSConnectResourceType: CMSConnectResourceType;
	CMSConnectResourceDefinition: CMSConnectResourceDefinition;
	ContactCenterChannel: ContactCenterChannel;
	CallCenterSection: CallCenterSection;
	CallCenterItem: CallCenterItem;
	VendorCallCenterStatusMap: VendorCallCenterStatusMap;
	CareRequestRecords: CareRequestRecords;
	FeedItemSettings: FeedItemSettings;
	EmailToCaseSettings: EmailToCaseSettings;
	EmailToCaseRoutingAddress: EmailToCaseRoutingAddress;
	WebToCaseSettings: WebToCaseSettings;
	ChannelLayoutItem: ChannelLayoutItem;
	ChoiceListValue: ChoiceListValue;
	EmbeddedServiceCustomLabel: EmbeddedServiceCustomLabel;
	CleanRule: CleanRule;
	FieldMapping: FieldMapping;
	FieldMappingRow: FieldMappingRow;
	FieldMappingField: FieldMappingField;
	CloudServiceProviderApi: CloudServiceProviderApi;
	CommandActionIntent: CommandActionIntent;
	CommandActionResponse: CommandActionResponse;
	CommandActionParam: CommandActionParam;
	ReputationLevels: ReputationLevels;
	ChatterAnswersReputationLevel: ChatterAnswersReputationLevel;
	IdeaReputationLevel: IdeaReputationLevel;
	CommunityTemplateBundleInfo: CommunityTemplateBundleInfo;
	NavigationLinkSet: NavigationLinkSet;
	NavigationMenuItem: NavigationMenuItem;
	NavigationMenuItemBranding: NavigationMenuItemBranding;
	NavigationSubMenu: NavigationSubMenu;
	CommunityTemplatePageSetting: CommunityTemplatePageSetting;
	CommunityCustomThemeLayoutType: CommunityCustomThemeLayoutType;
	CommunityThemeRouteOverride: CommunityThemeRouteOverride;
	CommunityThemeSetting: CommunityThemeSetting;
	FiscalYearSettings: FiscalYearSettings;
	ConnectedAppAttribute: ConnectedAppAttribute;
	ConnectedAppCanvasConfig: ConnectedAppCanvasConfig;
	ConnectedAppIpRange: ConnectedAppIpRange;
	ConnectedAppMobileDetailConfig: ConnectedAppMobileDetailConfig;
	ConnectedAppOauthConfig: ConnectedAppOauthConfig;
	ConnectedAppOauthAssetToken: ConnectedAppOauthAssetToken;
	ConnectedAppOauthIdToken: ConnectedAppOauthIdToken;
	ConnectedAppOauthPolicy: ConnectedAppOauthPolicy;
	ConnectedAppSamlConfig: ConnectedAppSamlConfig;
	ConnectedAppSessionPolicy: ConnectedAppSessionPolicy;
	ContextDefinitionReference: ContextDefinitionReference;
	ContextDefinitionVersion: ContextDefinitionVersion;
	ContextMapping: ContextMapping;
	ContextMappingIntent: ContextMappingIntent;
	ContextNodeMapping: ContextNodeMapping;
	ContextAttributeMapping: ContextAttributeMapping;
	ContextAttrHydrationDetail: ContextAttrHydrationDetail;
	CtxAttrHydrationCtx: CtxAttrHydrationCtx;
	ContextNodeAttrDictionary: ContextNodeAttrDictionary;
	ContextNode: ContextNode;
	ContextAttribute: ContextAttribute;
	ContextTag: ContextTag;
	ContractTypeConfig: ContractTypeConfig;
	ConvIntelligenceSignalSubRule: ConvIntelligenceSignalSubRule;
	ConversationMessageConstant: ConversationMessageConstant;
	ConversationMessageConstantCompositeValue: ConversationMessageConstantCompositeValue;
	ConversationMessageConstantPrimitiveValue: ConversationMessageConstantPrimitiveValue;
	ConversationMessageHandler: ConversationMessageHandler;
	ConversationMessageLayout: ConversationMessageLayout;
	ConvMsgExternalTemplateVersion: ConvMsgExternalTemplateVersion;
	ConversationMessageLayoutItem: ConversationMessageLayoutItem;
	ConversationMessageLayoutCompositeValue: ConversationMessageLayoutCompositeValue;
	ConversationMessageLayoutPrimitiveValue: ConversationMessageLayoutPrimitiveValue;
	ConversationMessageMergeField: ConversationMessageMergeField;
	ConversationMessageOptionsParameter: ConversationMessageOptionsParameter;
	ConversationMessageParameterCompositeDetails: ConversationMessageParameterCompositeDetails;
	ConversationMessageParameterPrimitiveDetails: ConversationMessageParameterPrimitiveDetails;
	ConversationMessageParameter: ConversationMessageParameter;
	ActionOverride: ActionOverride;
	AppBrand: AppBrand;
	ServiceCloudConsoleConfig: ServiceCloudConsoleConfig;
	AppComponentList: AppComponentList;
	KeyboardShortcuts: KeyboardShortcuts;
	DefaultShortcut: DefaultShortcut;
	ListPlacement: ListPlacement;
	LiveAgentConfig: LiveAgentConfig;
	PushNotification: PushNotification;
	TabLimitConfig: TabLimitConfig;
	AppPreferences: AppPreferences;
	ProfileActionOverride: ProfileActionOverride;
	AppWorkspaceConfig: AppWorkspaceConfig;
	WorkspaceMapping: WorkspaceMapping;
	CustomDataTypeComponent: CustomDataTypeComponent;
	FeedFilterCriterion: FeedFilterCriterion;
	LookupFilter: LookupFilter;
	MktDataLakeFieldAttributes: MktDataLakeFieldAttributes;
	MktDataModelFieldAttributes: MktDataModelFieldAttributes;
	Picklist: Picklist;
	ValueSet: ValueSet;
	ValueSetValuesDefinition: ValueSetValuesDefinition;
	ValueSettings: ValueSettings;
	CustomHelpMenuItem: CustomHelpMenuItem;
	CustomMetadataValue: CustomMetadataValue;
	ArticleTypeChannelDisplay: ArticleTypeChannelDisplay;
	ArticleTypeTemplate: ArticleTypeTemplate;
	FieldSetItem: FieldSetItem;
	HistoryRetentionPolicy: HistoryRetentionPolicy;
	IndexField: IndexField;
	ListViewFilter: ListViewFilter;
	SharedTo: SharedTo;
	MktDataLakeAttributes: MktDataLakeAttributes;
	MktDataModelAttributes: MktDataModelAttributes;
	ProfileSearchLayouts: ProfileSearchLayouts;
	RecordTypePicklistValue: RecordTypePicklistValue;
	SearchLayouts: SearchLayouts;
	SharingRecalculation: SharingRecalculation;
	ObjectNameCaseValue: ObjectNameCaseValue;
	FieldSetTranslation: FieldSetTranslation;
	CustomFieldTranslation: CustomFieldTranslation;
	LookupFilterTranslation: LookupFilterTranslation;
	PicklistValueTranslation: PicklistValueTranslation;
	LayoutTranslation: LayoutTranslation;
	LayoutSectionTranslation: LayoutSectionTranslation;
	QuickActionTranslation: QuickActionTranslation;
	QuickActionParametersTranslation: QuickActionParametersTranslation;
	RecordTypeTranslation: RecordTypeTranslation;
	SharingReasonTranslation: SharingReasonTranslation;
	StandardFieldTranslation: StandardFieldTranslation;
	ValidationRuleTranslation: ValidationRuleTranslation;
	WebLinkTranslation: WebLinkTranslation;
	WorkflowTaskTranslation: WorkflowTaskTranslation;
	CustomPermissionDependencyRequired: CustomPermissionDependencyRequired;
	SiteWebAddress: SiteWebAddress;
	SiteIframeWhiteListUrl: SiteIframeWhiteListUrl;
	SiteRedirectMapping: SiteRedirectMapping;
	DashboardFilter: DashboardFilter;
	DashboardFilterOption: DashboardFilterOption;
	DashboardGridLayout: DashboardGridLayout;
	DashboardGridComponent: DashboardGridComponent;
	DashboardComponent: DashboardComponent;
	ChartSummary: ChartSummary;
	DashboardComponentContent: DashboardComponentContent;
	DashboardDynamicValue: DashboardDynamicValue;
	DashboardFilterColumn: DashboardFilterColumn;
	DashboardTableColumn: DashboardTableColumn;
	DashboardFlexTableComponentProperties: DashboardFlexTableComponentProperties;
	DashboardComponentColumn: DashboardComponentColumn;
	DashboardComponentSortInfo: DashboardComponentSortInfo;
	DashboardComponentGroupingSortProperties: DashboardComponentGroupingSortProperties;
	DashboardComponentGroupingSort: DashboardComponentGroupingSort;
	DashboardComponentSection: DashboardComponentSection;
	DataCategory: DataCategory;
	ObjectUsage: ObjectUsage;
	DataPlatDataSetBundle: DataPlatDataSetBundle;
	DataPlatformDataSet: DataPlatformDataSet;
	DataspaceScopeSchemaAccess: DataspaceScopeSchemaAccess;
	DecisionMatrixDefinitionVersionColumn: DecisionMatrixDefinitionVersionColumn;
	DecisionTableParameter: DecisionTableParameter;
	DecisionTableSourceCriteria: DecisionTableSourceCriteria;
	DecisionTblDatasetParameter: DecisionTblDatasetParameter;
	FtestDetailWithDeclMd1: FtestDetailWithDeclMd1;
	FtestSubDetailWithDeclMd: FtestSubDetailWithDeclMd;
	FtestDetailWithDeclMd2: FtestDetailWithDeclMd2;
	SchedulingObjectiveParameter: SchedulingObjectiveParameter;
	EmployeeDataSyncField: EmployeeDataSyncField;
	RelatedRecordAccessFltr: RelatedRecordAccessFltr;
	RelatedRecordAccessMap: RelatedRecordAccessMap;
	ActionableListDatasetColumn: ActionableListDatasetColumn;
	ActionableListMemberStatus: ActionableListMemberStatus;
	SchedulingRuleParameter: SchedulingRuleParameter;
	DigitalExperienceFolderShares: DigitalExperienceFolderShares;
	DigitalExperienceFolderShare: DigitalExperienceFolderShare;
	SharedWith: SharedWith;
	DigitalExperienceModuleCollection: DigitalExperienceModuleCollection;
	DigitalExperienceModule: DigitalExperienceModule;
	ContentAssetRelationships: ContentAssetRelationships;
	ContentAssetLink: ContentAssetLink;
	ContentAssetVersions: ContentAssetVersions;
	ContentAssetVersion: ContentAssetVersion;
	DiscoveryModelField: DiscoveryModelField;
	DiscoveryModelTransform: DiscoveryModelTransform;
	DiscoveryStoryOutcome: DiscoveryStoryOutcome;
	EclairMap: EclairMap;
	Attachment: Attachment;
	Site: Site;
	DiscoveryDeployedModel: DiscoveryDeployedModel;
	DiscoveryFieldMap: DiscoveryFieldMap;
	DiscoveryFilter: DiscoveryFilter;
	DiscoveryFilterValue: DiscoveryFilterValue;
	DiscoveryPrescribableField: DiscoveryPrescribableField;
	DiscoveryCustomPrescribableFieldDefinition: DiscoveryCustomPrescribableFieldDefinition;
	DiscoveryModelCard: DiscoveryModelCard;
	DiscoveryGoalOutcome: DiscoveryGoalOutcome;
	DuplicateRuleFilter: DuplicateRuleFilter;
	DuplicateRuleMatchRule: DuplicateRuleMatchRule;
	EmailServicesAddress: EmailServicesAddress;
	EmbeddedServiceAppointmentSettings: EmbeddedServiceAppointmentSettings;
	EmbeddedServiceCustomComponent: EmbeddedServiceCustomComponent;
	EmbeddedServiceCustomization: EmbeddedServiceCustomization;
	EmbeddedServiceResource: EmbeddedServiceResource;
	EmbeddedServiceFlow: EmbeddedServiceFlow;
	EmbeddedServiceForm: EmbeddedServiceForm;
	EmbeddedServiceFormField: EmbeddedServiceFormField;
	EmbeddedServiceLayout: EmbeddedServiceLayout;
	EmbeddedServiceLayoutRule: EmbeddedServiceLayoutRule;
	EmbeddedServiceMessagingChannel: EmbeddedServiceMessagingChannel;
	EmbeddedServiceQuickAction: EmbeddedServiceQuickAction;
	EmbeddedServiceMenuItem: EmbeddedServiceMenuItem;
	EnablementMeasureSourceObjectDefinition: EnablementMeasureSourceObjectDefinition;
	EnablementMeasureFilterDefinition: EnablementMeasureFilterDefinition;
	EnablementMeasureRelatedObjectDefinition: EnablementMeasureRelatedObjectDefinition;
	EnablementProgramSection: EnablementProgramSection;
	EnablementProgramTask: EnablementProgramTask;
	EnablementProgramTaskExercise: EnablementProgramTaskExercise;
	EnablementProgramTaskCmsContent: EnablementProgramTaskCmsContent;
	EnablementProgramTaskCustomContent: EnablementProgramTaskCustomContent;
	EnablementProgramTaskExternalContent: EnablementProgramTaskExternalContent;
	EnablementProgramTaskFeedbackContent: EnablementProgramTaskFeedbackContent;
	EnablementProgramTaskMilestone: EnablementProgramTaskMilestone;
	EnablementProgramTaskMilestoneMeasure: EnablementProgramTaskMilestoneMeasure;
	EntitlementProcessMilestoneItem: EntitlementProcessMilestoneItem;
	MilestoneCompletionCriteria: MilestoneCompletionCriteria;
	EntitlementProcessMilestoneTimeTrigger: EntitlementProcessMilestoneTimeTrigger;
	EventParameterMap: EventParameterMap;
	EventLogObject: EventLogObject;
	ExperienceResources: ExperienceResources;
	ExperienceResource: ExperienceResource;
	ExperiencePropertyTypeBundleResource: ExperiencePropertyTypeBundleResource;
	ExpressionSetStep: ExpressionSetStep;
	ExpressionSetAdvancedCondition: ExpressionSetAdvancedCondition;
	ExpressionSetConditionCriteria: ExpressionSetConditionCriteria;
	ExpressionSetAggregation: ExpressionSetAggregation;
	ExpressionSetAssignment: ExpressionSetAssignment;
	ExpressionSetConditionExpression: ExpressionSetConditionExpression;
	ExpressionSetCustomElement: ExpressionSetCustomElement;
	ExpressionSetElementParameter: ExpressionSetElementParameter;
	ExpressionSetDecisionTable: ExpressionSetDecisionTable;
	ExplainabilityMessageTemplateTokenMapping: ExplainabilityMessageTemplateTokenMapping;
	ExpressionSetSubExpression: ExpressionSetSubExpression;
	ExpressionSetVariable: ExpressionSetVariable;
	ExpressionSetVariableField: ExpressionSetVariableField;
	ExpressionSetObjectAliasField: ExpressionSetObjectAliasField;
	ExternalConversationBotDef: ExternalConversationBotDef;
	ExternalAuthIdentityProviderParameter: ExternalAuthIdentityProviderParameter;
	ExternalCredentialParameter: ExternalCredentialParameter;
	CustomHttpHeader: CustomHttpHeader;
	ExternalServiceOperation: ExternalServiceOperation;
	ExternalAppIdTokenConfig: ExternalAppIdTokenConfig;
	ExtlClntAppNotificationType: ExtlClntAppNotificationType;
	ExtlClntAppOauthPoliciesAttribute: ExtlClntAppOauthPoliciesAttribute;
	ExtlClntAppOauthSettingsAttribute: ExtlClntAppOauthSettingsAttribute;
	ExtlClntAppOauthIpRange: ExtlClntAppOauthIpRange;
	ExtlClntAppAndroidPushConfig: ExtlClntAppAndroidPushConfig;
	ExtlClntAppApplePushConfig: ExtlClntAppApplePushConfig;
	ExtlClntAppSamlConfigurablePoliciesAttribute: ExtlClntAppSamlConfigurablePoliciesAttribute;
	FieldMappingConfigItem: FieldMappingConfigItem;
	ObjectMappingItem: ObjectMappingItem;
	FileTypeDispositionAssignmentBean: FileTypeDispositionAssignmentBean;
	FlexiPageEvent: FlexiPageEvent;
	FlexiPageEventSourceProperty: FlexiPageEventSourceProperty;
	FlexiPageEventTarget: FlexiPageEventTarget;
	FlexiPageEventPropertyMapping: FlexiPageEventPropertyMapping;
	FlexiPageEventTargetProperty: FlexiPageEventTargetProperty;
	FlexiPageRegion: FlexiPageRegion;
	ItemInstance: ItemInstance;
	ComponentInstance: ComponentInstance;
	ComponentInstanceProperty: ComponentInstanceProperty;
	ComponentInstancePropertyList: ComponentInstancePropertyList;
	ComponentInstancePropertyListItem: ComponentInstancePropertyListItem;
	UiFormulaRule: UiFormulaRule;
	UiFormulaCriterion: UiFormulaCriterion;
	FlexipageDataSource: FlexipageDataSource;
	FieldInstance: FieldInstance;
	FieldInstanceProperty: FieldInstanceProperty;
	PlatformActionList: PlatformActionList;
	PlatformActionListItem: PlatformActionListItem;
	QuickActionList: QuickActionList;
	QuickActionListItem: QuickActionListItem;
	FlexiPageTemplateInstance: FlexiPageTemplateInstance;
	FlexiPageCompSchemaPropertyDef: FlexiPageCompSchemaPropertyDef;
	FlowBaseElement: FlowBaseElement;
	FlowMetadataValue: FlowMetadataValue;
	FlowElementReferenceOrValue: FlowElementReferenceOrValue;
	FlowInputValidationRule: FlowInputValidationRule;
	FlowSchedule: FlowSchedule;
	FlowCustomProperty: FlowCustomProperty;
	FlowCategoryItems: FlowCategoryItems;
	FlowTestPoint: FlowTestPoint;
	FlowTestAssertion: FlowTestAssertion;
	FlowTestCondition: FlowTestCondition;
	FlowTestReferenceOrValue: FlowTestReferenceOrValue;
	FlowTestParameter: FlowTestParameter;
	FolderShare: FolderShare;
	ForecastingGroupItem: ForecastingGroupItem;
	ForecastingTypeObjectListSettings: ForecastingTypeObjectListSettings;
	ForecastingObjectListLabelMapping: ForecastingObjectListLabelMapping;
	ForecastingObjectListSelectedSettings: ForecastingObjectListSelectedSettings;
	ForecastingObjectListUnselectedSettings: ForecastingObjectListUnselectedSettings;
	ForecastingCategoryMapping: ForecastingCategoryMapping;
	WeightedSourceCategory: WeightedSourceCategory;
	ForecastingDisplayedFamilySettings: ForecastingDisplayedFamilySettings;
	ForecastingSubmissionSettings: ForecastingSubmissionSettings;
	ForecastingTypeSettings: ForecastingTypeSettings;
	OpportunityListFieldsLabelMapping: OpportunityListFieldsLabelMapping;
	OpportunityListFieldsSelectedSettings: OpportunityListFieldsSelectedSettings;
	OpportunityListFieldsUnselectedSettings: OpportunityListFieldsUnselectedSettings;
	AdjustmentsSettings: AdjustmentsSettings;
	ForecastRangeSettings: ForecastRangeSettings;
	QuotasSettings: QuotasSettings;
	GenAiPlannerAttr: GenAiPlannerAttr;
	GenAiPlannerAttrMapping: GenAiPlannerAttrMapping;
	GenAiPlannerFunctionDef: GenAiPlannerFunctionDef;
	GenAiLocalPlugin: GenAiLocalPlugin;
	GenAiPluginFunctionDef: GenAiPluginFunctionDef;
	GenAiPlannerRuleExpr: GenAiPlannerRuleExpr;
	GenAiPlannerRuleExprCondition: GenAiPlannerRuleExprCondition;
	GenAiPlannerRuleExprAsgn: GenAiPlannerRuleExprAsgn;
	GenAiPlannerRuleExprDef: GenAiPlannerRuleExprDef;
	GenAiPromptTemplateVersion: GenAiPromptTemplateVersion;
	GenAiPromptTemplateInput: GenAiPromptTemplateInput;
	GenAiPromptTemplateDataProvider: GenAiPromptTemplateDataProvider;
	GenAiPromptTemplateDataProviderParam: GenAiPromptTemplateDataProviderParam;
	ValueTranslation: ValueTranslation;
	IframeWhiteListUrl: IframeWhiteListUrl;
	InboundNetworkConnProperty: InboundNetworkConnProperty;
	IntegrationProviderAttr: IntegrationProviderAttr;
	Keyword: Keyword;
	KnowledgeAnswerSettings: KnowledgeAnswerSettings;
	KnowledgeCaseSettings: KnowledgeCaseSettings;
	KnowledgeCommunitiesSettings: KnowledgeCommunitiesSettings;
	KnowledgeSitesSettings: KnowledgeSitesSettings;
	KnowledgeLanguageSettings: KnowledgeLanguageSettings;
	KnowledgeLanguage: KnowledgeLanguage;
	KnowledgeSuggestedArticlesSettings: KnowledgeSuggestedArticlesSettings;
	KnowledgeCaseFieldsSettings: KnowledgeCaseFieldsSettings;
	KnowledgeCaseField: KnowledgeCaseField;
	KnowledgeWorkOrderFieldsSettings: KnowledgeWorkOrderFieldsSettings;
	KnowledgeWorkOrderField: KnowledgeWorkOrderField;
	KnowledgeWorkOrderLineItemFieldsSettings: KnowledgeWorkOrderLineItemFieldsSettings;
	KnowledgeWorkOrderLineItemField: KnowledgeWorkOrderLineItemField;
	CustomConsoleComponents: CustomConsoleComponents;
	PrimaryTabComponents: PrimaryTabComponents;
	Container: Container;
	SidebarComponent: SidebarComponent;
	RelatedList: RelatedList;
	SubtabComponents: SubtabComponents;
	FeedLayout: FeedLayout;
	FeedLayoutFilter: FeedLayoutFilter;
	FeedLayoutComponent: FeedLayoutComponent;
	LayoutSection: LayoutSection;
	LayoutColumn: LayoutColumn;
	LayoutItem: LayoutItem;
	AnalyticsCloudComponentLayoutItem: AnalyticsCloudComponentLayoutItem;
	ReportChartComponentLayoutItem: ReportChartComponentLayoutItem;
	MiniLayout: MiniLayout;
	RelatedListItem: RelatedListItem;
	RelatedContent: RelatedContent;
	RelatedContentItem: RelatedContentItem;
	SummaryLayout: SummaryLayout;
	SummaryLayoutItem: SummaryLayoutItem;
	LetterheadLine: LetterheadLine;
	LetterheadHeaderFooter: LetterheadHeaderFooter;
	LicensedCustomPermissions: LicensedCustomPermissions;
	LifeSciConfigAssignment: LifeSciConfigAssignment;
	LifeSciConfigFieldValue: LifeSciConfigFieldValue;
	LightningBoltFeatures: LightningBoltFeatures;
	LightningBoltImages: LightningBoltImages;
	LightningBoltItems: LightningBoltItems;
	Capabilities: Capabilities;
	LwcResources: LwcResources;
	LwcResource: LwcResource;
	Targets: Targets;
	LightningMessageField: LightningMessageField;
	LightningTypeBundleResource: LightningTypeBundleResource;
	AgentConfigAssignments: AgentConfigAssignments;
	AgentConfigProfileAssignments: AgentConfigProfileAssignments;
	AgentConfigUserAssignments: AgentConfigUserAssignments;
	SupervisorAgentConfigSkills: SupervisorAgentConfigSkills;
	AgentConfigButtons: AgentConfigButtons;
	AgentConfigSkills: AgentConfigSkills;
	LiveChatButtonDeployments: LiveChatButtonDeployments;
	LiveChatButtonSkills: LiveChatButtonSkills;
	LiveChatDeploymentDomainWhitelist: LiveChatDeploymentDomainWhitelist;
	LoyaltyProgramProcess: LoyaltyProgramProcess;
	LoyaltyProgramProcessParameter: LoyaltyProgramProcessParameter;
	LoyaltyProgramProcessCondition: LoyaltyProgramProcessCondition;
	LoyaltyProgramProcessConditionFilterCriteria: LoyaltyProgramProcessConditionFilterCriteria;
	LoyaltyProgramProcessRule: LoyaltyProgramProcessRule;
	LoyaltyProgramProcessAction: LoyaltyProgramProcessAction;
	LoyaltyProgramProcessActionParameter: LoyaltyProgramProcessActionParameter;
	LoyaltyProgramProcessRuleStepMapping: LoyaltyProgramProcessRuleStepMapping;
	MLField: MLField;
	MLFilter: MLFilter;
	ManagedContentNodeType: ManagedContentNodeType;
	AudienceContactPoint: AudienceContactPoint;
	MarketAudienceField: MarketAudienceField;
	MarketingAppExtAction: MarketingAppExtAction;
	MatchingRuleItem: MatchingRuleItem;
	MessagingAutoResponse: MessagingAutoResponse;
	MessagingChannelUsage: MessagingChannelUsage;
	MessagingChannelCustomParameter: MessagingChannelCustomParameter;
	MessagingChannelActionParameterMapping: MessagingChannelActionParameterMapping;
	MessagingChannelParameterValueMapping: MessagingChannelParameterValueMapping;
	EmbeddedMessagingChannel: EmbeddedMessagingChannel;
	MessagingAuthorization: MessagingAuthorization;
	MessagingKeyword: MessagingKeyword;
	MessagingChannelStandardParameter: MessagingChannelStandardParameter;
	MfgProgramTemplateItem: MfgProgramTemplateItem;
	MlModelInput: MlModelInput;
	MlModelOutput: MlModelOutput;
	MlParameterOverride: MlParameterOverride;
	MlParameterDefinition: MlParameterDefinition;
	MlModelEndpoint: MlModelEndpoint;
	MlModelOutputEndpoint: MlModelOutputEndpoint;
	DashboardMobileSettings: DashboardMobileSettings;
	ModeratedEntityField: ModeratedEntityField;
	ModuleDependencies: ModuleDependencies;
	PackageTypeMembers: PackageTypeMembers;
	NamedCredentialParameter: NamedCredentialParameter;
	Branding: Branding;
	CommunityRoles: CommunityRoles;
	NetworkAuthApiSettings: NetworkAuthApiSettings;
	NetworkEmailTmplAllowlist: NetworkEmailTmplAllowlist;
	NetworkMemberGroup: NetworkMemberGroup;
	NetworkPageOverride: NetworkPageOverride;
	RecommendationAudience: RecommendationAudience;
	RecommendationAudienceDetail: RecommendationAudienceDetail;
	RecommendationDefinition: RecommendationDefinition;
	RecommendationDefinitionDetail: RecommendationDefinitionDetail;
	ScheduledRecommendation: ScheduledRecommendation;
	ScheduledRecommendationDetail: ScheduledRecommendationDetail;
	ReputationLevelDefinitions: ReputationLevelDefinitions;
	ReputationLevel: ReputationLevel;
	ReputationBranding: ReputationBranding;
	ReputationPointsRules: ReputationPointsRules;
	ReputationPointsRule: ReputationPointsRule;
	NetworkTabSet: NetworkTabSet;
	NotificationTypeSettings: NotificationTypeSettings;
	AppSettings: AppSettings;
	NotificationChannels: NotificationChannels;
	OauthCustomScopeApp: OauthCustomScopeApp;
	OauthTokenExchHandlerApp: OauthTokenExchHandlerApp;
	FieldSourceTargetMap: FieldSourceTargetMap;
	OcrSampleDocumentField: OcrSampleDocumentField;
	OcrSampleDocumentPageItem: OcrSampleDocumentPageItem;
	OcrSampleDocumentPage: OcrSampleDocumentPage;
	OcrTargetObject: OcrTargetObject;
	OcrTargetObjFieldMapping: OcrTargetObjFieldMapping;
	OcrTemplateSampleDocument: OcrTemplateSampleDocument;
	OmniDataTransformItem: OmniDataTransformItem;
	OmniProcessElement: OmniProcessElement;
	AssessmentDefinitionMetadata: AssessmentDefinitionMetadata;
	OmniAssessmentTaskMetadata: OmniAssessmentTaskMetadata;
	OmniSupervisorConfigAction: OmniSupervisorConfigAction;
	OmniSupervisorConfigGroup: OmniSupervisorConfigGroup;
	OmniSupervisorConfigProfile: OmniSupervisorConfigProfile;
	OmniSupervisorConfigQueue: OmniSupervisorConfigQueue;
	OmniSupervisorConfigSkill: OmniSupervisorConfigSkill;
	OmniSupervisorConfigTab: OmniSupervisorConfigTab;
	FindSimilarOppFilter: FindSimilarOppFilter;
	OrchestrationContextDataset: OrchestrationContextDataset;
	OrchestrationContextEvent: OrchestrationContextEvent;
	OutboundNetworkConnProperty: OutboundNetworkConnProperty;
	ProfileObjectPermissions: ProfileObjectPermissions;
	PathAssistantStep: PathAssistantStep;
	PermissionSetApplicationVisibility: PermissionSetApplicationVisibility;
	PermissionSetApexClassAccess: PermissionSetApexClassAccess;
	PermissionSetCustomMetadataTypeAccess: PermissionSetCustomMetadataTypeAccess;
	PermissionSetCustomPermissions: PermissionSetCustomPermissions;
	PermissionSetCustomSettingAccess: PermissionSetCustomSettingAccess;
	DataspaceScopeAccess: DataspaceScopeAccess;
	PermissionSetEmailRoutingAddressAccess: PermissionSetEmailRoutingAddressAccess;
	PermissionSetExternalCredentialPrincipalAccess: PermissionSetExternalCredentialPrincipalAccess;
	PermissionSetExternalDataSourceAccess: PermissionSetExternalDataSourceAccess;
	PermissionSetFieldPermissions: PermissionSetFieldPermissions;
	PermissionSetFlowAccess: PermissionSetFlowAccess;
	PermissionSetObjectPermissions: PermissionSetObjectPermissions;
	PermissionSetApexPageAccess: PermissionSetApexPageAccess;
	PermissionSetRecordTypeVisibility: PermissionSetRecordTypeVisibility;
	PermissionSetTabSetting: PermissionSetTabSetting;
	PermissionSetUserPermission: PermissionSetUserPermission;
	PermissionSetLicenseDefinitionCustomPermission: PermissionSetLicenseDefinitionCustomPermission;
	PlatformCachePartitionType: PlatformCachePartitionType;
	EnrichedField: EnrichedField;
	IncludedFeature: IncludedFeature;
	SettingOverride: SettingOverride;
	SettingItem: SettingItem;
	SettingUsageDefinition: SettingUsageDefinition;
	PresenceConfigAssignments: PresenceConfigAssignments;
	PresenceConfigProfileAssignments: PresenceConfigProfileAssignments;
	PresenceConfigUserAssignments: PresenceConfigUserAssignments;
	PriceRuleAction: PriceRuleAction;
	PriceRuleActionItem: PriceRuleActionItem;
	PriceRuleCondition: PriceRuleCondition;
	PriceRuleConditionFilter: PriceRuleConditionFilter;
	PriceRuleExecutionStage: PriceRuleExecutionStage;
	PrcShtAttrDefinition: PrcShtAttrDefinition;
	PricingRecipeTableMapping: PricingRecipeTableMapping;
	PricingProcedureOutputMap: PricingProcedureOutputMap;
	ProductAttributeSetItem: ProductAttributeSetItem;
	ProfileApplicationVisibility: ProfileApplicationVisibility;
	ProfileCategoryGroupVisibility: ProfileCategoryGroupVisibility;
	ProfileApexClassAccess: ProfileApexClassAccess;
	ProfileCustomMetadataTypeAccess: ProfileCustomMetadataTypeAccess;
	ProfileCustomPermissions: ProfileCustomPermissions;
	ProfileCustomSettingAccess: ProfileCustomSettingAccess;
	ProfileExternalDataSourceAccess: ProfileExternalDataSourceAccess;
	ProfileFieldLevelSecurity: ProfileFieldLevelSecurity;
	ProfileFlowAccess: ProfileFlowAccess;
	ProfileLayoutAssignment: ProfileLayoutAssignment;
	LoginFlow: LoginFlow;
	ProfileLoginHours: ProfileLoginHours;
	ProfileLoginIpRange: ProfileLoginIpRange;
	ProfileApexPageAccess: ProfileApexPageAccess;
	ProfileRecordTypeVisibility: ProfileRecordTypeVisibility;
	ProfileTabVisibility: ProfileTabVisibility;
	ProfileUserPermission: ProfileUserPermission;
	PromptVersion: PromptVersion;
	PublicKeyCertificateSetKey: PublicKeyCertificateSetKey;
	QueueMembers: QueueMembers;
	PublicGroups: PublicGroups;
	RoleAndSubordinates: RoleAndSubordinates;
	RoleAndSubordinatesInternal: RoleAndSubordinatesInternal;
	Roles: Roles;
	Users: Users;
	QueueSobject: QueueSobject;
	QueueRoutingConfigSkill: QueueRoutingConfigSkill;
	FieldOverride: FieldOverride;
	QuickActionLayout: QuickActionLayout;
	QuickActionLayoutColumn: QuickActionLayoutColumn;
	QuickActionLayoutItem: QuickActionLayoutItem;
	QuickActionParameters: QuickActionParameters;
	QuickActionSendEmailOptions: QuickActionSendEmailOptions;
	RealTimeEvent: RealTimeEvent;
	StrategyAction: StrategyAction;
	StrategyActionArg: StrategyActionArg;
	StrategyNodeBase: StrategyNodeBase;
	IfExpression: IfExpression;
	StrategyNodeInvocableActionArg: StrategyNodeInvocableActionArg;
	MapExpression: MapExpression;
	RecommendationLoadCondition: RecommendationLoadCondition;
	RecommendationConditionValue: RecommendationConditionValue;
	StrategyNodeSortField: StrategyNodeSortField;
	RecordActionDeploymentChannel: RecordActionDeploymentChannel;
	RecordActionDefaultItem: RecordActionDefaultItem;
	RecordActionDeploymentContext: RecordActionDeploymentContext;
	RecordActionRecommendation: RecordActionRecommendation;
	RecordActionSelectableItem: RecordActionSelectableItem;
	RecordAggregationObject: RecordAggregationObject;
	RecordAggregationJoinCondition: RecordAggregationJoinCondition;
	RecordAggregationObjectFilter: RecordAggregationObjectFilter;
	RelationshipGraphDefVersion: RelationshipGraphDefVersion;
	ReportAggregateFilter: ReportAggregateFilter;
	ReportAggregate: ReportAggregate;
	ReportBlockInfo: ReportBlockInfo;
	ReportAggregateReference: ReportAggregateReference;
	ReportBucketField: ReportBucketField;
	ReportBucketFieldValue: ReportBucketFieldValue;
	ReportBucketFieldSourceValue: ReportBucketFieldSourceValue;
	ReportChart: ReportChart;
	ReportColorRange: ReportColorRange;
	ReportColumn: ReportColumn;
	ReportCrossFilter: ReportCrossFilter;
	ReportFilterItem: ReportFilterItem;
	ReportCustomDetailFormula: ReportCustomDetailFormula;
	ReportDataCategoryFilter: ReportDataCategoryFilter;
	ReportFilter: ReportFilter;
	ReportFormattingRule: ReportFormattingRule;
	ReportFormattingRuleValue: ReportFormattingRuleValue;
	ReportGrouping: ReportGrouping;
	ReportHistoricalSelector: ReportHistoricalSelector;
	ReportParam: ReportParam;
	ReportTimeFrameFilter: ReportTimeFrameFilter;
	ObjectRelationship: ObjectRelationship;
	ReportLayoutSection: ReportLayoutSection;
	ReportTypeColumn: ReportTypeColumn;
	RetrievalSummaryDefField: RetrievalSummaryDefField;
	RetrievalSummaryDefObject: RetrievalSummaryDefObject;
	RuleLibraryContextTag: RuleLibraryContextTag;
	RulesetDefinition: RulesetDefinition;
	RuleDefinition: RuleDefinition;
	RuleAction: RuleAction;
	RuleActionParameter: RuleActionParameter;
	RuleFilterCriteria: RuleFilterCriteria;
	RuleCondition: RuleCondition;
	RuleReferenceVariable: RuleReferenceVariable;
	ScoreCategoryCalcInsight: ScoreCategoryCalcInsight;
	ScoreRangeClassification: ScoreRangeClassification;
	SearchCustomizationObjectOverride: SearchCustomizationObjectOverride;
	SearchCustomizationExplicitFilter: SearchCustomizationExplicitFilter;
	SearchCustomizationFieldOverride: SearchCustomizationFieldOverride;
	SearchCustomizationRule: SearchCustomizationRule;
	SearchCustomizationRuleValue: SearchCustomizationRuleValue;
	SearchOrgWideFieldConfig: SearchOrgWideFieldConfig;
	SearchSettingsByObject: SearchSettingsByObject;
	ObjectSearchSetting: ObjectSearchSetting;
	NetworkAccess: NetworkAccess;
	IpRange: IpRange;
	PasswordPolicies: PasswordPolicies;
	SessionSettings: SessionSettings;
	SingleSignOnSettings: SingleSignOnSettings;
	ServiceChannelFieldPriority: ServiceChannelFieldPriority;
	ServiceChannelStatus: ServiceChannelStatus;
	ServiceProcessAttribute: ServiceProcessAttribute;
	ServiceProcessDependency: ServiceProcessDependency;
	ServiceProcessItemGroup: ServiceProcessItemGroup;
	AccountSharingRuleSettings: AccountSharingRuleSettings;
	AccessMapping: AccessMapping;
	SkillAssignments: SkillAssignments;
	SkillProfileAssignments: SkillProfileAssignments;
	SkillUserAssignments: SkillUserAssignments;
	StageTransition: StageTransition;
	StageCriteria: StageCriteria;
	StageCondition: StageCondition;
	StgFulfillmentStepDefGrp: StgFulfillmentStepDefGrp;
	StgFulfillmentStepDef: StgFulfillmentStepDef;
	StgFulfillmentStepDpndDef: StgFulfillmentStepDpndDef;
	StageValue: StageValue;
	SvcCatalogFilterCondition: SvcCatalogFilterCondition;
	SvcCatalogFulfillFlowItem: SvcCatalogFulfillFlowItem;
	SvcCatalogItemDefFiltrCrit: SvcCatalogItemDefFiltrCrit;
	SvcCatalogCategoryItem: SvcCatalogCategoryItem;
	SvcCatalogItemDefDataCategorySelection: SvcCatalogItemDefDataCategorySelection;
	SvcCatalogItemAttribute: SvcCatalogItemAttribute;
	SvcCatalogItemAttrDetail: SvcCatalogItemAttrDetail;
	FieldValue: FieldValue;
	Territory2AccessLevel: Territory2AccessLevel;
	Territory2RuleAssociation: Territory2RuleAssociation;
	Territory2RuleItem: Territory2RuleItem;
	Territory2SettingsOpportunityFilter: Territory2SettingsOpportunityFilter;
	Territory2SupportedObject: Territory2SupportedObject;
	TimeSheetTemplateAssignment: TimeSheetTemplateAssignment;
	TransactionSecurityAction: TransactionSecurityAction;
	TransactionSecurityNotification: TransactionSecurityNotification;
	BotBlockTranslation: BotBlockTranslation;
	BotBlockVersionTranslation: BotBlockVersionTranslation;
	BotDialogTranslation: BotDialogTranslation;
	BotStepTranslation: BotStepTranslation;
	BotMessageTranslation: BotMessageTranslation;
	BotVariableOperationTranslation: BotVariableOperationTranslation;
	BotQuickReplyOptionTranslation: BotQuickReplyOptionTranslation;
	BotTemplateTranslation: BotTemplateTranslation;
	BotTranslation: BotTranslation;
	BotVersionTranslation: BotVersionTranslation;
	ConversationMessageDefinitionTranslation: ConversationMessageDefinitionTranslation;
	ConversationMessageConstantValueTranslation: ConversationMessageConstantValueTranslation;
	CustomApplicationTranslation: CustomApplicationTranslation;
	CustomLabelTranslation: CustomLabelTranslation;
	CustomPageWebLinkTranslation: CustomPageWebLinkTranslation;
	CustomTabTranslation: CustomTabTranslation;
	ExplainabilityMsgTemplateFieldTranslation: ExplainabilityMsgTemplateFieldTranslation;
	FlowDefinitionTranslation: FlowDefinitionTranslation;
	FlowTranslation: FlowTranslation;
	FlowChoiceTranslation: FlowChoiceTranslation;
	FlowChoiceUserInputTranslation: FlowChoiceUserInputTranslation;
	FlowInputValidationRuleTranslation: FlowInputValidationRuleTranslation;
	FlowCustomErrorMessageTranslation: FlowCustomErrorMessageTranslation;
	FlowOrchestrationStepTranslation: FlowOrchestrationStepTranslation;
	FlowScreenTranslation: FlowScreenTranslation;
	FlowScreenFieldTranslation: FlowScreenFieldTranslation;
	FlowInputParameterTranslation: FlowInputParameterTranslation;
	FlowFerovTranslation: FlowFerovTranslation;
	FlowComplexLiteralTranslation: FlowComplexLiteralTranslation;
	FlowStageTranslation: FlowStageTranslation;
	FlowTextTemplateTranslation: FlowTextTemplateTranslation;
	IdentityVerificationFieldTranslation: IdentityVerificationFieldTranslation;
	PipelineInspMetricConfigTranslation: PipelineInspMetricConfigTranslation;
	PromptTranslation: PromptTranslation;
	PromptVersionTranslation: PromptVersionTranslation;
	GlobalQuickActionTranslation: GlobalQuickActionTranslation;
	ReportTypeTranslation: ReportTypeTranslation;
	ReportTypeSectionTranslation: ReportTypeSectionTranslation;
	ReportTypeColumnTranslation: ReportTypeColumnTranslation;
	ScontrolTranslation: ScontrolTranslation;
	UIObjectRelationFieldConfig: UIObjectRelationFieldConfig;
	UiFormatSpecification: UiFormatSpecification;
	UnifiedApplicationMember: UnifiedApplicationMember;
	UserAccessPolicyAction: UserAccessPolicyAction;
	UserAccessPolicyFilter: UserAccessPolicyFilter;
	StandardPermissionSet: StandardPermissionSet;
	SettingValue: SettingValue;
	VisualizationResource: VisualizationResource;
	VisualizationType: VisualizationType;
	WaveAnalyticAssetCollectionItem: WaveAnalyticAssetCollectionItem;
	WaveXmdDate: WaveXmdDate;
	WaveXmdDimension: WaveXmdDimension;
	WaveXmdFormattingProperty: WaveXmdFormattingProperty;
	WaveXmdFormattingBin: WaveXmdFormattingBin;
	WaveXmdFormattingPredicate: WaveXmdFormattingPredicate;
	WaveXmdDimensionCustomAction: WaveXmdDimensionCustomAction;
	WaveXmdDimensionMember: WaveXmdDimensionMember;
	WaveXmdRecordDisplayLookup: WaveXmdRecordDisplayLookup;
	WaveXmdDimensionSalesforceAction: WaveXmdDimensionSalesforceAction;
	WaveXmdMeasure: WaveXmdMeasure;
	WaveXmdOrganization: WaveXmdOrganization;
	WorkSkillRoutingAttribute: WorkSkillRoutingAttribute;
	WorkflowFlowActionParameter: WorkflowFlowActionParameter;
	WorkflowEmailRecipient: WorkflowEmailRecipient;
	WorkflowTimeTrigger: WorkflowTimeTrigger;
	SaveResult: SaveResult;
	Error: Error;
	ExtendedErrorDetails: ExtendedErrorDetails;
	DeleteResult: DeleteResult;
	DeployOptions: DeployOptions;
	DescribeMetadataResult: DescribeMetadataResult;
	DescribeMetadataObject: DescribeMetadataObject;
	DescribeValueTypeResult: DescribeValueTypeResult;
	ValueTypeField: ValueTypeField;
	PicklistEntry: PicklistEntry;
	ListMetadataQuery: ListMetadataQuery;
	ReadResult: ReadResult;
	RetrieveRequest: RetrieveRequest;
	UpdateMetadata: UpdateMetadata;
	UpsertResult: UpsertResult;
	LogInfo: LogInfo;
	AnalyticsParamWidgetDef: AnalyticsParamWidgetDef;
	AnalyticsContainerWidgetDef: AnalyticsContainerWidgetDef;
	AIApplication: AIApplication;
	AIApplicationConfig: AIApplicationConfig;
	AIConvSummarizationConfig: AIConvSummarizationConfig;
	AIModel: AIModel;
	AIReplyRecommendationsSettings: AIReplyRecommendationsSettings;
	AIScoringModelDefVersion: AIScoringModelDefVersion;
	AIScoringModelDefinition: AIScoringModelDefinition;
	AIUsecaseDefinition: AIUsecaseDefinition;
	AccountForecastSettings: AccountForecastSettings;
	AccountIntelligenceSettings: AccountIntelligenceSettings;
	AccountPlanObjMeasCalcDef: AccountPlanObjMeasCalcDef;
	AccountRelationshipShareRule: AccountRelationshipShareRule;
	AccountSettings: AccountSettings;
	AccountingModelConfig: AccountingModelConfig;
	AcctMgrTargetSettings: AcctMgrTargetSettings;
	ActionLauncherItemDef: ActionLauncherItemDef;
	ActionLinkGroupTemplate: ActionLinkGroupTemplate;
	ActionPlanTemplate: ActionPlanTemplate;
	ActionableEventOrchDef: ActionableEventOrchDef;
	ActionableEventTypeDef: ActionableEventTypeDef;
	ActionsSettings: ActionsSettings;
	ActivationPlatform: ActivationPlatform;
	ActivationPlatformActvAttr: ActivationPlatformActvAttr;
	ActivationPlatformField: ActivationPlatformField;
	ActivitiesSettings: ActivitiesSettings;
	ActnblListKeyPrfmIndDef: ActnblListKeyPrfmIndDef;
	ActvPfrmDataConnectorS3: ActvPfrmDataConnectorS3;
	ActvPlatformAdncIdentifier: ActvPlatformAdncIdentifier;
	ActvPlatformFieldValue: ActvPlatformFieldValue;
	ActvPlatformOAuthConnector: ActvPlatformOAuthConnector;
	AddOnDefinition: AddOnDefinition;
	AddressSettings: AddressSettings;
	AdvAccountForecastSet: AdvAccountForecastSet;
	AdvAcctForecastDimSource: AdvAcctForecastDimSource;
	AdvAcctForecastPeriodGroup: AdvAcctForecastPeriodGroup;
	AdvancedObjectMapping: AdvancedObjectMapping;
	AffinityScoreDefinition: AffinityScoreDefinition;
	Ai4mSettings: Ai4mSettings;
	AiPluginUtteranceDef: AiPluginUtteranceDef;
	AnalyticSnapshot: AnalyticSnapshot;
	AnalyticsWorkspace: AnalyticsWorkspace;
	AnalyticsDashboard: AnalyticsDashboard;
	AnalyticsSettings: AnalyticsSettings;
	AndroidPushApplicationSetup: AndroidPushApplicationSetup;
	AnimationRule: AnimationRule;
	ApexEmailNotifications: ApexEmailNotifications;
	ApexSettings: ApexSettings;
	ApexTestSuite: ApexTestSuite;
	AppExperienceSettings: AppExperienceSettings;
	AppFrameworkTemplateBundle: AppFrameworkTemplateBundle;
	AppMenu: AppMenu;
	AppNotificationType: AppNotificationType;
	ApplePushApplicationSetup: ApplePushApplicationSetup;
	Application: Application;
	ApplicationRecordTypeConfig: ApplicationRecordTypeConfig;
	ApplicationSubtypeDefinition: ApplicationSubtypeDefinition;
	AppointmentAssignmentPolicy: AppointmentAssignmentPolicy;
	AppointmentSchedulingPolicy: AppointmentSchedulingPolicy;
	ApprovalProcess: ApprovalProcess;
	DuplicateRuleFilterItem: DuplicateRuleFilterItem;
	AssessmentQuestion: AssessmentQuestion;
	AssessmentQuestionSet: AssessmentQuestionSet;
	AssignmentRule: AssignmentRule;
	AssignmentRules: AssignmentRules;
	AssistantContextItem: AssistantContextItem;
	AssistantDefinition: AssistantDefinition;
	AssistantSkillQuickAction: AssistantSkillQuickAction;
	AssistantSkillSobjectAction: AssistantSkillSobjectAction;
	AssistantVersion: AssistantVersion;
	Audience: Audience;
	AuraDefinitionBundle: AuraDefinitionBundle;
	AuthProvider: AuthProvider;
	AutoResponseRule: AutoResponseRule;
	AutoResponseRules: AutoResponseRules;
	AutomatedContactsSettings: AutomatedContactsSettings;
	BatchCalcJobDefinition: BatchCalcJobDefinition;
	BatchCalcJobAbstractMetadataValue: BatchCalcJobAbstractMetadataValue;
	BatchCalcJobAtomicWriteback: BatchCalcJobAtomicWriteback;
	BatchCalcJobCustomNode: BatchCalcJobCustomNode;
	BatchCalcJobDatasource: BatchCalcJobDatasource;
	BatchCalcJobFilter: BatchCalcJobFilter;
	BatchCalcJobForecast: BatchCalcJobForecast;
	BatchCalcJobHierarchyPath: BatchCalcJobHierarchyPath;
	BatchCalcJobParameter: BatchCalcJobParameter;
	BatchCalcJobSourceJoin: BatchCalcJobSourceJoin;
	BatchCalcJobTransform: BatchCalcJobTransform;
	BatchCalcJobUnion: BatchCalcJobUnion;
	BatchCalcJobWritebackObject: BatchCalcJobWritebackObject;
	BatchProcessJobDefinition: BatchProcessJobDefinition;
	BenefitAction: BenefitAction;
	BillingSettings: BillingSettings;
	BlacklistedConsumer: BlacklistedConsumer;
	BldgEnrgyIntensityCnfg: BldgEnrgyIntensityCnfg;
	BlockchainSettings: BlockchainSettings;
	Bot: Bot;
	BotVersion: BotVersion;
	BotBlock: BotBlock;
	BotBlockVersion: BotBlockVersion;
	BotSettings: BotSettings;
	BotTemplate: BotTemplate;
	BrandingSet: BrandingSet;
	BriefcaseDefinition: BriefcaseDefinition;
	BusinessHoursEntry: BusinessHoursEntry;
	BusinessHoursSettings: BusinessHoursSettings;
	BusinessProcess: BusinessProcess;
	PicklistValue: PicklistValue;
	GlobalPicklistValue: GlobalPicklistValue;
	BusinessProcessGroup: BusinessProcessGroup;
	BusinessProcessTypeDefinition: BusinessProcessTypeDefinition;
	CMSConnectSource: CMSConnectSource;
	CallCenter: CallCenter;
	CallCenterRoutingMap: CallCenterRoutingMap;
	CallCoachingMediaProvider: CallCoachingMediaProvider;
	CallCtrAgentFavTrfrDest: CallCtrAgentFavTrfrDest;
	CampaignInfluenceModel: CampaignInfluenceModel;
	CampaignSettings: CampaignSettings;
	CampaignTemplateDefinition: CampaignTemplateDefinition;
	CanvasMetadata: CanvasMetadata;
	CareBenefitVerifySettings: CareBenefitVerifySettings;
	CareRequestConfiguration: CareRequestConfiguration;
	CaseSettings: CaseSettings;
	CaseSubjectParticle: CaseSubjectParticle;
	ChannelLayout: ChannelLayout;
	ChannelObjectLinkingRule: ChannelObjectLinkingRule;
	ChannelRevMgmtSettings: ChannelRevMgmtSettings;
	ChatterAnswersSettings: ChatterAnswersSettings;
	ChatterEmailsMDSettings: ChatterEmailsMDSettings;
	ChatterExtension: ChatterExtension;
	ChatterSettings: ChatterSettings;
	ChoiceList: ChoiceList;
	ClaimFinancialSettings: ClaimFinancialSettings;
	ClauseCatgConfiguration: ClauseCatgConfiguration;
	CleanDataService: CleanDataService;
	CloudServiceProvider: CloudServiceProvider;
	CmsnStmtLineItemConfig: CmsnStmtLineItemConfig;
	CmsnStmtLineItemTypConfig: CmsnStmtLineItemTypConfig;
	CommandAction: CommandAction;
	CommerceSettings: CommerceSettings;
	CommissionStatementConfig: CommissionStatementConfig;
	CommsServiceConsoleSettings: CommsServiceConsoleSettings;
	CommunicationChannelType: CommunicationChannelType;
	CommunitiesSettings: CommunitiesSettings;
	Community: Community;
	CommunityAIModelMapping: CommunityAIModelMapping;
	CommunityTemplateDefinition: CommunityTemplateDefinition;
	CommunityThemeBundleInfo: CommunityThemeBundleInfo;
	CommunityThemeDefinition: CommunityThemeDefinition;
	CompactLayout: CompactLayout;
	CompanySettings: CompanySettings;
	ConnectedApp: ConnectedApp;
	ConnectedAppSettings: ConnectedAppSettings;
	ConnectivityDevConfigMetadata: ConnectivityDevConfigMetadata;
	ConsentBannerSettings: ConsentBannerSettings;
	ContentSettings: ContentSettings;
	ContextDefinition: ContextDefinition;
	ContextUseCaseMapping: ContextUseCaseMapping;
	ContractSettings: ContractSettings;
	ContractType: ContractType;
	ConvIntelligenceSignalRule: ConvIntelligenceSignalRule;
	ConvReasonReportDefinition: ConvReasonReportDefinition;
	ConvReasonReportSegmentDef: ConvReasonReportSegmentDef;
	ConversationChannelDefinition: ConversationChannelDefinition;
	ConversationMessageDefinition: ConversationMessageDefinition;
	ConversationVendorInfo: ConversationVendorInfo;
	ConversationalIntelligenceSettings: ConversationalIntelligenceSettings;
	CorsWhitelistOrigin: CorsWhitelistOrigin;
	CspTrustedSite: CspTrustedSite;
	CurrencySettings: CurrencySettings;
	CustomAddressFieldSettings: CustomAddressFieldSettings;
	CustomApplication: CustomApplication;
	AppActionOverride: AppActionOverride;
	CustomShortcut: CustomShortcut;
	AppProfileActionOverride: AppProfileActionOverride;
	CustomApplicationComponent: CustomApplicationComponent;
	CustomDataType: CustomDataType;
	CustomFeedFilter: CustomFeedFilter;
	CustomField: CustomField;
	CustomValue: CustomValue;
	StandardValue: StandardValue;
	CustomHelpMenuSection: CustomHelpMenuSection;
	CustomIndex: CustomIndex;
	CustomLabel: CustomLabel;
	CustomLabels: CustomLabels;
	CustomMetadata: CustomMetadata;
	CustomNotificationType: CustomNotificationType;
	CustomObject: CustomObject;
	FieldSet: FieldSet;
	Index: Index;
	ListView: ListView;
	RecordType: RecordType;
	SharingReason: SharingReason;
	ValidationRule: ValidationRule;
	WebLink: WebLink;
	CustomObjectTranslation: CustomObjectTranslation;
	CustomPageWebLink: CustomPageWebLink;
	CustomPermission: CustomPermission;
	CustomSite: CustomSite;
	CustomTab: CustomTab;
	CustomerDataPlatformSettings: CustomerDataPlatformSettings;
	CustomizablePropensityScoringSettings: CustomizablePropensityScoringSettings;
	Dashboard: Dashboard;
	DataCalcInsightTemplate: DataCalcInsightTemplate;
	DataCategoryGroup: DataCategoryGroup;
	DataConnectionParamTmpl: DataConnectionParamTmpl;
	DataConnectorIngestApi: DataConnectorIngestApi;
	DataConnectorS3: DataConnectorS3;
	DataDotComSettings: DataDotComSettings;
	DataKitObjectDependency: DataKitObjectDependency;
	DataKitObjectTemplate: DataKitObjectTemplate;
	DataModelTaxonomy: DataModelTaxonomy;
	DataObjectCategory: DataObjectCategory;
	DataObjectSearchIndexConf: DataObjectSearchIndexConf;
	DataPackageKitDefinition: DataPackageKitDefinition;
	DataPackageKitObject: DataPackageKitObject;
	DataPlatform: DataPlatform;
	DataSource: DataSource;
	DataSourceBundleDefinition: DataSourceBundleDefinition;
	DataSourceField: DataSourceField;
	DataSourceObject: DataSourceObject;
	DataSourceTenant: DataSourceTenant;
	DataSrcDataModelFieldMap: DataSrcDataModelFieldMap;
	DataStreamDefinition: DataStreamDefinition;
	MktDataConnectionSrcParam: MktDataConnectionSrcParam;
	DataStreamTemplate: DataStreamTemplate;
	DataspaceScope: DataspaceScope;
	DecisionMatrixDefinition: DecisionMatrixDefinition;
	DecisionMatrixDefinitionVersion: DecisionMatrixDefinitionVersion;
	DecisionTable: DecisionTable;
	DecisionTableDatasetLink: DecisionTableDatasetLink;
	PlatformEventSubscriberConfig: PlatformEventSubscriberConfig;
	FtestTopLevelWithDeclMd1: FtestTopLevelWithDeclMd1;
	FtestTopLevelWithDeclMd3: FtestTopLevelWithDeclMd3;
	FtestTopLevelWithCrud: FtestTopLevelWithCrud;
	SchedulingObjective: SchedulingObjective;
	FtestTopLevelWithDeclMd2: FtestTopLevelWithDeclMd2;
	PipelineInspMetricConfig: PipelineInspMetricConfig;
	VirtualVisitConfig: VirtualVisitConfig;
	MobileSecurityAssignment: MobileSecurityAssignment;
	MobileSecurityPolicy: MobileSecurityPolicy;
	LearningAchievementConfig: LearningAchievementConfig;
	RecordAlertDataSource: RecordAlertDataSource;
	DocumentCategory: DocumentCategory;
	RecAlrtDataSrcExpSetDef: RecAlrtDataSrcExpSetDef;
	EmployeeDataSyncProfile: EmployeeDataSyncProfile;
	RegisteredExternalService: RegisteredExternalService;
	CustomFieldDisplay: CustomFieldDisplay;
	AccountingFieldMapping: AccountingFieldMapping;
	RecordAlertTemplate: RecordAlertTemplate;
	RelatedRecordAccessDef: RelatedRecordAccessDef;
	MobSecurityCertPinConfig: MobSecurityCertPinConfig;
	SlackFeatureSettings: SlackFeatureSettings;
	ActionableListDefinition: ActionableListDefinition;
	CareProviderSearchConfig: CareProviderSearchConfig;
	CareSystemFieldMapping: CareSystemFieldMapping;
	CareLimitType: CareLimitType;
	AssessmentConfiguration: AssessmentConfiguration;
	SchedulingRule: SchedulingRule;
	CareProviderAfflRoleConfig: CareProviderAfflRoleConfig;
	OpptStageDescription: OpptStageDescription;
	DatasetImportRequest: DatasetImportRequest;
	PortalDelegablePermissionSet: PortalDelegablePermissionSet;
	RelatedRecordAssocCriteria: RelatedRecordAssocCriteria;
	DocumentCategoryDocumentType: DocumentCategoryDocumentType;
	ShiftSegmentType: ShiftSegmentType;
	ProductConfiguratorSettings: ProductConfiguratorSettings;
	DataImportManagementSettings: DataImportManagementSettings;
	WorkforceEngagementSettings: WorkforceEngagementSettings;
	ClaimMgmtFoundationEnabledSettings: ClaimMgmtFoundationEnabledSettings;
	EinsteinCopilotSettings: EinsteinCopilotSettings;
	FTestSettings: FTestSettings;
	MediaAdSalesSettings: MediaAdSalesSettings;
	IndustriesPricingSettings: IndustriesPricingSettings;
	BranchManagementSettings: BranchManagementSettings;
	DynamicFormsSettings: DynamicFormsSettings;
	CodeBuilderSettings: CodeBuilderSettings;
	IndustriesContextSettings: IndustriesContextSettings;
	IndustriesLsCommercialSettings: IndustriesLsCommercialSettings;
	IncludeEstTaxInQuoteCPQSettings: IncludeEstTaxInQuoteCPQSettings;
	ConversationServiceIntegrationSettings: ConversationServiceIntegrationSettings;
	EinsteinAISettings: EinsteinAISettings;
	IndustriesGamificationSettings: IndustriesGamificationSettings;
	PlatformEventSettings: PlatformEventSettings;
	AssociationEngineSettings: AssociationEngineSettings;
	IndustriesUsageSettings: IndustriesUsageSettings;
	OrgSettings: OrgSettings;
	AgentforceForDevelopersSettings: AgentforceForDevelopersSettings;
	IncludeEstTaxInQuoteSettings: IncludeEstTaxInQuoteSettings;
	ReferralMarketingSettings: ReferralMarketingSettings;
	AccountPlanSettings: AccountPlanSettings;
	PaymentsManagementEnabledSettings: PaymentsManagementEnabledSettings;
	EinsteinGptSettings: EinsteinGptSettings;
	PlatformSlackSettings: PlatformSlackSettings;
	RevenueManagementSettings: RevenueManagementSettings;
	KnowledgeGenerationSettings: KnowledgeGenerationSettings;
	DynamicFulfillmentOrchestratorSettings: DynamicFulfillmentOrchestratorSettings;
	MailMergeSettings: MailMergeSettings;
	AccountingSettings: AccountingSettings;
	CollectionsDashboardSettings: CollectionsDashboardSettings;
	InvLatePymntRiskCalcSettings: InvLatePymntRiskCalcSettings;
	FTestAccessSettings: FTestAccessSettings;
	SceGlobalModelOptOutSettings: SceGlobalModelOptOutSettings;
	SandboxSettings: SandboxSettings;
	InterestTaggingSettings: InterestTaggingSettings;
	IndustriesRatingSettings: IndustriesRatingSettings;
	EvfSettings: EvfSettings;
	SourceTrackingSettings: SourceTrackingSettings;
	DevHubSettings: DevHubSettings;
	IndustriesLoyaltySettings: IndustriesLoyaltySettings;
	Web3Settings: Web3Settings;
	IndustriesUnifiedPromotionsSettings: IndustriesUnifiedPromotionsSettings;
	AppAnalyticsSettings: AppAnalyticsSettings;
	MapsAndLocationSettings: MapsAndLocationSettings;
	LargeQuotesandOrdersForRlmSettings: LargeQuotesandOrdersForRlmSettings;
	OnlineSalesSettings: OnlineSalesSettings;
	DelegateGroup: DelegateGroup;
	DeploymentSettings: DeploymentSettings;
	DgtAssetMgmtProvider: DgtAssetMgmtProvider;
	DgtAssetMgmtPrvdLghtCpnt: DgtAssetMgmtPrvdLghtCpnt;
	DigitalExperienceBundle: DigitalExperienceBundle;
	MetadataWithContent: MetadataWithContent;
	AccessControlPolicy: AccessControlPolicy;
	ApexClass: ApexClass;
	ApexComponent: ApexComponent;
	ApexPage: ApexPage;
	ApexTrigger: ApexTrigger;
	Certificate: Certificate;
	CodeBundle: CodeBundle;
	ContentAsset: ContentAsset;
	DataPipeline: DataPipeline;
	DataWeaveResource: DataWeaveResource;
	DiscoveryAIModel: DiscoveryAIModel;
	DiscoveryStory: DiscoveryStory;
	Document: Document;
	DocumentTemplate: DocumentTemplate;
	EclairGeoData: EclairGeoData;
	EmailTemplate: EmailTemplate;
	FieldServiceMobileExtension: FieldServiceMobileExtension;
	InboundCertificate: InboundCertificate;
	NetworkBranding: NetworkBranding;
	Orchestration: Orchestration;
	Schema: Schema;
	Scontrol: Scontrol;
	SiteDotCom: SiteDotCom;
	SlackApp: SlackApp;
	StaticResource: StaticResource;
	UiPlugin: UiPlugin;
	UiViewDefinition: UiViewDefinition;
	UserAuthCertificate: UserAuthCertificate;
	ViewDefinition: ViewDefinition;
	WaveDashboard: WaveDashboard;
	WaveComponent: WaveComponent;
	WaveDataflow: WaveDataflow;
	WaveLens: WaveLens;
	WaveRecipe: WaveRecipe;
	DigitalExperienceConfig: DigitalExperienceConfig;
	DisclosureDefinition: DisclosureDefinition;
	DisclosureDefinitionVersion: DisclosureDefinitionVersion;
	DisclosureType: DisclosureType;
	DiscoveryGoal: DiscoveryGoal;
	DiscoverySettings: DiscoverySettings;
	DocumentChecklistSettings: DocumentChecklistSettings;
	DocumentGenerationSetting: DocumentGenerationSetting;
	DocumentType: DocumentType;
	DuplicateRule: DuplicateRule;
	EACSettings: EACSettings;
	ESignatureConfig: ESignatureConfig;
	ESignatureEnvelopeConfig: ESignatureEnvelopeConfig;
	EditionDefinition: EditionDefinition;
	EinsteinAgentSettings: EinsteinAgentSettings;
	EinsteinAssistantSettings: EinsteinAssistantSettings;
	EinsteinDealInsightsSettings: EinsteinDealInsightsSettings;
	EinsteinDocumentCaptureSettings: EinsteinDocumentCaptureSettings;
	EmailAdministrationSettings: EmailAdministrationSettings;
	EmailIntegrationSettings: EmailIntegrationSettings;
	EmailServicesFunction: EmailServicesFunction;
	EmailTemplateSettings: EmailTemplateSettings;
	EmbeddedServiceBranding: EmbeddedServiceBranding;
	EmbeddedServiceConfig: EmbeddedServiceConfig;
	EmbeddedServiceFlowConfig: EmbeddedServiceFlowConfig;
	EmbeddedServiceFieldService: EmbeddedServiceFieldService;
	EmbeddedServiceLiveAgent: EmbeddedServiceLiveAgent;
	EmbeddedServiceMenuSettings: EmbeddedServiceMenuSettings;
	EmployeeFieldAccessSettings: EmployeeFieldAccessSettings;
	EmployeeUserSettings: EmployeeUserSettings;
	EnablementMeasureDefinition: EnablementMeasureDefinition;
	EnablementProgramDefinition: EnablementProgramDefinition;
	EnblProgramTaskSubCategory: EnblProgramTaskSubCategory;
	EncryptionKeySettings: EncryptionKeySettings;
	EnhancedNotesSettings: EnhancedNotesSettings;
	EntitlementProcess: EntitlementProcess;
	EntitlementSettings: EntitlementSettings;
	EntitlementTemplate: EntitlementTemplate;
	EscalationRule: EscalationRule;
	EscalationRules: EscalationRules;
	EssentialsSettings: EssentialsSettings;
	EventDelivery: EventDelivery;
	EventLogObjectSettings: EventLogObjectSettings;
	EventRelayConfig: EventRelayConfig;
	EventSettings: EventSettings;
	EventSubscription: EventSubscription;
	ExperienceBundle: ExperienceBundle;
	ExperienceBundleSettings: ExperienceBundleSettings;
	ExperienceContainer: ExperienceContainer;
	ExperiencePropertyTypeBundle: ExperiencePropertyTypeBundle;
	ExplainabilityActionDefinition: ExplainabilityActionDefinition;
	ExplainabilityActionVersion: ExplainabilityActionVersion;
	ExplainabilityMsgTemplate: ExplainabilityMsgTemplate;
	ExpressionSetDefinition: ExpressionSetDefinition;
	ExpressionSetDefinitionVersion: ExpressionSetDefinitionVersion;
	ExpressionSetMessageToken: ExpressionSetMessageToken;
	ExpressionSetObjectAlias: ExpressionSetObjectAlias;
	ExtConvParticipantIntegDef: ExtConvParticipantIntegDef;
	ExtDataTranFieldTemplate: ExtDataTranFieldTemplate;
	ExtDataTranObjectTemplate: ExtDataTranObjectTemplate;
	ExternalAIModel: ExternalAIModel;
	ExternalAuthIdentityProvider: ExternalAuthIdentityProvider;
	ExternalClientAppSettings: ExternalClientAppSettings;
	ExternalClientApplication: ExternalClientApplication;
	ExternalCredential: ExternalCredential;
	ExternalDataConnector: ExternalDataConnector;
	ExternalDataTranObject: ExternalDataTranObject;
	ExternalDataTranField: ExternalDataTranField;
	ExternalDataSource: ExternalDataSource;
	ExternalDataSrcDescriptor: ExternalDataSrcDescriptor;
	ExternalDocStorageConfig: ExternalDocStorageConfig;
	ExternalServiceRegistration: ExternalServiceRegistration;
	ExtlClntAppConfigurablePolicies: ExtlClntAppConfigurablePolicies;
	ExtlClntAppGlobalOauthSettings: ExtlClntAppGlobalOauthSettings;
	ExtlClntAppMobileConfigurablePolicies: ExtlClntAppMobileConfigurablePolicies;
	ExtlClntAppMobileSettings: ExtlClntAppMobileSettings;
	ExtlClntAppNotificationSettings: ExtlClntAppNotificationSettings;
	ExtlClntAppOauthConfigurablePolicies: ExtlClntAppOauthConfigurablePolicies;
	ExtlClntAppOauthSettings: ExtlClntAppOauthSettings;
	ExtlClntAppPushConfigurablePolicies: ExtlClntAppPushConfigurablePolicies;
	ExtlClntAppPushSettings: ExtlClntAppPushSettings;
	ExtlClntAppSamlConfigurablePolicies: ExtlClntAppSamlConfigurablePolicies;
	ExtlClntAppSampleConfigurablePolicies: ExtlClntAppSampleConfigurablePolicies;
	ExtlClntAppSampleSettings: ExtlClntAppSampleSettings;
	FTestFieldMappingMd: FTestFieldMappingMd;
	FTestToolingFLU: FTestToolingFLU;
	FeatureParameterBoolean: FeatureParameterBoolean;
	FeatureParameterDate: FeatureParameterDate;
	FeatureParameterInteger: FeatureParameterInteger;
	FieldMappingConfig: FieldMappingConfig;
	FieldRestrictionRule: FieldRestrictionRule;
	FieldServiceSettings: FieldServiceSettings;
	FieldSrcTrgtRelationship: FieldSrcTrgtRelationship;
	FileUploadAndDownloadSecuritySettings: FileUploadAndDownloadSecuritySettings;
	FilesConnectSettings: FilesConnectSettings;
	FlexiPage: FlexiPage;
	Flow: Flow;
	FlowElement: FlowElement;
	FlowInlineTransform: FlowInlineTransform;
	FlowTransformValue: FlowTransformValue;
	FlowTransformValueAction: FlowTransformValueAction;
	FlowTransformValueActionInputParameter: FlowTransformValueActionInputParameter;
	FlowActionCallInputParameter: FlowActionCallInputParameter;
	FlowActionCallOutputParameter: FlowActionCallOutputParameter;
	FlowActionCallPath: FlowActionCallPath;
	FlowConnector: FlowConnector;
	FlowApexPluginCallInputParameter: FlowApexPluginCallInputParameter;
	FlowApexPluginCallOutputParameter: FlowApexPluginCallOutputParameter;
	FlowAssignmentItem: FlowAssignmentItem;
	FlowChoiceUserInput: FlowChoiceUserInput;
	FlowCollectionMapItem: FlowCollectionMapItem;
	FlowCollectionSortOption: FlowCollectionSortOption;
	FlowCondition: FlowCondition;
	FlowCustomErrorMessage: FlowCustomErrorMessage;
	FlowDataTypeMapping: FlowDataTypeMapping;
	FlowInputFieldAssignment: FlowInputFieldAssignment;
	FlowOutputFieldAssignment: FlowOutputFieldAssignment;
	FlowRecordFilter: FlowRecordFilter;
	FlowScreenActionInputParameter: FlowScreenActionInputParameter;
	FlowScreenFieldInputParameter: FlowScreenFieldInputParameter;
	FlowScreenFieldOutputParameter: FlowScreenFieldOutputParameter;
	FlowScreenRule: FlowScreenRule;
	FlowScreenRuleAction: FlowScreenRuleAction;
	FlowScreenTrigger: FlowScreenTrigger;
	FlowScreenTriggerHandler: FlowScreenTriggerHandler;
	FlowStageStepAssignee: FlowStageStepAssignee;
	FlowStageStepEntryActionInputParameter: FlowStageStepEntryActionInputParameter;
	FlowStageStepEntryActionOutputParameter: FlowStageStepEntryActionOutputParameter;
	FlowStageStepExitActionInputParameter: FlowStageStepExitActionInputParameter;
	FlowStageStepExitActionOutputParameter: FlowStageStepExitActionOutputParameter;
	FlowStageStepInputParameter: FlowStageStepInputParameter;
	FlowStageStepOutputParameter: FlowStageStepOutputParameter;
	FlowStartInputParameter: FlowStartInputParameter;
	FlowSubflowInputAssignment: FlowSubflowInputAssignment;
	FlowSubflowOutputAssignment: FlowSubflowOutputAssignment;
	FlowVisibilityRule: FlowVisibilityRule;
	FlowWaitEventInputParameter: FlowWaitEventInputParameter;
	FlowWaitEventOutputParameter: FlowWaitEventOutputParameter;
	FlowCapability: FlowCapability;
	FlowCapabilityInput: FlowCapabilityInput;
	FlowChoice: FlowChoice;
	FlowConstant: FlowConstant;
	FlowDynamicChoiceSet: FlowDynamicChoiceSet;
	FlowExitRule: FlowExitRule;
	FlowExperimentPath: FlowExperimentPath;
	FlowFormula: FlowFormula;
	FlowRule: FlowRule;
	FlowScheduledPath: FlowScheduledPath;
	FlowScreenAction: FlowScreenAction;
	FlowScreenField: FlowScreenField;
	FlowStage: FlowStage;
	FlowStageStep: FlowStageStep;
	FlowTextTemplate: FlowTextTemplate;
	FlowVariable: FlowVariable;
	FlowWaitEvent: FlowWaitEvent;
	FlowCategory: FlowCategory;
	FlowDefinition: FlowDefinition;
	FlowSettings: FlowSettings;
	FlowTest: FlowTest;
	Folder: Folder;
	DashboardFolder: DashboardFolder;
	DocumentFolder: DocumentFolder;
	EmailFolder: EmailFolder;
	EmailTemplateFolder: EmailTemplateFolder;
	ReportFolder: ReportFolder;
	ForecastingFilter: ForecastingFilter;
	ForecastingFilterCondition: ForecastingFilterCondition;
	ForecastingGroup: ForecastingGroup;
	ForecastingObjectListSettings: ForecastingObjectListSettings;
	ForecastingSettings: ForecastingSettings;
	ForecastingSourceDefinition: ForecastingSourceDefinition;
	ForecastingType: ForecastingType;
	ForecastingTypeSource: ForecastingTypeSource;
	FormulaSettings: FormulaSettings;
	FtestFirstTopLevel: FtestFirstTopLevel;
	FtestSecondTopLevel: FtestSecondTopLevel;
	FuelType: FuelType;
	FuelTypeSustnUom: FuelTypeSustnUom;
	FulfillmentStepType: FulfillmentStepType;
	FunctionReference: FunctionReference;
	FundraisingConfig: FundraisingConfig;
	GatewayProviderPaymentMethodType: GatewayProviderPaymentMethodType;
	GenAiFunction: GenAiFunction;
	GenAiPlanner: GenAiPlanner;
	GenAiPluginInstructionDef: GenAiPluginInstructionDef;
	GenAiPlugin: GenAiPlugin;
	GenAiPromptTemplate: GenAiPromptTemplate;
	GenAiPromptTemplateActv: GenAiPromptTemplateActv;
	GlobalPicklist: GlobalPicklist;
	GlobalValueSet: GlobalValueSet;
	GlobalValueSetTranslation: GlobalValueSetTranslation;
	GoogleAppsSettings: GoogleAppsSettings;
	Group: Group;
	HerokuIntegrationSettings: HerokuIntegrationSettings;
	HighVelocitySalesSettings: HighVelocitySalesSettings;
	HomePageComponent: HomePageComponent;
	HomePageLayout: HomePageLayout;
	IPAddressRange: IPAddressRange;
	Icon: Icon;
	IdeasSettings: IdeasSettings;
	IdentityProviderSettings: IdentityProviderSettings;
	IdentityVerificationProcDef: IdentityVerificationProcDef;
	IdentityVerificationProcDtl: IdentityVerificationProcDtl;
	IdentityVerificationProcFld: IdentityVerificationProcFld;
	IframeWhiteListUrlSettings: IframeWhiteListUrlSettings;
	InboundNetworkConnection: InboundNetworkConnection;
	IncidentMgmtSettings: IncidentMgmtSettings;
	IndustriesAutomotiveSettings: IndustriesAutomotiveSettings;
	IndustriesChannelPartnerInventorySettings: IndustriesChannelPartnerInventorySettings;
	IndustriesEinsteinFeatureSettings: IndustriesEinsteinFeatureSettings;
	IndustriesEventOrchSettings: IndustriesEventOrchSettings;
	IndustriesFieldServiceSettings: IndustriesFieldServiceSettings;
	IndustriesManufacturingSettings: IndustriesManufacturingSettings;
	IndustriesSettings: IndustriesSettings;
	InsPlcyCoverageSpecConfig: InsPlcyCoverageSpecConfig;
	InsPlcyLineOfBusConfig: InsPlcyLineOfBusConfig;
	InsPolicyLifecycleConfig: InsPolicyLifecycleConfig;
	InsPolicyManagementConfig: InsPolicyManagementConfig;
	InsRatePlanCmsnConfig: InsRatePlanCmsnConfig;
	InsRatePlanTypeConfig: InsRatePlanTypeConfig;
	InstalledPackage: InstalledPackage;
	IntegrationProviderDef: IntegrationProviderDef;
	InternalDataConnector: InternalDataConnector;
	InternalOrganization: InternalOrganization;
	InventoryReplenishmentSettings: InventoryReplenishmentSettings;
	InventorySettings: InventorySettings;
	InvocableActionSettings: InvocableActionSettings;
	IoTSettings: IoTSettings;
	KeywordList: KeywordList;
	KnowledgeSettings: KnowledgeSettings;
	LaborCostOptimizationSettings: LaborCostOptimizationSettings;
	LanguageSettings: LanguageSettings;
	Layout: Layout;
	LeadConfigSettings: LeadConfigSettings;
	LeadConvertSettings: LeadConvertSettings;
	LearningItemType: LearningItemType;
	Letterhead: Letterhead;
	LicenseDefinition: LicenseDefinition;
	LicensingSettings: LicensingSettings;
	LifeSciConfigCategory: LifeSciConfigCategory;
	LifeSciConfigRecord: LifeSciConfigRecord;
	LightningBolt: LightningBolt;
	LightningComponentBundle: LightningComponentBundle;
	LightningExperienceSettings: LightningExperienceSettings;
	LightningExperienceTheme: LightningExperienceTheme;
	LightningMessageChannel: LightningMessageChannel;
	LightningOnboardingConfig: LightningOnboardingConfig;
	LightningTypeBundle: LightningTypeBundle;
	LiveAgentSettings: LiveAgentSettings;
	LiveChatAgentConfig: LiveChatAgentConfig;
	LiveChatButton: LiveChatButton;
	LiveChatDeployment: LiveChatDeployment;
	LiveChatSensitiveDataRule: LiveChatSensitiveDataRule;
	LiveMessageSettings: LiveMessageSettings;
	LocationUse: LocationUse;
	LoyaltyProgramSetup: LoyaltyProgramSetup;
	MLDataDefinition: MLDataDefinition;
	MLGenerativeDefinition: MLGenerativeDefinition;
	MLPredictionDefinition: MLPredictionDefinition;
	MLRecommendationDefinition: MLRecommendationDefinition;
	MacroSettings: MacroSettings;
	ManagedContentType: ManagedContentType;
	ManagedContentTypeBundle: ManagedContentTypeBundle;
	ManagedEventSubscription: ManagedEventSubscription;
	ManagedTopic: ManagedTopic;
	ManagedTopics: ManagedTopics;
	MarketAudienceDefinition: MarketAudienceDefinition;
	MarketSegmentDefinition: MarketSegmentDefinition;
	MarketingAppExtActivity: MarketingAppExtActivity;
	MarketingAppExtension: MarketingAppExtension;
	MatchingRule: MatchingRule;
	MatchingRules: MatchingRules;
	MeetingsSettings: MeetingsSettings;
	MessagingChannel: MessagingChannel;
	MetadataGroup: MetadataGroup;
	MfgProgramTemplate: MfgProgramTemplate;
	MfgServiceConsoleSettings: MfgServiceConsoleSettings;
	MilestoneType: MilestoneType;
	MktCalcInsightObjectDef: MktCalcInsightObjectDef;
	MktDataConnection: MktDataConnection;
	MktDataConnectionCred: MktDataConnectionCred;
	MktDataConnectionParam: MktDataConnectionParam;
	MktDataTranField: MktDataTranField;
	MktDataTranObject: MktDataTranObject;
	MktDatalakeSrcKeyQualifier: MktDatalakeSrcKeyQualifier;
	MlDomain: MlDomain;
	MlModelArtifact: MlModelArtifact;
	MlModelConnection: MlModelConnection;
	MlModelSchema: MlModelSchema;
	MobileApplicationDetail: MobileApplicationDetail;
	MobileSettings: MobileSettings;
	ModerationRule: ModerationRule;
	Module: Module;
	MyDomainDiscoverableLogin: MyDomainDiscoverableLogin;
	MyDomainSettings: MyDomainSettings;
	NameSettings: NameSettings;
	NamedCredential: NamedCredential;
	NavigationMenu: NavigationMenu;
	Network: Network;
	NotificationTypeConfig: NotificationTypeConfig;
	NotificationsSettings: NotificationsSettings;
	OauthCustomScope: OauthCustomScope;
	OauthOidcSettings: OauthOidcSettings;
	OauthTokenExchangeHandler: OauthTokenExchangeHandler;
	ObjectHierarchyRelationship: ObjectHierarchyRelationship;
	ObjectLinkingSettings: ObjectLinkingSettings;
	ObjectSourceTargetMap: ObjectSourceTargetMap;
	OcrSampleDocument: OcrSampleDocument;
	OcrTemplate: OcrTemplate;
	OmniChannelPricingSettings: OmniChannelPricingSettings;
	OmniChannelSettings: OmniChannelSettings;
	OmniDataTransform: OmniDataTransform;
	OmniExtTrackingDef: OmniExtTrackingDef;
	OmniExtTrackingEventDef: OmniExtTrackingEventDef;
	OmniIntegrationProcedure: OmniIntegrationProcedure;
	OmniInteractionAccessConfig: OmniInteractionAccessConfig;
	OmniInteractionConfig: OmniInteractionConfig;
	OmniScript: OmniScript;
	OmniStudioSettings: OmniStudioSettings;
	OmniSupervisorConfig: OmniSupervisorConfig;
	OmniTrackingComponentDef: OmniTrackingComponentDef;
	OmniTrackingGroup: OmniTrackingGroup;
	OmniUiCard: OmniUiCard;
	OpportunityScoreSettings: OpportunityScoreSettings;
	OpportunitySettings: OpportunitySettings;
	OrchestrationContext: OrchestrationContext;
	OrderManagementSettings: OrderManagementSettings;
	OrderSettings: OrderSettings;
	OutboundNetworkConnection: OutboundNetworkConnection;
	Package: Package;
	PardotEinsteinSettings: PardotEinsteinSettings;
	PardotSettings: PardotSettings;
	ParticipantRole: ParticipantRole;
	PartyDataModelSettings: PartyDataModelSettings;
	PathAssistant: PathAssistant;
	PathAssistantSettings: PathAssistantSettings;
	PaymentGatewayProvider: PaymentGatewayProvider;
	PaymentsSettings: PaymentsSettings;
	PermissionSet: PermissionSet;
	MutingPermissionSet: MutingPermissionSet;
	PermissionSetGroup: PermissionSetGroup;
	PermissionSetLicenseDefinition: PermissionSetLicenseDefinition;
	PersonAccountOwnerPowerUser: PersonAccountOwnerPowerUser;
	PicklistSettings: PicklistSettings;
	PlatformCachePartition: PlatformCachePartition;
	PlatformEncryptionSettings: PlatformEncryptionSettings;
	PlatformEventChannel: PlatformEventChannel;
	PlatformEventChannelMember: PlatformEventChannelMember;
	PlatformLicenseDefinition: PlatformLicenseDefinition;
	Portal: Portal;
	PortalsSettings: PortalsSettings;
	PostTemplate: PostTemplate;
	PredictionBuilderSettings: PredictionBuilderSettings;
	PresenceDeclineReason: PresenceDeclineReason;
	PresenceUserConfig: PresenceUserConfig;
	PriceRule: PriceRule;
	PriceSheetDefinition: PriceSheetDefinition;
	PricingActionParameters: PricingActionParameters;
	PricingRecipe: PricingRecipe;
	PrivacySettings: PrivacySettings;
	ProcedureOutputResolution: ProcedureOutputResolution;
	ProcessFlowMigration: ProcessFlowMigration;
	ProductAttrDisplayConfig: ProductAttrDisplayConfig;
	ProductAttributeSet: ProductAttributeSet;
	ProductDiscoverySettings: ProductDiscoverySettings;
	ProductFamilyUsage: ProductFamilyUsage;
	ProductSettings: ProductSettings;
	ProductSpecificationRecType: ProductSpecificationRecType;
	ProductSpecificationType: ProductSpecificationType;
	Profile: Profile;
	ProfilePasswordPolicy: ProfilePasswordPolicy;
	ProfileSessionSetting: ProfileSessionSetting;
	Prompt: Prompt;
	PublicKeyCertificate: PublicKeyCertificate;
	PublicKeyCertificateSet: PublicKeyCertificateSet;
	Queue: Queue;
	QueueRoutingConfig: QueueRoutingConfig;
	QuickAction: QuickAction;
	QuickTextSettings: QuickTextSettings;
	QuoteSettings: QuoteSettings;
	RealTimeEventSettings: RealTimeEventSettings;
	RecommendationBuilderSettings: RecommendationBuilderSettings;
	RecommendationStrategy: RecommendationStrategy;
	StrategyNodeUnionBase: StrategyNodeUnionBase;
	StrategyNodeAiSort: StrategyNodeAiSort;
	StrategyNodeExclusive: StrategyNodeExclusive;
	StrategyNodeFilter: StrategyNodeFilter;
	StrategyNodeIf: StrategyNodeIf;
	StrategyNodeInvocableAction: StrategyNodeInvocableAction;
	StrategyNodeMap: StrategyNodeMap;
	StrategyNodeRecommendationLimit: StrategyNodeRecommendationLimit;
	StrategyNodeRecommendationLoad: StrategyNodeRecommendationLoad;
	StrategyNodeSort: StrategyNodeSort;
	StrategyNodeUnion: StrategyNodeUnion;
	RecordActionDeployment: RecordActionDeployment;
	RecordAggregationDefinition: RecordAggregationDefinition;
	RecordAlertCategory: RecordAlertCategory;
	RecordPageSettings: RecordPageSettings;
	RedirectWhitelistUrl: RedirectWhitelistUrl;
	ReferencedDashboard: ReferencedDashboard;
	RelationshipGraphDefinition: RelationshipGraphDefinition;
	RemoteSiteSetting: RemoteSiteSetting;
	Report: Report;
	ReportType: ReportType;
	RestrictionRule: RestrictionRule;
	RetailExecutionSettings: RetailExecutionSettings;
	RetrievalSummaryDefinition: RetrievalSummaryDefinition;
	RoleOrTerritory: RoleOrTerritory;
	Role: Role;
	Territory: Territory;
	RuleLibraryDefinition: RuleLibraryDefinition;
	SalesAgreementSettings: SalesAgreementSettings;
	SalesWorkQueueSettings: SalesWorkQueueSettings;
	SamlSsoConfig: SamlSsoConfig;
	SchemaDefinition: SchemaDefinition;
	SchemaSettings: SchemaSettings;
	ScoreCategory: ScoreCategory;
	SearchCriteriaConfiguration: SearchCriteriaConfiguration;
	SearchCustomization: SearchCustomization;
	SearchOrgWideObjectConfig: SearchOrgWideObjectConfig;
	SearchResultActionConfig: SearchResultActionConfig;
	SearchSettings: SearchSettings;
	SearchableObjDataSyncInfo: SearchableObjDataSyncInfo;
	SecuritySettings: SecuritySettings;
	ServiceAISetupDefinition: ServiceAISetupDefinition;
	ServiceAISetupField: ServiceAISetupField;
	ServiceChannel: ServiceChannel;
	ServiceCloudVoiceSettings: ServiceCloudVoiceSettings;
	ServicePresenceStatus: ServicePresenceStatus;
	ServiceProcess: ServiceProcess;
	ServiceSetupAssistantSettings: ServiceSetupAssistantSettings;
	SharingBaseRule: SharingBaseRule;
	SharingCriteriaRule: SharingCriteriaRule;
	SharingGuestRule: SharingGuestRule;
	SharingOwnerRule: SharingOwnerRule;
	SharingTerritoryRule: SharingTerritoryRule;
	SharingRules: SharingRules;
	SharingSet: SharingSet;
	SharingSettings: SharingSettings;
	SiteSettings: SiteSettings;
	Skill: Skill;
	SkillType: SkillType;
	SlackRecordLayout: SlackRecordLayout;
	SocialCustomerServiceSettings: SocialCustomerServiceSettings;
	StageDefinition: StageDefinition;
	StandardValueSet: StandardValueSet;
	StandardValueSetTranslation: StandardValueSetTranslation;
	StnryAssetEnvSrcCnfg: StnryAssetEnvSrcCnfg;
	StreamingAppDataConnector: StreamingAppDataConnector;
	SubscriptionManagementSettings: SubscriptionManagementSettings;
	SurveySettings: SurveySettings;
	SustainabilityUom: SustainabilityUom;
	SustnUomConversion: SustnUomConversion;
	SvcCatalogCategory: SvcCatalogCategory;
	SvcCatalogFilterCriteria: SvcCatalogFilterCriteria;
	SvcCatalogFulfillmentFlow: SvcCatalogFulfillmentFlow;
	SvcCatalogItemDef: SvcCatalogItemDef;
	SynonymDictionary: SynonymDictionary;
	SystemNotificationSettings: SystemNotificationSettings;
	Territory2: Territory2;
	Territory2Model: Territory2Model;
	Territory2Rule: Territory2Rule;
	Territory2Settings: Territory2Settings;
	Territory2Type: Territory2Type;
	TimeSheetTemplate: TimeSheetTemplate;
	TimelineObjectDefinition: TimelineObjectDefinition;
	TopicsForObjects: TopicsForObjects;
	TrailheadSettings: TrailheadSettings;
	TransactionProcessingType: TransactionProcessingType;
	TransactionSecurityPolicy: TransactionSecurityPolicy;
	Translations: Translations;
	TrialOrgSettings: TrialOrgSettings;
	UIObjectRelationConfig: UIObjectRelationConfig;
	UiFormatSpecificationSet: UiFormatSpecificationSet;
	UnifiedApplication: UnifiedApplication;
	UserAccessPolicy: UserAccessPolicy;
	UserCriteria: UserCriteria;
	UserEngagementSettings: UserEngagementSettings;
	UserInterfaceSettings: UserInterfaceSettings;
	UserLicenseDefinition: UserLicenseDefinition;
	UserManagementSettings: UserManagementSettings;
	UserProvisioningConfig: UserProvisioningConfig;
	VehicleAssetEmssnSrcCnfg: VehicleAssetEmssnSrcCnfg;
	VisualizationPlugin: VisualizationPlugin;
	VoiceSettings: VoiceSettings;
	WarrantyLifecycleMgmtSettings: WarrantyLifecycleMgmtSettings;
	WaveAnalyticAssetCollection: WaveAnalyticAssetCollection;
	WaveApplication: WaveApplication;
	WaveDataset: WaveDataset;
	WaveTemplateBundle: WaveTemplateBundle;
	WaveTemplateDetailsMetadata: WaveTemplateDetailsMetadata;
	WaveTemplateExternalDataMetadata: WaveTemplateExternalDataMetadata;
	WaveTemplateLensDashboardMetadata: WaveTemplateLensDashboardMetadata;
	WaveXmd: WaveXmd;
	WebStoreBundle: WebStoreBundle;
	WebStoreTemplate: WebStoreTemplate;
	WebToXSettings: WebToXSettings;
	WindowsPushApplicationSetup: WindowsPushApplicationSetup;
	WorkDotComSettings: WorkDotComSettings;
	WorkSkillRouting: WorkSkillRouting;
	Workflow: Workflow;
	WorkflowAction: WorkflowAction;
	WorkflowFieldUpdate: WorkflowFieldUpdate;
	WorkflowFlowAction: WorkflowFlowAction;
	WorkflowFlowAutomation: WorkflowFlowAutomation;
	WorkflowKnowledgePublish: WorkflowKnowledgePublish;
	WorkflowOutboundMessage: WorkflowOutboundMessage;
	WorkflowSend: WorkflowSend;
	WorkflowTask: WorkflowTask;
	WorkflowRule: WorkflowRule;
	BatchCalcJobAggregate: BatchCalcJobAggregate;
	DigitalExperience: DigitalExperience;
	FlowNode: FlowNode;
	FlowApexPluginCall: FlowApexPluginCall;
	FlowAssignment: FlowAssignment;
	FlowCollectionProcessor: FlowCollectionProcessor;
	FlowCustomError: FlowCustomError;
	FlowDecision: FlowDecision;
	FlowExperiment: FlowExperiment;
	FlowLoop: FlowLoop;
	FlowOrchestratedStage: FlowOrchestratedStage;
	FlowRecordCreate: FlowRecordCreate;
	FlowRecordDelete: FlowRecordDelete;
	FlowRecordLookup: FlowRecordLookup;
	FlowRecordRollback: FlowRecordRollback;
	FlowRecordUpdate: FlowRecordUpdate;
	FlowScreen: FlowScreen;
	FlowStart: FlowStart;
	FlowStep: FlowStep;
	FlowSubflow: FlowSubflow;
	FlowTransform: FlowTransform;
	FlowWait: FlowWait;
	StrategyNodeAiLoad: StrategyNodeAiLoad;
	WorkflowAlert: WorkflowAlert;
	FlowActionCall: FlowActionCall;
}
